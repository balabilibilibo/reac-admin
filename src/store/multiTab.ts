import { create } from 'zustand'

type Tab = {
  name: string
  path: string
}

interface MultiTabState {
  tabs: Array<Tab>
  activeTab: string
  setTabs: (tabs: Tab[]) => void
  setActiveTab: (activeTab: string) => void
}

export const useMultiTabStore = create<MultiTabState>((set) => ({
  tabs: [],
  activeTab: '',
  setTabs: (tabs: Tab[]) => set({ tabs }),
  setActiveTab: (activeTab: string) => set({ activeTab })
}))
