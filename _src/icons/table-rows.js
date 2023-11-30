import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TableRows = forwardRef(
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
        <path d="M5.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"></path>
        <path d="M19.25 9.25L5.25 9.25"></path>
        <path d="M19.25 14.75L5.25 14.75"></path>
      </svg>
    );
  }
);

TableRows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TableRows.displayName = 'TableRows';

export default TableRows;
