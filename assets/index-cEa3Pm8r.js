import { G } from "./index-vKye6HrD.js";
import { r as reactExports, R as React } from "./index-aC1ZMUrs.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { makeDecorator, addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { STORY_CHANGED, SELECT_STORY } = __STORYBOOK_MODULE_CORE_EVENTS__;
var PARAM_KEY = "links";
var { document, HTMLElement } = global;
function parseQuery(queryString) {
  let query = {}, pairs = (queryString[0] === "?" ? queryString.substring(1) : queryString).split("&").filter(Boolean);
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
var navigate = (params) => addons.getChannel().emit(SELECT_STORY, params), hrefTo = (title, name) => new Promise((resolve) => {
  let { location } = document, existingId = parseQuery(location.search).id, titleToLink = title || existingId.split("--", 2)[0], path = `/story/${G(titleToLink, name)}`, sbPath = location.pathname.replace(/iframe\.html$/, ""), url = `${location.origin + sbPath}?${Object.entries({ path }).map((item) => `${item[0]}=${item[1]}`).join("&")}`;
  resolve(url);
}), linksListener = (e) => {
  let { target } = e;
  if (!(target instanceof HTMLElement)) return;
  let element = target, { sbKind: kind, sbStory: story } = element.dataset;
  (kind || story) && (e.preventDefault(), navigate({ kind, story }));
}, hasListener = false, on = () => {
  hasListener || (hasListener = true, document.addEventListener("click", linksListener));
}, off = () => {
  hasListener && (hasListener = false, document.removeEventListener("click", linksListener));
};
makeDecorator({ name: "withLinks", parameterName: PARAM_KEY, wrapper: (getStory, context) => (on(), addons.getChannel().once(STORY_CHANGED, off), getStory(context)) });
var LEFT_BUTTON = 0, isPlainLeftClick = (e) => e.button === LEFT_BUTTON && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, cancelled = (e, cb = (_e) => {
}) => {
  isPlainLeftClick(e) && (e.preventDefault(), cb(e));
}, LinkTo = class extends reactExports.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { href: "/" };
    this.updateHref = async () => {
      let { kind, title = kind, story, name = story } = this.props;
      if (title && name) {
        let href = await hrefTo(title, name);
        this.setState({ href });
      }
    };
    this.handleClick = () => {
      let { kind, title = kind, story, name = story } = this.props;
      title && name && navigate({ title, name });
    };
  }
  componentDidMount() {
    this.updateHref();
  }
  componentDidUpdate(prevProps) {
    let { kind, title, story, name } = this.props;
    (prevProps.kind !== kind || prevProps.story !== story || prevProps.title !== title || prevProps.name !== name) && this.updateHref();
  }
  render() {
    let { kind, title = kind, story, name = story, children, ...rest } = this.props, { href } = this.state;
    return React.createElement("a", { href, onClick: (e) => cancelled(e, this.handleClick), ...rest }, children);
  }
};
LinkTo.defaultProps = { children: void 0 };
var react_default = LinkTo;
export {
  react_default as r
};
