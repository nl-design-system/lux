import type { SVGProps } from 'react';
/**
 * Lux lamp icoon
 *
 * @param {SVGProps<SVGSVGElement>} props SVG Attributes
 * @returns {*} SVG Element
 */
const FallbackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 440"
    width="1em"
    height="1em"
    data-icon-name="zoek"
    {...props}
  >
    <g>
      <path d="M182.483 437.665L219.245 437.665L219.245 271.697C213.621 274.254 207.434 275.737 200.838 275.737C194.242 275.737 188.056 274.254 182.431 271.697L182.431 437.665L182.483 437.665Z" />
      <path d="M182.483 231.306C182.483 241.43 190.766 249.662 200.889 249.662C211.013 249.662 219.296 241.43 219.296 231.255L219.296 193.674L245.372 193.674L245.372 231.255C245.372 241.379 253.604 249.662 263.779 249.662C273.954 249.662 282.186 241.43 282.186 231.255L282.186 193.674L308.262 193.674L308.262 231.255C308.262 255.797 288.321 275.738 263.779 275.738C257.234 275.738 250.997 274.255 245.372 271.699L245.372 437.666L315.88 437.666L315.88 428.769C315.88 375.901 308.824 375.646 345.229 337.298C383.883 296.548 405.562 239.538 398.762 177.466C388.689 85.6882 314.602 11.4476 222.875 1.27273C102.158 -12.1233 0.000107732 82.0068 8.70987e-05 200.014C7.78817e-05 252.729 20.452 300.536 53.7376 336.224C90.1931 375.236 84.1087 375.441 84.1087 428.821L84.1087 437.615L156.406 437.615L156.406 271.545C150.731 274.153 144.442 275.687 137.795 275.687C113.253 275.687 93.3121 255.746 93.3121 231.204L93.3121 193.623L119.388 193.623L119.388 231.204C119.388 241.327 127.62 249.61 137.795 249.61C147.97 249.61 156.202 241.379 156.202 231.204L156.202 193.623L182.483 193.623L182.483 231.204" />
    </g>
  </svg>
);
export default FallbackIcon;