import { r as registerInstance, h, g as getElement } from "./preview-Cq3vcknU.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BJfiFLmy.js";
import "./iframe-D-8kvnYm.js";
import "../sb-preview/runtime.js";
const paragraphCss = ".utrecht-paragraph{color:var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit));font-family:var(--utrecht-paragraph-font-family, var(--utrecht-document-font-family, inherit));font-size:var(--utrecht-paragraph-font-size, var(--utrecht-document-font-size, inherit));font-weight:var(--utrecht-paragraph-font-weight, inherit);line-height:var(--utrecht-paragraph-line-height, var(--utrecht-document-line-height, inherit));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-paragraph-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-paragraph-margin-block-start, 0))}.utrecht-paragraph--lead{color:var(--utrecht-paragraph-lead-color, var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit)));font-size:var(--utrecht-paragraph-lead-font-size, var(--utrecht-paragraph-font-size, inherit));font-weight:var(--utrecht-paragraph-lead-font-weight, var(--utrecht-paragraph-font-weight, inherit));line-height:var(--utrecht-paragraph-lead-line-height, var(--utrecht-paragraph-line-height, inherit))}.utrecht-paragraph--small{color:var(--utrecht-paragraph-small-color, var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit)));font-size:var(--utrecht-paragraph-small-font-size, var(--utrecht-paragraph-font-size, inherit));font-weight:var(--utrecht-paragraph-small-font-weight, var(--utrecht-paragraph-font-weight, inherit));line-height:var(--utrecht-paragraph-small-line-height, var(--utrecht-paragraph-line-height, inherit))}.utrecht-paragraph__small{font-size:inherit}.utrecht-paragraph__b{font-weight:inherit}.utrecht-paragraph--distanced{--utrecht-space-around:1}:host{display:flow-root}:host([hidden]){display:none !important}";
const LuxParagraphStyle0 = paragraphCss;
const Paragraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("p", { key: "7ae5b0c8ad4fdeef5d2758b2dc3a3e99c023342c", class: "utrecht-paragraph" }, h("slot", { key: "f8b0fec55bff92276ccec6bbef1f5704fb71d9c7" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Paragraph.style = LuxParagraphStyle0;
export {
  Paragraph as lux_paragraph
};
