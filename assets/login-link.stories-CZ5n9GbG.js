var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { g as LuxLoginLink$1, t as tokens, c as createDesignTokensStory } from "./components-zTxMo8B2.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-CMDMpfq0.js";
const lux = {
  "login-link": {
    active: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      }
    },
    "background-color": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      }
    },
    "border-color": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      }
    },
    "border-radius": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "border-width": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    color: {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      }
    },
    hover: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      }
    },
    icon: {
      size: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          }
        }
      }
    },
    "margin-inline": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "min-block-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "min-inline-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "padding-block-end": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "padding-block-start": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "padding-inline-end": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "padding-inline-start": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    }
  }
};
const tokensDefinition = {
  lux
};
const VisualAgents = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "lux-heading-4", children: "Agents" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "digid" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "digid-machtigen" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "eherkenning" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "eidas" })
] });
VisualAgents.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualAgents" };
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "lux-heading-4", children: "States" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "digid", label: "Hover", class: "force-state--hover" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "digid", label: "Active", class: "force-state--active" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { agent: "digid", label: "Focus", class: "force-state--focus" })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const LuxLoginLink = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLoginLink$1, { ...props });
const meta = {
  title: "Web Components/Login Link",
  id: "web-components-login-link",
  component: LuxLoginLink,
  parameters: {
    tokens,
    tokensPrefix: "lux-login-link",
    tokensDefinition
  },
  argTypes: {
    label: {
      type: "string"
    },
    agent: {
      options: ["digid", "digid-machtigen", "eherkenning", "eidas"],
      control: {
        type: "select"
      }
    }
  }
};
const Playground = {
  name: "Playground",
  args: {
    label: "",
    agent: "digid"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const LightTheme = {
  name: "Light version",
  args: {
    label: "",
    agent: "digid"
  },
  parameters: {
    themes: {
      themeOverride: "Logius light"
    },
    backgrounds: {
      default: "light"
    }
  }
};
const DarkTheme = {
  name: "Dark version",
  args: {
    label: "",
    agent: "digid"
  },
  parameters: {
    themes: {
      themeOverride: "Logius dark"
    },
    backgrounds: {
      default: "dark"
    }
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAgents, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisualAgents, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {})
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    label: '',\n    agent: 'digid'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
LightTheme.parameters = {
  ...LightTheme.parameters,
  docs: {
    ...(_d = LightTheme.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Light version',\n  args: {\n    label: '',\n    agent: 'digid'\n  },\n  parameters: {\n    themes: {\n      themeOverride: 'Logius light'\n    },\n    backgrounds: {\n      default: 'light'\n    }\n  }\n}",
      ...(_f = (_e = LightTheme.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DarkTheme.parameters = {
  ...DarkTheme.parameters,
  docs: {
    ...(_g = DarkTheme.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Dark version',\n  args: {\n    label: '',\n    agent: 'digid'\n  },\n  parameters: {\n    themes: {\n      themeOverride: 'Logius dark'\n    },\n    backgrounds: {\n      default: 'dark'\n    }\n  }\n}",
      ...(_i = (_h = DarkTheme.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_j = DesignTokens.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_l = (_k = DesignTokens.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_m = Visual.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="lux-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualAgents />\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="lux-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualAgents />\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_o = (_n = Visual.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Playground", "LightTheme", "DarkTheme", "DesignTokens", "Visual"];
const LoginLinkStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DarkTheme,
  DesignTokens,
  LightTheme,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DarkTheme as D,
  LoginLinkStories as L,
  Playground as P,
  LightTheme as a
};
