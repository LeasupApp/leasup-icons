import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KOR = forwardRef(
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
            <path fillOpacity=".7" d="M-95.8-.4h682.7v512H-95.8z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(89.8 .4) scale(.9375)"
        >
          <path fill="#fff" d="M-95.8-.4H587v512H-95.8Z"></path>
          <g transform="rotate(-56.3 361.6 -101.3) scale(10.66667)">
            <g id="c">
              <path id="b" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"></path>
              <use href="#b" width="100%" height="100%" y="44"></use>
            </g>
            <path stroke="#fff" d="M0 17v10"></path>
            <path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z"></path>
            <path
              fill="#0047a0"
              d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"
            ></path>
            <circle cy="-6" r="6" fill="#cd2e3a"></circle>
          </g>
          <g transform="rotate(-123.7 191.2 62.2) scale(10.66667)">
            <use href="#c" width="100%" height="100%"></use>
            <path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"></path>
          </g>
        </g>
      </svg>
    );
  }
);

KOR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KOR.displayName = 'KOR';

export default KOR;
