const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens--bh7jsXi.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-DQMdoIaF.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-r-dzl_eW.js","./focus-tokens-BIL8qIQK.js","./font-tokens-kU_nR_Ee.js","./grid-tokens-C5ekmoKe.js","./sizing-tokens-BFORXNCp.js","./community-components-CuIOluNf.js","./border-tokens-DhOEAiUr.js","./color-tokens-PgekX4hD.js","./font-tokens-DghhnRW2.js","./spacing-tokens-Bd-t5o-T.js","./design-tokens-Auv4mD2b.js","./community-component-aanleveren-C5e-DuWf.js","./versioning-tgv8yf0O.js","./introduction-Cz_TlcTY.js","./license-3ME4BcAz.js","./notice-CYXm8M3O.js","./alert-C7DTJ45P.js","./README-i1AxuvIj.js","./alert.stories-Cef-NrRp.js","./index-BtIsMGzF.js","./index-BLZ711uc.js","./CitationDocumentation-B3Shsstx.js","./button-DNPVMGrt.js","./README-8lw3oO5y.js","./button.stories-D-_Zf1QV.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-DDzowgyf.js","./checkbox.stories-BKCZ9ri8.js","./document-COVanxek.js","./document.stories-0MlrEPt6.js","./form-field-description-UR42ePA1.js","./form-field-description.stories-DXA61035.js","./preview-Bv8JVllW.js","./preview-ue4hCB0w.css","./form-field-error-message-CCCZxmm3.js","./form-field-error-message.stories-71WypFTs.js","./form-field-label-y4hz5UCM.js","./form-field-label.stories-tIWDQISE.js","./form-field-textbox-CALSLhed.js","./form-field-textbox.stories-Bdwbiqgl.js","./textbox.stories-BnV1J-0I.js","./form-field-B2HR-r9_.js","./index-cEa3Pm8r.js","./form-field.stories-CaSrGEUj.js","./heading-group-BL46P8Zt.js","./heading-group.stories-BenoZLgn.js","./heading-CPh5_Tx9.js","./heading.stories-CoGnlP8g.js","./link-B3O4_P1K.js","./README-CSNxhwJ5.js","./link.stories-BGmiVSfp.js","./paragraph-C6RXu9nX.js","./paragraph.stories-Dsaf765i.js","./pre-heading-C5Z3COkI.js","./pre-heading.stories-BitWYr31.js","./section-BgkJ5cmY.js","./section.stories-BFsi3B5M.js","./textbox-CNMYK-tR.js","./alert-x07AU55c.js","./alert.stories-DtFtqMG0.js","./components-Cp22cNJ4.js","./button-DlnQMJCr.js","./button.stories-Cla13ruH.js","./index-DbgQBs_-.js","./document.stories-Dd3Ck1Wg.js","./link-CBoWXC7c.js","./link.stories-BYB9WVwU.js","./inlogstraat-CeGGltTj.js","./login-link-themes-Dq788kTy.js","./login-link.stories-Dage0K5g.js","./login-link-gabYP-wg.js","./paragraph-B5ACPFBM.js","./paragraph.stories-BOb511GI.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens--bh7jsXi.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-r-dzl_eW.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-BIL8qIQK.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-kU_nR_Ee.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-C5ekmoKe.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-BFORXNCp.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-CuIOluNf.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-DhOEAiUr.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-PgekX4hD.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-DghhnRW2.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-Bd-t5o-T.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-Auv4mD2b.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-C5e-DuWf.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/developer/versioning.mdx": async () => __vitePreload(() => import("./versioning-tgv8yf0O.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/introduction.mdx": async () => __vitePreload(() => import("./introduction-Cz_TlcTY.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/license.mdx": async () => __vitePreload(() => import("./license-3ME4BcAz.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/notice.mdx": async () => __vitePreload(() => import("./notice-CYXm8M3O.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-C7DTJ45P.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,29,30,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-Cef-NrRp.js").then((n) => n.A), true ? __vite__mapDeps([30,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-DNPVMGrt.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,36,31,32,37,11,33]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D-_Zf1QV.js").then((n) => n.B), true ? __vite__mapDeps([36,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-DDzowgyf.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BKCZ9ri8.js").then((n) => n.C), true ? __vite__mapDeps([39,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-COVanxek.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-0MlrEPt6.js").then((n) => n.D), true ? __vite__mapDeps([41,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-UR42ePA1.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-DXA61035.js").then((n) => n.F), true ? __vite__mapDeps([43,31,2,3,32,44,1,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-CCCZxmm3.js"), true ? __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,47,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-71WypFTs.js").then((n) => n.F), true ? __vite__mapDeps([47,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-y4hz5UCM.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,31,32,44,45,33]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-tIWDQISE.js").then((n) => n.F), true ? __vite__mapDeps([49,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-CALSLhed.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,51,31,32,44,45,43,47,52]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-Bdwbiqgl.js").then((n) => n.F), true ? __vite__mapDeps([51,31,2,3,32,44,1,45,43,47,52]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-B2HR-r9_.js"), true ? __vite__mapDeps([53,1,2,3,4,54,7,5,6,8,9,55,31,32,44,45,33,51,43,47,52]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-CaSrGEUj.js").then((n) => n.F), true ? __vite__mapDeps([55,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-BL46P8Zt.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-BenoZLgn.js").then((n) => n.H), true ? __vite__mapDeps([57,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CPh5_Tx9.js"), true ? __vite__mapDeps([58,1,2,3,4,5,6,7,8,9,59,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-CoGnlP8g.js").then((n) => n.H), true ? __vite__mapDeps([59,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-B3O4_P1K.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,61,62,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BGmiVSfp.js").then((n) => n.L), true ? __vite__mapDeps([62,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-C6RXu9nX.js"), true ? __vite__mapDeps([63,1,2,3,4,5,6,7,8,9,64,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-Dsaf765i.js").then((n) => n.P), true ? __vite__mapDeps([64,1,2,3,31,32,37,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-C5Z3COkI.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,31,32,33]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-BitWYr31.js").then((n) => n.P), true ? __vite__mapDeps([66,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-BgkJ5cmY.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,31,32]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-BFsi3B5M.js").then((n) => n.S), true ? __vite__mapDeps([68,1,2,3,31,32]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-CNMYK-tR.js"), true ? __vite__mapDeps([69,1,2,3,4,54,7,5,6,8,9,52,31,32,44,45,33,51,43,47]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-BnV1J-0I.js").then((n) => n.T), true ? __vite__mapDeps([52,1,2,3,31,32,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-x07AU55c.js"), true ? __vite__mapDeps([70,1,2,3,4,5,6,7,8,9,29,71,32,72,37,11,33]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-DtFtqMG0.js").then((n) => n.A), true ? __vite__mapDeps([71,1,2,3,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-DlnQMJCr.js"), true ? __vite__mapDeps([73,1,2,3,4,5,6,7,8,9,35,74,32,75,37,11,72,33]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Cla13ruH.js").then((n) => n.B), true ? __vite__mapDeps([74,1,2,3,32,75,37,11,72]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Dd3Ck1Wg.js"), true ? __vite__mapDeps([76,1,2,3,32,37,11,72]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-CBoWXC7c.js"), true ? __vite__mapDeps([77,1,2,3,4,5,6,7,8,9,61,78,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BYB9WVwU.js").then((n) => n.L), true ? __vite__mapDeps([78,1,2,3,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-CeGGltTj.js"), true ? __vite__mapDeps([79,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-Dq788kTy.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,81,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-gabYP-wg.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,81,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-Dage0K5g.js").then((n) => n.L), true ? __vite__mapDeps([81,1,2,3,32,72,37,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-B5ACPFBM.js"), true ? __vite__mapDeps([83,1,2,3,4,5,6,7,8,9,84,32,37,11,72,33]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BOb511GI.js").then((n) => n.P), true ? __vite__mapDeps([84,1,2,3,32,37,11,72]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([85,2,3,86,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([87,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-fi8K7ZSa.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([88,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-tkBfMUlN.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([89,75]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([90,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-Bv8JVllW.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,31,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
