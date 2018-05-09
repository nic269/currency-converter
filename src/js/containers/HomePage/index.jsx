import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getCurrencyListRequest } from '@redux/actions/currencyListAction';
import * as currencyListSelector from '@redux/selectors/currencyListSelector';
import { currencyConvertRequest } from '@redux/actions/currencyConvertAction';
import * as currencyConvertSelector from '@redux/selectors/currencyConvertSelector';

import {
  Converter,
  Loading,
} from '@components';
import withMessageNotifyHandler from '@HOC/withMessageNotifyHandler';
import { validateConverterInput } from '@utils/helpers';

class HomeContainer extends PureComponent {
  state = {
    converterInputVal: '',
    convertetInputError: false,
  }

  componentDidMount() {
    this.props.getCurrencyListRequest();
  }

  componentDidUpdate() {
    const {
      currencyListError,
      currencyListData,
      currencyConvertError,
      currencyConvertData,
    } = this.props;

    if (currencyListError) {
      this.props.showError(currencyListError);
    } else if (currencyConvertError) {
      this.props.showError(currencyConvertError);
    } else if (currencyListData && currencyListData.error) {
      this.props.showError(currencyListData.error.info);
    } else if (currencyConvertData && currencyConvertData.error) {
      this.props.showError(currencyConvertData.error.info);
    }
  }

  onChange = (e) => {
    const val = e.currentTarget.value;
    this.setState({
      converterInputVal: val,
      convertetInputError: false,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const validation = validateConverterInput(this.state.converterInputVal);

    if (!validation.isValid) {
      this.setState({
        convertetInputError: true,
      }, () => {
        this.props.showError(validation.inValidMsg);
      });
    } else {
      this.props.currencyConvertRequest({
        from: validation.matches[2],
        to: validation.matches[3],
        amount: validation.matches[1],
      });
    }
  }
  
  render() {
    console.log(this.props, 'props');
    const {
      currencyConvertLoading,
      currencyConvertData,
      currencyListData,
    } = this.props;

    return (
      <Converter>
        <Converter.Form
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          converterInputVal={this.state.converterInputVal}
          convertetInputError={this.state.convertetInputError}
        />
        {
          currencyConvertLoading &&
          <Loading inline />
        }
        {
          !currencyConvertLoading && currencyListData && currencyConvertData &&
          <Converter.Result
            currencyListData={currencyListData}
            currencyConvertData={currencyConvertData}
          />
        }
      </Converter>
    );
  }
}

HomeContainer.propTypes = {
  getCurrencyListRequest: PropTypes.func,
  currencyConvertRequest: PropTypes.func,
  showError: PropTypes.func,
  currencyConvertLoading: PropTypes.bool,
  currencyListError: PropTypes.object,
  currencyConvertError: PropTypes.object,
  currencyListData: PropTypes.any,
  currencyConvertData: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  currencyListData: currencyListSelector.makeSelectData(),
  currencyListError: currencyListSelector.makeSelectError(),
  currencyListLoading: currencyListSelector.makeSelectLoading(),
  currencyConvertData: currencyConvertSelector.makeSelectData(),
  currencyConvertError: currencyConvertSelector.makeSelectError(),
  currencyConvertLoading: currencyConvertSelector.makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getCurrencyListRequest,
    currencyConvertRequest,
  }, dispatch)
});

const errorHandlerOptions = {
  position: 'top-center',
  autoClose: 7000,
  hideProgressBar: true,
  closeOnClick: true,
  draggablePercent: 50,
  closeButton: false,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withMessageNotifyHandling = withMessageNotifyHandler(errorHandlerOptions);

export default compose(
  withMessageNotifyHandling,
  withConnect,
)(HomeContainer);
