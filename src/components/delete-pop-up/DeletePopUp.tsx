import { Modal } from "@mui/material";
import React from "react";
type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DeletePopUp = ({ open, onClose, onConfirm }: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={onClose}
      className="flex justify-center overflow-auto py-8"
    >
      <div className="bg-white py-4 px-8 h-min rounded-lg flex-col items-center">
        <div className="text-black font-bold text-lg">
          Are You Sure You Want To Delete ??
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={onClose}
            type="button"
            className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            No
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            type="button"
            className="inline-block rounded-xl border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePopUp;
