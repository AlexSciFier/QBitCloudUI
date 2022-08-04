import React, { useState } from "react";
import Torrents from "../../../api/torrentsApi";
import ModalConfirm from "../../../components/ModalConfirm";
import { useTorrentItem } from "../../../context/torrentItemContext";
import { BsPlayFill, BsPauseFill, BsTrashFill } from "react-icons/bs";
import { CheckInput } from "../../../components/CheckInput";

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
    <div className="flex justify-between">
      {showModal && (
        <ModalConfirm
          title={"Confirm delete"}
          onOk={() => confirmDelete()}
          onCancel={() => cancelDelete()}
        >
          <div>Are you sure you want to delete {torrentItem.name}?</div>
          <CheckInput
            title={"Delete downloaded files"}
            name="deleteFiles"
            onChange={(e) => setDeleteDownloaded(e.target.checked)}
          />
        </ModalConfirm>
      )}
      <div className="flex gap-3">
        <button
          className="bg-primary transition hover:shadow-md hover:shadow-primary/50 text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => resumeTorrent()}
        >
          <BsPlayFill />
        </button>
        <button
          className="bg-primary transition hover:shadow-md hover:shadow-primary/50 text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => pauseTorrent()}
        >
          <BsPauseFill />
        </button>
        <button
          className="bg-red transition hover:shadow-md hover:shadow-red/50 text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => deleteTorrent()}
        >
          <BsTrashFill />
        </button>
      </div>
    </div>
  );
}
