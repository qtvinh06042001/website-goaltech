/**
 * Gradient Presets
 * Reusable gradient configurations used throughout the application
 */

export const gradients = {
  primary: "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]",
  primaryText:
    "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] bg-clip-text text-transparent",
} as const;

export type Gradients = typeof gradients;
