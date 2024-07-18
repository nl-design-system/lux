import React, { useEffect, useRef, useState } from 'react';
import { rgbaToHex, tokenToCssVar } from '..';

type Props = {
  token: string;
  reference: string;
  set: 'product' | 'mode';
};

const DesignTokenColorPreview = ({ token, reference, set }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const [tokenValue, setTokenValue] = useState(cssVar);

  useEffect(() => {
    const rgbValue = window.getComputedStyle(bubbleElem.current as HTMLElement, 'before').backgroundColor;
    const hexValue = rgbaToHex(rgbValue);

    setTokenValue(hexValue);
  });

  return (
    <tr>
      <td>
        <span
          className="dt-preview"
          ref={bubbleElem}
          style={{ '--dt-background-color': cssVar } as React.CSSProperties}
        >
          {token}
        </span>
      </td>
      {reference ? (
        <td>
          <span className="dt-reference">{reference}</span>
        </td>
      ) : null}
      {set ? (
        <td>
          <span className="dt-set">{set}</span>
        </td>
      ) : null}
      {!reference ? (
        <td>
          <span className="dt-value">{tokenValue}</span>
        </td>
      ) : null}
    </tr>
  );
};

export { DesignTokenColorPreview };
