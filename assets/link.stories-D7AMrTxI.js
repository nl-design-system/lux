var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { t as LuxLink } from "./index-x8V0uQZj.js";
import { t as tokens } from "./index-BLZ711uc.js";
const meta = {
  title: "React Components/Link",
  id: "react-components-link",
  component: LuxLink,
  parameters: {
    tokens,
    tokensPrefix: "utrecht-link"
  },
  args: {
    children: "Link",
    href: "#"
  },
  argTypes: {
    children: {
      name: "Label (children)"
    },
    external: {
      description: "External link indicator",
      control: "boolean"
    },
    placeholder: {
      description: "Shows link in placeholder/loading state",
      control: "boolean"
    },
    href: {
      description: "URL",
      control: "text"
    },
    "aria-current": {
      description: "Current page indicator",
      control: "boolean"
    },
    hrefLang: {
      description: "Language of the linked resource",
      control: "text"
    },
    icon: {
      description: "Icon Node",
      control: "boolean",
      table: {
        type: {
          summary: "HTML Content",
          detail: "Use the boolean switch to show an Icon"
        }
      }
    },
    iconPosition: {
      description: "Position of the icon relative to the text",
      control: "radio",
      options: ["start", "end"],
      table: {
        type: {
          summary: "start | end"
        },
        defaultValue: {
          summary: "start"
        }
      }
    }
  }
};
const ExampleIcon = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { height: "14", width: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "5", cx: "8", cy: "8", fill: "white", stroke: "currentColor" }) });
const LinkTemplate = {
  args: {
    external: false,
    placeholder: false,
    icon: void 0,
    iconPosition: void 0
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink, { ...args, icon: args.icon ? ExampleIcon : void 0, children: args.children })
};
const Playground = {
  ...LinkTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const Hover = {
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const Active = {
  name: "Active",
  parameters: {
    pseudo: {
      active: true
    }
  }
};
const Visisted = {
  name: "Visited",
  args: {
    className: "utrecht-link--visited"
  },
  parameters: {
    pseudo: {
      visited: true
    }
  }
};
const Focus = {
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true
    }
  }
};
const FocusVisible = {
  name: "Focus Visible",
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
};
const Placeholder = {
  name: "Placeholder",
  args: {
    placeholder: true
  },
  parameters: {
    docs: {
      description: {
        story: "Link in placeholder/loading state, useful for loading states or progressive enhancement."
      }
    }
  }
};
const External = {
  name: "External",
  args: {
    href: "https://google.com",
    external: true
  },
  parameters: {
    docs: {
      description: {
        story: "Een externe link opent in een nieuw tabblad en heeft de juiste security attributes."
      }
    }
  }
};
const LinkWithIcon = {
  name: "Link with Icon",
  args: {
    icon: ExampleIcon
  },
  parameters: {
    docs: {
      description: {
        story: "Een link kan een icoon bevatten voor extra visuele context."
      }
    }
  }
};
const LinkWithIconStart = {
  name: "Link with Icon at Start",
  args: {
    icon: ExampleIcon,
    iconPosition: "start"
  },
  parameters: {
    docs: {
      description: {
        story: "Link met icoon aan het begin."
      }
    }
  }
};
const LinkWithIconEnd = {
  name: "Link with Icon at End",
  args: {
    icon: ExampleIcon,
    iconPosition: "end"
  },
  parameters: {
    docs: {
      description: {
        story: "Link met icoon aan het einde."
      }
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...LinkTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_d = Hover.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_f = (_e = Hover.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_g = Active.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Active',\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  }\n}",
      ...(_i = (_h = Active.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Visisted.parameters = {
  ...Visisted.parameters,
  docs: {
    ...(_j = Visisted.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'Visited',\n  args: {\n    className: 'utrecht-link--visited'\n  },\n  parameters: {\n    pseudo: {\n      visited: true\n    }\n  }\n}",
      ...(_l = (_k = Visisted.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_m = Focus.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}",
      ...(_o = (_n = Focus.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_p = FocusVisible.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  name: 'Focus Visible',\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  }\n}",
      ...(_r = (_q = FocusVisible.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Placeholder.parameters = {
  ...Placeholder.parameters,
  docs: {
    ...(_s = Placeholder.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  name: 'Placeholder',\n  args: {\n    placeholder: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Link in placeholder/loading state, useful for loading states or progressive enhancement.'\n      }\n    }\n  }\n}",
      ...(_u = (_t = Placeholder.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
External.parameters = {
  ...External.parameters,
  docs: {
    ...(_v = External.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  name: 'External',\n  args: {\n    href: 'https://google.com',\n    external: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een externe link opent in een nieuw tabblad en heeft de juiste security attributes.'\n      }\n    }\n  }\n}",
      ...(_x = (_w = External.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
LinkWithIcon.parameters = {
  ...LinkWithIcon.parameters,
  docs: {
    ...(_y = LinkWithIcon.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  name: 'Link with Icon',\n  args: {\n    icon: ExampleIcon\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een link kan een icoon bevatten voor extra visuele context.'\n      }\n    }\n  }\n}",
      ...(_A = (_z = LinkWithIcon.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
LinkWithIconStart.parameters = {
  ...LinkWithIconStart.parameters,
  docs: {
    ...(_B = LinkWithIconStart.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  name: 'Link with Icon at Start',\n  args: {\n    icon: ExampleIcon,\n    iconPosition: 'start'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Link met icoon aan het begin.'\n      }\n    }\n  }\n}",
      ...(_D = (_C = LinkWithIconStart.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
LinkWithIconEnd.parameters = {
  ...LinkWithIconEnd.parameters,
  docs: {
    ...(_E = LinkWithIconEnd.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  name: 'Link with Icon at End',\n  args: {\n    icon: ExampleIcon,\n    iconPosition: 'end'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Link met icoon aan het einde.'\n      }\n    }\n  }\n}",
      ...(_G = (_F = LinkWithIconEnd.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Hover", "Active", "Visisted", "Focus", "FocusVisible", "Placeholder", "External", "LinkWithIcon", "LinkWithIconStart", "LinkWithIconEnd"];
const LinkStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  External,
  Focus,
  FocusVisible,
  Hover,
  LinkWithIcon,
  LinkWithIconEnd,
  LinkWithIconStart,
  Placeholder,
  Playground,
  Visisted,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Active as A,
  External as E,
  Focus as F,
  Hover as H,
  LinkStories as L,
  Playground as P,
  LinkWithIcon as a,
  LinkWithIconStart as b,
  LinkWithIconEnd as c
};
