import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-BOymdV03.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BkJAT2pG.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Auteursrecht LUX / Logius\n\nCopyright (c) 2024 LUX / Logius\n\n## Logo en huisstijl\n\nOp het huisstijl en logo zijn auteursrechten van toepassing. Het gebruik van logo en huisstijl is alleen toegestaan voor gebruik door gebruikers die gerechtigd zijn om de Rijkshuisstijl te gebruiken.\n\nWanneer je een bewerking van de software wilt gebruiken voor andere doeleinden, mag je niet het logo van LUX, Logius, of de Rijkshuisstijl gebruiken en je ontwerpt een eigen huisstijl.\n\n## Lettertype\n\nLettertypes die worden gebruikt voor de huisstijl zijn niet allemaal gratis en open source. Let op dat bij gebruik van die bijgeleverde lettertypes je een (betaalde) licentie regelt. Pas anders de configuratie aan om minder of andere lettertypes te gebruiken.\n\n## Toestemming\n\nWanneer je het logo of de huisstijl wilt gebruiken kun je voor toestemming contact opnemen met {contactpersoon}.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Colofon/Toestemming voor gebruik"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
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
