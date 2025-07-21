import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-DgK_m32G.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Bun7yNqu.js";
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
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Aan de slag/Developers"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "aan-de-slag-als-developer",
      children: "Aan de slag als developer"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "beginnen",
      children: "Beginnen"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Overleg met jouw UX designer welke componenten er in de designs gebruikt worden. Als jouw UX designer gebruik maakt van de LUX UI kit in Figma is er een grote kans dat LUX deze componenten ook aanbiedt.\nIn deze Storybook omgeving zie je welke componenten er beschikbaar zijn, gerangschikt per framework. Op deze pagina vind je een aantal manieren om LUX te gebruiken als developer."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "huisstijl-gebruiken",
      children: "Huisstijl gebruiken"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["LUX maakt op verzoek een thema aan in Figma, waar in alle design tokens goed zijn ingesteld. Meestal doet jouw UX designer dit samen met LUX. Daarna biedt LUX het thema in de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.npmjs.com/package/@lux-design-system/design-tokens",
        rel: "nofollow",
        children: "@lux-design-system/design-tokens"
      }), " package aan.\nIdealiter gebruik je de componenten uit LUX. Deze zijn standaard gestijld via design tokens. De package readme beschrijft op welke manieren je jouw thema toepast."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "design-tokens-gebruiken",
      children: "Design tokens gebruiken"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Zodra jouw product thema in de design token package beschikbaar is kan je jouw thema toepassen op je eigen componenten. Hier zitten op dit moment wel een gotcha die je eerst moet weten: De thema's in LUX worden gemapped zodat ze in de LUX componenten gebruikt worden. In veel gevallen gebruikt LUX hier voor community componenten (Bijvoorbeeld de lux-button is onderwater een utrecht-button).\nDit betekend dat gemapped is van LUX core en common laag naar de utrecht component laag. Je zal in sommige gevallen in je code --utrecht prefixed variabelen moeten gebruiken.\nOp de ... pagina vindt je een voorbeeld hoe je netjes component tokens kan inrichten met jouw product thema."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lux-componenten-gebruiken",
      children: "LUX componenten gebruiken"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Je kan onze componenten als npm dependency in je project binnenhalen. Je vind deze ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.npmjs.com/org/lux-design-system",
        rel: "nofollow",
        children: "packages op NPM"
      }), ". In de readme files staat beschreven hoe je de packages kan gebruiken."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wanneer-een-component-geschikt-is-voor-lux",
      children: "Wanneer een component geschikt is voor LUX"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Voordat we componenten aan LUX toevoegen moeten een aantal checks, zoals beschreven op ", jsxRuntimeExports.jsx(_components.a, {
        href: "/docs/lux-architectuur-kwaliteitseisen-componenten--docs",
        children: "Kwaliteitseisen Componenten"
      }), ", uitgevoerd zijn.\nWe helpen je graag met het uitvoeren van deze checks, maar je kan gerust ook zelf al proberen om de Onderzoeksfase te doorlopen en de resultaten met ons bespreken."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "component-aan-lux-toegevoegen",
      children: "Component aan LUX toegevoegen"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Als de Onderzoeksfase is afgerond en het component geschikt is voor LUX zullen grofweg de volgende stappen doorlopen worden om het component in LUX te ontwikkelen:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Samen vaststellen op welke manier het component ontworpen en gebouwd zal worden."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Samen verdelen we de taken. In meeste gevallen bouw jij zelf het component in de LUX repository op in het framework dat je zelf wilt gebruiken."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Review van het component door LUX en eventueel andere LUX gebruikers."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Release van het component in de lux NPM packages."
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
