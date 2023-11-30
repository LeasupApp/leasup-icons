import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowRight = forwardRef(
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
        <path d="M13.75 6.75L19.25 12L13.75 17.25" strokeWidth="1.25"></path>
        <path d="M19 12H4.75" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
