import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DvxV4eF3.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CsY5d8EV.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Wat is LUX?\n\n## Wat is een design system?\n\nEen design system is als een gereedschapskist voor ontwerpers en ontwikkelaars. Het bevat herbruikbare componenten zoals kleuren, tekst stijlen, knoppen, en andere interactie elementen. Maar bevat ook richtlijnen voor hoe die componenten gebruikt moeten worden. Eigenlijk een set van bouwblokken voor het maken van kwalitatieve websites.\n\nMet een design system zorg je voor consistentie en efficiëntie bij het maken van digitale producten zoals websites. Dat maakt het makkelijker om snel producten te maken terwijl de kwaliteit, zoals gebruikersvriendelijkheid en toegankelijkheid, overal volgens dezelfde standaard geborgd zijn.\n\n## Waar kan ik LUX voor gebruiken?\n\nLUX is er voor alle Logius websites die gebruikt worden door burgers, ondernemers en afnemers. Met LUX heb je een designstoolkit, componenten bibliotheek en richtlijnen voor het toepassen daar van. Je bouwt je applicatie en website nog steeds zelf maar kan gebruik maken van alle kennis en componenten die er al zijn. Dat scheelt je een hoop tijd!\n\n## Hoe verhoud LUX zich tot NL Design System?\n\nLUX is het centrale punt binnen Logius om gebruik te maken van het NL Design System. LUX doet proactief mee in de NL Design System community door onder andere componenten uit LUX bij NL Design System aan te leveren.\n\n## Wat biedt LUX mij/mijn team of product?\n\nWerk je aan de realisatie van een website? Grote kans dat deze moet voldoen aan een scala aan eisen. Denk bijvoorbeeld de Rijkshuisstijl, welke verplicht is voor websites van de Rijksoverheid of aan Digitoegankelijk en WCAG.\n\nLUX en NL Design System nemen werk uit handen door de huisstijl standaard aan te bieden en componenten altijd te laten voldoen aan de WCAG richtlijnen. Daar naast zorgt LUX er voor dat dit centraal op 1 plek, gedocumenteerd, gebouwd en ontwikkeld wordt. Zo hoeft jouw team of afdeling een stuk minder zelf te doen.\n\n## Waarom moet ik wat met LUX of NL Design System?\n\nIn 2023 heeft Logius besloten dat het gebruik van het NL Design System verplicht zal worden. En LUX is de implementatie van het NL Design System binnen Logius.\nGeen zorgen, we helpen om de overstap zo gemakkelijk mogelijk te maken. Hier onder geven we wat voorbeelden.\n\n## Wat is er voor nodig om met LUX te werken?\n\nIn de basis zijn een UX designer en frontend ontwikkelaar nodig om LUX te gebruiken. Het helpt daar naast enorm als de product owner, product manager of architect van het team/afdeling weet heeft van LUX en NL Design System.\nAls jouw product een eigen huisstijl heeft of afwijkt van de Rijkshuisstijl kan het nodig zijn om een thema op te laten stellen door LUX.\n\n## Hoeveel tijd is er nodig om LUX in gebruik te nemen?\n\nDit is sterk afhankelijk van de behoefte en op welke wijze LUX gebruikt zal worden. Een paar voorbeelden:\n\nAls alleen gebruik gemaakt wordt van de LUX UI kit kan een UX designer na wat uitleg door LUX direct aan de slag. Echter is het handig om je bestaande ontwerpen ook gebruik te laten maken van de LUX UI kit. Bespreek met je UX designer hoeveel tijd dit zal kosten en hoe je dit het beste kunt aanpakken.\n\nOntwikkelaars kunnen de beschikbare design tokens en componenten direct gebruiken. Ervaring leert ons dat het werken met design tokens even wennen kan zijn als ontwikkelaars hier nog niet bekend mee zijn.\n\nVoor alle LUX componenten zijn de design tokens al ingericht. Zelf de design tokens toepassen op eigen componenten is ook een mogelijkheid. Houdt er wel rekening mee dat LUX hier geen volledige ondersteuning voor kan bieden.\n\nAls het team componenten wilt aandragen bij LUX zal per component gekeken moeten worden wat de verwachte doorlooptijd zal zijn. Houdt er rekening mee dat dit in het begin langzamer gaat dan het zelfstandig ontwikkelen, maar later wel versnellend zal werken omdat LUX het onderhoud op zich neemt.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Wat is LUX"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
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
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
