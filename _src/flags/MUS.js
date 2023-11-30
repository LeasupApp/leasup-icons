import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MUS = forwardRef(
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
          <path fill="#00a04d" d="M0 360h640v120H0z"></path>
          <path fill="#151f6d" d="M0 120h640v120H0z"></path>
          <path fill="#ee2737" d="M0 0h640v120H0z"></path>
          <path fill="#ffcd00" d="M0 240h640v120H0z"></path>
        </g>
      </svg>
    );
  }
);

MUS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MUS.displayName = 'MUS';

export default MUS;
