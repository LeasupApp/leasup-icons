import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const COG = forwardRef(
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
            <path fillOpacity=".7" d="M-79.5 32h640v480h-640z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(79.5 -32)"
        >
          <path fill="#ff0" d="M-119.5 32h720v480h-720z"></path>
          <path fill="#00ca00" d="M-119.5 32v480l480-480h-480z"></path>
          <path fill="red" d="M120.5 512h480V32l-480 480z"></path>
        </g>
      </svg>
    );
  }
);

COG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

COG.displayName = 'COG';

export default COG;
