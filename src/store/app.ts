import { create } from 'zustand'

interface AppState {
  collapsed: boolean
  setCollapsed: () => void
}

export const useAppStore = create<AppState>((set) => ({
  collapsed: false,
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}))
