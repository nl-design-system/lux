const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-CpYBWwGW.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-ByVnuuVj.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-CH32tmOf.js","./focus-tokens-DubNwNgI.js","./font-tokens-BLRXycda.js","./grid-tokens-DpM0XAk3.js","./sizing-tokens-68lcgGAR.js","./community-components-BKm6rW_D.js","./border-tokens-eRNiwlpj.js","./color-tokens-rCZ7m_ME.js","./font-tokens-CJv_bQPe.js","./spacing-tokens-Cc6AG11r.js","./design-tokens-Dj4tdmWv.js","./community-component-aanleveren-BpuAB0Ss.js","./versioning-BQeFsBBb.js","./introduction-CpgAkaC8.js","./license-OH8npTue.js","./notice-ym2xzwoL.js","./alert-LJ-BRXIt.js","./README-i1AxuvIj.js","./alert.stories-DDrLrGjX.js","./index-BUBcJN2s.js","./index-BLZ711uc.js","./CitationDocumentation-B3Shsstx.js","./button-CFGc5tk5.js","./README-8lw3oO5y.js","./button.stories-DUbyvofd.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-9tBN1Ufs.js","./checkbox.stories-BTqYUMuE.js","./document-kPtKLgQT.js","./document.stories-D5UkGt_B.js","./form-field-checkbox-Craxy47M.js","./form-field-checkbox.stories-9Lb2YOQD.js","./preview-DfeefDPx.js","./preview-DaNpzmJ_.css","./form-field-description.stories-DpYe2DZz.js","./form-field-error-message.stories-D-NS8LdS.js","./form-field-description-haNPYNnn.js","./form-field-error-message-ClAvJw1I.js","./form-field-label-CeYZ09kN.js","./form-field-label.stories-DBJkACB5.js","./form-field-radio-group-CspClZUu.js","./form-field-radio-group.stories-CFAFOrZO.js","./form-field-radio-option-BsUVozc7.js","./form-field-radio-option.stories-D8FLGoKm.js","./form-field-select-C6YUfzI3.js","./form-field-select.stories-fiVk2qLg.js","./select.stories-Bpt8Oob4.js","./form-field-textbox-Bh6AuEH-.js","./form-field-textbox.stories-5hU0cT6N.js","./textbox.stories-Bv6_7D6E.js","./form-field-Cff98e_O.js","./index-cEa3Pm8r.js","./form-field.stories-CHSgg3jd.js","./heading-group-DRzudQJT.js","./heading-group.stories-B3Je8_ei.js","./heading-CrSRwNKh.js","./heading.stories-HtTsWI7b.js","./icon-BK9SBxP-.js","./icon.stories-BRicwfIX.js","./link-CyU377gN.js","./README-CSNxhwJ5.js","./link.stories-CsiATMTE.js","./paragraph-B-F7C7vE.js","./paragraph.stories-CpJVXL6D.js","./pre-heading-C9u0mYVO.js","./pre-heading.stories-b5b6owMB.js","./section-Di04mV-P.js","./section.stories-NLtslUWA.js","./select-BVwxcxI_.js","./textbox-DHtb8fop.js","./alert-Co78cePa.js","./alert.stories-DtFtqMG0.js","./components-Cp22cNJ4.js","./button-C7Bz9beD.js","./button.stories-Cla13ruH.js","./index-DbgQBs_-.js","./document.stories-Dd3Ck1Wg.js","./link-Bf3RSzT0.js","./link.stories-BYB9WVwU.js","./inlogstraat-DC7z-DWO.js","./login-link-themes-D0ECwwIL.js","./login-link.stories-Dage0K5g.js","./login-link-BwgPB0li.js","./paragraph-ncdRTQ5v.js","./paragraph.stories-BOb511GI.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CpYBWwGW.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CH32tmOf.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-DubNwNgI.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BLRXycda.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-DpM0XAk3.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-68lcgGAR.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-BKm6rW_D.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-eRNiwlpj.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-rCZ7m_ME.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-CJv_bQPe.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-Cc6AG11r.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-Dj4tdmWv.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-BpuAB0Ss.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-BQeFsBBb.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-CpgAkaC8.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-OH8npTue.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-ym2xzwoL.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-LJ-BRXIt.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DDrLrGjX.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-CFGc5tk5.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,36,31,32,37,11,33]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-DUbyvofd.js").then((n) => n.B), true ? __vite__mapDeps([36,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-9tBN1Ufs.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BTqYUMuE.js").then((n) => n.C), true ? __vite__mapDeps([39,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-kPtKLgQT.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-D5UkGt_B.js").then((n) => n.D), true ? __vite__mapDeps([41,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-Craxy47M.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,44,45,39,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-9Lb2YOQD.js").then((n) => n.F), true ? __vite__mapDeps([43,31,2,3,32,44,1,45,39,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-haNPYNnn.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,46,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-DpYe2DZz.js").then((n) => n.F), true ? __vite__mapDeps([46,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-ClAvJw1I.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,47,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-D-NS8LdS.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-CeYZ09kN.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-DBJkACB5.js").then((n) => n.F), true ? __vite__mapDeps([51,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-CspClZUu.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-CFAFOrZO.js").then((n) => n.R), true ? __vite__mapDeps([53,1,2,3,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-BsUVozc7.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-D8FLGoKm.js").then((n) => n.F), true ? __vite__mapDeps([55,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-C6YUfzI3.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,44,45,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-fiVk2qLg.js").then((n) => n.F), true ? __vite__mapDeps([57,31,2,3,32,44,1,45,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-Bh6AuEH-.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,31,32,44,45,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-5hU0cT6N.js").then((n) => n.F), true ? __vite__mapDeps([60,31,2,3,32,44,1,45,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-Cff98e_O.js"), true ? __vite__mapDeps([62,1,2,3,4,63,7,5,6,8,9,64,31,32,44,45,33,60,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-CHSgg3jd.js").then((n) => n.F), true ? __vite__mapDeps([64,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-DRzudQJT.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-B3Je8_ei.js").then((n) => n.H), true ? __vite__mapDeps([66,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CrSRwNKh.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-HtTsWI7b.js").then((n) => n.H), true ? __vite__mapDeps([68,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-BK9SBxP-.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,31]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-BRicwfIX.js").then((n) => n.I), true ? __vite__mapDeps([70,1,2,3,31]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-CyU377gN.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,73,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-CsiATMTE.js").then((n) => n.L), true ? __vite__mapDeps([73,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-B-F7C7vE.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-CpJVXL6D.js").then((n) => n.P), true ? __vite__mapDeps([75,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-C9u0mYVO.js"), true ? __vite__mapDeps([76,1,2,3,4,5,6,7,8,9,77,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-b5b6owMB.js").then((n) => n.P), true ? __vite__mapDeps([77,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-Di04mV-P.js"), true ? __vite__mapDeps([78,1,2,3,4,5,6,7,8,9,79,31,32,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-NLtslUWA.js").then((n) => n.S), true ? __vite__mapDeps([79,1,2,3,31,32,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-BVwxcxI_.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,58,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-Bpt8Oob4.js").then((n) => n.S), true ? __vite__mapDeps([58,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-DHtb8fop.js"), true ? __vite__mapDeps([81,1,2,3,4,63,7,5,6,8,9,61,31,32,44,45,33,60,46,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-Bv6_7D6E.js").then((n) => n.T), true ? __vite__mapDeps([61,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-Co78cePa.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,29,83,32,84,37,11,33]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DtFtqMG0.js").then((n) => n.A), true ? __vite__mapDeps([83,1,2,3,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-C7Bz9beD.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,35,86,32,87,37,11,84,33]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Cla13ruH.js").then((n) => n.B), true ? __vite__mapDeps([86,1,2,3,32,87,37,11,84]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Dd3Ck1Wg.js"), true ? __vite__mapDeps([88,1,2,3,32,37,11,84]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-Bf3RSzT0.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,72,90,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BYB9WVwU.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-DC7z-DWO.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-D0ECwwIL.js"), true ? __vite__mapDeps([92,1,2,3,4,5,6,7,8,9,93,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-BwgPB0li.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,93,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Dage0K5g.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,32,84,37,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-ncdRTQ5v.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,96,32,37,11,84,33]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BOb511GI.js").then((n) => n.P), true ? __vite__mapDeps([96,1,2,3,32,37,11,84]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([97,2,3,98,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([99,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-6hX4Yr7j.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([100,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-DJ3Z3J5u.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([101,87]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([102,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-DfeefDPx.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,31,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
