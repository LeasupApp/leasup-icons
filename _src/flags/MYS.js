import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MYS = forwardRef(
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
        <path fill="#c00" d="M0 0h640v480H0z"></path>
        <path
          fill="#fff"
          d="M.5 39.9h639v38.4H.5zM.5 118.6h639V157H.5zM.5 197.4h639v38.4H.5z"
        ></path>
        <path fill="#006" d="M0 .5h320v280H0Z"></path>
        <path
          fill="#fc0"
          d="m207.5 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1zm-33.3 1.7a71.1 71.1 0 1 0 0 130 80 80 0 1 1 0-130z"
        ></path>
        <path
          fill="#fff"
          d="M.5 276.2h639v38.4H.5zM.5 354.4h639v38.4H.5zM0 441.6h639V480H0z"
        ></path>
      </svg>
    );
  }
);

MYS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MYS.displayName = 'MYS';

export default MYS;
