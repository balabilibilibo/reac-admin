import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PermissionState {
  backMenuList: any[]
  setBackMenuList: (menuList: any[]) => void
}

export const usePermissionStore = create<PermissionState>()(
  persist(
    (set) => ({
      backMenuList: [],
      setBackMenuList: (backMenuList: any[]) => set({ backMenuList })
    }),
    {
      name: 'permission-storage'
    }
  )
)
