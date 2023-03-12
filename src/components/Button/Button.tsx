import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
}

const Button = ({ label, children }: ButtonProps) => {
  return (
    <button className="Button">
      뭘보시나염
      {label}
      {children}
    </button>
  );
};

export default Button;
