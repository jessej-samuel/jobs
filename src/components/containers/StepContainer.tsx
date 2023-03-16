import { FC } from "react";

type StepContainerProps = {
  currentStep: number;
  forStep: number;
  children: React.ReactNode;
};

const StepContainer: FC<StepContainerProps> = ({
  currentStep,
  forStep,
  children,
}) => {
  return (
    <div
      className={`flex flex-col gap-6 ${
        currentStep === forStep ? "" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default StepContainer;
