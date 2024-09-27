import { r as registerInstance, h, g as getElement } from "./preview-BgZKi-Z2.js";
import "./iframe-fAoXuYZs.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const paragraphCss = ".utrecht-paragraph{color:var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit));font-family:var(--utrecht-paragraph-font-family, var(--utrecht-document-font-family, inherit));font-size:var(--utrecht-paragraph-font-size, var(--utrecht-document-font-size, inherit));font-weight:var(--utrecht-paragraph-font-weight, inherit);line-height:var(--utrecht-paragraph-line-height, var(--utrecht-document-line-height, inherit));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-paragraph-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-paragraph-margin-block-start, 0))}.utrecht-paragraph--lead{color:var(--utrecht-paragraph-lead-color, var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit)));font-size:var(--utrecht-paragraph-lead-font-size, var(--utrecht-paragraph-font-size, inherit));font-weight:var(--utrecht-paragraph-lead-font-weight, var(--utrecht-paragraph-font-weight, inherit));line-height:var(--utrecht-paragraph-lead-line-height, var(--utrecht-paragraph-line-height, inherit))}.utrecht-paragraph--small{color:var(--utrecht-paragraph-small-color, var(--utrecht-paragraph-color, var(--utrecht-document-color, inherit)));font-size:var(--utrecht-paragraph-small-font-size, var(--utrecht-paragraph-font-size, inherit));font-weight:var(--utrecht-paragraph-small-font-weight, var(--utrecht-paragraph-font-weight, inherit));line-height:var(--utrecht-paragraph-small-line-height, var(--utrecht-paragraph-line-height, inherit))}.utrecht-paragraph__small{font-size:inherit}.utrecht-paragraph__b{font-weight:inherit}.utrecht-paragraph--distanced{--utrecht-space-around:1}:host{display:flow-root}:host([hidden]){display:none !important}";
const LuxParagraphStyle0 = paragraphCss;
const Paragraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("p", { key: "be9e7dc2f2310fdcfeddd05a3da0f6e439e58391", class: "utrecht-paragraph" }, h("slot", { key: "a90ddf617d62ab2a3fbd05d6aea3664bcb03fae1" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Paragraph.style = LuxParagraphStyle0;
export {
  Paragraph as lux_paragraph
};
