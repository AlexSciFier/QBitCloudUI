import React from "react";

export function InputText({ placeholder, value, onChange }) {
  return (
    <input
      className="px-4 py-2 rounded border border-light focus:ring ring-primary outline-none"
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export function InputPassword({ placeholder, value, onChange }) {
  return (
    <input
      className="px-4 py-2 rounded border border-light focus:ring ring-primary outline-none"
      type={"password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
