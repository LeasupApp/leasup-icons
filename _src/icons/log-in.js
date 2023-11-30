import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LogIn = forwardRef(
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
        <path d="M9.75 8.75L13.25 12L9.75 15.25"></path>
        <path d="M9.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H9.75"></path>
        <path d="M13 12H4.75"></path>
      </svg>
    );
  }
);

LogIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LogIn.displayName = 'LogIn';

export default LogIn;
