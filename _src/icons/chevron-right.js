import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronRight = forwardRef(
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
        <path d="M10.25 8.75L13.75 12L10.25 15.25" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;
