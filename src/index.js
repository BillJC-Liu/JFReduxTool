import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerEkko, { Provider } from './ekko'
import * as allModel from './model'
import Test from './test'
const store = registerEkko(allModel)

ReactDOM.render(
  <Provider store={store}>
    <Test />
    <App />
  </Provider>
  , document.getElementById('root'));
