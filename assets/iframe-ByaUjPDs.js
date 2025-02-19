const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-Xrr2-O3P.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-CnFvZm8P.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-CBU_2VZA.js","./focus-tokens-D4QEMuTi.js","./font-tokens-kDIwxoJr.js","./grid-tokens-DVV4J7XK.js","./sizing-tokens-PS0dd5px.js","./community-components-soSy_Pmp.js","./border-tokens-OXYCQ18I.js","./color-tokens-DFvzHjZC.js","./font-tokens-DTL9DNi7.js","./spacing-tokens-3RlOibT3.js","./design-tokens-HNs0KHzX.js","./community-component-aanleveren-CMfHFqda.js","./versioning-Bp_qb8sd.js","./introduction-BcWDLFX9.js","./license-BPbT5Q2q.js","./notice-KqyQ_as5.js","./alert-aZnNVl5O.js","./README-i1AxuvIj.js","./alert.stories-D3qLjVVh.js","./index-CP4xnOPU.js","./index-C9QTpdn_.js","./preview-C8IZ1jhA.js","./preview-B6HScyqn.css","./CitationDocumentation-B3Shsstx.js","./button-NyUb8Fgv.js","./README-8lw3oO5y.js","./button.stories-CsvUE_1y.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-D2vyKB49.js","./checkbox.stories-1Wu26EMv.js","./document-GNifsDDU.js","./document.stories-DLrDNkT7.js","./form-field-checkbox-CnbdoI2k.js","./form-field-checkbox.stories-DlpMB8ww.js","./form-field-description.stories-D5r2ubD5.js","./form-field-error-message.stories-DwL2pmCJ.js","./form-field-description-Bh2CEk9_.js","./form-field-error-message-C1if0xdg.js","./form-field-label-Cd4oEe1a.js","./form-field-label.stories-CikBAwCk.js","./form-field-radio-group-CLR21MOd.js","./form-field-radio-group.stories-BWPu8nkE.js","./form-field-radio-option-DNZv5uR9.js","./form-field-radio-option.stories-RoTu3niB.js","./form-field-select-DqzpkvJJ.js","./form-field-select.stories-Bo2_40Cb.js","./select.stories-B2B7mqsm.js","./form-field-textbox-CJ0yuhIa.js","./form-field-textbox.stories-BJlimntD.js","./textbox.stories-2n9IKlSx.js","./form-field-CCSOdF0U.js","./index-cEa3Pm8r.js","./form-field.stories-DOtR7Abg.js","./heading-group-B9ISvFZ3.js","./heading-group.stories-DEw5cg9G.js","./heading-BRAn1NDI.js","./heading.stories-DPtREEMk.js","./icon-DiDJl3Fh.js","./icon.stories-CDg-bvgd.js","./link-dw69eDUy.js","./README-CSNxhwJ5.js","./link.stories-BGXvdrnt.js","./paragraph-CcIiYFAw.js","./paragraph.stories-gNlU-BWI.js","./pre-heading-DU7oU1ma.js","./pre-heading.stories-Ce_SK6IT.js","./section-mcXOMkAQ.js","./section.stories-BZHTR8qn.js","./select-BL-sTAiR.js","./textbox-7QNwGeBw.js","./alert-BbfCajcI.js","./alert.stories-tMwwL6ac.js","./components-Cp22cNJ4.js","./button-CBspd6-Q.js","./button.stories-D9uGfor3.js","./index-DbgQBs_-.js","./document.stories-CMmBkoqs.js","./link-kKL00suk.js","./link.stories-d1e_rJD_.js","./inlogstraat-C2saQfgw.js","./login-link-themes-WwUi133g.js","./login-link.stories-D9soZG3F.js","./login-link-Ykob7Zy0.js","./paragraph-DuiYcy4h.js","./paragraph.stories-DHXIjrb4.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-Xrr2-O3P.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CBU_2VZA.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-D4QEMuTi.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-kDIwxoJr.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-DVV4J7XK.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-PS0dd5px.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-soSy_Pmp.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-OXYCQ18I.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-DFvzHjZC.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-DTL9DNi7.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-3RlOibT3.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-HNs0KHzX.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-CMfHFqda.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-Bp_qb8sd.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-BcWDLFX9.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-BPbT5Q2q.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-KqyQ_as5.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-aZnNVl5O.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-D3qLjVVh.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-NyUb8Fgv.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,38,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-CsvUE_1y.js").then((n) => n.B), true ? __vite__mapDeps([38,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-D2vyKB49.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-1Wu26EMv.js").then((n) => n.C), true ? __vite__mapDeps([41,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-GNifsDDU.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DLrDNkT7.js").then((n) => n.D), true ? __vite__mapDeps([43,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-CnbdoI2k.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,45,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-DlpMB8ww.js").then((n) => n.F), true ? __vite__mapDeps([45,1,2,3,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-Bh2CEk9_.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,46,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-D5r2ubD5.js").then((n) => n.F), true ? __vite__mapDeps([46,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-C1if0xdg.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,47,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-DwL2pmCJ.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-Cd4oEe1a.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-CikBAwCk.js").then((n) => n.F), true ? __vite__mapDeps([51,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-CLR21MOd.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-BWPu8nkE.js").then((n) => n.R), true ? __vite__mapDeps([53,1,2,3,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-DNZv5uR9.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-RoTu3niB.js").then((n) => n.F), true ? __vite__mapDeps([55,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-DqzpkvJJ.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-Bo2_40Cb.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-CJ0yuhIa.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-BJlimntD.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-CCSOdF0U.js"), true ? __vite__mapDeps([62,1,2,3,4,63,7,5,6,8,9,64,31,32,33,34,39,11,35,60,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-DOtR7Abg.js").then((n) => n.F), true ? __vite__mapDeps([64,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-B9ISvFZ3.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-DEw5cg9G.js").then((n) => n.H), true ? __vite__mapDeps([66,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-BRAn1NDI.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-DPtREEMk.js").then((n) => n.H), true ? __vite__mapDeps([68,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-DiDJl3Fh.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,31]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CDg-bvgd.js").then((n) => n.I), true ? __vite__mapDeps([70,1,2,3,31]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-dw69eDUy.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,73,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BGXvdrnt.js").then((n) => n.L), true ? __vite__mapDeps([73,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CcIiYFAw.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-gNlU-BWI.js").then((n) => n.P), true ? __vite__mapDeps([75,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-DU7oU1ma.js"), true ? __vite__mapDeps([76,1,2,3,4,5,6,7,8,9,77,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-Ce_SK6IT.js").then((n) => n.P), true ? __vite__mapDeps([77,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-mcXOMkAQ.js"), true ? __vite__mapDeps([78,1,2,3,4,5,6,7,8,9,79,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-BZHTR8qn.js").then((n) => n.S), true ? __vite__mapDeps([79,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-BL-sTAiR.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,58,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-B2B7mqsm.js").then((n) => n.S), true ? __vite__mapDeps([58,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-7QNwGeBw.js"), true ? __vite__mapDeps([81,1,2,3,4,63,7,5,6,8,9,61,31,32,33,34,35,60,39,11,46,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-2n9IKlSx.js").then((n) => n.T), true ? __vite__mapDeps([61,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BbfCajcI.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,29,83,32,84,39,11,35]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-tMwwL6ac.js").then((n) => n.A), true ? __vite__mapDeps([83,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-CBspd6-Q.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,37,86,32,87,39,11,84,35]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D9uGfor3.js").then((n) => n.B), true ? __vite__mapDeps([86,1,2,3,32,87,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-CMmBkoqs.js"), true ? __vite__mapDeps([88,1,2,3,32,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-kKL00suk.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,72,90,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-d1e_rJD_.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-C2saQfgw.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-WwUi133g.js"), true ? __vite__mapDeps([92,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-Ykob7Zy0.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-D9soZG3F.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DuiYcy4h.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,96,32,39,11,84,35]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-DHXIjrb4.js").then((n) => n.P), true ? __vite__mapDeps([96,1,2,3,32,39,11,84]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([97,2,3,98,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([99,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-C2u3CLjl.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([100,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-Bp1CG54v.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([101,87]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([102,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-C8IZ1jhA.js").then((n) => n.p), true ? __vite__mapDeps([33,1,2,3,31,34]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
