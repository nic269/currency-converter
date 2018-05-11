import { createSelector } from 'reselect';

const selectHomePage = state => state.get('homePageReducer');

const makeSelectCurrencyListData = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyList', 'data']),
);

const makeSelectCurrencyListLoading = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyList', 'loading']),
);

const makeSelectCurrencyListError = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyList', 'error']),
);

export const makeSelectCurrencyList = {
  loading: makeSelectCurrencyListLoading,
  data: makeSelectCurrencyListData,
  error: makeSelectCurrencyListError,
};

const makeSelectCurrencyConvertData = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyConvert', 'data']),
);

const makeSelectCurrencyConvertLoading = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyConvert', 'loading']),
);

const makeSelectCurrencyConvertError = () => createSelector(
  selectHomePage,
  homePageState => homePageState.getIn(['currencyConvert', 'error']),
);

export const makeSelectCurrencyConvert = {
  loading: makeSelectCurrencyConvertLoading,
  data: makeSelectCurrencyConvertData,
  error: makeSelectCurrencyConvertError,
};

export default {
  makeSelectCurrencyListData,
  makeSelectCurrencyListLoading,
  makeSelectCurrencyListError,
  makeSelectCurrencyConvertData,
  makeSelectCurrencyConvertLoading,
  makeSelectCurrencyConvertError
};
