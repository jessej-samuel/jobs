import { FC } from "react";

type CreateJobButtonProps = {
  onClick: () => void;
};

const CreateJobButton: FC<CreateJobButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Create</button>;
};

export default CreateJobButton;
