import React from "react";
import { CheckInput } from "../../components/CheckInput";
import { Input } from "../../components/Input";
import SettingsSubgroup from "./SettingsSubgroup";

/**
 * @typedef {Object} WebUIProps
 * @property {import("../../api/applicationApi").preferences} settings
 */
/**
 *
 * @param {WebUIProps} param0
 * @returns
 */
export default function Downloads({ settings }) {
  return (
    <div className="flex flex-col gap-3">
      <CheckInput
        title={"Pre-allocate disk space for all files"}
        name="preallocate_all"
        defaultChecked={settings.preallocate_all}
      />
      <CheckInput
        title={"Appent .!qb extension to incomplete files"}
        name="incomplete_files_ext"
        defaultChecked={settings.incomplete_files_ext}
      />
      <SettingsSubgroup title={"Saving mangement"}>
        <CheckInput
          title={"Enable automatic torrent management"}
          name="auto_tmm_enabled"
          defaultChecked={settings.auto_tmm_enabled}
        />
        <CheckInput
          title={"Relocate torrent when category changed"}
          name="torrent_changed_tmm_enabled"
          defaultChecked={settings.torrent_changed_tmm_enabled}
        />
        <CheckInput
          title={"Relocate torrent when save path changed"}
          name="save_path_changed_tmm_enabled"
          defaultChecked={settings.save_path_changed_tmm_enabled}
        />
        <CheckInput
          title={"Relocate torrent when category save path changed"}
          name="category_changed_tmm_enabled"
          defaultChecked={settings.category_changed_tmm_enabled}
        />
        <Input
          type={"text"}
          title="Default save path"
          name={"save_path"}
          value={settings.save_path}
        />
        <CheckInput
          title={"Use another save path for incomplete torrents"}
          name="temp_path_enabled"
          defaultChecked={settings.temp_path_enabled}
        />
        <Input
          type={"text"}
          title="Default save path for incomplete torrents"
          name={"temp_path"}
          disabled={!settings.temp_path_enabled}
          value={settings.temp_path}
        />
      </SettingsSubgroup>
    </div>
  );
}
