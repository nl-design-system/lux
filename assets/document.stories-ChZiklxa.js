var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { t as tokens } from "./index-C29bp3QW.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import { L as LuxDocument$1 } from "./components-Cp22cNJ4.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const lux = {
  document: {
    "background-color": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "color"
    },
    color: {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "color"
    },
    "font-family": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "*",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "fontFamilies"
    },
    "font-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "fontSizes"
    },
    "font-weight": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<number>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "fontWeights"
    },
    "line-height": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: [
            "<length>",
            "<number>"
          ],
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "lineHeights"
    }
  }
};
const tokensDefinition = {
  lux
};
const LuxDocument = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxDocument$1, { ...props });
const meta = {
  title: "Web Components/Document",
  id: "web-components-document",
  component: LuxDocument,
  parameters: {
    tokens,
    tokensPrefix: "lux-link",
    tokensDefinition
  },
  tags: ["!autodocs"]
};
const Playground = {
  name: "Playground",
  args: {
    children: "Lorem"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const DesignTokens = createDesignTokensStory(meta);
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  args: {\n    children: 'Lorem'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_d = DesignTokens.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_f = (_e = DesignTokens.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Playground", "DesignTokens"];
export {
  DesignTokens,
  Playground,
  __namedExportsOrder,
  meta as default
};
