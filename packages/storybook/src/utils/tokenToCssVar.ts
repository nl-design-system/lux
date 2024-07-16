/**
 * Convert a design token to a CSS Custom property, a.k.a. CSS Variable
 *
 * @param token Design token to convert
 * @returns Design Token converted to CSS Custom Property
 */
export const tokenToCssVar = (token: string): string => `var(--${token.replace(/\./g, '-')})`;
