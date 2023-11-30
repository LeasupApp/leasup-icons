import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ALA = forwardRef(
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
            <path fillOpacity=".7" d="M106.3 0h1133.3v850H106.3z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
          <path fill="#0053a5" d="M0 0h1300v850H0z"></path>
          <g fill="#ffce00">
            <path d="M400 0h250v850H400z"></path>
            <path d="M0 300h1300v250H0z"></path>
          </g>
          <g fill="#d21034">
            <path d="M475 0h100v850H475z"></path>
            <path d="M0 375h1300v100H0z"></path>
          </g>
        </g>
      </svg>
    );
  }
);

ALA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ALA.displayName = 'ALA';

export default ALA;
