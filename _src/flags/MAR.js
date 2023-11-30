import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MAR = forwardRef(
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
        <path fill="#c1272d" d="M640 0H0v480h640z"></path>
        <path
          fill="none"
          stroke="#006233"
          strokeWidth="11.7"
          d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
        ></path>
      </svg>
    );
  }
);

MAR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MAR.displayName = 'MAR';

export default MAR;
