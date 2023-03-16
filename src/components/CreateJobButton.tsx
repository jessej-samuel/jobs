import { FC } from "react";
import Button from "./utils/Button";

type CreateJobButtonProps = {
  onClick: () => void;
};

const CreateJobButton: FC<CreateJobButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Create</Button>;
};

export default CreateJobButton;
