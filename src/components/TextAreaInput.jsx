import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function TextAreaInput({
  title,
  name,
  description,
  value,
  disabled,
  rows,
  onChange,
}) {
  function onChangeHandler(e) {
    if (onChange) onChange(e);
  }
  return (
    <BaseInputWrapper title={title} description={description} name={name}>
      <textarea
        id={name}
        name={name}
        className="border bg-transparent border-light dark:border-neutral rounded px-3 py-2 outline-none focus:ring ring-primary"
        value={value}
        disabled={disabled}
        rows={rows}
        onChange={onChangeHandler}
      ></textarea>
    </BaseInputWrapper>
  );
}
