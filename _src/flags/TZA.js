import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TZA = forwardRef(
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
            <path fillOpacity=".7" d="M10 0h160v120H10z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="matrix(4 0 0 4 -40 0)"
        >
          <path fill="#09f" d="M0 0h180v120H0z"></path>
          <path fill="#090" d="M0 0h180L0 120V0z"></path>
          <path d="M0 120h40l140-95V0h-40L0 95v25z"></path>
          <path
            fill="#ff0"
            d="M0 91.5 137.2 0h13.5L0 100.5v-9zM29.3 120 180 19.5v9L42.8 120H29.3z"
          ></path>
        </g>
      </svg>
    );
  }
);

TZA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TZA.displayName = 'TZA';

export default TZA;
