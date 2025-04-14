import React, { useCallback, useMemo } from 'react'
import { KeepAliveTabContext } from './tabs-context'

const TabsLayout: React.FC = () => {
  const keepAliveContextValue = useMemo(
    // 包含 closeTab 属性的对象
    () => ({
      closeTab
    }),
    [closeTabs]
  )

  return <KeepAliveTabContext.Provider value={}></KeepAliveTabContext.Provider>
}

export default TabsLayout
