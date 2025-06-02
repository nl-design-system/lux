var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { a as LuxSelect, b as LuxSelectOption } from "./index-DcF6CAfA.js";
import { t as tokens } from "./index-DdOurD3B.js";
import { B as BADGES } from "./preview-SWj-Nf6K.js";
const meta = {
  title: "React Components/Select",
  id: "react-components-select",
  component: LuxSelect,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-select"
  },
  argTypes: {
    disabled: {
      description: "disabled indicator",
      control: "boolean"
    },
    required: {
      description: "required indicator",
      control: "boolean"
    },
    invalid: {
      description: "invalid indicator",
      control: "boolean"
    }
  }
};
const selectOptions = [{
  value: "0",
  label: "Select an option",
  disabled: true
}, {
  value: "1",
  label: "Disabled"
}, {
  value: "2",
  label: "Required",
  selected: true
}, {
  value: "3",
  label: "Invalid"
}, {
  value: "4",
  label: "Focus"
}, {
  value: "5",
  label: "FocusVisible"
}, {
  value: "6",
  label: "Hover"
}];
const SelectTemplate = {
  args: {
    defaultValue: "0"
  },
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxSelect, { ...args, children: selectOptions.map(({
    label,
    value,
    disabled
  }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxSelectOption, { value, disabled, children: label }, index)) })
};
const Playground = {
  ...SelectTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Disabled = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    disabled: true,
    defaultValue: "1"
  }
};
const Required = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    required: true,
    defaultValue: "2"
  }
};
const Invalid = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    invalid: true,
    defaultValue: "3"
  }
};
const Focus = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: "4"
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
};
const FocusVisible = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: "5"
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
};
const Hover = {
  ...SelectTemplate,
  args: {
    ...SelectTemplate.args,
    defaultValue: "6"
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_d = Disabled.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    disabled: true,\n    defaultValue: '1'\n  }\n}",
      ...(_f = (_e = Disabled.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_g = Required.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    required: true,\n    defaultValue: '2'\n  }\n}",
      ...(_i = (_h = Required.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_j = Invalid.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    invalid: true,\n    defaultValue: '3'\n  }\n}",
      ...(_l = (_k = Invalid.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_m = Focus.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    defaultValue: '4'\n  },\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}",
      ...(_o = (_n = Focus.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_p = FocusVisible.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    defaultValue: '5'\n  },\n  parameters: {\n    pseudo: {\n      focusVisible: true,\n      focus: true\n    }\n  }\n}",
      ...(_r = (_q = FocusVisible.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_s = Hover.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...SelectTemplate,\n  args: {\n    ...SelectTemplate.args,\n    defaultValue: '6'\n  },\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_u = (_t = Hover.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Disabled", "Required", "Invalid", "Focus", "FocusVisible", "Hover"];
const SelectStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Disabled,
  Focus,
  FocusVisible,
  Hover,
  Invalid,
  Playground,
  Required,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Disabled as D,
  Focus as F,
  Hover as H,
  Invalid as I,
  Playground as P,
  SelectStories as S,
  FocusVisible as a,
  meta as m
};
