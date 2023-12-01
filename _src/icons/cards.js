import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cards = forwardRef(
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
        <path d="M5 5.82759C5 5.37052 5.37052 5 5.82759 5H10.1724C10.6295 5 11 5.37052 11 5.82759V10.1724C11 10.6295 10.6295 11 10.1724 11H5.82759C5.37052 11 5 10.6295 5 10.1724V5.82759Z"></path>
        <path d="M13 5.82759C13 5.37052 13.3705 5 13.8276 5H18.1724C18.6295 5 19 5.37052 19 5.82759V10.1724C19 10.6295 18.6295 11 18.1724 11H13.8276C13.3705 11 13 10.6295 13 10.1724V5.82759Z"></path>
        <path d="M13 13.8276C13 13.3705 13.3705 13 13.8276 13H18.1724C18.6295 13 19 13.3705 19 13.8276V18.1724C19 18.6295 18.6295 19 18.1724 19H13.8276C13.3705 19 13 18.6295 13 18.1724V13.8276Z"></path>
        <path d="M5 13.8276C5 13.3705 5.37052 13 5.82759 13H10.1724C10.6295 13 11 13.3705 11 13.8276V18.1724C11 18.6295 10.6295 19 10.1724 19H5.82759C5.37052 19 5 18.6295 5 18.1724V13.8276Z"></path>
      </svg>
    );
  }
);

Cards.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cards.displayName = 'Cards';

export default Cards;