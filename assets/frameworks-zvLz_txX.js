import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-DteVdozH.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Bgwc3k-n.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Architectuur/Frameworks support"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "framework-support",
      children: "Framework support"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["LUX biedt ondersteuning voor meerdere frameworks. Je bent dus niet verplicht om je aan een specifiek framework te houden als je van LUX gebruikt wilt maken. In de zijbalk zie je per framework welke componenten LUX op dit moment aanbiedt.\nOp dit moment heeft LUX componenten in ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/react-components-alert--docs",
        children: "React"
      }), " en ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/web-components-alert--docs",
        children: "Web Componenten"
      }), ".\nIn de NL Design System community vind je onder andere HTML/CSS, React, Angular en React componenten."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "meer-frameworks",
      children: "Meer frameworks"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Het aanbod van LUX is grotendeels community gedreven wat betekend dat we onze gebruikers vragen om componenten in het gewenste framework aan LUX toe te voegen. Daarna zal LUX zoveel mogelijk van het onderhoud op zich nemen."
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
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
