import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar = forwardRef(
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
        <path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"></path>
        <path d="M8 4.75V8.25"></path>
        <path d="M16 4.75V8.25"></path>
        <path d="M7.75 10.75H16.25"></path>
      </svg>
    );
  }
);

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar.displayName = 'Calendar';

export default Calendar;
