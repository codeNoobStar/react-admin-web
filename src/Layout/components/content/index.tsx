import { defaultSetting } from '@/default-setting'
import { useSelector } from '@/hooks/use-selector'
import { useGlobalStore } from '@/stores/global'
import classnames from 'classnames'
import { Suspense } from 'react'
import { Loading } from '@/components/Loading'
import { Outlet } from 'react-router-dom'

function Content() {
  // const isPC = use

  const { collapsed } = useGlobalStore(useSelector('collapsed'))

  const ClassName = classnames('transition-all mt-header bg-[var(--ant-color-bg-container)]  rounded-lg')

  const Style = {
    marginLeft: collapsed ? defaultSetting.collapsedSlideWidth : defaultSetting.slideWidth,
    // minHeight: `calc(100vh - ${defaultSetting.headerHeight}px)`,
    minHeight: `calc(100vh)`,
    width: `calc(100vw - ${collapsed ? defaultSetting.collapsedSlideWidth : defaultSetting.slideWidth}px)`
  }

  return (
    <>
      <div className={ClassName} style={Style}>
        <div className="m-0 rounded-md z-1 p-[0px]">
          <Suspense fallback={<Loading />}>{<Outlet />}</Suspense>
        </div>
      </div>
    </>
  )
}

export default Content
