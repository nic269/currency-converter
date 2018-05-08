import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

// import { Router, IndexRoute, Route } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

import HomePage from '@containers/HomePage';
import configureStore from './redux/configureStore';
// import AboutContainer from '@containers/AboutContainer';
// import { PageNotFound } from '@components';
import '../styles/styles.scss';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.querySelector('#root')
);
