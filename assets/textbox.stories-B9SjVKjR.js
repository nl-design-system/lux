var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { c as LuxTextbox, I as INPUT_TYPES } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-C9QTpdn_.js";
import { r as reactExports } from "./index-aC1ZMUrs.js";
import { B as BADGES } from "./preview-CQs3FpNo.js";
const WrappedLuxTextbox = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxTextbox, { ...props, ref }));
WrappedLuxTextbox.displayName = "LuxTextbox";
const meta = {
  title: "React Components/Textbox",
  id: "react-components-form-field-textbox",
  component: WrappedLuxTextbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-textbox"
  },
  argTypes: {
    type: {
      control: "select",
      options: Object.values(INPUT_TYPES)
    },
    dir: {
      control: "select",
      options: ["auto", "ltr", "rtl"]
    },
    disabled: {
      control: "boolean"
    },
    focusVisible: {
      control: "boolean"
    },
    invalid: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    },
    required: {
      control: "boolean"
    },
    value: {
      control: "text"
    },
    autoComplete: {
      control: "select",
      options: ["", "additional-name", "address-level1", "address-level2", "address-level3", "address-level4", "address-line1", "address-line2", "address-line3", "bday", "bday-day", "bday-month", "bday-year", "cc-additional-name", "cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-family-name", "cc-given-name", "cc-name", "cc-number", "cc-type", "country", "country-name", "current-password", "email", "family-name", "fax", "given-name", "home", "honorific-prefix", "honorific-suffix", "impp", "language", "mobile", "name", "new-password", "nickname", "one-time-code", "organization", "organization-title", "pager", "photo", "postal-code", "sex", "street-address", "tel", "tel-area-code", "tel-country-code", "tel-extension", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-national", "transaction-amount", "transaction-currency", "url", "username", "work"]
    },
    minLength: {
      control: "number"
    },
    placeholder: {
      control: "text"
    },
    placeholderDir: {
      control: "select",
      options: ["auto", "ltr", "rtl"]
    },
    spellCheck: {
      control: "select",
      options: ["", "true", "false"]
    },
    focus: {
      control: "boolean"
    }
  }
};
const TextInputTemplate = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedLuxTextbox, { ...args })
};
const Playground = {
  ...TextInputTemplate,
  args: {
    placeholder: "Enter text",
    type: INPUT_TYPES.TEXT
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Default = {
  ...TextInputTemplate,
  args: {
    placeholder: "Default text input"
  }
};
const Naam = {
  ...TextInputTemplate,
  args: {
    value: "Sjors van Amerongen",
    autoComplete: "name"
  }
};
const Voornaam = {
  ...TextInputTemplate,
  args: {
    value: "Sjors",
    autoComplete: "given-name"
  }
};
const Achternaam = {
  ...TextInputTemplate,
  args: {
    value: "van Amerongen",
    autoComplete: "family-name"
  }
};
const Voorvoegsel = {
  ...TextInputTemplate,
  args: {
    value: "van Amerongen",
    autoComplete: "name-prefix"
  }
};
const Emailadres = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.EMAIL,
    placeholder: "Vul een e-mailadres in",
    autoComplete: "email"
  }
};
const Website = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.URL,
    autoComplete: "email",
    value: "https://google.com"
  }
};
const Wachtwoord = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.PASSWORD,
    autoComplete: "current-password"
  }
};
const WachtwoordKiezen = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.PASSWORD,
    autoComplete: "new-password"
  }
};
const Organisatienaam = {
  ...TextInputTemplate,
  args: {
    autoComplete: "organization"
  }
};
const Huisnummer = {
  ...TextInputTemplate,
  args: {
    maxLength: 5,
    min: 1,
    max: 99999,
    pattern: "[0-9]+",
    type: "number",
    value: 42
  }
};
const Huisletter = {
  ...TextInputTemplate,
  args: {
    maxLength: 1,
    min: 1,
    max: 99999,
    type: "number",
    pattern: "[A-Za-z]+",
    value: "Q"
  }
};
const DatumSelecteren = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.DATE,
    placeholder: "Selecteer datum"
  }
};
const MaandSelecteren = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.MONTH,
    placeholder: "Selecteer maand"
  }
};
const TijdSelecteren = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.TIME,
    placeholder: "Selecteer tijd"
  }
};
const WeekSelecteren = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.WEEK,
    placeholder: "Selecteer week"
  }
};
const Zoekveld = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.SEARCH,
    placeholder: "Zoeken..."
  }
};
const Telefoonnummer = {
  ...TextInputTemplate,
  args: {
    type: INPUT_TYPES.TEL,
    autoComplete: "tel",
    value: "+31 30 286 00 00"
  }
};
const Disabled = {
  ...TextInputTemplate,
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
};
const Invalid = {
  ...TextInputTemplate,
  args: {
    invalid: true,
    placeholder: "Invalid input"
  }
};
const ReadOnly = {
  ...TextInputTemplate,
  args: {
    readOnly: true,
    value: "Read-only input"
  }
};
const Required = {
  ...TextInputTemplate,
  args: {
    required: true,
    placeholder: "Required field"
  }
};
const FocusVisible = {
  ...TextInputTemplate,
  args: {
    focus: true,
    placeholder: "Focused input"
  }
};
const RTL = {
  ...TextInputTemplate,
  args: {
    dir: "rtl",
    placeholderDir: "rtl"
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    placeholder: 'Enter text',\n    type: INPUT_TYPES.TEXT\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    placeholder: 'Default text input'\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Naam.parameters = {
  ...Naam.parameters,
  docs: {
    ...(_g = Naam.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    value: 'Sjors van Amerongen',\n    autoComplete: 'name'\n  }\n}",
      ...(_i = (_h = Naam.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Voornaam.parameters = {
  ...Voornaam.parameters,
  docs: {
    ...(_j = Voornaam.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    value: 'Sjors',\n    autoComplete: 'given-name'\n  }\n}",
      ...(_l = (_k = Voornaam.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Achternaam.parameters = {
  ...Achternaam.parameters,
  docs: {
    ...(_m = Achternaam.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    value: 'van Amerongen',\n    autoComplete: 'family-name'\n  }\n}",
      ...(_o = (_n = Achternaam.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Voorvoegsel.parameters = {
  ...Voorvoegsel.parameters,
  docs: {
    ...(_p = Voorvoegsel.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    value: 'van Amerongen',\n    autoComplete: 'name-prefix'\n  }\n}",
      ...(_r = (_q = Voorvoegsel.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Emailadres.parameters = {
  ...Emailadres.parameters,
  docs: {
    ...(_s = Emailadres.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.EMAIL,\n    placeholder: 'Vul een e-mailadres in',\n    autoComplete: 'email'\n  }\n}",
      ...(_u = (_t = Emailadres.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Website.parameters = {
  ...Website.parameters,
  docs: {
    ...(_v = Website.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.URL,\n    autoComplete: 'email',\n    value: 'https://google.com'\n  }\n}",
      ...(_x = (_w = Website.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Wachtwoord.parameters = {
  ...Wachtwoord.parameters,
  docs: {
    ...(_y = Wachtwoord.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.PASSWORD,\n    autoComplete: 'current-password'\n  }\n}",
      ...(_A = (_z = Wachtwoord.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
WachtwoordKiezen.parameters = {
  ...WachtwoordKiezen.parameters,
  docs: {
    ...(_B = WachtwoordKiezen.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.PASSWORD,\n    autoComplete: 'new-password'\n  }\n}",
      ...(_D = (_C = WachtwoordKiezen.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
Organisatienaam.parameters = {
  ...Organisatienaam.parameters,
  docs: {
    ...(_E = Organisatienaam.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    autoComplete: 'organization'\n  }\n}",
      ...(_G = (_F = Organisatienaam.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
Huisnummer.parameters = {
  ...Huisnummer.parameters,
  docs: {
    ...(_H = Huisnummer.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    maxLength: 5,\n    min: 1,\n    max: 99999,\n    pattern: '[0-9]+',\n    type: 'number',\n    value: 42\n  }\n}",
      ...(_J = (_I = Huisnummer.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
Huisletter.parameters = {
  ...Huisletter.parameters,
  docs: {
    ...(_K = Huisletter.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    maxLength: 1,\n    min: 1,\n    max: 99999,\n    type: 'number',\n    pattern: '[A-Za-z]+',\n    value: 'Q'\n  }\n}",
      ...(_M = (_L = Huisletter.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
DatumSelecteren.parameters = {
  ...DatumSelecteren.parameters,
  docs: {
    ...(_N = DatumSelecteren.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.DATE,\n    placeholder: 'Selecteer datum'\n  }\n}",
      ...(_P = (_O = DatumSelecteren.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
MaandSelecteren.parameters = {
  ...MaandSelecteren.parameters,
  docs: {
    ...(_Q = MaandSelecteren.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.MONTH,\n    placeholder: 'Selecteer maand'\n  }\n}",
      ...(_S = (_R = MaandSelecteren.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
TijdSelecteren.parameters = {
  ...TijdSelecteren.parameters,
  docs: {
    ...(_T = TijdSelecteren.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.TIME,\n    placeholder: 'Selecteer tijd'\n  }\n}",
      ...(_V = (_U = TijdSelecteren.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
WeekSelecteren.parameters = {
  ...WeekSelecteren.parameters,
  docs: {
    ...(_W = WeekSelecteren.parameters) == null ? void 0 : _W.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.WEEK,\n    placeholder: 'Selecteer week'\n  }\n}",
      ...(_Y = (_X = WeekSelecteren.parameters) == null ? void 0 : _X.docs) == null ? void 0 : _Y.source
    }
  }
};
Zoekveld.parameters = {
  ...Zoekveld.parameters,
  docs: {
    ...(_Z = Zoekveld.parameters) == null ? void 0 : _Z.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.SEARCH,\n    placeholder: 'Zoeken...'\n  }\n}",
      ...(_$ = (__ = Zoekveld.parameters) == null ? void 0 : __.docs) == null ? void 0 : _$.source
    }
  }
};
Telefoonnummer.parameters = {
  ...Telefoonnummer.parameters,
  docs: {
    ...(_aa = Telefoonnummer.parameters) == null ? void 0 : _aa.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    type: INPUT_TYPES.TEL,\n    autoComplete: 'tel',\n    value: '+31 30 286 00 00'\n  }\n}",
      ...(_ca = (_ba = Telefoonnummer.parameters) == null ? void 0 : _ba.docs) == null ? void 0 : _ca.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_da = Disabled.parameters) == null ? void 0 : _da.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    disabled: true,\n    placeholder: 'Disabled input'\n  }\n}",
      ...(_fa = (_ea = Disabled.parameters) == null ? void 0 : _ea.docs) == null ? void 0 : _fa.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_ga = Invalid.parameters) == null ? void 0 : _ga.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    invalid: true,\n    placeholder: 'Invalid input'\n  }\n}",
      ...(_ia = (_ha = Invalid.parameters) == null ? void 0 : _ha.docs) == null ? void 0 : _ia.source
    }
  }
};
ReadOnly.parameters = {
  ...ReadOnly.parameters,
  docs: {
    ...(_ja = ReadOnly.parameters) == null ? void 0 : _ja.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    readOnly: true,\n    value: 'Read-only input'\n  }\n}",
      ...(_la = (_ka = ReadOnly.parameters) == null ? void 0 : _ka.docs) == null ? void 0 : _la.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_ma = Required.parameters) == null ? void 0 : _ma.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    required: true,\n    placeholder: 'Required field'\n  }\n}",
      ...(_oa = (_na = Required.parameters) == null ? void 0 : _na.docs) == null ? void 0 : _oa.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_pa = FocusVisible.parameters) == null ? void 0 : _pa.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    focus: true,\n    placeholder: 'Focused input'\n  }\n}",
      ...(_ra = (_qa = FocusVisible.parameters) == null ? void 0 : _qa.docs) == null ? void 0 : _ra.source
    }
  }
};
RTL.parameters = {
  ...RTL.parameters,
  docs: {
    ...(_sa = RTL.parameters) == null ? void 0 : _sa.docs,
    source: {
      originalSource: "{\n  ...TextInputTemplate,\n  args: {\n    dir: 'rtl',\n    placeholderDir: 'rtl'\n  }\n}",
      ...(_ua = (_ta = RTL.parameters) == null ? void 0 : _ta.docs) == null ? void 0 : _ua.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Naam", "Voornaam", "Achternaam", "Voorvoegsel", "Emailadres", "Website", "Wachtwoord", "WachtwoordKiezen", "Organisatienaam", "Huisnummer", "Huisletter", "DatumSelecteren", "MaandSelecteren", "TijdSelecteren", "WeekSelecteren", "Zoekveld", "Telefoonnummer", "Disabled", "Invalid", "ReadOnly", "Required", "FocusVisible", "RTL"];
const TextboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Achternaam,
  DatumSelecteren,
  Default,
  Disabled,
  Emailadres,
  FocusVisible,
  Huisletter,
  Huisnummer,
  Invalid,
  MaandSelecteren,
  Naam,
  Organisatienaam,
  Playground,
  RTL,
  ReadOnly,
  Required,
  Telefoonnummer,
  TijdSelecteren,
  Voornaam,
  Voorvoegsel,
  Wachtwoord,
  WachtwoordKiezen,
  Website,
  WeekSelecteren,
  Zoekveld,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Playground as P,
  TextboxStories as T,
  meta as m
};
