import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const withMessageNotifyHandler = options => (WrappedComponent) => {
  class WithMessageNotifyHandlerComponent extends Component {
    showError = (message) => {
      toast.error(message);
    }

    showWarning = (message) => {
      toast.warn(message);
    }

    showInfo = (message) => {
      toast.info(message);
    }

    showSuccess = (message) => {
      toast.success(message);
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent
            {...this.props}
            showError={this.showError}
            showWarning={this.showWarning}
            showInfo={this.showInfo}
            showSuccess={this.showSuccess}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            draggablePercent={60}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            {...options}
          />
        </React.Fragment>
      );
    }
  }

  return WithMessageNotifyHandlerComponent;
};

export default withMessageNotifyHandler;
