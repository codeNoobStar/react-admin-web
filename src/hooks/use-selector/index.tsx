import { pick } from 'lodash-es'
import { useRef } from 'react'
import { shallow } from 'zustand/shallow'

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Many<T> = T | readonly T[]

/**
 * 创建一个用于从状态对象中选择特定属性的选择器函数。
 * 该函数会比较前后两次选择的属性值，如果没有变化则返回上一次的结果，避免不必要的重新渲染。
 *
 * @template S - 状态对象的类型，必须是一个对象。
 * @template P - 状态对象 S 的键名类型，用于指定要选择的属性。
 * @param {Many<P>} paths - 要选择的属性名，可以是单个属性名或属性名数组。
 * @returns {(state: S) => Pick<S, P>} - 返回一个选择器函数，该函数接受状态对象并返回所选属性。
 */
export function useSelector<S extends object, P extends keyof S>(paths: Many<P>): (state: S) => Pick<S, P> {
  // 使用 useRef 来存储上一次选择的属性值，避免在组件重新渲染时丢失
  const prev = useRef<Pick<S, P>>({} as Pick<S, P>)

  // 返回一个选择器函数，该函数接受状态对象作为参数
  return (state: S) => {
    // 检查状态对象是否存在
    if (state) {
      // 使用 lodash 的 pick 函数从状态对象中选择指定的属性
      const next = pick(state, paths)
      // 使用 zustand 的 shallow 函数进行浅比较，判断前后两次选择的属性值是否相同
      // 如果相同，则返回上一次的结果，避免不必要的重新渲染
      // 如果不同，则更新 prev.current 为新的结果，并返回新结果
      return shallow(prev.current, next) ? prev.current : (prev.current = next)
    }
    // 如果状态对象不存在，则返回上一次的结果
    return prev.current
  }
}
