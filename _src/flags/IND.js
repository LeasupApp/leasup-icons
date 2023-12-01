import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const IND = forwardRef(
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
        <path fill="#f93" d="M0 0h640v160H0z"></path>
        <path fill="#fff" d="M0 160h640v160H0z"></path>
        <path fill="#128807" d="M0 320h640v160H0z"></path>
        <g transform="matrix(3.2 0 0 3.2 320 240)">
          <circle r="20" fill="#008"></circle>
          <circle r="17.5" fill="#fff"></circle>
          <circle r="3.5" fill="#008"></circle>
          <g id="d">
            <g id="c">
              <g id="b">
                <g id="a" fill="#008">
                  <circle r=".9" transform="rotate(7.5 -8.8 133.5)"></circle>
                  <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z"></path>
                </g>
                <use
                  href="#a"
                  width="100%"
                  height="100%"
                  transform="rotate(15)"
                ></use>
              </g>
              <use
                href="#b"
                width="100%"
                height="100%"
                transform="rotate(30)"
              ></use>
            </g>
            <use
              href="#c"
              width="100%"
              height="100%"
              transform="rotate(60)"
            ></use>
          </g>
          <use
            href="#d"
            width="100%"
            height="100%"
            transform="rotate(120)"
          ></use>
          <use
            href="#d"
            width="100%"
            height="100%"
            transform="rotate(-120)"
          ></use>
        </g>
      </svg>
    );
  }
);

IND.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IND.displayName = 'IND';

export default IND;