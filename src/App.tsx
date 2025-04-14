import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/index'
import { ConfigProvider, App as AntdApp } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { useGlobalStore } from './stores/global'
import { useSelector } from './hooks/use-selector'
import { useEffect } from 'react'
import { antdUtil } from '@/utils/antd'

export default function App() {
  const { lang } = useGlobalStore(useSelector(['lang']))

  const { notification, message, modal } = AntdApp.useApp()

  useEffect(() => {
    antdUtil.setMessageInstance(message)
    antdUtil.setNotificationInstance(notification)
    antdUtil.setModalInstance(modal)
  }, [notification, message, modal])

  return (
    <>
      <ConfigProvider componentSize="middle" locale={lang === 'zh' ? zhCN : enUS}>
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </>
  )
}
