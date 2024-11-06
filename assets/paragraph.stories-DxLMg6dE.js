var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { t as tokens } from "./index-oIKpS5lp.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
import { a as LuxParagraph$1 } from "./components-Cp22cNJ4.js";
const utrecht = {
  paragraph: {
    color: {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        },
        "nl.nldesignsystem.fallback": [
          "utrecht.document.color"
        ]
      },
      type: "color"
    },
    "font-family": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "*",
          inherits: true
        },
        "nl.nldesignsystem.fallback": [
          "utrecht.document.font-family"
        ]
      },
      type: "fontFamilies"
    },
    "font-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        },
        "nl.nldesignsystem.fallback": [
          "utrecht.document.font-size"
        ]
      },
      type: "fontSizes"
    },
    "font-weight": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<number>",
          inherits: true
        }
      },
      type: "fontWeights"
    },
    "line-height": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        },
        "nl.nldesignsystem.fallback": [
          "utrecht.document.line-height"
        ]
      },
      type: "lineHeights"
    },
    "margin-block-start": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": false
      },
      type: "spacing"
    },
    "margin-block-end": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": false
      },
      type: "spacing"
    },
    lead: {
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.color",
            "utrecht.document.color"
          ]
        },
        type: "color"
      },
      "font-size": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-size",
            "utrecht.document.font-size"
          ]
        },
        type: "fontSizes"
      },
      "font-weight": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-weight",
            "utrecht.document.font-weight"
          ]
        },
        type: "fontWeights"
      },
      "line-height": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.line-height",
            "utrecht.document.line-height"
          ]
        },
        type: "lineHeights"
      }
    },
    small: {
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.color",
            "utrecht.document.color"
          ]
        },
        type: "color"
      },
      "font-size": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-size",
            "utrecht.document.font-size"
          ]
        },
        type: "fontSizes"
      },
      "font-weight": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-weight",
            "utrecht.document.font-weight"
          ]
        },
        type: "fontWeights"
      },
      "line-height": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.line-height",
            "utrecht.document.line-height"
          ]
        },
        type: "lineHeights"
      }
    }
  }
};
const tokensDefinition = {
  utrecht
};
const LuxParagraph = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph$1, { ...props });
const meta = {
  title: "Web Components/Paragraph",
  id: "web-components-paragraph",
  component: LuxParagraph,
  parameters: {
    tokens,
    tokensPrefix: "lux-alert",
    tokensDefinition
  },
  argTypes: {
    children: {
      name: "content",
      description: "Paragraph text",
      control: "text",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    }
  }
};
const Playground = {
  name: "Playground",
  args: {
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }) })
] }));
Visual.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Visual"
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  args: {\n    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
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
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_g = Visual.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="lux-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <LuxParagraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</LuxParagraph>\n    </VisualRegressionWrapper>\n    <h4 className="lux-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <LuxParagraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</LuxParagraph>\n    </VisualRegressionWrapper>\n  </>)',
      ...(_i = (_h = Visual.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Playground", "DesignTokens", "Visual"];
const ParagraphStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ParagraphStories as P,
  Playground as a
};
