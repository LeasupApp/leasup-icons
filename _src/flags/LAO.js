import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LAO = forwardRef(
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
            <path fillOpacity=".7" d="M0 0h640v480H0z"></path>
          </clippath>
        </defs>
        <g fillRule="evenodd" clipPath="url(#a)">
          <path fill="#ce1126" d="M-40 0h720v480H-40z"></path>
          <path fill="#002868" d="M-40 119.3h720v241.4H-40z"></path>
          <path
            fill="#fff"
            d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0z"
          ></path>
        </g>
      </svg>
    );
  }
);

LAO.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LAO.displayName = 'LAO';

export default LAO;
