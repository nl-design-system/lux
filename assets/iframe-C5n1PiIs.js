const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-Bbd9qQbF.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-BlhnSYds.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-Dir5XyRy.js","./focus-tokens-B1pRjD5b.js","./font-tokens-B6Tq6UHl.js","./grid-tokens-CNJFx0pz.js","./sizing-tokens-BYRcKMa_.js","./community-components-BNOAhXwt.js","./border-tokens-BSvSU6KG.js","./color-tokens-CaAge9mX.js","./font-tokens-BazkRvZS.js","./spacing-tokens-Ckwgd6NA.js","./design-tokens-dAbJJYVn.js","./community-component-aanleveren-ge2TT_xw.js","./versioning-Bkm4Dc1E.js","./introduction-58AI2WuK.js","./license-CIwmQYgd.js","./notice-CWiUHgR0.js","./alert-CqMGUidG.js","./README-i1AxuvIj.js","./alert.stories--lEPJkyq.js","./index-Dc96N-6w.js","./index-BLZ711uc.js","./CitationDocumentation-B3Shsstx.js","./button-rImjq0If.js","./README-8lw3oO5y.js","./button.stories-iaOK9tBF.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-B_N9d2mG.js","./checkbox.stories-Dlc7u7b7.js","./document-rZ4a3Azq.js","./document.stories-5lhjVaai.js","./form-field-description-BDLiXu1i.js","./form-field-description.stories-pHUgoPhw.js","./preview-B7sJgUzd.js","./preview-BQbhVEIv.css","./form-field-error-message-D0Gbgd4P.js","./form-field-error-message.stories-C4-yCl62.js","./form-field-label-Cz5uzteb.js","./form-field-label.stories-CcaC_U5d.js","./form-field-radio-group-CmcVJ4bT.js","./form-field-radio-group.stories-DYegrsjj.js","./form-field-radio-option-CaW9rCdp.js","./form-field-radio-option.stories-C6LIMJ0I.js","./form-field-textbox-CbkUMMym.js","./form-field-textbox.stories-nUbkOMYU.js","./textbox.stories-DgW9VhcB.js","./form-field-CkBtdD7Q.js","./index-cEa3Pm8r.js","./form-field.stories-CIOZierP.js","./heading-group-zlh3diJ5.js","./heading-group.stories-DptAAoe7.js","./heading-CkI2HiBV.js","./heading.stories-BnNKJfaY.js","./link-vJinds1n.js","./README-CSNxhwJ5.js","./link.stories-d3Y2WFFh.js","./paragraph-DoD0kp5-.js","./paragraph.stories-BkuJeYMV.js","./pre-heading-BEsoKElJ.js","./pre-heading.stories-DYkm8YlN.js","./section-D6PUi5Dl.js","./section.stories-CAfSeOrA.js","./textbox-bFhSPUtd.js","./alert-OLnbVvZ-.js","./alert.stories-DtFtqMG0.js","./components-Cp22cNJ4.js","./button-BZTVeJ9b.js","./button.stories-Cla13ruH.js","./index-DbgQBs_-.js","./document.stories-Dd3Ck1Wg.js","./link-B4W9jjco.js","./link.stories-BYB9WVwU.js","./inlogstraat-BkT5OrPU.js","./login-link-themes-BPrQrk8U.js","./login-link.stories-Dage0K5g.js","./login-link-Bwdh29u5.js","./paragraph-CXNGwmZL.js","./paragraph.stories-BOb511GI.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-Bbd9qQbF.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-Dir5XyRy.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-B1pRjD5b.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-B6Tq6UHl.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-CNJFx0pz.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-BYRcKMa_.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-BNOAhXwt.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-BSvSU6KG.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CaAge9mX.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BazkRvZS.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-Ckwgd6NA.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-dAbJJYVn.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-ge2TT_xw.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-Bkm4Dc1E.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-58AI2WuK.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-CIwmQYgd.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-CWiUHgR0.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-CqMGUidG.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories--lEPJkyq.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-rImjq0If.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,36,31,32,37,11,33]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-iaOK9tBF.js").then((n) => n.B), true ? __vite__mapDeps([36,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-B_N9d2mG.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-Dlc7u7b7.js").then((n) => n.C), true ? __vite__mapDeps([39,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-rZ4a3Azq.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-5lhjVaai.js").then((n) => n.D), true ? __vite__mapDeps([41,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-BDLiXu1i.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-pHUgoPhw.js").then((n) => n.F), true ? __vite__mapDeps([43,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-D0Gbgd4P.js"), true ? __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,47,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-C4-yCl62.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-Cz5uzteb.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-CcaC_U5d.js").then((n) => n.F), true ? __vite__mapDeps([49,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-CmcVJ4bT.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-DYegrsjj.js").then((n) => n.R), true ? __vite__mapDeps([51,1,2,3,31,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-CaW9rCdp.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-C6LIMJ0I.js").then((n) => n.F), true ? __vite__mapDeps([53,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-CbkUMMym.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,31,32,44,45,43,47,56]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-nUbkOMYU.js").then((n) => n.F), true ? __vite__mapDeps([55,31,2,3,32,44,1,45,43,47,56]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-CkBtdD7Q.js"), true ? __vite__mapDeps([57,1,2,3,4,58,7,5,6,8,9,59,31,32,44,45,33,55,43,47,56]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-CIOZierP.js").then((n) => n.F), true ? __vite__mapDeps([59,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-zlh3diJ5.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,61,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-DptAAoe7.js").then((n) => n.H), true ? __vite__mapDeps([61,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CkI2HiBV.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-BnNKJfaY.js").then((n) => n.H), true ? __vite__mapDeps([63,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-vJinds1n.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,65,66,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-d3Y2WFFh.js").then((n) => n.L), true ? __vite__mapDeps([66,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DoD0kp5-.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BkuJeYMV.js").then((n) => n.P), true ? __vite__mapDeps([68,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-BEsoKElJ.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-DYkm8YlN.js").then((n) => n.P), true ? __vite__mapDeps([70,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-D6PUi5Dl.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-CAfSeOrA.js").then((n) => n.S), true ? __vite__mapDeps([72,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-bFhSPUtd.js"), true ? __vite__mapDeps([73,1,2,3,4,58,7,5,6,8,9,56,31,32,44,45,33,55,43,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-DgW9VhcB.js").then((n) => n.T), true ? __vite__mapDeps([56,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-OLnbVvZ-.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,29,75,32,76,37,11,33]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DtFtqMG0.js").then((n) => n.A), true ? __vite__mapDeps([75,1,2,3,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-BZTVeJ9b.js"), true ? __vite__mapDeps([77,1,2,3,4,5,6,7,8,9,35,78,32,79,37,11,76,33]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Cla13ruH.js").then((n) => n.B), true ? __vite__mapDeps([78,1,2,3,32,79,37,11,76]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Dd3Ck1Wg.js"), true ? __vite__mapDeps([80,1,2,3,32,37,11,76]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-B4W9jjco.js"), true ? __vite__mapDeps([81,1,2,3,4,5,6,7,8,9,65,82,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BYB9WVwU.js").then((n) => n.L), true ? __vite__mapDeps([82,1,2,3,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BkT5OrPU.js"), true ? __vite__mapDeps([83,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-BPrQrk8U.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,85,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-Bwdh29u5.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,85,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Dage0K5g.js").then((n) => n.L), true ? __vite__mapDeps([85,1,2,3,32,76,37,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CXNGwmZL.js"), true ? __vite__mapDeps([87,1,2,3,4,5,6,7,8,9,88,32,37,11,76,33]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BOb511GI.js").then((n) => n.P), true ? __vite__mapDeps([88,1,2,3,32,37,11,76]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([89,2,3,90,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([91,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-CUifTV_Q.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([92,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-BB9qkiVE.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([93,79]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([94,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-B7sJgUzd.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,31,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
