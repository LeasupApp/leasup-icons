import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Print = forwardRef(
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
        <path d="M4.75 10.75H19.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V10.75Z"></path>
        <path d="M6.75 10.5V4.75H17.25V10.5"></path>
        <path d="M7.75 16.25H16.25"></path>
      </svg>
    );
  }
);

Print.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Print.displayName = 'Print';

export default Print;
