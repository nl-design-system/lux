const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-mZlR4TmE.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-D1rdpaX4.js","./index-B63kQkss.js","./index-DLlB04eo.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-yVeFn0oZ.js","./createVisualRegressionStory-CMDMpfq0.js","./color-tokens-bkSGqPAp.js","./focus-tokens-2BRuxZKf.js","./font-tokens-BnDxaXtw.js","./grid-tokens-D_osY3wS.js","./sizing-tokens-S53Hp9G_.js","./community-components-BHVezDMU.js","./border-tokens-FKhXw4nJ.js","./color-tokens-Dz-vKqFs.js","./font-tokens-CZYo0UGx.js","./spacing-tokens-L7FGVFiJ.js","./design-tokens-BTuGngrQ.js","./community-component-aanleveren-CXJbpny8.js","./versioning--lvuXvUU.js","./introduction-WI7Gy74D.js","./license-D-56jCPB.js","./notice-sJtHcTFW.js","./alert-BjvjGEq6.js","./alert.stories-a14XwTuG.js","./components-DtBZFJGV.js","./CitationDocumentation-B3Shsstx.js","./button-B06f-3vK.js","./button.stories-bYLG5bTM.js","./index-DbgQBs_-.js","./document.stories-BacSx4yF.js","./link-C9BwVUgw.js","./link.stories-DZddGVrM.js","./inlogstraat-BzRCyIOO.js","./login-link-themes-BCbsWu9m.js","./login-link.stories-OHT6DZG4.js","./login-link-y8a-wXsP.js","./paragraph-CFGwYqn5.js","./paragraph.stories-BiL0R6Ch.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DWxPY2Kg.js","./preview-SEKNTUW-.js","./preview-DydABuSB.css"])))=>i.map(i=>d[i]);
import "../sb-preview/runtime.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
          link.crossOrigin = "";
        }
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const { createBrowserChannel } = __STORYBOOK_MODULE_CHANNELS__;
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const channel = createBrowserChannel({ page: "preview" });
addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
if (window.CONFIG_TYPE === "DEVELOPMENT") {
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}
const importers = {
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-mZlR4TmE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-bkSGqPAp.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-2BRuxZKf.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BnDxaXtw.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-D_osY3wS.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-S53Hp9G_.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-BHVezDMU.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-FKhXw4nJ.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-Dz-vKqFs.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-CZYo0UGx.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-L7FGVFiJ.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-BTuGngrQ.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-CXJbpny8.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning--lvuXvUU.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-WI7Gy74D.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-D-56jCPB.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-sJtHcTFW.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BjvjGEq6.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,11,31]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-a14XwTuG.js").then((n) => n.A), true ? __vite__mapDeps([29,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-B06f-3vK.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,33,30,11,34,31]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-bYLG5bTM.js").then((n) => n.B), true ? __vite__mapDeps([33,1,2,3,30,11,34]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-BacSx4yF.js"), true ? __vite__mapDeps([35,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-C9BwVUgw.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,30,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-DZddGVrM.js").then((n) => n.L), true ? __vite__mapDeps([37,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BzRCyIOO.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-BCbsWu9m.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,40,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-y8a-wXsP.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,40,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-OHT6DZG4.js").then((n) => n.L), true ? __vite__mapDeps([40,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CFGwYqn5.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,30,11,31]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BiL0R6Ch.js").then((n) => n.P), true ? __vite__mapDeps([43,1,2,3,30,11]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([44,2,3,45,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([46,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-CE89lg3N.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([47,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-I3P6546l.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([48,34]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DWxPY2Kg.js"), true ? __vite__mapDeps([49,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-SEKNTUW-.js").then((n) => n.p), true ? __vite__mapDeps([50,2,3,51]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
