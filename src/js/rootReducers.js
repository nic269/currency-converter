import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import homePageReducer from '@containers/HomePage/reducer';

const rootReducers = {
  homePageReducer,
};

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    ...rootReducers,
  });
}
