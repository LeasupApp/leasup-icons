import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GGY = forwardRef(
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
        <path fill="#fff" d="M0 0h640v480H0z"></path>
        <path fill="#e8112d" d="M256 0h128v480H256z"></path>
        <path fill="#e8112d" d="M0 176h640v128H0z"></path>
        <path
          id="a"
          fill="#f9dd16"
          d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
        ></path>
        <use
          href="#a"
          width="36"
          height="24"
          transform="rotate(90 320 240)"
        ></use>
        <use
          href="#a"
          width="36"
          height="24"
          transform="rotate(-90 320 240)"
        ></use>
        <use
          href="#a"
          width="36"
          height="24"
          transform="rotate(180 320 240)"
        ></use>
      </svg>
    );
  }
);

GGY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GGY.displayName = 'GGY';

export default GGY;
