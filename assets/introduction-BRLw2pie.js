import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ah as Markdown2 } from "./index-DdqKV657.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DKJXAlW2.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "<!-- @license CC0-1.0 -->\n\n# NL Design System introductie\n\nDe Digitale Overheid stelt dat overheidsdienstverlening toegankelijk en begrijpelijk moet zijn voor iedereen. Hiervoor zijn consistent ontworpen diensten en websites nodig.\nDaarom gaan we tussen overheidsorganisaties principes, interactiepatronen en code delen via een gezamenlijk design system. Dit NL Design System draagt niet alleen bij aan gebruiksvriendelijkere diensten van een betere kwaliteit en toegankelijkheid. Het helpt ook dubbel werk te voorkomen.\n\n> ⚠️ **LET OP**\n>\n> Het NL Design System bevindt zich momenteel nog in de pilotfase.\n> Hierdoor is het nu nog niet volwassen genoeg om volledig gebruikt te worden.\n> Houdt hier dus rekening mee voor je aan de slag gaat.\n> We zouden het op prijs stellen als je wilt bijdragen om het NLDS tot een succes te maken.\n> Dit kan in onze GitHub of met een mailtje aan: [kernteam@nldesignsystem.nl](mailto:kernteam@nldesignsystem.nl)\n\n## Wat is een Design System\n\nEen Design System, oftewel een ontwerpsysteem, is een verzameling afspraken tussen ontwerpers en ontwikkelaars voor het maken van digitale producten, zoals websites en apps. Het doel van deze afspraken is om de producten consistent en de gebruikerservaring zo prettig mogelijk te maken. Een Design System ‘leeft’: dankzij nieuwe inzichten en feedback van gebruikers worden de afspraken continu verbeterd.\n\n## Hoe werkt een Design System\n\nDe afspraken in het Design System worden gemaakt aan de hand van bewezen oplossingen. Ze vormen een solide basis voor de ontwerpers en ontwikkelaars: doordat zij het wiel niet steeds opnieuw hoeven uit te vinden, kunnen ze snel en effectief nieuwe digitale producten bouwen. Als je als organisatie met een Design System werkt, bouw je voort op elkaars ervaringen en houd je meer tijd over voor unieke, eenmalige uitdagingen. Wel is er een betrokken, actieve community nodig om het Design System actueel en praktisch toepasbaar te houden.\n\n## Waarom een NL Design System\n\nIn een Design System staan principes, handvatten, elementen, patronen en richtlijnen beschreven. Allemaal basisonderdelen waarover je goed afspraken kunt maken. Juist overheidsorganisaties hebben baat bij één duidelijke set herbruikbare basisonderdelen. Vooral voor levensgebeurtenissen, waarbij vaak contact nodig is met meerdere instanties en organisaties.\n\nDankzij het NL Design System kan de hele overheid in Nederland samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening. Een dienstverlening die logisch en samenhangend is, maar niet per se uniform, want binnen de afspraken blijft er ruimte voor de eigen identiteit van overheidsorganisaties.\n\n## Voor (en door) iedereen\n\nHet is belangrijk dat iedereen de online dienstverlening van de overheid kan gebruiken, ongeacht wie je bent en wat je situatie is. Dit heet inclusie: iedereen moet kunnen meedoen. Daarom testen we de afspraken in het Design System met een heel diverse gebruikersgroep, waaronder mensen met beperkingen. Zo nemen de kwaliteit, bruikbaarheid en toegankelijkheid toe en kunnen we iedereen in Nederland met onze digitale producten steeds beter van dienst zijn.\n\nDe POC is te vinden op:\n\n<http://github.com/nl-design-system>\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Example/Intro"
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
