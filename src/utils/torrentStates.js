import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ChartPieIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PauseIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import {
  ArrowCircleUpIcon as ArrowCircleUpIconSolid,
  ArrowCircleDownIcon as ArrowCircleDownIconSolid,
} from "@heroicons/react/solid";

export const TORRENT_STATE = {
  error: {
    description: "Some error occurred, applies to paused torrents",
    color: "text-red",
    icon: <ExclamationCircleIcon />,
  },
  missingFiles: {
    description: "Torrent data files is missing",
    color: "text-red",
    icon: <ExclamationCircleIcon />,
  },
  uploading: {
    description: "Torrent is being seeded and data is being transferred",
    icon: <ArrowCircleUpIcon />,
    color: "text-green",
  },
  pausedUP: {
    description: "Torrent is paused and has finished downloading",
    icon: <CheckCircleIcon />,
    color: "text-green",
  },
  queuedUP: {
    description: "Queuing is enabled and torrent is queued for upload",
    icon: <PauseIcon />,
    color: "text-amber",
  },
  stalledUP: {
    description: "Torrent is being seeded, but no connection were made",
    icon: <ArrowCircleUpIcon />,
    color: "text-amber",
  },
  checkingUP: {
    description: "Torrent has finished downloading and is being checked",
    icon: <CheckCircleIcon />,
    color: "text-green",
  },
  forcedUP: {
    description: "Torrent is forced to uploading and ignore queue limit",
    icon: <ArrowCircleUpIconSolid />,
    color: "text-green",
  },
  allocating: {
    description: "Torrent is allocating disk space for download",
    icon: <ChartPieIcon />,
    color: "text-amber",
  },
  downloading: {
    description: "Torrent is being downloaded and data is being transferred",
    icon: <ArrowCircleDownIcon />,
    color: "text-green",
  },
  metaDL: {
    description:
      "Torrent has just started downloading and is fetching metadata",
    icon: <RefreshIcon />,
    color: "text-amber",
  },
  pausedDL: {
    description: "Torrent is paused and has NOT finished downloading",
    icon: <PauseIcon />,
    color: "text-amber",
  },
  queuedDL: {
    description: "Queuing is enabled and torrent is queued for download",
    icon: <PauseIcon />,
    color: "text-amber",
  },
  stalledDL: {
    description: "Torrent is being downloaded, but no connection were made",
    icon: <ArrowCircleDownIcon />,
    color: "text-amber",
  },
  checkingDL: {
    description: "Same as checkingUP, but torrent has NOT finished downloading",
    icon: <ArrowCircleDownIcon />,
    color: "text-amber",
  },
  forcedDL: {
    description: "Torrent is forced to downloading to ignore queue limit",
    icon: <ArrowCircleDownIconSolid />,
    color: "text-amber",
  },
  checkingResumeData: {
    description: "Checking resume data on qBt startup",
    icon: <RefreshIcon />,
    color: "text-amber",
  },
  moving: {
    description: "Torrent is moving to another location",
    icon: <RefreshIcon />,
    color: "text-amber",
  },
  unknown: {
    description: "Unknown status",
    color: "text-red",
    icon: <ExclamationCircleIcon />,
  },
};
