import React, { useEffect, useState } from "react";
import { useTags } from "../../../context/tagsContext";
import { useTorrentFilter } from "../../../context/torrentFilterContext";

export default function Tags() {
  const { tags, updateTags } = useTags();
  const [selected, setSelected] = useState([]);
  const { filter, setFilter } = useTorrentFilter();

  useEffect(() => {
    updateTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectTag(tag) {
    let arrCopy = [...selected];
    if (arrCopy.includes(tag)) {
      arrCopy = arrCopy.filter((item) => item !== tag);
      setFilter({ ...filter, tags: arrCopy });
      setSelected(arrCopy);
      return;
    }
    arrCopy = [...arrCopy, tag];
    setFilter({ ...filter, tags: arrCopy });
    setSelected(arrCopy);
  }

  return (
    <div>
      <div className="text-lg">Tags</div>
      <div className="flex flex-col gap-1">
        {tags?.map((tag, idx) => (
          <TagItem
            key={tag + idx}
            name={tag}
            selected={selected.includes(tag)}
            onClick={() => selectTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
function TagItem({ name, selected, onClick }) {
  let selectedClass = selected
    ? "rounded bg-gradient-to-r from-primary to-primaryLight text-white"
    : "";
  return (
    <div
      className={
        "hover:underline hover:cursor-pointer px-2 py-1 " + selectedClass
      }
      onClick={onClick}
    >
      #{name}
    </div>
  );
}
