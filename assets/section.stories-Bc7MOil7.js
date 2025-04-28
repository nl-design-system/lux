var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { z as LuxSection$1, g as LuxHeading1, i as LuxParagraph, t as LuxHeading2 } from "./index-CkZkm0X-.js";
import { t as tokens } from "./index-DdOurD3B.js";
import { B as BADGES } from "./preview-l_EaebjM.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxSection$1, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "Lorem ipsum" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading2, { children: "Morbi commodo" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero, sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor justo, aliquet quis nulla ac, ultrices dictum leo." })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const LuxSection = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxSection$1, { ...props });
const meta = {
  title: "React Components/Section",
  id: "react-components-section",
  component: LuxSection,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading2, { children: "Morbi commodo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero, sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor justo, aliquet quis nulla ac, ultrices dictum leo." })
    ] })]
  },
  parameters: {
    backgrounds: {
      default: "canvas"
    },
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: "lux-theme--logius-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) })
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
      originalSource: "{\n  ...SectionTemplate,\n  name: 'Playground',\n  args: {\n    children: [<div>\n        <LuxHeading1>Lorem ipsum</LuxHeading1>\n        <LuxParagraph>\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae\n          malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur\n          lobortis aliquam lectus bibendum.\n        </LuxParagraph>\n      </div>, <div>\n        <LuxHeading2>Morbi commodo</LuxHeading2>\n        <LuxParagraph>\n          Morbi commodo augue eget consequat tempus. Nulla scelerisque cursus fermentum. Aenean placerat ligula libero,\n          sit amet malesuada neque maximus et. Phasellus at massa nulla. Quisque sagittis tempor ante, quis sollicitudin\n          nisi vulputate eu. Curabitur eget ante a orci efficitur commodo. Fusce lobortis laoreet tincidunt. Nam a massa\n          quis risus vestibulum vulputate nec eget erat. Class aptent taciti sociosqu ad litora torquent per conubia\n          nostra, per inceptos himenaeos. Curabitur finibus semper congue. Integer in nulla venenatis quam luctus\n          accumsan. Aliquam molestie tincidunt erat a tincidunt. Donec posuere et dolor sit amet euismod. Praesent dolor\n          justo, aliquet quis nulla ac, ultrices dictum leo.\n        </LuxParagraph>\n      </div>]\n  },\n  parameters: {\n    backgrounds: {\n      default: 'canvas'\n    },\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_d = Visual.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-light">\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className="lux-theme--logius-dark">\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_f = (_e = Visual.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Visual"];
const SectionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Playground as P,
  SectionStories as S
};
