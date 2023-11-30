import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SYC = forwardRef(
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
        <path fill="#fff" d="M0 0h640v480H0Z"></path>
        <path fill="#d92223" d="M0 480V0h640v160z"></path>
        <path fill="#fcd955" d="M0 480V0h426.7z"></path>
        <path fill="#003d88" d="M0 480V0h213.3z"></path>
        <path fill="#007a39" d="m0 480 640-160v160z"></path>
      </svg>
    );
  }
);

SYC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SYC.displayName = 'SYC';

export default SYC;
