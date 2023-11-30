import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AUT = forwardRef(
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
          <path fill="#c8102e" d="M640 480H0V320h640zm0-319.9H0V.1h640z"></path>
        </g>
      </svg>
    );
  }
);

AUT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AUT.displayName = 'AUT';

export default AUT;
