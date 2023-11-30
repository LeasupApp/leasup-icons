import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const POL = forwardRef(
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
          <path fill="#fff" d="M640 480H0V0h640z"></path>
          <path fill="#dc143c" d="M640 480H0V240h640z"></path>
        </g>
      </svg>
    );
  }
);

POL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

POL.displayName = 'POL';

export default POL;
