import { FC } from "react";

type ErrorProps = {
  showError: boolean;
  children: React.ReactNode;
};

const Error: FC<ErrorProps> = ({ showError, children }) => {
  return (
    <p className="w-fit text-error relative" hidden={!showError}>
      {children}
    </p>
  );
};

export default Error;
