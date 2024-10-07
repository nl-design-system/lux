import { r as registerInstance, h, g as getElement } from "./preview-BiWV2WXU.js";
import "./iframe-Bi901XRG.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const linkCss = ":host{--lux-icon-size:var(--lux-link-font-size, var(--utrecht-document-font-size));--lux-icon-color:currentColor;display:contents}:host([hidden]){display:none !important}";
const LuxLinkStyle0 = linkCss;
const Link = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.download = void 0;
    this.href = void 0;
    this.target = void 0;
    this.forceState = void 0;
  }
  componentDidLoad() {
    var _a, _b, _c;
    this.linkElement = (_b = (_a = this.utrechtLinkElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("a");
    if (this.forceState) {
      let forcedClass = [`utrecht-link--${this.forceState}`];
      if (this.forceState === "focus") {
        forcedClass.push("utrecht-link--focus-visible");
      }
      console.log(forcedClass, this.linkElement);
      (_c = this.linkElement) === null || _c === void 0 ? void 0 : _c.classList.add(...forcedClass);
    }
  }
  render() {
    const classNames = { [`force-state--${this.forceState}`]: Boolean(this.forceState), "lux-link": true };
    const { href, download, target } = this;
    return h("utrecht-link", { key: "da2fafbd98e82b752fe328061b026439aabb7ab1", class: classNames, href, download, target, ref: (el) => {
      this.utrechtLinkElement = el;
    } }, h("slot", { key: "694ee28f563468b096e9039095bcc326d36f2661" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Link.style = LuxLinkStyle0;
export {
  Link as lux_link
};
