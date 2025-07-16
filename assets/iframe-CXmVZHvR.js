const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-CbB3IDlQ.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-Dh68SCX0.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-BHjx7Y0p.js","./focus-tokens-B5fWvKbP.js","./font-tokens-D59WKNf5.js","./grid-tokens-BdRLyKEW.js","./sizing-tokens-q6FmOmH0.js","./community-components-ax1wmQRB.js","./border-tokens-DUNpK3EZ.js","./color-tokens-B0iKQ5rl.js","./font-tokens-qdJJCEzr.js","./spacing-tokens-D3_CDnDc.js","./design-tokens-CyoC8Nzr.js","./community-component-aanleveren-BkCbWqw3.js","./designers-BIHN_m7m.js","./developers-CB0AMg7H.js","./managers-CzVF3Gdl.js","./frameworks-uNh9ZEnA.js","./kwaliteit-componenten-CxWBvVhW.js","./nl-design-system-B94LyOH6.js","./toegankelijkheid-BLcMySaB.js","./versioning-C7Gu5bJO.js","./changelog-design-tokens-CLm7_MVA.js","./changelog-react-QNpaGa1L.js","./changelog-stencil-react-BzlOpel0.js","./changelog-stencil-CEUe_Y2B.js","./faq-VB2IN2xV.js","./introduction-D8VGTy7f.js","./license-Bg5nNOJM.js","./notice-CMXId8eY.js","./alert-6achJcuS.js","./README-i1AxuvIj.js","./alert.stories-Ivo5ZKEk.js","./index-B-gkZtmO.js","./index-LWoe1EYi.js","./preview-B_whIBb-.js","./preview-ammtPPqx.css","./CitationDocumentation-B3Shsstx.js","./button-BJoToIFv.js","./README-8lw3oO5y.js","./button.stories-CmopbZc_.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-CAPElBqI.js","./checkbox.stories-BguL6ZJK.js","./document-C-Bqr_yh.js","./document.stories-I2yabjBw.js","./form-field-checkbox-D0KhBXFG.js","./form-field-checkbox.stories-Dtwuk8fo.js","./form-field-description.stories-ByJ61bCJ.js","./form-field-error-message.stories-CTTPXOEy.js","./form-field-description-CKx4aqaW.js","./form-field-error-message-DUXq1ZB7.js","./form-field-label-C2WZrImu.js","./form-field-label.stories-C1yQhDGt.js","./form-field-radio-group-DHXF2neb.js","./form-field-radio-group.stories-DsXlLugY.js","./form-field-radio-option-Ck3IzBEO.js","./form-field-radio-option.stories-DtFRRCZy.js","./form-field-select-BIBLuXOY.js","./form-field-select.stories-CRKPx4GW.js","./select.stories-D9bTxZ6X.js","./form-field-textarea-CXbi8smz.js","./form-field-textarea.stories-BVIeYWHh.js","./textarea.stories-D35Wk1OZ.js","./form-field-textbox-DCMgOxlC.js","./form-field-textbox.stories-NUauZqni.js","./textbox.stories-Bi5fWbf-.js","./form-field-DoVuJUga.js","./index-cEa3Pm8r.js","./form-field.stories-C9xCYa9W.js","./heading-group-B4dsx8Bp.js","./heading-group.stories-BQC43ULX.js","./heading-CdwDlq-_.js","./heading.stories-Ctlw2RP1.js","./icon-SCKOE4v-.js","./icon.stories-DmL7hQ7_.js","./link-list-DeQbrWQL.js","./link-list.stories-Bsj4qiZk.js","./link-ChqXwEsQ.js","./README-CSNxhwJ5.js","./link.stories-Ctvhd9QL.js","./paragraph-j89m1V9E.js","./paragraph.stories-D9PlWija.js","./pre-heading-BgLyrEVo.js","./pre-heading.stories-_P5PLgkH.js","./section-CyJ9gSfq.js","./section.stories-C_rQ1Axy.js","./select-CiMzysVJ.js","./textarea-xts7gTXW.js","./textbox-ChT7k12S.js","./alert-DSuUdO2V.js","./alert.stories-CCEmfxJ8.js","./components-Cp22cNJ4.js","./button-C21uvMiI.js","./button.stories-D_lAlN8m.js","./index-DbgQBs_-.js","./document.stories-B6TG6qnX.js","./link-CDry4A8i.js","./link.stories-DS1oNJNc.js","./inlogstraat-DLIluANH.js","./login-link-themes-BRuYq-GL.js","./login-link.stories-CRgKhAlX.js","./login-link-C1Jjnk49.js","./paragraph-CGyUKuSP.js","./paragraph.stories-BzB-qzyQ.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CbB3IDlQ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-BHjx7Y0p.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-B5fWvKbP.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-D59WKNf5.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-BdRLyKEW.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-q6FmOmH0.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-ax1wmQRB.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-DUNpK3EZ.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-B0iKQ5rl.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-qdJJCEzr.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-D3_CDnDc.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-CyoC8Nzr.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-BkCbWqw3.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/designers.mdx": async () => __vitePreload(() => import("./designers-BIHN_m7m.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/developers.mdx": async () => __vitePreload(() => import("./developers-CB0AMg7H.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/managers.mdx": async () => __vitePreload(() => import("./managers-CzVF3Gdl.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-uNh9ZEnA.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-CxWBvVhW.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-B94LyOH6.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-BLcMySaB.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/versioning.mdx": async () => __vitePreload(() => import("./versioning-C7Gu5bJO.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-CLm7_MVA.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-QNpaGa1L.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-BzlOpel0.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-CEUe_Y2B.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/faq.mdx": async () => __vitePreload(() => import("./faq-VB2IN2xV.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-D8VGTy7f.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-Bg5nNOJM.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-CMXId8eY.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-6achJcuS.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-Ivo5ZKEk.js").then((n) => n.A), true ? __vite__mapDeps([42,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-BJoToIFv.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-CmopbZc_.js").then((n) => n.B), true ? __vite__mapDeps([50,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-CAPElBqI.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BguL6ZJK.js").then((n) => n.C), true ? __vite__mapDeps([53,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-C-Bqr_yh.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-I2yabjBw.js").then((n) => n.D), true ? __vite__mapDeps([55,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-D0KhBXFG.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-Dtwuk8fo.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-CKx4aqaW.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,58,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-ByJ61bCJ.js").then((n) => n.F), true ? __vite__mapDeps([58,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-DUXq1ZB7.js"), true ? __vite__mapDeps([61,1,2,3,4,5,6,7,8,9,59,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-CTTPXOEy.js").then((n) => n.F), true ? __vite__mapDeps([59,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-C2WZrImu.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-C1yQhDGt.js").then((n) => n.F), true ? __vite__mapDeps([63,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-DHXF2neb.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,65,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-DsXlLugY.js").then((n) => n.R), true ? __vite__mapDeps([65,1,2,3,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-Ck3IzBEO.js"), true ? __vite__mapDeps([66,1,2,3,4,5,6,7,8,9,67,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-DtFRRCZy.js").then((n) => n.F), true ? __vite__mapDeps([67,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-BIBLuXOY.js"), true ? __vite__mapDeps([68,1,2,3,4,5,6,7,8,9,69,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-CRKPx4GW.js").then((n) => n.F), true ? __vite__mapDeps([69,1,2,3,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-CXbi8smz.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-BVIeYWHh.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-DCMgOxlC.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-NUauZqni.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-DoVuJUga.js"), true ? __vite__mapDeps([77,1,2,3,4,78,7,5,6,8,9,79,43,44,45,46,51,11,47,75,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-C9xCYa9W.js").then((n) => n.F), true ? __vite__mapDeps([79,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-B4dsx8Bp.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,81,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-BQC43ULX.js").then((n) => n.H), true ? __vite__mapDeps([81,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CdwDlq-_.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,83,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-Ctlw2RP1.js").then((n) => n.H), true ? __vite__mapDeps([83,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-SCKOE4v-.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,85,43]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-DmL7hQ7_.js").then((n) => n.I), true ? __vite__mapDeps([85,1,2,3,43]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.mdx": async () => __vitePreload(() => import("./link-list-DeQbrWQL.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,87,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.stories.tsx": async () => __vitePreload(() => import("./link-list.stories-Bsj4qiZk.js").then((n) => n.L), true ? __vite__mapDeps([87,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-ChqXwEsQ.js"), true ? __vite__mapDeps([88,1,2,3,4,5,6,7,8,9,89,90,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Ctvhd9QL.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-j89m1V9E.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-D9PlWija.js").then((n) => n.P), true ? __vite__mapDeps([92,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-BgLyrEVo.js"), true ? __vite__mapDeps([93,1,2,3,4,5,6,7,8,9,94,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-_P5PLgkH.js").then((n) => n.P), true ? __vite__mapDeps([94,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-CyJ9gSfq.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,96,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-C_rQ1Axy.js").then((n) => n.S), true ? __vite__mapDeps([96,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-CiMzysVJ.js"), true ? __vite__mapDeps([97,1,2,3,4,5,6,7,8,9,70,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-D9bTxZ6X.js").then((n) => n.S), true ? __vite__mapDeps([70,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-xts7gTXW.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,73,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-D35Wk1OZ.js").then((n) => n.T), true ? __vite__mapDeps([73,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-ChT7k12S.js"), true ? __vite__mapDeps([99,1,2,3,4,78,7,5,6,8,9,76,43,44,45,46,47,75,51,11,58,59]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-Bi5fWbf-.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-DSuUdO2V.js"), true ? __vite__mapDeps([100,1,2,3,4,5,6,7,8,9,41,101,44,102,51,11,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-CCEmfxJ8.js").then((n) => n.A), true ? __vite__mapDeps([101,1,2,3,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-C21uvMiI.js"), true ? __vite__mapDeps([103,1,2,3,4,5,6,7,8,9,49,104,44,105,51,11,102,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D_lAlN8m.js").then((n) => n.B), true ? __vite__mapDeps([104,1,2,3,44,105,51,11,102]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-B6TG6qnX.js"), true ? __vite__mapDeps([106,1,2,3,44,51,11,102]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-CDry4A8i.js"), true ? __vite__mapDeps([107,1,2,3,4,5,6,7,8,9,89,108,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-DS1oNJNc.js").then((n) => n.L), true ? __vite__mapDeps([108,1,2,3,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-DLIluANH.js"), true ? __vite__mapDeps([109,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-BRuYq-GL.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,111,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-C1Jjnk49.js"), true ? __vite__mapDeps([112,1,2,3,4,5,6,7,8,9,111,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-CRgKhAlX.js").then((n) => n.L), true ? __vite__mapDeps([111,1,2,3,44,102,51,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CGyUKuSP.js"), true ? __vite__mapDeps([113,1,2,3,4,5,6,7,8,9,114,44,51,11,102,47]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BzB-qzyQ.js").then((n) => n.P), true ? __vite__mapDeps([114,1,2,3,44,51,11,102]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([115,2,3,116,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([117,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-B_bhSY9m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([118,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-tIl9Kw2s.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([119,105]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([120,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-B_whIBb-.js").then((n) => n.p), true ? __vite__mapDeps([45,1,2,3,43,46]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
