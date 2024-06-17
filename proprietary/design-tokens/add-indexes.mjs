import { readdir, stat, cp } from 'node:fs/promises';
import path from 'path';

const isModeFolder = (file) => ['light', 'dark'].includes(file);
const isProjectFolder = (file) => !isModeFolder(file); // && !['nldoc'].includes(file);

/**
 * Loops recursive through project folders and adds index files to them.
 * @param {string} dir Directory to add index files to
 * @param {string} copydir Directory to copy the index files from
 */
export async function addIndexes(dir, copydir) {
  let files = await readdir(dir);

  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        if (isProjectFolder(file)) {
          await cp(copydir, filePath, { recursive: true }).then(() => {
            console.info(`Added indexes to ${filePath}.`);
          });

          return addIndexes(filePath, copydir);
        }
      }

      return;
    }),
  );
}
