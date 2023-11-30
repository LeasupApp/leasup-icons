import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BEN = forwardRef(
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
            <path fill="gray" d="M67.6-154h666v666h-666z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="matrix(.961 0 0 .7207 -65 111)">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path fill="#319400" d="M0-154h333v666H0z"></path>
            <path fill="#ffd600" d="M333-154h666v333H333z"></path>
            <path fill="#de2110" d="M333 179h666v333H333z"></path>
          </g>
        </g>
      </svg>
    );
  }
);

BEN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BEN.displayName = 'BEN';

export default BEN;
