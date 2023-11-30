import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ISL = forwardRef(
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
        <g fillRule="evenodd" strokeWidth="0" clipPath="url(#a)">
          <path fill="#003897" d="M0 0h666.7v480H0z"></path>
          <path
            fill="#fff"
            d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7z"
          ></path>
          <path
            fill="#d72828"
            d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4z"
          ></path>
        </g>
      </svg>
    );
  }
);

ISL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ISL.displayName = 'ISL';

export default ISL;
