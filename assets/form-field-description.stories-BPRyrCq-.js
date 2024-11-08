var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { d as LuxFormFieldDescription } from "./index-25q23o6t.js";
import { t as tokens } from "./index-oIKpS5lp.js";
import { B as BADGES } from "./preview-f4P1nbj-.js";
const meta = {
  title: "React Components/Form Field/Form Field Description",
  id: "react-components-form-field-description",
  component: LuxFormFieldDescription,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: "react-form-field-description",
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
LongDescription.parameters = {
  ...LongDescription.parameters,
  docs: {
    ...(_m = LongDescription.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'This is a longer description that provides more detailed information about what is expected in this form field. It can span multiple lines if needed.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Example of a longer description text.'\n      }\n    }\n  }\n}",
      ...(_o = (_n = LongDescription.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Valid", "Invalid", "LongDescription"];
const FormFieldDescriptionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Default,
  Invalid,
  LongDescription,
  Playground,
  Valid,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Default as D,
  FormFieldDescriptionStories as F,
  Invalid as I,
  LongDescription as L,
  Playground as P,
  Valid as V,
  meta as m
};
