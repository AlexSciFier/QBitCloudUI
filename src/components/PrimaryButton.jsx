import React from "react";

export default function PrimaryButton({ children, onClick, isLoading }) {
  var loadingClass = isLoading ? "bg-neutral animate-pulse " : "";
  return (
    <button
      className={
        loadingClass +
        "bg-primary text-white px-4 py-2 rounded shadow-md disabled:bg-neutral hover:bg-primaryLight hover:shadow-primaryLight"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
