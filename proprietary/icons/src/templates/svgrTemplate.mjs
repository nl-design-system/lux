export const luxTemplate = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

/**
 * Rijkshuisstijl icoon
 *
 * @param {SVGProps<SVGSVGElement>} props SVG Attributes
 * @returns {*} SVG Element
 *
 * Copyright Rijksoverheid
 * 
 * Er gelden auteursrechten op de huisstijl en dit icoon.
 * Alleen partijen die een opdracht uitvoeren voor de Rijksoverheid en 
 * daarvoor gebruik mogen maken van de huisstijl en het logo hebben 
 * toestemming. Maar in alle andere gevallen is ieder gebruik verboden. 
 */
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};
