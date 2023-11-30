import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SEN = forwardRef(
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
          <path fill="#0b7226" d="M0 0h213.3v480H0z"></path>
          <path fill="#ff0" d="M213.3 0h213.3v480H213.3z"></path>
          <path fill="#bc0000" d="M426.6 0H640v480H426.6z"></path>
        </g>
        <path
          fill="#0b7226"
          d="M342 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3z"
        ></path>
      </svg>
    );
  }
);

SEN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SEN.displayName = 'SEN';

export default SEN;
