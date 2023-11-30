import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Download = forwardRef(
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
        <path d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
        <path d="M12 14.25V4.75"></path>
        <path d="M8.75 10.75L12 14.25L15.25 10.75"></path>
      </svg>
    );
  }
);

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Download.displayName = 'Download';

export default Download;
