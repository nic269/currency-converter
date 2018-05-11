import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Application from '@containers/Application';
import '@styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';

import configureStore from './configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
