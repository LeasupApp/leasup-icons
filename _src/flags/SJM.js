import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SJM = forwardRef(
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
        <path fill="#ef2b2d" d="M0 0h640v480H0z"></path>
        <path fill="#fff" d="M180 0h120v480H180z"></path>
        <path fill="#fff" d="M0 180h640v120H0z"></path>
        <path fill="#002868" d="M210 0h60v480h-60z"></path>
        <path fill="#002868" d="M0 210h640v60H0z"></path>
      </svg>
    );
  }
);

SJM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SJM.displayName = 'SJM';

export default SJM;
