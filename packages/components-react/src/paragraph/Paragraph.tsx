import {
  Paragraph as UtrechtParagraph,
  type ParagraphProps as UtrechtParagraphProps,
} from '@utrecht/component-library-react';

export type ParagraphProps = Omit<UtrechtParagraphProps, 'lead' | 'small'> & {
  appearance?: 'lead' | 'small';
};

export const Paragraph = (props: ParagraphProps) => {
  const { appearance, ...restProps } = props;

  const lead: boolean = appearance === 'lead';
  const small: boolean = appearance === 'small';

  return <UtrechtParagraph {...restProps} lead={lead} small={small} />;
};
