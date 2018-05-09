import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

class ConverterResult extends PureComponent {
  render() {
    const {
      currencyListData,
      currencyConvertData,
    } = this.props;
    const symbols = get(currencyListData, 'symbols', null);
    const amount = get(currencyConvertData, 'query.amount', '');
    const base = get(currencyConvertData, 'query.from', '');
    const target = get(currencyConvertData, 'query.to', '');
    const result = get(currencyConvertData, 'result', '');

    if (!currencyListData || !currencyConvertData) {
      return null;
    }
    return (
      <div className="converter__result">
        <span className="converter__result__base">{amount} {symbols[base]} equals</span>
        <span className="converter__result__target">{result} {symbols[target]}</span>
      </div>
    );
  }
}

ConverterResult.propTypes = {
  currencyListData: PropTypes.any,
  currencyConvertData: PropTypes.any,
};

export default ConverterResult;
