var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { p as LuxHeadingGroup, q as LuxHeading, r as LuxPreHeading } from "./index-CDlQSoJ1.js";
import { t as tokens } from "./index-BLZ711uc.js";
const meta = {
  title: "React Components/Heading-group",
  id: "react-components-heading-group",
  component: LuxHeadingGroup,
  subcomponents: {},
  parameters: {
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
const __namedExportsOrder = ["Playground"];
const HeadingGroupStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeadingGroupStories as H,
  Playground as P
};
