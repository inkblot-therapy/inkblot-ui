import * as React from "react";

const SvgSearchActive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={18} height={20} {...props}>
    <path
      fill="none"
      stroke="#2E5FCA"
      strokeWidth={1.75}
      d="M9.403 15.38a7.19 7.19 0 1 0 0-14.38 7.19 7.19 0 0 0 0 14.38zm-4.393-1.2c-2.837 3.448-4.168 5.046-3.994 4.793L5.01 14.18z"
    />
  </svg>
);

export default SvgSearchActive;
