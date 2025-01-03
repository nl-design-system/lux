const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-fhEw6CXJ.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-DBiJJaHA.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-CB9L7fXD.js","./focus-tokens-BEcDRn9L.js","./font-tokens-B3AP9mQm.js","./grid-tokens-DDINygI6.js","./sizing-tokens-Cha79SC0.js","./community-components-CSXRNnu4.js","./border-tokens-BRuuEJp4.js","./color-tokens-BMLKIugB.js","./font-tokens-x075crek.js","./spacing-tokens-DdjwhYyr.js","./design-tokens-BPFgnots.js","./community-component-aanleveren-B4ZIM66w.js","./versioning-CWd6Or36.js","./introduction-CzUT-Avu.js","./license-CY0Ocbm9.js","./notice-DYdgfftA.js","./alert-CKmq-VRt.js","./README-i1AxuvIj.js","./alert.stories-CpyTf6NF.js","./index-DzCBCR8w.js","./index-BLZ711uc.js","./preview-CEiTtpTH.js","./preview-D47EXK1h.css","./CitationDocumentation-B3Shsstx.js","./button-BHFzKHuQ.js","./README-8lw3oO5y.js","./button.stories-D-TkrL-a.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-CJ-0PqLB.js","./checkbox.stories-CAztDIoY.js","./document-DJv-2GLw.js","./document.stories-BJfreDTI.js","./form-field-checkbox-BguCuhao.js","./form-field-checkbox.stories-VEYhxxGC.js","./form-field-description.stories-BRZYYDx5.js","./form-field-error-message.stories-Ca-bURQh.js","./form-field-description-s3f8F8sW.js","./form-field-error-message-nWtpIVqH.js","./form-field-label-BXVlb33T.js","./form-field-label.stories-CDbf96ed.js","./form-field-radio-group-CfUtaRWz.js","./form-field-radio-group.stories-BC_Xkbj5.js","./form-field-radio-option-AGgbj3wU.js","./form-field-radio-option.stories-hJsvo1-u.js","./form-field-select-j0OHxE7k.js","./form-field-select.stories-D2qeauG2.js","./select.stories-VSSbIT7g.js","./form-field-textbox-Bz5nojx_.js","./form-field-textbox.stories-Bi-3PKIJ.js","./textbox.stories-C-Qpe3R3.js","./form-field-DMe3x9Ka.js","./index-cEa3Pm8r.js","./form-field.stories-D6QnBQLM.js","./heading-group-hyWj0n76.js","./heading-group.stories-BrQYBdyZ.js","./heading-Dc4tQu5A.js","./heading.stories-CvpIDYsb.js","./icon-CyptjRAT.js","./icon.stories-B4p5J928.js","./link-DzDAAPjd.js","./README-CSNxhwJ5.js","./link.stories-CnMCoXU-.js","./paragraph-CvJhPH2W.js","./paragraph.stories-CC0LfBU5.js","./pre-heading-DfOF2z6U.js","./pre-heading.stories-DmQXwqfQ.js","./section-NJUZRr7l.js","./section.stories-O1VG2Gw3.js","./select-BUDFwDJJ.js","./textbox-KzH4navo.js","./alert-_S5EJmF8.js","./alert.stories-DtFtqMG0.js","./components-Cp22cNJ4.js","./button-7rW-2EwM.js","./button.stories-Cla13ruH.js","./index-DbgQBs_-.js","./document.stories-Dd3Ck1Wg.js","./link-DfkuZ3wP.js","./link.stories-BYB9WVwU.js","./inlogstraat-BnvzKJoi.js","./login-link-themes-DBOJkuo7.js","./login-link.stories-Dage0K5g.js","./login-link-BpgQ6XrG.js","./paragraph-ClEtotKK.js","./paragraph.stories-BOb511GI.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-fhEw6CXJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CB9L7fXD.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-BEcDRn9L.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-B3AP9mQm.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-DDINygI6.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-Cha79SC0.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-CSXRNnu4.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-BRuuEJp4.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-BMLKIugB.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-x075crek.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-DdjwhYyr.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-BPFgnots.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-B4ZIM66w.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-CWd6Or36.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-CzUT-Avu.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-CY0Ocbm9.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-DYdgfftA.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-CKmq-VRt.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-CpyTf6NF.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-BHFzKHuQ.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,37,38,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D-TkrL-a.js").then((n) => n.B), true ? __vite__mapDeps([38,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-CJ-0PqLB.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-CAztDIoY.js").then((n) => n.C), true ? __vite__mapDeps([41,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-DJv-2GLw.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-BJfreDTI.js").then((n) => n.D), true ? __vite__mapDeps([43,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-BguCuhao.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,45,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-VEYhxxGC.js").then((n) => n.F), true ? __vite__mapDeps([45,1,2,3,31,32,33,34,39,11,41,46,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-s3f8F8sW.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,46,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-BRZYYDx5.js").then((n) => n.F), true ? __vite__mapDeps([46,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-nWtpIVqH.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,47,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-Ca-bURQh.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-BXVlb33T.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-CDbf96ed.js").then((n) => n.F), true ? __vite__mapDeps([51,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-CfUtaRWz.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-BC_Xkbj5.js").then((n) => n.R), true ? __vite__mapDeps([53,1,2,3,31,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-AGgbj3wU.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-hJsvo1-u.js").then((n) => n.F), true ? __vite__mapDeps([55,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-j0OHxE7k.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-D2qeauG2.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,31,32,33,34,39,11,46,47,58]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-Bz5nojx_.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-Bi-3PKIJ.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,31,32,33,34,39,11,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-DMe3x9Ka.js"), true ? __vite__mapDeps([62,1,2,3,4,63,7,5,6,8,9,64,31,32,33,34,39,11,35,60,46,47,61]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-D6QnBQLM.js").then((n) => n.F), true ? __vite__mapDeps([64,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-hyWj0n76.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-BrQYBdyZ.js").then((n) => n.H), true ? __vite__mapDeps([66,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-Dc4tQu5A.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32,33,34,39,11,35]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-CvpIDYsb.js").then((n) => n.H), true ? __vite__mapDeps([68,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-CyptjRAT.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,31]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-B4p5J928.js").then((n) => n.I), true ? __vite__mapDeps([70,1,2,3,31]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-DzDAAPjd.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,73,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-CnMCoXU-.js").then((n) => n.L), true ? __vite__mapDeps([73,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CvJhPH2W.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-CC0LfBU5.js").then((n) => n.P), true ? __vite__mapDeps([75,1,2,3,31,32,33,34,39,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-DfOF2z6U.js"), true ? __vite__mapDeps([76,1,2,3,4,5,6,7,8,9,77,31,32,33,34,11,35]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-DmQXwqfQ.js").then((n) => n.P), true ? __vite__mapDeps([77,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-NJUZRr7l.js"), true ? __vite__mapDeps([78,1,2,3,4,5,6,7,8,9,79,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-O1VG2Gw3.js").then((n) => n.S), true ? __vite__mapDeps([79,1,2,3,31,32,33,34,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-BUDFwDJJ.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,58,31,32,33,34,35]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-VSSbIT7g.js").then((n) => n.S), true ? __vite__mapDeps([58,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-KzH4navo.js"), true ? __vite__mapDeps([81,1,2,3,4,63,7,5,6,8,9,61,31,32,33,34,35,60,39,11,46,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-C-Qpe3R3.js").then((n) => n.T), true ? __vite__mapDeps([61,1,2,3,31,32,33,34]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-_S5EJmF8.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,29,83,32,84,39,11,35]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DtFtqMG0.js").then((n) => n.A), true ? __vite__mapDeps([83,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-7rW-2EwM.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,37,86,32,87,39,11,84,35]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Cla13ruH.js").then((n) => n.B), true ? __vite__mapDeps([86,1,2,3,32,87,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Dd3Ck1Wg.js"), true ? __vite__mapDeps([88,1,2,3,32,39,11,84]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-DfkuZ3wP.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,72,90,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BYB9WVwU.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BnvzKJoi.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-DBOJkuo7.js"), true ? __vite__mapDeps([92,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-BpgQ6XrG.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,93,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Dage0K5g.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,32,84,39,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-ClEtotKK.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,96,32,39,11,84,35]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BOb511GI.js").then((n) => n.P), true ? __vite__mapDeps([96,1,2,3,32,39,11,84]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([97,2,3,98,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([99,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-BLt_I_Je.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([100,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-DC0tisTX.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([101,87]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([102,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-CEiTtpTH.js").then((n) => n.p), true ? __vite__mapDeps([33,1,2,3,31,34]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
