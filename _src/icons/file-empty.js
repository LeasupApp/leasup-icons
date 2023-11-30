import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEmpty = forwardRef(
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
        <path d="M12.75 4.75L18.25 10.25M12.75 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V10.25L12.75 4.75ZM12.75 4.75V8.25C12.75 9.35457 13.6454 10.25 14.75 10.25H18.25L12.75 4.75Z"></path>
      </svg>
    );
  }
);

FileEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEmpty.displayName = 'FileEmpty';

export default FileEmpty;
