import React from "react";
import { CheckInput } from "../../components/CheckInput";
import { Input } from "../../components/Input";

/**
 * @typedef {Object} WebUIProps
 * @property {import("../../api/applicationApi").preferences} settings
 */
/**
 *
 * @param {WebUIProps} param0
 * @returns
 */
export default function WebUI({ settings }) {
  return (
    <div className="flex flex-col gap-1">
      <Input
        type={"text"}
        title={"IP address"}
        name={"web_ui_address"}
        value={settings.web_ui_address}
      />
      <Input
        type={"number"}
        title={"Port"}
        name={"web_ui_port"}
        value={settings.web_ui_port}
      />
      <CheckInput
        title={"Use UPnP / NAT-PMP"}
        name={"web_ui_upnp"}
        value={settings.web_ui_upnp}
      />
      <CheckInput
        title={"Use HTTPS"}
        name={"use_https"}
        value={settings.use_https}
      />
      <Input
        type={"text"}
        title={"Certificate path"}
        name={"web_ui_https_cert_path"}
        value={settings.web_ui_https_cert_path}
      />
      <Input
        type={"text"}
        title={"Key path"}
        name={"web_ui_https_key_path"}
        value={settings.web_ui_https_key_path}
      />
      <Input
        type={"text"}
        title={"Username"}
        name={"web_ui_username"}
        value={settings.web_ui_username}
      />
      <Input
        type={"password"}
        title={"Password"}
        name={"web_ui_password"}
        value={settings.web_ui_password}
      />
      <CheckInput
        title={"Bypass authentication for clients on localhost"}
        name={"bypass_local_auth"}
        value={settings.bypass_local_auth}
      />
    </div>
  );
}
