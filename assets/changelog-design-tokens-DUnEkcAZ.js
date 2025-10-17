import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-g9DxLYiK.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BUvF6Lyu.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const changelogMd = "# @lux-design-system/design-tokens\n\n## 2.2.0\n\n### Minor Changes\n\n- 31d4877: Add Accordion component\n\n## 2.1.0\n\n### Minor Changes\n\n- 7efe245: Nieuwe tokens: utrecht component skip link\n- 2f03243: Wijziging tokens: padding section waardes aangepast zodat ze responsive zijn.\n\n### Patch Changes\n\n- fb0eb34: Wijzig tokens: hover en focus tokens van de inputs gelijk getrokken\n- 2462274: Bugfix: select focus outline correctie\n- 5bbd6c2: Voeg Utrecht action design tokens voor correct cursor in Button component\n\n## 2.0.0\n\n### Major Changes\n\n- 3b4c5ce: Gewijzigde tokens:\n\n  - utrecht heading-1: color van `brand` naar `foreground`, font-weight van `bold` naar `regular`\n  - utrecht heading-3: color van `brand` naar `foreground`\n\n  **Let op:** visuele wijziging op alle thema's, H1 en H3 hebben nu een andere vormgeving.\n\n### Minor Changes\n\n- 599a16f: Nieuwe tokens:\n\n  - Utrecht Column layout\n  - Utrecht Link list\n  - Utrecht Page footer\n\n- 8887460: Nieuwe tokens: utrecht component button group\n- 6e97df6: - Nieuwe tokens: lux component button - smalle variant\n  - Wijziging tokens: line-height en font-size tokens voor secondary en subtle button toegevoegd\n- fbb693b: Nieuwe tokens:\n\n  - Lux Radio group\n  - Utrecht Form label\n  - Utrecht radio button\n\n- 6de5a79: Nieuwe tokens: utrecht component checkbox\n- 46d8608: Nieuwe tokens:\n\n  - utrecht common pointer target\n  - utrecht component form field\n  - utrecht component form field description\n  - utrecht component form field error message\n  - utrecht component form label\n  - utrecht component textarea\n  - utrecht component text input\n\n  Wijziging tokens:\n\n  - utrecht component document background-color toegevoegd\n\n- eaf684a: Wijziging tokens: vormgeving invalid form field\n- 988f7d8: Nieuwe tokens: lux-alert-heading\n- aefc298: Nieuwe tokens: Utrecht Fieldset\n- f6f75ba: Nieuwe tokens: lux component section\n- 9926fb8: Nieuwe tokens: component utrecht pre-heading\n- e56d6bc: Nieuwe tokens: Utrecht component Select\n\n## 1.1.0\n\n### Minor Changes\n\n- e39de1f:\n\n## @lux-design-system/web-components-react\n\n- Nieuw component: LuxAlert\n- Nieuw component: LuxButton\n- Nieuw component: LuxDocument\n- Nieuw component: LuxLink\n- Nieuw component: LuxLoginLink\n- Nieuw component: LuxParagraph\n- Nieuw icoon: LuxIconChevronLeft\n- Nieuw icoon: LuxIconChevronRight\n- Nieuw icoon: LuxIconError\n- Nieuw icoon: LuxIconInfo\n- Nieuw icoon: LuxIconLogoDigid\n- Nieuw icoon: LuxIconLogoEherkenning\n- Nieuw icoon: LuxIconLogoEidas\n- Nieuw icoon: LuxIconMail\n- Nieuw icoon: LuxIconSuccess\n- Nieuw icoon: LuxIconWarning\n\n## @lux-design-system/web-components-stencil\n\n- Nieuw component: lux-alert\n- Nieuw component: lux-button\n- Nieuw component: lux-document\n- Nieuw component: lux-link\n- Nieuw component: lux-login-link\n- Nieuw component: lux-paragraph\n- Nieuw icoon: lux-icon-chevron-left\n- Nieuw icoon: lux-icon-chevron-right\n- Nieuw icoon: lux-icon-error\n- Nieuw icoon: lux-icon-info\n- Nieuw icoon: lux-icon-logo-digid\n- Nieuw icoon: lux-icon-logo-eherkenning\n- Nieuw icoon: lux-icon-logo-eidas\n- Nieuw icoon: lux-icon-mail\n- Nieuw icoon: lux-icon-success\n- Nieuw icoon: lux-icon-warning\n\n## @lux-design-system/design-tokens\n\n- Nieuwe tokens: common focus\n- Nieuwe tokens: common size\n- Nieuwe tokens: component alert\n- Nieuwe tokens: component button\n- Nieuwe tokens: component icon-logo\n- Nieuwe tokens: component link\n- Nieuwe tokens: component login-link\n- Nieuwe tokens: component paragraph\n- Nieuwe tokens: core border\n- Nieuwe tokens: core color\n- Nieuwe tokens: core font\n- Nieuwe tokens: core spacing\n- Nieuwe tokens: utrecht common focus\n- Nieuwe tokens: utrecht component alert\n- Nieuwe tokens: utrecht component button\n- Nieuwe tokens: utrecht component document\n- Nieuwe tokens: utrecht component heading\n- Nieuwe tokens: utrecht component link\n- Nieuwe tokens: utrecht component paragraph\n- Nieuw thema: Digid (light & dark mode)\n- Nieuw thema: Digitoegankelijk (light & dark mode)\n- Nieuw thema: EVA (light & dark mode)\n- Nieuw thema: Logius (light & dark mode)\n- Nieuw thema: Logius Blauw (light & dark mode)\n- Nieuw thema: MijnOverheid (light & dark mode)\n- Nieuw thema: NLdoc (light & dark mode)\n\n## @lux-design-system/font\n\n- Nieuwe SCSS mixin: ro-font-face\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Changelogs/design-tokens"
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
