import { a as registerInstance, b as h } from "./preview-Bv_FaYRz.js";
import { c as clsx } from "./clsx-eca3fadc-a7bd759c-DgYk2OaC.js";
import "./jsx-runtime-DnIIMar6.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-B5zvduxx.js";
import "./iframe-CBI7V4Uj.js";
import "../sb-preview/runtime.js";
const paginationCss = ".utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}";
const UtrechtPaginationStyle0 = paginationCss;
const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.links = void 0;
    this.next = void 0;
    this.prev = void 0;
    this.currentIndex = void 0;
  }
  render() {
    const { currentIndex } = this;
    const links = typeof this.links === "string" ? JSON.parse(this.links) : null;
    const next = typeof this.next === "string" ? JSON.parse(this.next) : null;
    const prev = typeof this.prev === "string" ? JSON.parse(this.next) : null;
    const RelativeLink = ({ disabled = false, href = "", rel = null, textContent = "", title = "" }) => disabled ? h("span", { class: clsx("utrecht-pagination__relative-link", disabled && "utrecht-pagination__relative-link--disabled", rel === "next" && "utrecht-pagination__relative-link--next", rel === "prev" && "utrecht-pagination__relative-link--prev"), "aria-label": title || null }, textContent) : h("a", { href, class: clsx("utrecht-pagination__relative-link", disabled && "utrecht-pagination__relative-link--disabled", rel === "next" && "utrecht-pagination__relative-link--next", rel === "prev" && "utrecht-pagination__relative-link--prev"), rel, "aria-label": title || null }, textContent);
    const PageLink = ({ current = false, href = "", rel = null, textContent = "" }) => h("a", { key: "1a77d5d44061a55fd129a0b912acbc93096449e2", class: clsx("utrecht-pagination__page-link", current && "utrecht-pagination__page-link--current"), href, "aria-current": current ? "true" : null, rel }, textContent);
    return h("nav", { key: "bfa0a9b822279e5b843b4120ef4d0ef4271f99ad", class: "utrecht-pagination" }, h("span", { key: "3edb27a930f35643e0432b14fca9ecc72c7a8d5a", class: "utrecht-pagination__before" }, prev ? RelativeLink(Object.assign(Object.assign({}, prev), { rel: "prev", textContent: "Vorige" })) : ""), h("span", { key: "ef146c1b1baa9333d7169ae6e34461b9b7ae6638", role: "group", class: "utrecht-pagination__pages" }, links.sort((a, b) => a.index === b.index ? 0 : a.index > b.index ? 1 : -1).map((link, arrayIndex) => {
      const index = typeof link.index === "number" ? link.index : arrayIndex;
      return Object.assign({ index, current: typeof currentIndex === "number" && index === currentIndex, rel: typeof currentIndex === "number" ? index === currentIndex + 1 ? "next" : index === currentIndex - 1 ? "prev" : null : null, textContent: link.index || index }, link);
    }).map((link) => PageLink(link))), h("span", { key: "8001b89cf489c5105d140a8aaa384dce389d5dd8", class: "utrecht-pagination__before" }, next ? RelativeLink(Object.assign(Object.assign({}, next), { rel: "next", textContent: "Volgende" })) : ""));
  }
};
Pagination.style = UtrechtPaginationStyle0;
export {
  Pagination as utrecht_pagination
};