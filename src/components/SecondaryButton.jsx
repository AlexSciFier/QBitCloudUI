import React from "react";

export default function SecondaryButton({ children, onClick, isLoading }) {
  var loadingClass = isLoading ? "bg-neutral animate-pulse " : "";
  return (
    <button
      className={
        loadingClass +
        "border border-primary transition-shadow hover:text-white hover:shadow-md hover:shadow-primary/50 px-4 py-2 rounded disabled:bg-neutral hover:bg-primary"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
