import React from "react";
import { BaseInputWrapper } from "./BaseInputWrapper";

export function FileInput({ title, name, description }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <input id={name} name={name} type={"file"} accept=".torrent"></input>
    </BaseInputWrapper>
  );
}
