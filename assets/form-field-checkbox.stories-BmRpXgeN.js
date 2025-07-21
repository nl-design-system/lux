var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { o as LuxFormFieldCheckbox } from "./index-hH2M1eF1.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-l_S4jwZL.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
import { m as meta$1 } from "./checkbox.stories-DdbvM57p.js";
import { m as meta$2 } from "./form-field-description.stories-Bh0YGAPg.js";
import { m as meta$3 } from "./form-field-error-message.stories-TX4Alwyi.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", checked: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", description: "Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Hover & Focus" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-hover-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-focus-all pseudo-focus-visible-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Invalid" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", errorMessage: "Error Message", invalid: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", description: "Description", errorMessage: "Error Message", invalid: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Disabled" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", disabled: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", disabled: true, checked: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldCheckbox, { label: "Label", description: "Description", disabled: true })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const meta = {
  title: "React Components/Form Field/Form Field Checkbox",
  id: "react-components-form-field-form-field-checkbox",
  component: LuxFormFieldCheckbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-field-checkbox"
  },
  argTypes: {
    ...meta$1.argTypes,
    description: {
      ...meta$2.argTypes.children
    },
    appearance: {
      ...meta$2.argTypes.appearance
    },
    distanced: {
      ...meta$3.argTypes.distanced
    },
    disabled: {
      type: "boolean"
    },
    withTarget: {
      type: "boolean",
      description: "Makes the whole inner part a click target."
    },
    errorMessage: {
      if: {
        arg: "invalid",
        truthy: true
      }
    }
  }
};
const Playground = {
  name: "Playground",
  args: {
    label: "Label",
    errorMessage: "ErrorMessage",
    invalid: false,
    appearance: void 0
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Invalid = {
  name: "Invalid",
  args: {
    ...Playground.args,
    invalid: true
  }
};
const Disabled = {
  name: "Disabled",
  args: {
    ...Playground.args,
    disabled: true
  }
};
const WithDescription = {
  name: "With Description",
  args: {
    ...Playground.args,
    description: "Description"
  }
};
const WithTarget = {
  name: "With Target",
  args: {
    ...Playground.args,
    withTarget: true
  },
  parameters: {
    docs: {
      description: {
        story: "Met `withTarget` wordt het hele component (behalve de foutmelding) een klikdoel. _Let op:_ dit kan voor gebruikers onverwacht zijn."
      }
    }
  }
};
const withLongTexts = {
  name: "With long texts",
  args: {
    ...Playground.args,
    label: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    description: "Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient.",
    errorMessage: "Cursus nostra varius efficitur lobortis aliquam lectus bibendum",
    invalid: true,
    withTarget: true
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    label: 'Label',\n    errorMessage: 'ErrorMessage',\n    invalid: false,\n    appearance: undefined\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_d = Invalid.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Invalid',\n  args: {\n    ...Playground.args,\n    invalid: true\n  }\n}",
      ...(_f = (_e = Invalid.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_g = Disabled.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Disabled',\n  args: {\n    ...Playground.args,\n    disabled: true\n  }\n}",
      ...(_i = (_h = Disabled.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithDescription.parameters = {
  ...WithDescription.parameters,
  docs: {
    ...(_j = WithDescription.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'With Description',\n  args: {\n    ...Playground.args,\n    description: 'Description'\n  }\n}",
      ...(_l = (_k = WithDescription.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithTarget.parameters = {
  ...WithTarget.parameters,
  docs: {
    ...(_m = WithTarget.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  name: 'With Target',\n  args: {\n    ...Playground.args,\n    withTarget: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Met `withTarget` wordt het hele component (behalve de foutmelding) een klikdoel. _Let op:_ dit kan voor gebruikers onverwacht zijn.'\n      }\n    }\n  }\n}",
      ...(_o = (_n = WithTarget.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
withLongTexts.parameters = {
  ...withLongTexts.parameters,
  docs: {
    ...(_p = withLongTexts.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  name: 'With long texts',\n  args: {\n    ...Playground.args,\n    label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',\n    description: 'Dolor ante id varius, aenean eu faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum parturient.',\n    errorMessage: 'Cursus nostra varius efficitur lobortis aliquam lectus bibendum',\n    invalid: true,\n    withTarget: true\n  }\n}",
      ...(_r = (_q = withLongTexts.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
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
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_x = (_w = Visual.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Invalid", "Disabled", "WithDescription", "WithTarget", "withLongTexts", "DesignTokens", "Visual"];
const FormFieldCheckboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Disabled,
  Invalid,
  Playground,
  Visual,
  WithDescription,
  WithTarget,
  __namedExportsOrder,
  default: meta,
  withLongTexts
}, Symbol.toStringTag, { value: "Module" }));
export {
  Disabled as D,
  FormFieldCheckboxStories as F,
  Invalid as I,
  Playground as P,
  WithDescription as W,
  WithTarget as a,
  withLongTexts as w
};
