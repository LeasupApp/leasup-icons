import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FIN = forwardRef(
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
        <path fill="#fff" d="M0 0h640v480H0z"></path>
        <path fill="#002f6c" d="M0 174.5h640v131H0z"></path>
        <path fill="#002f6c" d="M175.5 0h130.9v480h-131z"></path>
      </svg>
    );
  }
);

FIN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FIN.displayName = 'FIN';

export default FIN;
