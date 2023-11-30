import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TTO = forwardRef(
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
        <path fill="#fff" d="M0 0h640v480H0z"></path>
        <path
          fill="#e00000"
          fillRule="evenodd"
          d="M463.7 480 0 1v478.8l463.7.2zM176.3 0 640 479V.2L176.3 0z"
        ></path>
        <path
          fillRule="evenodd"
          d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z"
        ></path>
      </svg>
    );
  }
);

TTO.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TTO.displayName = 'TTO';

export default TTO;
