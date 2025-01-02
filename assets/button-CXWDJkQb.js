import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-CUx4Fo2X.js";
import { m as markdown } from "./README-8lw3oO5y.js";
import { B as ButtonStories, P as Playground, a as Primary, S as Secondary, T as Tertiary, A as Active, H as Hover, F as Focus, b as Busy, c as Toggle, W as WithStartIcon, d as WithEndIcon } from "./button.stories-Cla13ruH.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BJ3ZvAB1.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-BLZ711uc.js";
import "./index-DbgQBs_-.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import "./components-Cp22cNJ4.js";
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ButtonStories
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Button",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-button--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants-appearance",
      children: "Variants (appearance)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Voor Lux zijn er drie varianten van de button. In de community komen ook andere varianten voor. Kies je een variant die\nniet bestaat in onze tokens dan zal je een paarse styling zien, als visuele waarschuwing."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "primary--primary-action-button",
      children: "Primary / primary action Button"
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
    }), "\n", jsxRuntimeExports.jsx("h2", {
      id: "states_examples",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "busy",
      children: "Busy"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Busy
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Busy,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "toggle--pressed",
      children: "Toggle / Pressed"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Toggle
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggle,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icons",
      children: "Icons"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "start-icon",
      children: "Start Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithStartIcon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithStartIcon,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "end-icon",
      children: "End Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithEndIcon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithEndIcon,
      sourceState: "hidden"
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
