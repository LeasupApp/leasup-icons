import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MDV = forwardRef(
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
        <path fill="#d21034" d="M0 0h640v480H0z"></path>
        <path fill="#007e3a" d="M120 120h400v240H120z"></path>
        <circle cx="350" cy="240" r="80" fill="#fff"></circle>
        <circle cx="380" cy="240" r="80" fill="#007e3a"></circle>
      </svg>
    );
  }
);

MDV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MDV.displayName = 'MDV';

export default MDV;
