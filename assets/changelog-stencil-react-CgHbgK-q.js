import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DwQBIcFR.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BGIvITlt.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const changelogMd = "# @lux-design-system/web-components-react\n\n## 1.1.0\n\n### Minor Changes\n\n- e39de1f: \n## @lux-design-system/web-components-react\n\n  - Nieuw component: LuxAlert\n  - Nieuw component: LuxButton\n  - Nieuw component: LuxDocument\n  - Nieuw component: LuxLink\n  - Nieuw component: LuxLoginLink\n  - Nieuw component: LuxParagraph\n  - Nieuw icoon: LuxIconChevronLeft\n  - Nieuw icoon: LuxIconChevronRight\n  - Nieuw icoon: LuxIconError\n  - Nieuw icoon: LuxIconInfo\n  - Nieuw icoon: LuxIconLogoDigid\n  - Nieuw icoon: LuxIconLogoEherkenning\n  - Nieuw icoon: LuxIconLogoEidas\n  - Nieuw icoon: LuxIconMail\n  - Nieuw icoon: LuxIconSuccess\n  - Nieuw icoon: LuxIconWarning\n\n  ## @lux-design-system/web-components-stencil\n\n  - Nieuw component: lux-alert\n  - Nieuw component: lux-button\n  - Nieuw component: lux-document\n  - Nieuw component: lux-link\n  - Nieuw component: lux-login-link\n  - Nieuw component: lux-paragraph\n  - Nieuw icoon: lux-icon-chevron-left\n  - Nieuw icoon: lux-icon-chevron-right\n  - Nieuw icoon: lux-icon-error\n  - Nieuw icoon: lux-icon-info\n  - Nieuw icoon: lux-icon-logo-digid\n  - Nieuw icoon: lux-icon-logo-eherkenning\n  - Nieuw icoon: lux-icon-logo-eidas\n  - Nieuw icoon: lux-icon-mail\n  - Nieuw icoon: lux-icon-success\n  - Nieuw icoon: lux-icon-warning\n\n  ## @lux-design-system/design-tokens\n\n  - Nieuwe tokens: common focus\n  - Nieuwe tokens: common size\n  - Nieuwe tokens: component alert\n  - Nieuwe tokens: component button\n  - Nieuwe tokens: component icon-logo\n  - Nieuwe tokens: component link\n  - Nieuwe tokens: component login-link\n  - Nieuwe tokens: component paragraph\n  - Nieuwe tokens: core border\n  - Nieuwe tokens: core color\n  - Nieuwe tokens: core font\n  - Nieuwe tokens: core spacing\n  - Nieuwe tokens: utrecht common focus\n  - Nieuwe tokens: utrecht component alert\n  - Nieuwe tokens: utrecht component button\n  - Nieuwe tokens: utrecht component document\n  - Nieuwe tokens: utrecht component heading\n  - Nieuwe tokens: utrecht component link\n  - Nieuwe tokens: utrecht component paragraph\n  - Nieuw thema: Digid (light & dark mode)\n  - Nieuw thema: Digitoegankelijk (light & dark mode)\n  - Nieuw thema: EVA (light & dark mode)\n  - Nieuw thema: Logius (light & dark mode)\n  - Nieuw thema: Logius Blauw (light & dark mode)\n  - Nieuw thema: MijnOverheid (light & dark mode)\n  - Nieuw thema: NLdoc (light & dark mode)\n\n  ## @lux-design-system/font\n\n  - Nieuwe SCSS mixin: ro-font-face\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Changelogs/web-components-react"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: changelogMd
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
