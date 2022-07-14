import React from "react";
import CustomSelect from "../../components/CustomSelect";

export default function AddTorrentLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <form className="lg:w-1/4 flex flex-col gap-1 rounded-xl shadow-xl border border-light p-4">
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
        <SelectInput
          title="Category"
          name="category"
          items={["Item1", "Item2", "Item3"]}
        />
      </form>
    </div>
  );
}

// cookie             optional	string	Cookie sent to download the .torrent file
// category           optional	string	Category for the torrent
// tags               optional	string	Tags for the torrent, split by ','
// skip_checking      optional	string	Skip hash checking. Possible values are true, false (default)
// paused             optional	string	Add torrents in the paused state. Possible values are true, false (default)
// root_folder        optional	string	Create the root folder. Possible values are true, false, unset (default)
// rename             optional	string	Rename torrent
// upLimit            optional	integer	Set torrent upload speed limit. Unit in bytes/second
// dlLimit            optional	integer	Set torrent download speed limit. Unit in bytes/second
// ratioLimit         optional 	float	  Set torrent share ratio limit
// seedingTimeLimit   optional 	integer	Set torrent seeding time limit. Unit in seconds
// autoTMM            optional	bool	  Whether Automatic Torrent Management should be used
// sequentialDownload optional	string	Enable sequential download. Possible values are true, false (default)
// firstLastPiecePrio optional	string	Prioritize download first last piece. Possible values are true, false (default)

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
      <CustomSelect items={items} onItemSelect={(item) => console.log(item)} />
    </BaseInputWrapper>
  );
}
