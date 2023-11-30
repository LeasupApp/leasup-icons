import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clear = forwardRef(
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
        <path d="M6.8735 17.1265C9.7048 19.9578 14.2952 19.9578 17.1265 17.1265C19.9578 14.2952 19.9578 9.7048 17.1265 6.8735C14.2952 4.0422 9.7048 4.0422 6.8735 6.8735C6.2397 7.5073 5.7478 8.2292 5.3977 8.9999"></path>
        <path d="M4.75 4.75L4.75 8.25C4.75 8.8023 5.1977 9.25 5.75 9.25H9.25"></path>
      </svg>
    );
  }
);

Clear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clear.displayName = 'Clear';

export default Clear;
