import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SYR = forwardRef(
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
        <path d="M0 0h640v480H0Z"></path>
        <path fill="#fff" d="M0 0h640v320H0Z"></path>
        <path fill="#ce1126" d="M0 0h640v160H0Z"></path>
        <path
          fill="#007a3d"
          d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126"
        ></path>
      </svg>
    );
  }
);

SYR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SYR.displayName = 'SYR';

export default SYR;
