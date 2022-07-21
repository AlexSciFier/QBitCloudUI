import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageBody({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="lg:w-2/4 flex flex-col flex-1 lg:shadow-xl lg:border border-light p-4">
        <PageHeader title={title} />
        {children}
      </div>
    </div>
  );
}

function PageHeader({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 p-1 hover:bg-light rounded-full"
      >
        <ArrowLeftIcon />
      </button>
      <div className="text-xl">{title}</div>
    </div>
  );
}
