import React, { useEffect, useRef, useState } from 'react';
import { rgbaToHex, tokenToCssVar } from '../../utils';

type Props = {
  token: string;
};

const DesignTokenColorPreview = ({ token }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const [tokenValue, setTokenValue] = useState(cssVar);

  useEffect(() => {
    const rgbValue = window.getComputedStyle(bubbleElem.current as HTMLElement, 'before').backgroundColor;
    const hexValue = rgbaToHex(rgbValue);

    setTokenValue(hexValue);
  });

  return (
    <>
      <td>
        <span
          className="dt-preview"
          ref={bubbleElem}
          style={{ '--dt-background-color': cssVar } as React.CSSProperties}
        >
          {token}
        </span>
      </td>
      <td>
        <span className="dt-value">{tokenValue}</span>
      </td>
    </>
  );
};

export { DesignTokenColorPreview };
