import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CZE = forwardRef(
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
        <path fill="#fff" d="M0 0h640v240H0z"></path>
        <path fill="#d7141a" d="M0 240h640v240H0z"></path>
        <path fill="#11457e" d="M360 240 0 0v480z"></path>
      </svg>
    );
  }
);

CZE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CZE.displayName = 'CZE';

export default CZE;
