import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BGKOBH5L.js";
import { F as FormFieldCheckboxStories, P as Playground, I as Invalid, D as Disabled, A as Active, H as Hover, a as Focus, W as WithDescription, b as WithTarget, c as ActiveWithTarget, d as HoverWithTarget, e as FocusWithTarget, w as withLongTexts } from "./form-field-checkbox.stories-CicX5FUd.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D-8kvnYm.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-BJfiFLmy.js";
import "./index-DB79t5Cy.js";
import "./preview-Cq3vcknU.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import "./checkbox.stories-DAWi4mWB.js";
import "./form-field-description.stories-JGq5AP9I.js";
import "./form-field-error-message.stories-B4wnkMqy.js";
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
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
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
      id: "active-with-target",
      children: "Active With target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: ActiveWithTarget
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ActiveWithTarget
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover-with-target",
      children: "Hover With target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: HoverWithTarget
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HoverWithTarget
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus-with-target",
      children: "Focus With target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: FocusWithTarget
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FocusWithTarget
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
