import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ConverterForm extends PureComponent {
  render() {
    return (
      <form
        className="converter__form"
        onSubmit={this.props.onSubmit}
      >
        <div className="converter__inp-wrapper">
          <input
            type="text"
            placeholder="x <symbol-1> to <symbol-2>"
            className={classnames({
              'converter__inp-input': true,
              'converter__inp-input--error': this.props.convertetInputError
            })}
            onChange={this.props.onChange}
            value={this.props.converterInputVal}
          />
          <button type="submit"><i className="icon icon-search" /></button>
        </div>
      </form>
    );
  }
}

ConverterForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  converterInputVal: PropTypes.string,
  convertetInputError: PropTypes.bool,
};

export default ConverterForm;
