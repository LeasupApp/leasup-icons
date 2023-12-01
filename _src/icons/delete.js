import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Delete = forwardRef(
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
        <path d="M6.25 7.75L7.09115 17.4233C7.18102 18.4568 8.04622 19.25 9.08363 19.25H14.9164C15.9538 19.25 16.819 18.4568 16.9088 17.4233L17.75 7.75H6.25Z"></path>
        <path d="M10.25 10.75V16.25"></path>
        <path d="M13.75 10.75V16.25"></path>
        <path d="M9.25 7.75V6.75C9.25 5.64543 10.1454 4.75 11.25 4.75H12.75C13.8546 4.75 14.75 5.64543 14.75 6.75V7.75"></path>
        <path d="M5.25 7.75H18.75"></path>
      </svg>
    );
  }
);

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Delete.displayName = 'Delete';

export default Delete;