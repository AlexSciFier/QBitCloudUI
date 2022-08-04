import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { toReadableSize } from "../../../utils/helpers";
import { StatusCard } from "./StatusCard";

export function TotalDownloaded() {
  const { globalInfo } = useGlobalInfo();
  return (
    <div className="flex flex-col gap-1">
      <StatusCard
        title={"Downloaded"}
        value={toReadableSize(globalInfo?.alltime_dl)}
        icon={<ArrowSmDownIcon />}
      />
      <StatusCard
        title={"Uploaded"}
        value={toReadableSize(globalInfo?.alltime_ul)}
        icon={<ArrowSmUpIcon />}
      />
    </div>
  );
}
