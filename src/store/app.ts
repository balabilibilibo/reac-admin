import { create } from 'zustand'

interface AppState {
  collapsed: boolean
  setCollapsed: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const useAppStore = create<AppState>((set) => ({
  collapsed: false,
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))
