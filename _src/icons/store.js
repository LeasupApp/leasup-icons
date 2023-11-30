import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Store = forwardRef(
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
        <path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"></path>
        <path d="M9.5 7.75C9.5 8.99264 8.5 10.25 7 10.25C5.5 10.25 4.75 8.99264 4.75 7.75"></path>
        <path d="M19.25 7.75C19.25 8.99264 18.5 10.25 17 10.25C15.5 10.25 14.5 8.99264 14.5 7.75"></path>
        <path d="M14.5 7.75C14.5 8.99264 13.5 10.25 12 10.25C10.5 10.25 9.5 8.99264 9.5 7.75"></path>
        <path d="M9.74951 15.7493C9.74951 14.6447 10.645 13.7493 11.7495 13.7493H12.2495C13.3541 13.7493 14.2495 14.6447 14.2495 15.7493V19.2493H9.74951V15.7493Z"></path>
      </svg>
    );
  }
);

Store.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Store.displayName = 'Store';

export default Store;
