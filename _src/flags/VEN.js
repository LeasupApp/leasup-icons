import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VEN = forwardRef(
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
          <g id="d" transform="translate(0 -36)">
            <g id="c">
              <g id="b">
                <path id="a" fill="#fff" d="M0-5-1.5-.2l2.8.9z"></path>
                <use
                  href="#a"
                  width="180"
                  height="120"
                  transform="scale(-1 1)"
                ></use>
              </g>
              <use
                href="#b"
                width="180"
                height="120"
                transform="rotate(72)"
              ></use>
            </g>
            <use
              href="#b"
              width="180"
              height="120"
              transform="rotate(-72)"
            ></use>
            <use
              href="#c"
              width="180"
              height="120"
              transform="rotate(144)"
            ></use>
          </g>
        </defs>
        <path fill="#cf142b" d="M0 0h640v480H0z"></path>
        <path fill="#00247d" d="M0 0h640v320H0z"></path>
        <path fill="#fc0" d="M0 0h640v160H0z"></path>
        <g id="f" transform="matrix(4 0 0 4 320 336)">
          <g id="e">
            <use
              href="#d"
              width="180"
              height="120"
              transform="rotate(10)"
            ></use>
            <use
              href="#d"
              width="180"
              height="120"
              transform="rotate(30)"
            ></use>
          </g>
          <use href="#e" width="180" height="120" transform="rotate(40)"></use>
        </g>
        <use
          href="#f"
          width="180"
          height="120"
          transform="rotate(-80 320 336)"
        ></use>
      </svg>
    );
  }
);

VEN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VEN.displayName = 'VEN';

export default VEN;
