import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NRU = forwardRef(
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
            <path fillOpacity=".7" d="M-54.7 0H628v512H-54.7z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(51.3) scale(.9375)"
        >
          <path fill="#002170" d="M-140 0H884v512H-140z"></path>
          <path fill="#ffb20d" d="M-140 234.1H884V278H-140z"></path>
          <path
            fill="#fff"
            d="m161.8 438-33-33-10.5 45.4-12-45-31.9 34 12.1-45L42 407.9l33-33-45.4-10.6 45-12-34-31.8 45 12L72 288l33 33 10.6-45.4 12 45 31.8-34-12 45 44.5-13.5-33 33 45.4 10.5-45 12 34 32-45-12.2z"
          ></path>
        </g>
      </svg>
    );
  }
);

NRU.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NRU.displayName = 'NRU';

export default NRU;
