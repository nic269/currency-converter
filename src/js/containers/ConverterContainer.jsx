import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Converter } from '@components';

const regX = /^(\d{1})\s{1}([a-zA-Z]{3})\s{1}to\s{1}([a-zA-Z]{3})$/gi;

class ConverterContainer extends Component {
  onChange = (e) => {
    const val = e.currentTarget.value;
    const matches = regX.exec(val);
    console.log(matches, 'matches');
  }

  render() {
    return (
      <Converter
        onChange={this.onChange}
      />
    );
  }
}

ConverterContainer.propTypes = {

};

export default ConverterContainer;
