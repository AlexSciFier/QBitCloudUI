import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ to, title, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded shadow-md transition hover:bg-primaryLight hover:shadow-primaryLight"
    >
      <div className="w-5 h-5">{icon}</div>
      <div className="hidden md:block">{title}</div>
    </Link>
  );
}
