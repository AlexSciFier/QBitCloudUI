import { FolderIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useCategories } from "../../../context/categoriesContext";
import { useTorrentFilter } from "../../../context/torrentFilterContext";

export default function Categories() {
  const { categories, updateCategories } = useCategories();
  const [selected, setSelected] = useState();
  const { filter, setFilter } = useTorrentFilter();

  useEffect(() => {
    updateCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectCategory(key) {
    if (key === selected) {
      setSelected(undefined);
      setFilter({ ...filter, category: "" });
      return;
    }
    setSelected(key);
    setFilter({ ...filter, category: key });
  }

  return (
    <div>
      <div className="text-lg">Categories</div>
      <div className="flex flex-col gap-1">
        {Object.entries(categories).map((category) => (
          <CategoryItem
            name={category[1].name}
            key={category[0]}
            selected={category[0] === selected}
            onClick={() => selectCategory(category[0])}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryItem({ name, selected, onClick }) {
  let selectedClass = selected ? "rounded bg-primary text-white" : "";
  return (
    <div
      className={
        "flex gap-1 px-2 py-1 items-center hover:underline hover:cursor-pointer " +
        selectedClass
      }
      onClick={onClick}
    >
      <FolderIcon className="w-4 h-4 flex-none" /> <div>{name}</div>
    </div>
  );
}
