import React from "react";
import { useMainData } from "../../../context/mainDataContext";

export default function Tags() {
  let { mainData } = useMainData();
  return (
    <div>
      <div className="text-lg">Tags</div>
      <ul>
        {mainData?.tags?.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}
