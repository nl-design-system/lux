import React, { useEffect, useRef, useState } from 'react';
import { tokenToCssVar } from '..';

type Props = {
  token: string;
  group?: 'border' | 'outline';
  value?: string;
  set?: 'product' | 'mode';
};

const extractProperty = (token: string, group: Props['group']): string => {
  const groupPrefix = `${group}-`;
  const borderPartIndex = token.indexOf(groupPrefix) + groupPrefix.length;
  const nextPeriodSeparator = token.indexOf('.', borderPartIndex);
  return token.substring(borderPartIndex, nextPeriodSeparator);
};

const DesignTokenBorderPreview = ({ token, value, set, group = 'border' }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const property = extractProperty(token, group);
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
    <tr>
      <td>
        <span className="lsb-dt-preview lsb-dt-preview--border" ref={bubbleElem} style={previewStyle}>
          {token}
        </span>
      </td>
      {value ? (
        <td>
          <span className="lsb-dt-value">{value}</span>
        </td>
      ) : (
        <td>
          <span className="lsb-dt-value">{tokenValue}</span>
        </td>
      )}
      {set ? (
        <td>
          <span className="lsb-dt-set">{set}</span>
        </td>
      ) : null}
    </tr>
  );
};

export { DesignTokenBorderPreview };
