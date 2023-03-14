import React from "react";

export interface SvgProps {
  contained?: boolean;
}
const Plus = ({ contained }: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5 13H13.5V19H11.5V13H5.5V11H11.5V5H13.5V11H19.5V13Z"
        fill={contained ? "#ffffff" : "#6200EE"}
      />
    </svg>
  );
};
export default Plus;
