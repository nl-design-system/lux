var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { n as LuxFormFieldLabel$1 } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-DVTMf5eV.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { children: "Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { type: "checkbox", children: "Checkbox Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { type: "radio", children: "Radio Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { checked: true, children: "Checked Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { disabled: true, children: "Disabled Label" })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const LuxFormFieldLabel = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel$1, { ...props });
const meta = {
  title: "React Components/Form Field/Form Field Label",
  id: "react-components-form-field-label",
  component: LuxFormFieldLabel,
  subcomponents: {},
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-label"
  },
  argTypes: {
    children: {
      name: "content",
      description: "React text",
      control: "text",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    },
    type: {
      control: "select",
      options: [void 0, "checkbox", "radio"]
    },
    disabled: {
      control: "boolean"
    },
    checked: {
      control: "boolean"
    }
  }
};
const FormFieldLabelTemplate = {
  render: ({
    children,
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldLabel, { ...args, children })
};
const textTemplate = (name = "Form Label") => `${name}`;
const Playground = {
  ...FormFieldLabelTemplate,
  name: "Playground",
  args: {
    children: textTemplate()
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Default = {
  ...FormFieldLabelTemplate,
  name: "Default Form Label",
  args: {
    children: textTemplate("Default Form Label")
  }
};
const CheckboxLabel = {
  ...FormFieldLabelTemplate,
  name: "Checkbox Label",
  args: {
    children: textTemplate("Checkbox Label"),
    type: "checkbox"
  }
};
const RadioLabel = {
  ...FormFieldLabelTemplate,
  name: "Radio Label",
  args: {
    children: textTemplate("Radio Label"),
    type: "radio"
  }
};
const DisabledLabel = {
  ...FormFieldLabelTemplate,
  name: "Disabled Label",
  args: {
    children: textTemplate("Disabled Label"),
    disabled: true
  }
};
const CheckedLabel = {
  ...FormFieldLabelTemplate,
  name: "Checked Label",
  args: {
    children: textTemplate("Checked Label"),
    checked: true,
    type: "checkbox"
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "utrecht-document", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) })
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
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Playground',\n  args: {\n    children: textTemplate()\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Default Form Label',\n  args: {\n    children: textTemplate('Default Form Label')\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CheckboxLabel.parameters = {
  ...CheckboxLabel.parameters,
  docs: {
    ...(_g = CheckboxLabel.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Checkbox Label',\n  args: {\n    children: textTemplate('Checkbox Label'),\n    type: 'checkbox'\n  }\n}",
      ...(_i = (_h = CheckboxLabel.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
RadioLabel.parameters = {
  ...RadioLabel.parameters,
  docs: {
    ...(_j = RadioLabel.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Radio Label',\n  args: {\n    children: textTemplate('Radio Label'),\n    type: 'radio'\n  }\n}",
      ...(_l = (_k = RadioLabel.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
DisabledLabel.parameters = {
  ...DisabledLabel.parameters,
  docs: {
    ...(_m = DisabledLabel.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Disabled Label',\n  args: {\n    children: textTemplate('Disabled Label'),\n    disabled: true\n  }\n}",
      ...(_o = (_n = DisabledLabel.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
CheckedLabel.parameters = {
  ...CheckedLabel.parameters,
  docs: {
    ...(_p = CheckedLabel.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...FormFieldLabelTemplate,\n  name: 'Checked Label',\n  args: {\n    children: textTemplate('Checked Label'),\n    checked: true,\n    type: 'checkbox'\n  }\n}",
      ...(_r = (_q = CheckedLabel.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_s = DesignTokens.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_u = (_t = DesignTokens.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_v = Visual.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <div className="utrecht-document">\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </div>)',
      ...(_x = (_w = Visual.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "CheckboxLabel", "RadioLabel", "DisabledLabel", "CheckedLabel", "DesignTokens", "Visual"];
const FormFieldLabelStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CheckboxLabel,
  CheckedLabel,
  Default,
  DesignTokens,
  DisabledLabel,
  Playground,
  RadioLabel,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CheckboxLabel as C,
  Default as D,
  FormFieldLabelStories as F,
  Playground as P,
  RadioLabel as R,
  DisabledLabel as a,
  CheckedLabel as b
};