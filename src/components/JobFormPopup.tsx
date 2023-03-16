import { FC } from "react";

type JobFormPopupProps = {
  visible: boolean;
};

const JobFormPopup: FC<JobFormPopupProps> = ({ visible }) => {
  if (!visible) return null;

  return <>JobFormPopup</>;
};

export default JobFormPopup;
