import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DEU = forwardRef(
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
        <path fill="#ffce00" d="M0 320h640v160H0z"></path>
        <path d="M0 0h640v160H0z"></path>
        <path fill="#d00" d="M0 160h640v160H0z"></path>
      </svg>
    );
  }
);

DEU.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DEU.displayName = 'DEU';

export default DEU;
