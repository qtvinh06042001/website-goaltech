import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  // thêm `group` để bắt hover, và easing mượt
  "group inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Hiện mũi tên khi hover */
  withArrow?: boolean;
  /** Vị trí mũi tên (mặc định phải) */
  arrowPosition?: "left" | "right";
  /** Tuỳ chọn icon (Lucide) nếu muốn thay mũi tên mặc định */
  arrowIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withArrow = false,
      arrowPosition = "right",
      arrowIcon: ArrowIcon = ArrowRight,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Khối icon: rộng 0 khi bình thường, khi hover mở rộng ra w-4 và trượt icon từ trái -> phải
    const ArrowChunk = (
      <span
        aria-hidden="true"
        className={cn(
          // container của icon: ban đầu w-0, overflow-hidden; khi hover mở rộng ra
          "overflow-hidden w-0 transition-all duration-200 ease-out",
          "group-hover:w-4", // nở thêm 1rem (16px)
          // tạo khoảng cách với text khi có icon xuất hiện
          arrowPosition === "right"
            ? "ml-0 group-hover:ml-2"
            : "mr-0 group-hover:mr-2",
          // canh giữa theo trục dọc
          "flex items-center"
        )}
      >
        <ArrowIcon
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 ease-out",
            // icon trượt từ trái -> phải vào vị trí
            "-translate-x-2 group-hover:translate-x-0",
            // (tuỳ thích) fade-in nhẹ
            "opacity-0 group-hover:opacity-100"
          )}
          strokeWidth={2}
        />
      </span>
    );

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* left arrow */}
        {withArrow && arrowPosition === "left" && ArrowChunk}

        {/* nội dung */}
        <span className="inline-flex items-center">{children}</span>

        {/* right arrow */}
        {withArrow && arrowPosition === "right" && ArrowChunk}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
