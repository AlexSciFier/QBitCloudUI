import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function Input({ type, title, name, description, value, placeholder }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className="border border-light rounded px-2 py-1"
      ></input>
    </BaseInputWrapper>
  );
}
