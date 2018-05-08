import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import currencyListReducer from './currencyListReducer';

const rootReducers = {
  currencyListReducer,
};

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    ...rootReducers,
  });
}
