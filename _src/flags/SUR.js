import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SUR = forwardRef(
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
        <path fill="#377e3f" d="M.1 0h640v480H.1z"></path>
        <path fill="#fff" d="M.1 96h640v288H.1z"></path>
        <path fill="#b40a2d" d="M.1 144h640v192H.1z"></path>
        <path
          fill="#ecc81d"
          d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
        ></path>
      </svg>
    );
  }
);

SUR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SUR.displayName = 'SUR';

export default SUR;