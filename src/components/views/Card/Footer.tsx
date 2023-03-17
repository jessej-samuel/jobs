import { FC } from "react";

type PropTypes = {
  children: React.ReactNode;
};

const Footer: FC<PropTypes> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default Footer;
