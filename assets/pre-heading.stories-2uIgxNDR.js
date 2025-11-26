var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { g as LuxPreHeading } from "./index-BJfiFLmy.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-CjWCEDbk.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const meta = {
  title: "React Components/PreHeading",
  id: "react-components-pre-heading",
  component: LuxPreHeading,
  subcomponents: {},
  parameters: {
    badges: [BADGES.STABLE, BADGES.LATEST],
    tokens,
    tokensPrefix: "react-pre-heading"
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
    }
  }
};
const preHeadingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";
const PreHeadingTemplate = {
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxPreHeading, { ...args, children: args["children"] }),
  args: {
    children: preHeadingText
  }
};
const Playground = {
  ...PreHeadingTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxPreHeading, { children: [
    "LuxPreHeading: ",
    preHeadingText
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxPreHeading, { children: [
    "LuxPreHeading: ",
    preHeadingText
  ] }) })
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
      originalSource: "{\n  ...PreHeadingTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_d = Visual.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-light">\n      <LuxPreHeading>LuxPreHeading: {preHeadingText}</LuxPreHeading>\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-dark">\n      <LuxPreHeading>LuxPreHeading: {preHeadingText}</LuxPreHeading>\n    </VisualRegressionWrapper>\n  </>)',
      ...(_f = (_e = Visual.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Visual"];
const PreHeadingStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  PreHeadingStories as P,
  Playground as a
};
