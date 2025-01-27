import { create } from 'zustand'

interface State {
  isSideMenuOpen: boolean
}

interface Actions {
  openSideMenu: () => void
  closeSideMenu: () => void
}

export const useUIStore = create<State & Actions>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));