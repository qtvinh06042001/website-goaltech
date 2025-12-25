import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return <hr className={cn("my-6 border-t border-border", className)} />;
}
