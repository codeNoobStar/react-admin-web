// 导入 Ant Design 组件库中的 Spin 组件，用于显示加载中动画
import { Spin } from 'antd'
// 导入 NProgress 库，用于显示页面顶部的进度条
import NProgress from 'nprogress'
// 导入 React 的 useEffect 钩子，用于处理副作用
import { useEffect } from 'react'

/**
 * Loading 组件，用于在页面加载时显示加载动画和进度条。
 *
 * @returns {JSX.Element} 包含加载动画的 JSX 元素。
 */
export const Loading = () => {
  // 使用 useEffect 钩子在组件挂载时启动进度条，并在组件卸载时结束进度条
  useEffect(() => {
    // 启动 NProgress 进度条
    NProgress.start()

    // 返回一个清理函数，在组件卸载时执行
    return () => {
      // 结束 NProgress 进度条
      NProgress.done()
    }
  }, [])

  // 返回包含加载动画的 JSX 元素
  return (
    // 使用 flex 布局将加载动画居中显示
    <div className="flex justify-center">
      {/* 渲染 Ant Design 的 Spin 组件，显示加载中动画 */}
      <Spin />
    </div>
  )
}
