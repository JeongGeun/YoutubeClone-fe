import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import Root from './components/Root';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './components/reducer';

export type RootState = ReturnType<typeof store.getState>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('example'),
);
