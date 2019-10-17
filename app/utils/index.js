
export { NavigationActions,StackActions } from 'react-navigation'

export { colors } from './colors'
export { styles } from './styles'

/**
 * 延迟几秒执行
 * @param {*} time 
 */
export const delay = time => new Promise(resolve => setTimeout(resolve, time))

/**
 * 在使用 dva 的dispatch方法时使用
 * @param {*} type 
 */
export const createAction = type => payload => ({
  type,
  payload
})



export const isObject = (obj)=> Object.prototype.toString.call(obj) === '[object Object]'
export const isArrary = (obj)=> Object.prototype.toString.call(obj) === '[object Array]'
export const isString = (obj)=> Object.prototype.toString.call(obj) === '[object String]'