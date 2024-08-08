import React, { useEffect, useRef, useState } from 'react';
import { pxToRem, tokenToCssVar } from '..';

type Props = {
  token: string;
};

const DesignTokenSpacingPreview = ({ token }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const [tokenValue, setTokenValue] = useState(cssVar);
  const style: React.CSSProperties = {
    '--dt-inline-size': cssVar,
  } as React.CSSProperties;

  useEffect(() => {
    const pxValue = window.getComputedStyle(bubbleElem.current as HTMLElement, 'before').inlineSize;
    const inlineSize = pxToRem(pxValue);

    setTokenValue(inlineSize);
  });

  return (
    <tr>
      <td>
        <span className="lsb-dt-preview lsb-dt-preview--spacing" ref={bubbleElem} style={style}>
          {token}
        </span>
      </td>
      <td>
        <span className="lsb-dt-value">{tokenValue}</span>
      </td>
    </tr>
  );
};

export { DesignTokenSpacingPreview };
