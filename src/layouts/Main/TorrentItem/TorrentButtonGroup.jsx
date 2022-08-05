import React, { useState } from "react";
import Torrents from "../../../api/torrentsApi";
import ModalConfirm from "../../../components/ModalConfirm";
import { useTorrentItem } from "../../../context/torrentItemContext";
import {
  BsPlayFill,
  BsPauseFill,
  BsTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { CheckInput } from "../../../components/CheckInput";
import ModalClose from "../../../components/ModalClose";
import { Input } from "../../../components/Input";
import { CategorySelector } from "../../../components/CategorySelector";
import { TagInput } from "../../../components/TagInput";
import PrimaryButton from "../../../components/PrimaryButton";

export function TorrentButtonGroup() {
  const { torrentItem } = useTorrentItem();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [deleteDownloaded, setDeleteDownloaded] = useState(false);
  const [isEditingSending, setIsEditingSending] = useState(false);

  function closeModal() {
    setDeleteDownloaded(false);
    setShowModalDelete(false);
    setShowModalEdit(false);
  }
  function resumeTorrent() {
    Torrents.resume(torrentItem.hash);
  }

  function pauseTorrent() {
    Torrents.pause(torrentItem.hash);
  }

  function deleteTorrent() {
    setShowModalDelete(true);
  }

  function confirmDelete() {
    Torrents.delete(torrentItem.hash, deleteDownloaded);
    closeModal();
  }

  function cancelDelete() {
    closeModal();
  }

  function onEditModalSubmit(e) {
    e.preventDefault();
    setIsEditingSending(true);
    let requests = [];

    if (torrentItem.category !== e.target.category.value)
      requests.push(
        Torrents.setCategory([torrentItem.hash], e.target.category.value)
      );
    let tagsArray = e.target.tags.value.split(",");
    let deleted = torrentItem.tags
      .split(",")
      .filter((x) => !tagsArray.includes(x));
    let added = tagsArray.filter(
      (x) => !torrentItem.tags.split(",").includes(x)
    );

    if (added.length > 0)
      requests.push(Torrents.addTags([torrentItem.hash], added.join(",")));

    if (deleted.length > 0)
      requests.push(Torrents.removeTags([torrentItem.hash], deleted.join(",")));

    if (torrentItem.name !== e.target.name.value && e.target.name.value !== "")
      requests.push(Torrents.rename([torrentItem.hash], e.target.name.value));

    Promise.all(requests).then(() => setIsEditingSending(false));
  }

  return (
    <div className="flex justify-between">
      {showModalDelete && (
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
      {showModalEdit && (
        <ModalClose
          title={`Edit torrent "${torrentItem.name}"`}
          onClose={() => closeModal()}
        >
          <form className="flex flex-col gap-3" onSubmit={onEditModalSubmit}>
            <Input
              title={"Name"}
              name={"name"}
              defaultValue={torrentItem.name}
            />
            <CategorySelector defaultValue={torrentItem.category} />
            <TagInput
              title={"Tags"}
              name={"tags"}
              defaultTags={torrentItem.tags.split(",")}
            />
            <PrimaryButton isLoading={isEditingSending}>Save</PrimaryButton>
          </form>
        </ModalClose>
      )}
      <div className="flex gap-3">
        <button
          className="bg-primary transition hover:shadow-md hover:shadow-primary text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => resumeTorrent()}
        >
          <BsPlayFill />
        </button>
        <button
          className="bg-primary transition hover:shadow-md hover:shadow-primary text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => pauseTorrent()}
        >
          <BsPauseFill />
        </button>
        <button
          className="bg-primary transition hover:shadow-md hover:shadow-primary text-white rounded-full flex justify-center items-center h-8 w-8 p-1"
          onClick={() => setShowModalEdit(true)}
        >
          <BsPencilFill />
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
