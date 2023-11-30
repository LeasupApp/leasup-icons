import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = forwardRef(
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
        <path d="M13.75 15.25L10.25 12L13.75 8.75" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronLeft.displayName = 'ChevronLeft';

export default ChevronLeft;
