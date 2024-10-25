export const luxTemplate = (variables, { tpl }) => {
  return tpl`
/**
 * Copyright stuff
 * 
 */

${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};
