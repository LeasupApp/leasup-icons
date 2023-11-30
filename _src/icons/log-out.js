import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LogOut = forwardRef(
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
        <path d="M15.75 8.75L19.25 12L15.75 15.25"></path>
        <path d="M19 12H10.75"></path>
        <path d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"></path>
      </svg>
    );
  }
);

LogOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LogOut.displayName = 'LogOut';

export default LogOut;
