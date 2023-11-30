import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CAF = forwardRef(
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
            <path fillOpacity=".7" d="M-12.4 32h640v480h-640z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(12.4 -32)"
        >
          <path fill="#00f" d="M-52 32h719.3v119H-52z"></path>
          <path fill="#ff0" d="M-52 391.6h719.3V512H-52z"></path>
          <path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z"></path>
          <path fill="#fff" d="M-52 151h719.3v120.3H-52z"></path>
          <path fill="red" d="M247.7 32.5h119.9V512H247.7z"></path>
          <path
            fill="#ff0"
            d="m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
          ></path>
        </g>
      </svg>
    );
  }
);

CAF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CAF.displayName = 'CAF';

export default CAF;
