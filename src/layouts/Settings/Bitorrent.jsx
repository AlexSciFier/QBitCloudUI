import React from "react";
import { CheckInput } from "../../components/CheckInput";
import { Input } from "../../components/Input";
import { SelectInput } from "../../components/SelectInput";
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
export default function Bitorrent({ settings }) {
  return (
    <div className="flex flex-col gap-3">
      <SettingsSubgroup title={"Privacy"}>
        <CheckInput
          title={"Enable DHT"}
          name={"dht"}
          defaultChecked={settings.dht}
        />
        <CheckInput
          title={"Enable PeX"}
          name={"pex"}
          defaultChecked={settings.pex}
        />
        <CheckInput
          title={"Enable Local Peer Discovery"}
          name={"lsd"}
          defaultChecked={settings.lsd}
        />
        <SelectInput
          title={"Encription mode"}
          name={"encryption"}
          selectedIndex={settings.encryption}
          items={[
            { name: "Allow encryption", value: 0 },
            { name: "Force encryption", value: 1 },
            { name: "Disable encryption", value: 2 },
          ]}
        />
        <CheckInput
          title={"Enable anonymous mode"}
          name={"anonymous_mode"}
          defaultChecked={settings.anonymous_mode}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Torrent Queueing"}>
        <CheckInput
          title={"Enable torrent queueing"}
          name={"queueing_enabled"}
          defaultChecked={settings.queueing_enabled}
        />
        <Input
          type={"number"}
          title={"Maximum active downloads"}
          name={"max_active_downloads"}
          value={settings.max_active_downloads}
        />
        <Input
          type={"number"}
          title={"Maximum active uploads"}
          name={"max_active_uploads"}
          value={settings.max_active_uploads}
        />
        <Input
          type={"number"}
          title={"Maximum active torrents"}
          name={"max_active_torrents"}
          value={settings.max_active_torrents}
        />
      </SettingsSubgroup>
    </div>
  );
}
