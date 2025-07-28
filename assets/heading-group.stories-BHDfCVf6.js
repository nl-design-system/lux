var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { e as LuxHeadingGroup, f as LuxHeading, g as LuxPreHeading, h as LuxHeading1 } from "./index-BxZu2mNN.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-cq77f8jl.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const meta = {
  title: "React Components/HeadingGroup",
  id: "react-components-heading-group",
  component: LuxHeadingGroup,
  subcomponents: {},
  parameters: {
    badges: [BADGES.STABLE, BADGES.LATEST],
    tokens,
    tokensPrefix: "react-heading-group"
  },
  argTypes: {
    children: {
      name: "content",
      description: "React text",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    }
  }
};
const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";
const HeadingGroupTemplate = {
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeadingGroup, { ...args, children: args["children"] })
};
const Playground = {
  ...HeadingGroupTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  args: {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading, { level: 1, children: headingText }), /* @__PURE__ */ jsxRuntimeExports.jsx(LuxPreHeading, { children: headingText })]
  },
  tags: ["!autodocs"]
};
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeadingGroup, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "LuxHeading1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxPreHeading, { children: "LuxPreHeading" })
  ] }) }, "light"),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxHeadingGroup, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "LuxHeading1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxPreHeading, { children: "LuxPreHeading" })
  ] }) }, "dark")
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
      originalSource: "{\n  ...HeadingGroupTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  args: {\n    children: [<LuxHeading level={1}>{headingText}</LuxHeading>, <LuxPreHeading>{headingText}</LuxPreHeading>]\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_d = Visual.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-light" key="light">\n      <LuxHeadingGroup>\n        <LuxHeading1>LuxHeading1</LuxHeading1>\n        <LuxPreHeading>LuxPreHeading</LuxPreHeading>\n      </LuxHeadingGroup>\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-dark" key="dark">\n      <LuxHeadingGroup>\n        <LuxHeading1>LuxHeading1</LuxHeading1>\n        <LuxPreHeading>LuxPreHeading</LuxPreHeading>\n      </LuxHeadingGroup>\n    </VisualRegressionWrapper>\n  </>)',
      ...(_f = (_e = Visual.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Visual"];
const HeadingGroupStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeadingGroupStories as H,
  Playground as P
};
