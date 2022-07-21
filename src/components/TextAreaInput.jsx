import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function TextAreaInput({ title, name, description }) {
  return (
    <BaseInputWrapper title={title} description={description} name={name}>
      <textarea
        id={name}
        name={name}
        className="border border-light rounded px-2 py-1"
      ></textarea>
    </BaseInputWrapper>
  );
}
