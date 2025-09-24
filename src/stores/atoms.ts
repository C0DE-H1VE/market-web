import { create } from 'zustand'
import type { User } from '@/types'

// Store para counter usando Zustand
interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

// Store para usuário usando Zustand
interface UserStore {
  user: User
  setUser: (user: User) => void
  login: (name: string, email: string) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: '',
    email: '',
    isLoggedIn: false,
  },
  setUser: (user) => set({ user }),
  login: (name, email) => set({ 
    user: { name, email, isLoggedIn: true } 
  }),
  logout: () => set({ 
    user: { name: '', email: '', isLoggedIn: false } 
  }),
}))
