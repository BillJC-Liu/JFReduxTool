// 首先得创建store 
// store 中得reducer 绑定的是model中的action 
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createReducer from './createReducer'
import registerAction from './registerAction'

const registerEkko = (modelObj, initState, middlewares) => {
  const model = Object.values(modelObj)
  let bindReducersModels = {};
  let allNamespace = []   // string[]
  // 为每一个reducer 进行封装
  model.forEach(item => {
    if (allNamespace.indexOf(item.namespace) === -1) {
      allNamespace.push(item.namespace)
    } else {
      throw Error(`${item.namespace} is repeat , namespace must be unique`)
    }
    return (bindReducersModels = { ...createReducer(item) })
  })
  const middlewaresArr = middlewares || [];
  const normalDevToolCompose = composeWithDevTools({}); // 浏览器控制台中的redux
  const normalLogger = createLogger({ collapsed: true });
  const endEnhancer = normalDevToolCompose(
    applyMiddleware(normalLogger, ...middlewaresArr)
  );
  // 创建 store
  const store = createStore(
    combineReducers(bindReducersModels), // 所有reducer的集合
    initState,  // 初始值  一般该值为空
    endEnhancer  // 中间件 chunk 中间件
  )

  // 将action 挂在model下 
  // 将model中的reducer的key值注册成action
  registerAction(model, store)

  return store
}

export * from "react-redux";
export { Provider, connect } from "react-redux";
export default registerEkko;