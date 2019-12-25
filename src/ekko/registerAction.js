
const registerAction = (model, store) => {
	const allModel = Object.values(model)
	// 将每个model 下面的方法都注册成action 
	allModel.forEach(item => {
		if (item.reducers) {
			let reducersKeys = Object.keys(item.reducers)
			item.reducers.getState = () => store.getState();
			item.reducers.getModelState = () => store.getState()[item.namespace];
			item.reducers.setState = (data) => {
				store.dispatch({
					type: `${item.namespace}`,
					payload: data
				})
			}
		}
	})
}

export default registerAction