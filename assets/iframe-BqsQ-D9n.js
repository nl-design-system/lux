const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-7Wyv_yrz.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-SYPe7JDk.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-Cdx5r5UK.js","./focus-tokens-BY0siDt1.js","./font-tokens-D3ykys7s.js","./grid-tokens-yZXAbyOs.js","./sizing-tokens-DtAt3LvJ.js","./community-components-pAU9doaT.js","./border-tokens-DXqfJabp.js","./color-tokens-BKpIFx8S.js","./font-tokens-Dlc9Wpsv.js","./spacing-tokens-BWAIHTpp.js","./design-tokens-DTfIRICv.js","./community-component-aanleveren-C3UnyluA.js","./designers-CpcRIpcU.js","./developers-C6W4FpWD.js","./managers-DP52fhbk.js","./frameworks-abGisAnj.js","./kwaliteit-componenten-BK9Wl0St.js","./nl-design-system-IBBqENl-.js","./toegankelijkheid-DCMFVdms.js","./versioning-Dq53JTGN.js","./changelog-design-tokens-CCwLw5-i.js","./changelog-react-jZVZl0Jr.js","./changelog-stencil-react-BClbmXJu.js","./changelog-stencil-CueVMOfy.js","./faq-DUjlV_oW.js","./introduction-DlBr72oO.js","./license-ZMcMLFxu.js","./notice-CDg9GNpb.js","./alert-DkhDF521.js","./README-i1AxuvIj.js","./alert.stories-HnTBmuk9.js","./index-DcF6CAfA.js","./index-DdOurD3B.js","./preview-Dkg5Hipc.js","./preview-lQfjOpjq.css","./CitationDocumentation-B3Shsstx.js","./button-AuJ-s2yX.js","./README-8lw3oO5y.js","./button.stories-BPAJfdx0.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-Benlijgx.js","./checkbox.stories-DZjIWFA9.js","./document-CkmotHXQ.js","./document.stories-dbBJOubi.js","./form-field-checkbox-OO5QC9Nc.js","./form-field-checkbox.stories-CLxcEpq8.js","./form-field-description.stories-Dm9lLfLq.js","./form-field-error-message.stories-CoRTq0lf.js","./form-field-description-lTXQbaNR.js","./form-field-error-message-Df2hcc36.js","./form-field-label-BHu1nrLv.js","./form-field-label.stories-DPirUoSY.js","./form-field-radio-group-D4SasGmA.js","./form-field-radio-group.stories-BlMP9SHR.js","./form-field-radio-option-BYsy1D1g.js","./form-field-radio-option.stories-DIg9fKJe.js","./form-field-select-Cv3LsRgs.js","./form-field-select.stories-DfKnFcou.js","./select.stories-DTD-SOk7.js","./form-field-textarea-tq-to_RA.js","./form-field-textarea.stories-CBLkOBqH.js","./textarea.stories-BA65NSvc.js","./form-field-textbox-2bM9l8Gb.js","./form-field-textbox.stories-CU8w9yNC.js","./textbox.stories-CbArbrxo.js","./form-field--uNyyIi8.js","./index-cEa3Pm8r.js","./form-field.stories-CP9Uwdvw.js","./heading-group-DLTyzYyG.js","./heading-group.stories-B6oyo72E.js","./heading-CcIMdH-M.js","./heading.stories-D-ApnU-p.js","./icon-Bj-lW6mn.js","./icon.stories-CX1kYlUr.js","./link-DRWOOAag.js","./README-CSNxhwJ5.js","./link.stories-qqUTqjfm.js","./paragraph-BjAsI0np.js","./paragraph.stories-DDT0SBf3.js","./pre-heading-BADpWzo5.js","./pre-heading.stories-CYbVn-fz.js","./section-Dv6en7HQ.js","./section.stories-tWU-P0z3.js","./select-Vo6ldB7h.js","./textarea-BWVQK83e.js","./textbox-DunUUStI.js","./alert-J91wnfBn.js","./alert.stories-C9k9CPP4.js","./components-Cp22cNJ4.js","./button-BUBLhuiR.js","./button.stories-s1dOzKz6.js","./index-DbgQBs_-.js","./document.stories-DeZb7fzG.js","./link-Cf_C7jxr.js","./link.stories-Dz-Hh41t.js","./inlogstraat-BB-jU-m2.js","./login-link-themes-D-WR-WjB.js","./login-link.stories-B-YdS1iL.js","./login-link-ENP_qSS6.js","./paragraph-m2bz6d5a.js","./paragraph.stories-BspXlzix.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-7Wyv_yrz.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-Cdx5r5UK.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-BY0siDt1.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-D3ykys7s.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-yZXAbyOs.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-DtAt3LvJ.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-pAU9doaT.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-DXqfJabp.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-BKpIFx8S.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-Dlc9Wpsv.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-BWAIHTpp.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-DTfIRICv.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-C3UnyluA.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/designers.mdx": async () => __vitePreload(() => import("./designers-CpcRIpcU.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/developers.mdx": async () => __vitePreload(() => import("./developers-C6W4FpWD.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/managers.mdx": async () => __vitePreload(() => import("./managers-DP52fhbk.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-abGisAnj.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-BK9Wl0St.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-IBBqENl-.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-DCMFVdms.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/versioning.mdx": async () => __vitePreload(() => import("./versioning-Dq53JTGN.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-CCwLw5-i.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-jZVZl0Jr.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-BClbmXJu.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-CueVMOfy.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/faq.mdx": async () => __vitePreload(() => import("./faq-DUjlV_oW.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-DlBr72oO.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-ZMcMLFxu.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-CDg9GNpb.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-DkhDF521.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-HnTBmuk9.js").then((n) => n.A), true ? __vite__mapDeps([42,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-AuJ-s2yX.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-BPAJfdx0.js").then((n) => n.B), true ? __vite__mapDeps([50,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-Benlijgx.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-DZjIWFA9.js").then((n) => n.C), true ? __vite__mapDeps([53,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-CkmotHXQ.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-dbBJOubi.js").then((n) => n.D), true ? __vite__mapDeps([55,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-OO5QC9Nc.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-CLxcEpq8.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-lTXQbaNR.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,58,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-Dm9lLfLq.js").then((n) => n.F), true ? __vite__mapDeps([58,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-Df2hcc36.js"), true ? __vite__mapDeps([61,1,2,3,4,5,6,7,8,9,59,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-CoRTq0lf.js").then((n) => n.F), true ? __vite__mapDeps([59,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-BHu1nrLv.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-DPirUoSY.js").then((n) => n.F), true ? __vite__mapDeps([63,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-D4SasGmA.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,65,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-BlMP9SHR.js").then((n) => n.R), true ? __vite__mapDeps([65,1,2,3,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-BYsy1D1g.js"), true ? __vite__mapDeps([66,1,2,3,4,5,6,7,8,9,67,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-DIg9fKJe.js").then((n) => n.F), true ? __vite__mapDeps([67,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-Cv3LsRgs.js"), true ? __vite__mapDeps([68,1,2,3,4,5,6,7,8,9,69,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-DfKnFcou.js").then((n) => n.F), true ? __vite__mapDeps([69,1,2,3,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-tq-to_RA.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-CBLkOBqH.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-2bM9l8Gb.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-CU8w9yNC.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field--uNyyIi8.js"), true ? __vite__mapDeps([77,1,2,3,4,78,7,5,6,8,9,79,43,44,45,46,51,11,47,75,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-CP9Uwdvw.js").then((n) => n.F), true ? __vite__mapDeps([79,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-DLTyzYyG.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,81,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-B6oyo72E.js").then((n) => n.H), true ? __vite__mapDeps([81,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-CcIMdH-M.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,83,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-D-ApnU-p.js").then((n) => n.H), true ? __vite__mapDeps([83,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-Bj-lW6mn.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,85,43]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CX1kYlUr.js").then((n) => n.I), true ? __vite__mapDeps([85,1,2,3,43]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-DRWOOAag.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,87,88,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-qqUTqjfm.js").then((n) => n.L), true ? __vite__mapDeps([88,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BjAsI0np.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,90,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-DDT0SBf3.js").then((n) => n.P), true ? __vite__mapDeps([90,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-BADpWzo5.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-CYbVn-fz.js").then((n) => n.P), true ? __vite__mapDeps([92,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-Dv6en7HQ.js"), true ? __vite__mapDeps([93,1,2,3,4,5,6,7,8,9,94,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-tWU-P0z3.js").then((n) => n.S), true ? __vite__mapDeps([94,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-Vo6ldB7h.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,70,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-DTD-SOk7.js").then((n) => n.S), true ? __vite__mapDeps([70,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-BWVQK83e.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,73,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-BA65NSvc.js").then((n) => n.T), true ? __vite__mapDeps([73,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-DunUUStI.js"), true ? __vite__mapDeps([97,1,2,3,4,78,7,5,6,8,9,76,43,44,45,46,47,75,51,11,58,59]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-CbArbrxo.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-J91wnfBn.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,41,99,44,100,51,11,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-C9k9CPP4.js").then((n) => n.A), true ? __vite__mapDeps([99,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-BUBLhuiR.js"), true ? __vite__mapDeps([101,1,2,3,4,5,6,7,8,9,49,102,44,103,51,11,100,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-s1dOzKz6.js").then((n) => n.B), true ? __vite__mapDeps([102,1,2,3,44,103,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DeZb7fzG.js"), true ? __vite__mapDeps([104,1,2,3,44,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-Cf_C7jxr.js"), true ? __vite__mapDeps([105,1,2,3,4,5,6,7,8,9,87,106,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Dz-Hh41t.js").then((n) => n.L), true ? __vite__mapDeps([106,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BB-jU-m2.js"), true ? __vite__mapDeps([107,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-D-WR-WjB.js"), true ? __vite__mapDeps([108,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-ENP_qSS6.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B-YdS1iL.js").then((n) => n.L), true ? __vite__mapDeps([109,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-m2bz6d5a.js"), true ? __vite__mapDeps([111,1,2,3,4,5,6,7,8,9,112,44,51,11,100,47]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BspXlzix.js").then((n) => n.P), true ? __vite__mapDeps([112,1,2,3,44,51,11,100]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([113,2,3,114,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([115,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-BmMrlFJP.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([116,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-B9h0unic.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([117,103]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([118,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-Dkg5Hipc.js").then((n) => n.p), true ? __vite__mapDeps([45,1,2,3,43,46]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
