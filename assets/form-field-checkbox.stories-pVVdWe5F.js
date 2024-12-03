var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { d as LuxFormFieldCheckbox } from "./index-6FDpSq6u.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-B5f71FOk.js";
import { m as meta$1 } from "./checkbox.stories-CkSjx0c7.js";
import { m as meta$2 } from "./form-field-description.stories-D4K5d32N.js";
import { m as meta$3 } from "./form-field-error-message.stories-DI-IINOw.js";
const meta = {
  title: "React Components/Form Field/Form Field Checkbox",
  id: "react-components-form-field-form-field-checkbox",
  component: LuxFormFieldCheckbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
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
      originalSource: "{\n  name: 'With Target',\n  args: {\n    ...Playground.args,\n    withTarget: true\n  }\n}",
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
const __namedExportsOrder = ["Playground", "Invalid", "Disabled", "WithDescription", "WithTarget", "withLongTexts"];
const FormFieldCheckboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Disabled,
  Invalid,
  Playground,
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
