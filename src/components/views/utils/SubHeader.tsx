import { FC } from "react";

type SubHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const SubHeader: FC<SubHeaderProps> = ({ children, className = "" }) => {
  return <h3 className={`text-base font-normal ${className}`}>{children}</h3>;
};

export default SubHeader;
