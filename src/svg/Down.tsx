import * as React from "react";

const SvgDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={13} height={11} {...props}>
    <path fill="none" d="M-1-1h15v13H-1z" />
    <g>
      <path
        d="M10.564 3.697c-2.532 2.33-3.89 3.494-4.074 3.494-.183 0-1.58-1.164-4.19-3.493"
        strokeWidth={2}
        strokeLinecap="round"
        stroke="#2E5FCA"
        fill="none"
      />
    </g>
  </svg>
);

export default SvgDown;
