import React from "react";
import { TabView } from "./TabView";
import { TorrentButtonGroup } from "./TorrentButtonGroup";

export function TorrentBody() {
  // let isOpenClass = isOpen ? "" : "h-0 hidden";
  return (
    <div className={`mt-3 flex flex-col gap-3`}>
      <TorrentButtonGroup />
      <TabView />
    </div>
  );
}
