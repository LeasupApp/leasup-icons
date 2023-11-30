import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PRI = forwardRef(
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
            <path fillOpacity=".7" d="M-37.3 0h682.7v512H-37.3z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(35) scale(.9375)"
        >
          <path fill="#ed0000" d="M-37.3 0h768v512h-768z"></path>
          <path
            fill="#fff"
            d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z"
          ></path>
          <path fill="#0050f0" d="m-37.3 0 440.7 255.7L-37.3 511V0z"></path>
          <path
            fill="#fff"
            d="M156.4 325.5 109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
          ></path>
        </g>
      </svg>
    );
  }
);

PRI.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PRI.displayName = 'PRI';

export default PRI;
