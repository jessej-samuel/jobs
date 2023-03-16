import { FC } from "react";

type CardContainerProps = {
  children: React.ReactNode;
};

const CardContainer: FC<CardContainerProps> = ({ children }) => {
  return (
    <div
      className="w-full max-w-xl p-8 bg-card border border-border rounded"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default CardContainer;
