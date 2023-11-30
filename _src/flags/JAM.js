import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const JAM = forwardRef(
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
          <path d="m0 0 320 240L0 480zm640 0L320 240l320 240z"></path>
          <path
            fill="#090"
            d="m0 0 320 240L640 0zm0 480 320-240 320 240z"
          ></path>
          <path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z"></path>
          <path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z"></path>
        </g>
      </svg>
    );
  }
);

JAM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JAM.displayName = 'JAM';

export default JAM;
