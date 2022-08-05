import { XIcon } from "@heroicons/react/outline";
import React from "react";

export default function ModalClose({ title, children, onClose }) {
  return (
    <div className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/10">
      <div className="flex flex-col gap-3 lg:w-1/4 w-11/12 z-50 h-fit px-6 py-3 border border-light dark:border-neutral rounded-lg shadow-xl bg-white dark:bg-dark">
        <div className="flex justify-between">
          <div className="text-lg">{title}</div>
          <button
            className="hover:bg-light rounded-full w-8 h-8 flex justify-center items-center"
            onClick={onClose}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
