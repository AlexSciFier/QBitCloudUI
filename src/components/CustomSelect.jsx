import React, { useCallback, useEffect, useRef, useState } from "react";
import { SelectorIcon } from "@heroicons/react/outline";

export default function CustomSelect({ items, name, selectedIndex = 0 }) {
  const [selected, setSelected] = useState(
    items[selectedIndex] || { name: "", value: "" }
  );
  const [isItemsShow, setIsItemsShow] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isItemsShow && ref.current && !ref.current.contains(e.target)) {
        setIsItemsShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isItemsShow]);

  useEffect(() => {
    setSelected(items[selectedIndex || 0] || { name: "", value: "" });
  }, [items, selectedIndex]);

  function onItemClick(item) {
    setIsItemsShow(false);
    setSelected(item);
  }

  return (
    <div ref={ref} className="relative">
      <input
        type={"hidden"}
        id={name}
        name={name}
        value={selected.value}
      ></input>
      <div
        onClick={() => setIsItemsShow(!isItemsShow)}
        className="flex h-10 gap-1 items-center border border-light rounded px-2 py-1 hover:cursor-pointer select-none"
      >
        <SelectorIcon className="w-5 h-5" />
        {selected.name}
      </div>
      {isItemsShow && (
        <div className="absolute mt-1 z-50 rounded border border-light shadow-lg py-1 bg-white w-full">
          {items.map((item) => (
            <div
              onClick={() => onItemClick(item)}
              className="px-2 py-1 h-8 select-none hover:cursor-pointer hover:bg-primary hover:text-white"
              key={item.value}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
