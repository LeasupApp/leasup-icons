import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const STP = forwardRef(
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
        <path fill="#12ad2b" d="M0 0h640v480H0z"></path>
        <path fill="#ffce00" d="M0 137.1h640V343H0z"></path>
        <path fill="#d21034" d="M0 0v480l240-240"></path>
        <g id="c" transform="translate(351.6 240) scale(.34286)">
          <g id="b">
            <path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)"></path>
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
            transform="rotate(72)"
          ></use>
          <use
            href="#b"
            width="100%"
            height="100%"
            transform="rotate(144)"
          ></use>
          <use
            href="#b"
            width="100%"
            height="100%"
            transform="rotate(-144)"
          ></use>
          <use
            href="#b"
            width="100%"
            height="100%"
            transform="rotate(-72)"
          ></use>
        </g>
        <use
          href="#c"
          width="100%"
          height="100%"
          x="700"
          transform="translate(-523.2)"
        ></use>
      </svg>
    );
  }
);

STP.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

STP.displayName = 'STP';

export default STP;
