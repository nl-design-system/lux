var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { c as LuxButton } from "./index-ml7fJKiD.js";
import { t as tokens } from "./index-oIKpS5lp.js";
const { useArgs } = __STORYBOOK_MODULE_PREVIEW_API__;
const meta = {
  title: "React Components/Button",
  id: "react-components-button",
  component: LuxButton,
  subcomponents: {},
  parameters: {
    tokens,
    tokensPrefix: "utrecht-button"
  },
  argTypes: {
    appearance: {
      description: "Appearance modifier",
      control: "select",
      options: [void 0, "primary-action-button", "secondary-action-button", "subtle-button"]
    },
    size: {
      description: "Size modifier",
      control: "select",
      options: [void 0, "small"]
    },
    iconPosition: {
      description: "Icon Position modifier",
      control: "select",
      options: [void 0, "start", "end"]
    },
    busy: {
      description: "Busy indicator",
      control: "boolean"
    },
    pressed: {
      description: "Pressed indicator",
      control: "boolean"
    },
    icon: {
      description: "Icon Node",
      control: "object",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    },
    label: {
      description: "Label Node",
      control: "object",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    }
  }
};
const ExampleIcon = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { height: "16", width: "16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "6", cx: "7", cy: "7", fill: "white", stroke: "green" }) });
const ButtonTemplate = {
  args: {
    appearance: "primary-action-button",
    size: void 0,
    iconPosition: void 0,
    icon: void 0,
    pressed: false,
    busy: false,
    label: "Klik hier!"
  },
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { ...args, children: args["children"] })
};
const AllButtonVariantsTemplate = {
  ...ButtonTemplate,
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { ...args, appearance: "primary-action-button", children: args["children"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { ...args, appearance: "secondary-action-button", children: args["children"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { ...args, appearance: "subtle-button", children: args["children"] })
  ] }),
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lsb-story-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Playground = {
  ...ButtonTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const SmallButton = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    size: "small"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Primary = {
  name: "Primary",
  args: {
    appearance: "primary-action-button",
    children: "Primary Button"
  },
  parameters: {
    docs: {
      description: {
        story: 'De Primary styling zet je met `appearance="primary-action-button"`'
      }
    }
  }
};
const Secondary = {
  name: "Secondary",
  args: {
    appearance: "secondary-action-button",
    children: "Secondary Button"
  },
  parameters: {
    docs: {
      description: {
        story: 'De Secondary styling zet je met `appearance="secondary-action-button"`'
      }
    }
  }
};
const Tertiary = {
  name: "Tertiary",
  args: {
    appearance: "subtle-button",
    children: "Tertiary Button"
  },
  parameters: {
    docs: {
      description: {
        story: 'De Tertiary styling zet je met `appearance="subtle-button"`'
      }
    }
  }
};
const Active = {
  ...AllButtonVariantsTemplate,
  name: "Active",
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    children: "Active Button"
  }
};
const Hover = {
  ...AllButtonVariantsTemplate,
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    children: "Hover Button"
  }
};
const Focus = {
  ...AllButtonVariantsTemplate,
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  },
  args: {
    children: "Focus Button"
  }
};
const Disabled = {
  ...AllButtonVariantsTemplate,
  name: "Disabled",
  args: {
    children: "Disabled Button",
    disabled: true
  }
};
const Busy = {
  ...AllButtonVariantsTemplate,
  name: "Busy",
  args: {
    children: "Busy Button",
    busy: true
  },
  parameters: {
    docs: {
      description: {
        story: "Een busy button zet je met het `busy`-attribute (`true`/`false`, default: `undefined`). Toont een `wait` cursor en `aria-busy`-attribute."
      }
    }
  }
};
const Toggle = {
  ...ButtonTemplate,
  name: "Toggle",
  args: {
    appearance: "primary-action-button",
    pressed: true
  },
  render: (args) => {
    const [{
      pressed
    }, updateArgs] = useArgs();
    const onPress = () => {
      updateArgs({
        pressed: !pressed
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { ...args, onClick: onPress, children: [
      "Toggle Button ",
      args.pressed ? "pressed" : "not pressed"
    ] });
  },
  parameters: {
    docs: {
      description: {
        story: 'Een pressed button zet je met het `pressed`-attribute (`true`/`false`/`"mixed"`, default: `undefined`). Zet `aria-pressed`-attribute.'
      }
    }
  }
};
const ButtonWithIconAtPositionStart = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    icon: ExampleIcon,
    iconPosition: "start"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const ButtonWithIconAtPositionEnd = {
  ...ButtonTemplate,
  args: {
    ...ButtonTemplate.args,
    icon: ExampleIcon,
    iconPosition: "end"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SmallButton.parameters = {
  ...SmallButton.parameters,
  docs: {
    ...(_d = SmallButton.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  args: {\n    ...ButtonTemplate.args,\n    size: 'small'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_f = (_e = SmallButton.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_g = Primary.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Primary',\n  args: {\n    appearance: 'primary-action-button',\n    children: 'Primary Button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Primary styling zet je met `appearance=\"primary-action-button\"`'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Primary.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_j = Secondary.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'Secondary',\n  args: {\n    appearance: 'secondary-action-button',\n    children: 'Secondary Button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Secondary styling zet je met `appearance=\"secondary-action-button\"`'\n      }\n    }\n  }\n}",
      ...(_l = (_k = Secondary.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Tertiary.parameters = {
  ...Tertiary.parameters,
  docs: {
    ...(_m = Tertiary.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  name: 'Tertiary',\n  args: {\n    appearance: 'subtle-button',\n    children: 'Tertiary Button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Tertiary styling zet je met `appearance=\"subtle-button\"`'\n      }\n    }\n  }\n}",
      ...(_o = (_n = Tertiary.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_p = Active.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Active',\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  },\n  args: {\n    children: 'Active Button'\n  }\n}",
      ...(_r = (_q = Active.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_s = Hover.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  },\n  args: {\n    children: 'Hover Button'\n  }\n}",
      ...(_u = (_t = Hover.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_v = Focus.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  },\n  args: {\n    children: 'Focus Button'\n  }\n}",
      ...(_x = (_w = Focus.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_y = Disabled.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Disabled',\n  args: {\n    children: 'Disabled Button',\n    disabled: true\n  }\n}",
      ...(_A = (_z = Disabled.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Busy.parameters = {
  ...Busy.parameters,
  docs: {
    ...(_B = Busy.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Busy',\n  args: {\n    children: 'Busy Button',\n    busy: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een busy button zet je met het `busy`-attribute (`true`/`false`, default: `undefined`). Toont een `wait` cursor en `aria-busy`-attribute.'\n      }\n    }\n  }\n}",
      ...(_D = (_C = Busy.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
Toggle.parameters = {
  ...Toggle.parameters,
  docs: {
    ...(_E = Toggle.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Toggle',\n  args: {\n    appearance: 'primary-action-button',\n    pressed: true\n  },\n  render: (args: any) => {\n    const [{\n      pressed\n    }, updateArgs] = useArgs();\n    const onPress = () => {\n      updateArgs({\n        pressed: !pressed\n      });\n    };\n    return <LuxButton {...args} onClick={onPress}>\n        Toggle Button {args.pressed ? 'pressed' : 'not pressed'}\n      </LuxButton>;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een pressed button zet je met het `pressed`-attribute (`true`/`false`/`\"mixed\"`, default: `undefined`). Zet `aria-pressed`-attribute.'\n      }\n    }\n  }\n}",
      ...(_G = (_F = Toggle.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
ButtonWithIconAtPositionStart.parameters = {
  ...ButtonWithIconAtPositionStart.parameters,
  docs: {
    ...(_H = ButtonWithIconAtPositionStart.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  args: {\n    ...ButtonTemplate.args,\n    icon: ExampleIcon,\n    iconPosition: 'start'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_J = (_I = ButtonWithIconAtPositionStart.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
ButtonWithIconAtPositionEnd.parameters = {
  ...ButtonWithIconAtPositionEnd.parameters,
  docs: {
    ...(_K = ButtonWithIconAtPositionEnd.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  args: {\n    ...ButtonTemplate.args,\n    icon: ExampleIcon,\n    iconPosition: 'end'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_M = (_L = ButtonWithIconAtPositionEnd.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
const __namedExportsOrder = ["Playground", "SmallButton", "Primary", "Secondary", "Tertiary", "Active", "Hover", "Focus", "Disabled", "Busy", "Toggle", "ButtonWithIconAtPositionStart", "ButtonWithIconAtPositionEnd"];
const ButtonStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  Busy,
  ButtonWithIconAtPositionEnd,
  ButtonWithIconAtPositionStart,
  Disabled,
  Focus,
  Hover,
  Playground,
  Primary,
  Secondary,
  SmallButton,
  Tertiary,
  Toggle,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Active as A,
  ButtonStories as B,
  Disabled as D,
  Focus as F,
  Hover as H,
  Playground as P,
  SmallButton as S,
  Tertiary as T,
  Primary as a,
  Secondary as b,
  Busy as c,
  Toggle as d,
  ButtonWithIconAtPositionStart as e,
  ButtonWithIconAtPositionEnd as f
};
