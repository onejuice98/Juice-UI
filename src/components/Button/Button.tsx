import React from "react";

export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
}

const Button = ({ label, children }: ButtonProps) => {
  return (
    <button>
      뭘보시나염
      {label}
      {children}
    </button>
  );
};

export default Button;
