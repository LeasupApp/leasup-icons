import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HUN = forwardRef(
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
          <path fill="#388d00" d="M640 480H0V320h640z"></path>
          <path fill="#d43516" d="M640 160.1H0V.1h640z"></path>
        </g>
      </svg>
    );
  }
);

HUN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HUN.displayName = 'HUN';

export default HUN;
