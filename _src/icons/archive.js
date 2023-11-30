import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Archive = forwardRef(
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
        <path d="M5.83956 5.39136C5.91203 5.1662 6.3173 5 6.79385 5H17.2061C17.6827 5 18.088 5.16621 18.1604 5.39136L19 8H5L5.83956 5.39136Z"></path>
        <path d="M5 8H12H19V16.25C19 17.7688 18.1354 19 17.069 19H6.93103C5.86455 19 5 17.7688 5 16.25V8Z"></path>
        <path d="M12 16.5V10.5"></path>
        <path d="M9.25 13.5L12 16.5L14.75 13.5"></path>
      </svg>
    );
  }
);

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Archive.displayName = 'Archive';

export default Archive;
