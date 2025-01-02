import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3 } from "./index-BRIEqJCc.js";
import { F as FormFieldSelectStories, P as Playground } from "./form-field-select.stories-Cyosf2GY.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-C8vROoQ_.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-dyBYM_CB.js";
import "./index-BLZ711uc.js";
import "./preview-DsRnnO9F.js";
import "./form-field-description.stories-Ddt_t0u5.js";
import "./form-field-error-message.stories-DnRkVwfu.js";
import "./select.stories-cyzfw8QB.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FormFieldSelectStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "lux-form-field-select",
      children: "Lux Form Field Select"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
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
