import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Link = forwardRef(
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
        <path d="M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65681 18 5.99996C16.3431 4.34311 13.6569 4.34311 12 5.99996L10.75 7.24996"></path>
        <path d="M7.24996 10.75L5.99996 12C4.34311 13.6569 4.34311 16.3431 5.99996 18C7.65681 19.6569 10.3431 19.6569 12 18L13.25 16.75"></path>
        <path d="M14.25 9.75L9.75 14.25"></path>
      </svg>
    );
  }
);

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.displayName = 'Link';

export default Link;
