import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import registerEkko,{ Provider } from './ekko'
import * as allModel from './model'
import Test from './test'
const store = registerEkko(allModel)

ReactDOM.render(
  <Provider store={store}>
    <Test name='JC.Liu' />
  </Provider>
  , document.getElementById('root'));
