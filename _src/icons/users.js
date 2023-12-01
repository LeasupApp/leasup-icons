import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Users = forwardRef(
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
        <path d="M5.78164 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.49996 14C6.21027 14 5.19601 16.7012 4.88545 18.2285C4.77296 18.7817 5.21714 19.25 5.78164 19.25Z"></path>
        <path d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"></path>
        <path d="M9.5 10.25C11.0188 10.25 12.25 9.01878 12.25 7.5C12.25 5.98122 11.0188 4.75 9.5 4.75C7.98122 4.75 6.75 5.98122 6.75 7.5C6.75 9.01878 7.98122 10.25 9.5 10.25Z"></path>
        <path d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"></path>
      </svg>
    );
  }
);

Users.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Users.displayName = 'Users';

export default Users;