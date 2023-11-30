import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PLW = forwardRef(
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
            <path fillOpacity=".7" d="M-70.3 0h640v480h-640z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(70.3)"
        >
          <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z"></path>
          <path
            fill="#ffde00"
            d="M335.6 232.1a135.9 130.1 0 1 1-271.7 0 135.9 130.1 0 1 1 271.7 0z"
          ></path>
        </g>
      </svg>
    );
  }
);

PLW.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PLW.displayName = 'PLW';

export default PLW;
