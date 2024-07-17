import React, { useRef } from 'react';
import { tokenToCssVar } from '../../utils';

type Props = {
  token: string;
  set: 'common' | 'product' | 'viewport';
  value: string;
};

const DesignTokenSizingPreview = ({ token, value, set }: Props) => {
  const bubbleElem = useRef<HTMLElement>(null);
  const cssVar = tokenToCssVar(token);
  const style: React.CSSProperties = {} as React.CSSProperties;

  if (token !== 'figma.screen-size') {
    Object.assign(style, {
      '--dt-inline-size': cssVar,
    });
  }

  return (
    <tr>
      <td>
        <span className="dt-preview dt-preview--sizing" ref={bubbleElem} style={style}>
          {token}
        </span>
      </td>
      <td>
        <span className="dt-value">{value}</span>
      </td>
      <td>
        <span className="dt-set">{set}</span>
      </td>
    </tr>
  );
};

export { DesignTokenSizingPreview };
