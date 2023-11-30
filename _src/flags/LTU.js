import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LTU = forwardRef(
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
        <g
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="scale(.64143 .96773)"
        >
          <rect
            width="1063"
            height="708.7"
            fill="#006a44"
            rx="0"
            ry="0"
            transform="scale(.93865 .69686)"
          ></rect>
          <rect
            width="1063"
            height="236.2"
            y="475.6"
            fill="#c1272d"
            rx="0"
            ry="0"
            transform="scale(.93865 .69686)"
          ></rect>
          <path fill="#fdb913" d="M0 0h997.8v164.6H0z"></path>
        </g>
      </svg>
    );
  }
);

LTU.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LTU.displayName = 'LTU';

export default LTU;
