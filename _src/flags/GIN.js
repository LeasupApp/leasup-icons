import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GIN = forwardRef(
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
          <path fill="red" d="M0 0h213.3v480H0z"></path>
          <path fill="#ff0" d="M213.3 0h213.4v480H213.3z"></path>
          <path fill="#090" d="M426.7 0H640v480H426.7z"></path>
        </g>
      </svg>
    );
  }
);

GIN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GIN.displayName = 'GIN';

export default GIN;