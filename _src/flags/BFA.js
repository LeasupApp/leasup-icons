import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BFA = forwardRef(
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
          <path fill="#de0000" d="M640 479.6H.4V0H640z"></path>
          <path fill="#35a100" d="M639.6 480H0V240.2h639.6z"></path>
          <path
            fill="#fff300"
            d="m254.6 276.2-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"
          ></path>
        </g>
      </svg>
    );
  }
);

BFA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BFA.displayName = 'BFA';

export default BFA;
