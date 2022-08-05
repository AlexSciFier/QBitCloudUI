import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function Input({
  type,
  title,
  name,
  description,
  value,
  defaultValue,
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
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        className="border bg-transparent border-light dark:border-neutral rounded px-3 py-2 disabled:bg-neutral/10 outline-none focus:ring focus:ring-primary"
        onChange={onChangeHandler}
      ></input>
    </BaseInputWrapper>
  );
}
