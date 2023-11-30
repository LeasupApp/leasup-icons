import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Reporting = forwardRef(
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
        <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"></path>
        <path d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"></path>
      </svg>
    );
  }
);

Reporting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Reporting.displayName = 'Reporting';

export default Reporting;
