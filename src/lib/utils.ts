import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for conditional class composition
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Responsive class generator
 * Creates responsive Tailwind classes with consistent breakpoints
 */
export function responsive(
  base: string,
  variants: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
  }
) {
  const classes = [base];

  if (variants.sm) classes.push(`sm:${variants.sm}`);
  if (variants.md) classes.push(`md:${variants.md}`);
  if (variants.lg) classes.push(`lg:${variants.lg}`);
  if (variants.xl) classes.push(`xl:${variants.xl}`);
  if (variants["2xl"]) classes.push(`2xl:${variants["2xl"]}`);

  return classes.join(" ");
}

/**
 * Spacing utility
 * Generate consistent spacing classes
 */
export function spacing(
  type:
    | "p"
    | "px"
    | "py"
    | "pt"
    | "pb"
    | "pl"
    | "pr"
    | "m"
    | "mx"
    | "my"
    | "mt"
    | "mb"
    | "ml"
    | "mr"
    | "gap",
  values: {
    base?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    "2xl"?: number | string;
  }
) {
  const classes: string[] = [];

  if (values.base !== undefined) classes.push(`${type}-${values.base}`);
  if (values.sm) classes.push(`sm:${type}-${values.sm}`);
  if (values.md) classes.push(`md:${type}-${values.md}`);
  if (values.lg) classes.push(`lg:${type}-${values.lg}`);
  if (values.xl) classes.push(`xl:${type}-${values.xl}`);
  if (values["2xl"]) classes.push(`2xl:${type}-${values["2xl"]}`);

  return classes.join(" ");
}

/**
 * Text size utility
 * Generate consistent text size classes
 */
export function textSize(sizes: {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
}) {
  const classes: string[] = [];

  if (sizes.base) classes.push(`text-${sizes.base}`);
  if (sizes.sm) classes.push(`sm:text-${sizes.sm}`);
  if (sizes.md) classes.push(`md:text-${sizes.md}`);
  if (sizes.lg) classes.push(`lg:text-${sizes.lg}`);
  if (sizes.xl) classes.push(`xl:text-${sizes.xl}`);
  if (sizes["2xl"]) classes.push(`2xl:text-${sizes["2xl"]}`);

  return classes.join(" ");
}
