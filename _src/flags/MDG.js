import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MDG = forwardRef(
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
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fc3d32" d="M213.3 0H640v240H213.3z"></path>
          <path fill="#007e3a" d="M213.3 240H640v240H213.3z"></path>
          <path fill="#fff" d="M0 0h213.3v480H0z"></path>
        </g>
      </svg>
    );
  }
);

MDG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MDG.displayName = 'MDG';

export default MDG;
