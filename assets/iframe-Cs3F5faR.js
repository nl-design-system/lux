const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-D2FwEgRt.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-SORyYYKz.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-39DVLGYA.js","./focus-tokens-C-GAVyGP.js","./font-tokens-YpbVE2Lk.js","./grid-tokens-C6zaDRsI.js","./sizing-tokens-D6x8KN5_.js","./community-components-MpONQKnN.js","./border-tokens-B2LEJ1k4.js","./color-tokens-DnYsphPe.js","./font-tokens-Ckbd7dnQ.js","./spacing-tokens-CwLiEBiV.js","./design-tokens-BgcjxG9e.js","./community-component-aanleveren-Bo2Si9kk.js","./versioning-DexXpRxF.js","./introduction-C-V4SqwO.js","./license-CnbcOnhO.js","./notice-ys6EEjwp.js","./alert-AIeCj740.js","./README-i1AxuvIj.js","./alert.stories-CNaFlTvJ.js","./index-DEzLU02N.js","./index-BLZ711uc.js","./CitationDocumentation-B3Shsstx.js","./button-PGEEA6Ye.js","./README-8lw3oO5y.js","./button.stories-D26ygH6o.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-Dka2VnGl.js","./checkbox.stories-B8J8Dv3S.js","./document-DrS1gJN5.js","./document.stories-DG2lABUG.js","./form-field-description-Bp4i3dFL.js","./form-field-description.stories-yU7OA5B9.js","./preview-CNHN1eG-.js","./preview-DW2H1HJD.css","./form-field-error-message-DLuvLUH6.js","./form-field-error-message.stories-CUgLuiYK.js","./form-field-label-C2Qqqcul.js","./form-field-label.stories-BHldQw80.js","./form-field-radio-group-CUGgn-s6.js","./form-field-radio-group.stories-C-0YvL2m.js","./form-field-radio-option-C9l7-9TA.js","./form-field-radio-option.stories-Dv-rO3hR.js","./form-field-select-B5inS1ug.js","./form-field-select.stories-CZ42-43S.js","./select.stories-CNTeNn6Q.js","./form-field-textbox-DwptyPlU.js","./form-field-textbox.stories-DpleTbDq.js","./textbox.stories-4t9QSdU2.js","./form-field-m7-dnOCc.js","./index-cEa3Pm8r.js","./form-field.stories-CHuuUsY2.js","./heading-group-CFSnnIvp.js","./heading-group.stories-CnOu_Gio.js","./heading-CXYU8z8v.js","./heading.stories-CiHs_27o.js","./link-CTseVFG0.js","./README-CSNxhwJ5.js","./link.stories-BMrhDLmN.js","./paragraph-DGbwo2gv.js","./paragraph.stories-Do4u3yux.js","./pre-heading-TijzO4C2.js","./pre-heading.stories-ro5X3pJs.js","./section-B2YiQrld.js","./section.stories-CibLOovg.js","./select-BmRaAYCT.js","./textbox-D-iCVAzk.js","./alert-C5TacWyC.js","./alert.stories-DtFtqMG0.js","./components-Cp22cNJ4.js","./button-CL6dUkuD.js","./button.stories-Cla13ruH.js","./index-DbgQBs_-.js","./document.stories-Dd3Ck1Wg.js","./link-DcYZ71HI.js","./link.stories-BYB9WVwU.js","./inlogstraat-BF0nNKFK.js","./login-link-themes-B_Z2Yk4U.js","./login-link.stories-Dage0K5g.js","./login-link-Dzl-UX-0.js","./paragraph-DveTPH-5.js","./paragraph.stories-BOb511GI.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-D2FwEgRt.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-39DVLGYA.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-C-GAVyGP.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-YpbVE2Lk.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-C6zaDRsI.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-D6x8KN5_.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-MpONQKnN.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-B2LEJ1k4.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-DnYsphPe.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-Ckbd7dnQ.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-CwLiEBiV.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-BgcjxG9e.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-Bo2Si9kk.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-DexXpRxF.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-C-V4SqwO.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-CnbcOnhO.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-ys6EEjwp.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-AIeCj740.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-CNaFlTvJ.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-PGEEA6Ye.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,36,31,32,37,11,33]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D26ygH6o.js").then((n) => n.B), true ? __vite__mapDeps([36,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-Dka2VnGl.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-B8J8Dv3S.js").then((n) => n.C), true ? __vite__mapDeps([39,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-DrS1gJN5.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DG2lABUG.js").then((n) => n.D), true ? __vite__mapDeps([41,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-Bp4i3dFL.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-yU7OA5B9.js").then((n) => n.F), true ? __vite__mapDeps([43,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-DLuvLUH6.js"), true ? __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,47,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-CUgLuiYK.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-C2Qqqcul.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-BHldQw80.js").then((n) => n.F), true ? __vite__mapDeps([49,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-CUGgn-s6.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-C-0YvL2m.js").then((n) => n.R), true ? __vite__mapDeps([51,1,2,3,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-C9l7-9TA.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-Dv-rO3hR.js").then((n) => n.F), true ? __vite__mapDeps([53,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-B5inS1ug.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,44,45,43,47,56]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-CZ42-43S.js").then((n) => n.F), true ? __vite__mapDeps([55,31,2,3,32,44,1,45,43,47,56]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-DwptyPlU.js"), true ? __vite__mapDeps([57,1,2,3,4,5,6,7,8,9,58,31,32,44,45,43,47,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-DpleTbDq.js").then((n) => n.F), true ? __vite__mapDeps([58,31,2,3,32,44,1,45,43,47,59]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-m7-dnOCc.js"), true ? __vite__mapDeps([60,1,2,3,4,61,7,5,6,8,9,62,31,32,44,45,33,58,43,47,59]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-CHuuUsY2.js").then((n) => n.F), true ? __vite__mapDeps([62,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-CFSnnIvp.js"), true ? __vite__mapDeps([63,1,2,3,4,5,6,7,8,9,64,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-CnOu_Gio.js").then((n) => n.H), true ? __vite__mapDeps([64,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CXYU8z8v.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-CiHs_27o.js").then((n) => n.H), true ? __vite__mapDeps([66,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-CTseVFG0.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,69,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BMrhDLmN.js").then((n) => n.L), true ? __vite__mapDeps([69,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DGbwo2gv.js"), true ? __vite__mapDeps([70,1,2,3,4,5,6,7,8,9,71,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-Do4u3yux.js").then((n) => n.P), true ? __vite__mapDeps([71,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-TijzO4C2.js"), true ? __vite__mapDeps([72,1,2,3,4,5,6,7,8,9,73,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-ro5X3pJs.js").then((n) => n.P), true ? __vite__mapDeps([73,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-B2YiQrld.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-CibLOovg.js").then((n) => n.S), true ? __vite__mapDeps([75,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-BmRaAYCT.js"), true ? __vite__mapDeps([76,1,2,3,4,5,6,7,8,9,56,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-CNTeNn6Q.js").then((n) => n.S), true ? __vite__mapDeps([56,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-D-iCVAzk.js"), true ? __vite__mapDeps([77,1,2,3,4,61,7,5,6,8,9,59,31,32,44,45,33,58,43,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-4t9QSdU2.js").then((n) => n.T), true ? __vite__mapDeps([59,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-C5TacWyC.js"), true ? __vite__mapDeps([78,1,2,3,4,5,6,7,8,9,29,79,32,80,37,11,33]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DtFtqMG0.js").then((n) => n.A), true ? __vite__mapDeps([79,1,2,3,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-CL6dUkuD.js"), true ? __vite__mapDeps([81,1,2,3,4,5,6,7,8,9,35,82,32,83,37,11,80,33]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Cla13ruH.js").then((n) => n.B), true ? __vite__mapDeps([82,1,2,3,32,83,37,11,80]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Dd3Ck1Wg.js"), true ? __vite__mapDeps([84,1,2,3,32,37,11,80]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-DcYZ71HI.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,68,86,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BYB9WVwU.js").then((n) => n.L), true ? __vite__mapDeps([86,1,2,3,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BF0nNKFK.js"), true ? __vite__mapDeps([87,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-B_Z2Yk4U.js"), true ? __vite__mapDeps([88,1,2,3,4,5,6,7,8,9,89,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-Dzl-UX-0.js"), true ? __vite__mapDeps([90,1,2,3,4,5,6,7,8,9,89,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Dage0K5g.js").then((n) => n.L), true ? __vite__mapDeps([89,1,2,3,32,80,37,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DveTPH-5.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,32,37,11,80,33]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BOb511GI.js").then((n) => n.P), true ? __vite__mapDeps([92,1,2,3,32,37,11,80]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([93,2,3,94,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([95,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-LeDxVp4j.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([96,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-CAbN47sb.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([97,83]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([98,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-CNHN1eG-.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,31,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
