import { CheckIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Torrents from "../../api/torrentsApi";
import CustomSelect from "../../components/CustomSelect";
import CustomTagInput from "../../components/CustomTagInput";

export default function AddTorrentLayout() {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

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
    Torrents.getAllTags().then((res) => setTags(res));
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <form className="lg:w-2/4 w-full flex flex-col gap-1 rounded-xl shadow-xl border border-light p-4">
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
        <TextInput
          title="Save path"
          name="savepath"
          description="Download folder"
        />
        <SelectInput title="Category" name="category" items={categories} />
        <TagInput title="Tags" name="tags" tagList={tags} />
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
      </form>
    </div>
  );
}

// cookie             optional	string	Cookie sent to download the .torrent file
// root_folder        optional	string	Create the root folder. Possible values are true, false, unset (default)
// rename             optional	string	Rename torrent
// upLimit            optional	integer	Set torrent upload speed limit. Unit in bytes/second
// dlLimit            optional	integer	Set torrent download speed limit. Unit in bytes/second
// ratioLimit         optional 	float	  Set torrent share ratio limit
// seedingTimeLimit   optional 	integer	Set torrent seeding time limit. Unit in seconds
// autoTMM            optional	bool	  Whether Automatic Torrent Management should be used

function BaseInputWrapper({ children, title, name, description }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"text-lg"}>
        {title}
      </label>
      {children}
      <div className="text-neutral">{description}</div>
    </div>
  );
}
function TextAreaInput({ title, name, description }) {
  return (
    <BaseInputWrapper title={title} description={description} name={name}>
      <textarea
        id={name}
        name={name}
        className="border border-light rounded px-2 py-1"
      ></textarea>
    </BaseInputWrapper>
  );
}

function FileInput({ title, name, description }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <input id={name} name={name} type={"file"} accept=".torrent"></input>
    </BaseInputWrapper>
  );
}

function TextInput({ title, name, description }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <input
        id={name}
        name={name}
        className="border border-light rounded px-2 py-1"
      ></input>
    </BaseInputWrapper>
  );
}

function SelectInput({ title, name, items, description }) {
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomSelect items={items} name={name} />
    </BaseInputWrapper>
  );
}

function TagInput({ title, name, description, tagList }) {
  function onFetch(input) {
    let filtered = tagList.filter((item) => item.startsWith(input));
    return filtered;
  }
  return (
    <BaseInputWrapper title={title} description={description}>
      <CustomTagInput
        name={name}
        onFetchCallback={(input) => onFetch(input)}
        delay={0}
      />
    </BaseInputWrapper>
  );
}

function CheckInput({ title, name, description }) {
  return (
    <div className="flex gap-1">
      <label className="flex items-center" htmlFor={name}>
        <input
          className="opacity-0 w-0 h-0 peer"
          type={"checkbox"}
          id={name}
          name={name}
        ></input>
        <CheckIcon className="flex-none w-5 h-5 text-primary absolute opacity-0 scale-0 peer-checked:scale-100 peer-checked:opacity-100 transition" />
        <div className="flex-none w-5 h-5 border-2 border-light rounded peer-checked:border-primary transition peer-focus-visible:ring peer-focus-visible:ring-primary/50"></div>
        <div className="ml-1">{title}</div>
      </label>
    </div>
  );
}
