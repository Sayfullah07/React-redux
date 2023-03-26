import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

//state
//store
//dispatch
//reducer

const reducer = (state, action) =>{

  if(action.type === 'change'){
    return 'ppp'
  }
  if(action.type === 'delete'){
    return ''
  }


  return 'aaaaasdsda'
}

const store = createStore(reducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
