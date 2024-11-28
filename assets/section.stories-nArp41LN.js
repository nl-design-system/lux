var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { a as LuxHeading1, b as LuxParagraph, y as LuxSection$1 } from "./index-Z6snv40P.js";
import { t as tokens } from "./index-BLZ711uc.js";
const LuxSection = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxSection$1, { ...props });
const meta = {
  title: "React Components/Section",
  id: "react-components-section",
  component: LuxSection,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: "react-section"
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
const SectionTemplate = {
  render: ({
    children,
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxSection, { ...args, children })
};
const Playground = {
  ...SectionTemplate,
  name: "Playground",
  args: {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum." })
    ] }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "Morbi commodo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero, sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor justo, aliquet quis nulla ac, ultrices dictum leo." })
    ] })]
  },
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
      originalSource: "{\n  ...SectionTemplate,\n  name: 'Playground',\n  args: {\n    children: [<div>\n        <LuxHeading1>Lorem ipsum</LuxHeading1>\n        <LuxParagraph>\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae\n          malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur\n          lobortis aliquam lectus bibendum.\n        </LuxParagraph>\n      </div>, <div>\n        <LuxHeading1>Morbi commodo</LuxHeading1>\n        <LuxParagraph>\n          Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero,\n          sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin\n          nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa\n          quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia\n          nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus\n          accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor\n          justo, aliquet quis nulla ac, ultrices dictum leo.\n        </LuxParagraph>\n      </div>]\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Playground"];
const SectionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Playground as P,
  SectionStories as S
};
