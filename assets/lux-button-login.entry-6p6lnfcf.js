import { r as registerInstance, h, g as getElement } from "./preview-Bac39tTl.js";
import { a as applyTestId } from "./testid-4ea5c11d-a9asCYc3.js";
import "./iframe-DKJXAlW2.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const COMPONENT_TAG = "lux-button-login";
const loginAgentsLabels = {
  digid: {
    label: "Inloggen",
    agentLabel: "met digid"
  },
  "digid-machtigen": {
    label: "Inloggen als gemachtigde",
    agentLabel: "met digid"
  },
  eherkenning: {
    label: "Inloggen als bedrijf of instelling",
    agentLabel: "met e-herkenning"
  },
  eidas: {
    label: "European login",
    agentLabel: "met e-idas"
  }
};
const buttonLoginCss = ":host{display:contents;appearance:button}:host([hidden]){display:none !important}.lux-button-login{display:flex;column-gap:var(--lux-button-login-column-gap);justify-content:flex-start;align-items:center;appearance:button;margin-inline:0;margin-block:0;border-width:var(--lux-button-login-border-width);border-style:var(--lux-button-login-border-style);border-color:var(--lux-button-login-border-color);border-radius:var(--lux-button-login-border-radius);background-color:var(--lux-button-login-background-color);padding-inline-start:var(--lux-button-login-padding-inline-start);padding-inline-end:var(--lux-button-login-padding-inline-end);padding-block-start:var(--lux-button-login-padding-block-start);padding-block-end:var(--lux-button-login-padding-block-end);min-inline-size:var(--lux-button-login-min-inline-size);min-block-size:var(--lux-button-login-min-block-size);color:var(--lux-button-login-color);font-weight:var(--lux-button-login-font-weight);font-size:var(--lux-button-login-font-size);line-height:var(--lux-button-login-line-height);font-family:var(--lux-button-login-font-family);user-select:none}:host(.force-state--hover) .lux-button-login,.lux-button-login:hover{background-color:var(--lux-button-login-hover-background-color)}:host(.force-state--active) .lux-button-login,.lux-button-login:active{border-color:var(--lux-button-login-active-border-color);background-color:var(--lux-button-login-active-background-color)}:host(.force-state--focus) .lux-button-login,.lux-button-login:focus-visible{outline-color:var(--lux-color-focus-outline);outline-style:var(--lux-focus-outline-style);outline-width:var(--lux-focus-outline-width);outline-offset:var(--lux-focus-outline-offset)}.lux-button-login__label--sr-only{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;position:absolute !important;clip-path:inset(50%) !important;margin:-1px !important;padding:0 !important;width:1px !important;height:1px !important;overflow:hidden !important;white-space:nowrap !important}.lux-button-login__logo{inline-size:var(--lux-button-login-icon-size);block-size:var(--lux-button-login-icon-size);line-height:1}";
const LuxButtonLoginStyle0 = buttonLoginCss;
const ButtonLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.agent = void 0;
    this.label = void 0;
  }
  get printedLabel() {
    if (this.label) {
      return this.label;
    }
    return loginAgentsLabels[this.agent].label;
  }
  get hiddenAgentLabel() {
    if (this.label) {
      return "";
    }
    return loginAgentsLabels[this.agent].agentLabel;
  }
  renderLabel() {
    const className = `${COMPONENT_TAG}__label`;
    return h("span", Object.assign({ class: className }, applyTestId()), this.printedLabel, h("span", { class: `${className}--sr-only` }, " ", this.hiddenAgentLabel));
  }
  renderLogoIcon() {
    const buttonLoginIcons = {
      digid: h("lux-icon-logo-digid", null),
      "digid-machtigen": h("lux-icon-logo-digid", null),
      eherkenning: h("lux-icon-logo-eherkenning", null),
      eidas: h("lux-icon-logo-eidas", null)
    };
    return buttonLoginIcons[this.agent];
  }
  renderLogoContainer() {
    return h("div", Object.assign({ class: `${COMPONENT_TAG}__logo`, "aria-hidden": "true" }, applyTestId()), this.renderLogoIcon());
  }
  render() {
    const classNames = {
      [`${COMPONENT_TAG}`]: true,
      [`${COMPONENT_TAG}--${this.agent}`]: true
    };
    return h("button", { key: "0cf05c04a6a8df15787c45de9acb5da1108a0b8a", class: classNames }, this.renderLogoContainer(), this.renderLabel());
  }
  get el() {
    return getElement(this);
  }
};
ButtonLogin.style = LuxButtonLoginStyle0;
export {
  ButtonLogin as lux_button_login
};
