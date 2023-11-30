import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DZA = forwardRef(
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
        <path fill="#fff" d="M320 0h320v480H320z"></path>
        <path fill="#006233" d="M0 0h320v480H0z"></path>
        <path
          fill="#d21034"
          d="M424 180a120 120 0 1 0 0 120 96 96 0 1 1 0-120m4 60-108-35.2 67.2 92V183.2l-67.2 92z"
        ></path>
      </svg>
    );
  }
);

DZA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DZA.displayName = 'DZA';

export default DZA;
