import { a as registerInstance, b as h } from "./preview-B7sJgUzd.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-Dc96N-6w.js";
import "./iframe-C5n1PiIs.js";
import "../sb-preview/runtime.js";
const digidButtonCss = ".utrecht-digid-button{--utrecht-button-min-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-digid-button-block-size, 50px);block-size:var(--utrecht-digid-button-block-size, 50px);display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}";
const UtrechtDigidButtonStyle0 = digidButtonCss;
const DigidButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = void 0;
  }
  render() {
    return h("div", { key: "1c923c0b8248a6acf980af625d57dc0a2bbfab8e", class: "utrecht-digid-button" }, h("utrecht-digid-logo", { key: "3b166855251bebe2aa98dab0b918ee426efa31f6", class: "utrecht-digid-button__logo" }), h("slot", { key: "b33f6d99a22530131905355554b8fed30da19d07" }));
  }
};
DigidButton.style = UtrechtDigidButtonStyle0;
export {
  DigidButton as utrecht_digid_button
};
