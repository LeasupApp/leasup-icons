import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BVT = forwardRef(
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
            <path fillOpacity=".7" d="M0 0h640v480H0z"></path>
          </clippath>
        </defs>
        <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)">
          <path fill="#fff" d="M-28 0h699.7v512H-28z"></path>
          <path
            fill="#d72828"
            d="M-53-77.8h218.7v276.2H-53zM289.4-.6h381v199h-381zM-27.6 320h190.4v190.3H-27.6zm319.6 2.1h378.3v188.2H292z"
          ></path>
          <path fill="#003897" d="M196.7-25.4H261v535.7h-64.5z"></path>
          <path fill="#003897" d="M-27.6 224.8h698v63.5h-698z"></path>
        </g>
      </svg>
    );
  }
);

BVT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BVT.displayName = 'BVT';

export default BVT;
