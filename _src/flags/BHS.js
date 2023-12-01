import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BHS = forwardRef(
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
            <path fillOpacity=".7" d="M-12 0h640v480H-12z"></path>
          </clippath>
        </defs>
        <g fillRule="evenodd" clipPath="url(#a)" transform="translate(12)">
          <path fill="#fff" d="M968.5 480h-979V1.8h979z"></path>
          <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z"></path>
          <path
            fill="#08ced6"
            d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
          ></path>
          <path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z"></path>
        </g>
      </svg>
    );
  }
);

BHS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BHS.displayName = 'BHS';

export default BHS;