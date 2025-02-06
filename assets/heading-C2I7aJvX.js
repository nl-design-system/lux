import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-ByU3F8Vz.js";
import { H as HeadingStories, P as Playground, a as Headings, b as HeadingWithDifferentAppearance } from "./heading.stories-MGavlgvc.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-SBh25ahh.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DzCBCR8w.js";
import "./index-C9QTpdn_.js";
import "./preview-CQs3FpNo.js";
import "./createDesignTokensStory-HiB5Jh-Q.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Gebruik en toegankelijkheid van headings (koppen)\n\n- Gebruik altijd maar één H1 heading op een pagina met digitale content.\n- Gebruik alleen een heading als er content onder staat.\n- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.\n- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van de content.\n- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.\n- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>` koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina\'s zouden `<h5>` en `<h6>` nodig zijn.\n\n## Terminologie\n\n- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".\n\nIn HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".\n';
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: HeadingStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "heading",
      children: "Heading"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Heading",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-heading--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opmerkingen",
      children: "Opmerkingen"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Als de waarde voor de property ", jsxRuntimeExports.jsx(_components.code, {
          children: "appearance"
        }), " niet gedefinieerd is krijgt het de waarde van de property ", jsxRuntimeExports.jsx(_components.code, {
          children: "level"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["De componenten ", jsxRuntimeExports.jsx(_components.code, {
          children: "Heading1"
        }), " t/m ", jsxRuntimeExports.jsx(_components.code, {
          children: "Heading6"
        }), " zijn gebouwd met het dynamische ", jsxRuntimeExports.jsx(_components.code, {
          children: "Heading"
        }), " component."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "heading-1-6",
      children: "Heading 1-6"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Headings
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Headings
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "heading-with-different-appearance",
      children: "Heading With Different Appearance"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: HeadingWithDifferentAppearance
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeadingWithDifferentAppearance
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
