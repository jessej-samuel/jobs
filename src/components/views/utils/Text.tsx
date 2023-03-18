import React, { createElement } from "react";
import { FC } from "react";

type TextProps = {
  className?: string;
  component?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  children: React.ReactNode;
};

const Text: FC<TextProps> = ({
  className = "",
  component = "p",
  weight = "normal",
  size = "base",
  children,
}) => {
  const classes = `text-${size} font-${weight} ${className}`;
  return createElement(component, { className: classes }, children);
};

export default Text;
