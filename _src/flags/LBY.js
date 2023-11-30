import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LBY = forwardRef(
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
            <path d="M166.7-20h666.6v500H166.7z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="matrix(.96 0 0 .96 -160 19.2)">
          <path fill="#239e46" d="M0-20h1000v500H0z"></path>
          <path d="M0-20h1000v375H0z"></path>
          <path fill="#e70013" d="M0-20h1000v125H0z"></path>
          <path
            fill="#fff"
            d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
          ></path>
        </g>
      </svg>
    );
  }
);

LBY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LBY.displayName = 'LBY';

export default LBY;
