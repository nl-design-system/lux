import { ReactElement } from 'react';

interface CitationProps {
  component: string;
  url: string;
}

export const CitationDocumentation = ({ component, url }: CitationProps): ReactElement => {
  return (
    <p className="lsb-citation">
      {`Documentatie afkomstig van `}
      <cite>
        <a href={url}>{component}</a>
      </cite>
      {`.`}
    </p>
  );
};
