import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-DteVdozH.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Bgwc3k-n.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Architectuur/NL Design System"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "nl-design-system",
      children: "NL Design System"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Het ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/",
        rel: "nofollow",
        children: "NL Design System"
      }), " helpt overheden om robuuste, toegankelijke, inclusieve en gebruikersvriendelijke websites te bouwen. Dat doet NL Design System door een actieve community te faciliteren en door middel van open discussies tot richtlijnen en componenten te komen.\nDaar naast hanteert het NL Design System een ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/handboek/estafettemodel",
        rel: "nofollow",
        children: "estafettemodel"
      }), " dat er per stap voor zorgt dat componenten steeds beter, vollediger en conreter gemaakt worden."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lux-als-implementatie",
      children: "LUX als implementatie"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["LUX is een implementatie van het NL Design System binnen Logius. LUX hanteert daarom de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/richtlijnen",
        rel: "nofollow",
        children: "NL Design System richtlijnen"
      }), ", we volgen het ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/handboek/introductie/",
        rel: "nofollow",
        children: "NL Design System Handboek"
      }), " en implementeren de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/handboek/developer/architectuur",
        rel: "nofollow",
        children: "NL Design System architectuur"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In de praktijk betekend dit voornamelijk dat:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Onze designs in Figma zijn uitgewerkt"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "We werken met design tokens en deze zoveel als mogelijk hebben ingericht naar het voorbeeld van NL Design System"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["We actief in de ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.nldesignsystem.nl/community",
          rel: "nofollow",
          children: "NL Design System Community"
        }), " deelnemen en bijdragen"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "We community componenten zoveel mogelijk herbruiken, ook als dit ietsjes minder mooi"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "We open-source werken in de Github groep van het NL Design System"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "design-tokens",
      children: "Design Tokens"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lees hier meer over onze ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/design-tokens-design-tokens",
        children: "design tokens"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "repository",
      children: "Repository"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Naast het gebruik van design tokens gebruikt LUX de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/nl-design-system/example",
        rel: "nofollow",
        children: "NL Design System example repository"
      }), " als startpunt voor de LUX codebase.\nDe example repository biedt een monorepo van waaruit verschillende packages opgebouwd en beheerd kunnen worden. Daarbij biedt de example repository een Storybook inrichting die componenten uit meerdere frameworks kan laten zien."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "componenten",
      children: "Componenten"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["LUX volgt de uitkomsten van community discussies voor het stijlen en bouwen van componenten. Waarbij LUX zoveel mogelijk techniek uit de community wilt herbruiken. Je ziet daarom op verschillende plekken het gebruik van deze community componenten terugkomen in LUX.\nBekijk hier de ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/lux-architectuur-kwaliteitseisen-componenten--docs",
        children: "kwaliteitscriteria voor componenten"
      }), " in LUX en welke ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/lux-architectuur-frameworks-support--docs",
        children: "frameworks"
      }), " LUX ondersteund."]
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
