const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-CYtzfnJ_.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-C0djgf0U.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-UZpal3s7.js","./focus-tokens--StqPGFW.js","./font-tokens-Lki52y54.js","./grid-tokens-DdyuOTEB.js","./sizing-tokens-CP8vKRgu.js","./community-components-DBN14Aev.js","./border-tokens-C6cepRqj.js","./color-tokens-DRSNtT4-.js","./font-tokens-BHXjekyX.js","./spacing-tokens-C-SQqqAi.js","./design-tokens-DEZ4qcqg.js","./community-component-aanleveren-BO74lLOE.js","./designers-xmQxv7Pk.js","./developers-BGhetiDj.js","./managers-DqCNjG3r.js","./frameworks-CfHJ3k9z.js","./kwaliteit-componenten-gorZpfe7.js","./nl-design-system-DXJUEWKY.js","./toegankelijkheid-BwU_xxnG.js","./versioning-B3nqY1rF.js","./changelog-design-tokens-C41p96_b.js","./changelog-react-D8JEJ6b2.js","./changelog-stencil-react-Coz_BPTL.js","./changelog-stencil-jC5uP6A_.js","./faq-BpVOOEz4.js","./introduction-CcPlPgR0.js","./license-yAadyDgC.js","./notice-DfRTXHQX.js","./alert-CQAi-klR.js","./README-i1AxuvIj.js","./alert.stories-GMyBgL9G.js","./index-DcF6CAfA.js","./index-DdOurD3B.js","./preview-SWj-Nf6K.js","./preview-BiE0_n9b.css","./CitationDocumentation-B3Shsstx.js","./button-DuKaW97g.js","./README-8lw3oO5y.js","./button.stories-j5nGEqQ_.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-CNvmByU2.js","./checkbox.stories-B7HG-IA8.js","./document-D-1vE0TK.js","./document.stories-DUq0Z7En.js","./form-field-checkbox-DBd8XqiU.js","./form-field-checkbox.stories-CetdxKNp.js","./form-field-description.stories-DmbLguMA.js","./form-field-error-message.stories-D6kkNk5z.js","./form-field-description-Dst2OEK0.js","./form-field-error-message-BngT7_QU.js","./form-field-label-DS01HVM5.js","./form-field-label.stories-BVzKhTbH.js","./form-field-radio-group-vHeuYPmY.js","./form-field-radio-group.stories-nynMVV0A.js","./form-field-radio-option-Ck16y6Hw.js","./form-field-radio-option.stories-5ebiZuV2.js","./form-field-select-CCwgfDWg.js","./form-field-select.stories-gDK2k_HD.js","./select.stories-B1_tO3vW.js","./form-field-textarea-Dml0_xwn.js","./form-field-textarea.stories-fGQkPxTA.js","./textarea.stories-DJuTZKEy.js","./form-field-textbox-DuCI-pfY.js","./form-field-textbox.stories-Dgvd-84k.js","./textbox.stories-CRk2iFJi.js","./form-field-BC-X77a8.js","./index-cEa3Pm8r.js","./form-field.stories-Bz7eD4sz.js","./heading-group-D1wRjZf3.js","./heading-group.stories-tz0Dw3r7.js","./heading-Dpr7oWpZ.js","./heading.stories-DSNn-NlG.js","./icon-B30FCHI0.js","./icon.stories-CX1kYlUr.js","./link-DqbRCAHy.js","./README-CSNxhwJ5.js","./link.stories-B1_mwyAA.js","./paragraph-DnLqe1ZQ.js","./paragraph.stories-BF05kUZB.js","./pre-heading-D_nKwmwZ.js","./pre-heading.stories-DfMjVxtq.js","./section-DTiUe8-e.js","./section.stories-BONf7HvL.js","./select-7JbnEytl.js","./textarea-CStxzccz.js","./textbox-CpdZ09VP.js","./alert-DbQk1yXr.js","./alert.stories-C9k9CPP4.js","./components-Cp22cNJ4.js","./button-DiPfYzyK.js","./button.stories-s1dOzKz6.js","./index-DbgQBs_-.js","./document.stories-DeZb7fzG.js","./link-ymSCfAV6.js","./link.stories-Dz-Hh41t.js","./inlogstraat-BCTxjfY_.js","./login-link-themes-6-FHLSEU.js","./login-link.stories-B-YdS1iL.js","./login-link-DtmFG8YB.js","./paragraph-643kJFwT.js","./paragraph.stories-BspXlzix.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CYtzfnJ_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-UZpal3s7.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens--StqPGFW.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-Lki52y54.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-DdyuOTEB.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-CP8vKRgu.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-DBN14Aev.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-C6cepRqj.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-DRSNtT4-.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-BHXjekyX.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-C-SQqqAi.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-DEZ4qcqg.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-BO74lLOE.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/designers.mdx": async () => __vitePreload(() => import("./designers-xmQxv7Pk.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/developers.mdx": async () => __vitePreload(() => import("./developers-BGhetiDj.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/managers.mdx": async () => __vitePreload(() => import("./managers-DqCNjG3r.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-CfHJ3k9z.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-gorZpfe7.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-DXJUEWKY.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-BwU_xxnG.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/versioning.mdx": async () => __vitePreload(() => import("./versioning-B3nqY1rF.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-C41p96_b.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-D8JEJ6b2.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-Coz_BPTL.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-jC5uP6A_.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/faq.mdx": async () => __vitePreload(() => import("./faq-BpVOOEz4.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-CcPlPgR0.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-yAadyDgC.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-DfRTXHQX.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-CQAi-klR.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-GMyBgL9G.js").then((n) => n.A), true ? __vite__mapDeps([42,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-DuKaW97g.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-j5nGEqQ_.js").then((n) => n.B), true ? __vite__mapDeps([50,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-CNvmByU2.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-B7HG-IA8.js").then((n) => n.C), true ? __vite__mapDeps([53,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-D-1vE0TK.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DUq0Z7En.js").then((n) => n.D), true ? __vite__mapDeps([55,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-DBd8XqiU.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-CetdxKNp.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-Dst2OEK0.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,58,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-DmbLguMA.js").then((n) => n.F), true ? __vite__mapDeps([58,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-BngT7_QU.js"), true ? __vite__mapDeps([61,1,2,3,4,5,6,7,8,9,59,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-D6kkNk5z.js").then((n) => n.F), true ? __vite__mapDeps([59,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-DS01HVM5.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-BVzKhTbH.js").then((n) => n.F), true ? __vite__mapDeps([63,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-vHeuYPmY.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,65,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-nynMVV0A.js").then((n) => n.R), true ? __vite__mapDeps([65,1,2,3,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-Ck16y6Hw.js"), true ? __vite__mapDeps([66,1,2,3,4,5,6,7,8,9,67,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-5ebiZuV2.js").then((n) => n.F), true ? __vite__mapDeps([67,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-CCwgfDWg.js"), true ? __vite__mapDeps([68,1,2,3,4,5,6,7,8,9,69,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-gDK2k_HD.js").then((n) => n.F), true ? __vite__mapDeps([69,1,2,3,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-Dml0_xwn.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-fGQkPxTA.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-DuCI-pfY.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-Dgvd-84k.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-BC-X77a8.js"), true ? __vite__mapDeps([77,1,2,3,4,78,7,5,6,8,9,79,43,44,45,46,51,11,47,75,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-Bz7eD4sz.js").then((n) => n.F), true ? __vite__mapDeps([79,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-D1wRjZf3.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,81,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-tz0Dw3r7.js").then((n) => n.H), true ? __vite__mapDeps([81,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-Dpr7oWpZ.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,83,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-DSNn-NlG.js").then((n) => n.H), true ? __vite__mapDeps([83,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-B30FCHI0.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,85,43]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CX1kYlUr.js").then((n) => n.I), true ? __vite__mapDeps([85,1,2,3,43]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-DqbRCAHy.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,87,88,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-B1_mwyAA.js").then((n) => n.L), true ? __vite__mapDeps([88,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DnLqe1ZQ.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,90,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-BF05kUZB.js").then((n) => n.P), true ? __vite__mapDeps([90,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-D_nKwmwZ.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-DfMjVxtq.js").then((n) => n.P), true ? __vite__mapDeps([92,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-DTiUe8-e.js"), true ? __vite__mapDeps([93,1,2,3,4,5,6,7,8,9,94,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-BONf7HvL.js").then((n) => n.S), true ? __vite__mapDeps([94,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-7JbnEytl.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,70,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-B1_tO3vW.js").then((n) => n.S), true ? __vite__mapDeps([70,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-CStxzccz.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,73,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-DJuTZKEy.js").then((n) => n.T), true ? __vite__mapDeps([73,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-CpdZ09VP.js"), true ? __vite__mapDeps([97,1,2,3,4,78,7,5,6,8,9,76,43,44,45,46,47,75,51,11,58,59]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-CRk2iFJi.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-DbQk1yXr.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,41,99,44,100,51,11,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-C9k9CPP4.js").then((n) => n.A), true ? __vite__mapDeps([99,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-DiPfYzyK.js"), true ? __vite__mapDeps([101,1,2,3,4,5,6,7,8,9,49,102,44,103,51,11,100,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-s1dOzKz6.js").then((n) => n.B), true ? __vite__mapDeps([102,1,2,3,44,103,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DeZb7fzG.js"), true ? __vite__mapDeps([104,1,2,3,44,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-ymSCfAV6.js"), true ? __vite__mapDeps([105,1,2,3,4,5,6,7,8,9,87,106,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Dz-Hh41t.js").then((n) => n.L), true ? __vite__mapDeps([106,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-BCTxjfY_.js"), true ? __vite__mapDeps([107,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-6-FHLSEU.js"), true ? __vite__mapDeps([108,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-DtmFG8YB.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B-YdS1iL.js").then((n) => n.L), true ? __vite__mapDeps([109,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-643kJFwT.js"), true ? __vite__mapDeps([111,1,2,3,4,5,6,7,8,9,112,44,51,11,100,47]) : void 0, import.meta.url),
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
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-vG2Lo2df.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([116,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-h0TFwG5y.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([117,103]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([118,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-SWj-Nf6K.js").then((n) => n.p), true ? __vite__mapDeps([45,1,2,3,43,46]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
