import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Send = forwardRef(
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
        <g clipPath="url(#clip0_1648_20988)">
          <path d="M4.24988 9.50305L19.6295 4.37652L14.5029 19.7561L11.8513 12.1547L4.24988 9.50305Z"></path>
          <path d="M12.0281 11.978L13.9727 10.0334" strokeWidth="1.5"></path>
        </g>
        <defs>
          <clippath id="clip0_1648_20988">
            <rect width="24" height="24" fill="white"></rect>
          </clippath>
        </defs>
      </svg>
    );
  }
);

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Send.displayName = 'Send';

export default Send;
