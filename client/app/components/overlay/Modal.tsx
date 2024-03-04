import { ReactNode } from "react";

const Modal = (props: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    props.open && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        {props.children}
      </div>
    )
  );
};

export default Modal;
