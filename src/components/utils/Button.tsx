import { FC } from "react";

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: string;
};

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={`bg-blue-500 px-2 py-1 rounded text-white ${
        className ? className : ""
      }`}
      type="button"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
