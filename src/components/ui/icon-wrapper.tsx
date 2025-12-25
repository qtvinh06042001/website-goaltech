import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function IconWrapper({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary",
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}
