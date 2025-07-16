import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta } from "./index-C-Hdxu3s.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DmdGfIv3.js";
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
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Architectuur/Toegankelijkheid"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "toegankelijkheid",
      children: "Toegankelijkheid"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["LUX ontwerpt en bouwt componenten met gebruikersvriendelijkheid en toegankelijkheid als grootste focus. Het ontwerpen van een component gebeurd aan de hand van marktonderzoek, gebruikerstests en praktijkervaring. Deze kennis vindt je onder andere terug in de pagina's van elk component bij het ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/",
        rel: "nofollow",
        children: "NL Design System"
      }), ". Deze informatie is volgens het ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/handboek/estafettemodel",
        rel: "nofollow",
        children: "estafettemodel"
      }), ", open ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.nldesignsystem.nl/community",
        rel: "nofollow",
        children: "community"
      }), " discussies en praktijkgebruik tot stand gekomen."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wcag-22",
      children: "WCAG 2.2"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Alle componenten die LUX aanbiedt voldoen aan de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.w3.org/TR/WCAG22/",
        rel: "nofollow",
        children: "WCAG 2.2"
      }), " AA richtlijnen. Hier mee voldoet LUX aan de verplichting om de WCAG 2.1 AA richtlijnen te hanteren. Door gebruik te maken van ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://storybook.js.org/",
        rel: "nofollow",
        children: "Storybook"
      }), " in combinatie met de ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://storybook.js.org/addons/@storybook/addon-a11y",
        rel: "nofollow",
        children: "a11y plugin"
      }), " is het mogelijk om alle componenten op de WCAG 2.2 richtlijnen te testen. De a11y plugin gebruikt onderwater ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/dequelabs/axe-core",
        rel: "nofollow",
        children: "Axe-Core"
      }), " wat de open source marktstandaard is op het gebied van geautomatiseerde WCAG controles."]
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
