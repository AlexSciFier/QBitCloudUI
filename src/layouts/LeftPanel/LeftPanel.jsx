import React from "react";
import Categories from "./components/Categories";
import GlobalInfo from "./components/GlobalInfo";
import Tags from "./components/Tags";

export default function LeftPanel() {
  return (
    <div className="p-3 h-full flex flex-col gap-3">
      <GlobalInfo />
      <div className="overflow-y-auto flex-1">
        <Categories />
        <Tags />
      </div>
    </div>
  );
}
