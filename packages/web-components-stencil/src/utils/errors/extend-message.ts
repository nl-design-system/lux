export const extendMessageIfAvailable = (originalMessage: string, customMessage: string = ''): string => {
  return [originalMessage, customMessage].join(': ');
};
