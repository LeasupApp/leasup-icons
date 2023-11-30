import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PRK = forwardRef(
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
            <path fillOpacity=".7" d="M5 .1h682.6V512H5.1z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(-4.8 -.1) scale(.93768)"
        >
          <path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z"></path>
          <path fill="#3e5698" d="M776 419H-76v92.5h852z"></path>
          <path fill="#c60000" d="M776 397.6H-76V114.4h852z"></path>
          <path fill="#3e5698" d="M776 .6H-76V93h852z"></path>
          <path
            fill="#fff"
            d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"
          ></path>
          <path
            fill="#c40000"
            d="m175.8 270.6-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"
          ></path>
        </g>
      </svg>
    );
  }
);

PRK.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PRK.displayName = 'PRK';

export default PRK;
