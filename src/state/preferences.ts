// @/state/preferences.ts
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreferencesState {
  theme: "light" | "dark" | "system";
  isDark: boolean;
  fontSize: number;

  setTheme: (theme: "light" | "dark" | "system") => void;
  setFontSize: (fontSize: number) => void;
};

const usePreferencesState = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: "system",
      isDark: false,
      fontSize: 16,

      setTheme: (theme: "light" | "dark" | "system") => {
        const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        if (theme === "dark" || isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        set({ theme, isDark });
      },
      setFontSize: (fontSize: number) => {
        set({ fontSize });
        document.documentElement.style.fontSize = `${fontSize}px`;
      },
    }),
    {
      name: "preferences",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        if (!state || typeof window === "undefined") return;
        const isDark = state.theme === "dark" || (state.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        state.isDark = isDark;

        document.documentElement.style.fontSize = `${state.fontSize}px`;
      },
    }
  )
);

export default usePreferencesState;
