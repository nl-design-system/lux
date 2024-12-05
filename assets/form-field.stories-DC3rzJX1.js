var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { o as LuxFormField, n as LuxTextbox, g as LuxFormFieldLabel, e as LuxFormFieldDescription, b as LuxParagraph, f as LuxFormFieldErrorMessage } from "./index-C4izKWdF.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-B916UyCr.js";
const meta = {
  title: "React Components/Form Field",
  id: "react-components-form-field",
  component: LuxFormField,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: "react-form-field"
  },
  argTypes: {
    input: {
      control: {
        type: "select"
      },
      description: "De Input van het Form Field, bijv `<LuxTextbox />`.",
      options: ["Textbox"],
      mapping: {
        Textbox: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxTextbox, {})
      },
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    type: {
      control: "select",
      options: ["text", "checkbox", "radio"],
      description: "Het type van het Form Field.",
      table: {
        defaultValue: {
          summary: "text"
        }
      }
    },
    invalid: {
      control: "boolean",
      description: "Zet het Form Field in `invalid` status.",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    errorMessage: {
      if: {
        arg: "invalid",
        truthy: true
      }
    },
    children: {
      type: "string",
      description: "Extra content, of als properties niet gebruikt worden, de content.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    }
  }
};
const FormFieldTemplate = {
  args: {
    input: "Textbox",
    invalid: false,
    label: "Form Field Label",
    description: "Form Field Description",
    errorMessage: "Form Field Error Message"
  },
  render: ({
    ...args
  }) => {
    const {
      label,
      description,
      errorMessage,
      invalid,
      children,
      ...restArgs
    } = args;
    const labelNode = /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel, { children: label });
    const descriptionNode = /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: description }) });
    const errorMessageNode = invalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldErrorMessage, { children: errorMessage }) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormField, { label: labelNode, description: descriptionNode, errorMessage: errorMessageNode, invalid, ...restArgs, children });
  }
};
const Playground = {
  name: "Playground",
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const FormFieldTextbox = {
  name: "Form Field met Textbox",
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: "Voornaam",
    description: void 0
  }
};
const FormFieldDescription = {
  name: "Form Field met beschrijving",
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: "Achternaam",
    description: "Gebruikt u de naam van uw partner? Vul dan ook uw eigen achternaam in."
  }
};
const FormFieldError = {
  name: "Form Field met een foutmelding",
  ...FormFieldTemplate,
  args: {
    ...FormFieldTemplate.args,
    label: "Nederlandse IBAN",
    description: void 0,
    errorMessage: "Een Nederlandse IBAN begint altijd met NL",
    invalid: true
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  ...FormFieldTemplate,\n  args: {\n    ...FormFieldTemplate.args\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
FormFieldTextbox.parameters = {
  ...FormFieldTextbox.parameters,
  docs: {
    ...(_d = FormFieldTextbox.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Form Field met Textbox',\n  ...FormFieldTemplate,\n  args: {\n    ...FormFieldTemplate.args,\n    label: 'Voornaam',\n    description: undefined\n  }\n}",
      ...(_f = (_e = FormFieldTextbox.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
FormFieldDescription.parameters = {
  ...FormFieldDescription.parameters,
  docs: {
    ...(_g = FormFieldDescription.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Form Field met beschrijving',\n  ...FormFieldTemplate,\n  args: {\n    ...FormFieldTemplate.args,\n    label: 'Achternaam',\n    description: 'Gebruikt u de naam van uw partner? Vul dan ook uw eigen achternaam in.'\n  }\n}",
      ...(_i = (_h = FormFieldDescription.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
FormFieldError.parameters = {
  ...FormFieldError.parameters,
  docs: {
    ...(_j = FormFieldError.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'Form Field met een foutmelding',\n  ...FormFieldTemplate,\n  args: {\n    ...FormFieldTemplate.args,\n    label: 'Nederlandse IBAN',\n    description: undefined,\n    errorMessage: 'Een Nederlandse IBAN begint altijd met NL',\n    invalid: true\n  }\n}",
      ...(_l = (_k = FormFieldError.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Playground", "FormFieldTextbox", "FormFieldDescription", "FormFieldError"];
const FormFieldStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormFieldDescription,
  FormFieldError,
  FormFieldTextbox,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  FormFieldStories as F,
  Playground as P,
  FormFieldTextbox as a,
  FormFieldDescription as b,
  FormFieldError as c
};
