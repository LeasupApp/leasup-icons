import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RWA = forwardRef(
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
        <path fill="#20603d" d="M0 0h640v480H0z"></path>
        <path fill="#fad201" d="M0 0h640v360H0z"></path>
        <path fill="#00a1de" d="M0 0h640v240H0z"></path>
        <g transform="translate(511 125.4) scale(.66667)">
          <g id="b">
            <path
              id="a"
              fill="#e5be01"
              d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
            ></path>
            <use
              href="#a"
              width="100%"
              height="100%"
              transform="scale(1 -1)"
            ></use>
          </g>
          <use
            href="#b"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          ></use>
          <circle
            r="34.3"
            fill="#e5be01"
            stroke="#00a1de"
            strokeWidth="3.4"
          ></circle>
        </g>
      </svg>
    );
  }
);

RWA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RWA.displayName = 'RWA';

export default RWA;
