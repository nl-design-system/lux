import { mkdir, readdir, readFile, writeFile, stat, cp } from 'node:fs/promises';
import path from 'path';
import { transform } from '@svgr/core';
import { toKebabCase } from "@std/text/to-kebab-case";
import { toPascalCase } from "@std/text/to-pascal-case";
import { luxTemplate } from '../src/templates/svgrTemplate.mjs';

import { IMPORTED_SRC_FOLDER, DIST_FOLDER, REACT_ICONS_FOLDER } from './constants.mjs';

const svgrConfig = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'/*, '@svgr/plugin-prettier'*/],
  icon: true,
  template: luxTemplate,
  typescript: true,
  jsxRuntime: 'automatic',
  // ref: true,
};

const cleanFileName = fileName => fileName
  .replaceAll(/(svg|zwart|\(|\))/gi, '')
  .replaceAll(/\d{4}/gi, 'bzk')
  .replaceAll(/\d+px/gi, 'inline');

export const buildIcons = async () => {
  console.info('Building Icons');

  const dir = IMPORTED_SRC_FOLDER;
  const out = REACT_ICONS_FOLDER;
  let files = await readdir(dir);

  // TODO: check if exists
  await mkdir(path.join(out), { recursive: true }).then(() => {
    console.info(`Folder ${out} created.`);
  })

  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const iconName = `Icon${toPascalCase(cleanFileName(file))}`;
      const iconId = toKebabCase(cleanFileName(file));
      const fileName = `${iconName}.tsx`;

      // console.log(file, iconName, iconId, path.join(dir, `${iconName}.tsx`));

      const svgCode = await readFile(filePath);

      const jsCode = await transform(
        svgCode,
        {...svgrConfig, svgProps: { 'data-icon-name': iconId }},
        { componentName: iconName },
      );

      await writeFile(path.join(out, fileName), jsCode, ).then(() => {
        console.info(`Icon ${iconName} created.`);
      });

      return {
        iconName,
        iconId,
        fileName,
      };
    }),
  );

  const barrelCode = files.map(({
    iconName,
    iconId,
    fileName,
  }) => `export { default as ${iconName} } from './${iconName}'; // ${iconId} 
`);

  await writeFile(path.join(out, 'index.tsx'), barrelCode, ).then(() => {
    console.info(`Icons directory file created.`);
  });


  // console.log(barrelCode);
};
