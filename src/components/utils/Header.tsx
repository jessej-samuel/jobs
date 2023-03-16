import { FC } from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: FC<HeaderProps> = ({ children }) => {
  return <h2 className="text-dark text-xl font-normal">{children}</h2>;
};

export default Header;
