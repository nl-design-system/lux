import { r as registerInstance, h, g as getElement } from "./preview-DZDEI6JL.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-CkZkm0X-.js";
import "./iframe-C4cbRnY-.js";
import "../sb-preview/runtime.js";
const alertCss = ":host{--lux-icon-size:var(--lux-alert-icon-size);--lux-icon-color-contrast:var(--lux-color-wit);--utrecht-paragraph-color:var(--lux-alert-color);display:block}:host([type=warning]){--lux-icon-color-contrast:var(--lux-color-zwart)}:host([hidden]){display:none !important}";
const LuxAlertStyle0 = alertCss;
const Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = void 0;
  }
  render() {
    const { type } = this;
    return h("utrecht-alert", { key: "a7bc8b737be099847999bc0a6155b24d8958544a", type }, h("slot", { key: "7950d41b9f8b5660ec6447efc6cc42c864e5aea3", name: "icon", slot: "icon" }, (() => {
      switch (type) {
        case "info":
          return h("lux-icon-info", null);
        case "ok":
          return h("lux-icon-success", null);
        case "warning":
          return h("lux-icon-warning", null);
        case "error":
          return h("lux-icon-error", null);
        default:
          return null;
      }
    })()), h("slot", { key: "451260f52d1b6a087a24133acbb89fe47107c953" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Alert.style = LuxAlertStyle0;
export {
  Alert as lux_alert
};
