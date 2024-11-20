var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { g as LuxFormFieldRadioGroup } from "./index-CzQ0HYjX.js";
import { B as BADGES } from "./preview-BnlQDbg8.js";
const meta = {
  title: "React Components/Form Field/Form Field Radio Group",
  component: LuxFormFieldRadioGroup,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY]
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
const __namedExportsOrder = ["Playground", "Default", "Required", "Invalid", "WithDisabledOption", "WithLongLabels"];
const RadioGroupStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Default,
  Invalid,
  Playground,
  Required,
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
