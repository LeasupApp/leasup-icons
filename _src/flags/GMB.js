import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GMB = forwardRef(
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
            <path fillOpacity=".7" d="M0-48h640v480H0z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(0 48)"
        >
          <path fill="red" d="M0-128h640V85.3H0z"></path>
          <path fill="#fff" d="M0 85.3h640V121H0z"></path>
          <path fill="#009" d="M0 120.9h640V263H0z"></path>
          <path fill="#fff" d="M0 263.1h640v35.6H0z"></path>
          <path fill="#090" d="M0 298.7h640V512H0z"></path>
        </g>
      </svg>
    );
  }
);

GMB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GMB.displayName = 'GMB';

export default GMB;
