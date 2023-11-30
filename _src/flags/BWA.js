import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BWA = forwardRef(
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
          <path fill="#00cbff" d="M0 0h640v480H0z"></path>
          <path fill="#fff" d="M0 160h640v160H0z"></path>
          <path d="M0 186h640v108H0z"></path>
        </g>
      </svg>
    );
  }
);

BWA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BWA.displayName = 'BWA';

export default BWA;
