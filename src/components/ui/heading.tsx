import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export function Heading({
  children,
  className,
  level = 1,
}: {
  children: React.ReactNode;
  className?: string;
  level?: HeadingLevel;
}) {
  const Tag = `h${level}` as `h${HeadingLevel}`;

  return (
    <Tag
      className={cn(
        "scroll-m-20 font-bold tracking-tight",
        level === 1 && "text-4xl",
        level === 2 && "text-3xl",
        level === 3 && "text-2xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
