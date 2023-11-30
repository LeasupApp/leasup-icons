import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ARE = forwardRef(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={(size * 3) / 4}
        viewBox="0 0 640 480"
        className="flag-icon"
        {...rest}
      >
        <path fill="#00732f" d="M0 0h640v160H0z"></path>
        <path fill="#fff" d="M0 160h640v160H0z"></path>
        <path d="M0 320h640v160H0z"></path>
        <path fill="red" d="M0 0h220v480H0z"></path>
      </svg>
    );
  }
);

ARE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ARE.displayName = 'ARE';

export default ARE;
