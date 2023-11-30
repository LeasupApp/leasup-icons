import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RUS = forwardRef(
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
          <path fill="#fff" d="M0 0h640v480H0z"></path>
          <path fill="#0039a6" d="M0 160h640v320H0z"></path>
          <path fill="#d52b1e" d="M0 320h640v160H0z"></path>
        </g>
      </svg>
    );
  }
);

RUS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RUS.displayName = 'RUS';

export default RUS;
