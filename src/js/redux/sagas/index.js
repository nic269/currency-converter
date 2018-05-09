import { fork, all } from 'redux-saga/effects';

import currencyListSaga from './currencyListSaga';
import currencyConvertSaga from './currencyConvertSaga';

function* rootSagas() {
  yield all([
    fork(currencyListSaga),
    fork(currencyConvertSaga),
  ]);
}

export default rootSagas;
