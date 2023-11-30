import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const YEM = forwardRef(
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
          <path fill="#fff" d="M0 0h640v472.8H0z"></path>
          <path fill="#f10600" d="M0 0h640v157.4H0z"></path>
          <path d="M0 322.6h640V480H0z"></path>
        </g>
      </svg>
    );
  }
);

YEM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

YEM.displayName = 'YEM';

export default YEM;
