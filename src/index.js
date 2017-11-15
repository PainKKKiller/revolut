import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import App from './comps/App';
import reducers from './reducers';

import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const appStore = createStoreWithMiddleware(reducers);


window.version = "1.0.0";
console.log("version = " + window.version);


  ReactDOM.render(
  <Provider store={ appStore }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , document.querySelector('.game-wrapper'));