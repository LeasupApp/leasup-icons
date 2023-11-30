import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const More = forwardRef(
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 12C7.5 12.8284 6.82842 13.5 6 13.5C5.17158 13.5 4.5 12.8284 4.5 12C4.5 11.1716 5.17158 10.5 6 10.5C6.82842 10.5 7.5 11.1716 7.5 12ZM13.5 12C13.5 12.8284 12.8285 13.5 12 13.5C11.1715 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1715 10.5 12 10.5C12.8285 10.5 13.5 11.1716 13.5 12ZM18 13.5C18.8285 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8285 10.5 18 10.5C17.1715 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1715 13.5 18 13.5Z"
          fill="#21304F"
        ></path>
      </svg>
    );
  }
);

More.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

More.displayName = 'More';

export default More;
