import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SSD = forwardRef(
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
        <path fill="#078930" d="M0 336h640v144H0z"></path>
        <path fill="#fff" d="M0 144h640v192H0z"></path>
        <path d="M0 0h640v144H0z"></path>
        <path fill="#da121a" d="M0 168h640v144H0z"></path>
        <path fill="#0f47af" d="m0 0 415.7 240L0 480z"></path>
        <path
          fill="#fcdd09"
          d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z"
        ></path>
      </svg>
    );
  }
);

SSD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SSD.displayName = 'SSD';

export default SSD;
