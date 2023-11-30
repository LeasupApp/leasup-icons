import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VCT = forwardRef(
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
          <path fill="#f4f100" d="M0 0h640v480H0z"></path>
          <path fill="#199a00" d="M490 0h150v480H490z"></path>
          <path fill="#0058aa" d="M0 0h150v480H0z"></path>
          <path
            fill="#199a00"
            d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
          ></path>
        </g>
      </svg>
    );
  }
);

VCT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VCT.displayName = 'VCT';

export default VCT;
