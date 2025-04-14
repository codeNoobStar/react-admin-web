import { useLocalStorageState } from 'ahooks'
import { omit } from 'lodash-es'
import { useCallback, useState } from 'react'
import { useMatchRoute } from '../use-match-router'
import { router } from '@/router'

export interface KeepAliveTab {
  title: string
  routePath: string
  key: string
  pathname: string
  icon?: string
  children: React.ReactNode
}

export function useTabs() {
  const [keepAliveTabs, setKeepAliveTabs] = useLocalStorageState<KeepAliveTab[]>('keepAliveTabs', {
    defaultValue: [],
    serializer: (value) => {
      // 把 children 剔除掉，不然会报错
      return JSON.stringify(value.map((item) => omit(item, ['children'])))
    }
  })

  // 当前激活的 tab
  const [activeTabRoutePath, setActiveTabRoutePath] = useState<string>('')

  const matchRoute = useMatchRoute()

  // 关闭 tab
  const closeTab = useCallback(() => {
    ;(routePath: string = activeTabRoutePath || '') => {
      if (!keepAliveTabs?.length) return
      const index = (keepAliveTabs || []).findIndex((k) => k.routePath === routePath)

      const currentAliveTabs = keepAliveTabs[index].routePath === activeTabRoutePath && keepAliveTabs.length > 1
      if (currentAliveTabs) {
        router.navigate(keepAliveTabs[index - 1].routePath)
      } else {
        router.navigate(keepAliveTabs[index + 1]?.routePath)
      }

      keepAliveTabs.splice(index, 1)

      setKeepAliveTabs([...keepAliveTabs])
    }
  }, [activeTabRoutePath])

  return {
    tabs: keepAliveTabs,
    activeTabRoutePath,
    closeTab,
    closeOtherTab,
    refreshTab,
    setTabs: setKeepAliveTabs
  }
}
