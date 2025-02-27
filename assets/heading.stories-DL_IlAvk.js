var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { e as LuxHeading, g as LuxHeading1, t as LuxHeading2, u as LuxHeading3, v as LuxHeading4, w as LuxHeading5, x as LuxHeading6 } from "./index-CP4xnOPU.js";
import { t as tokens } from "./index-C9QTpdn_.js";
import { B as BADGES } from "./preview-Bdx5F775.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const utrecht = {
  heading: {
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
    "font-weight": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<number>",
          inherits: true
        },
        "nl.nldesignsystem.figma.supports-token": true
      },
      type: "fontWeights"
    }
  }
};
const tokensDefinition = {
  utrecht
};
const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";
const meta = {
  title: "React Components/Heading",
  id: "react-components-heading",
  component: LuxHeading,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-heading-1",
    tokensDefinition
  },
  argTypes: {
    children: {
      name: "content",
      description: "React text",
      control: "text",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    },
    level: {
      type: "number",
      control: "number"
    },
    appearance: {
      type: "number",
      control: "number"
    }
  }
};
const HeadingTemplate = {
  render: ({
    children,
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading, { ...args, children }),
  args: {
    children: headingText,
    level: 6
  }
};
const Playground = {
  ...HeadingTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Headings = {
  render: ({
    children
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading2, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading3, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading4, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading5, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading6, { children })
  ] }),
  args: {
    children: headingText,
    level: 6
  }
};
const HeadingWithDifferentAppearance = {
  ...HeadingTemplate,
  args: {
    children: headingText,
    level: 3,
    appearance: 1
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeading, { level, children: [
      "H",
      level,
      ": ",
      headingText
    ] }, "light-level-" + level),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeading, { level: 99, appearance: level, children: [
      "Lijkt op een H",
      level,
      ": ",
      headingText
    ] }, "light-appeareance-" + level)
  ] })) }, "light"),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeading, { level, children: [
      "H",
      level,
      ": ",
      headingText
    ] }, "dark-level-" + level),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeading, { level: 99, appearance: level, children: [
      "Lijkt op een H",
      level,
      ": ",
      headingText
    ] }, "dark-appeareance-" + level)
  ] })) }, "dark")
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
      originalSource: "{\n  ...HeadingTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Headings.parameters = {
  ...Headings.parameters,
  docs: {
    ...(_d = Headings.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    children\n  }) => <div>\n      <LuxHeading1>{children}</LuxHeading1>\n      <LuxHeading2>{children}</LuxHeading2>\n      <LuxHeading3>{children}</LuxHeading3>\n      <LuxHeading4>{children}</LuxHeading4>\n      <LuxHeading5>{children}</LuxHeading5>\n      <LuxHeading6>{children}</LuxHeading6>\n    </div>,\n  args: {\n    children: headingText,\n    level: 6\n  }\n}",
      ...(_f = (_e = Headings.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
HeadingWithDifferentAppearance.parameters = {
  ...HeadingWithDifferentAppearance.parameters,
  docs: {
    ...(_g = HeadingWithDifferentAppearance.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...HeadingTemplate,\n  args: {\n    children: headingText,\n    level: 3,\n    appearance: 1\n  }\n}",
      ...(_i = (_h = HeadingWithDifferentAppearance.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
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
      originalSource: `createVisualRegressionStory(() => <>
    <h4 className="utrecht-heading-3">Light</h4>
    <VisualRegressionWrapper className={\`lux-theme--logius-light\`} key={'light'}>
      {[1, 2, 3, 4, 5, 6].map(level => <>
          <LuxHeading level={(level as LuxHeadingProps['level'])} key={'light-level-' + level}>
            H{level}: {headingText}
          </LuxHeading>
          <LuxHeading level={(99 as LuxHeadingProps['level'])} appearance={(level as LuxHeadingProps['appearance'])} key={'light-appeareance-' + level}>
            Lijkt op een H{level}: {headingText}
          </LuxHeading>
        </>)}
    </VisualRegressionWrapper>
    <h4 className="utrecht-heading-3">Dark</h4>
    <VisualRegressionWrapper className={\`lux-theme--logius-dark\`} key="dark">
      {[1, 2, 3, 4, 5, 6].map(level => <>
          <LuxHeading level={(level as LuxHeadingProps['level'])} key={'dark-level-' + level}>
            H{level}: {headingText}
          </LuxHeading>
          <LuxHeading level={(99 as LuxHeadingProps['level'])} appearance={(level as LuxHeadingProps['appearance'])} key={'dark-appeareance-' + level}>
            Lijkt op een H{level}: {headingText}
          </LuxHeading>
        </>)}
    </VisualRegressionWrapper>
  </>)`,
      ...(_o = (_n = Visual.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Headings", "HeadingWithDifferentAppearance", "DesignTokens", "Visual"];
const HeadingStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  HeadingWithDifferentAppearance,
  Headings,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeadingStories as H,
  Playground as P,
  Headings as a,
  HeadingWithDifferentAppearance as b
};
