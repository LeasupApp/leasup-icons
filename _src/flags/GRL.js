import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GRL = forwardRef(
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
        <path
          fill="#d00c33"
          d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0"
        ></path>
      </svg>
    );
  }
);

GRL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GRL.displayName = 'GRL';

export default GRL;
