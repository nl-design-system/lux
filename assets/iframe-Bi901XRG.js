const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-eryA8WwI.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-B27BFIWd.js","./index-B63kQkss.js","./index-DLlB04eo.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-yVeFn0oZ.js","./createVisualRegressionStory-CMDMpfq0.js","./color-tokens-Pj-ma5IO.js","./focus-tokens-CRipMR5W.js","./font-tokens-WQJlG3AR.js","./grid-tokens-n1r3kiR2.js","./sizing-tokens-ClP2z9y5.js","./community-components-T5D35W8P.js","./border-tokens-DerduwjM.js","./color-tokens-DLRAMD4Y.js","./font-tokens-DkoNvSu-.js","./spacing-tokens-BNR-TqBQ.js","./design-tokens-T0hL6ue5.js","./community-component-aanleveren-pS0B8_Tu.js","./versioning-BLq5t76N.js","./introduction-BrgTwaZh.js","./license-BMhGyIgj.js","./notice-jLVto_Ts.js","./alert-CW7QlvUY.js","./alert.stories-DOlRE7CE.js","./components-B-srboQI.js","./CitationDocumentation-B3Shsstx.js","./button-Crkm2jG4.js","./button.stories-C2-jpTHO.js","./index-DbgQBs_-.js","./document.stories-C99Ev6AD.js","./link-DRIxSV4M.js","./link.stories-COAaMSrV.js","./inlogstraat-gfMcnh_u.js","./login-link-themes-B95cgwgs.js","./login-link.stories-uvZaI7sV.js","./login-link-DEo-UM8U.js","./paragraph-BY5LY_D9.js","./paragraph.stories-VwllbN3g.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DWxPY2Kg.js","./preview-BiWV2WXU.js","./preview-rev6sAg4.css"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-eryA8WwI.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-Pj-ma5IO.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-CRipMR5W.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-WQJlG3AR.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-n1r3kiR2.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-ClP2z9y5.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-T5D35W8P.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-DerduwjM.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-DLRAMD4Y.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-DkoNvSu-.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-BNR-TqBQ.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-T0hL6ue5.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-pS0B8_Tu.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-BLq5t76N.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-BrgTwaZh.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-BMhGyIgj.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-jLVto_Ts.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-CW7QlvUY.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,11,31]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DOlRE7CE.js").then((n) => n.A), true ? __vite__mapDeps([29,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-Crkm2jG4.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,33,30,11,34,31]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-C2-jpTHO.js").then((n) => n.B), true ? __vite__mapDeps([33,1,2,3,30,11,34]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-C99Ev6AD.js"), true ? __vite__mapDeps([35,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-DRIxSV4M.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,30,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-COAaMSrV.js").then((n) => n.L), true ? __vite__mapDeps([37,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-gfMcnh_u.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-B95cgwgs.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,40,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-DEo-UM8U.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,40,30,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-uvZaI7sV.js").then((n) => n.L), true ? __vite__mapDeps([40,1,2,3,30,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BY5LY_D9.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,30,11,31]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-VwllbN3g.js").then((n) => n.P), true ? __vite__mapDeps([43,1,2,3,30,11]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([44,2,3,45,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([46,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-BKGsibFr.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([47,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-DB_RpQYd.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([48,34]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DWxPY2Kg.js"), true ? __vite__mapDeps([49,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-BiWV2WXU.js").then((n) => n.p), true ? __vite__mapDeps([50,2,3,51]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
