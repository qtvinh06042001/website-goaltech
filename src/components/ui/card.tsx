import * as React from "react";
import { cn } from "@/lib/utils";

/** Root */

type CardRootProps = React.ComponentProps<"div"> & {
  hoverScale?: number;
};

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  ({ className, hoverScale, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        style={
          hoverScale
            ? {
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }
            : undefined
        }
        className={cn(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          className
        )}
        {...props}
        onMouseEnter={(e) => {
          if (hoverScale) {
            (
              e.currentTarget as HTMLDivElement
            ).style.transform = `scale(${hoverScale})`;
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 10px 20px rgba(0,0,0,0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (hoverScale) {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "";
          }
        }}
      />
    );
  }
);
CardRoot.displayName = "Card";

/** Subcomponents */
const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-header"
    className={cn(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className
    )}
    {...props}
  />
);
Header.displayName = "Card.Header";

const Title = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-title"
    className={cn("leading-none font-semibold", className)}
    {...props}
  />
);
Title.displayName = "Card.Title";

const Description = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);
Description.displayName = "Card.Description";

const Action = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className
    )}
    {...props}
  />
);
Action.displayName = "Card.Action";

const Content = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div data-slot="card-content" className={cn("px-6", className)} {...props} />
);
Content.displayName = "Card.Content";

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-footer"
    className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
    {...props}
  />
);
Footer.displayName = "Card.Footer";

/** Compose to a namespaced component */
export const Card = Object.assign(CardRoot, {
  Header,
  Title,
  Description,
  Content,
  Action,
  Footer,
});
