import React from "react";
export interface ButtonProps {
    label: string;
    children?: React.ReactNode;
}
declare const Button: ({ label, children }: ButtonProps) => JSX.Element;
export default Button;
