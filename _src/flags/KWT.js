import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KWT = forwardRef(
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
            <path fillOpacity=".7" d="M0 0h682.7v512H0z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="scale(.9375)"
        >
          <path fill="#fff" d="M0 170.6h1024v170.7H0z"></path>
          <path fill="#f31830" d="M0 341.3h1024V512H0z"></path>
          <path fill="#00d941" d="M0 0h1024v170.7H0z"></path>
          <path d="M0 0v512l255.4-170.7.6-170.8L0 0z"></path>
        </g>
      </svg>
    );
  }
);

KWT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KWT.displayName = 'KWT';

export default KWT;
