import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-1zQVSGQJ.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BjHJHAQ0.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Aan de slag/Managers"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "aan-de-slag-als-manager",
      children: "Aan de slag als manager"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wat-biedt-lux-mijmijn-team-of-product",
      children: "Wat biedt LUX mij/mijn team of product?"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Werk je aan de realisatie van een website? Grote kans dat deze moet voldoen aan een scala aan eisen. Denk bijvoorbeeld de Rijkshuisstijl, welke verplicht is voor websites van de Rijksoverheid of aan Digitoegankelijk en WCAG."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "LUX en NL Design System nemen werk uit handen door de huisstijl standaard aan te bieden en componenten altijd te laten voldoen aan de WCAG richtlijnen. Daar naast zorgt LUX er voor dat dit centraal op 1 plek, gedocumenteerd, gebouwd en ontwikkeld wordt. Zo hoeft jouw team of afdeling een stuk minder zelf te doen."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "waarom-moet-ik-wat-met-lux-of-nl-design-system",
      children: "Waarom moet ik wat met LUX of NL Design System?"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In 2023 heeft Logius besloten dat het gebruik van het NL Design System verplicht zal worden. En LUX is de implementatie van het NL Design System binnen Logius.\nGeen zorgen, we helpen om de overstap zo gemakkelijk mogelijk te maken. Hier onder geven we wat voorbeelden."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wat-is-er-voor-nodig-om-met-lux-te-werken",
      children: "Wat is er voor nodig om met LUX te werken?"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In de basis zijn een UX designer en frontend ontwikkelaar nodig om LUX te gebruiken. Het helpt daar naast enorm als de product owner, product manager of architect van het team/afdeling weet heeft van LUX en NL Design System.\nAls jouw product een eigen huisstijl heeft of afwijkt van de Rijkshuisstijl kan het nodig zijn om een thema op te laten stellen door LUX."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "hoeveel-tijd-is-er-nodig-om-lux-in-gebruik-te-nemen",
      children: "Hoeveel tijd is er nodig om LUX in gebruik te nemen?"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Dit is sterk afhankelijk van de behoefte en op welke wijze LUX gebruikt zal worden. Een paar voorbeelden:"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Als alleen gebruik gemaakt wordt van de LUX UI kit kan een UX designer na wat uitleg door LUX direct aan de slag. Echter is het handig om je bestaande ontwerpen ook gebruik te laten maken van de LUX UI kit. Bespreek met je UX designer hoeveel tijd dit zal kosten en hoe je dit het beste kunt aanpakken."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ontwikkelaars kunnen de beschikbare design tokens en componenten direct gebruiken. Ervaring leert ons dat het werken met design tokens even wennen kan zijn als ontwikkelaars hier nog niet bekend mee zijn."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Voor alle LUX componenten zijn de design tokens al ingericht. Zelf de design tokens toepassen op eigen componenten is ook een mogelijkheid. Houdt er wel rekening mee dat LUX hier geen volledige ondersteuning voor kan bieden."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Als het team componenten wilt aandragen bij LUX zal per component gekeken moeten worden wat de verwachte doorlooptijd zal zijn. Houdt er rekening mee dat dit in het begin langzamer gaat dan het zelfstandig ontwikkelen, maar later wel versnellend zal werken omdat LUX het onderhoud op zich neemt."
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
