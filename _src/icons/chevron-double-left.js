import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleLeft = forwardRef(
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
        <path d="M16.25 8.75L12.75 12L16.25 15.25" strokeWidth="1.25"></path>
        <path d="M11.25 8.75L7.75 12L11.25 15.25" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ChevronDoubleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDoubleLeft.displayName = 'ChevronDoubleLeft';

export default ChevronDoubleLeft;
