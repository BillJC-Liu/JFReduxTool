import registerEkko from './index'

let allModelInitReducer = {}

const createReducer = (model) => {
  if (!model.namespace) throw Error(`namespace is missing `)
  if (!model.state) throw Error(`state is missing in ${model.namespace}`)

  // 目的是将key值 专为reducer 并能输出值
  const defaultReducer = { default: (v, a) => v }
  const { reducers = defaultReducer, namespace = "", state = null } = model;
  // 此方法是 redux中的 combination 。
  const getReducer = (reducers, defaultState) => {
    const reducersList = Object.keys(reducers).map(key => (state, action) => {
      // key 值匹配 则执行该方法 state 为 store 的 state
      if (`${namespace}` === action.type) return { ...state, ...action.payload }
      allModelInitReducer = { ...allModelInitReducer, [model.namespace]: { ...state } };
      return state
    })

    return (_state = defaultState, _action) => {
      // 在combination 中去做action的type 匹配更新对应reducer中的值
      return reducersList.reduce((s, r) => r(s, _action), _state)
    }
  }
  // namespace 作为reducer 的key值
  return {
    [namespace]: getReducer(reducers, state)
  }
}
export { allModelInitReducer }
export default createReducer
