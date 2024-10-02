import { a as registerInstance, b as h } from "./preview-ReR0aR9h.js";
import "./iframe-B4_AlE49.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const columnLayoutCss = ":host{column-gap:var(--utrecht-column-layout-gap, 2em);column-width:var(--utrecht-column-layout-column-width, 40ch);display:block}:host([rule]){column-rule-color:var(--utrecht-column-layout-column-rule-color);column-rule-style:solid;column-rule-width:var(--utrecht-column-layout-column-rule-width, 0)}:host([hidden]){display:none !important}";
const UtrechtColumnLayoutStyle0 = columnLayoutCss;
const ColumnLayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.rule = false;
  }
  render() {
    return h("slot", { key: "3c7303a54624fe137e2624fa0619c14545ced78e" });
  }
};
ColumnLayout.style = UtrechtColumnLayoutStyle0;
export {
  ColumnLayout as utrecht_column_layout
};
