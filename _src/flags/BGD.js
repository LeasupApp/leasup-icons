import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BGD = forwardRef(
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
        <path fill="#006a4e" d="M0 0h640v480H0z"></path>
        <circle cx="280" cy="240" r="160" fill="#f42a41"></circle>
      </svg>
    );
  }
);

BGD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BGD.displayName = 'BGD';

export default BGD;
