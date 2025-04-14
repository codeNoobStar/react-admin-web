import { useGlobalStore } from '@/stores/global'
import { defaultSetting } from '@/default-setting'
import SlideMenu from './menu'

function SlideIndex() {
  const { collapsed } = useGlobalStore()

  function renderMenu() {
    return <SlideMenu />
  }

  return (
    <div
      style={{ width: collapsed ? defaultSetting.collapsedSlideWidth : defaultSetting.slideWidth }}
      className="menu-slide bg-transparent transition-all top-header fixed box-border left-0 bottom-0 overflow-y-auto
      px-[16px] max-md:hidden">
      {renderMenu()}
    </div>
  )
}

export default SlideIndex
