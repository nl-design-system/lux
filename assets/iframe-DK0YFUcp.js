const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-CUCXDp0q.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-CfYIPNzr.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-BqOa08U_.js","./focus-tokens-BUMAGJ5g.js","./font-tokens-D4oVnKYU.js","./grid-tokens-CB7OM9wB.js","./sizing-tokens-xdocVKX5.js","./community-components-D8noXS0D.js","./border-tokens-Djj7SQEn.js","./color-tokens--NUfESx_.js","./font-tokens-CpCczubH.js","./spacing-tokens-DdrvILx7.js","./design-tokens-D4roWP25.js","./community-component-aanleveren-cwvNBGQv.js","./versioning--mHosyg3.js","./introduction-BCCdeABn.js","./license-C2QYzXPs.js","./notice-ByzP8HG2.js","./alert-BpLHk_Wi.js","./README-i1AxuvIj.js","./alert.stories-ByEFt_iE.js","./index-B0rW5TGL.js","./index-DdOurD3B.js","./preview-BxTR0yp5.js","./preview-DH_ABZ4u.css","./CitationDocumentation-B3Shsstx.js","./button-DAVrDDrU.js","./README-8lw3oO5y.js","./button.stories-BXe-Nmey.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-Bm5GdkNF.js","./checkbox.stories-BbmBjRs_.js","./document-C39zl8z0.js","./document.stories-hJBh4I1R.js","./form-field-checkbox-Da8qtGbr.js","./form-field-checkbox.stories-CctuEDv4.js","./form-field-description.stories-BSie5PKo.js","./form-field-error-message.stories-V67aaYP3.js","./form-field-description-DtmNJlQz.js","./form-field-error-message-CR3aiBKH.js","./form-field-label-CukK5Q8d.js","./form-field-label.stories-BOJoRuqx.js","./form-field-radio-group-SJlhK69J.js","./form-field-radio-group.stories-CAIyfiTJ.js","./form-field-radio-option-C1MCy4jd.js","./form-field-radio-option.stories-DlgIUl21.js","./form-field-select-Ce16OW5t.js","./form-field-select.stories-BVYPlGrd.js","./select.stories-CyibSH1H.js","./form-field-textarea-EkoF49Aq.js","./form-field-textarea.stories-CinSUbsc.js","./textarea.stories-BE9-7LUz.js","./form-field-textbox-DiVvpv7w.js","./form-field-textbox.stories-iqrRaEzE.js","./textbox.stories-C03FYMeS.js","./form-field-MgAxrmir.js","./index-cEa3Pm8r.js","./form-field.stories-BM6aIF99.js","./heading-group-SpxDrQ6v.js","./heading-group.stories-D_H6yAsv.js","./heading-BhHU1UyB.js","./heading.stories-B5I-MXpJ.js","./icon-Bh1upkEk.js","./icon.stories-CpMaLZ1U.js","./link-CIHEh4ea.js","./README-CSNxhwJ5.js","./link.stories-7y2s5UhS.js","./paragraph-D9GBSzXy.js","./paragraph.stories-DAva8olx.js","./pre-heading-YVpAR8ri.js","./pre-heading.stories-B3B_U3fs.js","./section-rcPUoBV0.js","./section.stories-CzrSh3AH.js","./select-C0ivDSO4.js","./textarea-CeRGdwe8.js","./textbox-C7haTHcP.js","./alert-DMehSo5T.js","./alert.stories-C9k9CPP4.js","./components-Cp22cNJ4.js","./button-CELPSCr-.js","./button.stories-s1dOzKz6.js","./index-DbgQBs_-.js","./document.stories-DeZb7fzG.js","./link-DqxVv5fK.js","./link.stories-Dz-Hh41t.js","./inlogstraat-1ZMd-suC.js","./login-link-themes-iYAOpOug.js","./login-link.stories-B-YdS1iL.js","./login-link-BuqVP8og.js","./paragraph-_oeHf8tr.js","./paragraph.stories-BspXlzix.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CUCXDp0q.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-BqOa08U_.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-BUMAGJ5g.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-D4oVnKYU.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-CB7OM9wB.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-xdocVKX5.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-D8noXS0D.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-Djj7SQEn.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens--NUfESx_.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-CpCczubH.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-DdrvILx7.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-D4roWP25.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-cwvNBGQv.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning--mHosyg3.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-BCCdeABn.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-C2QYzXPs.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-ByzP8HG2.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BpLHk_Wi.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-ByEFt_iE.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-DAVrDDrU.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,38,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-BXe-Nmey.js").then((n) => n.B), true ? __vite__mapDeps([38,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-Bm5GdkNF.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BbmBjRs_.js").then((n) => n.C), true ? __vite__mapDeps([41,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-C39zl8z0.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-hJBh4I1R.js").then((n) => n.D), true ? __vite__mapDeps([43,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-Da8qtGbr.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,45,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-CctuEDv4.js").then((n) => n.F), true ? __vite__mapDeps([45,1,2,3,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-DtmNJlQz.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,46,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-BSie5PKo.js").then((n) => n.F), true ? __vite__mapDeps([46,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-CR3aiBKH.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,47,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-V67aaYP3.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-CukK5Q8d.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-BOJoRuqx.js").then((n) => n.F), true ? __vite__mapDeps([51,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-SJlhK69J.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-CAIyfiTJ.js").then((n) => n.R), true ? __vite__mapDeps([53,1,2,3,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-C1MCy4jd.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-DlgIUl21.js").then((n) => n.F), true ? __vite__mapDeps([55,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-Ce16OW5t.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-BVYPlGrd.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-EkoF49Aq.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-CinSUbsc.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-DiVvpv7w.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,31,32,33,34,39,11,46,47,64]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-iqrRaEzE.js").then((n) => n.F), true ? __vite__mapDeps([63,1,2,3,31,32,33,34,39,11,46,47,64]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-MgAxrmir.js"), true ? __vite__mapDeps([65,1,2,3,4,66,7,5,6,8,9,67,31,32,33,34,39,11,35,63,46,47,64]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-BM6aIF99.js").then((n) => n.F), true ? __vite__mapDeps([67,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-SpxDrQ6v.js"), true ? __vite__mapDeps([68,1,2,3,4,5,6,7,8,9,69,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-D_H6yAsv.js").then((n) => n.H), true ? __vite__mapDeps([69,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-BhHU1UyB.js"), true ? __vite__mapDeps([70,1,2,3,4,5,6,7,8,9,71,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-B5I-MXpJ.js").then((n) => n.H), true ? __vite__mapDeps([71,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-Bh1upkEk.js"), true ? __vite__mapDeps([72,1,2,3,4,5,6,7,8,9,73,31]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CpMaLZ1U.js").then((n) => n.I), true ? __vite__mapDeps([73,1,2,3,31]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-CIHEh4ea.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,76,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-7y2s5UhS.js").then((n) => n.L), true ? __vite__mapDeps([76,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-D9GBSzXy.js"), true ? __vite__mapDeps([77,1,2,3,4,5,6,7,8,9,78,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-DAva8olx.js").then((n) => n.P), true ? __vite__mapDeps([78,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-YVpAR8ri.js"), true ? __vite__mapDeps([79,1,2,3,4,5,6,7,8,9,80,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-B3B_U3fs.js").then((n) => n.P), true ? __vite__mapDeps([80,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-rcPUoBV0.js"), true ? __vite__mapDeps([81,1,2,3,4,5,6,7,8,9,82,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-CzrSh3AH.js").then((n) => n.S), true ? __vite__mapDeps([82,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-C0ivDSO4.js"), true ? __vite__mapDeps([83,1,2,3,4,5,6,7,8,9,58,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-CyibSH1H.js").then((n) => n.S), true ? __vite__mapDeps([58,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-CeRGdwe8.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,61,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-BE9-7LUz.js").then((n) => n.T), true ? __vite__mapDeps([61,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-C7haTHcP.js"), true ? __vite__mapDeps([85,1,2,3,4,66,7,5,6,8,9,64,31,32,33,34,35,63,39,11,46,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-C03FYMeS.js").then((n) => n.T), true ? __vite__mapDeps([64,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-DMehSo5T.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,29,87,32,88,39,11,35]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-C9k9CPP4.js").then((n) => n.A), true ? __vite__mapDeps([87,1,2,3,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-CELPSCr-.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,37,90,32,91,39,11,88,35]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-s1dOzKz6.js").then((n) => n.B), true ? __vite__mapDeps([90,1,2,3,32,91,39,11,88]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DeZb7fzG.js"), true ? __vite__mapDeps([92,1,2,3,32,39,11,88]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-DqxVv5fK.js"), true ? __vite__mapDeps([93,1,2,3,4,5,6,7,8,9,75,94,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Dz-Hh41t.js").then((n) => n.L), true ? __vite__mapDeps([94,1,2,3,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-1ZMd-suC.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-iYAOpOug.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,97,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-BuqVP8og.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,97,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B-YdS1iL.js").then((n) => n.L), true ? __vite__mapDeps([97,1,2,3,32,88,39,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-_oeHf8tr.js"), true ? __vite__mapDeps([99,1,2,3,4,5,6,7,8,9,100,32,39,11,88,35]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BspXlzix.js").then((n) => n.P), true ? __vite__mapDeps([100,1,2,3,32,39,11,88]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([101,2,3,102,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([103,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-D4nUdN-x.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([104,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-DVN4BAY2.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([105,91]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([106,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-BxTR0yp5.js").then((n) => n.p), true ? __vite__mapDeps([33,1,2,3,31,34]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
