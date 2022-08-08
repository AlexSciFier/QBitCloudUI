import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import LeftPanel from "../LeftPanel/LeftPanel";
import TorrentList from "./TorrentList";
import { TorrentFilterProvider } from "../../context/torrentFilterContext";
import { GlobalInfoProvider } from "../../context/globalInfoContext";
import { TorrentListProvider } from "../../context/torrentListContext";
import { CategoriesProvider } from "../../context/categoriesContext";
import { TagsProvider } from "../../context/tagsContext";
import { UpdateDataProvider } from "../../context/updateDataContext";
import TorrentFilter from "./TorrentFilter";
import { useMediaQuery } from "react-responsive";

export default function MainLayout() {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const [menuOpened, setMenuOpened] = useState(!isMobile);
  let leftMenuMobile = `fixed z-50 w-96 h-full transition-transform ${
    menuOpened ? "translate-x-0" : "-translate-x-full"
  }`;
  let leftMenuDesktop =
    "flex-none transition-transform overflow-y-hidden shadow-lg dark:shadow-primary";
  return (
    <GlobalInfoProvider>
      <TorrentListProvider>
        <CategoriesProvider>
          <TagsProvider>
            <UpdateDataProvider>
              <TorrentFilterProvider>
                <div className="h-screen flex flex-col dark:bg-dark dark:text-white">
                  <section
                    className={
                      isMobile ? "" : "flex flex-1 overflow-hidden divide-light"
                    }
                  >
                    <div
                      aria-hidden={!menuOpened}
                      className={isMobile ? leftMenuMobile : leftMenuDesktop}
                    >
                      <LeftPanel setMenuOpened={setMenuOpened} />
                    </div>
                    <div className="flex flex-col gap-1 w-full h-screen">
                      <Navbar
                        onOpenMenuClick={() => setMenuOpened(!menuOpened)}
                      />
                      <TorrentFilter />
                      <section className="flex-1 p-3 overflow-y-auto">
                        <TorrentList />
                      </section>
                    </div>
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
