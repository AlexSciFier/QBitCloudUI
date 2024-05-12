import React from "react";
import Categories from "./components/Categories";
import GlobalInfo from "./components/GlobalInfo";
import Tags from "./components/Tags";
import { useMediaQuery } from "react-responsive";
import { XIcon } from "@heroicons/react/outline";

export default function LeftPanel({ setMenuOpened }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 1440px)",
  });
  return (
    <>
      {isMobile && (
        <div className="flex justify-end sticky p-3 top-0 bg-white dark:bg-dark">
          <XIcon
            className="w-6 h-6 rounded-full p-1 hover:bg-light"
            onClick={() => setMenuOpened(false)}
          />
        </div>
      )}
      <div className="p-3 h-full flex flex-col gap-3 overflow-y-auto overflow-x-hidden flex-1 bg-white dark:bg-dark">
        <GlobalInfo />
        <Categories />
        <Tags />
      </div>
    </>
  );
}
