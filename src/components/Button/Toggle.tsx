import React, { useState } from "react";
import Bell from "../../svgs/Bell";
import Eye from "../../svgs/Eye";
import Heart from "../../svgs/Heart";

export interface ToggleProps {
  contained?: boolean;
}
const Toggle = ({ contained }: ToggleProps) => {
  const btnStyle = `flex justify-center items-center w-12 h-12 ${
    contained && "bg-primary-40"
  }`;

  return (
    <div className="flex w-fit border divide-x rounded-md">
      <button className={btnStyle}>
        <Heart contained />
      </button>
      <button className={btnStyle}>
        <Eye contained />
      </button>
      <button className={btnStyle}>
        <Bell contained />
      </button>
    </div>
  );
};
export default Toggle;
