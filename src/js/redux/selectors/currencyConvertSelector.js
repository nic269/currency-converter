import { createSelector } from 'reselect';

const selectCurrencyConvert = state => state.get('currencyConvertReducer');

const makeSelectData = () => createSelector(
  selectCurrencyConvert,
  currencyConvertState => currencyConvertState.get('data'),
);

const makeSelectLoading = () => createSelector(
  selectCurrencyConvert,
  currencyConvertState => currencyConvertState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectCurrencyConvert,
  currencyConvertState => currencyConvertState.get('error'),
);

export {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
};
