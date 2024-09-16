import { type BlockquoteProps as UtrechtBlockquoteProps } from '@utrecht/component-library-react';
import { Blockquote as UtrechtBlockquote } from '@utrecht/component-library-react/dist/css-module';

// import './blockquote.scss';

export type LuxBlockquoteProps = Omit<UtrechtBlockquoteProps, 'appearance'> & {};

export const LuxBlockquote = UtrechtBlockquote;
