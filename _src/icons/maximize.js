import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Maximize = forwardRef(
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
        <path d="M4.75 14.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H9.25"></path>
        <path d="M19.25 14.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H14.75"></path>
        <path d="M19.25 9.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H14.75"></path>
        <path d="M4.75 9.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H9.25"></path>
      </svg>
    );
  }
);

Maximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maximize.displayName = 'Maximize';

export default Maximize;
