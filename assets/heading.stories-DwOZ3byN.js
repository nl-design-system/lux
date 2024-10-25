var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { a as LuxHeading, b as LuxHeading1, c as LuxHeading2, d as LuxHeading3, e as LuxHeading4, f as LuxHeading5, g as LuxHeading6 } from "./index-pmKOP4ie.js";
import { t as tokens } from "./index-nbThuJUT.js";
const meta = {
  title: "React Components/Heading",
  id: "react-components-heading",
  component: LuxHeading,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: "react-heading"
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
const headingText = "Pa's wijze lynx bezag vroom het fikse aquaduct!";
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
const __namedExportsOrder = ["Playground", "Headings", "HeadingWithDifferentAppearance"];
const HeadingStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeadingWithDifferentAppearance,
  Headings,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeadingStories as H,
  Playground as P,
  Headings as a,
  HeadingWithDifferentAppearance as b
};
