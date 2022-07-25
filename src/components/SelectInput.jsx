import React from "react";
import CustomSelect from "./CustomSelect";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function SelectInput({
  title,
  name,
  items,
  description,
  onSelect,
  disabled = false,
  selectedIndex = 0,
}) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomSelect
        items={items}
        name={name}
        selectedIndex={selectedIndex}
        disabled={disabled}
        onSelect={onSelect}
      />
    </BaseInputWrapper>
  );
}
