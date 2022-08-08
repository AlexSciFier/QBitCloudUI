import React from "react";
import { CogIcon, MenuIcon, PlusIcon } from "@heroicons/react/outline";
import LinkButton from "./LinkButton";
import { useMediaQuery } from "react-responsive";

function HamburgerMenu({ onOpenMenuClick }) {
  return (
    <button
      className="hover:bg-light rounded-full p-1"
      onClick={onOpenMenuClick}
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  );
}

export default function Navbar({ onOpenMenuClick }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return (
    <div className="flex justify-between p-3">
      <div className="flex gap-3 items-center">
        {isMobile && <HamburgerMenu onOpenMenuClick={onOpenMenuClick} />}
      </div>
      <div className="flex gap-3">
        <LinkButton to={"/add"} title={"Add torrent"} icon={<PlusIcon />} />
        <LinkButton to={"/settings"} title={"Settings"} icon={<CogIcon />} />
      </div>
    </div>
  );
}
