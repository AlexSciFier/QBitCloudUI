import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function ModalConfirm({ title, children, onOk, onCancel }) {
  return (
    <div className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/10">
      <div className="flex flex-col gap-3 lg:w-1/4 w-11/12 z-50 h-fit px-6 py-3 border border-light dark:border-neutral rounded-lg shadow-xl bg-white dark:bg-dark">
        <div className="text-lg">{title}</div>
        <div>{children}</div>
        <div className="flex gap-3 justify-end">
          <button
            className="px-4 py-1 rounded hover:shadow-lg transition border border-red hover:bg-red hover:text-white hover:shadow-red/50"
            onClick={onCancel}
          >
            Cancel
          </button>
          <PrimaryButton onClick={onOk}>OK</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
