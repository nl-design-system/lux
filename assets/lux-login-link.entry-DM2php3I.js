import { r as registerInstance, h, g as getElement } from "./preview-CQs3FpNo.js";
import { a as applyTestId } from "./testid-4ea5c11d-yBz2QATT.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DzCBCR8w.js";
import "./iframe-SBh25ahh.js";
import "../sb-preview/runtime.js";
const COMPONENT_TAG = "lux-login-link";
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
const loginLinkCss = ":host{display:contents;appearance:button}:host([hidden]){display:none !important}.lux-login-link{display:flex;column-gap:var(--lux-login-link-column-gap);justify-content:flex-start;align-items:center;appearance:button;margin-inline:0;margin-block:0;border-width:var(--lux-login-link-border-width);border-style:var(--lux-login-link-border-style);border-color:var(--lux-login-link-border-color);border-radius:var(--lux-login-link-border-radius);background-color:var(--lux-login-link-background-color);padding-inline-start:var(--lux-login-link-padding-inline-start);padding-inline-end:var(--lux-login-link-padding-inline-end);padding-block-start:var(--lux-login-link-padding-block-start);padding-block-end:var(--lux-login-link-padding-block-end);min-inline-size:var(--lux-login-link-min-inline-size);min-block-size:var(--lux-login-link-min-block-size);color:var(--lux-login-link-color);font-weight:var(--lux-login-link-font-weight);font-size:var(--lux-login-link-font-size);line-height:var(--lux-login-link-line-height);font-family:var(--lux-login-link-font-family);user-select:none}:host(.force-state--hover) .lux-login-link,.lux-login-link:hover{background-color:var(--lux-login-link-hover-background-color)}:host(.force-state--active) .lux-login-link,.lux-login-link:active{border-color:var(--lux-login-link-active-border-color);background-color:var(--lux-login-link-active-background-color)}:host(.force-state--focus) .lux-login-link,.lux-login-link:focus-visible{outline-color:var(--lux-color-focus-outline);outline-style:var(--lux-focus-outline-style);outline-width:var(--lux-focus-outline-width);outline-offset:var(--lux-focus-outline-offset)}.lux-login-link__label--sr-only{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;position:absolute !important;clip-path:inset(50%) !important;margin:-1px !important;padding:0 !important;width:1px !important;height:1px !important;overflow:hidden !important;white-space:nowrap !important}.lux-login-link__logo{inline-size:var(--lux-login-link-icon-size);block-size:var(--lux-login-link-icon-size);line-height:1}";
const LuxLoginLinkStyle0 = loginLinkCss;
const LoginLink = class {
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
    const LoginLinkIcons = {
      digid: h("lux-icon-logo-digid", null),
      "digid-machtigen": h("lux-icon-logo-digid", null),
      eherkenning: h("lux-icon-logo-eherkenning", null),
      eidas: h("lux-icon-logo-eidas", null)
    };
    return LoginLinkIcons[this.agent];
  }
  renderLogoContainer() {
    return h("div", Object.assign({ class: `${COMPONENT_TAG}__logo`, "aria-hidden": "true" }, applyTestId()), this.renderLogoIcon());
  }
  render() {
    const classNames = {
      [`${COMPONENT_TAG}`]: true,
      [`${COMPONENT_TAG}--${this.agent}`]: true
    };
    return h("button", { key: "f519d93cdef9f34a782d7a998e5381e5266d13ab", class: classNames }, this.renderLogoContainer(), this.renderLabel());
  }
  get el() {
    return getElement(this);
  }
};
LoginLink.style = LuxLoginLinkStyle0;
export {
  LoginLink as lux_login_link
};
