import { FC } from "react";

type PropTypes = {
  children: React.ReactNode;
};

const Content: FC<PropTypes> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default Content;
