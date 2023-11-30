import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FRO = forwardRef(
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
            <path fillOpacity=".7" d="M-78 32h640v480H-78z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="0"
          clipPath="url(#a)"
          transform="translate(78 -32)"
        >
          <path fill="#fff" d="M-78 32h663.9v480H-78z"></path>
          <path
            fill="#003897"
            d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z"
          ></path>
          <path
            fill="#d72828"
            d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z"
          ></path>
        </g>
      </svg>
    );
  }
);

FRO.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FRO.displayName = 'FRO';

export default FRO;
