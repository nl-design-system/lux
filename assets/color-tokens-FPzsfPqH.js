import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-BqIRNCKn.js";
import { D as DesignTokenOverview, b as DesignTokenColorPreview } from "./DesignTokenSpacingPreview-BcGKECY1.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-vIfUlLkp.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Design Tokens/Common/Kleuren"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "color-design-tokens",
      children: "Color Design Tokens"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Dit zijn de common color tokens, de kleuren die je het meeste zult toepassen. Gebruik de kleuren in de context waar ze voor ontworpen zijn. Gebruik in andere gevallen de ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/design-tokens-niveaus-core-kleuren--docs",
        children: "core tokens"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "contrast",
      children: "Contrast"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Zorg altijd voor een voldoende contrast tussen de achtergrond en de tekst of interactieve elementen. Volg hiervoor de richtlijnen niveau AA van de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.w3.org/TR/WCAG22/#contrast-minimum",
        rel: "nofollow",
        children: "Web Content Accessibility Guidelines (WCAG 2.2)"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "brand",
      children: "Brand"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gebruik deze kleuren voor het branden van het product. Deze kleuren mogen toegepast worden op de achtergronden, borders, teksten en iconen."
    }), "\n", jsxRuntimeExports.jsxs(DesignTokenOverview, {
      children: [jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.brand.default",
            reference: "lux.color.groen.500",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.brand.subdued",
            reference: "lux.color.groen.50",
            set: "product"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.brand.hover",
            reference: "lux.color.groen.700",
            set: "product"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "canvas",
        children: "Canvas"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Gebruik deze kleur voor de achtergrond van de website, hierbovenop komen de background kleuren."
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsx("tbody", {
          children: jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.canvas",
            reference: "lux.color.grijs.200",
            set: "mode"
          })
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "background",
        children: "Background"
      }), jsxRuntimeExports.jsxs(_components.p, {
        children: ["Gebruik deze kleuren voor de achtergrond kleur van content blokken en componenten. Gebruik background-hover voor interactive elementen die ", jsxRuntimeExports.jsx(_components.code, {
          children: "background-default"
        }), " of ", jsxRuntimeExports.jsx(_components.code, {
          children: "background-subdued"
        }), " toegekend hebben gekregen."]
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.background.default",
            reference: "lux.color.wit",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.background.subdued",
            reference: "lux.color.grijs.200",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.background.hover",
            reference: "lux.color.grijs.300",
            set: "mode"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "foreground",
        children: "Foreground"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Gebruik deze kleuren voor teksten en iconen."
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.foreground.default",
            reference: "lux.color.grijs.700",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.foreground.subdued",
            reference: "lux.color.grijs.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.foreground.on-emphasis",
            reference: "lux.color.wit",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.foreground.link",
            reference: "lux.color.donkerblauw.500",
            set: "mode"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "border",
        children: "Border"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Gebruik deze kleuren voor de borders, dividers en andere lijnen."
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.border.default",
            reference: "lux.color.grijs.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.border.subdued",
            reference: "lux.color.grijs.400",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.border.strong",
            reference: "lux.color.foreground.default",
            set: "mode"
          })]
        })]
      }), jsxRuntimeExports.jsx(_components.h2, {
        id: "feedback",
        children: "Feedback"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Gebruik deze kleuren om de betekenis van de boodschap te benadrukken. Deze kleuren mogen toegepast worden op de achtergronden, borders, teksten en iconen."
      }), jsxRuntimeExports.jsxs("table", {
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [jsxRuntimeExports.jsx("th", {
              children: "Token"
            }), jsxRuntimeExports.jsx("th", {
              children: "Referentie"
            }), jsxRuntimeExports.jsx("th", {
              children: "Set (Figma)"
            })]
          })
        }), jsxRuntimeExports.jsxs("tbody", {
          children: [jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.success.default",
            reference: "lux.color.groen.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.success.subdued",
            reference: "lux.color.groen.50",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.info.default",
            reference: "lux.color.hemelblauw.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.info.subdued",
            reference: "lux.color.hemelblauw.50",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.error.default",
            reference: "lux.color.rood.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.error.subdued",
            reference: "lux.color.rood.50",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.warning.default",
            reference: "lux.color.donkergeel.500",
            set: "mode"
          }), jsxRuntimeExports.jsx(DesignTokenColorPreview, {
            token: "lux.color.feedback.warning.subdued",
            reference: "lux.color.donkergeel.50",
            set: "mode"
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
