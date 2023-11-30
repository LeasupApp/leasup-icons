import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LVA = forwardRef(
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
          <path fill="#fff" d="M0 0h640v480H0z"></path>
          <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z"></path>
        </g>
      </svg>
    );
  }
);

LVA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LVA.displayName = 'LVA';

export default LVA;
