import React from "react";
import { CheckInput } from "../../components/CheckInput";
import { Input } from "../../components/Input";
import { SelectInput } from "../../components/SelectInput";
import SettingsSubgroup from "./SettingsSubgroup";

/**
 * @typedef {Object} WebUIProps
 * @property {import("../../api/applicationApi").preferences} settings
 * @property {Function} onSelectChange
 */
/**
 *
 * @param {WebUIProps} param0
 * @returns
 */
export default function Connection({ settings, onSelectChange }) {
  return (
    <div className="flex flex-col gap-3">
      <SelectInput
        title={"Peer connection protocol"}
        items={[
          { value: 0, name: "TCP and μTP" },
          { value: 1, name: "TCP" },
          { value: 2, name: "μTP" },
        ]}
        onSelect={onSelectChange}
        name={"bittorrent_protocol"}
        selectedIndex={settings.bittorrent_protocol}
      />
      <SettingsSubgroup title={"Listening port"}>
        <Input
          type={"number"}
          title="Port for incoming connections"
          name={"listen_port"}
          value={settings.listen_port}
        />
        <CheckInput
          title={"Use UPnP / NAT-PMP port forwarding"}
          name="upnp"
          defaultChecked={settings.upnp}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Connection limit"}>
        <Input
          title={"Global maximum numbers of connections"}
          name="max_connec"
          value={settings.max_connec}
        />
        <Input
          title={"Maximum numbers of connections per torrent"}
          name="max_connec_per_torrent"
          value={settings.max_connec_per_torrent}
        />
        <Input
          title={"Global maximum numbers of upload slots"}
          name="max_uploads"
          value={settings.max_uploads}
        />
        <Input
          title={"Maximum numbers of upload slots per torrent"}
          name="max_uploads_per_torrent"
          value={settings.max_uploads_per_torrent}
        />
      </SettingsSubgroup>
    </div>
  );
}
