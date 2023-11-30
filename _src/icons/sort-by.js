import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SortBy = forwardRef(
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
        <path d="M15.25 14.75L12 18.25L8.75 14.75" strokeWidth="1.25"></path>
        <path d="M8.75 9.25L12 5.75L15.25 9.25" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

SortBy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortBy.displayName = 'SortBy';

export default SortBy;
