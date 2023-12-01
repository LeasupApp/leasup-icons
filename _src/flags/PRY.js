import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PRY = forwardRef(
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
        <path fill="#0038a8" d="M0 319.7h640V480H0z"></path>
        <path fill="#fff" d="M0 160h640v160H0z"></path>
        <path fill="#d52b1e" d="M0 0h640v160H0z"></path>
        <g
          fill="none"
          stroke="#000"
          transform="translate(-116.4) scale(1.45455)"
        >
          <circle cx="300" cy="165" r="42.2" strokeWidth="1.1"></circle>
          <circle cx="300" cy="165" r="34.7" strokeWidth=".5"></circle>
          <circle cx="300" cy="165" r="26.6" strokeWidth=".4"></circle>
        </g>
        <path d="m287.3 263.7-7.1 4.2-2.2-3.7a6.2 6.2 0 0 1-.7-1.6 2 2 0 0 1 .1-1.3c.2-.4.5-.7 1-1 .4-.2.7-.3 1.1-.3a2.3 2.3 0 0 1 1.1.2l.8.6v-1.3l.3-.5 1.5-2.3 1.4 2.5-1.4 2.4-.3.8.1.6.1.2 3-1.7zm-5.5.3-.6-1-.4-.5a.7.7 0 0 0-.5-.2.8.8 0 0 0-.5.1l-.4.6c0 .2.1.5.4.9l.5 1zm-6.7-5.5-2.2-6.5 1.7-.6 1.3 4.1 1.3-.4-1.3-3.8 1.6-.5 1.3 3.7 1.5-.5-1.4-4.2 1.8-.5 2.2 6.6zm-2.9-9.7-.4-4.2c-.2-1 0-1.6.4-2.1.4-.6 1-.9 1.8-1 .8 0 1.5.1 2 .6.5.4.8 1.2 1 2.2l.1 1.4 3-.4.4 2.6zm3.3-3-.1-.6c0-.5-.2-.8-.4-1a.8.8 0 0 0-.7-.2 1 1 0 0 0-.6.4c-.2.1-.2.5-.2 1l.1.7zm-3.5-12.5.3-2.6 4.8.6a4.2 4.2 0 0 1 1.4.4c.4.2.8.4 1 .8.4.3.5.7.6 1 .2.6.2 1.2.1 1.9l-.2 1.3c-.1.5-.3.8-.5 1.1a3 3 0 0 1-1.8 1.3h-1.4l-4.9-.5.3-2.5 5 .5c.4 0 .8 0 1-.2.4-.2.5-.6.6-1a1.4 1.4 0 0 0-.3-1c-.2-.4-.6-.5-1-.6zm1-6 1.7-4.6c.2-.8.6-1.3 1.1-1.5a2 2 0 0 1 1.6-.2c.5.2.8.5 1 .9.2.3.3.6.3 1 .3-.5.7-.8 1.1-1a2 2 0 0 1 1.4 0 2.2 2.2 0 0 1 1.5 1.8v1l-.3 1-1.5 4.2zm4-1.4.4-1.1c0-.4.1-.7 0-.8 0-.2-.2-.4-.4-.5a.7.7 0 0 0-.6 0c-.2.2-.4.4-.5.8l-.4 1zm3 1 .5-1.2c.1-.4.2-.7 0-1a.8.8 0 0 0-.4-.4.7.7 0 0 0-.7 0l-.5.9-.4 1.2zm-3-9.6 1.3-2.2 5.4 3.2 2-3.4 1.8 1-3.4 5.6zm5-7.6 1.6-2 6.4 5.3-1.6 2zm11.1-4.3 2.2-1c.3.6.4 1.2.5 1.7a3.1 3.1 0 0 1-.3 1.5 4.5 4.5 0 0 1-1.2 1.5 4 4 0 0 1-2 1.1 3.5 3.5 0 0 1-2 0 4.7 4.7 0 0 1-2-1.6c-1-1-1.4-2-1.3-3.1a4.2 4.2 0 0 1 1.6-2.9 4.2 4.2 0 0 1 2.3-1c.7-.1 1.5 0 2.3.5l-1.4 1.9a1.9 1.9 0 0 0-.6-.3 1.5 1.5 0 0 0-.7 0 1.5 1.5 0 0 0-.6.4 1.5 1.5 0 0 0-.6 1.4c0 .4.4.9.8 1.4.6.7 1.1 1.1 1.6 1.2.4 0 .8 0 1.2-.4.4-.3.6-.6.6-1s-.1-.8-.4-1.3zm8.8-3.2-2.5 1.4.3 1.4-2.3 1.2-1.2-8.7 2.5-1.3 6.6 5.8-2.4 1.3zm-1.3-1.3-2.2-2.2.6 3zm7.8-8.5 3.8-.6a4.6 4.6 0 0 1 1.8 0c.5.1 1 .3 1.3.7s.7.7.9 1.2c.2.4.4 1 .4 1.5.2.9.2 1.6.1 2a3.4 3.4 0 0 1-.6 1.4 2.7 2.7 0 0 1-1 .9 6 6 0 0 1-1.5.5l-3.7.6zm2.9 1.4.8 4.5.6-.1c.5-.1.9-.2 1-.4.3-.1.4-.4.5-.7v-1.4c-.2-.9-.5-1.4-.8-1.7-.3-.3-.8-.4-1.5-.3zm7.8-2.8 6.8.3v1.8l-4.3-.2-.1 1.3 4 .2-.1 1.7-4-.2v1.6l4.4.2-.1 1.9-7-.3zm10 .8 2.4.6-1.5 6 4 1-.6 2-6.3-1.6zm13.2 4.4 3.7 2.2c.8.4 1.3 1 1.4 1.6.2.6 0 1.3-.3 2a2.5 2.5 0 0 1-1.7 1.3c-.6.1-1.4 0-2.3-.6l-1.2-.7-1.6 2.6-2.2-1.3zm.4 4.4.6.3 1 .3a.8.8 0 0 0 .6-.4 1 1 0 0 0 0-.7c0-.3-.2-.5-.6-.8l-.6-.3zm7.2 9.6-2.1-2-1.2.7-2-1.7 8-4 2 2-3.4 8.1-2-1.8zm.8-1.7 1.4-2.8-2.7 1.6zm1 5.5 6.9-4.7 2.3 3.5 1 1.7-.1 1.2a2.3 2.3 0 0 1-1 1.1c-.3.3-.7.4-1 .4a2.3 2.3 0 0 1-1.2-.2c-.2 0-.5-.3-.8-.5l.2.7-.2.6a3.3 3.3 0 0 1-.2.6l-1.3 2.3-1.6-2.3 1.3-2.6.3-.7a1 1 0 0 0-.2-.7l-.1-.2-2.8 2zm5.5-.6.7.9.4.4c.2.2.3.2.5.2a.8.8 0 0 0 .5-.1.8.8 0 0 0 .3-.6c0-.2 0-.5-.3-.9l-.7-.9zm2.6 12.4-1-2.8-1.5.2-1-2.5 8.9-.1 1 2.6-6.5 6-1-2.6zm1.5-1.2 2.4-2-3.1.3zm2.1 9 1.7-.2.6 3.9-3.5.5a8 8 0 0 1-1.3-1.8 6.8 6.8 0 0 1-.6-2 5 5 0 0 1 .1-2.5 4 4 0 0 1 1.3-1.6 4.9 4.9 0 0 1 2.2-.9 5 5 0 0 1 2.4.2 3.6 3.6 0 0 1 1.7 1.4c.4.6.6 1.3.8 2.2v2a2.7 2.7 0 0 1-.6 1.3c-.3.4-.7.6-1.2.9l-.8-2.4c.3-.1.5-.3.7-.6s.1-.6 0-1a1.7 1.7 0 0 0-.7-1.2c-.4-.3-1-.4-2-.2a3 3 0 0 0-1.7.7c-.4.4-.5 1-.4 1.5 0 .3.1.6.3.8l.5.8h.8zm5.4 12-.2 2.6-5-.4a4.2 4.2 0 0 1-1.3-.4 3 3 0 0 1-1-.8 3 3 0 0 1-.6-1.1 5.1 5.1 0 0 1-.2-1.8l.2-1.3.5-1.2a3 3 0 0 1 .8-.8 2.6 2.6 0 0 1 1-.4 4.9 4.9 0 0 1 1.4-.2l5 .5-.3 2.5-5-.4c-.5 0-.9 0-1.1.3a1.4 1.4 0 0 0-.5 1c0 .4 0 .8.3 1 .2.3.5.5 1 .5zm-9.1 8.8.9-2.8-1.2-.8.8-2.5 7 5.6-1 2.6-8.8.4.9-2.5zm1.9 0 3 .1-2.5-1.8zm3 6.8-1.5 2.4h-3.3l1.5 2.9-1.4 2.4-2.5-5.2-3-1.8 1.4-2.2 3 1.8z"></path>
        <g fill="#009b3a" stroke="#000" strokeWidth=".1">
          <path d="M328.1 211.3s23.4 10.1 19.3 30.9c-4 20.8-17 20.6-22.2 23-5 2.2-8.6 5.5-10.6 5-2-.4-4.7-2-4.7-2s-.2 3.5 3.9 4c4.1.7 9.5-5.3 12-6 2.6-.6 18.5-2.4 22.4-23.5 4.5-22.6-20-30.7-20-31.4z"></path>
          <path d="M339.9 215.8a3.2.8 75.1 0 1-1.5 0 3.2.8 75.1 1 1 1.5 0z"></path>
          <path d="M339.1 216a3.3.7 63.3 1 1-1.4.5 3.3.7 63.3 0 1 1.4-.5zm-2.3 1.5a3.1.8 17 0 1-.2 1.6 3.1.8 17 0 1 .2-1.6z"></path>
          <path d="M337.1 216.7a3.3.7 34.2 1 1-.7 1.3 3.3.7 34.2 1 1 .7-1.3z"></path>
          <path d="M338.1 216.3a3.3.7 46.2 1 1-1 1 3.3.7 46.2 0 1 1-1z"></path>
          <path d="m339.7 219.2-1 .6c-.3 0-.6-.3-1.2 0s-1 .9-1.1 1.2c-.1.3.2.5.9.1.7-.3.9-.9 1.2-1.1l1.3-.7.8-1.3c.3-.4 1.2-1 1.6-1.8.3-.6.2-1.1-.2-.9a3 3 0 0 0-1.2 1.3c-.2.4 0 1-.3 1.4l-.8 1.2zm7.3 2.4a1 4.8-1.6 1 1-2.2-.5 1 4.8-1.6 1 1 2.2.5z"></path>
          <path d="M345.8 221.5a5 1 77.5 1 1-2.2.1 5 1 77.5 1 1 2.1 0z"></path>
          <path d="M342 222.7a4.7 1.1 35 1 1-.7 2.2 4.7 1.1 35 1 1 .7-2.2z"></path>
          <path d="M342.8 221.6a5 1 50.9 0 1-1.4 1.6 5 1 50.9 1 1 1.4-1.5z"></path>
          <path d="M344.3 221.5a5.1 1 61.8 1 1-1.8 1 5.1 1 61.8 1 1 1.8-1z"></path>
          <path d="m345.6 226.4-1.8.4c-.3 0-.6-.7-1.5-.5-.9.2-1.7.8-2 1.2-.2.4.1.8 1.2.6 1.2-.2 1.6-1 2.2-1 .5-.2 1.4-.4 2-.4.2-.4 1-1.2 1.5-1.6.5-.5 2-1 2.7-1.8.7-.8.7-1.6 0-1.5a4.8 4.8 0 0 0-2 1.3c-.5.6-.4 1.5-.9 2l-1.4 1.3zm5.1 4.9a1 4.8 8.7 1 1-2-1 1 4.8 8.7 1 1 2 1z"></path>
          <path d="M349.6 231a1 5-2 1 1-2-.3 1 5-2 1 1 2 .3z"></path>
          <path d="M345.7 231.4a4.7 1.1 46 1 1-1 2 4.7 1.1 46 1 1 1-2z"></path>
          <path d="M346.7 230.5a5 1 61.8 1 1-1.7 1.3 5 1 61.8 1 1 1.7-1.3z"></path>
          <path d="M348.1 230.7a5.1 1 72.5 1 1-1.9.7 5.1 1 72.5 1 1 2-.7z"></path>
          <path d="M348.5 235.8h-1.7c-.3 0-.5-.8-1.4-.8a3.3 3.3 0 0 0-2.1.8c-.4.4-.1.8 1 .8s1.7-.5 2.3-.6h2l1.8-1.2c.6-.4 2.1-.6 3-1.3.7-.6.9-1.4.3-1.4a5 5 0 0 0-2.3.9c-.5.4-.6 1.3-1.2 1.7-.4.2-1.6 1.1-1.7 1m2.5 6.4a1 4.8 31.3 0 1-1.4-1.7 1 4.8 31.3 0 1 1.4 1.7"></path>
          <path d="M350.1 241.3a1 5 20.6 0 1-1.8-1.1 1 5 20.6 0 1 1.8 1.1m-3.7-1.2a4.8 1 70 0 1-1.8 1.5 4.8 1 70 0 1 1.8-1.5"></path>
          <path d="M347.6 239.7a1 5.1-4.9 0 1-2 .5 1 5.1-4.9 1 1 2-.5"></path>
          <path d="M349 240.4a1 5.2 5.5 1 1-2-.1 1 5.2 5.5 1 1 2 .1"></path>
          <path d="M347.3 245.3s-1.4-.5-1.6-.7c-.3-.2-.1-.8-1-1.3a3.1 3.1 0 0 0-2.2 0c-.5 0-.4.6.6 1 1 .6 1.8.2 2.3.4l1.8.9c.5-.2 1.6-.3 2.2-.4.6-.1 2.1.4 3.2 0 .9-.3 1.3-1 .7-1.2a4.5 4.5 0 0 0-2.3 0c-.7.1-1.1 1-1.8 1-.5 0-1.9.4-2 .3m1 7.7a1.3 5.5 48.5 1 1-1.1-2.4 1.3 5.5 48.5 1 1 1 2.4"></path>
          <path d="M347.3 251.9a1.2 5.8 37.5 1 1-1.5-2 1.2 5.8 37.5 1 1 1.5 2"></path>
          <path d="M343.7 249.2a1.3 5.5-3.5 1 1-2.4 1 1.3 5.5-3.5 1 1 2.4-1"></path>
          <path d="M345.1 249.2a1.2 5.9 11.6 0 1-2.3-.2 1.2 5.9 11.6 1 1 2.3.1"></path>
          <path d="M346.3 250.4a1.2 6 22.1 1 1-2.1-.8 1.2 6 22.1 1 1 2.1.8"></path>
          <path d="M343 255.3a16.3 16.3 0 0 1-1.6-1.4c-.2-.3.1-1-.7-1.8s-1.8-1-2.4-1c-.6.1-.6.7.3 1.6 1 1 2 .8 2.4 1.2.6.4 1.4 1.1 1.7 1.6l2.6.4c.7 0 2.2 1.1 3.5 1.1 1 0 1.8-.5 1.2-1a5.3 5.3 0 0 0-2.6-1c-.8 0-1.5.8-2.2.6l-2.3-.3m-2.3 7.3a1.4 6 79.8 1 1 .3-2.9 1.4 6 79.8 1 1-.3 2.9"></path>
          <path d="M340.5 261a1.3 6.4 68.5 0 1-.5-2.6 1.3 6.4 68.5 0 1 .5 2.7"></path>
          <path d="M338.4 256.4a1.4 6 26.2 0 1-2.8-.5 1.4 6 26.2 1 1 2.8.5"></path>
          <path d="M339.9 257.2a1.3 6.5 41.8 0 1-2.3-1.5 1.3 6.5 41.8 0 1 2.3 1.5"></path>
          <path d="M340.3 259.1a1.3 6.5 52.7 1 1-1.6-2 1.3 6.5 52.7 0 1 1.6 2"></path>
          <path d="M334.4 261.7a18.1 18.1 0 0 1-.7-2.2c-.1-.4.6-.8.3-2a4.3 4.3 0 0 0-1.9-2.3c-.5-.3-.9.2-.5 1.6.4 1.4 1.4 1.9 1.7 2.6l.8 2.4 2.2 1.9c.6.5 1.5 2.4 2.7 3.1 1 .7 2 .5 1.8-.2a6.2 6.2 0 0 0-2-2.4c-.7-.6-1.8-.3-2.5-.8-.4-.5-2-1.6-2-1.7"></path>
          <path d="M330.8 268a1.8 6.1 89 0 1 0-3.5 1.8 6.1 89 0 1 0 3.5"></path>
          <path d="M330 262.5a1.7 6.3 37.6 0 1-2.7-2.2 1.7 6.3 37.6 1 1 2.6 2.2"></path>
          <path d="M330.8 265.3a1.7 6.2 66.5 0 1-1.2-3.3 1.7 6.2 66.5 0 1 1.2 3.3m1.7-53.4a3.8.8 41.1 0 1-1.5.8 3.8.8 41.1 1 1 1.5-.8m-1.9 1.5a3.9.8 8.2 0 1 .3 1.6 3.9.8 8.2 1 1-.3-1.6"></path>
          <path d="M331.4 212.4a4 .7 26.8 1 1-.8 1.3 4 .7 26.8 0 1 .8-1.3M303.7 262s5.1 1.1 9.6 2.7c4.5 1.7 11.3 7.2 13.1 7.6 2 0 4.9-.7 6-3.6-3.2.8-5 2.1-8 .5-1.1-.4-4.6-3.6-8.5-5.3-3.8-1.7-11.5-3.6-11.5-3.6l-.7 1.7m5.5-46.5 5.9-3.1-6.5 1.7-.8 1.1 1.4.3"></path>
          <path d="M314.8 217c-2.3-.5-5.8-1.3-8-1.4 1.5-1.7 3.6-4.7 5-6.4-1 1.7-2.3 4-2.8 5.5 1.5.9 4 1.6 5.8 2.2"></path>
          <path d="M308.1 215.9a314.4 314.4 0 0 1 5.3-4.1l-6.1 2.7-.6 1.3h1.4"></path>
          <path d="M313.7 216.9c-2.3-.5-5.8-1.3-8-1.5 1.4-1.7 3.5-4.7 4.8-6.6-.8 1.8-2.2 4.1-2.7 5.8 1.6.9 4.1 1.6 6 2.3"></path>
          <path d="m307.3 216.2 6.1-2.6-6.6 1.1-.9 1 1.3.5"></path>
          <path d="M313 217c-2.3-.3-6-.7-8.2-.6 1.3-2 3-5.3 4.1-7.3-.6 1.9-1.7 4.4-2 6.1 1.7.8 4.3 1.2 6.1 1.7"></path>
          <path d="m306.6 216.2 4.2-5-5.3 3.9-.3 1.3 1.4-.2"></path>
          <path d="M313 217.3c-2.5 0-6.4-.3-8.8 0 1.2-2.3 2.7-6 3.6-8.3-.4 2.1-1.3 5-1.4 6.9 1.8.6 4.6 1 6.6 1.4"></path>
          <path d="m305.8 217.4 5-4.9-6.1 3.5-.4 1.4h1.5"></path>
          <path d="M311.9 217.4c-2.7 0-6.8-.1-9.5.2 1.8-2.5 4.2-6.6 5.6-9.1-1 2.3-2.4 5.4-3 7.5 1.9.7 4.8 1 6.9 1.4"></path>
          <path d="m304 217.8 6.6-5.5-7.4 3.9-.8 1.6h1.6"></path>
          <path d="M311 217.6c-2.7.4-6.9.8-9.4 1.5 1.3-2.7 3.1-7 4.2-9.7-.6 2.4-1.7 5.6-2 7.8 2 .4 5 .3 7.1.4"></path>
          <path d="m303.2 218.9 5-7-6.3 5.7-.3 1.7 1.6-.4"></path>
          <path d="M309.4 218.4c-2.6.3-6.8.5-9.4 1 1.5-2.6 3.5-6.8 4.8-9.4-.8 2.3-2 5.5-2.4 7.7 2 .5 5 .5 7 .7"></path>
          <path d="m302.3 219.6 6.4-5.5-7.3 3.9-.7 1.6h1.6"></path>
          <path d="M308.7 218.7c-2.7.6-6.9 1.3-9.4 2.1 1.2-2.7 2.8-7.1 3.8-9.8-.5 2.4-1.4 5.6-1.6 7.8 2 .3 5 0 7.2-.1"></path>
          <path d="m301.2 220 4-7.7-5.4 6.6-.1 1.7 1.5-.7"></path>
          <path d="M308.7 219.1c-3 .8-7.4 1.8-10 2.8 1-3.1 2.1-8 2.9-11.1-.3 2.7-.9 6.3-.8 8.8 2.3.2 5.5-.3 7.8-.5"></path>
          <path d="m300.4 221.7 5.2-7.6-6.6 6.1-.3 2 1.7-.5"></path>
          <path d="M307.5 220c-2.8.9-7.2 2.1-9.8 3.3.8-3.2 1.8-8.1 2.4-11.2-.1 2.7-.5 6.3-.3 8.7 2.2.1 5.4-.6 7.7-.8"></path>
          <path d="m299.4 222.8 3.9-8.4-5.6 7.2v2l1.7-.8"></path>
          <path d="M306.4 221.2c-2.8.6-7.3 1.5-10 2.4 1.1-3 2.5-8 3.4-11-.4 2.7-1.1 6.4-1.1 8.7 2.2.3 5.4-.1 7.7-.2"></path>
          <path d="m298.4 223.6 6.4-6.6-7.5 4.9-.6 1.8 1.7-.1"></path>
          <path d="M305.2 222.3c-2.9.4-7.3.8-10 1.5 1.3-3 3-7.8 4-10.8-.6 2.7-1.5 6.3-1.7 8.7 2.2.5 5.4.4 7.7.6"></path>
          <path d="m297.2 223 4.3-8.3-5.9 7v1.9l1.6-.7"></path>
          <path d="M305.5 221.3c-3 1.3-8 3-10.9 4.6 1-3.7 2-9.5 2.6-13.1 0 3.1-.5 7.4-.3 10.1 2.5 0 6-1.1 8.6-1.6"></path>
          <path d="m296.6 225.4 5.2-9.4-6.9 8-.2 2.2 1.9-.8"></path>
          <path d="M304.3 222.5c-3 1.4-7.8 3.4-10.6 5.1.8-3.6 1.5-9.5 2-13 0 3-.2 7.3.1 10 2.5-.3 6-1.5 8.5-2.1"></path>
          <path d="m295.5 226.8 3.8-10.1-5.7 9 .2 2.3 1.7-1.2"></path>
          <path d="M303 223.3c-3 1.5-7.8 3.5-10.6 5.3.7-3.7 1.4-9.5 1.9-13.1 0 3-.2 7.3.2 10 2.5-.3 6-1.6 8.5-2.2"></path>
          <path d="m294.7 228 5.8-8.9-7.4 7.3-.3 2.2 1.9-.6"></path>
          <path d="M302.7 222.8c-2.7 2.2-7 5.4-9.4 7.8 0-3.8-.5-9.5-.8-13 .6 2.9 1.3 7 2.3 9.5 2.4-.9 5.5-3 8-4.2"></path>
          <path d="m295 228.5.6-10.7-2.8 10.4.8 2 1.4-1.7"></path>
          <path d="M302 223.8c-2.8 2.2-7 5.3-9.5 7.7 0-3.7-.5-9.5-.8-13 .7 3 1.3 7 2.3 9.5 2.4-.8 5.5-3 8-4.2"></path>
          <path d="m294.3 230.3 2.7-10.5-4.7 9.6.3 2.2 1.7-1.3"></path>
          <path d="M301.6 224c-2.5 2.6-6.6 6.4-8.9 9-.4-3.7-1.5-9.6-2.2-13.2 1 3 2.1 7.1 3.4 9.5 2.3-1.1 5.4-3.6 7.7-5.2"></path>
          <path d="m294.3 231.6.5-11.1-2.7 10.8.8 2 1.4-1.7"></path>
          <path d="M300.8 226c-2.7 2.2-7 5.5-9.6 8 0-3.8-.7-9.8-1-13.5.7 3 1.5 7.3 2.5 9.9 2.5-1 5.7-3.1 8.1-4.5"></path>
          <path d="m293.5 232.9 3.8-10.5-5.8 9.3.2 2.3 1.8-1.1"></path>
          <path d="M300.8 226c-2.5 2.5-6.3 6.4-8.5 9.1-.4-3.8-1.5-9.8-2.1-13.4 1 3 2 7.2 3.2 9.6 2.3-1.2 5.1-3.7 7.4-5.3"></path>
          <path d="m293.6 233.4-.4-11-1.8 11 1 1.9 1.2-1.9"></path>
          <path d="M299.6 226.8c-2.4 2.6-6.1 6.5-8.2 9.3-.5-4-1.8-9.8-2.5-13.5 1 3 2.3 7.2 3.5 9.6 2.2-1.2 5-3.8 7.2-5.4"></path>
          <path d="m293 234.5 1.2-11.2-3.3 10.6.7 2.2 1.4-1.6"></path>
          <path d="M299 227.2c-2 2.9-5.5 7-7.4 10-.8-3.8-2.5-9.5-3.5-13 1.3 2.8 2.8 6.8 4.2 9.1 2.1-1.4 4.7-4.2 6.8-6"></path>
          <path d="m293 235.6-.8-11.3-1.4 11.2 1 2 1.1-2"></path>
          <path d="M298.9 227.9c-2 3-5.3 7.3-7 10.4-1-3.8-3-9.5-4.2-13 1.4 2.8 3.1 6.8 4.7 9 2-1.5 4.5-4.5 6.5-6.4"></path>
          <path d="m293.6 236.6 1.2-11.3-3.2 10.6.6 2.3 1.4-1.6"></path>
          <path d="M298.4 229c-1.7 3.1-4.5 8-6 11.3-1.3-3.6-3.8-9-5.3-12.4 1.7 2.6 3.7 6.3 5.5 8.4 1.9-1.8 4-5.2 5.8-7.4"></path>
          <path d="m293.3 237.6-3.2-10.8 1 11.3 1.5 1.6.6-2.1"></path>
          <path d="M298.4 230.2c-1.8 3.2-4.8 8-6.3 11.3-1.3-3.6-3.8-9-5.4-12.3 1.7 2.6 3.8 6.3 5.6 8.3 2-1.8 4.2-5.1 6-7.3"></path>
          <path d="m293.4 239.6-1.2-11.3-1 11.3 1.1 2 1.1-2"></path>
          <path d="M298.6 231.2c-1.9 3.1-5 7.9-6.5 11.1-1.3-3.6-3.7-9-5.2-12.4 1.7 2.6 3.7 6.4 5.5 8.4 2-1.7 4.3-5 6.2-7.1"></path>
          <path d="m293.3 240.5-2.1-11-.1 11.2 1.3 1.8.9-2"></path>
          <path d="M297.8 232.8c-2 3-5.3 7.5-7 10.7-1.1-3.7-3.3-9.4-4.6-12.8 1.5 2.7 3.4 6.6 5 8.8 2.1-1.6 4.6-4.7 6.6-6.7"></path>
          <path d="m292.3 241.7 1-11.3-3.1 10.7.7 2.2 1.4-1.6"></path>
          <path d="M297.9 233c-1.7 3.3-4.6 8.3-6 11.6-1.4-3.5-4-8.8-5.7-12 1.8 2.4 4 6 5.8 8 2-1.9 4-5.3 5.9-7.5"></path>
          <path d="m292 242.7-3.5-10.6 1.3 11.2 1.5 1.6.6-2.2"></path>
          <path d="M297.4 233.9c-1.2 3.6-3.2 9-4 12.7-2-3.2-5.5-7.8-7.6-10.7 2.1 2.1 4.9 5.2 7 6.7 1.6-2.3 3.2-6 4.6-8.7"></path>
          <path d="m295 243.5-3.7-10.4 1.6 11.2 1.5 1.4.6-2.2"></path>
          <path d="M297.4 235c-1.2 3.6-3.2 9.1-4 12.7-2-3.2-5.4-7.7-7.6-10.5 2.1 2 4.9 5 7 6.6 1.6-2.3 3.2-6.1 4.6-8.8"></path>
          <path d="m295 245.3-4.8-9.7 2.8 10.8 1.7 1.2.4-2.3"></path>
          <path d="M297 235.9c-.7 3.7-2 9.5-2.5 13.2-2.3-2.9-6.3-7-8.7-9.4 2.3 1.7 5.4 4.4 7.7 5.5 1.3-2.5 2.4-6.5 3.5-9.3"></path>
          <path d="m295.4 246.8-2.6-10.9.4 11.3 1.4 1.7.8-2"></path>
          <path d="M297 237c-.4 3.9-1.2 9.8-1.2 13.5-2.6-2.5-6.9-6-9.5-8.1 2.4 1.4 5.7 3.6 8.1 4.4 1-2.6 1.8-6.8 2.6-9.7"></path>
          <path d="m295.5 247.6-6.9-7.8 5.2 9.5 2 .6-.3-2.3"></path>
          <path d="M297.2 238.4c-.4 3.8-1.2 9.7-1.3 13.4-2.6-2.5-6.9-6-9.5-8.2 2.5 1.4 5.8 3.7 8.1 4.5 1.1-2.6 1.8-6.8 2.7-9.7"></path>
          <path d="M296.3 249.4 291 240l3.3 10.7 1.7 1.1.3-2.3"></path>
          <path d="M297.5 240c-.3 3.8-.8 9.7-.8 13.5a117 117 0 0 0-9.8-7.6c2.6 1.2 6 3.3 8.3 4 1-2.7 1.6-7 2.3-10"></path>
          <path d="m297 251.2-6.6-8.3 4.8 9.8 1.8.8v-2.3"></path>
          <path d="M297.6 241.8c-.3 3.8-.8 9.7-.7 13.5-2.7-2.4-7.1-5.6-9.9-7.6 2.6 1.3 6 3.3 8.4 4 1-2.7 1.5-7 2.2-10"></path>
          <path d="m297.5 252.6-4.5-10 2.5 11 1.6 1.3.4-2.3"></path>
          <path d="M297.7 242.9c.2 3.9.2 9.8.6 13.6a134 134 0 0 0-10.4-6.2c2.6.9 6.1 2.4 8.6 2.8.7-2.9.8-7.1 1.2-10.2"></path>
          <path d="m298.3 252.2-8.3-5.7 7 7.8 2 .1-.7-2.2"></path>
          <path d="M298 243.3c.3 3.9.7 9.8 1.3 13.5-3-1.9-7.8-4.3-10.8-5.8 2.7.8 6.3 2.2 8.8 2.5.5-2.9.4-7.1.7-10.2"></path>
          <path d="m299.3 254.3-7-8 5.3 9.6 1.9.7-.3-2.3"></path>
          <path d="M298.6 244.8c.5 3.8 1 9.7 1.9 13.4-3-1.7-8-3.8-11-5.1 2.7.6 6.4 1.8 8.8 2 .4-3 .2-7.2.3-10.3"></path>
          <path d="m300.6 255.7-8.3-5.9 7 8 2 .1-.7-2.2"></path>
          <path d="M298.9 246.4c.7 3.8 1.7 9.7 2.7 13.3-3.1-1.5-8.2-3.1-11.3-4.1 2.8.3 6.5 1.2 9 1 .2-2.9-.3-7-.4-10.2"></path>
          <path d="m301.6 256.9-7-8.2 5.2 9.7 2 .8-.2-2.3"></path>
          <path d="M299.3 247.4c1.1 3.7 2.6 9.5 4 13-3.3-1-8.4-2-11.6-2.6 2.8 0 6.5.3 9-.1 0-3-1-7.1-1.4-10.2"></path>
          <path d="m302 256.9-9.7-2 9.1 4.5 1.9-.7-1.4-1.8"></path>
          <path d="M300 248.6c1 3.7 2.5 9.4 3.8 12.9-3.2-1-8.3-2-11.5-2.6 2.8 0 6.5.3 9 0 0-3-1-7.2-1.3-10.3"></path>
          <path d="m303.5 257.9-9.2-4.5 8.2 6.7 2-.2-1-2"></path>
          <path d="M299.5 249.2c1.8 3.4 4.5 8.7 6.5 11.7-3.4-.2-8.6 0-11.8 0 2.7-.5 6.4-1 8.7-2-.7-2.9-2.4-6.7-3.4-9.7"></path>
          <path d="m305 258.9-9.6-2.6 9 5 1.8-.5-1.3-2"></path>
          <path d="M300.4 250.7c1.9 3.3 4.6 8.6 6.7 11.6-3.4-.2-8.6 0-11.8.2 2.6-.7 6.4-1.2 8.6-2.2-.6-2.9-2.4-6.7-3.4-9.6"></path>
          <path d="m306.1 259.7-8.9-5.3 7.8 7.4h2l-.9-2.1"></path>
          <path d="M301.2 251.5c2.1 3.1 5.3 8 7.6 10.9a90 90 0 0 0-11.6 1.7c2.6-1 6.2-2 8.4-3.3-1-2.8-3.1-6.5-4.4-9.3"></path>
          <path d="m306.8 260.5-9.6-.3 9.5 2.9 1.7-1.1-1.6-1.5m5.6-46.6 6.9-1.1-6.9.1-1.2.6 1.2.4"></path>
          <path d="M316.2 215.4c-2-.6-5-1.6-7.1-2l7.4-3.5c-1.5 1-3.8 2.2-5 3.2 1.2.8 3.3 1.6 4.7 2.3"></path>
          <path d="m312 214.1 6.8-1.8-7 .9-1 .7 1.3.2"></path>
          <path d="M316.5 215.9c-2.4-.3-6-.7-8.3-.7 1.8-1.6 4.2-4.1 5.7-5.7-1 1.5-2.6 3.4-3.3 4.8 1.6.7 4.1 1.1 5.9 1.6"></path>
          <path d="m309.6 214.6 7-.8-6.8-.2-1.3.6 1 .4"></path>
          <path d="m314.7 216.1-7.5-1.3 6.9-3.8c-1.4 1-3.4 2.4-4.4 3.4 1.3.6 3.5 1.2 5 1.7"></path>
          <path d="m309 214.6 6.1-2.7-6.7 1.8-.8.8h1.4"></path>
          <path d="M314.5 216.9c-1.7-.7-4.5-2-6.2-2.5l4.4-4.8c-.8 1.3-2 3-2.6 4.4 1.2 1 3 2 4.4 2.9"></path>
          <path d="m309.3 215 4.8-2-5.2.6-.6 1 1 .4m-4 44.6h-9.8l10 2.5 1.6-1-1.8-1.5"></path>
          <path d="m307.1 260.2-10-2.3 9.6 4.7 2-.6-1.6-1.8"></path>
          <path d="m308.8 260.9-10-.5 10 3 1.7-1-1.7-1.5"></path>
          <path d="M302.5 253.9c2.5 2.8 6.4 7.4 9.1 9.9-3.3.5-8.3 1.8-11.4 2.7 2.4-1.2 6-2.6 8-4-1.4-2.6-4-6-5.7-8.6"></path>
          <path d="m310.1 261.4-10-3.3 9.4 5.6 2-.4-1.4-2"></path>
          <path d="M303.4 254.5c2.8 2.6 7 6.7 10 9-3.2.9-8 2.8-11 4 2.3-1.4 5.6-3.2 7.4-5-1.6-2.4-4.5-5.5-6.4-8"></path>
          <path d="m311 262-9.5 1.9 10 .6 1.4-1.3-2-1.2"></path>
          <path d="m309 261.4-9.8.8 10.1 1.7 1.6-1.2-2-1.3"></path>
          <path d="m310.8 262-10.2-1.7 10 4 1.8-.7-1.6-1.7z"></path>
          <path d="m312.5 262.5-10 .2 10.2 2.3 1.6-1.1-1.8-1.4z"></path>
          <path d="M305.7 256c2.8 2.6 7 6.8 9.9 9.2-3.3.7-8.3 2.4-11.3 3.4 2.4-1.3 5.8-2.9 7.7-4.5-1.6-2.5-4.4-5.7-6.3-8.2z"></path>
          <path d="m313.9 262.9-10.2-2.6 9.8 5 1.9-.6-1.5-1.8z"></path>
          <path d="M306.6 256.5c3 2.4 7.6 6.2 10.7 8.2-3.2 1.1-7.8 3.5-10.6 4.9 2.2-1.7 5.3-3.7 7-5.5-1.8-2.4-5-5.3-7-7.6z"></path>
          <path d="m314.8 263.4-9.3 2.6h10l1.3-1.5-2-1z"></path>
        </g>
        <path
          fill="#fedf00"
          stroke="#000"
          strokeWidth=".4"
          d="m327.6 249.5-7.6-5.3-7.6 5.3 2.9-8.4-6.7-5.2h8.6l2.8-8.4 2.8 8.4h8.6l-6.7 5.2 2.9 8.4z"
        ></path>
      </svg>
    );
  }
);

PRY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PRY.displayName = 'PRY';

export default PRY;