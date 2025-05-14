import { a as registerInstance, b as h } from "./preview-BxTR0yp5.js";
import { c as clsx } from "./clsx-eca3fadc-a7bd759c-DgYk2OaC.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-B0rW5TGL.js";
import "./iframe-DK0YFUcp.js";
import "../sb-preview/runtime.js";
const backdropCss = ".utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}";
const UtrechtBackdropStyle0 = backdropCss;
const Backdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.viewport = void 0;
  }
  render() {
    const { viewport } = this;
    return h("div", { key: "d07d4784d5580dd3efa7657bf959999cd01c17b3", class: clsx("utrecht-backdrop", viewport && "utrecht-backdrop--viewport") }, h("slot", { key: "8c0ce6f7e70c30bb6f0c4a865287cc5d96852f68" }));
  }
};
Backdrop.style = UtrechtBackdropStyle0;
export {
  Backdrop as utrecht_backdrop
};
