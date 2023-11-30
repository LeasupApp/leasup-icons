import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Menu = forwardRef(
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
        <path d="M4.75 7H19.25" strokeWidth="1.25"></path>
        <path d="M4.75 17H14.75" strokeWidth="1.25"></path>
        <path d="M4.75 12H19.25" strokeWidth="1.25"></path>
      </svg>
    );
  }
);

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Menu.displayName = 'Menu';

export default Menu;
