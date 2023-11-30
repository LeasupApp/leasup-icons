import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Close = forwardRef(
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
        <path d="M17.25 6.75L6.75 17.25"></path>
        <path d="M6.75 6.75L17.25 17.25"></path>
      </svg>
    );
  }
);

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Close.displayName = 'Close';

export default Close;
