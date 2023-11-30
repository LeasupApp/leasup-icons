import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GHA = forwardRef(
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
        <path fill="#006b3f" d="M0 0h640v480H0z"></path>
        <path fill="#fcd116" d="M0 0h640v320H0z"></path>
        <path fill="#ce1126" d="M0 0h640v160H0z"></path>
        <path d="m320 160 52 160-136.1-98.9H404L268 320z"></path>
      </svg>
    );
  }
);

GHA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GHA.displayName = 'GHA';

export default GHA;
