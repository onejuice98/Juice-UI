import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="rounded-md p-2 bg-primary">{label}</button>;
};

export default Button;
