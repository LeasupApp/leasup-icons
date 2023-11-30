import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HND = forwardRef(
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
        <path fill="#18c3df" d="M0 0h640v480H0z"></path>
        <path fill="#fff" d="M0 160h640v160H0z"></path>
        <g id="c" fill="#18c3df" transform="translate(320 240) scale(26.66665)">
          <g id="b">
            <path id="a" d="m-.3 0 .5.1L0-1z"></path>
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
            transform="rotate(-72)"
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
        </g>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="translate(133.3 -42.7)"
        ></use>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="translate(133.3 37.3)"
        ></use>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="translate(-133.3 -42.7)"
        ></use>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="translate(-133.3 37.3)"
        ></use>
      </svg>
    );
  }
);

HND.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HND.displayName = 'HND';

export default HND;
