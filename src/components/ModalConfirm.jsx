import React from "react";

export default function ModalConfirm({ title, children, onOk, onCancel }) {
  return (
    <div className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/10">
      <div className="flex flex-col gap-3 lg:w-1/4 w-11/12 z-50 h-fit px-6 py-3 border border-light rounded-lg shadow-xl bg-white">
        <div className="text-lg">{title}</div>
        <div>{children}</div>
        <div className="flex gap-3 justify-end">
          <button
            className="px-4 py-1 rounded hover:shadow-lg transition border border-red hover:bg-red hover:text-white hover:shadow-red"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-1 rounded hover:shadow-lg transition bg-primary text-white hover:bg-primaryLight hover:shadow-primary"
            onClick={onOk}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
