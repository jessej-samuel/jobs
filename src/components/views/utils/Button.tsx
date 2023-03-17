import { FC } from "react";

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: string;
  filled?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  children,
  disabled = false,
  filled = true,
}) => {
  if (filled)
    return (
      <button
        className={`bg-primary min-w-max w-fit px-4 py-2 rounded-md text-white flex items-center justify-center shadow-sm text-base font-medium z-10  disabled:bg-placeholder/50 ${
          className ? className : ""
        }`}
        type="button"
        disabled={disabled}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-white w-fit px-4 py-2 rounded-md text-primary flex items-center justify-center border border-primary shadow-sm text-base font-medium  disabled:bg-placeholder/50  ${
        className ? className : ""
      }`}
      disabled={disabled}
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
