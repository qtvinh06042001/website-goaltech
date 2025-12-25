export const theme = {
  colors: {
    brand: {
      primary: "#1792ED",
      secondary: "#0749AD",
      gradient: {
        start: "#2BA9FA",
        end: "#1851C1",
      },
    },
    text: {
      primary: "#112639",
      secondary: "#7B849F",
      light: "#C2D9FF",
      white: "#FFFFFF",
    },

    // Background Colors
    background: {
      white: "#FFFFFF",
      lightBlue: "#EEF2F8",
      paleBlue: "#F5F8FF",
      ice: "#DEEAFB",
      blue: "#ECF2F8",
    },

    // Border Colors
    border: {
      light: "#CFDBEB",
      white: "#FFFFFF",
      lightBlue: "#F0F3F8",
      blue: "#1792ED0A",
    },

    neutral: {
      1: "#112639",
      2: "#7B849F",
      3: "#CFDBEB",
    },
  },

  spacing: {
    container: {
      xs: "1rem", // 16px
      sm: "1.5rem", // 24px
      md: "2rem", // 32px
      lg: "2.5rem", // 40px
      xl: "3.75rem", // 60px
    },

    section: {
      mobile: "3rem", // 48px
      tablet: "4rem", // 64px
      desktop: "6rem", // 96px
      large: "6.25rem", // 100px
    },

    // Gap Values
    gap: {
      xs: "0.5rem", // 8px
      sm: "0.75rem", // 12px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
    },
  },

  borderRadius: {
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    full: "9999px",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  maxWidth: {
    container: "1520px",
    content: "1005px",
    text: "812px",
    section: "1918px",
  },

  fontSize: {
    // Mobile first approach
    heading: {
      h1: {
        mobile: "1.75rem", // 28px
        tablet: "2.5rem", // 40px
        desktop: "3.5rem", // 56px
      },
      h2: {
        mobile: "1.5rem", // 24px
        tablet: "2rem", // 32px
        desktop: "2.5rem", // 40px
      },
      h3: {
        mobile: "1.25rem", // 20px
        tablet: "1.5rem", // 24px
        desktop: "1.75rem", // 28px
      },
    },
    body: {
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
    },
  },

  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "800ms",
    },
    easing: {
      ease: "ease",
      linear: "linear",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },
} as const;

// Type exports for TypeScript
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeSpacing = typeof theme.spacing;
