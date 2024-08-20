import { Markdown } from '@storybook/blocks';
import { ReactElement } from 'react';

interface DocumentationProps {
  component: string;
  url: string;
  markdown: string;
}

export const IncludeDocumentation = ({ component, url, markdown }: DocumentationProps): ReactElement => {
  return (
    <>
      <p className="lsb-citation">
        {`Documentatie afkomstig van `}
        <cite>
          {/* prettier-ignore */}
          <a href={url}>{component}</a>
        </cite>
        {`.`}
      </p>

      <Markdown>{markdown}</Markdown>
    </>
  );
};
