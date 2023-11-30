import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CIV = forwardRef(
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
          <path fill="#00cd00" d="M426.8 0H640v480H426.8z"></path>
          <path fill="#ff9a00" d="M0 0h212.9v480H0z"></path>
          <path fill="#fff" d="M212.9 0h214v480h-214z"></path>
        </g>
      </svg>
    );
  }
);

CIV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CIV.displayName = 'CIV';

export default CIV;
