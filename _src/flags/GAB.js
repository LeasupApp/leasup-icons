import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GAB = forwardRef(
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
          <path fill="#ffe700" d="M640 480H0V0h640z"></path>
          <path fill="#36a100" d="M640 160H0V0h640z"></path>
          <path fill="#006dbc" d="M640 480H0V320h640z"></path>
        </g>
      </svg>
    );
  }
);

GAB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GAB.displayName = 'GAB';

export default GAB;
