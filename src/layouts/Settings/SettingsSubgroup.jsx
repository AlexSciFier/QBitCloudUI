import React from "react";

export default function SettingsSubgroup({ children, title }) {
  return (
    <div>
      <h2 id={title.toLocaleLowerCase()} className="text-xl font-light">
        {title}
      </h2>
      <div className="pl-3 mt-3 flex flex-col gap-3 border-l border-primary">
        {children}
      </div>
    </div>
  );
}
