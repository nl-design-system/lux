import { r as registerInstance, c as createEvent, h, g as getElement } from "./preview-SWj-Nf6K.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DcF6CAfA.js";
import "./iframe-BvZksKPY.js";
import "../sb-preview/runtime.js";
const attrBoolean = (value) => /(false)/i.test(String(value)) ? false : value;
const buttonCss = ":host{display:contents;appearance:button}:host([hidden]){display:none !important}.lux-button{--lux-icon-size:var(--lux-button-icon-size)}";
const LuxButtonStyle0 = buttonCss;
const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.luxRequestReset = createEvent(this, "luxRequestReset", 7);
    this.luxRequestSubmit = createEvent(this, "luxRequestSubmit", 7);
    this.appearance = void 0;
    this.busy = false;
    this.disabled = void 0;
    this.expanded = void 0;
    this.pressed = void 0;
    this.form = void 0;
    this.formAction = void 0;
    this.formEnctype = void 0;
    this.formMethod = void 0;
    this.formNoValidate = void 0;
    this.formTarget = void 0;
    this.popoverTarget = void 0;
    this.popoverTargetAction = void 0;
    this.name = void 0;
    this.value = void 0;
    this.type = void 0;
    this.forceState = void 0;
  }
  utrechtRequestResetHandler(event) {
    var _a;
    this.luxRequestReset.emit();
    if (!event.defaultPrevented) {
      (_a = this.hostElement.closest("form")) === null || _a === void 0 ? void 0 : _a.reset();
    }
  }
  utrechtRequestSubmitHandler(event) {
    var _a, _b;
    this.luxRequestSubmit.emit();
    if (!event.defaultPrevented) {
      (_b = (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.closest("form")) === null || _b === void 0 ? void 0 : _b.requestSubmit();
    }
  }
  componentDidLoad() {
    var _a, _b, _c;
    this.buttonElement = (_b = (_a = this.utrechtButtonElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("button");
    if (this.forceState) {
      let forcedClass = [`utrecht-button--${this.forceState}`];
      if (this.forceState === "focus") {
        forcedClass.push("utrecht-button--focus-visible");
      }
      (_c = this.buttonElement) === null || _c === void 0 ? void 0 : _c.classList.add(...forcedClass);
    }
  }
  render() {
    const classNames = { [`force-state--${this.forceState}`]: Boolean(this.forceState), "lux-button": true };
    const { appearance, busy, disabled, expanded, pressed, form, formAction, formEnctype, formMethod, formNoValidate, formTarget, popoverTarget, popoverTargetAction, name, value, type } = this;
    return h("utrecht-button", { key: "c19d5ea49552eb3972d8918ed44f9d946f9bea6c", class: classNames, appearance, busy, disabled, expanded: attrBoolean(expanded), pressed: attrBoolean(pressed), form, formAction, formEnctype, formMethod, formNoValidate, formTarget, popoverTarget, popoverTargetAction, name, value, type, part: "utrecht-button", ref: (el) => {
      this.utrechtButtonElement = el;
    } }, h("slot", { key: "c4abf0142dbad05d1d8eae06bd870dc108d59bb3" }));
  }
  static get delegatesFocus() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
};
Button.style = LuxButtonStyle0;
export {
  Button as lux_button
};
