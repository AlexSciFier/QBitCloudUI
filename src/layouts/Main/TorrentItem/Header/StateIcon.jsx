import React from "react";
import { TORRENT_STATE } from "../../../../utils/torrentStates";
import { IconTemplate } from "./IconTemplate";

export function StateIcon({ state }) {
  let torrentState = TORRENT_STATE[state];

  return (
    <IconTemplate
      icon={torrentState.icon}
      tooltip={torrentState.description}
      color={torrentState.color}
    />
  );
}
