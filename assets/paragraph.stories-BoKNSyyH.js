var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { b as LuxParagraph } from "./index-25q23o6t.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
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
        ],
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
        "nl.nldesignsystem.fallback": [
          "utrecht.document.font-family"
        ],
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
        "nl.nldesignsystem.fallback": [
          "utrecht.document.font-size"
        ],
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
        "nl.nldesignsystem.fallback": [
          "utrecht.document.line-height"
        ],
        "nl.nldesignsystem.figma.supports-token": true
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
          ],
          "nl.nldesignsystem.figma.supports-token": true
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
          ],
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
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-weight",
            "utrecht.document.font-weight"
          ],
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
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.line-height",
            "utrecht.document.line-height"
          ],
          "nl.nldesignsystem.figma.supports-token": true
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
          ],
          "nl.nldesignsystem.figma.supports-token": true
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
          ],
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
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.font-weight",
            "utrecht.document.font-weight"
          ],
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
          "nl.nldesignsystem.fallback": [
            "utrecht.paragraph.line-height",
            "utrecht.document.line-height"
          ],
          "nl.nldesignsystem.figma.supports-token": true
        },
        type: "lineHeights"
      }
    }
  }
};
const tokensDefinition = {
  utrecht
};
const meta = {
  title: "React Components/Paragraph",
  id: "react-components-paragraph",
  component: LuxParagraph,
  argTypes: {
    children: {
      name: "content (children)",
      description: "Paragraph text",
      control: "text",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    },
    appearance: {
      name: "appearance",
      description: "Appearance modifier",
      control: "select",
      options: [void 0, "lead", "small"]
    }
  },
  parameters: {
    tokens,
    tokensPrefix: "utrecht-paragraph",
    tokensDefinition
  }
};
const Playground = {
  name: "Playground",
  args: {
    appearance: void 0,
    children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum."
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Lead = {
  name: "Lead",
  args: {
    ...Playground.args,
    appearance: "lead"
  },
  parameters: {
    docs: {
      description: {
        story: "De `lead` styling wordt toegepast. De content wordt in een `<b>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden."
      }
    }
  }
};
const Small = {
  name: "Small",
  args: {
    ...Playground.args,
    appearance: "small"
  },
  parameters: {
    docs: {
      description: {
        story: "De `small` styling wordt toegepast. De content wordt in een `<small>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden."
      }
    }
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { appearance: "lead", children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { appearance: "small", children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { appearance: "lead", children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { appearance: "small", children: "Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small." })
  ] })
] }), {
  withDocument: true
});
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    appearance: undefined,\n    children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Lead.parameters = {
  ...Lead.parameters,
  docs: {
    ...(_d = Lead.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Lead',\n  args: {\n    ...Playground.args,\n    appearance: 'lead'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De `lead` styling wordt toegepast. De content wordt in een `<b>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden.'\n      }\n    }\n  }\n}",
      ...(_f = (_e = Lead.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_g = Small.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Small',\n  args: {\n    ...Playground.args,\n    appearance: 'small'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De `small` styling wordt toegepast. De content wordt in een `<small>` geplaatst t.b.v. visueel verschil als CSS niet geladen kan worden.'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Small.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_j = DesignTokens.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_l = (_k = DesignTokens.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_m = Visual.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n      <h4 className="utrecht-heading-3">Light</h4>\n      <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n        <LuxParagraph>Lorem ipsum dolor sit amet, content staat in een LuxParagraph.</LuxParagraph>\n        <LuxParagraph appearance="lead">\n          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead.\n        </LuxParagraph>\n        <LuxParagraph appearance="small">\n          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small.\n        </LuxParagraph>\n      </VisualRegressionWrapper>\n      <h4 className="utrecht-heading-3">Dark</h4>\n      <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n        <LuxParagraph>Lorem ipsum dolor sit amet, content staat in een LuxParagraph.</LuxParagraph>\n        <LuxParagraph appearance="lead">\n          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: lead.\n        </LuxParagraph>\n        <LuxParagraph appearance="small">\n          Lorem ipsum dolor sit amet, content staat in een LuxParagraph met appearance: small.\n        </LuxParagraph>\n      </VisualRegressionWrapper>\n    </>, {\n  withDocument: true\n})',
      ...(_o = (_n = Visual.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Lead", "Small", "DesignTokens", "Visual"];
const ParagraphStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Lead,
  Playground,
  Small,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lead as L,
  ParagraphStories as P,
  Small as S,
  Playground as a
};
