import { fromJS } from 'immutable';
import { GET_CURRENCY_LIST } from '../actions/actionTypes';

const initialState = fromJS({
  currencyList: {
    loading: false,
    data: null,
    error: null,
  }
});

function currencyListReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

export default currencyListReducer;
