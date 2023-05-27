import { create } from 'zustand'

type actions = {
  incrementCounter: (qty: number) => void
}

type state = {
  counter: number
}

export const userStore = create<state & actions>((set) => ({
  counter: 1,
  incrementCounter: (qty: number) => set((state) => ({ counter: state.counter + qty }))
}))