import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CHE = forwardRef(
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
          <path fill="red" d="M0 0h640v480H0z"></path>
          <g fill="#fff">
            <path d="M170 195h300v90H170z"></path>
            <path d="M275 90h90v300h-90z"></path>
          </g>
        </g>
      </svg>
    );
  }
);

CHE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CHE.displayName = 'CHE';

export default CHE;