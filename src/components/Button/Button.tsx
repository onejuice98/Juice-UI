import React from "react";
import Plus from "../../svgs/Plus";

export interface ButtonProps {
  label: string;
  outlined?: boolean;
  contained?: boolean;
  plus?: boolean;
}

const Button = ({ label, outlined, contained, plus }: ButtonProps) => {
  const btnStyle = `flex gap-2 rounded-[4px] px-[10px] py-2 ${
    outlined && "border"
  } ${contained ? "text-white bg-primary-500" : "text-primary-500 bg-white"}`;
  return (
    <button className={btnStyle}>
      {plus && <Plus contained={contained} />}
      {label}
    </button>
  );
};

export default Button;
