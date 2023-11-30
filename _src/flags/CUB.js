import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CUB = forwardRef(
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
            <path fillOpacity=".7" d="M-32 0h682.7v512H-32z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(30) scale(.94)"
        >
          <path fill="#0050f0" d="M-32 0h768v512H-32z"></path>
          <path
            fill="#fff"
            d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
          ></path>
          <path fill="#ed0000" d="m-32 0 440.7 255.7L-32 511V0z"></path>
          <path
            fill="#fff"
            d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
          ></path>
        </g>
      </svg>
    );
  }
);

CUB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CUB.displayName = 'CUB';

export default CUB;
