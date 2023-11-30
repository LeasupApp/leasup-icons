import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NER = forwardRef(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={(size * 3) / 4}
        viewBox="0 0 640 480"
        className="flag-icon"
        {...rest}
      >
        <path fill="#0db02b" d="M0 0h640v480H0z"></path>
        <path fill="#fff" d="M0 0h640v320H0z"></path>
        <path fill="#e05206" d="M0 0h640v160H0z"></path>
        <circle cx="320" cy="240" r="68" fill="#e05206"></circle>
      </svg>
    );
  }
);

NER.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NER.displayName = 'NER';

export default NER;
