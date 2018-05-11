import { GET_CURRENCY_LIST, CURRENCY_CONVERT } from './constants';

export const getCurrencyListRequest = () => ({ type: GET_CURRENCY_LIST.REQUEST });
export const getCurrencyListSuccess = data => ({ type: GET_CURRENCY_LIST.SUCCESS, data });
export const getCurrencyListFail = error => ({ type: GET_CURRENCY_LIST.FAILURE, error });

export const currencyConvertRequest = params => ({ type: CURRENCY_CONVERT.REQUEST, params });
export const currencyConvertSuccess = data => ({ type: CURRENCY_CONVERT.SUCCESS, data });
export const currencyConvertFail = error => ({ type: CURRENCY_CONVERT.FAILURE, error });
