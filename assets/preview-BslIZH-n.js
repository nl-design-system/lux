import { i as instrument } from "./index-DbgQBs_-.js";
var { step: runStep } = instrument({ step: (label, play, context) => play(context) }, { intercept: true }), parameters = { throwPlayFunctionExceptions: false };
export {
  parameters,
  runStep
};
