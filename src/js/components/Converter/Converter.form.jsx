import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ConverterForm extends PureComponent {
  render() {
    return (
      <form className="converter__form">
        <div className="converter__inp-wrapper">
          <input
            type="text"
            placeholder="x <symbol-1> to <symbol-2>"
            className="converter__inp-input"
            onChange={this.props.onChange}
          />
        </div>
      </form>
    );
  }
}

ConverterForm.propTypes = {
  onChange: PropTypes.func,
};

export default ConverterForm;
