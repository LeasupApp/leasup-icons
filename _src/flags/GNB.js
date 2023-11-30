import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GNB = forwardRef(
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
        <path fill="#ce1126" d="M0 0h220v480H0z"></path>
        <path fill="#fcd116" d="M220 0h420v240H220z"></path>
        <path fill="#009e49" d="M220 240h420v240H220z"></path>
        <g id="b" transform="matrix(80 0 0 80 110 240)">
          <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)"></path>
          <use
            href="#a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          ></use>
        </g>
        <use
          href="#b"
          width="100%"
          height="100%"
          transform="rotate(72 110 240)"
        ></use>
        <use
          href="#b"
          width="100%"
          height="100%"
          transform="rotate(144 110 240)"
        ></use>
        <use
          href="#b"
          width="100%"
          height="100%"
          transform="rotate(-144 110 240)"
        ></use>
        <use
          href="#b"
          width="100%"
          height="100%"
          transform="rotate(-72 110 240)"
        ></use>
      </svg>
    );
  }
);

GNB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GNB.displayName = 'GNB';

export default GNB;
