import React from "react";
import { useUpdateData } from "../../../context/updateDataContext";

export default function Tags() {
  let { mainData } = useUpdateData();
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
