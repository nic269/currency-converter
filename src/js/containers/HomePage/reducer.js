import { fromJS } from 'immutable';
import { GET_CURRENCY_LIST, CURRENCY_CONVERT } from './constants';

const initialState = fromJS({
  currencyList: {
    loading: false,
    data: null,
    error: null,
  },
  currencyConvert: {
    loading: false,
    data: null,
    error: null,
  }
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_LIST.REQUEST:
      return state
        .setIn(['currencyList', 'loading'], true)
        .setIn(['currencyList', 'data'], null)
        .setIn(['currencyList', 'error'], null);
    case GET_CURRENCY_LIST.SUCCESS:
      return state
        .setIn(['currencyList', 'loading'], false)
        .setIn(['currencyList', 'data'], action.data)
        .setIn(['currencyList', 'error'], null);
    case GET_CURRENCY_LIST.FAILURE:
      return state
        .setIn(['currencyList', 'loading'], false)
        .setIn(['currencyList', 'data'], null)
        .setIn(['currencyList', 'error'], action.error);

    case CURRENCY_CONVERT.REQUEST:
      return state
        .setIn(['currencyConvert', 'loading'], true)
        .setIn(['currencyConvert', 'data'], null)
        .setIn(['currencyConvert', 'error'], null);
    case CURRENCY_CONVERT.SUCCESS:
      return state
        .setIn(['currencyConvert', 'loading'], false)
        .setIn(['currencyConvert', 'data'], action.data)
        .setIn(['currencyConvert', 'error'], null);
    case CURRENCY_CONVERT.FAILURE:
      return state
        .setIn(['currencyConvert', 'loading'], false)
        .setIn(['currencyConvert', 'data'], null)
        .setIn(['currencyConvert', 'error'], action.error);
    default:
      return state;
  }
}

export default homePageReducer;
