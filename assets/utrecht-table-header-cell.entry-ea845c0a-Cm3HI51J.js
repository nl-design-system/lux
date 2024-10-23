import { a as registerInstance, b as h, H as Host } from "./preview-1dn5Pum4.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-pmKOP4ie.js";
import "./iframe-BbMFy98D.js";
import "../sb-preview/runtime.js";
const tableHeaderCellCss = ":host{--utrecht-icon-size:var(--utrecht-table-cell-icon-size);block-size:var(--utrecht-table-cell-line-height, 1em);line-height:var(--utrecht-table-cell-line-height, inherit);padding-block-end:var(--utrecht-table-cell-padding-block-end, 0);padding-block-start:var(--utrecht-table-cell-padding-block-start, 0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end, 0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start, 0);text-align:start;color:var(--utrecht-table-header-cell-color);font-size:var(--utrecht-table-header-cell-font-size);font-weight:var(--utrecht-table-header-cell-font-weight, bold);text-transform:var(--utrecht-table-header-cell-text-transform);vertical-align:var(--_utrecht-table-header-cell-vertical-align, top);z-index:var(--_utrecht-table-header-cell-z-index);display:table-cell}";
const UtrechtTableHeaderCellStyle0 = tableHeaderCellCss;
const TableHeaderCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scope = void 0;
  }
  render() {
    return h(Host, { key: "9e2e4165930adc36b2b4cff813edca525329531d", role: this.scope === "col" ? "columnheader" : this.scope === "row" ? "rowheader" : "cell" }, h("slot", { key: "47f6e72d5a5be0eca436287835ba5fe4e6da7121" }));
  }
};
TableHeaderCell.style = UtrechtTableHeaderCellStyle0;
export {
  TableHeaderCell as utrecht_table_header_cell
};
