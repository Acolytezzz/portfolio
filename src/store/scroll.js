import create from "zustand";

export const useSmoothScroll = create((set) => ({
  scrollTarget: {},
  addScrollTarget: (id, ref) =>
    set((state) => ({
      scrollTarget: { ...state.scrollTarget, [id]: ref },
    })),
  scrollTo: (id) =>
    set((state) => {
      const target = state.scrollTarget[id];
      if (target && target.current) {
        target.current.scrollIntoView({ behavior: "smooth" });
      }
      return {};
    }),
}));
