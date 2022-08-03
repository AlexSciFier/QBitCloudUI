import {
  ChartPieIcon,
  ClockIcon,
  DocumentIcon,
  DownloadIcon,
  FolderIcon,
  HashtagIcon,
  KeyIcon,
  LinkIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UploadIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Torrents from "../../../../api/torrentsApi";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import {
  toReadableSize,
  toReadableSpeed,
  toReadableTime,
} from "../../../../utils/helpers";
import { TORRENT_STATE } from "../../../../utils/torrentStates";

export default function InfoTab() {
  let { torrentItem } = useTorrentItem();
  const [properties, setProperties] = useState({});

  useEffect(() => {
    Torrents.getProperties(torrentItem.hash).then((res) => {
      setProperties(res);
    });
  }, [torrentItem]);

  return (
    <div className="xl:w-1/2">
      <InfoGroup title={"Transfer"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <TorrentInfoCard icon={<ClockIcon />} name={"ETA"}>
            <div className="text-lg font-medium">
              {toReadableTime(properties.eta)}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<LinkIcon />} name={"Connections"}>
            <div className="text-lg font-medium">
              {properties.nb_connections}
            </div>
            <div className="text-sm text-neutral">
              max. {properties.nb_connections_limit}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<TrendingUpIcon />} name={"Seeds"}>
            <div className="text-lg font-medium">{properties.seeds}</div>
            <div className="text-sm text-neutral">
              max. {properties.seeds_total}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<TrendingDownIcon />} name={"Peers"}>
            <div className="text-lg font-medium">{properties.peers}</div>
            <div className="text-sm text-neutral">
              max. {properties.peers_total}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<DownloadIcon />} name={"Download"}>
            <div className="text-lg font-medium">
              {toReadableSpeed(properties.dl_speed)}
            </div>
            <div className="text-sm text-neutral">
              avg. {toReadableSpeed(properties.dl_speed_avg)}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<UploadIcon />} name={"Upload"}>
            <div className="text-lg font-medium">
              {toReadableSpeed(properties.up_speed)}
            </div>
            <div className="text-sm text-neutral">
              avg. {toReadableSpeed(properties.up_speed_avg)}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<DownloadIcon />} name="Downloaded">
            <div className="text-lg font-medium">
              {toReadableSize(properties.total_downloaded)}
            </div>
            <div className="text-sm text-neutral">
              in this session{" "}
              {toReadableSize(properties.total_downloaded_session)}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<DownloadIcon />} name="Uploaded">
            <div className="text-lg font-medium">
              {toReadableSize(properties.total_uploaded)}
            </div>
            <div className="text-sm text-neutral">
              in this session{" "}
              {toReadableSize(properties.total_uploaded_session)}
            </div>
          </TorrentInfoCard>
        </div>
      </InfoGroup>
      <InfoGroup title={"Information"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <TorrentInfoCard icon={<ChartPieIcon />} name="Size">
            <div className="text-lg font-medium">
              {toReadableSize(properties.total_size)}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<ClockIcon />} name="Added">
            <div className="text-lg font-medium">
              {new Date(properties.addition_date * 1000).toLocaleDateString()}
            </div>
            <div className="">
              {new Date(properties.addition_date * 1000).toLocaleTimeString()}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<ClockIcon />} name="Completed">
            <div className="text-lg font-medium">
              {new Date(properties.completion_date * 1000).toLocaleDateString()}
            </div>
            <div className="">
              {new Date(properties.completion_date * 1000).toLocaleTimeString()}
            </div>
          </TorrentInfoCard>

          <TorrentInfoCard icon={<ViewGridIcon />} name="Pieces">
            <div className="text-lg font-medium">
              {properties.pieces_num} x {toReadableSize(properties.piece_size)}
            </div>
            <div className="text-sm text-neutral">
              have {properties.pieces_have}
            </div>
          </TorrentInfoCard>

          <div className="md:col-span-4 sm:col-span-2 col-span-1">
            <TorrentInfoCard name="Name" icon={<DocumentIcon />}>
              <div className="text-lg font-medium">{torrentItem.name}</div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-4 sm:col-span-2 col-span-1">
            <TorrentInfoCard
              name="State"
              icon={TORRENT_STATE[torrentItem.state].icon}
            >
              <div className="text-lg font-medium">
                {TORRENT_STATE[torrentItem.state].description}
              </div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-4 sm:col-span-2 col-span-1">
            <TorrentInfoCard name="Magnet URL" icon={<LinkIcon />}>
              <div className="text-lg font-medium break-all">
                {torrentItem.magnet_uri}
              </div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-2 sm:col-span-2 col-span-1">
            <TorrentInfoCard name="Category" icon={<FolderIcon />}>
              <div className="text-lg font-medium">{torrentItem.category}</div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-2 sm:col-span-2 col-span-1">
            <TorrentInfoCard name="Tags" icon={<HashtagIcon />}>
              <div className="text-lg font-medium">{torrentItem.tags}</div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-2 sm:col-span-2 col-span-1">
            <TorrentInfoCard icon={<FolderIcon />} name="Save Path">
              <div className="text-lg font-medium truncate">
                {properties.save_path}
              </div>
            </TorrentInfoCard>
          </div>

          <div className="md:col-span-2 sm:col-span-2 col-span-1">
            <TorrentInfoCard name="Hash" icon={<KeyIcon />}>
              <div className="text-lg font-medium break-all">
                {torrentItem.hash}
              </div>
            </TorrentInfoCard>
          </div>
        </div>
      </InfoGroup>
    </div>
  );
}
function TorrentInfoCard({ icon, name, children }) {
  return (
    <div className="h-full flex flex-col gap-1 bg-light/50 dark:bg-light/20 rounded-lg px-4 py-2">
      <div className="flex-1">{children}</div>
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 text-primary flex-none">{icon}</div>
        <div className="truncate">{name}</div>
      </div>
    </div>
  );
}
function InfoGroup({ children, title }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-medium">{title}</div>
      <div className="px-3">{children}</div>
    </div>
  );
}
