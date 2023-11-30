import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ATG = forwardRef(
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
            <path fillOpacity=".7" d="M-79.7 0H603v512H-79.7z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(74.7) scale(.9375)"
        >
          <path fill="#fff" d="M-120 0h763.3v511.5H-120z"></path>
          <path d="M-118.3.6h760.9v216.1h-761z"></path>
          <path fill="#0061ff" d="M21.3 203.2h505V317h-505z"></path>
          <path
            fill="#e20000"
            d="M642.8 1.8V512H262L642.8 1.7zm-761.5 0V512H262L-118.7 1.7z"
          ></path>
          <path
            fill="#ffd600"
            d="M440.4 203.3 364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3h354.3z"
          ></path>
        </g>
      </svg>
    );
  }
);

ATG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ATG.displayName = 'ATG';

export default ATG;
