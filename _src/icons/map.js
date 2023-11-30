import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Map = forwardRef(
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
        <path d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"></path>
        <path d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"></path>
        <path d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"></path>
      </svg>
    );
  }
);

Map.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Map.displayName = 'Map';

export default Map;
