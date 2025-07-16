var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { n as LuxFormFieldDescription } from "./index-B-gkZtmO.js";
import { t as tokens } from "./index-LWoe1EYi.js";
import { B as BADGES } from "./preview-B_whIBb-.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { children: "Form Field Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { appearance: "valid", children: "Valid Form Field Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { appearance: "invalid", children: "Invalid Form Field Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { children: "Long Form Field Description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum." })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const CustomStyleBlock = () => /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
  .lux-theme--logius-custom {
    --utrecht-form-field-description-valid-color: green;
    --utrecht-form-field-description-invalid-color: red;
  }
  ` });
const meta = {
  title: "React Components/Form Field/Form Field Description",
  id: "react-components-form-field-description",
  component: LuxFormFieldDescription,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-field-description",
    docs: {
      description: {
        component: "A description component for form fields that provides additional context or validation feedback."
      }
    }
  },
  argTypes: {
    children: {
      control: "text",
      description: "The content of the description",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    appearance: {
      control: "select",
      options: [void 0, "valid", "invalid"],
      description: "Sets the appearance state of the description",
      table: {
        type: {
          summary: "'valid' | 'invalid' | undefined"
        },
        defaultValue: {
          summary: "undefined"
        }
      }
    }
  }
};
const Playground = {
  args: {
    children: "This is a form field description"
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive playground for the description component."
      }
    }
  }
};
const Default = {
  args: {
    children: "Enter your full name"
  },
  parameters: {
    docs: {
      description: {
        story: "Default description without any validation state."
      }
    }
  }
};
const Valid = {
  args: {
    children: "Your input meets the requirements",
    appearance: "valid"
  },
  parameters: {
    docs: {
      description: {
        story: "Description with valid appearance."
      }
    }
  }
};
const Invalid = {
  args: {
    children: "Please check the input requirements",
    appearance: "invalid"
  },
  parameters: {
    docs: {
      description: {
        story: "Description with invalid appearance."
      }
    }
  }
};
const CustomAppearance = {
  args: {},
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomStyleBlock, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { appearance: "valid", className: `lux-theme--logius-custom`, children: "Valid Form Field Description" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldDescription, { appearance: "invalid", className: `lux-theme--logius-custom`, children: "Invalid Form Field Description" })
  ] }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: null
      },
      description: {
        story: "Om de `valid` en `invalid` _appearance_ een styling te geven kan dit met de `...valid.color`- en `...invalid.color`-tokens."
      }
    }
  }
};
const LongDescription = {
  args: {
    children: "This is a longer description that provides more detailed information about what is expected in this form field. It can span multiple lines if needed."
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a longer description text."
      }
    }
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Custom" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(CustomStyleBlock, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light lux-theme--logius-custom`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) })
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
      originalSource: "{\n  args: {\n    children: 'This is a form field description'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Interactive playground for the description component.'\n      }\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Enter your full name'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Default description without any validation state.'\n      }\n    }\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Valid.parameters = {
  ...Valid.parameters,
  docs: {
    ...(_g = Valid.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Your input meets the requirements',\n    appearance: 'valid'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Description with valid appearance.'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Valid.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_j = Invalid.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Please check the input requirements',\n    appearance: 'invalid'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Description with invalid appearance.'\n      }\n    }\n  }\n}",
      ...(_l = (_k = Invalid.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CustomAppearance.parameters = {
  ...CustomAppearance.parameters,
  docs: {
    ...(_m = CustomAppearance.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {},\n  render: () => <>\n      <CustomStyleBlock />\n      <LuxFormFieldDescription appearance="valid" className={`lux-theme--logius-custom`}>\n        Valid Form Field Description\n      </LuxFormFieldDescription>\n      <LuxFormFieldDescription appearance="invalid" className={`lux-theme--logius-custom`}>\n        Invalid Form Field Description\n      </LuxFormFieldDescription>\n    </>,\n  parameters: {\n    controls: {\n      disable: true\n    },\n    docs: {\n      source: {\n        code: null\n      },\n      description: {\n        story: \'Om de `valid` en `invalid` _appearance_ een styling te geven kan dit met de `...valid.color`- en `...invalid.color`-tokens.\'\n      }\n    }\n  }\n}',
      ...(_o = (_n = CustomAppearance.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
LongDescription.parameters = {
  ...LongDescription.parameters,
  docs: {
    ...(_p = LongDescription.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'This is a longer description that provides more detailed information about what is expected in this form field. It can span multiple lines if needed.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Example of a longer description text.'\n      }\n    }\n  }\n}",
      ...(_r = (_q = LongDescription.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
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
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Custom</h4>\n    <CustomStyleBlock />\n    <VisualRegressionWrapper className={`lux-theme--logius-light lux-theme--logius-custom`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_x = (_w = Visual.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Valid", "Invalid", "CustomAppearance", "LongDescription", "DesignTokens", "Visual"];
const FormFieldDescriptionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomAppearance,
  Default,
  DesignTokens,
  Invalid,
  LongDescription,
  Playground,
  Valid,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CustomAppearance as C,
  Default as D,
  FormFieldDescriptionStories as F,
  Invalid as I,
  LongDescription as L,
  Playground as P,
  Valid as V,
  meta as m
};
