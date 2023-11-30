import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const COD = forwardRef(
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
        <path fill="#007fff" d="M0 0h640v480H0z"></path>
        <path
          fill="#f7d618"
          d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0 0 360v120h40l600-360V0h-40"
        ></path>
        <path fill="#ce1021" d="M640 0 0 384v96L640 96V0"></path>
      </svg>
    );
  }
);

COD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

COD.displayName = 'COD';

export default COD;
