var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { s as LuxFormField, n as LuxFormFieldLabel, l as LuxFormFieldDescription, i as LuxParagraph, m as LuxFormFieldErrorMessage, c as LuxTextbox } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-CPpl9nLY.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const FormFieldType = ({
  type = "text",
  invalid = false,
  show = { description: true, extra: false }
}) => {
  const Input = ({ type: type2 }) => {
    switch (type2) {
      case "checkbox":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: type2,
            defaultChecked: true,
            style: { appearance: "none", width: "1rem", height: "1rem", border: "1px dotted grey" }
          }
        );
      case "radio":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: type2,
            defaultChecked: true,
            style: {
              appearance: "none",
              width: "1rem",
              height: "1rem",
              border: "1px dotted grey",
              borderRadius: "50%"
            }
          }
        );
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: type2,
            defaultValue: `Input type=${type2}`,
            style: {
              appearance: "none",
              border: "1px dotted grey",
              backgroundColor: "transparent",
              color: "var(--utrecht-document-color)"
            }
          }
        );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormField,
    {
      type,
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel, { type, children: `Label` }),
      description: show.description ? /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: `Description` }) }) : null,
      errorMessage: invalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldErrorMessage, { children: `Error Message` }) : null,
      input: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type }),
      invalid,
      children: show.extra ? /* @__PURE__ */ jsxRuntimeExports.jsx(LuxParagraph, { children: `Extra content` }) : null
    }
  );
};
FormFieldType.__docgenInfo = { "description": "", "methods": [], "displayName": "FormFieldType", "props": { "type": { "required": false, "tsType": { "name": "union", "raw": "'text' | 'checkbox' | 'radio'", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "literal", "value": "'checkbox'" }, { "name": "literal", "value": "'radio'" }] }, "description": "", "defaultValue": { "value": "'text'", "computed": false } }, "invalid": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "show": { "required": false, "tsType": { "name": "signature", "type": "object", "raw": "{\n  description?: boolean;\n  extra?: boolean;\n}", "signature": { "properties": [{ "key": "description", "value": { "name": "boolean", "required": false } }, { "key": "extra", "value": { "name": "boolean", "required": false } }] } }, "description": "", "defaultValue": { "value": "{ description: true, extra: false }", "computed": false } } } };
const meta = {
  title: "React Components/Form Field",
  id: "react-components-form-field",
  component: LuxFormField,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
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
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxParagraph, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
    " Dit is alleen een test voor het FormField, de verschillende inputs hebben hun eigen tests."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", invalid: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: checkbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", invalid: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: radio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", invalid: true })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "text", invalid: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: checkbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "checkbox", invalid: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Type: radio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", show: {
      description: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", show: {
      extra: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldType, { type: "radio", invalid: true })
  ] })
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
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_m = DesignTokens.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_o = (_n = DesignTokens.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_p = Visual.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <LuxParagraph>\n      <strong>Note:</strong> Dit is alleen een test voor het FormField, de verschillende inputs hebben hun eigen tests.\n    </LuxParagraph>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <h5 className="utrecht-heading-4">Type: text</h5>\n      <FormFieldType type="text" />\n      <FormFieldType type="text" show={{\n      description: false\n    }} />\n      <FormFieldType type="text" show={{\n      extra: true\n    }} />\n      <FormFieldType type="text" invalid />\n      <h5 className="utrecht-heading-4">Type: checkbox</h5>\n      <FormFieldType type="checkbox" />\n      <FormFieldType type="checkbox" show={{\n      description: false\n    }} />\n      <FormFieldType type="checkbox" show={{\n      extra: true\n    }} />\n      <FormFieldType type="checkbox" invalid />\n      <h5 className="utrecht-heading-4">Type: radio</h5>\n      <FormFieldType type="radio" />\n      <FormFieldType type="radio" show={{\n      description: false\n    }} />\n      <FormFieldType type="radio" show={{\n      extra: true\n    }} />\n      <FormFieldType type="radio" invalid />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <h5 className="utrecht-heading-4">Type: text</h5>\n      <FormFieldType type="text" />\n      <FormFieldType type="text" show={{\n      description: false\n    }} />\n      <FormFieldType type="text" show={{\n      extra: true\n    }} />\n      <FormFieldType type="text" invalid />\n      <h5 className="utrecht-heading-4">Type: checkbox</h5>\n      <FormFieldType type="checkbox" />\n      <FormFieldType type="checkbox" show={{\n      description: false\n    }} />\n      <FormFieldType type="checkbox" show={{\n      extra: true\n    }} />\n      <FormFieldType type="checkbox" invalid />\n      <h5 className="utrecht-heading-4">Type: radio</h5>\n      <FormFieldType type="radio" />\n      <FormFieldType type="radio" show={{\n      description: false\n    }} />\n      <FormFieldType type="radio" show={{\n      extra: true\n    }} />\n      <FormFieldType type="radio" invalid />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_r = (_q = Visual.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Playground", "FormFieldTextbox", "FormFieldDescription", "FormFieldError", "DesignTokens", "Visual"];
const FormFieldStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  FormFieldDescription,
  FormFieldError,
  FormFieldTextbox,
  Playground,
  Visual,
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
