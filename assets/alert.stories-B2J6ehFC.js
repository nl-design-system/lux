var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { i as LuxAlert, j as LuxParagraph, h as LuxHeading1 } from "./index-B0rW5TGL.js";
import { t as tokens } from "./index-DdOurD3B.js";
import { B as BADGES } from "./preview-Dnis8LZl.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const VisualAlertTemplate = ({ children, type }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxAlert, { type, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children }) });
const VisualTypes = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAlertTemplate, { type: "info", children: "Info Alert" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAlertTemplate, { type: "success", children: "Okay Alert" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAlertTemplate, { type: "warning", children: "Warning Alert" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAlertTemplate, { type: "error", children: "Error Alert" })
] });
VisualTypes.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualTypes" };
const meta = {
  title: "React Components/Alert",
  id: "react-components-alert",
  component: LuxAlert,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-alert"
  },
  argTypes: {
    type: {
      description: "Type modifier",
      control: "select",
      options: ["info", "success", "warning", "error"]
    },
    children: {
      name: "content (children)",
      description: "Alert inhoud",
      control: "object",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    }
  }
};
const AlertTemplate = {
  args: {
    type: "info"
  },
  render: ({
    ...args
  }, context) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxAlert, { ...args, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: context.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus." })
  ] }) })
};
const Playground = {
  ...AlertTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const InfoAlert = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: "info"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const SuccessAlert = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: "success"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const WarningAlert = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: "warning"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const ErrorAlert = {
  ...AlertTemplate,
  args: {
    ...AlertTemplate.args,
    type: "error"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualTypes, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualTypes, {}) })
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
      originalSource: "{\n  ...AlertTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
InfoAlert.parameters = {
  ...InfoAlert.parameters,
  docs: {
    ...(_d = InfoAlert.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...AlertTemplate,\n  args: {\n    ...AlertTemplate.args,\n    type: 'info'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_f = (_e = InfoAlert.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SuccessAlert.parameters = {
  ...SuccessAlert.parameters,
  docs: {
    ...(_g = SuccessAlert.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...AlertTemplate,\n  args: {\n    ...AlertTemplate.args,\n    type: 'success'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_i = (_h = SuccessAlert.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WarningAlert.parameters = {
  ...WarningAlert.parameters,
  docs: {
    ...(_j = WarningAlert.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...AlertTemplate,\n  args: {\n    ...AlertTemplate.args,\n    type: 'warning'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_l = (_k = WarningAlert.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ErrorAlert.parameters = {
  ...ErrorAlert.parameters,
  docs: {
    ...(_m = ErrorAlert.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...AlertTemplate,\n  args: {\n    ...AlertTemplate.args,\n    type: 'error'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_o = (_n = ErrorAlert.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_p = Visual.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualTypes />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualTypes />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_r = (_q = Visual.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Playground", "InfoAlert", "SuccessAlert", "WarningAlert", "ErrorAlert", "Visual"];
const AlertStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorAlert,
  InfoAlert,
  Playground,
  SuccessAlert,
  Visual,
  WarningAlert,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AlertStories as A,
  ErrorAlert as E,
  InfoAlert as I,
  Playground as P,
  SuccessAlert as S,
  WarningAlert as W
};
