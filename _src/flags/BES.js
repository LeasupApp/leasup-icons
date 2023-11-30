import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BES = forwardRef(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={(size * 3) / 4}
        viewBox="0 0 640 480"
        className="flag-icon"
        {...rest}
      >
        <path fill="#21468b" d="M0 0h640v480H0z"></path>
        <path fill="#fff" d="M0 0h640v320H0z"></path>
        <path fill="#ae1c28" d="M0 0h640v160H0z"></path>
      </svg>
    );
  }
);

BES.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BES.displayName = 'BES';

export default BES;
