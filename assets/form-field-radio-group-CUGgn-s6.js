import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ag as Canvas, ah as Controls3 } from "./index-SORyYYKz.js";
import { R as RadioGroupStories, P as Playground, D as Default, a as Required, I as Invalid, W as WithDisabledOption, b as WithLongLabels } from "./form-field-radio-group.stories-C-0YvL2m.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-Cs3F5faR.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-DEzLU02N.js";
import "./preview-CNHN1eG-.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: RadioGroupStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "form-field-radio-group",
      children: "Form Field Radio Group"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: '<LuxRadioGroup\n  name="contact"\n  label="Voorkeur contactmethode"\n  options={[\n    { value: "email", label: "E-mail" },\n    { value: "phone", label: "Telefoon" },\n    { value: "mail", label: "Post" },\n  ]}\n/>\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Experimenteer met de verschillende properties van de RadioGroup component."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "voorbeelden",
      children: "Voorbeelden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Standaard weergave van een radio group zonder voorgeselecteerde waarde."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "required",
      children: "Required"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Verplicht veld met een asterisk indicator. Gebruik dit wanneer een keuze verplicht is."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Required
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "invalid",
      children: "Invalid"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Radio group in foutmelding status. Wordt gebruikt om aan te geven dat er een ongeldige of ontbrekende selectie is."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Invalid
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "met-uitgeschakelde-optie",
      children: "Met uitgeschakelde optie"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Radio group waarbij één optie is uitgeschakeld. Gebruik dit voor opties die tijdelijk niet beschikbaar zijn."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithDisabledOption
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "met-lange-labels",
      children: "Met lange labels"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Radio group met uitgebreide, beschrijvende labels. Geschikt voor het tonen van extra informatie bij elke optie."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithLongLabels
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
