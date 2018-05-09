import { CURRENCY_CONVERT } from './actionTypes';

export const currencyConvertRequest = params => ({ type: CURRENCY_CONVERT.REQUEST, params });
export const currencyConvertSuccess = data => ({ type: CURRENCY_CONVERT.SUCCESS, data });
export const currencyConvertFail = error => ({ type: CURRENCY_CONVERT.FAILURE, error });
