import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DJI = forwardRef(
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
            <path fillOpacity=".7" d="M-40 0h682.7v512H-40z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(37.5) scale(.94)"
        >
          <path fill="#0c0" d="M-40 0h768v512H-40z"></path>
          <path fill="#69f" d="M-40 0h768v256H-40z"></path>
          <path fill="#fffefe" d="m-40 0 382.7 255.7L-40 511V0z"></path>
          <path
            fill="red"
            d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
          ></path>
        </g>
      </svg>
    );
  }
);

DJI.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DJI.displayName = 'DJI';

export default DJI;
