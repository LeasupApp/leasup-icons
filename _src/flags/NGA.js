import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NGA = forwardRef(
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
          <path fill="#fff" d="M0 0h640v480H0z"></path>
          <path
            fill="#008753"
            d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z"
          ></path>
        </g>
      </svg>
    );
  }
);

NGA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NGA.displayName = 'NGA';

export default NGA;
