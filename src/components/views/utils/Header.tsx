import { FC } from "react";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-dark text-xl font-normal ${
        className ? className : null
      }`}
    >
      {children}
    </h2>
  );
};

export default Header;
