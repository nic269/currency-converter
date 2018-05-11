import { fork, all } from 'redux-saga/effects';

import homePageSaga from '@containers/HomePage/saga';

function* rootSagas() {
  yield all([
    fork(homePageSaga),
  ]);
}

export default rootSagas;
