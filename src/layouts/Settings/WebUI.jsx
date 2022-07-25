import React from "react";
import { CheckInput } from "../../components/CheckInput";
import { Input } from "../../components/Input";
import { TextAreaInput } from "../../components/TextAreaInput";
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
export default function WebUI({ settings }) {
  return (
    <div className="flex flex-col gap-3">
      <SettingsSubgroup title={"Address"}>
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
      </SettingsSubgroup>

      <CheckInput
        title={"Use UPnP / NAT-PMP"}
        name={"web_ui_upnp"}
        defaultChecked={settings.web_ui_upnp}
      />
      <SettingsSubgroup title={"Use HTTPS"}>
        <CheckInput
          title={"Use HTTPS"}
          name={"use_https"}
          defaultChecked={settings.use_https}
        />
        <Input
          type={"text"}
          title={"Certificate path"}
          name={"web_ui_https_cert_path"}
          value={settings.web_ui_https_cert_path}
          disabled={!settings.use_https}
        />
        <Input
          type={"text"}
          title={"Key path"}
          name={"web_ui_https_key_path"}
          value={settings.web_ui_https_key_path}
          disabled={!settings.use_https}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Authentication"}>
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
          defaultChecked={settings.bypass_local_auth}
        />
        <CheckInput
          title={"Bypass authentication for clients in whitelisted IP sunbnets"}
          name={"bypass_auth_subnet_whitelist_enabled"}
          defaultChecked={settings.bypass_auth_subnet_whitelist_enabled}
        />
        <TextAreaInput
          title={"IP Subnet whitelist"}
          name={"bypass_auth_subnet_whitelist"}
          value={settings.bypass_auth_subnet_whitelist}
          rows={settings.bypass_auth_subnet_whitelist.split("\n").length}
          disabled={!settings.bypass_auth_subnet_whitelist_enabled}
        />
        <Input
          type={"number"}
          title={"Ban clients after consecutive failtures"}
          name={"web_ui_max_auth_fail_count"}
          value={settings.web_ui_max_auth_fail_count}
        />
        <Input
          type={"number"}
          title={"Ban for (sec)"}
          name={"web_ui_ban_duration"}
          value={settings.web_ui_ban_duration}
        />
        <Input
          type={"number"}
          title={"Session timeout (sec)"}
          name={"web_ui_session_timeout"}
          value={settings.web_ui_session_timeout}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Alternative UI"}>
        <CheckInput
          title={"Use alternative Web UI"}
          name={"alternative_webui_enabled"}
          defaultChecked={settings.alternative_webui_enabled}
        />
        <Input
          type={"text"}
          title={"Web UI path"}
          name={"alternative_webui_path"}
          value={settings.alternative_webui_path}
          disabled={!settings.alternative_webui_enabled}
        />
      </SettingsSubgroup>
      <SettingsSubgroup title={"Security"}>
        <CheckInput
          title={"Enable clickjacking protection"}
          name={"web_ui_clickjacking_protection_enabled"}
          defaultChecked={settings.web_ui_clickjacking_protection_enabled}
        />
        <CheckInput
          title={"Enable CSRF protection"}
          name={"web_ui_csrf_protection_enabled"}
          defaultChecked={settings.web_ui_csrf_protection_enabled}
        />
        <CheckInput
          title={"Enable cookie Secure flag (requires HTTPS)"}
          name={"web_ui_secure_cookie_enabled"}
          defaultChecked={settings.web_ui_secure_cookie_enabled}
          disabled={!settings.use_https}
        />
        <CheckInput
          title={"Enable host headers validation"}
          name={"web_ui_host_header_validation_enabled"}
          defaultChecked={settings.web_ui_host_header_validation_enabled}
        />
        <Input
          type={"text"}
          title={"Server domian"}
          name={"web_ui_domain_list"}
          value={settings.web_ui_domain_list}
          disabled={!settings.web_ui_host_header_validation_enabled}
        />
        <CheckInput
          title={"Use custom HTTP headers"}
          name={"web_ui_use_custom_http_headers_enabled"}
          defaultChecked={settings.web_ui_use_custom_http_headers_enabled}
        />
        <TextAreaInput
          name={"web_ui_custom_http_headers"}
          value={settings.web_ui_custom_http_headers}
          rows={settings.web_ui_custom_http_headers.split("\n").length}
          disabled={!settings.web_ui_use_custom_http_headers_enabled}
        />
      </SettingsSubgroup>
    </div>
  );
}
