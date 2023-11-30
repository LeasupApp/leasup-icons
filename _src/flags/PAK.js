import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PAK = forwardRef(
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
            <path fillOpacity=".7" d="M-52.3 0h682.6v512H-52.3z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(49) scale(.9375)"
        >
          <path fill="#0c590b" d="M-95 0h768v512H-95z"></path>
          <path fill="#fff" d="M-95 0H97.5v512H-95z"></path>
          <g fill="#fff">
            <path d="m403.7 225.4-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"></path>
            <path d="M415.4 306a121.2 121.2 0 0 1-161.3 59.4 122.1 122.1 0 0 1-59.5-162.1A118.6 118.6 0 0 1 266 139a156.2 156.2 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z"></path>
          </g>
        </g>
      </svg>
    );
  }
);

PAK.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PAK.displayName = 'PAK';

export default PAK;
