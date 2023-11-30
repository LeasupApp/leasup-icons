import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DNK = forwardRef(
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
        <path fill="#c8102e" d="M0 0h640.1v480H0z"></path>
        <path fill="#fff" d="M205.7 0h68.6v480h-68.6z"></path>
        <path fill="#fff" d="M0 205.7h640.1v68.6H0z"></path>
      </svg>
    );
  }
);

DNK.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DNK.displayName = 'DNK';

export default DNK;
