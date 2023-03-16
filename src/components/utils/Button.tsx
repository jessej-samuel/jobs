import { FC } from "react";

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: string;
};

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={`bg-primary w-fit px-4 py-2 rounded-md text-white flex items-center justify-center shadow-sm text-base font-medium z-10 ${
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
