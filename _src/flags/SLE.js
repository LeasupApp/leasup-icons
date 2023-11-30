import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SLE = forwardRef(
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
        <g fillRule="evenodd">
          <path fill="#0000cd" d="M0 320.3h640V480H0z"></path>
          <path fill="#fff" d="M0 160.7h640v159.6H0z"></path>
          <path fill="#00cd00" d="M0 0h640v160.7H0z"></path>
        </g>
      </svg>
    );
  }
);

SLE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SLE.displayName = 'SLE';

export default SLE;
