import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CHN = forwardRef(
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
          <path id="a" fill="#ff0" d="M-.6.8 0-1 .6.8-1-.3h2z"></path>
        </defs>
        <path fill="#ee1c25" d="M0 0h640v480H0z"></path>
        <use
          href="#a"
          width="30"
          height="20"
          transform="matrix(71.9991 0 0 72 120 120)"
        ></use>
        <use
          href="#a"
          width="30"
          height="20"
          transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
        ></use>
        <use
          href="#a"
          width="30"
          height="20"
          transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
        ></use>
        <use
          href="#a"
          width="30"
          height="20"
          transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
        ></use>
        <use
          href="#a"
          width="30"
          height="20"
          transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
        ></use>
      </svg>
    );
  }
);

CHN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CHN.displayName = 'CHN';

export default CHN;
