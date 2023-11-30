import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sparkles = forwardRef(
  ({ color = 'currentColor', size = 24, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path d="M15 4.75C15 7.51142 13.5114 10 10.75 10C13.5114 10 15 12.4886 15 15.25C15 12.4886 16.4886 10 19.25 10C16.4886 10 15 7.51142 15 4.75Z"></path>
        <path d="M8 12.75C8 14.4069 6.40685 16 4.75 16C6.40685 16 8 17.5931 8 19.25C8 17.5931 9.59315 16 11.25 16C9.59315 16 8 14.4069 8 12.75Z"></path>
      </svg>
    );
  }
);

Sparkles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sparkles.displayName = 'Sparkles';

export default Sparkles;
