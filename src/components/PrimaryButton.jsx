import React from "react";

export default function PrimaryButton({ children, onClick, isLoading }) {
  var loadingClass = isLoading ? "bg-neutral animate-pulse " : "";
  return (
    <button
      className={
        loadingClass +
        "bg-gradient-to-r from-primary to-primaryLight text-white px-4 py-2 rounded disabled:bg-neutral hover:bg-primaryLight"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
