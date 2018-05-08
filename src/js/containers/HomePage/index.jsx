import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getCurrencyListRequest } from '@redux/actions/currencyListAction';
import * as currencyListSelector from '@redux/selectors/currencyListSelector';

class HomeContainer extends PureComponent {
  componentDidMount() {
    this.props.getCurrencyListRequest();
  }
  
  render() {
    console.log(this.props, 'props');
    return (
      <div>
        this is home page
      </div>
    );
  }
}

HomeContainer.propTypes = {
  getCurrencyListRequest: PropTypes.func,
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
