import React from "react";

export function BaseInputWrapper({ children, title, name, description }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"text-lg"}>
        {title}
      </label>
      {children}
      <div className="text-neutral">{description}</div>
    </div>
  );
}
