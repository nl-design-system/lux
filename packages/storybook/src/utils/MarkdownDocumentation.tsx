import { Markdown } from '@storybook/blocks';

type MarkdownProps = {
  children: string;
};

/**
 * Renders a <Markdown> component, but with the headings 1 level down
 */
export const MarkdownDocumentation = ({ children }: MarkdownProps) => (
  <Markdown>{children.replace(/^(#+) (.+)/gim, '#$1 $2')}</Markdown>
);
