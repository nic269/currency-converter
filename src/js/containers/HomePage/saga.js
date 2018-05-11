import { call, put, takeLatest } from 'redux-saga/effects';

import { getCurrencyListApi } from '@apis/CurrencyListApi';
import { currencyConvertApi } from '@apis/currencyConvertApi';
import { GET_CURRENCY_LIST, CURRENCY_CONVERT } from './constants';
import {
  getCurrencyListSuccess,
  getCurrencyListFail,
  currencyConvertSuccess,
  currencyConvertFail,
} from './actions';

// getCurrencyList
function* getCurrencyList() {
  try {
    const response = yield call(getCurrencyListApi);
    yield put(getCurrencyListSuccess(response));
  } catch (error) {
    yield put(getCurrencyListFail(error));
  }
}

// currencyConvert
function* currencyConvert({ params }) {
  try {
    const response = yield call(currencyConvertApi, params);
    yield put(currencyConvertSuccess(response));
  } catch (error) {
    yield put(currencyConvertFail(error));
  }
}

export default function* homePageSaga() {
  yield takeLatest(CURRENCY_CONVERT.REQUEST, currencyConvert);
  yield takeLatest(GET_CURRENCY_LIST.REQUEST, getCurrencyList);
}
