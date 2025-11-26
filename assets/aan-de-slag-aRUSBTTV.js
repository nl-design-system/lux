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
const markdown = "# Aan de slag als developer\n\n## Vereisten\n\nVoor dat je begint is het belangrijk eerst een aantal zaken geregeld te hebben:\n\n- Jouw UX designer gebruikt de LUX UI kit in Figma ontwerpen\n- Er is een thema in LUX voor jouw product\n- Je hebt overlegd met jouw UX designer welke LUX componenten gebruikt zullen worden\n\nIn deze storybook zie je welke componenten er beschikbaar zijn.\n\n## Installeren\n\n### Installeer de LUX design tokens\n\nInstaller de [@lux-design-system/design-tokens](https://www.npmjs.com/package/@lux-design-system/design-tokens) package:\n\n```bash\nnpm install @lux-design-system/design-tokens --save-dev\n```\n\n### Installeer de LUX componenten\n\nSelecteer het framework van jouw keuze: [LUX packages op NPM](https://www.npmjs.com/org/lux-design-system). Hier is een voorbeeld van React:\n\n```bash\nnpm install @lux-design-system/components-react --save-dev\n```\n\nIn de readme files staat beschreven hoe je de packages kan gebruiken.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Aan de slag/Ontwikkelen/Aan de slag"
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
