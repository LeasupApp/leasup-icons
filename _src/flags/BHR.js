import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BHR = forwardRef(
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
        <path fill="#fff" d="M0 0h640v480H0"></path>
        <path
          fill="#ce1126"
          d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"
        ></path>
      </svg>
    );
  }
);

BHR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BHR.displayName = 'BHR';

export default BHR;
