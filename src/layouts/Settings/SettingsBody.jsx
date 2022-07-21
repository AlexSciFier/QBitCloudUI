import React from "react";

export default function SettingsBody({ title, children }) {
  return (
    <div id={title.toLocaleLowerCase()} className="flex flex-col gap-3">
      <div className="text-2xl font-light">{title}</div>
      <div>{children}</div>
    </div>
  );
}
