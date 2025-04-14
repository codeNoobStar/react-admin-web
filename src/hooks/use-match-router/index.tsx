// 从 react-router-dom 库中导入 useLocation、useMatches 和 useOutlet 钩子
// useLocation 用于获取当前的路由位置信息
// useMatches 用于获取所有匹配的路由信息
// useOutlet 用于获取路由组件实例
import { useLocation, useMatches, useOutlet } from 'react-router-dom'
// 从 react 库中导入 useState 和 useEffect 钩子
// useState 用于创建和管理组件的状态
// useEffect 用于处理副作用，如数据获取、订阅、手动 DOM 操作等
import { useState, useEffect } from 'react'

/**
 * MatchRouteType 接口定义了匹配路由的类型。
 * 包含了菜单标题、对应的 URL、要渲染的子组件、路由路径和可选的图标。
 */
interface MatchRouteType {
  // 菜单名称
  title: string
  // tab对应的url
  pathname: string
  // 要渲染的组件
  children: any
  // 路由，和pathname区别是，详情页 pathname是 /:id，routePath是 /1
  routePath: string
  // 图标
  icon?: string
}

/**
 * useMatchRoute 自定义钩子，用于匹配当前路由并返回相关信息。
 *
 * @returns {MatchRouteType | undefined} - 返回匹配的路由信息，如果没有匹配则返回 undefined。
 */
export function useMatchRoute(): MatchRouteType | undefined {
  // 获取路由组件实例
  const routeRoot = useOutlet()

  // 获取所有路由
  const matches = useMatches()

  // 获取当前 url
  const { pathname } = useLocation()

  // 创建一个状态变量 matchRoute，用于存储匹配的路由信息
  const [matchRoute, setMatchRoute] = useState<MatchRouteType | undefined>()

  /**
   * 监听 pathname 变化，当路由发生变化时，重新匹配并更新匹配的路由信息。
   * 副作用钩子，依赖于 pathname 的变化。
   */
  useEffect(() => {
    // 获取当前匹配的路由，即最后一个匹配的路由
    const lastRoute = matches[matches.length - 1]

    // 如果最后一个匹配的路由没有 handle 属性，则不做任何处理
    if (!lastRoute?.handle) return
    // 更新 matchRoute 状态，设置匹配的路由信息
    setMatchRoute({
      // 从路由的 handle 属性中获取菜单名称
      title: (lastRoute?.handle as any)?.name,
      // 获取当前路由的 pathname
      pathname: lastRoute?.pathname,
      // 要渲染的子组件
      children: routeRoot,
      // 当前的路由路径
      routePath: pathname,
      // 从路由的 handle 属性中获取图标
      icon: (lastRoute?.handle as any)?.icon
    })
  }, [pathname])

  // 返回匹配的路由信息
  return matchRoute
}
