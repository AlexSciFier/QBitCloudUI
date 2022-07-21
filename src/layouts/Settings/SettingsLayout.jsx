import React, { useEffect, useState } from "react";
import Application from "../../api/applicationApi";
import PageBody from "../../components/PageBody";
import SettingsBody from "./SettingsBody";
import WebUI from "./WebUI";

export default function SettingsLayout() {
  /**
   * @type {[import("../../api/applicationApi").preferences, React.Dispatch<React.SetStateAction<import("../../api/applicationApi").preferences>>]}
   */
  const [settings, setSettings] = useState();

  useEffect(() => {
    async function fetchSettings() {
      let res = await Application.getPreferences();
      setSettings(res);
    }
    fetchSettings();
  }, []);

  const settingsList = [
    { title: "Behavior", body: <div></div> },
    { title: "Downloads", body: <div></div> },
    { title: "Connection", body: <div></div> },
    { title: "Speed", body: <div></div> },
    { title: "BitTorrent", body: <div></div> },
    { title: "RSS", body: <div></div> },
    { title: "WebUI", body: <WebUI settings={settings} /> },
    { title: "Advanced", body: <div></div> },
    { title: "About", body: <div></div> },
  ];

  return (
    <PageBody title={"Settings"}>
      <div className="flex flex-1 gap-3">
        <div className="flex flex-col w-1/6">
          {settingsList.map((item) => (
            <a
              key={item.title}
              className="px-3 py-1 rounded hover:bg-primary hover:text-white"
              href={`#${item.title.toLocaleLowerCase()}`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <form className="flex-1 flex flex-col gap-3">
          {settingsList.map((item) => (
            <SettingsBody key={item.title} title={item.title}>
              {item.body}
            </SettingsBody>
          ))}
        </form>
      </div>
    </PageBody>
  );
}
