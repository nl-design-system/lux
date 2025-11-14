var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { c as LuxTextArea } from "./index-BJfiFLmy.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-Dj-9C4MD.js";
const meta = {
  title: "React Components/Textarea",
  id: "react-components-textarea",
  component: LuxTextArea,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-textarea"
  },
  argTypes: {
    dir: {
      description: "Text direction",
      control: {
        type: "select"
      },
      options: ["auto", "ltr", "rtl"]
    },
    disabled: {
      description: "Disabled",
      control: "boolean"
    },
    invalid: {
      description: "Invalid",
      control: "boolean"
    },
    readOnly: {
      description: "Read-only",
      control: "boolean"
    },
    required: {
      description: "Required",
      control: "boolean"
    },
    rows: {
      description: "Rows",
      control: "number"
    },
    placeholder: {
      description: "Set the value of the placeholder text",
      control: "text"
    },
    spellCheck: {
      description: "Spellcheck",
      control: "boolean"
    }
  },
  args: {
    dir: "auto",
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    spellCheck: true
  }
};
const TextareaTemplate = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxTextArea, { ...args })
};
const Playground = {
  ...TextareaTemplate,
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Default = {
  ...TextareaTemplate,
  args: {
    placeholder: "Default textarea"
  }
};
const RTL = {
  args: {
    placeholder: "اكتب هنا...",
    dir: "rtl"
  }
};
const Invalid = {
  args: {
    placeholder: "Typ hier iets...",
    invalid: true
  }
};
const Disabled = {
  args: {
    placeholder: "Dit veld is uitgeschakeld",
    disabled: true
  }
};
const ReadOnly = {
  args: {
    placeholder: "Dit veld is alleen-lezen",
    readOnly: true,
    value: "Dit is een alleen-lezen tekst"
  }
};
const Required = {
  args: {
    placeholder: "Vul dit veld in",
    required: true
  }
};
const DisableSpellCheck = {
  args: {
    placeholder: "Spellingscontrole is uitgeschakeld",
    spellCheck: false
  }
};
const AutoFocus = {
  args: {
    placeholder: "Dit veld krijgt automatisch focus",
    autoFocus: true
  }
};
const FocusVisible = {
  args: {
    placeholder: "Tab hiernaartoe om focus-visible te testen"
  },
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
};
const Hover = {
  args: {
    placeholder: "Beweeg je muis hierover"
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const MaxLengte = {
  args: {
    placeholder: "Maximaal 100 tekens",
    maxLength: 100
  }
};
const CustomCSSClass = {
  args: {
    placeholder: "Met een aangepaste class",
    className: "custom-textarea"
  }
};
const Rows = {
  args: {
    placeholder: "Aantal regels",
    rows: 8
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...TextareaTemplate,\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...TextareaTemplate,\n  args: {\n    placeholder: 'Default textarea'\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
RTL.parameters = {
  ...RTL.parameters,
  docs: {
    ...(_g = RTL.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'اكتب هنا...',\n    dir: 'rtl'\n  }\n}",
      ...(_i = (_h = RTL.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_j = Invalid.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Typ hier iets...',\n    invalid: true\n  }\n}",
      ...(_l = (_k = Invalid.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_m = Disabled.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Dit veld is uitgeschakeld',\n    disabled: true\n  }\n}",
      ...(_o = (_n = Disabled.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ReadOnly.parameters = {
  ...ReadOnly.parameters,
  docs: {
    ...(_p = ReadOnly.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Dit veld is alleen-lezen',\n    readOnly: true,\n    value: 'Dit is een alleen-lezen tekst'\n  }\n}",
      ...(_r = (_q = ReadOnly.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_s = Required.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Vul dit veld in',\n    required: true\n  }\n}",
      ...(_u = (_t = Required.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
DisableSpellCheck.parameters = {
  ...DisableSpellCheck.parameters,
  docs: {
    ...(_v = DisableSpellCheck.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Spellingscontrole is uitgeschakeld',\n    spellCheck: false\n  }\n}",
      ...(_x = (_w = DisableSpellCheck.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
AutoFocus.parameters = {
  ...AutoFocus.parameters,
  docs: {
    ...(_y = AutoFocus.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Dit veld krijgt automatisch focus',\n    autoFocus: true\n  }\n}",
      ...(_A = (_z = AutoFocus.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_B = FocusVisible.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Tab hiernaartoe om focus-visible te testen'\n  },\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  }\n}",
      ...(_D = (_C = FocusVisible.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_E = Hover.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Beweeg je muis hierover'\n  },\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_G = (_F = Hover.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
MaxLengte.parameters = {
  ...MaxLengte.parameters,
  docs: {
    ...(_H = MaxLengte.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Maximaal 100 tekens',\n    maxLength: 100\n  }\n}",
      ...(_J = (_I = MaxLengte.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
CustomCSSClass.parameters = {
  ...CustomCSSClass.parameters,
  docs: {
    ...(_K = CustomCSSClass.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Met een aangepaste class',\n    className: 'custom-textarea'\n  }\n}",
      ...(_M = (_L = CustomCSSClass.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
Rows.parameters = {
  ...Rows.parameters,
  docs: {
    ...(_N = Rows.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  args: {\n    placeholder: 'Aantal regels',\n    rows: 8\n  }\n}",
      ...(_P = (_O = Rows.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "RTL", "Invalid", "Disabled", "ReadOnly", "Required", "DisableSpellCheck", "AutoFocus", "FocusVisible", "Hover", "MaxLengte", "CustomCSSClass", "Rows"];
const TextareaStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoFocus,
  CustomCSSClass,
  Default,
  DisableSpellCheck,
  Disabled,
  FocusVisible,
  Hover,
  Invalid,
  MaxLengte,
  Playground,
  RTL,
  ReadOnly,
  Required,
  Rows,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Playground as P,
  TextareaStories as T,
  meta as m
};
