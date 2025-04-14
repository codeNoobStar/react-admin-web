// 从 React 库中导入 createContext 函数，用于创建上下文对象
import { createContext } from 'react'

/**
 * KeepAliveTabContextType 接口定义了用于管理 KeepAliveTab 操作的上下文类型。
 * 此接口包含了刷新、关闭和关闭其他标签页的函数。
 */
interface KeepAliveTabContextType {
  /**
   * 刷新指定路径的 tab 页面。
   *
   * @param {string} [path] - 可选参数，tab 的路径。如果为空，则刷新当前激活的 tab。
   */
  refreshTab: (path?: string) => void
  /**
   * 关闭指定路径的 tab 页面。
   *
   * @param {string} [path] - 可选参数，tab 的路径。如果为空，则关闭当前激活的 tab。
   */
  closeTab: (path?: string) => void
  /**
   * 关闭除指定路径外的其他所有 tab 页面。
   *
   * @param {string} [path] - 可选参数，tab 的路径。如果为空，则关闭除当前激活 tab 外的其他 tab。
   */
  closeOtherTab: (path?: string) => void
}

/**
 * defaultValue 对象为 KeepAliveTabContext 提供默认的上下文值。
 * 这些默认函数不执行任何操作，仅用于占位。
 */
const defaultValue = {
  // 默认的刷新 tab 函数，不执行任何操作
  refreshTab: () => {},
  // 默认的关闭 tab 函数，不执行任何操作
  closeTab: () => {},
  // 默认的关闭其他 tab 函数，不执行任何操作
  closeOtherTab: () => {}
}

/**
 * KeepAliveTabContext 是一个 React 上下文对象，用于在组件树中共享 KeepAliveTab 操作的函数。
 * 它使用 KeepAliveTabContextType 接口定义的类型，并使用 defaultValue 作为默认值。
 */
export const KeepAliveTabContext = createContext<KeepAliveTabContextType>(defaultValue)
