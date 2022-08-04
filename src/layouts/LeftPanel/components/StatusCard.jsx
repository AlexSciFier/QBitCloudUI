export function StatusCard({ title, icon, value }) {
  return (
    <div className="h-full flex flex-col gap-1 bg-light/50 dark:bg-light/20 rounded-lg px-4 py-2">
      {title && <div className="flex-1 text-lg font-medium">{value}</div>}
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 text-primary flex-none">{icon}</div>
        {title ? (
          <div className="truncate">{title}</div>
        ) : (
          <div className="text-lg font-medium">{value}</div>
        )}
      </div>
    </div>
  );
}
