const model = {
  namespace: 'app',
  state: {
    appName: ''
  },
  reducers: {
    async changeName(v) {
      this.setState({
        appName: v
      })
    },
    async reset() {
      this.resetState()
    }
  }
}

export default model