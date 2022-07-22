import React from "react";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

/**
 * @typedef {Object} WebUIProps
 * @property {import("../../api/applicationApi").preferences} settings
 * @property {Function} onChange
 */
/**
 *
 * @param {WebUIProps} param0
 * @returns
 */
export default function Advanced({ settings, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      <Editor value={settings} onChange={onChange} />
    </div>
  );
}
