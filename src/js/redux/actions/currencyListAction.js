import { GET_CURRENCY_LIST } from './actionTypes';

export const getCurrencyListRequest = () => ({ type: GET_CURRENCY_LIST.REQUEST });
export const getCurrencyListSuccess = data => ({ type: GET_CURRENCY_LIST.SUCCESS, data });
export const getCurrencyListFail = error => ({ type: GET_CURRENCY_LIST.FAILURE, error });
