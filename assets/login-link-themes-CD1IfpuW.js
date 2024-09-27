import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Canvas } from "./index-BrWqjNpG.js";
import { L as LoginLinkStories, a as LightTheme, D as DarkTheme } from "./login-link.stories-DYeBl2Gl.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-J37HtSdB.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./components-BEi5gG--.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      name: "Themes",
      of: LoginLinkStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "login-link-themes",
      children: "Login Link Themes"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "light-theme-default",
      children: "Light Theme (default)"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LightTheme,
      withToolbar: false,
      className: "lux-theme--logius-light",
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "dark-theme",
      children: "Dark Theme"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DarkTheme,
      withToolbar: false,
      className: "lux-theme--logius-dark",
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "nldoc-light-theme",
      children: "NLdoc Light Theme"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LightTheme,
      withToolbar: false,
      className: "lux-theme--nldoc-light",
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "nldoc-dark-theme",
      children: "NLdoc Dark Theme"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DarkTheme,
      withToolbar: false,
      className: "lux-theme--nldoc-dark",
      sourceState: "none"
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
