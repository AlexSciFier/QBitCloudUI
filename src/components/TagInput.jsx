import React, { useEffect, useState } from "react";
import CustomTagInput from "./CustomTagInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import Torrents from "../api/torrentsApi";

export function TagInput({ title, name, description, defaultTags }) {
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    Torrents.getAllTags().then((res) => setTagList(res));
  }, []);

  function onFetch(input) {
    let filtered = tagList.filter((item) => item.startsWith(input));
    return filtered;
  }
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomTagInput
        defaultTags={defaultTags}
        name={name}
        onFetchCallback={(input) => onFetch(input)}
        delay={0}
      />
    </BaseInputWrapper>
  );
}
