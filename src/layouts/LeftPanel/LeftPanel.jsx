import React from "react";
import Categories from "./components/Categories";
import GlobalInfo from "./components/GlobalInfo";
import Tags from "./components/Tags";

export default function LeftPanel() {
  return (
    <div className="p-3 flex flex-col gap-3">
      <GlobalInfo />
      <Categories />
      <Tags />
    </div>
  );
}
