import { FC } from "react";

type StepCountProps = {
  count: number;
};

const StepCount: FC<StepCountProps> = ({ count }) => {
  return <div className="font-medium text-base text-dark">Step {count}</div>;
};

export default StepCount;
