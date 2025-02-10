var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { A as LuxButton } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-C9QTpdn_.js";
import { r as reactExports } from "./index-aC1ZMUrs.js";
import { B as BADGES } from "./preview-Cr32hn7r.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const utrecht = {
  button: {
    "background-color": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      },
      type: "color"
    },
    "border-color": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      },
      type: "color"
    },
    "border-radius": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "borderRadius"
    },
    "border-width": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "borderWidth"
    },
    color: {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      },
      type: "color"
    },
    "font-family": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "*",
          inherits: true
        },
        "nl.nldesignsystem.fallback": [
          "utrecht.document.font-family"
        ]
      },
      type: "fontFamilies"
    },
    "font-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "fontSizes"
    },
    "font-weight": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<number>",
          inherits: true
        }
      },
      type: "fontWeights"
    },
    "inline-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "line-height": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "lineHeights"
    },
    "margin-block-start": {
      $extensions: {
        "nl.nldesignsystem.hidden": true,
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "margin-block-end": {
      $extensions: {
        "nl.nldesignsystem.hidden": true,
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "margin-inline-start": {
      $extensions: {
        "nl.nldesignsystem.hidden": true,
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "margin-inline-end": {
      $extensions: {
        "nl.nldesignsystem.hidden": true,
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
      },
      type: "sizing"
    },
    "min-inline-size": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "sizing"
    },
    "padding-block-start": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "spacing"
    },
    "padding-block-end": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "spacing"
    },
    "padding-inline-start": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "spacing"
    },
    "padding-inline-end": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      },
      type: "spacing"
    },
    "text-transform": {
      $extensions: {
        "nl.nldesignsystem.css.property": {
          syntax: "inherit | uppercase",
          inherits: true
        }
      }
    },
    active: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      }
    },
    icon: {
      gap: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          }
        },
        type: "spacing"
      },
      size: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          }
        },
        type: "sizing"
      }
    },
    disabled: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      }
    },
    focus: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      },
      scale: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.figma.supports-token": false
        }
      }
    },
    hover: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      },
      scale: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.figma.supports-token": false
        }
      }
    },
    pressed: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      }
    },
    "primary-action": {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      "border-width": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-width"
          ]
        }
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      },
      "font-size": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-size"
          ]
        },
        type: "fontSizes"
      },
      "font-weight": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-weight"
          ]
        },
        type: "fontWeights"
      },
      "line-height": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.line-height"
          ]
        },
        type: "lineHeights"
      },
      active: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.background-color",
              "utrecht.button.primary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.border-color",
              "utrecht.button.primary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.color",
              "utrecht.button.primary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      disabled: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.background-color",
              "utrecht.button.primary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.border-color",
              "utrecht.button.primary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.color",
              "utrecht.button.primary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      hover: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.background-color",
              "utrecht.button.primary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.border-color",
              "utrecht.button.primary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.color",
              "utrecht.button.primary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        },
        scale: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<number>",
              inherits: true
            }
          }
        }
      },
      focus: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.background-color",
              "utrecht.button.primary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.border-color",
              "utrecht.button.primary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.color",
              "utrecht.button.primary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      pressed: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.background-color",
              "utrecht.button.primary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.border-color",
              "utrecht.button.primary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.color",
              "utrecht.button.primary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      }
    },
    "secondary-action": {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      "border-width": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-width"
          ]
        }
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      },
      "font-size": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-size"
          ]
        },
        type: "fontSizes"
      },
      "font-weight": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-weight"
          ]
        },
        type: "fontWeights"
      },
      "line-height": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.line-height"
          ]
        },
        type: "lineHeights"
      },
      active: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.background-color",
              "utrecht.button.secondary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.border-color",
              "utrecht.button.secondary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.color",
              "utrecht.button.secondary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      disabled: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.background-color",
              "utrecht.button.secondary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.border-color",
              "utrecht.button.secondary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.color",
              "utrecht.button.secondary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      hover: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.background-color",
              "utrecht.button.secondary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.border-color",
              "utrecht.button.secondary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.color",
              "utrecht.button.secondary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      focus: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.background-color",
              "utrecht.button.secondary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.border-color",
              "utrecht.button.secondary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.color",
              "utrecht.button.secondary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      pressed: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.background-color",
              "utrecht.button.secondary-action.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.border-color",
              "utrecht.button.secondary-action.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.color",
              "utrecht.button.secondary-action.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      }
    },
    subtle: {
      "background-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.background-color"
          ]
        },
        type: "color"
      },
      "border-color": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-color"
          ]
        },
        type: "color"
      },
      "border-width": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.border-width"
          ]
        }
      },
      color: {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.color"
          ]
        },
        type: "color"
      },
      "font-size": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-size"
          ]
        },
        type: "fontSizes"
      },
      "font-weight": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<number>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.font-weight"
          ]
        },
        type: "fontWeights"
      },
      "line-height": {
        $extensions: {
          "nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          },
          "nl.nldesignsystem.fallback": [
            "utrecht.button.line-height"
          ]
        },
        type: "lineHeights"
      },
      active: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.background-color",
              "utrecht.button.subtle.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.border-color",
              "utrecht.button.subtle.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.active.color",
              "utrecht.button.subtle.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      disabled: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.background-color",
              "utrecht.button.subtle.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.border-color",
              "utrecht.button.subtle.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.disabled.color",
              "utrecht.button.subtle.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      hover: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.background-color",
              "utrecht.button.subtle.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.border-color",
              "utrecht.button.subtle.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.hover.color",
              "utrecht.button.subtle.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      focus: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.background-color",
              "utrecht.button.subtle.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.border-color",
              "utrecht.button.subtle.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.focus.color",
              "utrecht.button.subtle.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      },
      pressed: {
        "background-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.background-color",
              "utrecht.button.subtle.background-color",
              "utrecht.button.background-color"
            ]
          },
          type: "color"
        },
        "border-color": {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.border-color",
              "utrecht.button.subtle.border-color",
              "utrecht.button.border-color"
            ]
          },
          type: "color"
        },
        color: {
          $extensions: {
            "nl.nldesignsystem.css.property": {
              syntax: "<color>",
              inherits: true
            },
            "nl.nldesignsystem.fallback": [
              "utrecht.button.pressed.color",
              "utrecht.button.subtle.color",
              "utrecht.button.color"
            ]
          },
          type: "color"
        }
      }
    }
  }
};
const tokensDefinition = {
  utrecht
};
const appearances = ["primary-action", "secondary-action", "subtle"];
const InteractiveStates = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: appearances.map((appearance) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { appearance: `${appearance}-button`, className: "utrecht-button--active", children: [
    "Active Button (",
    appearance,
    ")"
  ] }, `active-${appearance}`),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    LuxButton,
    {
      appearance: `${appearance}-button`,
      className: "utrecht-button--focus utrecht-button--focus-visible",
      children: [
        "Focus Button (",
        appearance,
        ")"
      ]
    },
    `focus-${appearance}`
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { appearance: `${appearance}-button`, className: "utrecht-button--hover", children: [
    "Hover Button (",
    appearance,
    ")"
  ] }, `hover-${appearance}`)
] }, appearance)) });
const PropertyStates = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: appearances.map((appearance) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { appearance: `${appearance}-button`, disabled: true, children: [
    "Disabled Button (",
    appearance,
    ")"
  ] }, `disabled-${appearance}`),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { appearance: `${appearance}-button`, busy: true, children: [
    "Busy Button (",
    appearance,
    ")"
  ] }, `busy-${appearance}`),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxButton, { appearance: `${appearance}-button`, pressed: true, children: [
    "Pressed Button (",
    appearance,
    ")"
  ] }, `pressed-${appearance}`)
] }, appearance)) });
InteractiveStates.__docgenInfo = { "description": "", "methods": [], "displayName": "InteractiveStates" };
PropertyStates.__docgenInfo = { "description": "", "methods": [], "displayName": "PropertyStates" };
const Appearances = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { appearance: "primary-action-button", children: "Primary Action Button" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { appearance: "secondary-action-button", children: "Secondary Action Button" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { appearance: "subtle-button", children: "Subtle Button" })
] });
const Sizes = () => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { size: "small", children: "Small Button" });
Appearances.__docgenInfo = { "description": "", "methods": [], "displayName": "Appearances" };
Sizes.__docgenInfo = { "description": "", "methods": [], "displayName": "Sizes" };
const { useArgs } = __STORYBOOK_MODULE_PREVIEW_API__;
const meta = {
  title: "React Components/Button",
  id: "react-components-button",
  component: LuxButton,
  subcomponents: {},
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensDefinition,
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
      options: [void 0, "start", "end"],
      table: {
        defaultValue: {
          summary: "start"
        }
      }
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
      control: "boolean",
      table: {
        type: {
          summary: "HTML/SVG Content / React Node",
          detail: "Use the boolean switch to show an Icon"
        }
      }
    },
    children: {
      description: "Label (children)",
      table: {
        type: {
          summary: "HTML Content / React Node"
        }
      }
    }
  }
};
const ExampleIcon = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { height: "16", width: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "6", cx: "7", cy: "7", fill: "white", stroke: "currentColor" }) });
const ButtonTemplate = {
  args: {
    appearance: "primary-action-button",
    size: void 0,
    iconPosition: void 0,
    icon: void 0,
    pressed: false,
    busy: false,
    children: "Button"
  },
  render: ({
    icon,
    children,
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxButton, { icon: icon ? ExampleIcon : null, ...args, children })
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
const Primary = {
  ...ButtonTemplate,
  name: "Primary",
  args: {
    ...ButtonTemplate.args,
    appearance: "primary-action-button"
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
  ...ButtonTemplate,
  name: "Secondary",
  args: {
    ...ButtonTemplate.args,
    appearance: "secondary-action-button"
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
  ...ButtonTemplate,
  name: "Tertiary",
  args: {
    ...ButtonTemplate.args,
    appearance: "subtle-button"
  },
  parameters: {
    docs: {
      description: {
        story: 'De Tertiary styling zet je met `appearance="subtle-button"`'
      }
    }
  }
};
const SmallButton = {
  ...ButtonTemplate,
  name: "Small",
  args: {
    ...ButtonTemplate.args,
    size: "small"
  },
  parameters: {
    docs: {
      description: {
        story: 'Een kleine variant zet je met `size="small"`.'
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
    ...ButtonTemplate.args
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
    ...ButtonTemplate.args
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
    ...ButtonTemplate.args
  }
};
const Disabled = {
  ...AllButtonVariantsTemplate,
  name: "Disabled",
  args: {
    ...ButtonTemplate.args,
    disabled: true
  }
};
const Busy = {
  ...AllButtonVariantsTemplate,
  name: "Busy",
  args: {
    ...ButtonTemplate.args,
    busy: true
  },
  parameters: {
    docs: {
      description: {
        story: `Een busy button zet je met het \`busy\`-attribute (\`true\`/\`false\`, default: \`undefined\`). Toont een \`wait\` cursor en \`aria-busy\`-attribute. Dit gebruik je 
          bijvoorbeeld als een gebruiker met een knop een actie in gang zet die langer kan duren, zoals een download.`
      }
    }
  }
};
const Toggle = {
  ...ButtonTemplate,
  name: "Toggle",
  args: {
    ...ButtonTemplate.args,
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
      "Button ",
      args.pressed ? "pressed" : "not pressed"
    ] });
  },
  argTypes: {
    pressed: {
      control: "boolean"
    },
    children: {
      table: {
        disable: true
      }
    }
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
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Logius" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Appearances, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sizes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveStates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyStates, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "MijnAansluitingen" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--eva-light`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Appearances, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sizes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveStates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyStates, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Logius" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Appearances, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sizes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveStates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyStates, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "MijnAansluitingen" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(VisualRegressionWrapper, { className: `lux-theme--eva-dark`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Appearances, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sizes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveStates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyStates, {})
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
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_d = Primary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Primary',\n  args: {\n    ...ButtonTemplate.args,\n    appearance: 'primary-action-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Primary styling zet je met `appearance=\"primary-action-button\"`'\n      }\n    }\n  }\n}",
      ...(_f = (_e = Primary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_g = Secondary.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Secondary',\n  args: {\n    ...ButtonTemplate.args,\n    appearance: 'secondary-action-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Secondary styling zet je met `appearance=\"secondary-action-button\"`'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Secondary.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Tertiary.parameters = {
  ...Tertiary.parameters,
  docs: {
    ...(_j = Tertiary.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Tertiary',\n  args: {\n    ...ButtonTemplate.args,\n    appearance: 'subtle-button'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De Tertiary styling zet je met `appearance=\"subtle-button\"`'\n      }\n    }\n  }\n}",
      ...(_l = (_k = Tertiary.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
SmallButton.parameters = {
  ...SmallButton.parameters,
  docs: {
    ...(_m = SmallButton.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Small',\n  args: {\n    ...ButtonTemplate.args,\n    size: 'small'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een kleine variant zet je met `size=\"small\"`.'\n      }\n    }\n  }\n}",
      ...(_o = (_n = SmallButton.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_p = Active.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Active',\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  },\n  args: {\n    ...ButtonTemplate.args\n  }\n}",
      ...(_r = (_q = Active.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_s = Hover.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  },\n  args: {\n    ...ButtonTemplate.args\n  }\n}",
      ...(_u = (_t = Hover.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_v = Focus.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  },\n  args: {\n    ...ButtonTemplate.args\n  }\n}",
      ...(_x = (_w = Focus.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_y = Disabled.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Disabled',\n  args: {\n    ...ButtonTemplate.args,\n    disabled: true\n  }\n}",
      ...(_A = (_z = Disabled.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Busy.parameters = {
  ...Busy.parameters,
  docs: {
    ...(_B = Busy.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  ...AllButtonVariantsTemplate,\n  name: 'Busy',\n  args: {\n    ...ButtonTemplate.args,\n    busy: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Een busy button zet je met het \\`busy\\`-attribute (\\`true\\`/\\`false\\`, default: \\`undefined\\`). Toont een \\`wait\\` cursor en \\`aria-busy\\`-attribute. Dit gebruik je \n          bijvoorbeeld als een gebruiker met een knop een actie in gang zet die langer kan duren, zoals een download.`\n      }\n    }\n  }\n}",
      ...(_D = (_C = Busy.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
Toggle.parameters = {
  ...Toggle.parameters,
  docs: {
    ...(_E = Toggle.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  ...ButtonTemplate,\n  name: 'Toggle',\n  args: {\n    ...ButtonTemplate.args,\n    appearance: 'primary-action-button',\n    pressed: true\n  },\n  render: (args: any) => {\n    const [{\n      pressed\n    }, updateArgs] = useArgs();\n    const onPress = () => {\n      updateArgs({\n        pressed: !pressed\n      });\n    };\n    return <LuxButton {...args} onClick={onPress}>\n        Button {args.pressed ? 'pressed' : 'not pressed'}\n      </LuxButton>;\n  },\n  argTypes: {\n    pressed: {\n      control: 'boolean'\n    },\n    children: {\n      table: {\n        disable: true\n      }\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Een pressed button zet je met het `pressed`-attribute (`true`/`false`/`\"mixed\"`, default: `undefined`). Zet `aria-pressed`-attribute.'\n      }\n    }\n  }\n}",
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
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_N = DesignTokens.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_P = (_O = DesignTokens.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_Q = Visual.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <h5 className="utrecht-heading-4">Logius</h5>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <Appearances />\n      <Sizes />\n      <InteractiveStates />\n      <PropertyStates />\n    </VisualRegressionWrapper>\n    <h5 className="utrecht-heading-4">MijnAansluitingen</h5>\n    <VisualRegressionWrapper className={`lux-theme--eva-light`}>\n      <Appearances />\n      <Sizes />\n      <InteractiveStates />\n      <PropertyStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <h5 className="utrecht-heading-4">Logius</h5>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <Appearances />\n      <Sizes />\n      <InteractiveStates />\n      <PropertyStates />\n    </VisualRegressionWrapper>\n    <h5 className="utrecht-heading-4">MijnAansluitingen</h5>\n    <VisualRegressionWrapper className={`lux-theme--eva-dark`}>\n      <Appearances />\n      <Sizes />\n      <InteractiveStates />\n      <PropertyStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_S = (_R = Visual.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Primary", "Secondary", "Tertiary", "SmallButton", "Active", "Hover", "Focus", "Disabled", "Busy", "Toggle", "ButtonWithIconAtPositionStart", "ButtonWithIconAtPositionEnd", "DesignTokens", "Visual"];
const ButtonStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  Busy,
  ButtonWithIconAtPositionEnd,
  ButtonWithIconAtPositionStart,
  DesignTokens,
  Disabled,
  Focus,
  Hover,
  Playground,
  Primary,
  Secondary,
  SmallButton,
  Tertiary,
  Toggle,
  Visual,
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
  Secondary as S,
  Tertiary as T,
  Primary as a,
  SmallButton as b,
  Busy as c,
  Toggle as d,
  ButtonWithIconAtPositionStart as e,
  ButtonWithIconAtPositionEnd as f
};
