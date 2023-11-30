import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MLI = forwardRef(
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
          <path fill="red" d="M425.8 0H640v480H425.7z"></path>
          <path fill="#009a00" d="M0 0h212.9v480H0z"></path>
          <path fill="#ff0" d="M212.9 0h214v480h-214z"></path>
        </g>
      </svg>
    );
  }
);

MLI.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MLI.displayName = 'MLI';

export default MLI;
