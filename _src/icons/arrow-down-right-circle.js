import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightCircle = forwardRef(
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
        <path d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"></path>
        <path d="M14.25 10.75V14.25H10.75"></path>
        <path d="M14 14L9.75 9.75"></path>
      </svg>
    );
  }
);

ArrowDownRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRightCircle.displayName = 'ArrowDownRightCircle';

export default ArrowDownRightCircle;
