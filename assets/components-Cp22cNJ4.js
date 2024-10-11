import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
const dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);
const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};
const arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};
const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  return React.forwardRef(forwardRef);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    constructor(props) {
      super(props);
      this.setComponentElRef = (element) => {
        this.componentEl = element;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }
    render() {
      const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          const type = typeof value;
          if (type === "string" || type === "boolean" || type === "number") {
            acc[camelToDashCase(name)] = value;
          }
        }
        return acc;
      }, {});
      const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
      return reactExports.createElement(tagName, newProps, children);
    }
    static get displayName() {
      return displayName;
    }
  };
  return createForwardRef(ReactComponent, displayName);
};
const LuxAlert = /* @__PURE__ */ createReactComponent("lux-alert");
const LuxButton = /* @__PURE__ */ createReactComponent("lux-button");
const LuxDocument = /* @__PURE__ */ createReactComponent("lux-document");
const LuxIconChevronLeft = /* @__PURE__ */ createReactComponent("lux-icon-chevron-left");
const LuxIconChevronRight = /* @__PURE__ */ createReactComponent("lux-icon-chevron-right");
const LuxLink = /* @__PURE__ */ createReactComponent("lux-link");
const LuxLoginLink = /* @__PURE__ */ createReactComponent("lux-login-link");
const LuxParagraph = /* @__PURE__ */ createReactComponent("lux-paragraph");
export {
  LuxDocument as L,
  LuxParagraph as a,
  LuxAlert as b,
  LuxButton as c,
  LuxLink as d,
  LuxIconChevronLeft as e,
  LuxLoginLink as f,
  LuxIconChevronRight as g
};
