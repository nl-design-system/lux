const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-7A1Cj1gc.js","./iframe-DVJB8KU2.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./react-18-BEw2RJX7.js","./index-B63kQkss.js","./index-CbVplE-E.js","./index-DLlB04eo.js","./index-DtSuK_9N.js","./index-BdOSk9or.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-DVJB8KU2.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-PKQXORMH-7A1Cj1gc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
