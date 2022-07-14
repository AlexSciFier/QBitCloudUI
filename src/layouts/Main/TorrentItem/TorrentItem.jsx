import React from "react";
import { TorrentBody } from "./TorrentBody";
import { TorrentHeader } from "./Header/TorrentHeader";

export default function TorrentItem({ isOpen, setIsOpen }) {
  return (
    <div className="border rounded border-light px-2 py-3 flex flex-col">
      <TorrentHeader isOpen={isOpen} onClick={setIsOpen} />
      {isOpen && <TorrentBody />}
    </div>
  );
}
