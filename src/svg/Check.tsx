import * as React from "react";

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
      <defs>
          <rect id="b" width="26" height="26" rx="4"/>
          <filter id="a" width="215.4%" height="215.4%" x="-57.7%" y="-57.7%" filterUnits="objectBoundingBox">
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.388235294 0 0 0 0 0.547410486 0 0 0 0 0.694117647 0 0 0 0.2 0"/>
          </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
          <g transform="translate(10 10)">
              <use fill="#000" filter="url(#a)" />
              <rect width="24" height="24" x="1" y="1" fill="#FFF" stroke="#2E5FCA" strokeWidth="2" rx="4"/>
          </g>
          <path stroke="#2E5FCA" strokeLinecap="round" strokeWidth="2" d="M18 23.894L21.84 27l6.97-7"/>
      </g>
  </svg>
);

export default SvgCheck;
