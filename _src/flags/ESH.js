import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ESH = forwardRef(
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
            <path fillOpacity=".7" d="M-158.7 0H524v512h-682.7z"></path>
          </clippath>
        </defs>
        <g
          fillRule="evenodd"
          clipPath="url(#a)"
          transform="translate(148.8) scale(.94)"
        >
          <path d="M-158.3 0h680.9v255.3h-680.9z"></path>
          <path fill="#007a3d" d="M-158.3 255.3h680.9v255.3h-680.9z"></path>
          <path fill="#fff" d="M-158.3 148.9h680.9v212.8h-680.9z"></path>
          <path fill="#c4111b" d="m-158.3 0 340.4 255.3-340.4 255.3Z"></path>
          <circle cx="352.3" cy="255.3" r="68.1" fill="#c4111b"></circle>
          <circle cx="377.9" cy="255.3" r="68.1" fill="#fff"></circle>
          <path
            fill="#c4111b"
            d="m334 296.5 29.1-20.7 28.8 21-10.8-34 29-20.9-35.7-.2-11-34-11.2 33.9-35.7-.2 28.7 21.2-11.1 34z"
          ></path>
        </g>
      </svg>
    );
  }
);

ESH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ESH.displayName = 'ESH';

export default ESH;