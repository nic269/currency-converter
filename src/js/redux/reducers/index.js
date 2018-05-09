import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import currencyListReducer from './currencyListReducer';
import currencyConvertReducer from './currencyConvertReducer';

const rootReducers = {
  currencyListReducer,
  currencyConvertReducer,
};

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    ...rootReducers,
  });
}
