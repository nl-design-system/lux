import { DIST_FOLDER, COPY_FOLDER } from "./constants.mjs";
import { buildTokens } from "./build-tokens.mjs";
import { addMediaDependentFiles } from './add-media-dependent-files.mjs';

const run = async () => {
  await buildTokens();
  // TODO: LUX-318: Toevoegen van Media-dependent-files met Style Dictionary actions oplossen.
  await addMediaDependentFiles(DIST_FOLDER, COPY_FOLDER);
};

run();
