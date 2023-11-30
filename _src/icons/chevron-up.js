import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronUp = forwardRef(
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
        <path d="M8.75 14.25L12 10.75L15.25 14.25" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;
