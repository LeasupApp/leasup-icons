import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LUX = forwardRef(
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
        <path fill="#00a1de" d="M0 240h640v240H0z"></path>
        <path fill="#ed2939" d="M0 0h640v240H0z"></path>
        <path fill="#fff" d="M0 160h640v160H0z"></path>
      </svg>
    );
  }
);

LUX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LUX.displayName = 'LUX';

export default LUX;
