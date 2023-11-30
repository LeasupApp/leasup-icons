import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloseCircle = forwardRef(
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
        <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"></path>
        <path d="M9.75 9.75L14.25 14.25"></path>
        <path d="M14.25 9.75L9.75 14.25"></path>
      </svg>
    );
  }
);

CloseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloseCircle.displayName = 'CloseCircle';

export default CloseCircle;
