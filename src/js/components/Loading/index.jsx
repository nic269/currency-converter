import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loading = props => (
  <div
    className={classnames({
      lds: true,
      'lds-inline': props.inline,
    })}
  >
    <div
      className={classnames({
        'lds-eclipse': true,
        [props.className]: props.className,
        'lds-large': props.size === 'large',
        'lds-small': props.size === 'small',
      })}
    >
      <div />
    </div>
  </div>
);

Loading.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

export default Loading;
