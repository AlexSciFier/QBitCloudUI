import React from "react";

export function IconTemplate({ icon, tooltip, color }) {
  return (
    <div className={color + " w-5 h-5 relative group"}>
      {icon}
      <div className="text-black absolute left-full top-0 group-hover:block hidden bg-white rounded shadow-lg px-3 py-1 w-fit whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
}
