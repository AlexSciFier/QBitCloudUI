import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import LeftPanel from "../LeftPanel/LeftPanel";
import { isMobile } from "react-device-detect";
import { useMainData } from "../../context/mainDataContext";
import TorrentList from "./TorrentList";

export default function MainLayout() {
  let { mainData, updateMainData } = useMainData();

  console.log(mainData);

  useEffect(() => {
    updateMainData();
  }, []);

  const [menuOpened, setMenuOpened] = useState(!isMobile);
  let leftMenuTranslate = menuOpened ? "" : `-translate-x-full w-0`;
  return (
    <div className="h-screen overflow-hidden">
      <section>
        <Navbar onOpenMenuClick={() => setMenuOpened(!menuOpened)} />
      </section>
      <section className="flex divide-x divide-light h-full">
        <section
          className={
            "transition-transform overflow-hidden " + leftMenuTranslate
          }
        >
          <LeftPanel />
        </section>
        <section className="flex-1 p-3">
          <TorrentList />
        </section>
      </section>
    </div>
  );
}
