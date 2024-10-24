import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-WA37JuYw.js";
import { m as markdown } from "./README-8lw3oO5y.js";
import { B as ButtonStories, P as Playground, S as SmallButton, a as Primary, b as Secondary, T as Tertiary, A as Active, F as Focus, H as Hover, D as Disabled, c as Busy, d as Toggle, e as ButtonWithIconAtPositionStart, f as ButtonWithIconAtPositionEnd } from "./button.stories-BJz07SxU.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BkbOwdn-.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-pmKOP4ie.js";
import "./index-CFX5ZLtI.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-heading--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
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
      id: "small-button",
      children: "Small Button"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SmallButton
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants",
      children: "Variants"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Primary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Secondary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tertiary
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "button-states",
      children: "Button states"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Busy
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggle
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "button-with-icon",
      children: "Button With Icon"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ButtonWithIconAtPositionStart
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
