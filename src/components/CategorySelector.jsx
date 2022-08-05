import React, { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { BaseInputWrapper } from "./BaseInputWrapper";
import Torrents from "../api/torrentsApi";

export function CategorySelector({ onSelect, defaultValue }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Torrents.getAllCategories().then((res) => {
      let catArray = Object.keys(res).map((key) => ({ name: key, value: key }));
      setCategories(catArray);
    });
  }, []);

  return (
    <BaseInputWrapper title={"Category"}>
      <CustomSelect
        items={categories}
        name={"category"}
        selectedIndex={categories
          .map((item) => item.value)
          .indexOf(defaultValue)}
        onSelect={onSelect}
      />
    </BaseInputWrapper>
  );
}
