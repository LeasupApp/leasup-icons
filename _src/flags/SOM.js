import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SOM = forwardRef(
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
            <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(80) scale(.9375)"
        >
          <path fill="#40a6ff" d="M-128 0h768v512h-768z"></path>
          <path
            fill="#fff"
            d="M336.5 381.2 254 327.7l-82.1 54 30.5-87.7-82-54.2L222 239l31.4-87.5 32.1 87.3 101.4.1-81.5 54.7 31.2 87.6z"
          ></path>
        </g>
      </svg>
    );
  }
);

SOM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SOM.displayName = 'SOM';

export default SOM;
