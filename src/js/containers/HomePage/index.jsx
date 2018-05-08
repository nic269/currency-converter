import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getCurrencyListRequest } from '@redux/actions/currencyListAction';
import * as currencyListSelector from '@redux/selectors/currencyListSelector';

import { Converter } from '@components';

console.log(Converter, 'ConverterConverterConverter');

const regX = /^(\d+)\s{1}([a-zA-Z]{3})\s{1}to\s{1}([a-zA-Z]{3})$/gi;

class HomeContainer extends PureComponent {
  componentDidMount() {
    // this.props.getCurrencyListRequest();
  }

  onChange = (e) => {
    const val = e.currentTarget.value;
    const matches = regX.exec(val);
    console.log(matches, 'matches');
  }
  
  render() {
    console.log(this.props, 'props');
    return (
      <Converter
        onChange={this.onChange}
      />
    );
  }
}

HomeContainer.propTypes = {
  // getCurrencyListRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currencyListData: currencyListSelector.makeSelectData(),
  currencyListError: currencyListSelector.makeSelectError(),
  currencyListLoading: currencyListSelector.makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getCurrencyListRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
