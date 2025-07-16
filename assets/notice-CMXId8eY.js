import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-Dh68SCX0.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CXmVZHvR.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Auteursrecht LUX / Logius\n\nCopyright (c) 2025 LUX / Logius\n\n## Logo en huisstijl\n\nOp de Rijkshuisstijl en Rijkslogo zijn auteursrechten van toepassing. Het gebruik van dit logo en huisstijl is alleen toegestaan door organisaties die gerechtigd zijn om de Rijkshuisstijl te gebruiken.\n\nWanneer je een bewerking van deze software wilt gebruiken voor andere doeleinden, mag je niet het logo van LUX, Logius, of de Rijkshuisstijl gebruiken en moet je een eigen huisstijl ontwerpen.\n\n## Lettertype\n\nLettertypes die worden gebruikt voor de huisstijl zijn niet allemaal gratis en open source. Let op dat je bij gebruik van die bijgeleverde lettertypes een (betaalde) licentie regelt. Pas anders de configuratie aan om minder of andere lettertypes te gebruiken. Op het font van de Rijkshuisstijl rust auteursrecht.\n\n## Toestemming\n\nWanneer je het logo of de huisstijl wilt gebruiken kun je voor toestemming contact opnemen met de Rijkshuisstijl coördinator. Voor het gebruik van\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Toestemming voor gebruik"
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
