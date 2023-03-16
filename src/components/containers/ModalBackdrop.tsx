import { FC } from "react";

type ModalBackdropProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalBackdrop: FC<ModalBackdropProps> = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-white/50 backdrop-blur flex justify-center items-center"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;
