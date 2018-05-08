import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ConverterForm from './Converter.form';

class Converter extends PureComponent {
  render() {
    const {
      onChange,
    } = this.props;

    return (
      <div className="converter">
        <ConverterForm onChange={onChange} />
  
        <div className="converter__result">
          the result
        </div>
      </div>
    );
  }
}

Converter.propTypes = {
  onChange: PropTypes.func,
};

export default Converter;
