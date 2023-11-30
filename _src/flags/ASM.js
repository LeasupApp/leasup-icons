import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ASM = forwardRef(
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
        <path fill="#006" d="M0 0h640v480H0Z"></path>
        <path fill="#bd1021" d="m-.6 240 640-240v480Z"></path>
        <path fill="#fff" d="m59.7 240 580-214.3v428.6"></path>
        <path d="M474 270.4c5.1.3 5 5.4 5 5.4l18 .4c2.3-6.3 4.8-5.6 9.2-2.4a32.9 32.9 0 0 0 8.7 4.2c1.7-9 14.5-7.2 14.5-7.2 5.6-13 6-12.9 2.7-14.5a10.7 10.7 0 0 1-4.6-4.5c-3-3.7-4.6-9.1-5-12.4-.4-3.3-4.2 1.6-5 .6-.6-1-6.3-.4-6.3-.4 1.4 1.5-3.4.6-3.4.6.5.4 0 1.7 0 1.7-.4-.6-4.1-1.2-4.1-1.2a6.1 6.1 0 0 1-1.1 1.6c-2-.8-6-.7-6-.7a20 20 0 0 0-10.9 2.8c-1.6.9-7.4 3.8-12.3 8.5-4.7 4.6-7.4 4-7.4 4-1.4 5.2-12.8 11.5-12.8 11.5-1.8 1.6-7.6 2.4-10.5 0-2.9-2.4 0-6.9 0-6.9 1.2-2 2.2-1.9 2.3-9 .1-4.7 5-8.5 10-14 6.3-6.8 15-18 15-18 0 3.4 1.8 4 1.8 4 1.7-3.5 4.2-6.3 4.2-6.3.1.3.5.4.5.4 2-2.6 3-3.6 3-3.6-.5-.3-6 0-11 4.4s-8.4 3-8.4 3c-3.5-1.2-3.8-4-3.8-4-2.5-10.9 7.4-18.7 7.4-18.7-13.4-3.2-3.7-20.3 13-27.5 16.6-7.2 16.4-10.5 16.4-10.5a13 13 0 0 1 1.8 3c.1 0 1.4-1.9 11-6.1 9.6-4.3 14.2-8 14.2-8 1.2 2.4 1 4 1 4 26.3-9.1 52-30.2 52-30.2.8 1.7.5 4.4.5 4.4 4.2-4 19.7-13.2 19.7-13.2a8.6 8.6 0 0 1-4.6 8.2 7.7 7.7 0 0 1 .8 2.3 360 360 0 0 0 14.4-9.5c4.3 3.7.4 9.8.4 9.8 1.6-.3 2.6-1.6 2.6-1.6 1.2 6.4-5.9 12-5.9 12 1.3 0 3.3-1.3 3.3-1.3-1.3 7-14.4 14.6-14.4 14.6 1.9 1.8 0 4-1.6 5-1.5 1-4.3 3.3-3.4 4.2.8 1 6.7-3.2 6.7-3.2 1 2.9-6.5 8.6-6.5 8.6 5.2.7 19.6-5.9 19.6-5.9-1.1 5.6-6.6 10-13.3 12.5-6.7 2.5-6.4 3-6.4 3 1.2.8 10.5-1.8 10.5-1.8-2.8 6.2-12.5 10.5-12.5 10.5 2.7 2.3 6.3-.4 10-2.9a58.2 58.2 0 0 1 14-6.4c5.3-1.9 9.2-.5 9.2-.5 4.6-1.4 8.4.6 8.4.6 8.7.7 9.6 3.9 9.6 3.9 1 .2 1.7.6 4 2.3 2.1 1.6 2 6.6 2 9.2-.2 2.4-.9 2.4-1.3 3-.4.8-.5 1.6-.5 2.5 0 1-2.2 6.9-15.7 6.9h-20.3c-1.2 0-2.5.7-2.5.7-5.7 2.8-2.7-2-9.4 3.6-6.8 5.5-10.2 4.6-10.2 4.6A90.1 90.1 0 0 1 568 221c-4 2.6-3.3 2.3.3 3.8s8.8 0 8.8 0c-3.4 2.3-1 3.4-1 3.4 4.4-2.7 7.2-1.7 7.2-1.7 1.4 3.9-3.8 10-3.8 10 2 .3 5.8 0 5.8 0-1 2.7-4.6 5.6-7.4 6.4-2.7 1-2.3 1.3-1.4 3 .7 1.6.1 3.3.1 3.3-4.8-3.3-5-.4-5-.4-.5 4-.4 9.6-.4 9.6-3.4-1.7-3.5.5-3.5.5-1 3.6-5.1 7.7-5.1 7.7-.2-2.2-2.2-2.8-2.2-2.8-2.2 4.2-6.1 6.7-6.1 6.7-.5 3.5.5 8.6.5 8.6-2.6-.6-3.5-.6-4 0-.3.7.6 1 .6 1l33.4.8c.5 0 2.5.3 2.5 3.8 0 3.7-3 3.9-3 3.9l-36.4-.9s.1 1-1.8 2-1.2-1.1-1.7 3.4c-.6 4.4-7.8-.4-7.8-.4-1.2 1.8-4 4-4 4-1.7-5-3.4-6.4-6-2.2-2.6 4.3 4.8 3.6 4.8 3.6s42.8-6.3 45.1-6.5c2.3-.3 4.9-.1 6 3.1 1 3.3-5.3 3.8-5.3 3.8l-44 4.8c-.9 2.6-4.5 2.4-4.5 2.4.3 2.5-2.3 4-3.6 5-1.4.8-5.6.5-5.6.5-5 3.4-7.6.7-7.6.7-3.3 1.4-5.4.8-8.1-.4-2.8-1.2-2.5-4.5-2.5-4.5l-27.8 3a6.7 6.7 0 0 0-2.2 1.2c1 1.3-2 4.3-2 4.3.9.5 2.5 2.1 2.7 5.5.2 3.7-4.5 4.3-2.2 7 2.3 2.5 6.7.3 11.5-2s9.5-2 11.5-2 7.8 1.6 11.4 2.8c3.6 1.2 4.8.4 5-1.4.2-1.7 1.9-2.3 1.9-2.3-.5 1.8.5 2.6.5 2.6a11 11 0 0 0 3.7-1.3c-.2 1.4-2 2.2-2 2.2-3.4 2.3 1.4 1.5 1.4 1.5 9.5-2 13-1.8 15.4-1.5a122.5 122.5 0 0 1 14.3 5.2c.4-1.2.1-4 .1-4 3 .8 4.2 2.5 4.2 2.5 1.2-1.2.4-3.4.4-3.4 9.7 5.5-2 8-5.1 9-3 1-3 2.3-3 2.3 2.5-.8 4.3-1.1 6.4-1.3 2.2-.2 1.4 0 6.5-1 5.2-1 7.8 1.2 7.8 1.2-4.3.2-5.5 1.5-5.5 1.5 2.6 1.7 0 3.4 0 3.4-3.8-5-7.2.1-7.2.1a15.3 15.3 0 0 1 6.4 1.4l5.4 2.7c3.6 1.6 2.9.6 5.6 1.6 2.8 1 1.7 3.7 1.7 3.7-1.1-2.2-3.7-3-3.7-3-.2 3-3.1 3.5-3.1 3.5 3.6-4-4.1-5.8-7.8-5.7-3.6 0-6.3 2.4-6.3 2.4 7.3 6.9 12.3 4.6 12.3 4.6-.9 2.5-6.9 1.5-6.9 1.5 2.8 2.2 2.5 3.6 2.5 3.6-1.5-1.4-4-.7-9.2-4-5.2-3.5-9.9-2.3-9.9-2.3 5.2 5.3-1.8 8.6-1.8 8.6-2.6 1.6 1 3.5 1 3.5-3.2.6-3.6-2.6-3.6-2.6-1.7-.4-4.2 1.6-4.2 1.6.2-3.2 4.6-1.6 4.6-5 .2-3.5-4-6.2-16.3-4.5-12.4 1.7-16-2.2-16-2.2-1 0-1.2 1-1.2 1 2 2 2.9 2.8 2.6 4.2-.4 1.3.6 1.8.6 1.8-2.3-.2-2.4-2.8-2.4-2.8 0 1.1-.5 1.2-1.3 2.3s0 2.7 0 2.7c-1-.8-2.7-1.8-1-4.3 1.2-1.8-2.7-4.2-2.7-4.2-1.5-1.5-5.6 0-5.6 0a14.9 14.9 0 0 1-13.3-3.7c-1 0-2.9-.6-2.9-.6-8.9 4-16.7-4.6-16.7-4.6-6.7 1.3-9.8-2-11.8-5.2a11.5 11.5 0 0 0-5.2-5c-2.6-1.6-5.2-6.2-2.6-8.7 2-2.1 1.5-2.6 1.5-2.6-3.5-5.9 6.1-7.7 6.3-9.2.3-2 2.3-3.3 4.5-3.4 2.2-.2 2.2 0 3.7-1.4 1.3-1.5 4 .3 4 .3.7-.4 5.5-4.1 9.7-2.2 4.3 1.9 7.9.6 7.9.6 3-.7 28-4 28-4 1.5-2.5 2.7-5.4 9.6-7s12-6 12-6c-1.2-1.2-3.2-1.2-4.2-1.3-1.1 0-3.2-2-3.2-2-1.3.6-2 .3-11 5.8-8.1 5-8.3-4.8-8.3-4.8H479c-.3 3.7-3 5.2-3 5.2l-6.5.3c-3.6-1.8-3.6-8.2-3.6-8.2-19.4.3-30.1 7.2-30.1 7.2-22-11.2-39.2-13.8-39.2-13.8a122.4 122.4 0 0 0 40.8-10.2 63.3 63.3 0 0 0 28.5 9c.5-5.4 4.1-6.7 4.1-6.7z"></path>
        <path
          fill="#ffc221"
          d="M442.3 314.6c-5.5 3.2-4.5 5-4 6s.5 2-1 3.6c-1.5 1.5-1.4 2-1.4 2 .3 5.4 4 6.6 5.7 8 1.4 1 3.6 4.5 3.6 4.5 2.9 4.1 5.9 4.2 8.1 4.2 2.3 0 2-.3 1-1.3l-3.4-2.7a17.6 17.6 0 0 1 5.9 4.1c5.6 6.2 10.8 5.4 13.1 5.2 2.3-.3 2-1.7 2-1.7a9 9 0 0 0-2.4-.4c-8.5-.8-11-6.4-11-6.4a24.1 24.1 0 0 0 15.6 6c2.4-.1 2.3.6 1.7.8l-2.4-.2c-1.1 0-1.1.3-.9.8.3.4 1.4.4 2.7.4 1.4 0 .3.1 3.8 2.8 3.6 2.8 12.3.5 12.3.5-5.7-1.3-6.4-4-6.4-4-7.7 1-10.8-3.6-10.8-3.6a32.5 32.5 0 0 0-5.6-3.5c-4.2-1.9-5-5.8-5-5.8 1.3 1.8 3.7 3.8 6.7 4.6 3 .8 3.8 1.2 3.8 1.2a3.8 3.8 0 0 1-2.3-.2c-3-1-1.3.3-1.3.3 3.4 2.7 4.3 2.5 4.3 2.5 8.6.9 4.3-2.6 4.3-2.6 6.2 1.5 7.2-.8 7.2-.8 1.3 2.7 6 1.7 6 1.7-6.2 3-1.5 2.1-1.5 2.1 6.3-1.1 7.6.5 7.6.5 1.6 1.5 3.4 1.4 3.4 1.4s1.2 0 3.5.4c2.4.5 6.2 2.5 9.6 2.2 3.5-.5 4 .6 4 .6-.6-.3-2.2-.5-4.8.7-2.7 1.3-7.4 1.6-14.2 0s-7.4-1.3-7.4-1.3c1.7 1.1 3.1 2.9 3.4 4 .3 1.2 1.5 1.2 1.5 1.2.5-1.5 2.5-2.1 2.5-2.1a27 27 0 0 0 5 2.8c.4-.7 0-1.3 0-1.3 2.6 2.5 5.6 1.7 5.6 1.7.8-.5.6-2 .6-2 1 0 1.2.6 2 1.2.7.4 3 .1 3 .1-.8-.4-1.5-1.7-1.5-1.7 3.5-2.3 11-1.3 11-1.3 5.3 1 4.7 4.5 4.7 4.5a10 10 0 0 1 2.5 2.1c.5-1.2 0-2.5 0-2.5 2.6 1.2 3 4 3 4 3-3.2-2.7-6.8-2.7-6.8 2.7-.4 5.7-.2 7.5 0a13.8 13.8 0 0 1 6.6 3.1c2.1 1.7 5.9 2.5 5.9 2.5-.1-.7-2.2-2-2.7-2.2-.4-.2-.6-.9-.6-.9 1.9.4 3.1.2 3.1.2-6.4-4-8.1-5.9-8.1-5.9 2.4.3 3.8-1.2 3.8-1.2-5.1 0-5.4-1.2-5.4-1.2.7.1 3.1.7 6.2.1s7.2 0 7.2 0c-2.2-3.6-10.7-3-13.5-2.8-2.8.2-3.8-.2-3.8-.2.4-.2.9-.6 3-.7 2.2 0 4.3.2 6.8-1.6 2.3-1.6 5.7-1 5.7-1-.8-1.6-4.7-2.2-8 0-3.5 2.1-6.5 1.5-6.5 1.5 5.3-.8 6.9-2.7 6.9-2.7-1.6-.4-2.5.1-5.8.8-3.2.6-4-.5-4-.5 3.5-2.1 6-3 6-3-3-.6-5.8-2-5.8-2-3.2 3-5.6 4.6-11.7 1.6-6-3.2-9.2-2.8-9.2-2.8 5.4-3.1 10.8-1.8 14.8.6 4 2.3 5 .4 5 .4-1.2-.7-1-1.5-1-1.5 9.6 4.9 13.8 2 15.9.5 2.1-1.5-1-3.4-1-3.4-.2 3-4 4.6-7.2 3.5-3-1-6-2.4-10.4-4.3-4.4-1.8-10-.8-15.1.2-5.2 1.1-5.9.6-6.4.2-.5-.4-.7-1.7-3.4-.6-2.6 1.1-8.8-1.8-12.6-2.7-3.8-1-10.1-.5-15.5 2.5-5.4 3.1-8.2 2.3-9.8 1.6-1.6-.8-2.7-2.8-.9-4.6s2-2.3 1.8-5c-.2-2.6-2.8-4.2-2.8-4.2 2.4-2.5 3-3 2.2-4-.8-1.2.4-1.2 1.8-1.8 1.4-.6.8-.7.5-1.5-.4-.8-1.2-.6-1.2-.6-3.1.1-4.9-.8-4.9-.8-5.2-2.4-10.1 2.3-10.1 2.3-3-2.3-3.7-.7-4.2-.2-.5.5-1.6 1-3 1-1.2.2-3.1.7-3.8 1.9 0 0-.6 1 .1 2 0 0 .8 1.2-.6 2.7-1.5 1.5-2 1.8-1.5 3.3.4 1.3.3 2.4-.3 3.3 0 0-.7-.7-.5-1.7.2-1 .2-1.6 0-2 0 0-1.5 1.4-1.8 2.4 0 0-.6-1.6 1.6-3.7 2-2 3-3.2 2.4-4-.4-.6-2 .4-2.3.6z"
        ></path>
        <path d="M448.4 338s-2.7-2-2.4-4.9c.3-2.7.3-3 0-3.7 0 0-.5.3-.4 1.4 0 1-.2 2.1-.3 2.3 0 0-1.3-2.3-2-2.8 0 0 .6-2.4-.2-3.4-.7-1.1-1.5-1.2-2.4-.8-1.2.4-2.1 1.5 2 4.8 0 0 1.5 1.3 2.5 3.9 1 2.6 2.8 3 3.1 3.2zm13-7.8s-.1-1.5 1.3-4.3a6.1 6.1 0 0 0 .3-5.6c-.3-.8-.6-.5.9-1.7 1.7-1.5-.7-3.4 2.3-6 0 0 1.8-1.6 2.3-2.3 0 0-3 1.6-5.2 2.5-2 .8-9.6 4.6-8 7.1 1.8 2.5 1.6 2.7 1.3 3.8 0 0-4.6-2.5-3-6.4 0 0 .8-1.5 2.7-3.4 1.8-1.6.8.4 4.3-1.7 0 0 2.7-1.6 4.3-3.9 0 0-2 1.2-2.6 1.4 0 0-4 .8-5.8 2.5-1.6 1.7-5.1 4.7-4 8 0 0-4-.4-5-4.7 0 0-7.6 9.4 8.4 13.8 0 0 3 .8 5.6 1z"></path>
        <path
          fill="#ffc221"
          d="M531.6 299c6-1 40.4-6.2 43.6-6.5 3.4-.3 4.7-.8 5.9 2 1.3 3-4.8 3.1-4.8 3.1l-41.1 4.7c-2 .2-2.5-.6-2.5-.6l-1.5-2s-.5-.6.4-.8z"
        ></path>
        <path
          fill="#5a3719"
          d="M447.3 317.7s-4.4 9.3 13 11.6c0 0 .1-1 .8-2.5.8-1.5 2.3-4.5.8-6.4-1.4-1.9 1.2-.9 1.5-3.4.5-2.5-.2-2.2 1-3.8 0 0-5.4 2-7.6 4.5-2 2.4 2.9 4.2 0 6.9 0 0-2.5-1-4-3.6 0 0-3.3 0-5.5-3.3z"
        ></path>
        <path d="M464.5 329.2s4.3 3.7 9.4 3.6c5.1-.3 7.4-1.6 8.7-3.6 0 0 1 1.5 1 2.6 0 0 4.4-3.7 12-.5s5.4 2.3 7.1 2.5c0 0-3.3-.5-10.7 2.9-7.7 3.5-27.7 2.3-27.6-7.5z"></path>
        <path
          fill="#5a3719"
          d="M457.3 312.6s1.9.3 3.8-1.9c0 0-2.6.5-3.8 2zM442.6 330s-3.6-2.8-1.3-3.4c0 0 1.7-.3 1.3 3.4z"
        ></path>
        <path d="M521.2 347.8s2-3.5 7.5-3.5 6.1 2.6 13.1 3c0 0-8.4 2.4-14.2.3-3-1.1-5.8-.2-6.4.2z"></path>
        <path
          fill="#5a3719"
          d="M466.3 331.7s8.4 5 15.7-.5c0 0 .6.6 1.2 2 0 0 5.6-5.4 15.5.4 0 0-1.2-.1-5.9 1.8-6.1 2.7-21.4 4.5-26.5-3.8z"
        ></path>
        <path d="M498.3 336.7s8 1 14.7.6c4.1-.2 8.6-1 6.4.4-2.3 1.3-1.1 1.5 8.4.7 9.4-1-.1 1.7 6.4 2.6 0 0-15.9 8-35.9-4.3z"></path>
        <path
          fill="#5a3719"
          d="M519.2 331.7s4.6-1.7 9 .3c4.3 2 3.6 2.2 6.5 2.5 0 0-2 2.9-6.7.6-4.8-2.3-6-2.8-8.8-3.4zm5.2 14.3s4.6-2.3 9.6 0c.6.4 2 1 3.3 1.2 0 0-3.8 1.3-7.8 0-1.7-.5-3-.9-5.1-1.2zm-22.7-8.2s10.3 1 15.8-.1c0 0-6.4 3 9.7 1.7 0 0 3.5-.4 3 .1-.3.5-.6 1 1.2 1.5 0 0-12 5.4-29.7-3.2z"
        ></path>
        <path d="M450.7 329.2s.2.7 2.4 1.7c2.3 1.1 3.5 2.9 4 3.9a5.6 5.6 0 0 0 3.5 2.9s-8 1.7-11.6-2.6c0 0-2.7-3 1.6-6"></path>
        <path
          fill="#5a3719"
          d="M513.7 347.6s-3.1-.2-7.5-1.7c-4.3-1.5-5.4-.2-7.9-2-2.4-1.9-7.3-.7-8.2-.6-1 .1-3.6 0-.3-2.1 0 0-2.6 0-3.6-1.4 0 0-1.2 1.2-5.6.8 0 0 2 3-6 2.1a10.3 10.3 0 0 0 11.1 3c0 .2-.5 2.5 3 3.5 3.8.9 4.5 1.6 6.4 2.3 0 0 .3-1.5-4.6-5 0 0 2.6-.2 6.4.7s12.2 3.1 16.8.4zm2 3.7s.8 1.8 3.2 1.4c2.4-.4 6.4-1 10.2.8 0 0 .7-3.2-7-3.4 0 0-4.8.2-6.4 1.2zm-65.2-21s-3 2.5-.3 5c2.4 2.3 6.2 2.1 8 2 0 0-1-.6-2-2-1-1.5-1-2.5-3-3.4-2.1-.9-2.3-1.1-2.7-1.6zm-3-12.6s-4.6 9.3 13 11.6c0 0 0-1 .7-2.5.6-1.5 2.1-4.5.8-6.4-1.6-1.9 1.1-.9 1.5-3.4.4-2.5-.3-2.2 1-3.8 0 0-5.5 2-7.7 4.5-2 2.4 2.9 4.2 0 6.9 0 0-2.5-1-4-3.6 0 0-3.3 0-5.5-3.3z"
        ></path>
        <path d="M493.3 339.3s3.7-.6 13 2.9c9.4 3.4 13.3 2.6 14.6 2.5 0 0-5.2 2.8-13.4-.8-7.2-3.2-7.6-2-14.2-4.6z"></path>
        <path
          fill="#ffc221"
          d="M551.8 337.2s2 0 3.4.5c0 0 .7-.7 2.7-1 0 0-1.3-1.2-6.1.5zm-6.4-5.2s2.1 0 2.8-1.2c0 0-1.1-1.3-2.8-2 0 0 .4 1.6 0 3.2zm-71.7-23.8s-.5-1 1.8-1.4l31.3-4.5s1.5 0 1.7 1c.3 1.1-.1 1.9-7.2 2.7l-25.6 3.2s-1.9.3-2-1z"
        ></path>
        <path
          fill="#ffc221"
          d="M502 306.9s0 4.1 4.2 4.7c4 .6 5.5-.2 6.5-2.3.3-.7 1.6-5-.2-5.3-.8-.1-2 0-2.9.3-1.4.7-2.7 1.4-2.3 2 1 1.6 1.2 2 1 2-1.2.3-1.8-.6-2-1.2-.3-.8.5-1.2-2.2-.8-1.2.1-2 .1-2 .6zM519.5 303.7c2 .3 1.9 4.8-.6 6.9-2.8 2.2-5.4 1.3-5.4 1.3-1.4-.5-1.2-.4-.1-2 1-1.5 1.5-3.6.9-5-.2-.5.3-.9 1-1 0 0 2-.4 4.2-.2z"
        ></path>
        <path
          fill="#ffc221"
          d="M521.3 304.1s1.6 2-.4 5.5c0 0-.8 1 1.1.9 1.8-.2 6.1-2.2 5.7-4.8 0 0-.2-.6-1.3-.6s-.2-.5.3-.8c.4 0 1.9-.6-1.9-3 0 0-.6-.6-1.3-.3-.6.2-2.6 1-2.6 2.2 0 .5.4 1 .4 1z"
        ></path>
        <path
          fill="#ffc221"
          d="M525.4 300.9s3 2.1 3 2.8c0 .6-.3 1.5.5 1.3.8 0 4-.7 3-2.8-.8-2.1-1.7-3-3.2-3.4-1.5-.6-1.9.1-3.2 1.1 0 0-.9.6-.1 1zm-16.1 3s.5-1.5-2.2-2.2c0 0 1.1-1 3.4-.4 2.2.4 2 2 2 2.1 0 0-1.8 0-3.2.5zm5.8-.4s3-.5 4.5-.4c0 0-1.6-3.3-5.7-2.3 0 0 1.5 1.8 1.2 2.7zm5.3-.8s0-1.1 2.6-2.1c0 0-1.2-1.2-3-1-2 0-2.5.7-2.5.7s2.3.8 2.9 2.4zm1-3.6s1.7.4 2.7 1.3c0 0 1.5-1.7 2.8-2 0 0-2.5-1.4-5.5.7z"
        ></path>
        <path
          fill="#5a3719"
          d="M435.8 290.9s7.2-6.2 11.2-5.4c4 .8 2 .2 6.4-.5 4.4-.6 9-1.1 10.8-.9 0 0-5.4-3.8-14.9-3.7 0 0-6.6 2.3-11.3 5.3 0 0-8.9-4.9-18-2 0 0 9.9 3.7 15.8 7.2z"
        ></path>
        <path
          fill="#ffc221"
          d="m512.2 301.4 1.2-.2s2 2.5.6 2.5c-1.2 0-.8-.3-1-1a2.3 2.3 0 0 0-.8-1.3zm-9 .2s-.8 1 .6.8c1.7-.3 1.4 0 3.1-1.3 0 0 1.2-1.1 3.2-.4 0 0 1.8.6 3.2-.1 1.4-.8 1.7-.7 2.5-.6.8 0 .8.2 1.7-.6 1-.7 2.8-.1 3.9-1 1.1-1 2.5-.2 0-2 0 0-.5-.5-.5-1 0 0 1 .4 1.8 1 .8.8 2 .5 2.2.4 0 0 .2-2.3 2.3-4.3 2.3-2 2.3-2.2 1-2.2s-3.5-.6-4.3 0-7.2 4.8-11 5.5c-3.8.7-7.3 1.8-9.7 5.8zm-101.3-23.4s11.7 3 14.3 4.2c0 0 .6-1.9-4.7-3.4 0 0 12.9-.4 26.4 5.8 0 0 6.6-5.6 27.7-3.9 0 0 0-1.8.2-3.3 0 0-14.8-.4-28.4-8.7 0 0-12.3 6-35.5 9.3zm64.7 5.6c-.7-11.8 3.8-13 3.8-13s2.1 0 4.4.5c0 0-3.6 4.3-2.6 12.8 0 0 .4 1.3-2.7 1.3s-2.9-1.5-2.9-1.5z"
        ></path>
        <path
          fill="#5a3719"
          d="M469.8 291.7s-2.3-2.3-2.5-4.9c0 0 0-.6 2.2-.6 2.3 0 2.5-.2 3 1.1.6 1.3 2 4 2.3 4.3z"
        ></path>
        <path
          fill="#ffc221"
          d="M474.5 285.7a28.3 28.3 0 0 1-.2-4.5c.1-6.6 1.2-6 1.7-5.2h2.3s-1.7-7.4-3.7-3a19 19 0 0 0-1.5 10.4c.1 2 .3 3.3.6 4z"
        ></path>
        <path
          fill="#5a3719"
          d="M500.2 285.7s4.3.8-2.3 2.3c0 0 .3 8.2 8.2 2.5 0 0 4.7-3 8-4.2 0 0 1.6-.6 1.4-1.8 0 0 .2-1.5-1.5-1.1 0 0-1.4 0-2.3-.3 0 0-1-1.2-1.6-.8-.6.5-2.1.2-.9 1.7 1.2 1.4 1.5 1 2 .6.6-.4 3.1-1.4.9.7s-4.2-1.2-5-1.8zm-22 1h-2s-1 1.6-1.7-1l-.7 1.6s2.3 8.8 4.4-.6z"
        ></path>
        <path
          fill="#ffc221"
          d="M475.4 276.6s-1 5.8.3 9.2l21.1.5s-.2-4 0-9.7H494s-.5 4.6 0 7.5h-.5s-.4-4 0-7.5h-2.5s-.4 4.3 0 7.5h-.5s-.4-3.7 0-7.5H488s-.5 3.9 0 7.5h-.6s-.5-3.9 0-7.5h-2.7s-.6 3.6 0 7.5h-.5s-.6-3.6 0-7.5h-2.7s-.6 4.2 0 7.5h-.6s-.4-4 .1-7.5h-2.5s-.7 3.5 0 7.5h-.7s-.4-3 .2-7.5h-2.6zm22.3 10.4s-.5-10.2 1.4-13c2-2.6 2.5-2 5.8 0 3.4 2.2 7.7 4.5 8.5 4.8.6.3 1.6.5 1.6 2.4s.3 2.4-2.6 0c-.3-.3-1.7-1.5-2.7-1.8-2.6-.9.6.5 1.5 1.9.8 1 1.5 1-.6 1.5a219 219 0 0 0-12.9 4.2z"
        ></path>
        <path d="M505 279.6s-1.5-1.8.5-2.3c2-.4 2.1 3 2.5 5.1.3 2.2-2.5-2.1-2.8-2.7zm-2.7 9s-2.3.9-.7 1.6c1.4.7 5.5-2.7 4.2-2.5-1.6.3-3.5 1-3.5 1zm3-3s2-.3 1.6.5c-.3 1-1 .4-1.4.2-.3-.2-1.6-.7-.1-.8z"></path>
        <path
          fill="#ffc221"
          d="M516 282.8s.6 4 4 5c0 0 2 .4 1.5-1.3 0 0-.3-1.5-.6-2-.3-.7-1.6-1-1.8-1.1-.2 0-.3-.5.6-.2 1 .3 1 .4 1-.3s-.6-.4-1.4-.8c-.4-.2 0-.4.3-.3.4 0 1.3.3 1.3-1 0 0 .1-.8-.9-.8-1.1 0-1-.6-.7-.7.3 0 1.5.8 1.9-.6.3-1.3-1.6-.5-1.4-1.2.3-.8 1.7.3 1.7-.5.2-.8 1.3-1.1-.6-1.4-.9-.1 0-.6 1-.4 1 .1 1.6-1.2 2.3-1.6.6-.5 4.2-2.6-.6-1.9-4.7.7-6.1 3-6.3 3.5a13 13 0 0 0-1.3 7.6z"
        ></path>
        <path
          fill="#ffc221"
          d="M527 285.8c.7 0 1.2 0 1.4.5.8 1.6-1 1-2 2.2s-1 1-2.4.5c-1.4-.4-2-2.5-2-2.5 0-.7.5-.8 1.2-.6 0 0 2.3.2 3.9 0zm-5-.8s0 .4.9.5c.7 0 3 .3 4.5-.1 0 0 .4-.1.2-1 0 0 0-.7-1.2-.4-1.3.2-3 0-3.7-.1-.6-.2-1 0-.8 1zm-.2-2.9s-.1 1.3 1.1 1.4c1.3.2 2.9.2 3.5 0 .5 0 1.4-.2 1.5-1 0-.7.2-1.2-1.3-.8s-3.4 0-3.6 0c-.1 0-1.2-.3-1.2.4zm.5-2.5s-.3.6-.2 1.2c0 .5.9.7 2.5.7s3-.2 3.2-.7c.1-.7.5-1.3-.7-1-1.3.1-3 .2-3.6 0-.6-.3-1.1-.4-1.2-.2z"
        ></path>
        <path
          fill="#5a3719"
          d="M582.1 286s0 1 .9 2.2l-45.2-1.3s.6-.4.8-2.2z"
        ></path>
        <path
          fill="#ffc221"
          d="M522.7 277.8s-.4 1.1.4 1.4c.7.2 2.2.4 4 .1 0 0 1 0 1.3-1 .3-1 .3-.4-2.3-.8 0 0-.8-.3 1.5-.3 0 0 1.4 0 1.5-.2.3-.2 2-1.7-.3-1.5-2.3 0-1.1-.5 0-.5 1.2 0 1.6.3 2 0s0-.2-.7-.8-.1-.5.3-.1c.5.3.8.5 1.3 0s-.4-1.2 0-1c.3 0 .6.8 2 0 1.6-.7 3.5-.3 4 0 .6.5 2.2 1 3.1 0 1-.8-1.1-1.7-.3-1.8 1-.1 1.6.2 1.9-.5.4-.8-1.4-1.4.3-1.8 1.6-.5.2-5-.3-5.5 0 0-1.9 1.1-3.8 4.3-2.1 3.3-3.3 5.2-6 4.2-3.9-1.5-6 .6-6.5 1-1 .6 2 .8.2.9-1.7 0-1.7.2-1.8.4-.2.3 0 .5.3.6.3 0 .9.6-.1.6s-1.8-.3-1.5.9c0 0 0 .2.6.3.6 0 .8.8-.3.8-.8 0-.8.2-.8.3zm4.1 11.3s-.7.5.3.6c1.2 0 1.7.3 2.1-.3s1.8-.4.8-1.2c-1-.8-1.6-.3-3.2 1z"
        ></path>
        <path
          fill="#ffc221"
          d="M531.5 275.5s3.8-3.5 6.9-1.2c3.2 2.5 3.4 2.8 3.5 2.9 0 0 .4.3-.4 1-.9.8 0 .8.9.3s1 0 1.4.5c.5.5 1.1.8-.3.8h-4.6s-2.1.2-1-.7c1-.9.8-1.9.3-2-.6 0 0 .6-.3 1-.4.4-1.1.7-1.9.7s-1.4.6-.2 1c1.1.4-.2.7-.8.7s-3.5.2-.5.6c3 .3-.3.3 2 1.5 2.4 1.4.6 4.3-.3 4.6 0 0-1 .5.2.4 1.3-.2 2-.3 1 .4-.8.6-2.6 2.9-5 1.2 0 0-1.2-.6.8-.7 2 0-1.6-.5-2.3-1-.5-.3-3-2.7-1.5-2.5 1.6.4 1-.5.1-.8-.8-.3-1-1.6 0-1.4 1 .3 2 .9 3 .8.7 0 .5-.3-1.2-.8-1.7-.6-2.4-.7-2-2 .4-1.5 2.3.5 1.8-.6-.4-1-2-.5-1.2-1.9s1-.8 1.5-.6c.3.1 1 0-.1-.8-.8-.5 0-1.3.2-1.4z"
        ></path>
        <path d="M534.2 276.5s0-.5.8-.4c.6 0 .4-.2.6-.4.2 0 1.9.5.3 1-.6.3-1.6.2-1.6-.2z"></path>
        <path
          fill="#ffc221"
          d="M537.9 280.5s-1.3.6-.2 2c1 1 1 1.5 1 2.2-.1.8 43.4 1.3 43.4 1.3s0-2.9 1.8-4.5l-46-1z"
        ></path>
        <path
          fill="#5a3719"
          d="M582.8 285.2s.2-2.4 1.6-3.1c.7-.5 1.6-.3 2 1.6.6 2.7-1.7 5.1-2.7 4-1-1-.8-2.5-.8-2.5z"
        ></path>
        <path
          fill="#7b3c20"
          d="M532.9 295.4s2.9-2.5 3.4-3.6c0 0 7.8 5.6 7.3.4l.2-2.6s2.9.3 3.3-2l-7.3-.3s-.8-.1-2 1.1c-1 1.2-3.4 2.5-5.5 1.4 0 0-1-.8-1.9 0-1 .5-1 .7-.2 1.5s2.4 2.9 2.7 4zm16.8-15.4-4.3-.2s-1.5-2.2-4.6-4.6c0 0-.9-.4.8-1.8 1.8-1.4 2.3-2.8 2.3-3.5 0-.6 0-1.7.6-1 .6.8 5 4.9 5.8 3.7.6-1.2.7-1.7.7-2.1.2-.4.3-1.5 1-.3.6 1.1 1 .8 1.1 3.8 0 0 0 3 .5 4 0 0-5.6-1.7-3.8 2zm-18.6-9.2s3.3 2 5-.6c1.5-2.5 2.6-2.8 1.4-5.3-1.2-2.3 0-3.4.9-4.4 1-1 1.8-.8 1.8-4.6.2-3.9 2.8-5 4-6.3 1.2-1.2 4.2-3-.4-3.7-4.4-.8-13.4-3-15.7-6.5-2.3-3.5-3.3-1.5-3.3-1.3 0 .2-.8 2.7 1.5 7.3s4.2 7.6 6.5 9c2.2 1.5 4.2 2.3 3 5.4s-3 8.6-4.7 11z"
        ></path>
        <path
          fill="#5a3719"
          d="M543.2 261s.6 8 6.3 10.8c0 0 1.3-3 .8-6.1 0 0 1.9.1 2.4 1 0 0 0-2.3-2.6-3.2-2.7-.7-1.4-6-.4-6.5.9-.6.6-1.7 0-2.6-.7-1-.8-2.3 1.4-1.7 2.3.6 2-.6.5-1.7-1.3-1.1-1.3-2.5.7-2.5s5-1.9 3.2-2.4c-2-.6-2.5-1.3 0-2 2.7-.8 4-1.7 2-2-2-.2-3.3-.9-1.4-1.2 1.9-.3-.3-2.3-2.5-2.3-2.3-.2-7 .7-3.3-2.3 3.8-3-5.4-.8-1.6-2.8 3.8-2-1.3-1.1-2-1.1s-.7 0-.4-1c.2-1-.5-1.6-1.7-.9-1 .6-1 .6-1-.7 0-1.5-1.3-.4-2.1 0-.9.3-3 1.9-3.9 1-.7-.9-1.2-1.7-3.8-.2-2.6 1.5-2 .2-2-.5s1-3.4-2.4-.5-.7-3-3.5-1c-2.7 2-3 2.4-3.5 1.5-.5-1-1-1.7-4 .3-3.1 1.9-.8-1.3-.5-2 .5-.6 1.8-5-.9-1.6 0 0-1.3 2.4-4.2-1.9 0 0-3 4.3-3.9 2.4-.8-2-1.5-2-2.6-.8-1 1.2-.2-.1-.7-1.2-.4-1-.7-2.9-5.8.8-5.1 3.8 1.8 1-2.1 2.7s-13.5 7-4.8 5.9c8.7-1.3-4.2 3.3-1.2 4.2 3 .8 2 3.5 13.4.3 11.2-3 9.4-.4 15.2-3 5.8-2.4-1.4.9 6.4.8 7.7-.2 1.3 0 2.8 1.6 1.5 1.6 8 5.3 14.1 6 6.1.6 7.7-1.7 5.9 1-1.8 2.6-2.4 3.6-3.4 4.6-1 .8-4 3-4 6.6 0 3.7-4.8 4.3-3 8.3l4.1-4z"
        ></path>
        <path
          fill="#5a3719"
          d="M553.3 269.9s-1.4-1-1.4-2.8c0 0 1 .2 1.4.8 0 0 3.5-4-.8-5.4-4.1-1.4-2-5.3-.6-5.3s1.7-.3.4-2c-1.2-1.5-1-1.6 1.3-2 2.3-.4 2.1-1 1-1.5a7.7 7.7 0 0 1-1.9-1.6s6.8-2.9 4.6-4.3c-2.2-1.3 0-1 2-2.3 2-1.4 2.2-1.7 2.5-2.3 0 0-2 .3-3.4 0 0 0 1.7-.9 0-2.3s-2.3-2.6-5-2c-2.7.7-1.8-.2-.8-1.3s.6-1.7-1.3-2c0 0 .2-1.2 1.7-2.5 0 0-3.7.2-5-.4 0 0 1.6-1 1.6-2.3 0 0-2 .7-4.5.5 0 0 1.5-1.3 1.5-2.4 0 0-4.4 1-6.4 2.5 0 0-.5 0-.8-.6-.4-.4-.6-1-5.5.6 0 0 .5-2.2 1.7-3 1.2-.8 1-2.6-6.5 2.1 0 0-1-.6-1.9-2.9 0 0-1.7 2.3-2.9 3.1 0 0-1 .5-1-1 .2-1.5-.7-.5-1.4 0-.8.4-1.3 1.5-1-1.5s-1-3.6-1-3.6-2.3 3.3-3.7 3.7c0 0-2.5-2.4-3.4-4-.8-1.6-.8-2.2-1.7.6-.9 2.7-2 3-2 3s-1.5-1.3-1.6-2c0 0-.3.7-.8 1 0 0-1.3-1.5-1.2-3.7 0 0-8.2 4.5-9.2 7.2 0 0-7.7-.5-10.8.1 0 0 .7-2.4 2.7-3.7 0 0-2-.2-2-2.3 0 0 1.6.2 2.6 0s-1.4-3.1 1.1-3.2c2.5-.1 4.2 1.2 3-2.2-1-3.3-.6-3.3-.6-3.3s4.4 2.6 5.1 1.9c.8-.6-.5-2 3.4-1.4 3.9.7 2.8-1.5 4.4-1.7 1.5 0 2.3 1 1.3-6.1s4.8 3.5.9-7.2c0 0-1-3.3-3.3-4.7 0 0-.6 2.3-3.2.3-2.6-2-7.8-2.8-5.6-4.4 2.2-1.7 3.2-3.9 2.6-5.2 0 0-2.6 2.6-7 .7-3.6-1.5-4.4 1.3-8 .5 0 0 0-1 3.1-3.4 3-2.3-1.8.8-3.6 1.3-1.9.4-2.4 0 1.5-3.1 4-3 12-8.5 11-13 0 0 1.8 2.3 6.7.6 5-1.7 8.6-2.3 10-5 1.6-2.5 5.4-5 6.4-5.6 1.1-.5 2.4-1 .9 1.5-1.6 2.4-4 6.6-10.8 9.4-6.8 2.8-9.5 4.8-10.7 6.3-1.2 1.5-7.4 4.8-3.3 4.3 4-.7 10.9 0 7.6-1-3.2-.9-6.9.6-3.9-2.1 3-2.7 3.5-3.6 7.9-5.4 4.4-1.9 9.2-6.1 8.7-1.6-.5 4.4-8.6 9.1-10.6 10.6-2 1.4-1.2 1.2-1.2 1.8 0 .6-.4 1.8-1.2 2.3-.8.6-.5 1.2-.3 2.4.2 1.3-.2 1.8.4 2 .6.1 1.2.2 1.4 1.1.2 1 .6 1 1.8 1 1.1-.2 2 0 2 .6 0 .7 1.2 1.7 1.3-.4.1-2.2 1-2.5-1.2-1.5-2.2.9-2.6.6-2.6-.4s-.2-.8-1-.9c-1 0-1.3-1.3.3-2.2 1.6-.8 1.6 0 3.6-1.6 2-1.7 2-2 2.3-3 .3-.7-2.9 2.4-4.4 3-1.5.8-1-.5-.8-2.1.3-1.7 4-4 5.7-4 1.8 0 5.6 1 4 3.3-1.7 2.3-6.4 5.2-4.5 5.4 2.1.2 2.4-.6 3.6.4 1.2 1 0 3.2-.4 4.4a8.4 8.4 0 0 1-2.2 2.7s-2.2-3.8-2.1-.8c0 3.1-.5 4.2 0 4.3.5.1 2.8 1.7 3.6 1.7s-4.1 2.3-2 2.5c2 .1 5.3-1 6.4-3 0 0-4.2-1-5.9-2.6 0 0 4.9-1.2 3.5-5.8 0 0 4.9 1.3 2.7 3.5-2 2.1-3.3 1.8-1.5 2.4 1.9.6 2.7 1.2 2.7 1.2s1.3.6.5 1.6c-.7 1-.7 2.6 0 2.5.5 0 2.6-1 .9-2-1.8-1 1.9-.8.4-1.7-1.6-1-2-1.1-2.4-1.6-.5-.3 19.7-12.2 9.5-7.8 0 0 2.1-4.6 5.1-4.6 3 0 3.2 2.3 1.5 4.2-1.7 1.7-2.8 4.6-6.7 5.2 0 0 5.6 2.7-1 7.2 0 0-1.5.7-1 1.2s4.5-1.7 5-3a5.5 5.5 0 0 1 3-3c1.5-.7 9-5.8 11.2-9.6 2.3-3.9 2.8-4 7.2-7.5s3.6-2.8 4.2-3.6c.5-.9.7-2.3 2.7-3.4 2-1.2 9.8-5.4 12.3-7.2 2.4-1.8 7.4-5 9.6-7.8 2.1-2.7 8-6.2 9.4-5.6 1.4.7-.2 2.8-3.5 5.4-3.5 2.5-12 9.3-13.3 10.4a44.7 44.7 0 0 1-11.2 6.6c-2.7.3-2.4 1.3-4 3s-5.3 5.4-6.5 6.4c-1.3 1-4.3 3-4.4 4.5-.2 1.5.5 1.6-1.9 3.8a50 50 0 0 1-11.9 8.1s4.5 1.6 1.8 4.6c-2.6 3-2.5 2.6-2.6 2.8 0 0 6.7-1 2 4.3 0 0-1 1.5 1.1 0 2.3-1.9 1.4-4.1 1-4.5 0 0 3.7-2.3 7.9-2.3 4.1 0 4-.3.2-1.4 0 0 2.7-3.2 5-1.6 2.2 1.5 1.4 2.5-.9 3.8-2.4 1.2-5.8 1.7-8.5 3.2 0 0 5 1 7.6-1.1 2.6-2 2.8-1 3-.6.5.4.8 1-.4 2.6-1.2 1.7-1.3 1.8-1.2 2.2 0 .4-.1 1.5-2.5 2-2.3.3-3.5 1.3-2.6 2.4.7 1.2.7 4-1.2 3.7-2-.3-1.6-1.9-2.3-2.5-.8-.6-1.9-1.5-5.4.2-3.6 1.9-3.8-.3-3.7-1.5 0 0-2.3 2-4.2.2-2-1.9-.2-2.6 1-3.5 1-1 5.5-3 2.8-2.5-2.7.3-6.7.4-7.6-1.6-1-2.1 2-1.9 2.4-1.7.5.2 2.3 1.7 2.5-.3 0-2 3-2.3 2-2.6-1-.4-2.5.9-2.9 1.3 0 0-2-2.9-5.4-2-3.4 1 1 .7 2 .8.8.2.3 1.8-2.7 4.6-3 2.7-1.7 1.8.5 1.8 2.3 0 7.9 0 4.6 2.6-3.2 2.7-4.5 4-6 3.6-1.8-.5 0-1.6.8-2.1s1.2-1.2-.4-.6c-1.6.5-2.1.7-3.4-1.5-1.2-2.3-.8-1.6-.2-3.1.6-1.5 1.8-3 .4-2.5-1.6.6-1.4.7-1.3-1 .1-1.7-1.7-2.1-1.7-2.1s.8 1.7.1 2.8c-.6 1-.7 1.4.4 1.6 1 .4 2 1.3.6 2.3-1.4.9-1.2.7-.4 1.3 1 .7 2.3 1.3.9 2.7-1.4 1.4-.3 1 .4 1 .8 0 2.3.6 2.3 2 0 1.2 0 1.5 2.3.3 2.3-1.3 6.7-1.1 6.7.6 0 1.8-.6 2.3 1.8.8 2.4-1.5 3.5 1.4 5.2 0 1.6-1.5 2.6-2.8 4.6-.4 1.9 2.4 1.3 3-1 4.8-2.3 1.7 1.1.4 2.9-.5s6.7-1.5 9.5-.2c2.9 1.2 3.7 1 5.8 0 2.1-.8 3.2-1 6.3 1.1 3.3 2.2 5.7 2.6 7.4 2.5 0 0-3.5 1.4-7.5 1.6-4 .3-6 1-6.7 1.6 0 0 2.3 1.5 2.8 3.2 0 0 2.6-.3 3.8.2 0 0-.6 1.9 1 2.9s2.7 1.4 1.5 2.7c-1.2 1.4 1.9.8.1 2.7-1.7 2-2.1 3-2.2 4.5 0 1.6.4 1.8-1.1 2-1.6.1.2 1.9-.5 4-.7 2-5 1.7-4.8 7.2 0 0 1.2-2.7 3.8-5 2.5-2.4 2.6-2.6 2.5-4 0-1.4-.1-1.1 1.2-2.2 1.4-1-.6-2 .8-3.6 1.3-1.5.2-1.2 1.8-2.7 1.5-1.6-1.5-1.7.2-3.3 1.5-1.6-4-3.5-2.3-4.5 1.5-1 4.3-2.4-5-2.3 0 0 2.3-3.6 10-2.9 0 0-2 1.6-2.2 3l1.6.5s-.4 1.1-1.9 2.3c0 0 4.2 2.3 4.9 3.8 0 0-2.6.8-3.3 1.8 0 0 1.2 1.3 1.6 3 0 0-2.9-.4-3.2 1.7-.4 2.1-1.3.7-1.3 2s.1 1.7-.9 2c-1 0-.1 1.1 0 1.8.2.7.6 2.3.4 2.8 0 0-1.5 0-2.1.2 0 0 .4 3-1.3 3.5-1.7.4 1 1-.9 1.3-1.8.3-1.5.5-3.7 4.5 0 0 1.9-1 3.8-2.4 2-1.3-.2-1 3-4 3.3-3.3 2.7-3.5 2.4-5.1-.2-1.6-.3-3 .9-4.5s1.5-3.2 5.7-3c0 0-1.2-2.8-2.7-3.5 0 0 2-1.3 4-1.5 0 0-1.8-2.3-5.6-4.4 0 0 3-2.6 3.9-3.9 0 0-1.5.3-2.7 0 0 0 .6-1.3 3.4-3.1 0 0 1.5 1.4 1.4 2.9 0 0 4.8-2.7 7.5-2.4 0 0 1.4 3.4-5.3 10 0 0 4.2.3 6 0 0 0-1 3.2-6 5-5 2 1 4.2-4.1 3.8-5-.4-3.5 1.3-3.4 3.9.2 2.6.3 5.3.2 6 0 0-4-1.3-4 2.6.1 4-2 4.8-2.5 5.1 0 0-1.2-1-3-1.7 0 0-2.5 4.9-6.5 7.7z"
        ></path>
        <path
          fill="#7b3c20"
          d="M547.4 220.5s1.4-.2 3.8 1.2c2.3 1.5 4.6-1.5 2-2.3-2.6-.8 0-1.8 2.4.2 2.4 1.9 3.3.9 4.2.3.8-.7 1.9-1.1.3-2.2-1.6-1.1 1-.6 2.3.3 1.2.7.7 1.5.6 1.7-.2.2-.3 2.9 2 .5 2.4-2.5 3.7-4.8 3.6-6 0 0 1.3.8 1.5 2.3.2 1.5 2-.8 2.6-1.6.6-.8 1.6-3 1.5-4.4 0 0 1.6 2.5 4 0s1.4-1 4.2-1.7a17.6 17.6 0 0 0 8.5-5.2c2-2.5 2.1-.8 4.6-1.4s7.7-4.2 8.2-6.1c.4-1.9.3-3.1-.4-2.4-.7.6-.4 0-1.5-.6-1.1-.7-2.7.9-2.7.9s1.6 1.2.3 1.7c-1.2.6-2.3 2.3-4.6 1.6-2.3-.6-4.8 2.2-4.8 2.2s2 1.6-.7 2.7c-2.7 1-2.3 1.4-3.9.2 0 0-2.9 3.7-4.6 4.5 0 0-.7 0-1.2-.8 0 0-2 2.1-2.8 2.5 0 0-1.3-1-2.3-1.5 0 0-2.3 2.9-4.2 3.7 0 0-.6-1-1.8-1.7 0 0-.6 3.6-4.6 5.8 0 0 .2-1-1.8-2.3 0 0-5 4.3-6.9 4.7-2 .4-.2-.9 0-1.5.4-.5 1.6-2.3-.8-3s-2 .5-2.5.7c-.6.2-.6-.4-2.2-.2s-1.3.9-2 1.2c-.8.2-3.6-.5-3.4 1.4.1 1.8 1.5 3.1-1 4.2-2.5 1 1 .8 4.1.4z"
        ></path>
        <path
          fill="#5a3719"
          d="M557.5 215.3s.6-2.5-1.5-3.5c0 0 13.2-2.1 3.2-7.2 0 0 11.9-2.3 9-6.1-2.7-3.8-5.4-3-5.8-3-.4 0 2.5-2.1 3.3-1.8.7.3 10.2 3.9 7.8.7-2.4-3-2.2-2.9-2.6-3.8 0 0 3.1 0 7.9 4.6 0 0 1-1 .9-2.9 0 0 3.3 1 4.4 2 0 0 .6-1.2.3-1.8 0 0 3 1.5 4 3.2 0 0 1.3-1.2 1.5-2.6 0 0 3 1.3 3.7 2.2 0 0 1-1.3.6-3 0 0 4.9 1.3 5.5-1.6 0 0 4.9 1 1.7 2.9-4 2.5-.4-.6-4.6 2.3-3.2 2.3-5 4.9-6.6 4.4-1.1-.5-2.5 2.9-4 1.3-1.5-1.7-1.5-1-2.7.7a24.5 24.5 0 0 1-2.8 3.5s-.8-.5-1.6-1.2c0 0-.8 1.6-2 2.8 0 0-1-1.3-2.6-2 0 0-2.3 2.7-3.8 3.7 0 0-1.4-1.4-2.9-1.9 0 0-.2 3.8-3.1 5.7 0 0-.6-1.2-2.6-2 0 0-1.4 2.3-4.6 4.3z"
        ></path>
        <path
          fill="#5a3719"
          d="M550.6 209.5s-1.6 1.2-.6 2.5c1 1.4 1.1-.2 2.4-.3 1.3-.2 17.5-3 2.8-7.3 0 0 .7-.6 3.1-.8 2.6-.3 11.8-2.7 7.5-6-4.3-3.2-7.9 1.1-4.3-2.8 3-3.1.6-4.6.6-4.6s-8.5 5.6-10.4 6.7c-1.8 1-4.6 3-1.4 4 3.3 1 5.4-3.4 5.7-2.4.3 1-6.4 4.8-5.4 6.4.9 1.8.7 3.3 2.4 2.9 1.6-.3 6 .8 2.5.7-3.7-.1-5 1-5 1z"
        ></path>
        <path d="M556.4 201.3s-1.5 1.1.5.6 5.9-1.4 5.2-2.4c-.8-1-3.4.2-5.7 1.8z"></path>
        <path
          fill="#7b3c20"
          d="M582.4 184.5s7.5-.2 10.5 1.9c3 2 4.6 3.4 5.5 3.8 0 0-.1 2.8-5 .7 0 0 .4 1.4-.2 2.8 0 0-1.7-1.2-3.8-1.7 0 0-.4 1-1 1.7 0 0-2.1-2.2-4.6-2.9 0 0-.4 1.1-.8 1.6 0 0-2.6-1.6-4.6-1.6 0 0 .4 1.7 0 2.3 0 0-5.4-4.3-10.3-3.8 0 0 2.3 3.5 3.8 5.1 0 0-9.8-.7-8-6 1.5-5.3-.2-4 6.2-4h12.3z"
        ></path>
        <path
          fill="#5a3719"
          d="M536.3 199.1s-1.1 1 0 1.7c1.1.8 5-2 5.5-2.4.6-.4 2-.4 0 1.1s-3.8 3-5 4.6c0 0 6.4-1.8 10.6-5.4 4.3-3.7-.1-1.3 7-4.8 7.3-3.5 11.1-9.1 7.2-8.5-3.8.6-7.3 5-10.4 6.7-3 1.7-4.7 2-4.2 1 .4-1 2.7-.6 6.9-4 4.1-3.3 3.2-3 3.2-4.2 0-1.2-1.5-4 4.7-7.4 6.2-3.3 25.6-14.5 27.3-18.5 0 0-5.7.6-13.2 6.1a69.7 69.7 0 0 1-13.4 8.8c-2 .8-1.8.2-3.1 1.9a171.8 171.8 0 0 1-10.1 9.8c-1.3 1-1.8 1.6-1.9 3.8 0 1-8.4 7.3-11 9.7z"
        ></path>
        <path
          fill="#5a3719"
          d="M562 184.3s-1.5.6-3 0c-1.3-.7-.8-3.6 2.5-5.5a50 50 0 0 1 12.6-4.8s-.5 3.8-10.1 7.1c0 0 .6 2-2 3.2z"
        ></path>
        <path
          fill="#aa5323"
          d="M565.4 181.8s.3 1 0 1.8c0 0 17.9 1.7 27.1-9.2 0 0-12.7 1.2-17.7 4.3 0 0 3.2-4 12.7-7.3s13.4-7.4 14.2-9.7c0 0-12 4.3-17.7 4.3 0 0-1.2 0-2.3.5-1.1.7-8.8 6.2-10.8 7.2 0 0 4.3-.4 5.9-1.8 0 0-3 8-11.4 10z"
        ></path>
        <path
          fill="#5a3719"
          d="M531 192s-2.3 1.7-1.3 2.4c1 .9 2.6 1 6-1.9 3.6-3 12.1-10.2 6.8-10.5 0 0-7-.4-6.7 3.8.2 4.2-4.4 6-4.8 6.2zm-15.9-2.5s4.6 2.7 2.8 4.9c0 0 14-11.8 10-14.4-3.8-2.6-6.9 2.3-6 2.7 1 .6 3-.4 2.3.6a77.4 77.4 0 0 1-9 6.2zm-3.6-3.8s3 1 3.2 2.3c.1 1.2 9.2-6.4 6.8-9.7-1.1-1.5-6-2-6.4.8-.2 3 4.6-.3 3 1.8-2.2 2.7-5.9 4.4-6.6 4.8zm32.6-6.4s-1.9 1.4-.1 2.3c1.8.7 2.8-.6 3.7-1.3.9-.8 5.3-4 6.2-6 1-2 2.5-2.7 4.1-3.7 1.5-1 12.6-6.6 19.5-12.7 6.8-6.1 4-4.5 11-8.4s11.7-7.5 13.2-11.8c0 0-3.3 1-6.2 3a243 243 0 0 1-10.7 6.5c-1.3.5-3 .6-4 1.6s-1 2.3-4.3 5c-3.5 2.9-21 15.3-23.2 17a334.7 334.7 0 0 0-9.2 8.5z"
        ></path>
        <path
          fill="#aa5323"
          d="M530 183.4s2-1 5.6-.8c3.6.2 17.8-13.6 22-16.3a341.6 341.6 0 0 0 18.7-13.8c1.8-1.8 2-3.6 3.6-4.6 1.5-1 3-.9 6.4-2.9 3.5-2 20.3-12 19.3-17.8 0 0-25 15-30.7 19.8a375 375 0 0 1-24.7 17.7c-2.8 1.9-5 5-9.9 8.8-4.7 3.9-9.5 7.2-10.3 10z"
        ></path>
        <path
          fill="#aa5323"
          d="M524.8 178s4.6-.4 5.2 1.9c0 0 10-6.8 12.2-9.6 2.2-2.8-.8-1.2 4.9-4.9a594.3 594.3 0 0 0 27-19.1c2.7-2.3 7.8-5.5 11.9-8.2 4-2.8 19.9-10.6 18.1-17l-14.2 9.5c-2.7 1.8-3.9.8-6.5 2.9-2.6 2.1-8.5 6.3-9.5 7.6a161.3 161.3 0 0 1-14.4 11c-4.4 3-14.1 8.6-18.9 12.8a602.8 602.8 0 0 1-15.8 13.2z"
        ></path>
        <path
          fill="#aa5323"
          d="M510.4 176.8s2.3 0 3.1.9c0 0 4.3-3.9 8.9 0 0 0 16.8-11.5 18.5-14.4 1.7-2.8 4.5-2.9 11-7.6 6.6-4.8 10.7-6.9 15-10.2 4.4-3.4 8.1-7.3 11.2-9.3 3.1-2 11-7.2 9.8-11.7 0 0-6.5 3.6-10.6 8.2-4.2 4.6-3.8.7-8.1 4.5a82.7 82.7 0 0 1-16.3 11.7c-5.5 2.7-2.2 2.4-6.2 5-3.9 2.5-3.6 2-5 2.5a10 10 0 0 0-5.1 3c-1.6 1.7-5.4 4-9.6 6.5a106.5 106.5 0 0 0-16.6 10.9z"
        ></path>
        <path
          fill="#aa5323"
          d="M515.5 168s-1-1.9.7-3.3c1.6-1.3 4.6-4.8 5-7 .5-2.3.1-1.9 4.8-3.8a188.2 188.2 0 0 0 38.2-21.6c1.8-1.5 6.4-4.6 8.3-6.2 0 0 .8 2.5-1.2 4.2a222.1 222.1 0 0 1-21.5 14.9c-2.2 1.1-7.6 3.9-9.6 5.5-1.9 1.6-1.6 2-10.2 6.3-8.5 4.1-9 4.6-8.7 4.9.3.4 4.2-1.3 6-2.4 1.8-1 8.8-4.3 11-6a69 69 0 0 1 7-5 296 296 0 0 0 18-11.2c3.5-2.7 4.5-3.5 5.3-3 .7.4 2 .4.4 2s-6.7 6-8.7 7.3c-2 1.3-8.1 5-9.8 5.8-1.7 1-2.4 2.5-3.4 3.2-.9.8-3.7 2.7-7 3.5s-4 3.3-6.3 4.8c-2.3 1.4-18 10-18.5 10.3 0 0 .9-1 .2-3.2z"
        ></path>
        <path
          fill="#aa5323"
          d="M570.3 132.4s-.9.8-.4 1.2c.6.6 2.8 2.2 5.6-.6a106.5 106.5 0 0 1 12.5-10c2.3-1.5 3.6-2.8 3.5-4.7 0 0-11.4 6-21.2 14.1zm15.6-1s1.7-2.9 6-5.7c4.3-2.7 10.8-6.7 11.5-7.6 0 0 1.6 1.7-1.7 3.8a311.7 311.7 0 0 0-10.8 7c-.7.7-2 1.6-5 2.5z"
        ></path>
        <path
          fill="#7b3c20"
          d="M499 163s-4.8 2.6-3.1 4.2c1.7 1.5 4.2 1 5.4.6l3.2-1c.4 0 4.5-1.3 5.6-3.2 1-2 3.8-4.2 6-5.8 2.2-1.5 3-3.2 2.7-4.3L499 163zm-28.4 22s3.4-2 8-.7c0 0-.2-1.1-1-1.7 0 0 5.7-1.5 6.9-4 1.2-2.5 1.5-2 2.5-2.6 1.2-.8 8.7-6.8 7.8-8.1-.9-1.3-1-3.1-1.7-3.7 0 0-1.5 2.1-9 5.7-7.2 3.6-15.4 6.2-21.4 14.2-5.9 8-5.3 12.6 2 14.7 0 0 5-3.2 17.6-2.1 12.4 1.1 16.6 5.8 17.4 6.6.8.9 3.3 4 .9 9.1 0 0 2.5 1.1 2.6-1.3.3-2.3.4-1.8 1-1.5.6.4 1.3.5 1-1.4a18 18 0 0 0-2.3-7.2c-1.1-1.5.2-.8.9-.6.7.3 3.3 2.5 1.8-1.5-1.5-3.8-2-2-2-1.8 0 .3-.4 1.2-3.8-1.4a26.8 26.8 0 0 0-8.8-4.4c-2.3-.6-.7-.6.7-1 1.4-.6 3.1-.8 3.8-2.4 0 0-1.4.3-3.8-.6a13.2 13.2 0 0 0-11.5 2s1.2-4.5-2.5-4.3c-3.6.3-6.2.2-10 3.2 0 0-.3-4.6 3.4-7 3.7-2.5 3.2-1 5.2-1.6 2-.6 2.3-2.7 1.4-3.4 0 0 4.8.9 12.8-5.8 0 0-4.3 5.7-9.5 6.8 0 0-.9 3-5.7 3.7-4.8.7-4.6 3.4-4.6 4.1z"
        ></path>
        <path
          fill="#5a3719"
          d="M457 212.7s2.2-14.1 15.5-15.1c11.4-1 15.1.5 17.4 1.3s8 2.4 5.8 4.2c-2.2 1.8-3.5 1.5-3.5 1.5s2.5-2.9.2-3.3c-2.3-.5-2.4.9-2.7 2-.4 1.3-.5 2.6-1.6 3.6 0 0-1.2-1.4-2.9-.2s-.2 1.2.5 1c.6-.2 1.5-.5 1.3.5-.1 1-1 2.8-3.8 4.2-2.7 1.4-2.6 1.3-5.8 1.9-3.3.5-6.3 1.8-10.5 5.3-4.2 3.6-8.7 2.4-9.6-1.5-.8-3.4-.4-5.4-.4-5.4z"
        ></path>
        <path d="M472 212.2s1.2-2.7-1-4c0 0-6.9 1.2-9-.9 0 0 7.5-.4 12.2-2.3 4.6-1.7 3.3-3 1.7-3.4-1.6-.3-4.6.5-4.9 2 0 0-1-1.6.2-2.6 1.3-1.1 3-1.3 4.7-.8 1.7.4 3.1 1.2 8.6-1.6 0 0 3.1.7 3.3 2.8 0 2.2-.3 3-.6 3.3-.2.4-.6 1-1.3 1-.6-.2-1.5-.3-2.3 1.2-.7 1.5-1.3 2.7-2.6 3.7 0 0 1.5-4.6-2.5-5.7 0 0-3.3 2-5.8 2.1 0 0 3.2 3-.8 5.2z"></path>
        <path
          fill="#5a3719"
          d="M479.3 203.8s-1.6-1.6.4-1.9c2-.1 4.6 1.4 4.2 2.7-.6 1.2-3 1.1-4.6-.8z"
        ></path>
        <path
          fill="#fff"
          d="M592.6 181.6s-3.7 1-.2 3.3c3.4 2.3 5 4.2 7.5 4.8 2.5.7 5 1.5 5 4s-.5 3.5-1.9 5.2c-1.3 1.7.8 2.4 2.6 1.5 1.8-1 3.3-1.5 4.5-2.2 1.1-.7 3-.6 1.4.3-1.9 1-3.7 1.5-1.4 1.5 2.3.1 16.2.4 19.1-.6 3-.9 6.8-1.2 7-5 0 0 .2-1.6 1.3-2.4 1-.7 1.8-2.3.2-1.2-1.5 1.1-2.7 1.7-3 1.3-.3-.3-.5-.6.7-1.1 1.2-.5 1.8 0 2.9-1.5 1-1.6 1-1.4.4-2-.6-.6-1.8-1-1.2-1.8.6-.8 1.2-3-1.4-1.7-2.5 1.3-7.6 4.8-10 5.3-2.2.5-4 1.2-7.1 1.8-3 .7-5 1.4-8.5 3.3-3.3 1.8-3-1.1-2.5-1.5 0 0 1.3 2.3 4.7-.7 3.4-2.9 2.3-.1 10.6-2.9 8.3-2.7 6.3-3.1 9.5-4.8 3.3-1.7 6.4-1.8 4-4-2.2-2.4-2.4-2.5-5.3 0a34.5 34.5 0 0 1-16 6.4s18.8-8 16.9-9.2a20.8 20.8 0 0 0-5.3-2.5c-1.3-.3-1.7-.6-4.7.8-3 1.3-3.5 1.6-4.3 1.7-1 0-3.5.6-7 2.4-3.6 1.9-5.5 2.6-8 4 0 0 1.7-3.3 9.1-5.5 7.4-2.2 11.1-4.2 10.4-4.6s-2.7-.8-4-.5c-1.5.3-1-.1-5.6 1.7-4.5 1.8-2.6 1.4-6.2 2.2-3.7.7-5.1 1.5-6.9 2.3 0 0 .8-1 3.1-1.9 1.3-.4-1.3-.9 2.2-1h1a32.2 32.2 0 0 0 8.6-3.3c-.7-.1-5.1-.6-9.5 1.6-4.5 2-2.5 1.3-4 1.5-1.6.4-5 2.4-6 3.4-1.1.9-2.7 1.5-2.7 1.5z"
        ></path>
        <path
          fill="#5a3719"
          d="M482.7 201.8s1.8.5 2.2 1.8c.5 1.2 1.6-.6 1.6-1.1-.1-.6-1.2-3-3-1.9-2 1.1-1 1.1-.8 1.2z"
        ></path>
        <path
          fill="#7b3c20"
          d="M477.9 226s3.7-1.8 6.9-1.5c0 0-1.3-4.4.9-3.7 2.1.8 1.5.4 2 .4 0 0 .1-2.9-.5-4 0 0 2.3.5 4.6.5 0 0-2.2-4.1.2-7a6.9 6.9 0 0 0 4.2 3.4v-2.3s1.7-.3 3 .4c1.4.8 2.5-7.6-1.5-9.3 0 0-1 1.5-4.7 2.3s-3.7 1.5-5.2 4.3-3 2.9-6.2 5c-3 2-5 6-5 6.4 0 0 1.5 2 1.3 5.1z"
        ></path>
        <path
          fill="#999"
          d="M603.1 177.8c1.3-.2-1.4-.9 2-1h1a32.2 32.2 0 0 0 8.7-3.3c-.7-.1-5.1-.6-9.5 1.5s-2.5 1.4-4 1.7c-1.6.3-5 2.3-6 3.3-1.1.9-2.7 1.5-2.7 1.5s-3.7 1-.2 3.4c3.4 2.3 5 4.2 7.5 4.8 2.5.7 5 1.5 5 4a7 7 0 0 1-1.9 5.2c-1.3 1.7.8 2.4 2.6 1.5 1.8-1 3.3-1.5 4.5-2.2 1.1-.7 3-.6 1.3.3-1.8 1-3.6 1.5-1.3 1.5 2.3.1 16.2.4 19.1-.6 3-.9 6.8-1.2 7-5 0 0 .2-1.6 1.3-2.4 1-.7 1.8-2.3.2-1.2-1.5 1.1-2.8 1.7-3 1.3-.3-.3-.5-.6.7-1.1 1.2-.5 1.8 0 2.9-1.5 1-1.6 1-1.4.4-2l-1-.9s-.9-.7-1.9-.1a27.6 27.6 0 0 1-7 2.7c-1.6.1-3.5.9-6.5 2.4s-8.2 4.6-9 1.7l-2.8 1c-3.4 1.8-3-.7-2.5-1.4 0 0-1.8 2-1.7.2 0-1.8 1.2-1.5 3.3-2.1 2-.6 5-2 3.8-3-1.3-1-2.7 1-4.2 1.8-1.4.7-4.3 1.2-4.8-.9-.4-2.1-.4-3.6-4.3-3.8-4-.2-3.9-2.7-2.8-3.8 1.1-1 2-2.8 5.7-3.5z"
        ></path>
        <path d="M615.6 196.9s6.1-2.8 11.7-4.1c5.7-1.3 1.2.2.3.4-1 .3-9.7 3.2-11.8 4.2-2 1-1.7.2-.2-.4zm1.4 1.3s6.9-2.3 8.2-1.4c1.3 1 .2.6-1.3.8-1.6.1-5.7.8-6.8.8-1.1 0-.1-.2-.1-.2zm11-2.5s1.4-.2 1.5.4c.1.4-.6.5-1.3.4-.7-.1-1.3-.5-.1-.8z"></path>
        <path
          fill="#fff"
          d="M446 255.9s-.3-6.2 2.8-9.2 17.8-18.5 20.1-22.8c0 0 2 1.3 2 3.8 0 0 2.5-4.3 4.5-6 0 0 1.7 1.8 1.5 5.4 0 0 3.5-1.9 9-1.9 0 0-2 2.4-2.1 3.9 0 0 7.6-1 11.7-.3 0 0-10.6 6-7.7 6.5 3.1.5 6.2 0 6.2 0s-3.4 3.3-8.8 4c0 0 6.9 0 8.2 1.5 0 0-6.6 1-12 5 0 0-.4-.2-.4-1.7 0 0-.3 1.4-1.8 2.7-1.5 1.2-5.1 4-6.5 5.3-1.4 1.3-3.8 4-6.6 4 0 0 .6-2.1-1.4-2.8a5.7 5.7 0 0 0-6 1.5s-7 .1-9.4.5c0 0 1.6-2.6 3-2.6 1.6 0 7.6 1 8.1-3.2.6-4-3.8-3-2.2-5.4 1.7-2.4 1.3-2.2 1.4-2.6 0 0-1.4.8-2.2 3a10.7 10.7 0 0 1-4.2 6 15 15 0 0 0-4.8 5s-1.3 0-2.4.4z"
        ></path>
        <path
          fill="#fff"
          d="M452.8 252.2s.3-.8 2.3-1.2c2.2-.3 2.3-1.3 2-1.8-.3-.4-1.5-.4.5-2.8 0 0 .8.3 1.2.8.6.6 2.9 5.5-6 5z"
        ></path>
        <path
          fill="#999"
          d="M447.9 247.9c0 4 5.3 2.5 5.3 2.5a21.4 21.4 0 0 0-3.8 3.6c.4-2-3-2.5-3-2.5a12.3 12.3 0 0 1 1.5-3.6zm19.3-21.5 1.7-2.5s2 1.3 2 3.8c0 0 2.5-4.3 4.5-6 0 0 1.7 1.8 1.5 5.4 0 0 3.5-1.9 9-1.9 0 0-2 2.4-2.1 3.9 0 0 7.6-1 11.7-.3 0 0-10.6 6-7.7 6.5 3.1.5 6.2 0 6.2 0s-3.4 3.3-8.8 4c0 0 6.9 0 8.2 1.5 0 0-2 .3-4.6 1.2 0 0-1.9-1.8-7.6-1.5 0 0 4.4-2.6 8-3.4 0 0-1.6-2-4-.1 0 0-4.9-3.3-.8-6.2 0 0-2.8-.5-4.7.8 0 0 0-2.3 2.1-3.3 0 0-5.4-1-6.7 3 0 0-1-1.5-.5-3.4 0 0-3.3 1.9-4.8 4 0 0-.5-4-2.6-5.5M456.8 252c-.9.2-2.3.3-4 .2 0 0 .2-.5 1.3-1 0 0 .4.8 2.7.8"
        ></path>
        <path d="M466.6 236.7s2.5 2 3.3 3c0 0 2.3-1.4 3-2.7 0 0 1.9 1.1 2.4 2.8 0 0 1.3-.8 1.5-2 0 0 3 .6 4.2 1.6 0 0 .4-3 0-4.8 0 0 2.1.2 3.4.7 0 0-1.2-2 5-4.5 0 0-4.7 1.1-6.5 3 0 0-2 .2-2.9-.4v4.5s-1.2-.6-3.5-1.1c0 0-.6 1-1 1.2 0 0-1.5-1.2-2.1-2.7 0 0-2.3 2.1-3 3 0 0-2.3-1.6-3.8-1.6z"></path>
        <path
          fill="#ffc221"
          d="M452.5 267.3s1 .4 3.3-1.4 8.7-5.9 9.2-9.2c.7-3.3-2-3.4-4-2.5-2.2 1-1.3 2.7-1.2 3.4 0 .6.2 2.9-3.3 6l-4 3.7z"
        ></path>
        <path
          fill="#ffc221"
          d="M451.9 268.3s-5.2-2.2-.6-4.5 6.7-2.9 7.2-4.9c.6-1.9.2-1.5-1.5-.7-1.7.7-8.2 3.8-9.2 1 0 0 2.7 1 6-.6 3.4-1.7 6.2-2.1 4-2.8a37 37 0 0 0-11 .5c-1.4.4-1 .3-1.3 1.6-.2 1.3-1.6 4-2.2 4.7-.5.8-1.8 4 .6 5.5a8.6 8.6 0 0 0 8 .2z"
        ></path>
        <path d="M449.9 257s-1.3.2-1 .7c.2.5.5.4 1 .4.3 0 1-.2 1.1-.5 0-.3-.8-.7-1.1-.5z"></path>
        <path
          fill="#fff"
          d="M451.5 267.1s-2.4-1.1.4-2.6c2.7-1.5 5.6-3 6-3.6 0 0-1.3 1.9-6.4 6.2z"
        ></path>
      </svg>
    );
  }
);

ASM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ASM.displayName = 'ASM';

export default ASM;
