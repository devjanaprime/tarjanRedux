import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// our reducer
const sellReducer = ( state=0, action )=>{
  console.log( 'in sellReducer:', state, action );
  if( action.type === "sell" ){
    console.log( 'selling item with id:', action.payload );
    state++;
    console.log( 'updated sales count:', state );
    return state;
  }
  return state;
}
// our store
const myStore = createStore(
  sellReducer
)
// provide store to app
ReactDOM.render(<Provider store={ myStore }><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
