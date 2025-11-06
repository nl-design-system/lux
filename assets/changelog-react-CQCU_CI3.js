import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-BGKOBH5L.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D-8kvnYm.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const changelogMd = "# @lux-design-system/components-react\n\n## 1.2.2\n\n### Patch Changes\n\n- 42da7f2: Checkbox doesn't use force z-order settings anymore\n\n## 1.2.1\n\n### Patch Changes\n\n- b97a9d2: Improved React Alert component styling for font and icon-positioning\n- 360505e: Radio button size improvements\n\n## 1.2.0\n\n### Minor Changes\n\n- a6d5673: Added LinkList component\n- 31d4877: Add Accordion component\n\n## 1.1.1\n\n### Patch Changes\n\n- 3dc8303: Fix link to github repo in package.json\n- 749521f: Increase formfield checkbox specificity to ensure lux styling is always applied\n\n## 1.1.0\n\n### Minor Changes\n\n- 58179c0: Toegevoegd: componenten Form Field Textarea en Textarea\n\n### Patch Changes\n\n- 2462274: Bugfix: select focus outline correctie\n- 0ee6198: - Remove test files from tsconfig exclude so they are being interpreted by Typescript\n  - Add Jest setup file to tsconfig so methods on expect are recognised\n\n## 1.0.1\n\n### Patch Changes\n\n- 6e250d7: Bugfix niet werkende icon library import in components-react/icon\n\n## 1.0.0\n\n### Major Changes\n\n- 90370e7: Nieuw component: Select\n- edab49a: Nieuwe componenten:\n\n  - LuxHeading\n  - LuxHeading1\n  - LuxHeading2\n  - LuxHeading3\n  - LuxHeading4\n  - LuxHeading5\n  - LuxHeading6\n\n- 6e139a6: Nieuwe componenten:\n\n  - LuxPreHeading\n  - LuxHeadingGroup\n\n- c834cc4: Nieuw component: LuxAlert\n- a3427ca: Nieuwe componenten:\n\n  - LuxDocument\n  - LuxParagraph\n\n- 9345672: Nieuw component: Section\n- a2ce8bc: Nieuwe componenten:\n\n  - Radio Button\n  - Form Field Radio Option\n  - Form Field Radio Group\n\n- 2ac36c4: Nieuw component: Form Field\n- ae73217: Nieuw component: Form Field Checkbox\n- 2ac36c4: Nieuw component: Lux Form Field Text Input\n- 3636be3: Nieuw component: Checkbox\n- 2ac36c4: Nieuw component: Form Field Error Message\n- e7a4ac7: Nieuw component: LuxButton\n- 2ac36c4: Nieuw component: Form Field Description\n- 3adfa8d: Nieuw component: Link\n- 3200913: Nieuw component: LuxIcon\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Changelogs/components-react"
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
