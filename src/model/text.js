
const model = {
  namespace: 'test2',
  state: {
    a: 1,
    b: {
      b1: [1, 2, 3, 4]
    }
  },
  reducers: {
    async add(type) {
      const that = this;
      const { test2 } = that.getState();
      const { a, b } = that.getModelState();
      await that.setState({
        a: a + 1
      })
    },
  }
}

export default model