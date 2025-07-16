import {
  Accordion,
  type AccordionProps,
  AccordionProvider,
  type AccordionProviderProps,
  AccordionSection,
  type AccordionSectionProps,
  type AccordionSectionProviderProps,
} from '@utrecht/component-library-react';

const chevronDownIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.45878 4.50918C2.95929 4.00833 3.60996 3.80799 4.11047 4.35893L7.9644 8.21551L11.8684 4.30884C12.3689 3.80799 13.0196 3.95824 13.5201 4.4591C14.0206 4.95995 14.2208 5.61107 13.6702 6.11192L8.86532 10.9201C8.36481 11.421 7.56399 11.421 7.06348 10.9201L2.30863 6.16201C1.80812 5.66115 1.95827 5.01004 2.45878 4.50918Z"
      fill="#282828"
    />
  </svg>
);

export const LuxAccordionSection = AccordionSection;
export type LuxAccordionSectionProps = AccordionSectionProps;
export type LuxAccordionSectionProviderProps = AccordionSectionProviderProps;

export const LuxAccordionProvider = (props: LuxAccordionProviderProps) => {
  const { icon, ...otherProps } = props;

  return <AccordionProvider icon={icon ? icon : chevronDownIcon} {...otherProps} />;
};

AccordionProvider.displayName = 'LuxAccordionProvider';

Accordion.displayName = 'LuxAccordion';
export const LuxAccordion = Accordion;
export type LuxAccordionProps = AccordionProps;

export type LuxAccordionProviderProps = AccordionProviderProps;

AccordionSection.displayName = 'LuxAccordionSection';
