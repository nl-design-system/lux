import { a as registerInstance, d as createEvent, b as h } from "./preview-cq77f8jl.js";
import { c as clsx } from "./clsx-eca3fadc-a7bd759c-DgYk2OaC.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BxZu2mNN.js";
import "./iframe-BjHJHAQ0.js";
import "../sb-preview/runtime.js";
const checkboxCss = ".utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}";
const UtrechtCheckboxStyle0 = checkboxCss;
const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.utrechtBlur = createEvent(this, "utrechtBlur", 7);
    this.utrechtChange = createEvent(this, "utrechtChange", 7);
    this.utrechtFocus = createEvent(this, "utrechtFocus", 7);
    this.utrechtInput = createEvent(this, "utrechtInput", 7);
    this.disabled = false;
    this.readOnly = false;
    this.checked = false;
    this.value = "";
  }
  render() {
    const { checked, disabled, value } = this;
    return h("input", { key: "158e1cbb8e92b9d853fe8a450f4b66e0de601e11", class: clsx("utrecht-checkbox"), type: "checkbox", checked, disabled, value, onBlur: (evt) => this.utrechtBlur.emit(evt), onChange: (evt) => this.utrechtChange.emit(evt), onFocus: (evt) => this.utrechtFocus.emit(evt), onInput: (evt) => {
      this.checked = evt.target.checked;
      this.utrechtInput.emit(evt);
    } });
  }
};
Checkbox.style = UtrechtCheckboxStyle0;
export {
  Checkbox as utrecht_checkbox
};
