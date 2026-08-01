export function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-badge-border
        bg-badge-background
        px-4
        py-2
        text-sm
        font-medium
        text-badge-foreground
      "
    >
      {icon}
      {children}
    </div>
  );
}
