import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const IDN = forwardRef(
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
        <path fill="#e70011" d="M0 0h640v240H0Z"></path>
        <path fill="#fff" d="M0 240h640v240H0Z"></path>
      </svg>
    );
  }
);

IDN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IDN.displayName = 'IDN';

export default IDN;
