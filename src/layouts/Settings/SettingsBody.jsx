import React from "react";

export default function SettingsBody({ title, icon, children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <div className="w-8 h-8 text-primary">{icon}</div>
        <h1 className="text-2xl font-light" id={title.toLocaleLowerCase()}>
          {title}
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
