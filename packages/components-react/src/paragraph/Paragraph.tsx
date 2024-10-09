import { Paragraph, type ParagraphProps } from '@utrecht/component-library-react/dist/css-module';

export type LuxParagraphProps = Omit<ParagraphProps, 'lead' | 'small'> & {
  appearance?: 'lead' | 'small';
};

export const LuxParagraph = (props: LuxParagraphProps) => {
  const { appearance, ...restProps } = props;

  const lead: boolean = appearance === 'lead';
  const small: boolean = appearance === 'small';

  return <Paragraph {...restProps} lead={lead} small={small} />;
};
