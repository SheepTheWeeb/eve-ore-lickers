import { create } from "zustand";

interface UIStore {
  isNavigationOpen: boolean;
  openNavigation: () => void;
  closeNavigation: () => void;
  toggleNavigation: () => void;
}

const initialState = {
  isNavigationOpen: false,
};

const useUIStore = create<UIStore>()((set) => ({
  ...initialState,
  openNavigation: () => set(() => ({ isNavigationOpen: true })),
  closeNavigation: () => set(() => ({ isNavigationOpen: false })),
  toggleNavigation: () =>
    set((state) => ({ isNavigationOpen: !state.isNavigationOpen })),
}));

export { useUIStore };
