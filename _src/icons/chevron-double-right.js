import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleRight = forwardRef(
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
        <path d="M7.75 15.25L11.25 12L7.75 8.75" strokeWidth="1.25"></path>
        <path d="M12.75 15.25L16.25 12L12.75 8.75" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

ChevronDoubleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDoubleRight.displayName = 'ChevronDoubleRight';

export default ChevronDoubleRight;
