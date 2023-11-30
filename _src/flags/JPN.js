import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const JPN = forwardRef(
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
        <defs>
          <clippath id="a">
            <path fillOpacity=".7" d="M-88 32h640v480H-88z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(88 -32)"
        >
          <path fill="#fff" d="M-128 32h720v480h-720z"></path>
          <circle
            cx="523.1"
            cy="344.1"
            r="194.9"
            fill="#bc002d"
            transform="translate(-168.4 8.6) scale(.76554)"
          ></circle>
        </g>
      </svg>
    );
  }
);

JPN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JPN.displayName = 'JPN';

export default JPN;
