import React from 'react'
import { connect } from './ekko'
import testModel from './model/text'

class Index extends React.Component {
  handleChange = async (type) => {
    await testModel.reducers.add(type)
  }
  render() {
    return (
      <div>
        计数器的值：{this.props.test2.a}
        <p>
          <button onClick={() => this.handleChange('add')}>+</button>
          <button onClick={() => this.handleChange('odd')}>-</button>
        </p>
        <p>
          <button onClick={() => testModel.reducers.resetState()} >重置当前model的redux值</button>
        </p>
      </div>
    )
  }
}

export default connect(state => {
  console.log("test state:", state);
  return state
})(Index)