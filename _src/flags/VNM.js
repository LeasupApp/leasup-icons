import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VNM = forwardRef(
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
          <path fill="#da251d" d="M-128 0h768v512h-768z"></path>
          <path
            fill="#ff0"
            d="M349.6 381 260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
          ></path>
        </g>
      </svg>
    );
  }
);

VNM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VNM.displayName = 'VNM';

export default VNM;
