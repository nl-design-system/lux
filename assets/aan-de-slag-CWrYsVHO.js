import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-BX3ByPLz.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B5T7eFD4.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Aan de slag als designer\n\n## LUX UI kit\n\n[Lees in de LUX Figma omgeving hoe je de UI kit kan gebruiken](https://www.figma.com/design/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?m=auto&node-id=265-14201) om in Figma designs te maken met herbruikbare componenten, in de huisstijl van jouw product.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Aan de slag/Ontwerpen/Aan de slag"
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
