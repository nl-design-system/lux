import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3 } from "./index-Dw9vtubK.js";
import { C as CheckboxStories, P as Playground, D as Default, a as Checked, b as Disabled, c as CheckedAndDisabled, H as Hover, F as Focus, d as FocusVisible } from "./checkbox.stories-C6J5c04f.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CJ5GqfI4.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-x8V0uQZj.js";
import "./index-BLZ711uc.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Checkbox\n\n## Terminologie\n\n- **checkbox**: `type="checkbox"` in HTML, [`role="checkbox"`](https://www.w3.org/TR/wai-aria-1.2/#checkbox) in WAI-ARIA 1.2, "checkbox" in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox).\n- **checked**: `checked` attribuut in HTML, `aria-checked="true"` in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#aria-checked), `:checked` pseudo-class in CSS.\n\n## Class names\n\n- `utrecht-checkbox`\n\n## Introduction\n\nCheckboxes are usually used to provide a way for users to make a range of selections (zero, one or more). They can also be used to tell users that they agree to specific terms.\n\n## When to use\n\nCheckboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.\n\n### Forms\n\nCan be used in forms on a full page or in modals.\n\n### Terms and conditions\n\nTurning the checkbox input on or off can indicate whether you agree to the terms.\n\n## Alternatives and related components\n\nUse radio buttons to display a list of options where users can only make one choice.\n\n## Anatomy\n\nThe checkbox consists of:\n\n1. Label (optional): indicates what should be selected below.\n2. Checkbox input: a checkbox input that indicates the correct status. By default it is not active.\n3. Checkbox label: describes the information you can select or deselect.\n4. Helper text (optional): displays more information about the checkboxes\n\n## (Interactive) states\n\nThe checkbox contains the states normal, hover, disabled, error and focus.\n\n## Accessibility\n\nScreen readers automatically report the status of the check box.\n\n### Labeling\n\n### External links\n\n### Keyboard support\n\n- Move focus to each checkbox using the tab key (or shift + tab when tabbing backwards)\n- Activate or deactivate checkboxes with the space key\n\n## Content guidelines\n\n### Checkbox labels\n\nCheckbox labels must:\n\n- Start with a capital letter\n- Not end in punctuation if it’s a single sentence, word, or a fragment\n- In case the checkbox asks to agree to the terms and conditions, use the first person\n\n## Best practices\n\n### Do\'s\n\nCheckboxes must:\n\n- Work independently of each other: selecting a checkbox may not change the selection status of another checkbox in the list.\n- Be positively boxed: for example “Enable notifications” instead of “Disable notifications”.\n- Always have a label handy when you use it to turn a setting on or off.\n- Use label tags as click targets.\n- Be arranged in a logical order, whether alphabetical, numeric, time-based or some other clear system.\n- Link to more information or have a subtitle for more explanation. Don\'t rely on tooltips to explain a checkbox.\n- If they are too long, run over the second line. This is preferable than truncation.\n- If they are too long, they will be aligned left\n- If they are too long, let the text flow under the checkbox so that the control and label are aligned at the top.\n\n### Don\'ts\n\nCheckboxes must:\n\n- Not cut with an omit task if the label is too long and run over 2 lines.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html):\n  - Gebruik `aria-controls` als de checkbox een regio zichtbaar of onzichtbaar maakt.\n- [WCAG eis 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): focus moet zichtbaar zijn.\n- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de checkbox moet groot genoeg zijn om aan te klikken, ten minste 44×44px.\n\n## References\n\n- [https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)\n- [https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41](https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41)\n';
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: CheckboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Checkbox",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-checkbox--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "The checkbox supports different states: checked, disabled, invalid, required"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "All states can be combined"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "The component inherits its styling from the Utrecht Design System"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "states",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "checked",
      children: "Checked"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Checked
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "disabled",
      children: "Disabled"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabled
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "checked-and-disabled",
      children: "Checked and Disabled"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckedAndDisabled
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus-visible",
      children: "Focus Visible"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FocusVisible
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
