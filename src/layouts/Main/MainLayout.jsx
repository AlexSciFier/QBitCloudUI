import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import LeftPanel from "../LeftPanel/LeftPanel";
import { isMobile } from "react-device-detect";
import TorrentList from "./TorrentList";
import { TorrentFilterProvider } from "../../context/torrentFilterContext";
import { GlobalInfoProvider } from "../../context/globalInfoContext";
import { TorrentListProvider } from "../../context/torrentListContext";
import { CategoriesProvider } from "../../context/categoriesContext";
import { TagsProvider } from "../../context/tagsContext";
import { UpdateDataProvider } from "../../context/updateDataContext";

export default function MainLayout() {
  const [menuOpened, setMenuOpened] = useState(!isMobile);
  let leftMenuTranslate = menuOpened ? "w-5/6" : `-translate-x-full w-0`;
  return (
    <GlobalInfoProvider>
      <TorrentListProvider>
        <CategoriesProvider>
          <TagsProvider>
            <UpdateDataProvider>
              <TorrentFilterProvider>
                <div className="h-screen flex flex-col">
                  <section className="flex flex-1 overflow-hidden divide-light">
                    <section
                      className={
                        "xl:w-1/6 flex-none shadow-lg transition-transform overflow-hidden " +
                        leftMenuTranslate
                      }
                    >
                      <LeftPanel />
                    </section>
                    <section className="flex flex-col flex-1 min-w-0">
                      <Navbar
                        onOpenMenuClick={() => setMenuOpened(!menuOpened)}
                      />
                      <section className="flex-1 p-3 overflow-y-scroll">
                        <TorrentList />
                      </section>
                    </section>
                  </section>
                </div>
              </TorrentFilterProvider>
            </UpdateDataProvider>
          </TagsProvider>
        </CategoriesProvider>
      </TorrentListProvider>
    </GlobalInfoProvider>
  );
}
