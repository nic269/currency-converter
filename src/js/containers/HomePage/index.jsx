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
  Header,
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

  componentDidUpdate(prevProps) {
    const {
      currencyListError,
      currencyListData,
      currencyConvertError,
      currencyConvertData,
    } = this.props;
    const {
      currencyConvertLoading: prevCurrencyConvertLoading,
      currencyListLoading: prevCurrencyListLoading,
    } = prevProps;

    if (prevCurrencyConvertLoading) {
      if (currencyConvertError) {
        this.props.showError(currencyConvertError);
      } else if (currencyConvertData && currencyConvertData.error) {
        this.props.showError(currencyConvertData.error.info);
      }
    }

    if (prevCurrencyListLoading) {
      if (currencyListError) {
        this.props.showError(currencyListError);
      } else if (currencyListData && currencyListData.error) {
        this.props.showError(currencyListData.error.info);
      }
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
    const {
      currencyListLoading,
      currencyConvertLoading,
      currencyConvertData,
      currencyListData,
    } = this.props;

    if (currencyListLoading) {
      return <Loading />;
    }

    return (
      <Converter>
        <Header currencyListData={currencyListData} />
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
          !currencyConvertLoading
          && currencyListData && currencyListData.success
          && currencyConvertData && currencyConvertData.success &&
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
  currencyListLoading: PropTypes.bool,
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
  position: 'bottom-right',
  autoClose: 5000,
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
