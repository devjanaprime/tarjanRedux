import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware( watcher );

function* watcher(){
  yield takeEvery( 'getShips', getShips );
}

function* getShips( action ){
  console.log( 'in getShips:', action );
  const response = yield axios.get( 'https://swapi.dev/api/starships' );
  console.log( 'back from GET:', response.data );
  yield put( { type: 'showShips', payload: response.data.results } );
}

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

const shipReducer = ( state=[], action )=>{
  if( action.type === 'showShips' ){
    console.log( 'in shipReducer:', action.payload );
  }
  return state;
} // end shipReducer

// our store
const myStore = createStore(
  combineReducers( { sellReducer, shipReducer }),
  applyMiddleware( sagaMiddleware )
)

sagaMiddleware.run( watcher );

// provide store to app
ReactDOM.render(<Provider store={ myStore }><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
