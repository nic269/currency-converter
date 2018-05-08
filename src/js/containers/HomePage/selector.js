import { createSelector } from 'reselect';

const selectCurrencyList = state => state.get('currencyListReducer');

const makeSelectCurrencyList = () => createSelector(
  selectCurrencyList,
  currencyListState => currencyListState.get('currencyList'),
);

export { makeSelectCurrencyList };
