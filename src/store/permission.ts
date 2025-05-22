import { create } from 'zustand'

interface PermissionState {
  menuList: any[]
  setMenuList: (menuList: any[]) => void
}

export const usePermissionStore = create<PermissionState>((set) => ({
  menuList: [],
  setMenuList: (menuList: any[]) => set({ menuList })
}))
