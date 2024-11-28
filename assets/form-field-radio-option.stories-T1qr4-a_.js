var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { i as LuxFormFieldRadioOption } from "./index-Z6snv40P.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-CWNcJDoj.js";
const meta = {
  title: "React Components/Form Field/Form Field Radio Option",
  id: "react-components-radio-button",
  component: LuxFormFieldRadioOption,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: "utrecht-radio-button"
  },
  argTypes: {
    invalid: {
      description: "Invalid state indicator",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        }
      }
    },
    checked: {
      description: "Checked state",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        },
        category: "HTML attribute"
      }
    },
    description: {
      description: "Description for an option",
      control: "text",
      table: {
        type: {
          summary: "text"
        }
      }
    },
    disabled: {
      description: "Disabled state",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        },
        category: "HTML attribute"
      }
    },
    // Hide other HTML attributes from controls
    name: {
      table: {
        disable: true,
        category: "HTML attribute"
      }
    },
    id: {
      table: {
        disable: true,
        category: "HTML attribute"
      }
    },
    className: {
      table: {
        disable: true,
        category: "HTML attribute"
      }
    }
  }
};
const RadioButtonTemplate = {
  args: {
    label: "Option 1",
    name: "playground"
  }
};
const Playground = {
  ...RadioButtonTemplate,
  name: "playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Default = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "default"
  },
  name: "default"
};
const Checked = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "checked",
    checked: true
  },
  name: "checked"
};
const Invalid = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "invalid",
    invalid: true
  },
  name: "invalid"
};
const Disabled = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "disabled",
    disabled: true
  },
  name: "disabled"
};
const Hover = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "hover"
  },
  name: "hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const FocusVisible = {
  ...RadioButtonTemplate,
  args: {
    ...RadioButtonTemplate.args,
    name: "focus-visible"
  },
  name: "focus-visible",
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  name: 'playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'default'\n  },\n  name: 'default'\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Checked.parameters = {
  ...Checked.parameters,
  docs: {
    ...(_g = Checked.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'checked',\n    checked: true\n  },\n  name: 'checked'\n}",
      ...(_i = (_h = Checked.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_j = Invalid.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'invalid',\n    invalid: true\n  },\n  name: 'invalid'\n}",
      ...(_l = (_k = Invalid.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_m = Disabled.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'disabled',\n    disabled: true\n  },\n  name: 'disabled'\n}",
      ...(_o = (_n = Disabled.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_p = Hover.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'hover'\n  },\n  name: 'hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_r = (_q = Hover.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_s = FocusVisible.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...RadioButtonTemplate,\n  args: {\n    ...RadioButtonTemplate.args,\n    name: 'focus-visible'\n  },\n  name: 'focus-visible',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  }\n}",
      ...(_u = (_t = FocusVisible.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Checked", "Invalid", "Disabled", "Hover", "FocusVisible"];
const FormFieldRadioOptionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checked,
  Default,
  Disabled,
  FocusVisible,
  Hover,
  Invalid,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Checked as C,
  Default as D,
  FormFieldRadioOptionStories as F,
  Hover as H,
  Invalid as I,
  Playground as P,
  Disabled as a,
  FocusVisible as b
};
