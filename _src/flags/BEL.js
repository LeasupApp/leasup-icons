import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BEL = forwardRef(
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
          <path d="M0 0h213.3v480H0z"></path>
          <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z"></path>
          <path fill="#f31830" d="M426.7 0H640v480H426.7z"></path>
        </g>
      </svg>
    );
  }
);

BEL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BEL.displayName = 'BEL';

export default BEL;
