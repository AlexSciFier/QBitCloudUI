import React from "react";
import Categories from "./components/Categories";
import Tags from "./components/Tags";

export default function LeftPanel() {
  return (
    <div className="p-3 flex flex-col gap-3">
      <Categories />
      <Tags />
    </div>
  );
}
