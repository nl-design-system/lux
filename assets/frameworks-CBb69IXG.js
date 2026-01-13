import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DvxV4eF3.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CsY5d8EV.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Framework support\n\n[web-components]: /docs/web-components-alert--docs\n[react-components]: /docs/react-components-alert--docs\n\nLUX biedt ondersteuning voor meerdere frameworks. Je bent dus niet verplicht om je aan een specifiek framework te houden als je van LUX gebruikt wilt maken. In de zijbalk zie je per framework welke componenten LUX op dit moment aanbiedt.\nOp dit moment heeft LUX componenten in [React][react-components] en [Web Componenten][web-components].\nIn de NL Design System community vind je onder andere HTML/CSS, React, Angular en React componenten.\n\n## Meer frameworks\n\nHet aanbod van LUX is grotendeels community gedreven wat betekend dat we onze gebruikers vragen om componenten in het gewenste framework aan LUX toe te voegen. Daarna zal LUX zoveel mogelijk van het onderhoud op zich nemen.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Aan de slag/Ontwikkelen/Frameworks"
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
