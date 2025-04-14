import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'


interface State {
  token: string
  refreshToken: string
  collapsed: boolean
  lang: 'zh',
}


interface Action {
  setToken: (token: State['token']) => void
  setRefreshToken: (refreshToken: State['refreshToken']) => void
  setCollapsed: (collapsed: State['collapsed']) => void
  setLang: (lang: State['lang']) => void
}

export const useGlobalStore = create<State & Action>()(
  devtools(
    persist(
      (set) => {
        return {
          collapsed: false,
          token: '',
          refreshToken: '',
          lang: 'zh',
          setCollapsed: (collapsed: State['collapsed']) => set({ collapsed }),
          setToken: (token: State['token']) => set({ token }),
          setRefreshToken: (refreshToken: State['refreshToken']) => set({ refreshToken }),
          setLang: (lang: State['lang']) => set({ lang })

        }
      },
      {
        name: 'globalStore',
        storage: createJSONStorage(() => localStorage)
      }
    ),
    { name: "globalStore" }
  )
)
