import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageBody({ children, title }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center dark:bg-dark dark:text-white">
      <div className="lg:w-2/4 w-full flex-1 lg:shadow-xl lg:dark:shadow-primary lg:border border-light dark:border-none">
        <PageHeader title={title} />
        <div className="flex-1 px-3">{children}</div>
      </div>
    </div>
  );
}

function PageHeader({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex py-3 gap-3 items-center sticky top-0 bg-white dark:bg-dark z-10 px-3 pt-3">
      <button
        onClick={() => navigate("/")}
        className="w-8 h-8 p-1 hover:bg-light dark:hover:bg-neutral/30 rounded-full"
      >
        <ArrowLeftIcon />
      </button>
      <div className="text-xl">{title}</div>
    </div>
  );
}
