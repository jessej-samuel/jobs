import { FC } from "react";

type SubHeaderProps = {
  children: React.ReactNode;
};

const SubHeader: FC<SubHeaderProps> = ({ children }) => {
  return <h3 className="text-base font-normal">{children}</h3>;
};

export default SubHeader;
