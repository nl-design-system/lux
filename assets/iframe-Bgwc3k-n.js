const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-Broy2fnj.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-DteVdozH.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-zrj_vHGZ.js","./focus-tokens-DzevUpeU.js","./font-tokens-_BIksSRN.js","./grid-tokens-RcuUSigg.js","./sizing-tokens-NLa6AZOd.js","./community-components-AfHmwfsB.js","./border-tokens-z5TQZfJx.js","./color-tokens-BmVnGKDF.js","./font-tokens-Qfpe6-C9.js","./spacing-tokens-BQFGfUYq.js","./design-tokens-vOi3dxzc.js","./community-component-aanleveren-98hi9qRP.js","./designers-C-Iw4GsE.js","./developers-CVucDtlZ.js","./managers-BkKBAwFA.js","./frameworks-zvLz_txX.js","./kwaliteit-componenten-u14F46q6.js","./nl-design-system-DAl75-tG.js","./toegankelijkheid-B05zcJWg.js","./versioning-CQOYRnlC.js","./changelog-design-tokens-e3vAmFvv.js","./changelog-react-Dm5fUGXE.js","./changelog-stencil-react-kWpHX-o3.js","./changelog-stencil-DL3bblwA.js","./faq-DswSlP8V.js","./introduction-CecWc5pZ.js","./license-BAlIlFUK.js","./notice-DC3ZMAjo.js","./alert-Bt-HYyAF.js","./README-i1AxuvIj.js","./alert.stories-CRBUbdGF.js","./index-DcF6CAfA.js","./index-DdOurD3B.js","./preview-B7V1lFdG.js","./preview-BBwCJUkR.css","./CitationDocumentation-B3Shsstx.js","./button-MC3v86h8.js","./README-8lw3oO5y.js","./button.stories-Hz2aK_s2.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-4aUCJNRM.js","./checkbox.stories-BjTRuueo.js","./document-BcNY1P3C.js","./document.stories-Bla12ZFC.js","./form-field-checkbox-2V2RUM-H.js","./form-field-checkbox.stories-DCLMfaif.js","./form-field-description.stories-B-YrbBFU.js","./form-field-error-message.stories-Dzco1vDo.js","./form-field-description-Bh2lM5nx.js","./form-field-error-message-C_X7jT_a.js","./form-field-label-B6j5Jpg_.js","./form-field-label.stories-BZDBwCLA.js","./form-field-radio-group-COlFU9fq.js","./form-field-radio-group.stories-DUlUmX5z.js","./form-field-radio-option-C6UmYFHo.js","./form-field-radio-option.stories-CF0gZpaC.js","./form-field-select-DzpKN2JF.js","./form-field-select.stories-DeeWLLup.js","./select.stories-CRKyB6rk.js","./form-field-textarea-FtLENNgY.js","./form-field-textarea.stories-8rDXYXNU.js","./textarea.stories-B-R5jA75.js","./form-field-textbox-C_BKMvJW.js","./form-field-textbox.stories-Hnj_p9_A.js","./textbox.stories-vqPeYIVh.js","./form-field-DXNR1x2O.js","./index-cEa3Pm8r.js","./form-field.stories-Dtr3lBxh.js","./heading-group-ILEhE1X-.js","./heading-group.stories-B6h5SC2S.js","./heading-C1fNK5pC.js","./heading.stories-DnUu4BSz.js","./icon-w3kY5CTs.js","./icon.stories-CX1kYlUr.js","./link-PZQYfaTt.js","./README-CSNxhwJ5.js","./link.stories-LjDJn9Zw.js","./paragraph-CtD5HVgl.js","./paragraph.stories-6O1I7vge.js","./pre-heading-BBdSbzKB.js","./pre-heading.stories-jBZQ15y-.js","./section-DqeyMa-q.js","./section.stories-B3ZkbnFh.js","./select-BCGOcCvY.js","./textarea-0k6rYekp.js","./textbox-BAcgYhVV.js","./alert-BPJDMHP-.js","./alert.stories-C9k9CPP4.js","./components-Cp22cNJ4.js","./button-BHbiKWnS.js","./button.stories-s1dOzKz6.js","./index-DbgQBs_-.js","./document.stories-DeZb7fzG.js","./link-DcI3W1j4.js","./link.stories-Dz-Hh41t.js","./inlogstraat-B87NMOZk.js","./login-link-themes-CStHNkcx.js","./login-link.stories-B-YdS1iL.js","./login-link-D_bcsK6d.js","./paragraph-BZuq16tB.js","./paragraph.stories-BspXlzix.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-Broy2fnj.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-zrj_vHGZ.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-DzevUpeU.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-_BIksSRN.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-RcuUSigg.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-NLa6AZOd.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-AfHmwfsB.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-z5TQZfJx.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-BmVnGKDF.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-Qfpe6-C9.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-BQFGfUYq.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-vOi3dxzc.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-98hi9qRP.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/designers.mdx": async () => __vitePreload(() => import("./designers-C-Iw4GsE.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/developers.mdx": async () => __vitePreload(() => import("./developers-CVucDtlZ.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/managers.mdx": async () => __vitePreload(() => import("./managers-BkKBAwFA.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-zvLz_txX.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-u14F46q6.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-DAl75-tG.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-B05zcJWg.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/versioning.mdx": async () => __vitePreload(() => import("./versioning-CQOYRnlC.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-e3vAmFvv.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-Dm5fUGXE.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-kWpHX-o3.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-DL3bblwA.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/faq.mdx": async () => __vitePreload(() => import("./faq-DswSlP8V.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-CecWc5pZ.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-BAlIlFUK.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-DC3ZMAjo.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-Bt-HYyAF.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-CRBUbdGF.js").then((n) => n.A), true ? __vite__mapDeps([42,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-MC3v86h8.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Hz2aK_s2.js").then((n) => n.B), true ? __vite__mapDeps([50,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-4aUCJNRM.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,53,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-BjTRuueo.js").then((n) => n.C), true ? __vite__mapDeps([53,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-BcNY1P3C.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,55,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-Bla12ZFC.js").then((n) => n.D), true ? __vite__mapDeps([55,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-2V2RUM-H.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,57,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-DCLMfaif.js").then((n) => n.F), true ? __vite__mapDeps([57,1,2,3,43,44,45,46,51,11,53,58,59]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-Bh2lM5nx.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,58,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-B-YrbBFU.js").then((n) => n.F), true ? __vite__mapDeps([58,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-C_X7jT_a.js"), true ? __vite__mapDeps([61,1,2,3,4,5,6,7,8,9,59,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-Dzco1vDo.js").then((n) => n.F), true ? __vite__mapDeps([59,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-B6j5Jpg_.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,63,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-BZDBwCLA.js").then((n) => n.F), true ? __vite__mapDeps([63,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-COlFU9fq.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,65,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-DUlUmX5z.js").then((n) => n.R), true ? __vite__mapDeps([65,1,2,3,43,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-C6UmYFHo.js"), true ? __vite__mapDeps([66,1,2,3,4,5,6,7,8,9,67,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-CF0gZpaC.js").then((n) => n.F), true ? __vite__mapDeps([67,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-DzpKN2JF.js"), true ? __vite__mapDeps([68,1,2,3,4,5,6,7,8,9,69,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-DeeWLLup.js").then((n) => n.F), true ? __vite__mapDeps([69,1,2,3,43,44,45,46,51,11,58,59,70]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-FtLENNgY.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-8rDXYXNU.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,43,44,45,46,51,11,58,59,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-C_BKMvJW.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-Hnj_p9_A.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,43,44,45,46,51,11,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-DXNR1x2O.js"), true ? __vite__mapDeps([77,1,2,3,4,78,7,5,6,8,9,79,43,44,45,46,51,11,47,75,58,59,76]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-Dtr3lBxh.js").then((n) => n.F), true ? __vite__mapDeps([79,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-ILEhE1X-.js"), true ? __vite__mapDeps([80,1,2,3,4,5,6,7,8,9,81,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-B6h5SC2S.js").then((n) => n.H), true ? __vite__mapDeps([81,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-C1fNK5pC.js"), true ? __vite__mapDeps([82,1,2,3,4,5,6,7,8,9,83,43,44,45,46,51,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-DnUu4BSz.js").then((n) => n.H), true ? __vite__mapDeps([83,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-w3kY5CTs.js"), true ? __vite__mapDeps([84,1,2,3,4,5,6,7,8,9,85,43]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-CX1kYlUr.js").then((n) => n.I), true ? __vite__mapDeps([85,1,2,3,43]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-PZQYfaTt.js"), true ? __vite__mapDeps([86,1,2,3,4,5,6,7,8,9,87,88,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-LjDJn9Zw.js").then((n) => n.L), true ? __vite__mapDeps([88,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CtD5HVgl.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,90,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-6O1I7vge.js").then((n) => n.P), true ? __vite__mapDeps([90,1,2,3,43,44,45,46,51,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-BBdSbzKB.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,43,44,45,46,11,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-jBZQ15y-.js").then((n) => n.P), true ? __vite__mapDeps([92,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-DqeyMa-q.js"), true ? __vite__mapDeps([93,1,2,3,4,5,6,7,8,9,94,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-B3ZkbnFh.js").then((n) => n.S), true ? __vite__mapDeps([94,1,2,3,43,44,45,46,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-BCGOcCvY.js"), true ? __vite__mapDeps([95,1,2,3,4,5,6,7,8,9,70,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-CRKyB6rk.js").then((n) => n.S), true ? __vite__mapDeps([70,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-0k6rYekp.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,73,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-B-R5jA75.js").then((n) => n.T), true ? __vite__mapDeps([73,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-BAcgYhVV.js"), true ? __vite__mapDeps([97,1,2,3,4,78,7,5,6,8,9,76,43,44,45,46,47,75,51,11,58,59]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-vqPeYIVh.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,43,44,45,46]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-BPJDMHP-.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,41,99,44,100,51,11,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-C9k9CPP4.js").then((n) => n.A), true ? __vite__mapDeps([99,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-BHbiKWnS.js"), true ? __vite__mapDeps([101,1,2,3,4,5,6,7,8,9,49,102,44,103,51,11,100,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-s1dOzKz6.js").then((n) => n.B), true ? __vite__mapDeps([102,1,2,3,44,103,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DeZb7fzG.js"), true ? __vite__mapDeps([104,1,2,3,44,51,11,100]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-DcI3W1j4.js"), true ? __vite__mapDeps([105,1,2,3,4,5,6,7,8,9,87,106,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Dz-Hh41t.js").then((n) => n.L), true ? __vite__mapDeps([106,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-B87NMOZk.js"), true ? __vite__mapDeps([107,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-CStHNkcx.js"), true ? __vite__mapDeps([108,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-D_bcsK6d.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,109,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B-YdS1iL.js").then((n) => n.L), true ? __vite__mapDeps([109,1,2,3,44,100,51,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-BZuq16tB.js"), true ? __vite__mapDeps([111,1,2,3,4,5,6,7,8,9,112,44,51,11,100,47]) : void 0, import.meta.url),
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
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-DKyF7jp6.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([116,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-DeMJb3nk.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([117,103]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([118,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-B7V1lFdG.js").then((n) => n.p), true ? __vite__mapDeps([45,1,2,3,43,46]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
