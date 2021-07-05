import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './normalize.scss';
import './index.scss';
import store from './store/configStore';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main/>
      <Details/>
      <Add/>
      <Edit/>
      <Sign-In/>
      <Sign-Up/>
      <Not-Found/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
