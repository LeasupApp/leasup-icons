import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KNA = forwardRef(
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
        <defs>
          <clippath id="a">
            <path fillOpacity=".7" d="M-80.1 0h682.7v512H-80.1z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(75.1) scale(.9375)"
        >
          <path fill="#ffe900" d="M-107.8.2h737.6v511.3h-737.6z"></path>
          <path fill="#35a100" d="m-108.2.2.8 368.6L466.6 0l-574.8.2z"></path>
          <path
            fill="#c70000"
            d="m630.7 511.5-1.4-383.2-579 383.5 580.4-.3z"
          ></path>
          <path d="m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"></path>
          <path
            fill="#fff"
            d="m380.4 156.6-9.8-42.2 33.3 27 38-24.6-17.4 41.3 33.4 27-44.2-1.5-17.3 41.3-9.9-42.2-44.1-1.5zm-275.2 179-9.9-42.3 33.3 27 38-24.6-17.4 41.3 33.4 27-44.1-1.5-17.4 41.3-9.8-42.2-44.1-1.5z"
          ></path>
        </g>
      </svg>
    );
  }
);

KNA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KNA.displayName = 'KNA';

export default KNA;
