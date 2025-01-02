import { mkdir, readdir, readFile, writeFile, stat, cp } from 'node:fs/promises';
import path from 'path';
import { transform } from '@svgr/core';
import { toKebabCase } from "@std/text/to-kebab-case";
import { toPascalCase } from "@std/text/to-pascal-case";
import { luxTemplate } from '../src/templates/svgrTemplate.mjs';

import { IMPORTED_SRC_FOLDER, DIST_FOLDER, REACT_ICONS_FOLDER } from './constants.mjs';

const svgrConfig = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'/*, '@svgr/plugin-prettier'*/],
  svgoConfig: {
    plugins: [{
      name: 'preset-default',
      params: {
        overrides: {
          convertColors: {
            currentColor: true,
          },
        },
      },
    }],
  },
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
  console.info('🏗️  Building Icons');

  const dir = IMPORTED_SRC_FOLDER;
  const out = REACT_ICONS_FOLDER;
  let files = await readdir(dir);

  try {
    await mkdir(path.join(out), { recursive: true }).then(() => {
      console.info(`📁 Folder ${out} created.`);
    })
  } catch (error) {
    console.log(`📂 Folder ${out} already exists.`);
  }

  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const iconName = `Icon${toPascalCase(cleanFileName(file))}`;
      const iconId = toKebabCase(cleanFileName(file));
      const fileName = `${iconName}.tsx`;

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
  }) => `export { default as ${iconName} } from './${iconName}'; // ${iconId} `);

  await writeFile(path.join(out, 'index.tsx'), barrelCode.join("\n"), ).then(() => {
    console.info(`📇 Icons directory file created.`);
  });

  const iconSetMappingProps = files.map(({iconId}) => `  '${iconId}'`);

  const iconSetMappings = files.map(({
    iconId,
    iconName,
  }) => `  '${iconId}': <Icons.${iconName} />,`);

  const iconSetFile = 
`import { ReactNode } from 'react';
import * as Icons from './react-icons';

export const iconIds = [
${iconSetMappingProps.join(",\n")}
] as const;

export type IconIds = typeof iconIds;
export type IconId = IconIds[number]

export const IconSet: Partial<Record<IconId, ReactNode>> = {
${iconSetMappings.join("\n")}
};

// export const IconIds = Object.keys(IconSet);

export default IconSet;
`;

  await writeFile(path.join(DIST_FOLDER, 'index.tsx'), iconSetFile, ).then(() => {
    console.info(`🗃️  Icons set file created.`);
  });

  const mappings = files.map(({
    iconName,
    iconId,
    fileName,
  }) => `    {
      "id": "${iconId}",
      "name": "${iconName}",
      "file": "${fileName}"
    }`);

  const mapFile = `{
  "icons": [
${mappings.join(",\n")}
  ]}
`;
  
await writeFile(path.join(out, 'index.json'), mapFile, ).then(() => {
  console.info(`🗺️  Icons mapping file created.`);
});

console.info(`🚛 Icons ready to ship.`);

};
