import React from "react";
import CustomTagInput from "./CustomTagInput";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function TagInput({ title, name, description, tagList }) {
  function onFetch(input) {
    let filtered = tagList.filter((item) => item.startsWith(input));
    return filtered;
  }
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomTagInput
        name={name}
        onFetchCallback={(input) => onFetch(input)}
        delay={0}
      />
    </BaseInputWrapper>
  );
}
