import React, { useEffect, useRef, useState } from 'react';
import tokenToCssVar from '../../utils/tokenToCssVar';

type Props = {
  token: string;
};

const extractProperty = (token: string): string => {
  const borderPartIndex = token.indexOf('border-') + 'border-'.length;
  const nextPeriodSeparator = token.indexOf('.', borderPartIndex);
  return token.substring(borderPartIndex, nextPeriodSeparator);
};

const DesignTokenBorderPreview = ({ token }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const property = extractProperty(token);
  const [tokenValue, setTokenValue] = useState(cssVar);
  const previewStyle: React.CSSProperties = {
    [`--dt-border-${property}`]: tokenValue,
  } as React.CSSProperties;

  useEffect(() => {
    const computedStyle: CSSStyleDeclaration = window.getComputedStyle(bubbleElem.current as HTMLElement, 'before');
    const borderProperty: any = `border${property.substring(0, 1).toUpperCase()}${property.substring(1)}`;
    const borderValue: string = computedStyle[borderProperty];

    setTokenValue(borderValue);
  });

  return (
    <>
      <td>
        <span className="dt-preview dt-preview--border" ref={bubbleElem} style={previewStyle}>
          {token}
        </span>
      </td>
      <td>
        <span className="dt-value">{tokenValue}</span>
      </td>
    </>
  );
};

export { DesignTokenBorderPreview };
