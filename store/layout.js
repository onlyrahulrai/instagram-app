import { create } from 'zustand'

export const useLayoutStore = create((set) => ({
  open:false,
  setOpen: () => set((state) => ({ open: !state.open })),
}))

 