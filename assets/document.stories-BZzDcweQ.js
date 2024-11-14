var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { s as LuxDocument, b as LuxParagraph } from "./index-25q23o6t.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const utrecht = {
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
  utrecht
};
const meta = {
  title: "React Components/Document",
  id: "react-components-document",
  component: LuxDocument,
  argTypes: {
    children: {
      name: "content (children)",
      description: "Document inhoud",
      control: "object",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    }
  },
  parameters: {
    tokens,
    tokensPrefix: "utrecht-document",
    tokensDefinition,
    withDocument: false
  }
};
const Playground = {
  name: "Playground",
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum." })
    ] })
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
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxDocument, { children: "Lorem ipsum dolor sit amet, content staat in een LuxDocument." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxDocument, { children: "Lorem ipsum dolor sit amet, content staat in een LuxDocument." })
  ] })
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    children: <article>\n        <h1>Lorem ipsum</h1>\n        <LuxParagraph>\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae\n          malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur\n          lobortis aliquam lectus bibendum.\n        </LuxParagraph>\n      </article>\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
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
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <div>Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument.</div>\n      <LuxDocument>Lorem ipsum dolor sit amet, content staat in een LuxDocument.</LuxDocument>\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <div>Lorem ipsum dolor sit amet, content staat NIET in een LuxDocument.</div>\n      <LuxDocument>Lorem ipsum dolor sit amet, content staat in een LuxDocument.</LuxDocument>\n    </VisualRegressionWrapper>\n  </>)',
      ...(_i = (_h = Visual.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Playground", "DesignTokens", "Visual"];
const DocumentStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DocumentStories as D,
  Playground as P
};
