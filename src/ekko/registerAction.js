import { allModelInitReducer } from './createReducer'

const registerAction = (model, store) => {
	const allModel = Object.values(model)
	// 将每个model 下面的方法都注册成action 
	allModel.forEach(item => {
		if (item.reducers) {
			const that = item.reducers
			that.getState = () => store.getState();
			that.getModelState = () => store.getState()[item.namespace];
			that.resetState = () => {
				store.dispatch({
					type: `${item.namespace}`,
					payload: allModelInitReducer[item.namespace]
				})
			}
			that.setState = (data) => {
				store.dispatch({
					type: `${item.namespace}`,
					payload: data
				})
			}
		}
	})
}

export default registerAction