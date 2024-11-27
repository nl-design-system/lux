var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { L as LuxAlert, a as LuxHeading1, b as LuxParagraph } from "./index-DEzLU02N.js";
import { t as tokens } from "./index-BLZ711uc.js";
const meta = {
  title: "React Components/Alert",
  id: "react-components-alert",
  component: LuxAlert,
  subcomponents: {},
  parameters: {
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
    type: "info",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxHeading1, { children: "Heading" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus." })
    ] })
  },
  render: ({
    children,
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxAlert, { ...args, children })
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
const __namedExportsOrder = ["Playground", "InfoAlert", "SuccessAlert", "WarningAlert", "ErrorAlert"];
const AlertStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorAlert,
  InfoAlert,
  Playground,
  SuccessAlert,
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
