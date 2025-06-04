import {
  Accordion,
  type AccordionProps,
  AccordionProvider,
  type AccordionProviderProps,
  AccordionSection,
  type AccordionSectionProps,
  type AccordionSectionProviderProps,
} from '@utrecht/component-library-react';

Accordion.displayName = 'LuxAccordion';
export const LuxAccordion = Accordion;
export type LuxAccordionProps = AccordionProps;

AccordionProvider.displayName = 'LuxAccordionProvider';
export const LuxAccordionProvider = AccordionProvider;
export type LuxAccordionProviderProps = AccordionProviderProps;

AccordionSection.displayName = 'LuxAccordionSection';
export const LuxAccordionSection = AccordionSection;
export type LuxAccordionSectionProps = AccordionSectionProps;
export type LuxAccordionSectionProviderProps = AccordionSectionProviderProps;
