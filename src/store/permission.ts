import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PermissionState {
  menuList: any[]
  setMenuList: (menuList: any[]) => void
}

export const usePermissionStore = create<PermissionState>()(
  persist(
    (set) => ({
      menuList: [],
      setMenuList: (menuList: any[]) => set({ menuList })
    }),
    {
      name: 'permission-storage'
    }
  )
)
