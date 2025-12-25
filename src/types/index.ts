/**
 * Shared TypeScript Types and Interfaces
 */

// Common Types
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Solution/Product Card Types
export interface SolutionCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Partner Logo Type
export interface PartnerLogo {
  name: string;
  src: string;
  w: number;
  h: number;
}

// Process Step Type
export interface ProcessStep {
  id: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: string;
}

// Tool Item Type
export interface ToolItem {
  icon: string;
  title: string;
}

// File Data Type (for FeaturesSection)
export interface FileData {
  type: "file" | "recording";
  name: string;
}

// Chat Message Type
export interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

// Component Props Types
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps extends SectionProps {
  withHover?: boolean;
}

// Responsive Type
export type Breakpoint = "mobile" | "tablet" | "desktop" | "large";

// Animation Type
export interface AnimationConfig {
  initial?: object;
  animate?: object;
  transition?: object;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}
