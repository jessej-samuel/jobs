import { FC } from "react";

type FormManagerProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formRef: React.RefObject<HTMLFormElement>;
};

const FormManager: FC<FormManagerProps> = ({ children, onSubmit, formRef }) => {
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {children}
    </form>
  );
};

export default FormManager;
