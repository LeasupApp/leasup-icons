import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ZAF = forwardRef(
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
            <path fillOpacity=".7" d="M-71.9 0h682.7v512H-71.9z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="translate(67.4) scale(.93748)">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path d="M-71.9 407.8V104.4L154 256.1-72 407.8z"></path>
            <path
              fill="#000c8a"
              d="m82.2 512.1 253.6-170.6H696V512H82.2z"
            ></path>
            <path
              fill="#e1392d"
              d="M66 0h630v170.8H335.7S69.3-1.7 66 0z"
            ></path>
            <path
              fill="#ffb915"
              d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192L-72 64z"
            ></path>
            <path
              fill="#007847"
              d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"
            ></path>
            <path
              fill="#fff"
              d="M23 0h59.2l253.6 170.7H696V204H324.3L23 .1zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"
            ></path>
          </g>
        </g>
      </svg>
    );
  }
);

ZAF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZAF.displayName = 'ZAF';

export default ZAF;
