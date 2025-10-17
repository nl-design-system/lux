const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./community-components-BxzV7ynR.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-g9DxLYiK.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./component-aanleveren-x-rN13ic.js","./aan-de-slag-BhjuYA15.js","./aan-de-slag-B5uXP6lK.js","./design-tokens-mappen-CRlNMN2W.js","./frameworks-Dp7RXynC.js","./border-tokens-BlOklddM.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-CoIb4NEJ.js","./focus-tokens-BtKWs_5N.js","./font-tokens-D60YzJrk.js","./grid-tokens-QxgDZqsn.js","./sizing-tokens-bZkPhVCO.js","./border-tokens-8qmq4TwG.js","./color-tokens-dByKxTbN.js","./font-tokens-Lj4B44Qq.js","./spacing-tokens-D34LhyCX.js","./design-tokens-DG5uXN8a.js","./changelog-design-tokens-DUnEkcAZ.js","./changelog-react-CFa54syW.js","./changelog-stencil-react-C9nA_2uy.js","./changelog-stencil-ILLNP5II.js","./introduction-DWQ-W78b.js","./kwaliteit-componenten-BQaiN_du.js","./license-CBmvk8XH.js","./nl-design-system-wiKdFPBp.js","./notice-Dis3kvZH.js","./toegankelijkheid-DybPFPtn.js","./versioning-W1Oc8UhF.js","./wat-is-lux-BesgBrd_.js","./accordion-xyQfYDU_.js","./accordion.stories-CBBsfZ3w.js","./index-BJfiFLmy.js","./index-DB79t5Cy.js","./preview-QOp-7mut.js","./preview-B66CYNxG.css","./createReactComponent-9_R8Iz-X.js","./CitationDocumentation-B3Shsstx.js","./alert-BAhJPQwf.js","./README-i1AxuvIj.js","./alert.stories-BSZepXhY.js","./button-B-RYvoGC.js","./README-8lw3oO5y.js","./button.stories-ByTL3iQi.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-BIIZzxsP.js","./checkbox.stories-BWGLrvs1.js","./document-D5AjDUU3.js","./document.stories-o59sHCbv.js","./form-field-checkbox-DukZ88ZK.js","./form-field-checkbox.stories-C_Et1jxQ.js","./form-field-description.stories-BSTc8dkv.js","./form-field-error-message.stories-gEc_i5k8.js","./form-field-description-DsZBCY0R.js","./form-field-error-message-Dtvnzkf2.js","./form-field-label-DU3Ec1jU.js","./form-field-label.stories-D_MZ7EY1.js","./form-field-radio-group-BSP_SlSY.js","./form-field-radio-group.stories-CWtIdgQm.js","./form-field-radio-option-DHecSWet.js","./form-field-radio-option.stories-CjNTgoOI.js","./form-field-select-CHfGb8Vw.js","./form-field-select.stories-BI8UlHbj.js","./select.stories-ConbT0vg.js","./form-field-textarea-GYvRcZMZ.js","./form-field-textarea.stories-D57FjBp0.js","./textarea.stories-C4gT6cFc.js","./form-field-textbox-6NXqjDHO.js","./form-field-textbox.stories-BGrKpDpZ.js","./textbox.stories-BmzRneFE.js","./form-field-XXnDDF8D.js","./index-cEa3Pm8r.js","./form-field.stories-wnPP5nSn.js","./heading-group-DUEY8LHB.js","./heading-group.stories-Bb0PsZ1Q.js","./heading-DmHLRhPf.js","./heading.stories-p2a8AUA_.js","./icon-CWaNFF3Z.js","./icon.stories-DiwUTyie.js","./link-list-CjtVB3lK.js","./link-list.stories-QVUAs-Xr.js","./link-V2iB5a5x.js","./README-CSNxhwJ5.js","./link.stories-CrXDGbgw.js","./paragraph-NcJRAD75.js","./paragraph.stories-CAvyMr6U.js","./pre-heading-BTBTUHrd.js","./pre-heading.stories-BBK2-inR.js","./section-dMRqWvov.js","./section.stories-CMaTfjnh.js","./select-B_njlYxW.js","./textarea-Bhszg7Nv.js","./textbox-BQQzPagL.js","./alert-BfMHD07o.js","./alert.stories-ChQzZMwA.js","./components-Cp22cNJ4.js","./button-BdKFvTIk.js","./button.stories-Dvh1nLC7.js","./index-DbgQBs_-.js","./document.stories-DjR7UwCz.js","./link-ttwJvFw2.js","./link.stories-Uv74VEeB.js","./inlogstraat-CeytPhZ5.js","./login-link-themes-yoGccQLk.js","./login-link.stories-B4lpo2JZ.js","./login-link-Bubdxv0e.js","./paragraph-BeJeQv2e.js","./paragraph.stories-Bqkom019.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/aan-de-slag/bijdragen/community-components.mdx": async () => __vitePreload(() => import("./community-components-BxzV7ynR.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/aan-de-slag/bijdragen/component-aanleveren.mdx": async () => __vitePreload(() => import("./component-aanleveren-x-rN13ic.js"), true ? __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/aan-de-slag/ontwerpen/aan-de-slag.mdx": async () => __vitePreload(() => import("./aan-de-slag-BhjuYA15.js"), true ? __vite__mapDeps([11,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/aan-de-slag/ontwikkelen/aan-de-slag.mdx": async () => __vitePreload(() => import("./aan-de-slag-B5uXP6lK.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/aan-de-slag/ontwikkelen/design-tokens-mappen.mdx": async () => __vitePreload(() => import("./design-tokens-mappen-CRlNMN2W.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/aan-de-slag/ontwikkelen/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-Dp7RXynC.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-BlOklddM.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-CoIb4NEJ.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-BtKWs_5N.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-D60YzJrk.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-QxgDZqsn.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-bZkPhVCO.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-8qmq4TwG.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-dByKxTbN.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-Lj4B44Qq.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-D34LhyCX.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,16,17]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-DG5uXN8a.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-DUnEkcAZ.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-CFa54syW.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-C9nA_2uy.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-ILLNP5II.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-DWQ-W78b.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-BQaiN_du.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-CBmvk8XH.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-wiKdFPBp.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-Dis3kvZH.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-DybPFPtn.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/versioning.mdx": async () => __vitePreload(() => import("./versioning-W1Oc8UhF.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/wat-is-lux.mdx": async () => __vitePreload(() => import("./wat-is-lux-BesgBrd_.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/accordion/accordion.mdx": async () => __vitePreload(() => import("./accordion-xyQfYDU_.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/accordion/accordion.stories.tsx": async () => __vitePreload(() => import("./accordion.stories-CBBsfZ3w.js").then((n) => n.A), true ? __vite__mapDeps([41,1,2,3,42,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BAhJPQwf.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,42,43,44,45,17,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-BSZepXhY.js").then((n) => n.A), true ? __vite__mapDeps([50,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-B-RYvoGC.js"), true ? __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,52,53,42,43,44,45,54,17,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-ByTL3iQi.js").then((n) => n.B), true ? __vite__mapDeps([53,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-BIIZzxsP.js"), true ? __vite__mapDeps([55,1,2,3,4,5,6,7,8,9,56,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BWGLrvs1.js").then((n) => n.C), true ? __vite__mapDeps([56,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-D5AjDUU3.js"), true ? __vite__mapDeps([57,1,2,3,4,5,6,7,8,9,58,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-o59sHCbv.js").then((n) => n.D), true ? __vite__mapDeps([58,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-DukZ88ZK.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,42,43,44,45,54,17,56,61,62]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-C_Et1jxQ.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,42,43,44,45,54,17,56,61,62]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-DsZBCY0R.js"), true ? __vite__mapDeps([63,1,2,3,4,5,6,7,8,9,61,42,43,44,45,54,17,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-BSTc8dkv.js").then((n) => n.F), true ? __vite__mapDeps([61,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-Dtvnzkf2.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,62,42,43,44,45,54,17,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-gEc_i5k8.js").then((n) => n.F), true ? __vite__mapDeps([62,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-DU3Ec1jU.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,42,43,44,45,54,17,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-D_MZ7EY1.js").then((n) => n.F), true ? __vite__mapDeps([66,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-BSP_SlSY.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,42,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-CWtIdgQm.js").then((n) => n.R), true ? __vite__mapDeps([68,1,2,3,42,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-DHecSWet.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-CjNTgoOI.js").then((n) => n.F), true ? __vite__mapDeps([70,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-CHfGb8Vw.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,42,43,44,45,54,17,61,62,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-BI8UlHbj.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,42,43,44,45,54,17,61,62,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-GYvRcZMZ.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,42,43,44,45,54,17,61,62,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-D57FjBp0.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,42,43,44,45,54,17,61,62,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-6NXqjDHO.js"), true ? __vite__mapDeps([77,1,2,3,4,5,6,7,8,9,78,42,43,44,45,54,17,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-BGrKpDpZ.js").then((n) => n.F), true ? __vite__mapDeps([78,1,2,3,42,43,44,45,54,17,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-XXnDDF8D.js"), true ? __vite__mapDeps([80,1,2,3,4,81,7,5,6,8,9,82,42,43,44,45,54,17,47,78,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-wnPP5nSn.js").then((n) => n.F), true ? __vite__mapDeps([82,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-DUEY8LHB.js"), true ? __vite__mapDeps([83,1,2,3,4,5,6,7,8,9,84,42,43,44,45,17,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-Bb0PsZ1Q.js").then((n) => n.H), true ? __vite__mapDeps([84,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-DmHLRhPf.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,86,42,43,44,45,54,17,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-p2a8AUA_.js").then((n) => n.H), true ? __vite__mapDeps([86,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-CWaNFF3Z.js"), true ? __vite__mapDeps([87,1,2,3,4,5,6,7,8,9,88,42,46]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-DiwUTyie.js").then((n) => n.I), true ? __vite__mapDeps([88,1,2,3,42,46]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.mdx": async () => __vitePreload(() => import("./link-list-CjtVB3lK.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,90,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.stories.tsx": async () => __vitePreload(() => import("./link-list.stories-QVUAs-Xr.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-V2iB5a5x.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,93,42,43,44,45,17,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-CrXDGbgw.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-NcJRAD75.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,95,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-CAvyMr6U.js").then((n) => n.P), true ? __vite__mapDeps([95,1,2,3,42,43,44,45,54,17]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-BTBTUHrd.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,97,42,43,44,45,17,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-BBK2-inR.js").then((n) => n.P), true ? __vite__mapDeps([97,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-dMRqWvov.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,99,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-CMaTfjnh.js").then((n) => n.S), true ? __vite__mapDeps([99,1,2,3,42,43,44,45,17]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-B_njlYxW.js"), true ? __vite__mapDeps([100,1,2,3,4,5,6,7,8,9,73,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-ConbT0vg.js").then((n) => n.S), true ? __vite__mapDeps([73,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-Bhszg7Nv.js"), true ? __vite__mapDeps([101,1,2,3,4,5,6,7,8,9,76,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-C4gT6cFc.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-BQQzPagL.js"), true ? __vite__mapDeps([102,1,2,3,4,81,7,5,6,8,9,79,42,43,44,45,47,78,54,17,61,62]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-BmzRneFE.js").then((n) => n.T), true ? __vite__mapDeps([79,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BfMHD07o.js"), true ? __vite__mapDeps([103,1,2,3,4,5,6,7,8,9,49,104,43,105,54,17,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-ChQzZMwA.js").then((n) => n.A), true ? __vite__mapDeps([104,1,2,3,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-BdKFvTIk.js"), true ? __vite__mapDeps([106,1,2,3,4,5,6,7,8,9,52,107,43,108,54,17,105,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Dvh1nLC7.js").then((n) => n.B), true ? __vite__mapDeps([107,1,2,3,43,108,54,17,105]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DjR7UwCz.js"), true ? __vite__mapDeps([109,1,2,3,43,54,17,105]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-ttwJvFw2.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,92,111,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Uv74VEeB.js").then((n) => n.L), true ? __vite__mapDeps([111,1,2,3,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-CeytPhZ5.js"), true ? __vite__mapDeps([112,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-yoGccQLk.js"), true ? __vite__mapDeps([113,1,2,3,4,5,6,7,8,9,114,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-Bubdxv0e.js"), true ? __vite__mapDeps([115,1,2,3,4,5,6,7,8,9,114,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B4lpo2JZ.js").then((n) => n.L), true ? __vite__mapDeps([114,1,2,3,43,105,54,17]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BeJeQv2e.js"), true ? __vite__mapDeps([116,1,2,3,4,5,6,7,8,9,117,43,54,17,105,47]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-Bqkom019.js").then((n) => n.P), true ? __vite__mapDeps([117,1,2,3,43,54,17,105]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([118,2,3,119,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([120,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-DlIQejAM.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([121,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-D-hd7lkM.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([122,108]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([123,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-QOp-7mut.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,42,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
