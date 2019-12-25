import React from 'react'
import { connect } from './ekko'
import testModel from './model/text'

class Index extends React.Component {
  handleChange = async (type) => {
    await testModel.reducers.add(type)
  }

  render() {
    console.log("test props:", this.props);
    return (
      <div>
        计数器的值：{this.props.test2.a}
        <p>
          <button onClick={() => this.handleChange('add')}>+</button>
          <button onClick={() => this.handleChange('odd')}>-</button>
        </p>
      </div>
    )
  }
}

// export default Index;

export default connect(state => {
  console.log("test state:", state);
  return state
})(Index)