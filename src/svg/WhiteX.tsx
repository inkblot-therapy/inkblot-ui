import * as React from "react";

const SvgWhiteX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={22} height={20} {...props}>
    <path
      d="M11 11.667l-7.5 7.5-.833.833L1 18.333l.833-.833 7.5-7.5-7.5-7.5L1 1.667 2.667 0 3.5.833l7.5 7.5 7.5-7.5.833-.833L21 1.667l-.833.833-7.5 7.5 7.5 7.5.833.833L19.333 20l-.833-.833-7.5-7.5z"
      stroke="#fff"
      strokeWidth={0.3}
      fill="#fff"
      fillRule="evenodd"
      strokeLinecap="square"
    />
  </svg>
);

export default SvgWhiteX;
