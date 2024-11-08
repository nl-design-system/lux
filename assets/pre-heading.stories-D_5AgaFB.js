var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { l as LuxPreHeading } from "./index-25q23o6t.js";
import { t as tokens } from "./index-oIKpS5lp.js";
const meta = {
  title: "React Components/Pre-heading",
  id: "react-components-pre-heading",
  component: LuxPreHeading,
  subcomponents: {},
  parameters: {
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
const __namedExportsOrder = ["Playground"];
const PreHeadingStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  PreHeadingStories as P,
  Playground as a
};
