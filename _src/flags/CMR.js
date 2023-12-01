import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CMR = forwardRef(
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
        <path fill="#007a5e" d="M0 0h213.3v480H0z"></path>
        <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z"></path>
        <path fill="#fcd116" d="M426.7 0H640v480H426.7z"></path>
        <g fill="#fcd116" transform="translate(320 240) scale(7.1111)">
          <g id="b">
            <path id="a" d="M0-8-2.5-.4 1.3.9z"></path>
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
      </svg>
    );
  }
);

CMR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CMR.displayName = 'CMR';

export default CMR;