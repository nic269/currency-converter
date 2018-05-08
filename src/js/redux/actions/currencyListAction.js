import { GET_CURRENCY_LIST } from './actionTypes';

export const getCurrencyListRequest = data => ({ type: GET_CURRENCY_LIST.REQUEST, data });
export const getCurrencyListSuccess = data => ({ type: GET_CURRENCY_LIST.SUCCESS, data });
export const getCurrencyListFail = error => ({ type: GET_CURRENCY_LIST.FAILURE, error });
