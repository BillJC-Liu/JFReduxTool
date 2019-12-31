import React from 'react'
import { connect } from './ekko'
import AppModel from './model/app'

const Index = (props) => {
  return (
    <div>
      <h1>App</h1>
      <input type="text" onChange={e => AppModel.reducers.changeName(e.target.value)} />
      <p>这时我的app名字：{props.appName}</p>
      <p><button onClick={() => AppModel.reducers.reset()} >重置</button></p>
    </div>
  )
}

export default connect(state => {
  return {
    appName: state.app.appName
  }
})(Index)