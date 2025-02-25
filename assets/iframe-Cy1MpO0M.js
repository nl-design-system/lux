const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-DKM6TZDg.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-Bn3y2oa7.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-HIZdKkbp.js","./focus-tokens--4qsFwwE.js","./font-tokens-BW9oFp-V.js","./grid-tokens-DQ0D1n91.js","./sizing-tokens-8W9fdx9V.js","./community-components-NcpZn-P_.js","./border-tokens-BDN0wO81.js","./color-tokens-CVFM6ONU.js","./font-tokens-fSPUnDHx.js","./spacing-tokens-C8_oJrVQ.js","./design-tokens-BlPc9NW-.js","./community-component-aanleveren-BidrSW2N.js","./versioning-BhZ3s6wt.js","./introduction-m0wZmwd7.js","./license-BfAih97t.js","./notice-MOfc9ALG.js","./alert-Cc3Ul5g7.js","./README-i1AxuvIj.js","./alert.stories-BpusPKq7.js","./index-CP4xnOPU.js","./index-C9QTpdn_.js","./preview-CtqewCdN.js","./preview-BduwPPau.css","./CitationDocumentation-B3Shsstx.js","./button-B1Mw_Spc.js","./README-8lw3oO5y.js","./button.stories-Bl0e508t.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-BICHJ19j.js","./checkbox.stories-B2T5g1nB.js","./document-usCiz9Cn.js","./document.stories-DGfwPlwJ.js","./form-field-checkbox-BDO8FUe7.js","./form-field-checkbox.stories-DZl25ftl.js","./form-field-description.stories-B5tEr-3E.js","./form-field-error-message.stories-DPSoCnJ8.js","./form-field-description-DNuBFpEM.js","./form-field-error-message-DWuekU8j.js","./form-field-label-9fhJ_540.js","./form-field-label.stories-ChX7O5S2.js","./form-field-radio-group-DOieedNS.js","./form-field-radio-group.stories-DubPMAQA.js","./form-field-radio-option-t1H1T-FT.js","./form-field-radio-option.stories--1_kYjQM.js","./form-field-select-CM-jaIGC.js","./form-field-select.stories-Ka-OpRdx.js","./select.stories-BxyD9EHt.js","./form-field-textbox-BH2aq_0a.js","./form-field-textbox.stories-jmmItzTX.js","./textbox.stories-CqGYETtj.js","./form-field-DhXqcpJs.js","./index-cEa3Pm8r.js","./form-field.stories-Ce5tjdl-.js","./heading-group-D6WXA_MQ.js","./heading-group.stories-D1xLATcP.js","./heading-BjEXAyKc.js","./heading.stories-A0FPMGAb.js","./icon-BSGbzjpZ.js","./icon.stories-CDg-bvgd.js","./link-BaBP4-HV.js","./README-CSNxhwJ5.js","./link.stories-DhsqL2P8.js","./paragraph-DIHv0dCs.js","./paragraph.stories-DgYivKpz.js","./pre-heading-DAEAOEM4.js","./pre-heading.stories-DQGWc0ts.js","./section-zptde5-a.js","./section.stories-WiknaA7_.js","./select-B0j3Edam.js","./textbox-BX4XPHYV.js","./alert-DbjTJkWb.js","./alert.stories-tMwwL6ac.js","./components-Cp22cNJ4.js","./button-DKRYBCiv.js","./button.stories-D9uGfor3.js","./index-DbgQBs_-.js","./document.stories-CMmBkoqs.js","./link-O_Ego5Lh.js","./link.stories-d1e_rJD_.js","./inlogstraat-2vaDcpR7.js","./login-link-themes-BWqcYkIq.js","./login-link.stories-D9soZG3F.js","./login-link-CKwGCq8s.js","./paragraph-BsQp3tvF.js","./paragraph.stories-DHXIjrb4.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-DKM6TZDg.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-HIZdKkbp.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens--4qsFwwE.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BW9oFp-V.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-DQ0D1n91.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-8W9fdx9V.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-NcpZn-P_.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-BDN0wO81.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CVFM6ONU.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-fSPUnDHx.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-C8_oJrVQ.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-BlPc9NW-.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-BidrSW2N.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-BhZ3s6wt.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-m0wZmwd7.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-BfAih97t.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-MOfc9ALG.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-Cc3Ul5g7.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-BpusPKq7.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-B1Mw_Spc.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,38,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Bl0e508t.js").then((n) => n.B), true ? __vite__mapDeps([38,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-BICHJ19j.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-B2T5g1nB.js").then((n) => n.C), true ? __vite__mapDeps([41,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-usCiz9Cn.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DGfwPlwJ.js").then((n) => n.D), true ? __vite__mapDeps([43,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-BDO8FUe7.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,45,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-DZl25ftl.js").then((n) => n.F), true ? __vite__mapDeps([45,1,2,3,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-DNuBFpEM.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,46,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-B5tEr-3E.js").then((n) => n.F), true ? __vite__mapDeps([46,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-DWuekU8j.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,47,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-DPSoCnJ8.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-9fhJ_540.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-ChX7O5S2.js").then((n) => n.F), true ? __vite__mapDeps([51,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-DOieedNS.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-DubPMAQA.js").then((n) => n.R), true ? __vite__mapDeps([53,1,2,3,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-t1H1T-FT.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories--1_kYjQM.js").then((n) => n.F), true ? __vite__mapDeps([55,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-CM-jaIGC.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-Ka-OpRdx.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-BH2aq_0a.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-jmmItzTX.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-DhXqcpJs.js"), true ? __vite__mapDeps([62,1,2,3,4,63,7,5,6,8,9,64,31,32,33,34,39,11,35,60,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-Ce5tjdl-.js").then((n) => n.F), true ? __vite__mapDeps([64,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-D6WXA_MQ.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-D1xLATcP.js").then((n) => n.H), true ? __vite__mapDeps([66,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-BjEXAyKc.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-A0FPMGAb.js").then((n) => n.H), true ? __vite__mapDeps([68,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-BSGbzjpZ.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,31]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CDg-bvgd.js").then((n) => n.I), true ? __vite__mapDeps([70,1,2,3,31]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-BaBP4-HV.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,73,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-DhsqL2P8.js").then((n) => n.L), true ? __vite__mapDeps([73,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DIHv0dCs.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-DgYivKpz.js").then((n) => n.P), true ? __vite__mapDeps([75,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-DAEAOEM4.js"), true ? __vite__mapDeps([76,1,2,3,4,5,6,7,8,9,77,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-DQGWc0ts.js").then((n) => n.P), true ? __vite__mapDeps([77,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-zptde5-a.js"), true ? __vite__mapDeps([78,1,2,3,4,5,6,7,8,9,79,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-WiknaA7_.js").then((n) => n.S), true ? __vite__mapDeps([79,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-B0j3Edam.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,58,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-BxyD9EHt.js").then((n) => n.S), true ? __vite__mapDeps([58,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-BX4XPHYV.js"), true ? __vite__mapDeps([81,1,2,3,4,63,7,5,6,8,9,61,31,32,33,34,35,60,39,11,46,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-CqGYETtj.js").then((n) => n.T), true ? __vite__mapDeps([61,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-DbjTJkWb.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,29,83,32,84,39,11,35]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-tMwwL6ac.js").then((n) => n.A), true ? __vite__mapDeps([83,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-DKRYBCiv.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,37,86,32,87,39,11,84,35]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D9uGfor3.js").then((n) => n.B), true ? __vite__mapDeps([86,1,2,3,32,87,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-CMmBkoqs.js"), true ? __vite__mapDeps([88,1,2,3,32,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-O_Ego5Lh.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,72,90,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-d1e_rJD_.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-2vaDcpR7.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-BWqcYkIq.js"), true ? __vite__mapDeps([92,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-CKwGCq8s.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-D9soZG3F.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BsQp3tvF.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,96,32,39,11,84,35]) : void 0, import.meta.url),
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
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-CurQxeo6.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([100,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-BLfpmlYp.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([101,87]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([102,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-CtqewCdN.js").then((n) => n.p), true ? __vite__mapDeps([33,1,2,3,31,34]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
