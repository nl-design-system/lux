var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { L as LuxCheckbox } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-CPpl9nLY.js";
const meta = {
  title: "React Components/Checkbox",
  id: "react-components-checkbox",
  component: LuxCheckbox,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-checkbox"
  },
  argTypes: {
    checked: {
      description: "Checked state",
      control: "boolean"
    },
    disabled: {
      description: "Disabled state",
      control: "boolean"
    },
    withTarget: {
      description: "Sets a 44px by 44px click target around the checkbox (WCAG 2.5.5)",
      control: "boolean"
    }
  }
};
const CheckboxTemplate = {
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxCheckbox, { ...args })
};
const Playground = {
  ...CheckboxTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Default = {
  name: "Default",
  args: {}
};
const Checked = {
  name: "Checked",
  args: {
    defaultChecked: true
  }
};
const Disabled = {
  name: "Disabled",
  args: {
    disabled: true
  }
};
const CheckedAndDisabled = {
  name: "Checked and Disabled",
  args: {
    defaultChecked: true,
    disabled: true
  }
};
const Hover = {
  ...CheckboxTemplate,
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const Focus = {
  ...CheckboxTemplate,
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
};
const WithTarget = {
  ...CheckboxTemplate,
  name: "With Target",
  args: {
    withTarget: true
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...CheckboxTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Default',\n  args: {}\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Checked.parameters = {
  ...Checked.parameters,
  docs: {
    ...(_g = Checked.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Checked',\n  args: {\n    defaultChecked: true\n  }\n}",
      ...(_i = (_h = Checked.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_j = Disabled.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'Disabled',\n  args: {\n    disabled: true\n  }\n}",
      ...(_l = (_k = Disabled.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CheckedAndDisabled.parameters = {
  ...CheckedAndDisabled.parameters,
  docs: {
    ...(_m = CheckedAndDisabled.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  name: 'Checked and Disabled',\n  args: {\n    defaultChecked: true,\n    disabled: true\n  }\n}",
      ...(_o = (_n = CheckedAndDisabled.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_p = Hover.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...CheckboxTemplate,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_r = (_q = Hover.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_s = Focus.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...CheckboxTemplate,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  }\n}",
      ...(_u = (_t = Focus.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
WithTarget.parameters = {
  ...WithTarget.parameters,
  docs: {
    ...(_v = WithTarget.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  ...CheckboxTemplate,\n  name: 'With Target',\n  args: {\n    withTarget: true\n  }\n}",
      ...(_x = (_w = WithTarget.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Checked", "Disabled", "CheckedAndDisabled", "Hover", "Focus", "WithTarget"];
const CheckboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checked,
  CheckedAndDisabled,
  Default,
  Disabled,
  Focus,
  Hover,
  Playground,
  WithTarget,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CheckboxStories as C,
  Default as D,
  Focus as F,
  Hover as H,
  Playground as P,
  WithTarget as W,
  Checked as a,
  Disabled as b,
  CheckedAndDisabled as c,
  meta as m
};
