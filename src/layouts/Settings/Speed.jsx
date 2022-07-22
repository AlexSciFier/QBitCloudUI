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
export default function Speed({ settings }) {
  return (
    <div className="flex flex-col gap-3">
      <SettingsSubgroup title={"Global rate limit"}>
        <Input
          type={"number"}
          title="Upload (KiB/s)"
          name={"up_limit"}
          value={settings.up_limit}
          description="-1 - no limit"
        />
        <Input
          type={"number"}
          title="Download (KiB/s)"
          name={"dl_limit"}
          value={settings.dl_limit}
          description="-1 - no limit"
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Alternative rate limit"}>
        <Input
          type={"number"}
          title="Upload (KiB/s)"
          name={"alt_up_limit"}
          value={settings.alt_up_limit}
          description="-1 - no limit"
        />
        <Input
          type={"number"}
          title="Download (KiB/s)"
          name={"alt_dl_limit"}
          value={settings.alt_dl_limit}
          description="-1 - no limit"
        />
        <CheckInput
          title={"Schedule to use alternative rate limits"}
          name="scheduler_enabled"
          defaultChecked={settings.scheduler_enabled}
        />
        <Input
          type={"number"}
          title="From (hours)"
          name={"schedule_from_hour"}
          value={settings.schedule_from_hour}
        />
        <Input
          type={"number"}
          title="From (minutes)"
          name={"schedule_from_min"}
          value={settings.schedule_from_min}
        />
        <Input
          type={"number"}
          title="To (hours)"
          name={"schedule_to_hour"}
          value={settings.schedule_to_hour}
        />
        <Input
          type={"number"}
          title="To (minutes)"
          name={"schedule_to_min"}
          value={settings.schedule_to_min}
        />

        <SelectInput
          title={"Every"}
          items={[
            { value: 0, name: "Day" },
            { value: 1, name: "Weekday" },
            { value: 2, name: "Weekend" },
            { value: 3, name: "Monday" },
            { value: 4, name: "Tuesday" },
            { value: 5, name: "Wednesday" },
            { value: 6, name: "Thursday" },
            { value: 7, name: "Friday" },
            { value: 8, name: "Saturday" },
            { value: 9, name: "Sunday" },
          ]}
          name={"scheduler_days"}
          selectedIndex={settings.scheduler_days}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Rate limits"}>
        <CheckInput
          title={"Apply rate limit to uTP protocol"}
          name="limit_utp_rate"
          defaultChecked={settings.limit_utp_rate}
        />
        <CheckInput
          title={"Apply rate limit to transport overhead"}
          name="limit_tcp_overhead"
          defaultChecked={settings.limit_tcp_overhead}
        />
        <CheckInput
          title={"Apply rate limit to peers on LAN"}
          name="limit_lan_peers"
          defaultChecked={settings.limit_lan_peers}
        />
      </SettingsSubgroup>
    </div>
  );
}
