import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clock = forwardRef(
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
        <path d="M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z"></path>
        <path
          d="M12.5 8C12.5 7.72386 12.2761 7.5 12 7.5C11.7239 7.5 11.5 7.72386 11.5 8H12.5ZM12 12H11.5V12.2071L11.6464 12.3536L12 12ZM13.6464 14.3536C13.8417 14.5488 14.1583 14.5488 14.3536 14.3536C14.5488 14.1583 14.5488 13.8417 14.3536 13.6464L13.6464 14.3536ZM11.5 8V12H12.5V8H11.5ZM11.6464 12.3536L13.6464 14.3536L14.3536 13.6464L12.3536 11.6464L11.6464 12.3536Z"
          fill="#21304F"
        ></path>
      </svg>
    );
  }
);

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clock.displayName = 'Clock';

export default Clock;
