import React from "react";
import Categories from "./components/Categories";
import GlobalInfo from "./components/GlobalInfo";
import Tags from "./components/Tags";

export default function LeftPanel() {
  return (
    <div className="p-3 h-full flex flex-col gap-3 overflow-y-auto overflow-x-hidden flex-1">
      <GlobalInfo />
      <Categories />
      <Tags />
    </div>
  );
}
