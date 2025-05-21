import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-DteVdozH.js";
import { F as FormFieldCheckboxStories, P as Playground, I as Invalid, D as Disabled, W as WithDescription, a as WithTarget, w as withLongTexts } from "./form-field-checkbox.stories-DCLMfaif.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Bgwc3k-n.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DcF6CAfA.js";
import "./index-DdOurD3B.js";
import "./preview-B7V1lFdG.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import "./checkbox.stories-BjTRuueo.js";
import "./form-field-description.stories-B-YrbBFU.js";
import "./form-field-error-message.stories-Dzco1vDo.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FormFieldCheckboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "form-field-checkbox",
      children: "Form Field Checkbox"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "states",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "invalid",
      children: "Invalid"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "disabled",
      children: "Disabled"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "with-description",
      children: "With description"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithDescription
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithDescription
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "with-target",
      children: "With target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithTarget
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithTarget
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "with-long-texts",
      children: "With long texts"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: withLongTexts
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: withLongTexts
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
