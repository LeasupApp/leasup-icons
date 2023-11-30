import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EST = forwardRef(
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
        <g fillRule="evenodd" strokeWidth="1pt">
          <rect width="640" height="477.9" rx="0" ry="0"></rect>
          <rect
            width="640"
            height="159.3"
            y="320.7"
            fill="#fff"
            rx="0"
            ry="0"
          ></rect>
          <path fill="#1791ff" d="M0 0h640v159.3H0z"></path>
        </g>
      </svg>
    );
  }
);

EST.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EST.displayName = 'EST';

export default EST;
