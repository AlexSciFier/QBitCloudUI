import React from "react";
import { useMainData } from "../../../context/mainDataContext";

export default function Categories() {
  let { mainData } = useMainData();
  let categories = Object.keys(mainData?.categories || {}).map((key) => ({
    name: mainData.categories[key].name,
    savePath: mainData.categories[key].savePath,
    key: key,
  }));
  return (
    <div>
      <div className="text-lg">Categories</div>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
