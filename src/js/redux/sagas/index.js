import { fork, all } from 'redux-saga/effects';

import currencyListSaga from './currencyListSaga';

function* rootSagas() {
  yield all([
    fork(currencyListSaga),
  ]);
}

export default rootSagas;
