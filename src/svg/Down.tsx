import * as React from 'react';

const SvgDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={9} height={4} {...props}>
    <path
      fill="none"
      stroke="#2E5FCA"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.439.386c-2.532 2.328-3.89 3.493-4.073 3.493-.183 0-1.58-1.165-4.19-3.493"
    />
  </svg>
);

export default SvgDown;
