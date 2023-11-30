import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = forwardRef(
  ({ color = 'currentColor', size = 24, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path d="M10.25 17.25L4.75 12L10.25 6.75" strokeWidth="1.25"></path>
        <path d="M5 12L19.25 12" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;
