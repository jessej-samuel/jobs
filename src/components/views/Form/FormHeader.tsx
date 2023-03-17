import { FC } from "react";

type FormHeaderProps = {
  children: React.ReactNode;
};

const FormHeader: FC<FormHeaderProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-between items-center">{children}</div>
  );
};

export default FormHeader;
