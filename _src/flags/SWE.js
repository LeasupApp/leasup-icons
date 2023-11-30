import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SWE = forwardRef(
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
        <path fill="#005293" d="M0 0h640v480H0z"></path>
        <path
          fill="#fecb00"
          d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96z"
        ></path>
      </svg>
    );
  }
);

SWE.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SWE.displayName = 'SWE';

export default SWE;
