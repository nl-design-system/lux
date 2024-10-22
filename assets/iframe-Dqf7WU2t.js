const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens--auiGKWN.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-WQNk2kw8.js","./index-B63kQkss.js","./index-DLlB04eo.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-C4TtpXn7.js","./focus-tokens-N3cOK7eL.js","./font-tokens-DXW6IZHO.js","./grid-tokens-2u7xqF26.js","./sizing-tokens-Dmbw2-RN.js","./community-components-Cb9qiWgq.js","./border-tokens-CHt7HSJH.js","./color-tokens-C7uC3ZdK.js","./font-tokens-BAUsrepi.js","./spacing-tokens-CsIoWBKc.js","./design-tokens-CYKUTul0.js","./community-component-aanleveren-BG4s44X-.js","./versioning-DhqOUX1D.js","./introduction-BR2AZ39a.js","./license-CNDisSoY.js","./notice-Cq_IPOrk.js","./document-DU0P6n4M.js","./document.stories-BZVrukxd.js","./index-B5zvduxx.js","./index-1JBeBqms.js","./createDesignTokensStory-HiB5Jh-Q.js","./heading-D6tiFIfM.js","./heading.stories-CXwXwygk.js","./CitationDocumentation-B3Shsstx.js","./paragraph-BWHxOx7u.js","./paragraph.stories-BsIE1ZLy.js","./alert-BmKwAa6s.js","./alert.stories-CT6uQLSO.js","./components-Cp22cNJ4.js","./button-D9itcWQi.js","./button.stories-BeGLridF.js","./index-DbgQBs_-.js","./document.stories-vIaOgd86.js","./link-D3Ouit2b.js","./link.stories-DkMxZLtg.js","./inlogstraat-DJ-zYHQK.js","./login-link-themes-C6RS3-6Z.js","./login-link.stories-Cquir8dH.js","./login-link-DeizTQ-M.js","./paragraph-DsUgjRav.js","./paragraph.stories-D8P_vWhc.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DWxPY2Kg.js","./preview-D-hbRkO6.js","./preview-C_xF29wK.css"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens--auiGKWN.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-C4TtpXn7.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-N3cOK7eL.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-DXW6IZHO.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-2u7xqF26.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-Dmbw2-RN.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-Cb9qiWgq.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CHt7HSJH.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-C7uC3ZdK.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BAUsrepi.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-CsIoWBKc.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-CYKUTul0.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-BG4s44X-.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-DhqOUX1D.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-BR2AZ39a.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-CNDisSoY.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-Cq_IPOrk.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-DU0P6n4M.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-BZVrukxd.js").then((n) => n.D), true ? __vite__mapDeps([29,1,2,3,30,31,32,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-D6tiFIfM.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34,30,31,35]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-CXwXwygk.js").then((n) => n.H), true ? __vite__mapDeps([34,1,2,3,30,31]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BWHxOx7u.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,30,31,32,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BsIE1ZLy.js").then((n) => n.P), true ? __vite__mapDeps([37,1,2,3,30,31,32,11]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BmKwAa6s.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39,31,40,32,11,35]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-CT6uQLSO.js").then((n) => n.A), true ? __vite__mapDeps([39,1,2,3,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-D9itcWQi.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,42,31,43,32,11,40,35]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-BeGLridF.js").then((n) => n.B), true ? __vite__mapDeps([42,1,2,3,31,43,32,11,40]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-vIaOgd86.js"), true ? __vite__mapDeps([44,1,2,3,31,32,11,40]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-D3Ouit2b.js"), true ? __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,46,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-DkMxZLtg.js").then((n) => n.L), true ? __vite__mapDeps([46,1,2,3,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-DJ-zYHQK.js"), true ? __vite__mapDeps([47,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-C6RS3-6Z.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-DeizTQ-M.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,49,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Cquir8dH.js").then((n) => n.L), true ? __vite__mapDeps([49,1,2,3,31,40,32,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DsUgjRav.js"), true ? __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,52,31,32,11,40,35]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-D8P_vWhc.js").then((n) => n.P), true ? __vite__mapDeps([52,1,2,3,31,32,11,40]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([53,2,3,54,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([55,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-BbkLVuEG.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([56,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-B1x4I28H.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([57,43]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DWxPY2Kg.js"), true ? __vite__mapDeps([58,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-D-hbRkO6.js").then((n) => n.p), true ? __vite__mapDeps([59,1,2,3,30,60]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
