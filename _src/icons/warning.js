import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Warning = forwardRef(
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
        <circle cx="12" cy="12" r="7.5"></circle>
        <path
          d="M12.5828 8.72727L12.4905 13.9084H11.5068L11.4145 8.72727H12.5828ZM12.0004 16.0675C11.8039 16.0675 11.6359 15.9988 11.4962 15.8615C11.3565 15.7218 11.2878 15.5537 11.2902 15.3572C11.2878 15.1631 11.3565 14.9974 11.4962 14.8601C11.6359 14.7204 11.8039 14.6506 12.0004 14.6506C12.1922 14.6506 12.3579 14.7204 12.4976 14.8601C12.6373 14.9974 12.7083 15.1631 12.7107 15.3572C12.7083 15.4875 12.674 15.607 12.6077 15.7159C12.5438 15.8224 12.4585 15.9077 12.352 15.9716C12.2455 16.0355 12.1283 16.0675 12.0004 16.0675Z"
          fill="#21304F"
        ></path>
      </svg>
    );
  }
);

Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Warning.displayName = 'Warning';

export default Warning;