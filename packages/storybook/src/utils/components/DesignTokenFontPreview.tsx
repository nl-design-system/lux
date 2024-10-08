import React, { useRef } from 'react';
import { tokenToCssVar } from '..';

type Props = {
  token: string;
  reference?: string;
  set?: 'product' | 'viewport';
  value: string;
};

const getPropertyFromToken = (token: string): string => {
  const matches = token.match(/(font-[^.]+|line-height)/i);

  if (!matches || !matches.length) {
    return '';
  }

  return matches[0];
};

const toCamelCase = (str: string): string => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
};

const DesignTokenFontPreview = ({ token, value, set, reference }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const previewStyle: React.CSSProperties = {};
  const property = getPropertyFromToken(token);
  const valueClassName = property === 'font-size' ? 'dt-value--line-height-reset' : '';
  const valueStyle: React.CSSProperties = {
    [toCamelCase(property)]: tokenToCssVar(token),
  } as React.CSSProperties;

  return (
    <tr>
      <td>
        <span className="lsb-dt-preview lsb-dt-preview--font" ref={bubbleElem} style={previewStyle}>
          {token}
        </span>
      </td>
      {!reference && value ? (
        <td className={valueClassName}>
          <span className="lsb-dt-value dt-value--font" style={valueStyle}>
            {value}
          </span>
        </td>
      ) : null}
      {reference ? (
        <td>
          <span className="lsb-dt-reference">{reference}</span>
        </td>
      ) : null}
      {set ? (
        <td>
          <span className="lsb-dt-set">{set}</span>
        </td>
      ) : null}
    </tr>
  );
};

export { DesignTokenFontPreview };
