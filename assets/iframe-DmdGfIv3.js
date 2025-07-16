const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./border-tokens-BbPOs-Vh.js","./jsx-runtime-DnIIMar6.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-DXHhUSGJ.js","./index-C-Hdxu3s.js","./index-B63kQkss.js","./index-vKye6HrD.js","./index-DtSuK_9N.js","./index-BdOSk9or.js","./DesignTokenSpacingPreview-BcGKECY1.js","./createVisualRegressionStory-Ckg-wQz5.js","./color-tokens-D6ehdZfW.js","./focus-tokens-DpSw5qVW.js","./font-tokens-DCSSTRPx.js","./grid-tokens-D35Mnthc.js","./sizing-tokens-BQt793cu.js","./community-components-bGTWYnvI.js","./border-tokens-CU81s0J2.js","./color-tokens-ynfov74F.js","./font-tokens-82OHNGdx.js","./spacing-tokens-wkPVWU0-.js","./design-tokens-o_YQnN8x.js","./community-component-aanleveren-DNPEx3z_.js","./designers-DsC2t4sl.js","./developers-BjYVoFH1.js","./managers-BWlMKccw.js","./frameworks-DspMGJHh.js","./kwaliteit-componenten-Cfbi171o.js","./nl-design-system-CE7qnwNp.js","./toegankelijkheid-BnjAo72h.js","./versioning-Acf6nnYn.js","./changelog-design-tokens-BFckjmx4.js","./changelog-react-v2khp_XD.js","./changelog-stencil-react-CM9QAzk8.js","./changelog-stencil-B8_tZw6V.js","./faq-BUwI7T65.js","./introduction-CtL9Gxx_.js","./license-jdMhvmUj.js","./notice-CL9jGq6Y.js","./accordion-DYhSYWxW.js","./accordion.stories-Df0abxIc.js","./index-hH2M1eF1.js","./index-DB79t5Cy.js","./preview-BLy2B9IC.js","./preview-Bi9vr2dd.css","./createReactComponent-9_R8Iz-X.js","./CitationDocumentation-B3Shsstx.js","./alert-Csk7CoEH.js","./README-i1AxuvIj.js","./alert.stories-BjxH5eH1.js","./button-D8qWYe2E.js","./README-8lw3oO5y.js","./button.stories-D1XwTGlr.js","./createDesignTokensStory-HiB5Jh-Q.js","./checkbox-DYRtnEei.js","./checkbox.stories-nibYnTMu.js","./document-BDM7T7Ju.js","./document.stories-DXmVhl1h.js","./form-field-checkbox-CSL72y5H.js","./form-field-checkbox.stories-Buf_BLpF.js","./form-field-description.stories-9dpZ7h-h.js","./form-field-error-message.stories-By0shCNA.js","./form-field-description-DcOuJpmG.js","./form-field-error-message-M05aWPZ3.js","./form-field-label-BLRoEnqm.js","./form-field-label.stories-kARnd81_.js","./form-field-radio-group-DFs8tX17.js","./form-field-radio-group.stories-D9PUWux_.js","./form-field-radio-option-Dmjgn711.js","./form-field-radio-option.stories-Dzb8IAt3.js","./form-field-select-Csi4mWRu.js","./form-field-select.stories-CceGrkym.js","./select.stories-BfRVDQKF.js","./form-field-textarea-C_ODcnmE.js","./form-field-textarea.stories-DhtNt77g.js","./textarea.stories-BCiqpcAp.js","./form-field-textbox-DD8nyUdb.js","./form-field-textbox.stories-Dtn64uJS.js","./textbox.stories-dpwAC3rp.js","./form-field-DipUSiAc.js","./index-cEa3Pm8r.js","./form-field.stories-GQRyrn4c.js","./heading-group-DIu2jlOa.js","./heading-group.stories-B1S5nM_6.js","./heading-B91TqUFQ.js","./heading.stories-Cs-7BPIs.js","./icon-D80e48Za.js","./icon.stories-D7_fSR8n.js","./link-list-DUh9nC9O.js","./link-list.stories-CfoobuYq.js","./link-Cifd0kiv.js","./README-CSNxhwJ5.js","./link.stories-BjJbnCh-.js","./paragraph-CfLMBY49.js","./paragraph.stories-Cv11l_cG.js","./pre-heading-CtuIcQbL.js","./pre-heading.stories-DgSIj2nJ.js","./section-C6fD7n-M.js","./section.stories-CGjzn8dn.js","./select-CD9OUR80.js","./textarea-Dopz9dwe.js","./textbox-BJi9mgnI.js","./alert-CnfrgPG7.js","./alert.stories-ChQzZMwA.js","./components-Cp22cNJ4.js","./button-61cq1dyY.js","./button.stories-Ue2Uy22G.js","./index-DbgQBs_-.js","./document.stories-DjR7UwCz.js","./link-C_LBzKsi.js","./link.stories-Uv74VEeB.js","./inlogstraat-hxJOesqy.js","./login-link-themes-07BWWHoQ.js","./login-link.stories-B4lpo2JZ.js","./login-link-4w0OB9CG.js","./paragraph-DRQALC0Y.js","./paragraph.stories-Bqkom019.js","./entry-preview-DfrG9HCd.js","./react-18-BEw2RJX7.js","./entry-preview-docs-IjMUzxCw.js","./preview-CZJh5rGw.js","./preview-BslIZH-n.js","./preview-DyC47xhJ.js"])))=>i.map(i=>d[i]);
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
  "./src/documentation/design-tokens/common/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-BbPOs-Vh.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-D6ehdZfW.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/focus-tokens.mdx": async () => __vitePreload(() => import("./focus-tokens-DpSw5qVW.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-DCSSTRPx.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/grid-tokens.mdx": async () => __vitePreload(() => import("./grid-tokens-D35Mnthc.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/common/sizing-tokens.mdx": async () => __vitePreload(() => import("./sizing-tokens-BQt793cu.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/community-components.mdx": async () => __vitePreload(() => import("./community-components-bGTWYnvI.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/border-tokens.mdx": async () => __vitePreload(() => import("./border-tokens-CU81s0J2.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/color-tokens.mdx": async () => __vitePreload(() => import("./color-tokens-ynfov74F.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/font-tokens.mdx": async () => __vitePreload(() => import("./font-tokens-82OHNGdx.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/core/spacing-tokens.mdx": async () => __vitePreload(() => import("./spacing-tokens-wkPVWU0-.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url),
  "./src/documentation/design-tokens/design-tokens.mdx": async () => __vitePreload(() => import("./design-tokens-o_YQnN8x.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/community-component-aanleveren.mdx": async () => __vitePreload(() => import("./community-component-aanleveren-DNPEx3z_.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/designers.mdx": async () => __vitePreload(() => import("./designers-DsC2t4sl.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/developers.mdx": async () => __vitePreload(() => import("./developers-BjYVoFH1.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/aan-de-slag/managers.mdx": async () => __vitePreload(() => import("./managers-BWlMKccw.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/frameworks.mdx": async () => __vitePreload(() => import("./frameworks-DspMGJHh.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/kwaliteit-componenten.mdx": async () => __vitePreload(() => import("./kwaliteit-componenten-Cfbi171o.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/nl-design-system.mdx": async () => __vitePreload(() => import("./nl-design-system-CE7qnwNp.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/toegankelijkheid.mdx": async () => __vitePreload(() => import("./toegankelijkheid-BnjAo72h.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/architectuur/versioning.mdx": async () => __vitePreload(() => import("./versioning-Acf6nnYn.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-design-tokens.mdx": async () => __vitePreload(() => import("./changelog-design-tokens-BFckjmx4.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-react.mdx": async () => __vitePreload(() => import("./changelog-react-v2khp_XD.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil-react.mdx": async () => __vitePreload(() => import("./changelog-stencil-react-CM9QAzk8.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/changelogs/changelog-stencil.mdx": async () => __vitePreload(() => import("./changelog-stencil-B8_tZw6V.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/faq.mdx": async () => __vitePreload(() => import("./faq-BUwI7T65.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/introduction.mdx": async () => __vitePreload(() => import("./introduction-CtL9Gxx_.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/license.mdx": async () => __vitePreload(() => import("./license-jdMhvmUj.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/documentation/lux/notice.mdx": async () => __vitePreload(() => import("./notice-CL9jGq6Y.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/react-components/accordion/accordion.mdx": async () => __vitePreload(() => import("./accordion-DYhSYWxW.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,41,42,43,44,45,46,47]) : void 0, import.meta.url),
  "./src/react-components/accordion/accordion.stories.tsx": async () => __vitePreload(() => import("./accordion.stories-Df0abxIc.js").then((n) => n.A), true ? __vite__mapDeps([41,1,2,3,42,43,44,45,46]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-Csk7CoEH.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,49,50,42,43,44,45,11,47]) : void 0, import.meta.url),
  "./src/react-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-BjxH5eH1.js").then((n) => n.A), true ? __vite__mapDeps([50,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/button/button.mdx": async () => __vitePreload(() => import("./button-D8qWYe2E.js"), true ? __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,52,53,42,43,44,45,54,11,47]) : void 0, import.meta.url),
  "./src/react-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-D1XwTGlr.js").then((n) => n.B), true ? __vite__mapDeps([53,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.mdx": async () => __vitePreload(() => import("./checkbox-DYRtnEei.js"), true ? __vite__mapDeps([55,1,2,3,4,5,6,7,8,9,56,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/checkbox/checkbox.stories.tsx": async () => __vitePreload(() => import("./checkbox.stories-nibYnTMu.js").then((n) => n.C), true ? __vite__mapDeps([56,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/document/document.mdx": async () => __vitePreload(() => import("./document-BDM7T7Ju.js"), true ? __vite__mapDeps([57,1,2,3,4,5,6,7,8,9,58,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DXmVhl1h.js").then((n) => n.D), true ? __vite__mapDeps([58,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.mdx": async () => __vitePreload(() => import("./form-field-checkbox-CSL72y5H.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,60,42,43,44,45,54,11,56,61,62]) : void 0, import.meta.url),
  "./src/react-components/form-field-checkbox/form-field-checkbox.stories.tsx": async () => __vitePreload(() => import("./form-field-checkbox.stories-Buf_BLpF.js").then((n) => n.F), true ? __vite__mapDeps([60,1,2,3,42,43,44,45,54,11,56,61,62]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.mdx": async () => __vitePreload(() => import("./form-field-description-DcOuJpmG.js"), true ? __vite__mapDeps([63,1,2,3,4,5,6,7,8,9,61,42,43,44,45,54,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-description/form-field-description.stories.tsx": async () => __vitePreload(() => import("./form-field-description.stories-9dpZ7h-h.js").then((n) => n.F), true ? __vite__mapDeps([61,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.mdx": async () => __vitePreload(() => import("./form-field-error-message-M05aWPZ3.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,62,42,43,44,45,54,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-error-message/form-field-error-message.stories.tsx": async () => __vitePreload(() => import("./form-field-error-message.stories-By0shCNA.js").then((n) => n.F), true ? __vite__mapDeps([62,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.mdx": async () => __vitePreload(() => import("./form-field-label-BLRoEnqm.js"), true ? __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,66,42,43,44,45,54,11,47]) : void 0, import.meta.url),
  "./src/react-components/form-field-label/form-field-label.stories.tsx": async () => __vitePreload(() => import("./form-field-label.stories-kARnd81_.js").then((n) => n.F), true ? __vite__mapDeps([66,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.mdx": async () => __vitePreload(() => import("./form-field-radio-group-DFs8tX17.js"), true ? __vite__mapDeps([67,1,2,3,4,5,6,7,8,9,68,42,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-group/form-field-radio-group.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-group.stories-D9PUWux_.js").then((n) => n.R), true ? __vite__mapDeps([68,1,2,3,42,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.mdx": async () => __vitePreload(() => import("./form-field-radio-option-Dmjgn711.js"), true ? __vite__mapDeps([69,1,2,3,4,5,6,7,8,9,70,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-radio-option/form-field-radio-option.stories.tsx": async () => __vitePreload(() => import("./form-field-radio-option.stories-Dzb8IAt3.js").then((n) => n.F), true ? __vite__mapDeps([70,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.mdx": async () => __vitePreload(() => import("./form-field-select-Csi4mWRu.js"), true ? __vite__mapDeps([71,1,2,3,4,5,6,7,8,9,72,42,43,44,45,54,11,61,62,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-select/form-field-select.stories.tsx": async () => __vitePreload(() => import("./form-field-select.stories-CceGrkym.js").then((n) => n.F), true ? __vite__mapDeps([72,1,2,3,42,43,44,45,54,11,61,62,73]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.mdx": async () => __vitePreload(() => import("./form-field-textarea-C_ODcnmE.js"), true ? __vite__mapDeps([74,1,2,3,4,5,6,7,8,9,75,42,43,44,45,54,11,61,62,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textarea/form-field-textarea.stories.tsx": async () => __vitePreload(() => import("./form-field-textarea.stories-DhtNt77g.js").then((n) => n.F), true ? __vite__mapDeps([75,1,2,3,42,43,44,45,54,11,61,62,76]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.mdx": async () => __vitePreload(() => import("./form-field-textbox-DD8nyUdb.js"), true ? __vite__mapDeps([77,1,2,3,4,5,6,7,8,9,78,42,43,44,45,54,11,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field-textbox/form-field-textbox.stories.tsx": async () => __vitePreload(() => import("./form-field-textbox.stories-Dtn64uJS.js").then((n) => n.F), true ? __vite__mapDeps([78,1,2,3,42,43,44,45,54,11,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.mdx": async () => __vitePreload(() => import("./form-field-DipUSiAc.js"), true ? __vite__mapDeps([80,1,2,3,4,81,7,5,6,8,9,82,42,43,44,45,54,11,47,78,61,62,79]) : void 0, import.meta.url),
  "./src/react-components/form-field/form-field.stories.tsx": async () => __vitePreload(() => import("./form-field.stories-GQRyrn4c.js").then((n) => n.F), true ? __vite__mapDeps([82,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.mdx": async () => __vitePreload(() => import("./heading-group-DIu2jlOa.js"), true ? __vite__mapDeps([83,1,2,3,4,5,6,7,8,9,84,42,43,44,45,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading-group/heading-group.stories.tsx": async () => __vitePreload(() => import("./heading-group.stories-B1S5nM_6.js").then((n) => n.H), true ? __vite__mapDeps([84,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.mdx": async () => __vitePreload(() => import("./heading-B91TqUFQ.js"), true ? __vite__mapDeps([85,1,2,3,4,5,6,7,8,9,86,42,43,44,45,54,11,47]) : void 0, import.meta.url),
  "./src/react-components/heading/heading.stories.tsx": async () => __vitePreload(() => import("./heading.stories-Cs-7BPIs.js").then((n) => n.H), true ? __vite__mapDeps([86,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.mdx": async () => __vitePreload(() => import("./icon-D80e48Za.js"), true ? __vite__mapDeps([87,1,2,3,4,5,6,7,8,9,88,42,46]) : void 0, import.meta.url),
  "./src/react-components/icon/icon.stories.tsx": async () => __vitePreload(() => import("./icon.stories-D7_fSR8n.js").then((n) => n.I), true ? __vite__mapDeps([88,1,2,3,42,46]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.mdx": async () => __vitePreload(() => import("./link-list-DUh9nC9O.js"), true ? __vite__mapDeps([89,1,2,3,4,5,6,7,8,9,90,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/link-list/link-list.stories.tsx": async () => __vitePreload(() => import("./link-list.stories-CfoobuYq.js").then((n) => n.L), true ? __vite__mapDeps([90,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/link/link.mdx": async () => __vitePreload(() => import("./link-Cifd0kiv.js"), true ? __vite__mapDeps([91,1,2,3,4,5,6,7,8,9,92,93,42,43,44,45,11,47]) : void 0, import.meta.url),
  "./src/react-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-BjJbnCh-.js").then((n) => n.L), true ? __vite__mapDeps([93,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-CfLMBY49.js"), true ? __vite__mapDeps([94,1,2,3,4,5,6,7,8,9,95,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-Cv11l_cG.js").then((n) => n.P), true ? __vite__mapDeps([95,1,2,3,42,43,44,45,54,11]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.mdx": async () => __vitePreload(() => import("./pre-heading-CtuIcQbL.js"), true ? __vite__mapDeps([96,1,2,3,4,5,6,7,8,9,97,42,43,44,45,11,47]) : void 0, import.meta.url),
  "./src/react-components/pre-heading/pre-heading.stories.tsx": async () => __vitePreload(() => import("./pre-heading.stories-DgSIj2nJ.js").then((n) => n.P), true ? __vite__mapDeps([97,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.mdx": async () => __vitePreload(() => import("./section-C6fD7n-M.js"), true ? __vite__mapDeps([98,1,2,3,4,5,6,7,8,9,99,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/section/section.stories.tsx": async () => __vitePreload(() => import("./section.stories-CGjzn8dn.js").then((n) => n.S), true ? __vite__mapDeps([99,1,2,3,42,43,44,45,11]) : void 0, import.meta.url),
  "./src/react-components/select/select.mdx": async () => __vitePreload(() => import("./select-CD9OUR80.js"), true ? __vite__mapDeps([100,1,2,3,4,5,6,7,8,9,73,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/select/select.stories.tsx": async () => __vitePreload(() => import("./select.stories-BfRVDQKF.js").then((n) => n.S), true ? __vite__mapDeps([73,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.mdx": async () => __vitePreload(() => import("./textarea-Dopz9dwe.js"), true ? __vite__mapDeps([101,1,2,3,4,5,6,7,8,9,76,42,43,44,45,47]) : void 0, import.meta.url),
  "./src/react-components/textarea/textarea.stories.tsx": async () => __vitePreload(() => import("./textarea.stories-BCiqpcAp.js").then((n) => n.T), true ? __vite__mapDeps([76,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.mdx": async () => __vitePreload(() => import("./textbox-BJi9mgnI.js"), true ? __vite__mapDeps([102,1,2,3,4,81,7,5,6,8,9,79,42,43,44,45,47,78,54,11,61,62]) : void 0, import.meta.url),
  "./src/react-components/textbox/textbox.stories.tsx": async () => __vitePreload(() => import("./textbox.stories-dpwAC3rp.js").then((n) => n.T), true ? __vite__mapDeps([79,1,2,3,42,43,44,45]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.mdx": async () => __vitePreload(() => import("./alert-CnfrgPG7.js"), true ? __vite__mapDeps([103,1,2,3,4,5,6,7,8,9,49,104,43,105,54,11,47]) : void 0, import.meta.url),
  "./src/web-components/alert/alert.stories.tsx": async () => __vitePreload(() => import("./alert.stories-ChQzZMwA.js").then((n) => n.A), true ? __vite__mapDeps([104,1,2,3,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/button/button.mdx": async () => __vitePreload(() => import("./button-61cq1dyY.js"), true ? __vite__mapDeps([106,1,2,3,4,5,6,7,8,9,52,107,43,108,54,11,105,47]) : void 0, import.meta.url),
  "./src/web-components/button/button.stories.tsx": async () => __vitePreload(() => import("./button.stories-Ue2Uy22G.js").then((n) => n.B), true ? __vite__mapDeps([107,1,2,3,43,108,54,11,105]) : void 0, import.meta.url),
  "./src/web-components/document/document.stories.tsx": async () => __vitePreload(() => import("./document.stories-DjR7UwCz.js"), true ? __vite__mapDeps([109,1,2,3,43,54,11,105]) : void 0, import.meta.url),
  "./src/web-components/link/link.mdx": async () => __vitePreload(() => import("./link-C_LBzKsi.js"), true ? __vite__mapDeps([110,1,2,3,4,5,6,7,8,9,92,111,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/link/link.stories.tsx": async () => __vitePreload(() => import("./link.stories-Uv74VEeB.js").then((n) => n.L), true ? __vite__mapDeps([111,1,2,3,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/inlogstraat.mdx": async () => __vitePreload(() => import("./inlogstraat-hxJOesqy.js"), true ? __vite__mapDeps([112,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link-themes.mdx": async () => __vitePreload(() => import("./login-link-themes-07BWWHoQ.js"), true ? __vite__mapDeps([113,1,2,3,4,5,6,7,8,9,114,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.mdx": async () => __vitePreload(() => import("./login-link-4w0OB9CG.js"), true ? __vite__mapDeps([115,1,2,3,4,5,6,7,8,9,114,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/login-link/login-link.stories.tsx": async () => __vitePreload(() => import("./login-link.stories-B4lpo2JZ.js").then((n) => n.L), true ? __vite__mapDeps([114,1,2,3,43,105,54,11]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.mdx": async () => __vitePreload(() => import("./paragraph-DRQALC0Y.js"), true ? __vite__mapDeps([116,1,2,3,4,5,6,7,8,9,117,43,54,11,105,47]) : void 0, import.meta.url),
  "./src/web-components/paragraph/paragraph.stories.tsx": async () => __vitePreload(() => import("./paragraph.stories-Bqkom019.js").then((n) => n.P), true ? __vite__mapDeps([117,1,2,3,43,54,11,105]) : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
const { composeConfigs, PreviewWeb, ClientApi } = __STORYBOOK_MODULE_PREVIEW_API__;
const getProjectAnnotations = async (hmrPreviewAnnotationModules = []) => {
  const configs = await Promise.all([
    hmrPreviewAnnotationModules.at(0) ?? __vitePreload(() => import("./entry-preview-DfrG9HCd.js"), true ? __vite__mapDeps([118,2,3,119,6]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(1) ?? __vitePreload(() => import("./entry-preview-docs-IjMUzxCw.js"), true ? __vite__mapDeps([120,8,3,9,2]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(2) ?? __vitePreload(() => import("./preview-jgJsfDYg.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(3) ?? __vitePreload(() => import("./preview-CZJh5rGw.js"), true ? __vite__mapDeps([121,9]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(4) ?? __vitePreload(() => import("./preview-CYVgFl-m.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(5) ?? __vitePreload(() => import("./preview-BE1vxI58.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(6) ?? __vitePreload(() => import("./preview-D8RdHa_w.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(7) ?? __vitePreload(() => import("./preview-AqyFk0el.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(8) ?? __vitePreload(() => import("./preview-BslIZH-n.js"), true ? __vite__mapDeps([122,108]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(9) ?? __vitePreload(() => import("./preview-DyC47xhJ.js"), true ? __vite__mapDeps([123,7]) : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(10) ?? __vitePreload(() => import("./preview-QeHyMOLA.js"), true ? [] : void 0, import.meta.url),
    hmrPreviewAnnotationModules.at(11) ?? __vitePreload(() => import("./preview-BLy2B9IC.js").then((n) => n.p), true ? __vite__mapDeps([44,1,2,3,42,45]) : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb(importFn, getProjectAnnotations);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export {
  __vitePreload as _
};
