import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const QAT = forwardRef(
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
        <path fill="#8d1b3d" d="M0 0h640v480H0z"></path>
        <path
          fill="#fff"
          d="M0 0v480h158.4l97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6L256.1 80l-97.7-26.7 97.8-26.6L158.3 0H0z"
        ></path>
      </svg>
    );
  }
);

QAT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QAT.displayName = 'QAT';

export default QAT;
