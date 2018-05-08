import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_CURRENCY_LIST } from '@redux/actions/actionTypes';
import {
  getCurrencyListSuccess,
  getCurrencyListFail,
} from '@redux/actions/currencyListAction';
import { getCurrencyListApi } from '@apis/CurrencyListApi';

function* getCurrencyList() {
  try {
    const response = yield call(getCurrencyListApi);
    yield put(getCurrencyListSuccess(response));
  } catch (error) {
    yield put(getCurrencyListFail(error));
  }
}

export default function* currencyListSaga() {
  yield takeLatest(GET_CURRENCY_LIST.REQUEST, getCurrencyList);
}
