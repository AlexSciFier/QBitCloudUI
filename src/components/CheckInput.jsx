import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

export function CheckInput({ title, name, defaultChecked, onChange }) {
  function onChangeHandler(e) {
    if (onChange) onChange(e);
  }
  return (
    <div className="flex gap-1">
      <label className="flex items-center" htmlFor={name}>
        <input
          className="opacity-0 w-0 h-0 peer"
          type={"checkbox"}
          id={name}
          name={name}
          checked={defaultChecked}
          onChange={onChangeHandler}
        />
        <CheckIcon className="flex-none w-5 h-5 text-primary absolute opacity-0 scale-0 peer-checked:scale-100 peer-checked:opacity-100 transition" />
        <div className="flex-none w-5 h-5 border-2 border-light rounded peer-checked:border-primary transition peer-focus-visible:ring peer-focus-visible:ring-primary/50"></div>
        <div className="ml-1">{title}</div>
      </label>
    </div>
  );
}
