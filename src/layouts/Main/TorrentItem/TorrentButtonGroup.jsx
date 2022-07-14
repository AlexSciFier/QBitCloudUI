import { PauseIcon, PlayIcon, XCircleIcon } from "@heroicons/react/outline";
import {
  PauseIcon as PauseIconSolid,
  PlayIcon as PlayIconSolid,
  XCircleIcon as XCircleIconSolid,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import Torrents from "../../../api/torrentsApi";
import ModalConfirm from "../../../components/ModalConfirm";
import { useTorrentItem } from "../../../context/torrentItemContext";

export function TorrentButtonGroup() {
  const { torrentItem } = useTorrentItem();
  const [showModal, setShowModal] = useState(false);
  const [deleteDownloaded, setDeleteDownloaded] = useState(false);

  function closeModal() {
    setDeleteDownloaded(false);
    setShowModal(false);
  }
  function resumeTorrent() {
    Torrents.resume(torrentItem.hash);
  }

  function pauseTorrent() {
    Torrents.pause(torrentItem.hash);
  }

  function deleteTorrent() {
    setShowModal(true);
  }

  function confirmDelete() {
    Torrents.delete(torrentItem.hash, deleteDownloaded);
    closeModal();
  }

  function cancelDelete() {
    closeModal();
  }

  return (
    <div className="flex gap-3">
      {showModal && (
        <ModalConfirm
          title={"Confirm delete"}
          onOk={() => confirmDelete()}
          onCancel={() => cancelDelete()}
        >
          <div>Are you sure you want to delete {torrentItem.name}?</div>
          <div className="flex gap-1 items-center">
            <input
              id="deleteFiles"
              type={"checkbox"}
              onChange={(e) => setDeleteDownloaded(e.target.checked)}
              checked={deleteDownloaded}
            />
            <label htmlFor="deleteFiles">Delete downloaded files</label>
          </div>
        </ModalConfirm>
      )}
      <button
        className="text-primary relative group"
        onClick={() => resumeTorrent()}
      >
        <PlayIcon className="w-8 h-8 group-hover:opacity-0 transition-opacity" />
        <PlayIconSolid className="w-8 h-8 absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <button
        className="text-primary relative group"
        onClick={() => pauseTorrent()}
      >
        <PauseIcon className="w-8 h-8 group-hover:opacity-0 transition-opacity" />
        <PauseIconSolid className="w-8 h-8 absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <button
        className="text-red relative group"
        onClick={() => deleteTorrent()}
      >
        <XCircleIcon className="w-8 h-8 group-hover:opacity-0 transition-opacity" />
        <XCircleIconSolid className="w-8 h-8 absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}
