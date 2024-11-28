import { useEffect } from "react";
import ButtonComponent from "@/globalElements/Button";

const ModalComponent = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{content.title}</h2>
        <p>{content.body}</p>
        <div className="mt-4">
          <ButtonComponent
            className="!bg-primary !text-white !w-full !text-lg"
            title="Close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
