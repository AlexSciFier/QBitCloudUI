import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function Input({
  type,
  title,
  name,
  description,
  value,
  placeholder,
  disabled = false,
  onChange,
}) {
  function onChangeHandler(e) {
    if (onChange) onChange(e);
  }
  return (
    <BaseInputWrapper title={title} description={description}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className="border border-light rounded px-2 py-1 outline-none focus:ring focus:ring-primary"
        onChange={onChangeHandler}
      ></input>
    </BaseInputWrapper>
  );
}
