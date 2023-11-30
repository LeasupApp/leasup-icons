import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Refresh = forwardRef(
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
        <path d="M7.25 9.25L4.75 7L7.25 4.75"></path>
        <path d="M4.75 7H16.25C17.9069 7 19.25 8.34315 19.25 10V11.25"></path>
        <path d="M16.75 19.25L19.25 17L16.75 14.75"></path>
        <path d="M19.25 17H7.75C6.09315 17 4.75 15.6569 4.75 14V12.75"></path>
      </svg>
    );
  }
);

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Refresh.displayName = 'Refresh';

export default Refresh;
