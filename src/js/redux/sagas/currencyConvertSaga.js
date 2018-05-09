import { call, put, takeLatest } from 'redux-saga/effects';

import { CURRENCY_CONVERT } from '@redux/actions/actionTypes';
import {
  currencyConvertSuccess,
  currencyConvertFail,
} from '@redux/actions/currencyConvertAction';
import { currencyConvertApi } from '@apis/currencyConvertApi';

function* currencyConvert({ params }) {
  try {
    const response = yield call(currencyConvertApi, params);
    yield put(currencyConvertSuccess(response));
  } catch (error) {
    yield put(currencyConvertFail(error));
  }
}

export default function* currencyConvertSaga() {
  yield takeLatest(CURRENCY_CONVERT.REQUEST, currencyConvert);
}
