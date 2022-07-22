import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function TextAreaInput({ title, name, description, value, onChange }) {
  function onChangeHandler(e) {
    if (onChange) onChange(e);
  }
  return (
    <BaseInputWrapper title={title} description={description} name={name}>
      <textarea
        id={name}
        name={name}
        className="border border-light rounded px-2 py-1"
        value={value}
        onChange={onChangeHandler}
      ></textarea>
    </BaseInputWrapper>
  );
}
