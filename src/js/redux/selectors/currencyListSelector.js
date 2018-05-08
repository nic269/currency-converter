import { createSelector } from 'reselect';

const selectCurrencyList = state => state.get('currencyListReducer');

const makeSelectData = () => createSelector(
  selectCurrencyList,
  currencyListState => currencyListState.getIn(['currencyList', 'data']),
);

const makeSelectLoading = () => createSelector(
  selectCurrencyList,
  currencyListState => currencyListState.getIn(['currencyList', 'loading']),
);

const makeSelectError = () => createSelector(
  selectCurrencyList,
  currencyListState => currencyListState.getIn(['currencyList', 'error']),
);

export {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
};
