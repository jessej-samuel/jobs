import { FC } from "react";

type FormFooterProps = {
  children: React.ReactNode;
};

const FormFooter: FC<FormFooterProps> = ({ children }) => {
  return (
    <div className="mt-24 flex items-center justify-end gap-x-4">
      {children}
    </div>
  );
};

export default FormFooter;
