import { create } from 'zustand'

interface AppState {
  collapsed: boolean
  setCollapsed: () => void
  isDarkMode: boolean
  updateDarkMode: (flag: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  collapsed: false,
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  isDarkMode: false,
  updateDarkMode: (flag: boolean) => set({ isDarkMode: flag })
}))
