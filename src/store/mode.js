import create from "zustand";

export const useToggleDarkMode = create((set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
}));


