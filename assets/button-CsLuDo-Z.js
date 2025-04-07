import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BsvQIjfk.js";
import { m as markdown } from "./README-8lw3oO5y.js";
import { B as ButtonStories, P as Playground, a as Primary, S as Secondary, T as Tertiary, b as SmallButton, A as Active, F as Focus, H as Hover, D as Disabled, c as Busy, d as Toggle, e as ButtonWithIconAtPositionStart, f as ButtonWithIconAtPositionEnd } from "./button.stories-BY640UlD.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DgH3ry5e.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-CkZkm0X-.js";
import "./index-DdOurD3B.js";
import "./preview-Cuh0mwcS.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ButtonStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "button",
      children: "Button"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Button",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-button--docs"
    }), "\n", "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmerkingen",
      children: "Opmerkingen"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De ", jsxRuntimeExports.jsx(_components.code, {
          children: "iconPosition"
        }), " property is toegevoegd om het icoon te positioneren binnen de button."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Met de ", jsxRuntimeExports.jsx(_components.code, {
          children: "size"
        }), " property kan de grootte van de button ingesteld worden."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants",
      children: "Variants"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "primary--primary-action-button",
      children: "Primary / primary action button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Primary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Primary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "secondary--secondary-action-button",
      children: "Secondary / secondary action button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Secondary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Secondary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tertiary--subtle-button",
      children: "Tertiary / subtle button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Tertiary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tertiary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "small-button",
      children: "Small Button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: SmallButton
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SmallButton
    }), "\n", jsxRuntimeExports.jsx("h2", {
      id: "states_examples",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "disabled",
      children: "Disabled"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "busy",
      children: "Busy"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Busy
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Busy
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "toggle--pressed",
      children: "Toggle / Pressed"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Toggle
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggle
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "button-with-icon",
      children: "Button With Icon"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "at-start-position",
      children: "At start position"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: ButtonWithIconAtPositionStart
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ButtonWithIconAtPositionStart
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "at-end-position",
      children: "At end position"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: ButtonWithIconAtPositionEnd
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ButtonWithIconAtPositionEnd
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
