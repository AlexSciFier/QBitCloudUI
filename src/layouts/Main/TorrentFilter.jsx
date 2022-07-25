import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ExclamationIcon,
  FilterIcon,
  PauseIcon,
  PlayIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import React from "react";
import CustomSelect from "../../components/CustomSelect";
import { Input } from "../../components/Input";
import { useTorrentFilter } from "../../context/torrentFilterContext";

export default function TorrentFilter() {
  const { filter, setFilter } = useTorrentFilter();
  const items = [
    {
      name: (
        <div className="flex gap-1 items-center">
          <FilterIcon className="w-5 h-5 text-primary group-hover:text-white" />
          <div>All</div>
        </div>
      ),
      value: "",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <ArrowDownIcon className="w-5 h-5 text-green group-hover:text-white" />
          <div>Downloading</div>
        </div>
      ),
      value: "downloading",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <ArrowUpIcon className="w-5 h-5 text-red group-hover:text-white" />
          <div>Seeding</div>
        </div>
      ),
      value: "uploading",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <CheckIcon className="w-5 h-5 text-green group-hover:text-white" />
          <div>Completed</div>
        </div>
      ),
      value: "pausedUP",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <PlayIcon className="w-5 h-5 text-primary group-hover:text-white" />
          <div>Resumed</div>
        </div>
      ),
      value: "downloading,uploading",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <PauseIcon className="w-5 h-5 text-primary group-hover:text-white" />
          <div>Paused</div>
        </div>
      ),
      value: "pausedUP,pausedDL,queuedUP,queuedDL",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <RefreshIcon className="w-5 h-5 text-amber group-hover:text-white" />
          <div>Checking</div>
        </div>
      ),
      value: "checkingUP,checkingDL,checkingResumeData",
    },
    {
      name: (
        <div className="flex gap-1 items-center">
          <ExclamationIcon className="w-5 h-5 text-red group-hover:text-white" />
          <div>Errored</div>
        </div>
      ),
      value: "error,unknown,missingFiles",
    },
  ];
  return (
    <div className="px-3 flex gap-1 items-center">
      <div className="flex-none basis-40">
        <CustomSelect
          onSelect={(e) =>
            setFilter((prev) => ({
              ...prev,
              states: e.target.value,
            }))
          }
          selectedIndex={items.findIndex(
            (item) => item.value === filter.states
          )}
          items={items}
        />
      </div>

      <div className="flex-1">
        <Input
          type={"text"}
          placeholder={"Search"}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, search: e.target.value }))
          }
        />
      </div>
    </div>
  );
}
