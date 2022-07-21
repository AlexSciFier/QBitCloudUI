import React from "react";
import CustomSelect from "./CustomSelect";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function SelectInput({ title, name, items, description }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomSelect items={items} name={name} />
    </BaseInputWrapper>
  );
}
