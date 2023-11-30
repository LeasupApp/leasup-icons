import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TCD = forwardRef(
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
        <g fillRule="evenodd">
          <path fill="#000067" d="M0 0h214v480H0z"></path>
          <path fill="red" d="M426 0h214v480H426z"></path>
          <path fill="#ff0" d="M214 0h212v480H214z"></path>
        </g>
      </svg>
    );
  }
);

TCD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TCD.displayName = 'TCD';

export default TCD;
