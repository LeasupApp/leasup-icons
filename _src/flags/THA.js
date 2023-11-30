import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const THA = forwardRef(
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
          <path fill="#f4f5f8" d="M0 0h640v480H0z"></path>
          <path fill="#2d2a4a" d="M0 162.5h640v160H0z"></path>
          <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z"></path>
        </g>
      </svg>
    );
  }
);

THA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

THA.displayName = 'THA';

export default THA;
