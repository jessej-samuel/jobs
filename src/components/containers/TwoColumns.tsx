import { FC } from "react";

type TwoColumnsProps = {
  children: React.ReactNode;
};

const TwoColumns: FC<TwoColumnsProps> = ({ children }) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export default TwoColumns;
