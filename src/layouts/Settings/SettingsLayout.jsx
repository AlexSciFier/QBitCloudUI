import {
  ColorSwatchIcon,
  GlobeIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  SwitchVerticalIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import { BsSpeedometer2 } from "react-icons/bs";
import isEmpty from "lodash/isEmpty";
import React, { useEffect, useState } from "react";
import Application from "../../api/applicationApi";
import PageBody from "../../components/PageBody";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

import Bitorrent from "./Bitorrent";
import Connection from "./Connection";
import Downloads from "./Downloads";
import SettingsBody from "./SettingsBody";
import Speed from "./Speed";
import WebUI from "./WebUI";
import { Link, useLocation } from "react-router-dom";
import Theme from "./Theme";
import { useMediaQuery } from "react-responsive";

export default function SettingsLayout() {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const location = useLocation();
  /**
   * @type {[import("../../api/applicationApi").preferences, React.Dispatch<React.SetStateAction<import("../../api/applicationApi").preferences>>]}
   */
  const [settings, setSettings] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = React.useState([
    { id: 0, text: "", level: 0 },
  ]);
  /**
   * @type {[import("../../api/applicationApi").preferences, React.Dispatch<React.SetStateAction<import("../../api/applicationApi").preferences>>]}
   */
  const [changed, setChanged] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  async function fetchSettings() {
    let res = await Application.getPreferences();
    setSettings(res);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchSettings();
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h1, h2"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, [settings]);

  useEffect(() => {
    let id = decodeURI(location.hash.substring(1));
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [location]);

  function handleFormChange(e) {
    let key = e.target.name;
    let type = e.target.type;
    let value = type === "checkbox" ? e.target.checked : e.target.value;
    setSettings((prev) => ({ ...prev, [key]: value }));
    setChanged((prev) => ({ ...prev, [key]: value }));
  }

  if (isLoading)
    return (
      <PageBody title={"Settings"}>
        <div className="text-xl text-center">Loading settings...</div>
      </PageBody>
    );

  return (
    <PageBody title={"Settings"}>
      <div className="flex flex-1 gap-3 flex-col md:flex-row">
        <div className="flex flex-row overflow-x-auto w-full gap-3 md:gap-0 md:flex-col md:w-2/6 overflow-hidden sticky top-14 self-start z-10 bg-white dark:bg-dark">
          {headings?.map((item) => (
            <Link
              key={item.id}
              className={
                "px-1 py-1 rounded hover:bg-primary hover:text-white whitespace-nowrap"
              }
              style={{
                marginLeft: `${item.level - 1}rem`,
                display: `${isMobile && item.level > 1 ? "none" : "block"}`,
              }}
              to={`/settings#${item.id}`}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div>
          <SettingsBody icon={<ColorSwatchIcon />} title={"Theme"}>
            <Theme />
          </SettingsBody>
          <form
            className="flex-1 flex flex-col gap-12 mt-12"
            onChange={handleFormChange}
          >
            <SettingsBody icon={<SwitchVerticalIcon />} title={"Downloads"}>
              <Downloads settings={settings} />
            </SettingsBody>
            <SettingsBody icon={<WifiIcon />} title={"Connection"}>
              <Connection
                settings={settings}
                onSelectChange={handleFormChange}
              />
            </SettingsBody>
            <SettingsBody icon={<BsSpeedometer2 size={32} />} title={"Speed"}>
              <Speed settings={settings} />
            </SettingsBody>
            <SettingsBody icon={<ShareIcon />} title={"BitTorrent"}>
              <Bitorrent
                settings={settings}
                onSelectChange={handleFormChange}
              />
            </SettingsBody>
            <SettingsBody icon={<GlobeIcon />} title={"WebUI"}>
              <WebUI settings={settings} />
            </SettingsBody>
            <SettingsBody icon={<QuestionMarkCircleIcon />} title={"About"}>
              <div>About</div>
            </SettingsBody>
          </form>
        </div>
      </div>
      {isEmpty(changed) === false && (
        <UnsavedChangesPopup
          isSaving={isSaving}
          onUndo={() => {
            setChanged({});
            fetchSettings();
          }}
          onSave={() => {
            setIsSaving(true);
            Application.setPreferences(changed).then((res) => {
              setChanged({});
              fetchSettings();
              setIsSaving(false);
            });
          }}
        />
      )}
    </PageBody>
  );
}

function UnsavedChangesPopup({ onUndo, onSave, isSaving }) {
  return (
    <div className="sticky bottom-3 flex justify-between items-center bg-white dark:bg-dark dark:border dark:border-neutral py-1 px-3 rounded-md shadow-md">
      <div>Unsaved changes</div>
      <div className="flex gap-3">
        <SecondaryButton onClick={onUndo}>Undo</SecondaryButton>
        <PrimaryButton isLoading={isSaving} onClick={onSave}>
          {isSaving ? "Saving" : "Save"}
        </PrimaryButton>
      </div>
    </div>
  );
}
