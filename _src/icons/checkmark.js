import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Checkmark = forwardRef(
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
        <path d="M6.75 12.9231L9.52941 16L17.25 8" strokeWidth="1.5"></path>
      </svg>
    );
  }
);

Checkmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkmark.displayName = 'Checkmark';

export default Checkmark;
