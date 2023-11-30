import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const JOR = forwardRef(
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
            <path fillOpacity=".7" d="M-117.8 0h682.6v512h-682.6z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="translate(110.5) scale(.9375)">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path d="M-117.8 0h1024v170.7h-1024z"></path>
            <path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z"></path>
            <path fill="#090" d="M-117.8 341.3h1024V512h-1024z"></path>
            <path fill="red" d="m-117.8 512 512-256-512-256v512z"></path>
            <path
              fill="#fff"
              d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
            ></path>
          </g>
        </g>
      </svg>
    );
  }
);

JOR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JOR.displayName = 'JOR';

export default JOR;
