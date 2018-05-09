import { fromJS } from 'immutable';
import { CURRENCY_CONVERT } from '../actions/actionTypes';

const initialState = fromJS({
  loading: false,
  data: null,
  error: null,
});

function currencyConvertReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENCY_CONVERT.REQUEST:
      return state
        .set('loading', true)
        .set('data', null)
        .set('error', null);
    case CURRENCY_CONVERT.SUCCESS:
      return state
        .set('loading', false)
        .set('data', action.data)
        .set('error', null);
    case CURRENCY_CONVERT.FAILURE:
      return state
        .set('loading', false)
        .set('data', null)
        .set('error', action.error);
    default:
      return state;
  }
}

export default currencyConvertReducer;
