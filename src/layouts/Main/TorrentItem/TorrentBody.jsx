import React from "react";
import { TabView } from "./TabView";
import { TorrentButtonGroup } from "./TorrentButtonGroup";

export function TorrentBody() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <TorrentButtonGroup />
      <TabView />
    </div>
  );
}
