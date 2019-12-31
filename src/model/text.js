import { reset } from "ansi-colors";

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
      let data = type === 'add'? a+1 : a-1
      await that.setState({
        a:  data
      })
    },
    async reset(){
      console.log("resetresetresetresetresetreset");
      this.resetState()
    }
  }
}

export default model