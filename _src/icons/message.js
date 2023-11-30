import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Message = forwardRef(
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
        <path d="M12 18.25C15.866 18.25 19.25 16.1552 19.25 11.5C19.25 6.84483 15.866 4.75 12 4.75C8.13401 4.75 4.75 6.84483 4.75 11.5C4.75 13.2675 5.23783 14.6659 6.05464 15.7206C6.29358 16.0292 6.38851 16.4392 6.2231 16.7926C6.12235 17.0079 6.01633 17.2134 5.90792 17.4082C5.45369 18.2242 6.07951 19.4131 6.99526 19.2297C8.0113 19.0263 9.14752 18.722 10.0954 18.2738C10.2933 18.1803 10.5134 18.1439 10.7305 18.1714C11.145 18.224 11.5695 18.25 12 18.25Z"></path>
      </svg>
    );
  }
);

Message.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Message.displayName = 'Message';

export default Message;
