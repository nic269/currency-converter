import React from 'react';
import PropTypes from 'prop-types';

import ConverterForm from './Converter.form';
import ConverterResult from './Converter.result';

function Converter(props) {
  return (
    <div className="converter">
      {props.children}
    </div>
  );
}

Converter.propTypes = {
  children: PropTypes.node.isRequired,
};

Converter.Form = ConverterForm;
Converter.Result = ConverterResult;

export default Converter;
