import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Torrents from "../../api/torrentsApi";
import PageBody from "../../components/PageBody";
import PrimaryButton from "../../components/PrimaryButton";
import { CheckInput } from "../../components/CheckInput";
import { FileInput } from "../../components/FileInput";
import { SelectInput } from "../../components/SelectInput";
import { TagInput } from "../../components/TagInput";
import { TextAreaInput } from "../../components/TextAreaInput";
import { Input } from "../../components/Input";

export default function AddTorrentLayout() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Torrents.getAllCategories().then((res) => {
      setCategories([
        { name: "Uncategorized", value: "" },
        ...Object.entries(res).map((entry) => ({
          name: entry[1].name,
          value: entry[1].name,
        })),
      ]);
    });
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    let form = e.target;
    Torrents.add({
      torrents: form.torrents.files,
      urls: form.urls.value,
      category: form.category.value,
      paused: form.paused.cheched,
      savepath: form.savepath.value,
      tags: form.tags.value,
      skip_checking: form.skip_checking.checked,
      firstLastPiecePrio: form.firstLastPiecePrio.cheched,
      sequentialDownload: form.sequentialDownload.cheched,
    }).then((res) => {
      setIsLoading(false);
      if (res === "Ok.") navigate("/");
    });
  }

  return (
    <PageBody title={"Add torrent"}>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <TextAreaInput
          title="Urls"
          name="urls"
          description="URLs separated with newlines"
        />
        <FileInput
          title="Torrent file"
          name="torrents"
          description="Load .torrent file"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <CheckInput
            title="Add torrents in the paused state"
            name={"paused"}
          />
          <CheckInput title="Skip hash checking" name={"skip_checking"} />
          <CheckInput
            title="Enable sequential download"
            name={"sequentialDownload"}
          />
          <CheckInput
            title="Prioritize download first last piece"
            name={"firstLastPiecePrio"}
          />
        </div>

        <SelectInput title="Category" name="category" items={categories} />
        <TagInput title="Tags" name="tags" />
        <Input
          type="text"
          title="Save path"
          name="savepath"
          description="Download folder"
        />
        <PrimaryButton isLoading={isLoading}>Add torrent</PrimaryButton>
      </form>
    </PageBody>
  );
}

// TODO
// cookie             optional	string	Cookie sent to download the .torrent file
// root_folder        optional	string	Create the root folder. Possible values are true, false, unset (default)
// upLimit            optional	integer	Set torrent upload speed limit. Unit in bytes/second
// dlLimit            optional	integer	Set torrent download speed limit. Unit in bytes/second
// ratioLimit         optional 	float	  Set torrent share ratio limit
// seedingTimeLimit   optional 	integer	Set torrent seeding time limit. Unit in seconds
// autoTMM            optional	bool	  Whether Automatic Torrent Management should be used
