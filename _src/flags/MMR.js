import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MMR = forwardRef(
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
        <path fill="#fecb00" d="M0 0h640v480H0z"></path>
        <path fill="#34b233" d="M0 160h640v320H0z"></path>
        <path fill="#ea2839" d="M0 320h640v160H0z"></path>
        <g transform="translate(320 256.9) scale(176.87999)">
          <path id="a" fill="#fff" d="m0-1 .3 1h-.6z"></path>
          <use
            href="#a"
            width="100%"
            height="100%"
            transform="rotate(-144)"
          ></use>
          <use
            href="#a"
            width="100%"
            height="100%"
            transform="rotate(-72)"
          ></use>
          <use
            href="#a"
            width="100%"
            height="100%"
            transform="rotate(72)"
          ></use>
          <use
            href="#a"
            width="100%"
            height="100%"
            transform="rotate(144)"
          ></use>
        </g>
      </svg>
    );
  }
);

MMR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MMR.displayName = 'MMR';

export default MMR;
