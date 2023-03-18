import { FC } from "react";

type StepContainerProps = {
  currentStep: number;
  forStep: number;
  children: React.ReactNode;
};
/**
 * A container for a step in a form
 * @param currentStep - The current step of the form
 * @param forStep - The step that this container is for
 * @param children - The children of this container
 * @returns JSX.Element
 */
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
