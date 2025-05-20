var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { p as LuxFormFieldRadioGroup } from "./index-B0rW5TGL.js";
import { B as BADGES } from "./preview-Dnis8LZl.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const options = [
  { value: "1", label: "Radio Option 1" },
  { value: "2", label: "Radio Option 2" },
  { value: "3", label: "Radio Option 3" }
];
const VisualStates = ({ mode }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldRadioGroup, { name: `radiogroup-default-${mode}`, label: "Radio Group", options }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormFieldRadioGroup,
    {
      name: `radiogroup-descriptions-${mode}`,
      label: "Radio Group",
      description: "Description",
      options: options.map(
        (option) => Object.assign({}, { ...option }, { description: `Option Description ${option.value}` })
      )
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-hover-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldRadioGroup, { name: `radiogroup-hover-${mode}`, label: "Radio Group Hover", options }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-focus-all pseudo-focus-visible-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldRadioGroup, { name: `radiogroup-hover-${mode}`, label: "Radio Group Focus", options }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormFieldRadioGroup,
    {
      name: `radiogroup-checked-${mode}`,
      label: "Radio Group Checked",
      options: options.map((option) => Object.assign({}, { ...option }, { checked: option.value === "2" }))
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormFieldRadioGroup,
    {
      name: `radiogroup-disabled-${mode}`,
      label: "Radio Group Disabled",
      options: options.map((option) => Object.assign({}, { ...option }, { disabled: option.value === "2" }))
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormFieldRadioGroup,
    {
      name: `radiogroup-invalid-${mode}`,
      label: "Radio Group Invalid",
      errorMessage: "Error Message",
      invalid: true,
      options
    }
  )
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates", "props": { "mode": { "required": true, "tsType": { "name": "union", "raw": "'light' | 'dark'", "elements": [{ "name": "literal", "value": "'light'" }, { "name": "literal", "value": "'dark'" }] }, "description": "" } } };
const meta = {
  title: "React Components/Form Field/Form Field Radio Group",
  component: LuxFormFieldRadioGroup,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST]
  },
  args: {
    name: "contact-default",
    label: "Voorkeur contactmethode",
    errorMessage: "Selecteer een contactmethode.",
    options: [{
      value: "email",
      label: "E-mail",
      description: "Gebruik het e-mailadres dat bij ons bekend is."
    }, {
      value: "phone",
      label: "Telefoon",
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Gebruik een ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "geldig" }),
        " telefoonnummer."
      ] })
    }, {
      value: "mail",
      label: "Post"
    }]
  },
  argTypes: {
    label: {
      description: "Label for the radio group",
      control: "text",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    description: {
      description: "Help text for the radio group",
      control: "text",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    errorMessage: {
      description: "Error message to display when invalid",
      control: "text",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    name: {
      description: "Name attribute for the radio group (used for form submission and ID generation)",
      control: "text",
      table: {
        type: {
          summary: "string"
        },
        category: "HTML attribute"
      }
    },
    options: {
      description: "Array of radio options with value and label properties",
      control: "object",
      table: {
        type: {
          summary: "Array<{ value: string; label: string; description?: React.ReactNode; disabled?: boolean; }>"
        }
      }
    },
    invalid: {
      description: "Invalid state indicator",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        }
      }
    },
    required: {
      description: "Required field indicator",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        },
        category: "HTML attribute"
      }
    },
    value: {
      description: "Currently selected value (only needed for controlled components)",
      control: "text",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};
const Playground = {
  args: {
    ...meta.args,
    name: "contact-playground"
  },
  parameters: {
    docs: {
      description: {
        story: "Interactieve demo van de RadioGroup component. De radio buttons krijgen automatisch unieke IDs gebaseerd op de name en value combinatie."
      },
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Default = {
  args: {
    ...meta.args,
    name: "contact-default",
    description: "Selecteer uw voorkeurswijze voor contact."
  },
  parameters: {
    docs: {
      description: {
        story: "Standaard weergave van een radio group met meerdere opties en een beschrijving."
      }
    }
  }
};
const Required = {
  args: {
    ...meta.args,
    name: "contact-required",
    required: true,
    description: "Dit is een verplicht veld."
  },
  parameters: {
    docs: {
      description: {
        story: "Verplicht veld met een asterisk indicator."
      }
    }
  }
};
const Invalid = {
  args: {
    ...meta.args,
    name: "contact-invalid",
    invalid: true,
    description: "Kies hoe u gecontacteerd wilt worden."
  },
  parameters: {
    docs: {
      description: {
        story: "Radio group in foutmelding status met foutbericht."
      }
    }
  }
};
const WithDisabledOption = {
  args: {
    ...meta.args,
    name: "contact-disabled",
    description: "Telefonisch contact is momenteel niet beschikbaar.",
    options: [{
      value: "email",
      label: "E-mail"
    }, {
      value: "phone",
      label: "Telefoon",
      disabled: true
    }, {
      value: "mail",
      label: "Post"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Radio group met een uitgeschakelde optie."
      }
    }
  }
};
const WithLongLabels = {
  args: {
    ...meta.args,
    name: "contact-long-labels",
    description: "Kies een contactmethode op basis van de gewenste reactietijd.",
    options: [{
      value: "email",
      label: "Contact via e-mail (standaard reactietijd: 1 werkdag)"
    }, {
      value: "phone",
      label: "Contact via telefoon (standaard reactietijd: direct)"
    }, {
      value: "mail",
      label: "Contact via post (standaard reactietijd: 3-5 werkdagen)"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Radio group met langere, beschrijvende labels."
      }
    }
  }
};
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "utrecht-document", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, { mode: "light" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, { mode: "dark" }) })
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
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-playground'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Interactieve demo van de RadioGroup component. De radio buttons krijgen automatisch unieke IDs gebaseerd op de name en value combinatie.'\n      },\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-default',\n    description: 'Selecteer uw voorkeurswijze voor contact.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Standaard weergave van een radio group met meerdere opties en een beschrijving.'\n      }\n    }\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_g = Required.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-required',\n    required: true,\n    description: 'Dit is een verplicht veld.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Verplicht veld met een asterisk indicator.'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Required.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_j = Invalid.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-invalid',\n    invalid: true,\n    description: 'Kies hoe u gecontacteerd wilt worden.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Radio group in foutmelding status met foutbericht.'\n      }\n    }\n  }\n}",
      ...(_l = (_k = Invalid.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithDisabledOption.parameters = {
  ...WithDisabledOption.parameters,
  docs: {
    ...(_m = WithDisabledOption.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-disabled',\n    description: 'Telefonisch contact is momenteel niet beschikbaar.',\n    options: [{\n      value: 'email',\n      label: 'E-mail'\n    }, {\n      value: 'phone',\n      label: 'Telefoon',\n      disabled: true\n    }, {\n      value: 'mail',\n      label: 'Post'\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Radio group met een uitgeschakelde optie.'\n      }\n    }\n  }\n}",
      ...(_o = (_n = WithDisabledOption.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
WithLongLabels.parameters = {
  ...WithLongLabels.parameters,
  docs: {
    ...(_p = WithLongLabels.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    ...meta.args,\n    name: 'contact-long-labels',\n    description: 'Kies een contactmethode op basis van de gewenste reactietijd.',\n    options: [{\n      value: 'email',\n      label: 'Contact via e-mail (standaard reactietijd: 1 werkdag)'\n    }, {\n      value: 'phone',\n      label: 'Contact via telefoon (standaard reactietijd: direct)'\n    }, {\n      value: 'mail',\n      label: 'Contact via post (standaard reactietijd: 3-5 werkdagen)'\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Radio group met langere, beschrijvende labels.'\n      }\n    }\n  }\n}",
      ...(_r = (_q = WithLongLabels.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_s = Visual.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <div className="utrecht-document">\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates mode="light" />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates mode="dark" />\n    </VisualRegressionWrapper>\n  </div>)',
      ...(_u = (_t = Visual.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Required", "Invalid", "WithDisabledOption", "WithLongLabels", "Visual"];
const RadioGroupStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Default,
  Invalid,
  Playground,
  Required,
  Visual,
  WithDisabledOption,
  WithLongLabels,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Default as D,
  Invalid as I,
  Playground as P,
  RadioGroupStories as R,
  WithDisabledOption as W,
  Required as a,
  WithLongLabels as b
};
