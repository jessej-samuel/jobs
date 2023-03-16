import { FC } from "react";

type FormManagerProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  ref: React.RefObject<HTMLFormElement>;
};

const FormManager: FC<FormManagerProps> = ({ children, onSubmit, ref }) => {
  return (
    <form onSubmit={onSubmit} ref={ref}>
      {children}
    </form>
  );
};

export default FormManager;
