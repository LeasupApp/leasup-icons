import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GRD = forwardRef(
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
          <g id="c">
            <g id="b">
              <path
                id="a"
                fill="#fcd116"
                d="M0-1v1h.5"
                transform="rotate(18 0 -1)"
              ></path>
              <use href="#a" transform="scale(-1 1)"></use>
            </g>
            <use href="#b" transform="rotate(72)"></use>
            <use href="#b" transform="rotate(144)"></use>
            <use href="#b" transform="rotate(216)"></use>
            <use href="#b" transform="rotate(288)"></use>
          </g>
        </defs>
        <path fill="#ce1126" d="M0 0h640v480H0z"></path>
        <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z"></path>
        <path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z"></path>
        <circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126"></circle>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="matrix(52.8 0 0 52.8 320 240)"
        ></use>
        <use
          href="#d"
          width="100%"
          height="100%"
          x="-100"
          transform="translate(-30.3)"
        ></use>
        <use
          href="#c"
          id="d"
          width="100%"
          height="100%"
          transform="matrix(31.2 0 0 31.2 320 33.6)"
        ></use>
        <use
          href="#d"
          width="100%"
          height="100%"
          x="100"
          transform="translate(30.3)"
        ></use>
        <path
          fill="#ce1126"
          d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"
        ></path>
        <path
          fill="#fcd116"
          d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
        ></path>
        <use
          href="#d"
          width="100%"
          height="100%"
          x="-100"
          transform="translate(-30.3 414.6)"
        ></use>
        <use
          href="#c"
          width="100%"
          height="100%"
          transform="matrix(31.2 0 0 31.2 320 448.2)"
        ></use>
        <use
          href="#d"
          width="100%"
          height="100%"
          x="100"
          transform="translate(30.3 414.6)"
        ></use>
      </svg>
    );
  }
);

GRD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GRD.displayName = 'GRD';

export default GRD;
