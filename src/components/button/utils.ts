// @/components/button/utils.ts
import { cn } from "@/lib/utils";
import { RxArrowTopRight } from "react-icons/rx";

export const btnIcons = [
  { key: "arrow", icon: RxArrowTopRight },
];

export const btnStyles = {
  base: cn("border transition-all font-medium flex items-center justify-center gap-2 relative group disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"),
  overflow: cn("overflow-hidden"),

  // Fill variants
  fill: {
    primary: cn("bg-primary text-secondary border-primary hover:bg-secondary hover:text-primary active:bg-primary/80 focus-visible:ring-primary shadow-sm hover:shadow-md active:scale-[0.98]"),
    secondary: cn("bg-secondary text-primary border-secondary hover:bg-primary hover:text-secondary //hover:border-primary active:bg-secondary/80 focus-visible:ring-secondary shadow-sm hover:shadow-md active:scale-[0.98]"),
    accent: cn("bg-accent text-white border-accent hover:bg-primary hover:text-accent active:bg-accent/80 focus-visible:ring-accent shadow-sm hover:shadow-md active:scale-[0.98]"),
    red: cn("bg-red-600 text-white border-red-600 hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-600 shadow-sm hover:shadow-md active:scale-[0.98]"),
  },

  // Outline variants
  outline: {
    primary: cn("bg-transparent text-primary border-primary hover:bg-primary hover:text-secondary active:bg-primary/90 focus-visible:ring-primary"),
    secondary: cn("bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-primary active:bg-secondary/90 focus-visible:ring-secondary"),
    accent: cn("bg-transparent text-accent border-accent hover:bg-accent hover:text-white active:bg-accent/90 focus-visible:ring-accent"),
    red: cn("bg-transparent text-red-600 border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 focus-visible:ring-red-600"),
  },

  // Ghost variants (no border)
  ghost: {
    primary: cn("bg-transparent text-primary border-transparent hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary"),
    secondary: cn("bg-transparent text-secondary border-transparent hover:bg-secondary/10 active:bg-secondary/20 focus-visible:ring-secondary"),
    accent: cn("bg-transparent text-accent border-transparent hover:bg-accent/20 active:bg-accent/20 focus-visible:ring-accent"),
    red: cn("bg-transparent text-red-600 border-transparent hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600 dark:hover:bg-red-950/20 dark:active:bg-red-950/30"),
  },

  // Link variant
  link: {
    primary: cn("bg-transparent text-primary border-transparent underline-on-hover px-0 shadow-none focus-visible:ring-0"),
    secondary: cn("bg-transparent text-secondary border-transparent underline-on-hover px-0 shadow-none focus-visible:ring-0"),
    accent: cn("bg-transparent text-accent border-transparent underline-on-hover px-0 shadow-none focus-visible:ring-0"),
    red: cn("bg-transparent text-red-600 border-transparent underline-on-hover px-0 shadow-none focus-visible:ring-0"),
  },

  size: {
    sm: cn("text-sm py-1.5 px-3 min-h-8"),
    md: cn("text-base py-2 px-4 min-h-10"),
    lg: cn("text-lg py-3 px-6 min-h-12"),
  },

  // Circular size (for rounded-full)
  circular: {
    sm: cn("text-sm p-1.5 size-8"),
    md: cn("text-base p-2 size-10"),
    lg: cn("text-lg p-3 size-12"),
  },

  rounded: {
    sm: cn("rounded-md"),
    md: cn("rounded-lg"),
    lg: cn("rounded-xl"),
    full: cn("rounded-full"),
  },

  badge: cn("relative after:content-[attr(data-badge)] after:animate-pulse after:absolute after:-top-2 after:-right-2 after:bg-red-600 after:text-white after:size-5 after:flex-center after:text-xs after:text-center after:rounded-full"),

  disabled: cn("opacity-50 cursor-not-allowed pointer-events-none"),
  loading: cn("cursor-wait"),
  fullWidth: cn("w-full"),
};
