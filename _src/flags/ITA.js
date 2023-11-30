import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ITA = forwardRef(
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
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z"></path>
          <path fill="#009246" d="M0 0h213.3v480H0z"></path>
          <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"></path>
        </g>
      </svg>
    );
  }
);

ITA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ITA.displayName = 'ITA';

export default ITA;
