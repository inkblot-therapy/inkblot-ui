import * as React from "react";

const SvgX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={8} height={8} {...props}>
    <path
      fill="#2E5FCA"
      fillRule="evenodd"
      stroke="#2E5FCA"
      strokeLinecap="round"
      strokeWidth={0.5}
      d="M3.569 4l-2.48-2.48a.305.305 0 1 1 .432-.43L4 3.568l2.48-2.48a.305.305 0 1 1 .43.432L4.432 4l2.48 2.48a.305.305 0 1 1-.432.43L4 4.432l-2.48 2.48a.305.305 0 1 1-.43-.432L3.568 4z"
    />
  </svg>
);

export default SvgX;
