import React, { useRef } from 'react';
import { tokenToCssVar } from '../../utils';

type Props = {
  token: string;
  value: string;
};

const getPropertyFromToken = (token: string): string => {
  const matches = token.match(/(font-[^.]+)/i);

  if (!matches || !matches.length) {
    return '';
  }

  return matches[0];
};

const DesignTokenFontPreview = ({ token, value }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const previewStyle: React.CSSProperties = {};
  const property = getPropertyFromToken(token);
  const valueStyle: React.CSSProperties = {
    [property]: tokenToCssVar(token),
  } as React.CSSProperties;

  return (
    <>
      <td>
        <span className="dt-preview dt-preview--font" ref={bubbleElem} style={previewStyle}>
          {token}
        </span>
      </td>
      <td>
        <span className="dt-value dt-value--font" style={valueStyle}>
          {value}
        </span>
      </td>
    </>
  );
};

export { DesignTokenFontPreview };
