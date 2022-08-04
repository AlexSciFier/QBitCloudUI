import { ChartPieIcon } from "@heroicons/react/outline";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { toReadableSize } from "../../../utils/helpers";
import { StatusCard } from "./StatusCard";
export function FreeSpace() {
  const { globalInfo } = useGlobalInfo();
  return (
    <div>
      <StatusCard
        title={"Free space"}
        value={toReadableSize(globalInfo?.free_space_on_disk)}
        icon={<ChartPieIcon />}
      />
    </div>
  );
}
