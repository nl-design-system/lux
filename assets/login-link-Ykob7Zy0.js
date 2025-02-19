import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3, af as Markdown2 } from "./index-CnFvZm8P.js";
import { L as LoginLinkStories, P as Playground } from "./login-link.stories-D9soZG3F.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-ByaUjPDs.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-C9QTpdn_.js";
import "./components-Cp22cNJ4.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: LoginLinkStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "login-link",
      children: "Login Link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.figma.com/file/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?type=design&node-id=1125-2&mode=design",
        rel: "nofollow",
        children: "Figma"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Als LUX bieden wij dit component aan, zodat een organisatie eenvoudig aan de stijlhandleiding aansluiten toegang van Logius kan voldoen. Het is een uniek component, hiermee zijn updates aan de copy, logo’s of opmaak gemakkelijk gemaakt."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Dit component is onderdeel van het patroon: ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang",
        rel: "nofollow",
        children: "inlogstraat"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Met de ", jsxRuntimeExports.jsx(_components.code, {
        children: "Login Link"
      }), " kunnen gebruikers inloggen met het gekozen inlogmiddel."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmaak-voor-buiten-logius",
      children: "Opmaak (voor buiten Logius)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Een gedeelte van de opmaak kan aangepast worden om te voldoen aan de huisstijl van uw dienstverlening. Houd er rekening mee dat de volgorde van de elementen, de teksten van de labels en de positie van het icoon niet veranderd kunnen worden."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "aanpasbare-opmaak",
      children: "Aanpasbare opmaak"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gebruik voor de volgende design tokens waardes uit uw huisstijl."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "font",
      children: "Font"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: `
| Token                                 | Waarde                 |
| :------------------------------------ | :--------------------- |
| \`--lux-login-link-font-family\`      | \`Rijksoverheid, Arial\` |
| \`--lux-login-link-font-size\`        | \`18px\`                 |
| \`--lux-login-link-line-height\` | \`28px\`                 |
`
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "optionele-aanpasbare-opmaak",
      children: "Optionele aanpasbare opmaak"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gebruik voor de volgende design tokens de aangeboden waardes, of waardes uit uw huisstijl die vergelijkbaar zijn. Dit zorgt ervoor dat de inlogervaring zo herkenbaar mogelijk is bij de verschillende publieke dienstverleningen."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "border",
      children: "Border"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: `
| Token                              | Waarde |
| :--------------------------------- | :----- |
| \`--lux-login-link-border-width\`  | \`1px\`  |
| \`--lux-login-link-border-radius\` | \`4px\`  |
`
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "color",
      children: "Color"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Denk aan de contrastvereisten van de WCAG."
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: `
| Token                                        | Waarde    |
| :------------------------------------------- | :-------- |
| \`--lux-login-link-background-color\`        | \`#282828\` |
| \`--lux-login-link-border-color\`            | \`#696969\` |
| \`--lux-login-link-color\`                   | \`#282828\` |
| \`--lux-login-link-active-background-color\` | \`#a7a7a7\` |
| \`--lux-login-link-active-border-color\`     | \`#282828\` |
| \`--lux-login-link-active-color\`            | \`#282828\` |
| \`--lux-login-link-hover-background-color\`  | \`#e6e6e6\` |
| \`--lux-login-link-hover-border-color\`      | \`#696969\` |
| \`--lux-login-link-hover-color\`             | \`#282828\` |
`
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "size",
      children: "Size"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Schaal het icoon mee met de hoogte van de button. Houd de button minimaal 48px hoog in verband met de toegankelijke target size."
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: `
| Token                                | Waarde  |
| :----------------------------------- | :------ |
| \`--lux-login-link-min-inline-size\` | \`118px\` |
| \`--lux-login-link-icon-size\`       | \`40px\`  |
`
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "state",
      children: "State"
    }), "\n", jsxRuntimeExports.jsxs("ul", {
      className: "lsb-section",
      children: [jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "digid"
        }), jsxRuntimeExports.jsx("span", {
          children: "Default"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          class: "force-state--hover",
          agent: "digid"
        }), jsxRuntimeExports.jsx("span", {
          children: "Hover"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          class: "force-state--active",
          agent: "digid"
        }), jsxRuntimeExports.jsx("span", {
          children: "Active"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          class: "force-state--focus",
          agent: "digid"
        }), jsxRuntimeExports.jsx("span", {
          children: "Focus"
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "agent",
      children: "Agent"
    }), "\n", jsxRuntimeExports.jsxs("ul", {
      className: "lsb-section",
      children: [jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "digid"
        }), jsxRuntimeExports.jsx("span", {
          children: "Digid"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "digid-machtigen"
        }), jsxRuntimeExports.jsx("span", {
          children: "Digid Machtigen"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "eherkenning"
        }), jsxRuntimeExports.jsx("span", {
          children: "eHerkenning"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "eidas"
        }), jsxRuntimeExports.jsx("span", {
          children: "eIDAS"
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "language-en",
      children: "Language: en"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gebruik de onderstaande Engelse vertalingen door het ", jsxRuntimeExports.jsx(_components.code, {
        children: "label"
      }), " attribuut toe te wijzen."]
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<lux-login-link agent="digid" label="Log in"></lux-login-link>\n'
      })
    }), "\n", jsxRuntimeExports.jsxs("ul", {
      className: "lsb-section",
      children: [jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "digid",
          label: "Log in"
        }), jsxRuntimeExports.jsx("span", {
          children: "Digid"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "digid-machtigen",
          label: "Log in as representative"
        }), jsxRuntimeExports.jsx("span", {
          children: "Digid Machtigen"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "eherkenning",
          label: "Login as a company or organisation"
        }), jsxRuntimeExports.jsx("span", {
          children: "eHerkenning"
        })]
      }), jsxRuntimeExports.jsxs("li", {
        children: [jsxRuntimeExports.jsx("lux-login-link", {
          agent: "eidas"
        }), jsxRuntimeExports.jsx("span", {
          children: "eIDAS"
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toegankelijkheid",
      children: "Toegankelijkheid"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Biedt jouw organisatie meer dan één inlogmiddel aan? Plaats de buttons dan in een lijst, zodat screenreader gebruikers te horen krijgen dat er meerdere opties volgen."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "inlogmiddel",
      children: "Inlogmiddel"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Het inlogmiddel wordt alleen visueel weergegeven. Deze wordt verborgen toegevoegd aan het label zodat screenreadergebruikers weten om welk inlogmiddel het gaat."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "verwante-wcag-regels",
      children: "Verwante WCAG regels"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.w3.org/TR/WCAG21/#keyboard-no-exception",
          rel: "nofollow",
          children: "WCAG eis 2.1.3"
        }), ": je kan de button activeren met Enter of Space, en het is mogelijk met Tab de button te focussen. Space gebruiken heeft dan niet het effect dat de pagina scrollt."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.w3.org/TR/WCAG21/#target-size",
          rel: "nofollow",
          children: "WCAG eis 2.5.5"
        }), ": de button moet groot genoeg zijn om aan te klikken."]
      }), "\n"]
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
