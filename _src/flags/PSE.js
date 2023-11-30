import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PSE = forwardRef(
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
            <path fillOpacity=".7" d="M-118 0h682.7v512H-118z"></path>
          </clippath>
        </defs>
        <g clipPath="url(#a)" transform="translate(110.6) scale(.9375)">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path d="M-246 0H778v170.7H-246z"></path>
            <path fill="#fff" d="M-246 170.7H778v170.6H-246z"></path>
            <path fill="#090" d="M-246 341.3H778V512H-246z"></path>
            <path fill="red" d="m-246 512 512-256L-246 0v512z"></path>
          </g>
        </g>
      </svg>
    );
  }
);

PSE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PSE.displayName = 'PSE';

export default PSE;
