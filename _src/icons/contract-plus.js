import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ContractPlus = forwardRef(
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
        <path d="M4.5 17.5H8.5"></path>
        <path d="M6.5 19.5L6.5 15.5"></path>
        <path d="M11.75 19.25H15.25"></path>
        <path d="M8.75 8.75H15.25"></path>
        <path d="M9.75 11.75H14.25"></path>
        <path d="M19.25 19.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V12.25"></path>
        <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
      </svg>
    );
  }
);

ContractPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ContractPlus.displayName = 'ContractPlus';

export default ContractPlus;
