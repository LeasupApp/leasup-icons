import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CRI = forwardRef(
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
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#0000b4" d="M0 0h640v480H0z"></path>
          <path fill="#fff" d="M0 75.4h640v322.3H0z"></path>
          <path fill="#d90000" d="M0 157.7h640v157.7H0z"></path>
        </g>
      </svg>
    );
  }
);

CRI.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CRI.displayName = 'CRI';

export default CRI;
