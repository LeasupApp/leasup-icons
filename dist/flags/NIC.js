function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var NIC = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size * 3 / 4,
    viewBox: "0 0 640 480"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("lineargradient", {
    id: "f",
    x1: "498.7",
    x2: "500.6",
    y1: "289.1",
    y2: "283.4",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#510000"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".3",
    stopColor: "#8a0000"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#a00"
  })), /*#__PURE__*/React.createElement("lineargradient", {
    id: "g",
    x1: "501.4",
    x2: "502.9",
    y1: "291.4",
    y2: "287.4",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#ff2a2a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "red"
  })), /*#__PURE__*/React.createElement("lineargradient", {
    id: "b",
    x1: "484.8",
    x2: "484.8",
    y1: "311.7",
    y2: "317.6",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#F5F549"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#97C924"
  })), /*#__PURE__*/React.createElement("lineargradient", {
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#025"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#04a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#025"
  })), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "h",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#b",
    id: "v",
    x1: "484.8",
    x2: "484.8",
    y1: "311.7",
    y2: "317.6",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "o",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "p",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "q",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "r",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#b",
    id: "u",
    x1: "484.8",
    x2: "484.8",
    y1: "311.7",
    y2: "317.6",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "x",
    x1: "98.9",
    x2: "125",
    y1: "1440.2",
    y2: "1440.2",
    gradientTransform: "scale(4.45715 .22436)",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "j",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "l",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "m",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "i",
    x1: "444.5",
    x2: "634.4",
    y1: "317.5",
    y2: "317.5",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#b",
    id: "s",
    x1: "484.8",
    x2: "484.8",
    y1: "311.7",
    y2: "317.6",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("lineargradient", {
    href: "#a",
    id: "y",
    x1: "47.9",
    x2: "61.7",
    y1: "3054.2",
    y2: "3054.2",
    gradientTransform: "scale(9.12405 .1096)",
    gradientUnits: "userSpaceOnUse"
  }), /*#__PURE__*/React.createElement("clippath", {
    id: "c"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m500 226.4-63.7 110.3h127.4z"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "#0067c6",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 160h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8a400",
    d: "m248 239.5 8 .5v-1.2l-3-.2.2-3.8 3.3-2.4.1-1.5-3.5 2.5c-.1-.8-.6-1.7-1.4-2-.8-.2-1.6-.2-2.3.3-.8.6-1 1.6-1 2.5l-.4 5.3zm1.2-1.1.3-4c.1-.6.2-1.4.8-1.8a1 1 0 0 1 1.5.5c.4 1 .2 2.1.1 3.2l-.1 2.2-2.6-.1zm-.2-11.2 7.8 1.8 1.8-7.6a198 198 0 0 1-1.1-.2l-1.5 6.4-2.4-.5 1.4-5.8-1.1-.3-1.4 5.8-2-.5 1.4-6.2-1.2-.2-1.7 7.3zm2.8-10.5 7.6 2.7.4-1.1-3-1 1.2-3.5c.2-1 .4-2-.1-3a2.5 2.5 0 0 0-2-1c-1 0-1.6.7-2 1.5-.6 1-1 2.2-1.3 3.4l-.8 2zm1.5-.7 1.2-3.4c.3-.6.6-1.3 1.3-1.5a1 1 0 0 1 1.2.9c.2 1-.3 2-.6 3l-.7 1.9-2.4-.9zm2.7-9 4.3 2.6c.8.4 1.8.6 2.7.2a6.5 6.5 0 0 0 2.4-3c.4-1 .8-2.2.2-3.2-.6-1-1.7-1.4-2.7-2l-2.7-1.6-.6 1 4 2.4c.7.4 1.2 1 1.1 1.9a6 6 0 0 1-1.2 2.5c-.4.6-1.2 1.1-2 1-.8-.2-1.5-.8-2.2-1.2l-2.7-1.5-.6 1zm5.8-9.3 6.3 4.8 3-3.8c.6-.9 1-2 .7-3a2.5 2.5 0 0 0-2-1.4c-.5 0-1 .3-1.2.4.2-.9-.5-1.7-1.2-1.9-1-.3-2 .3-2.6 1l-2 2.5-1 1.4zm1.6-.3c.7-1 1.4-2 2.2-2.8.4-.4 1-1 1.5-.6.5.2.7.9.4 1.3-.4.9-1 1.5-1.6 2.3l-.8 1.1-1.7-1.3zm2.6 2 2.3-3c.4-.4 1-1 1.6-.8.6.1 1 .7.8 1.3-.3 1-1.1 1.8-1.8 2.7l-1 1.3-2-1.5zm3-10.2 5.5 5.8 4.7-4.5-.8-.8-3.8 3.6h-.1l-4.7-5zm7-6.2 4.9 6.3 1-.7-5-6.3zm7.2-4.9a6.7 6.7 0 0 0-2 1.8 3.6 3.6 0 0 0-.1 4.2 4.1 4.1 0 0 0 1.6 1.5 3.6 3.6 0 0 0 2 .4 6.5 6.5 0 0 0 2.7-1 5.4 5.4 0 0 0 2-2c.4-.8.5-1.6.3-2.4l-1 .4c.2 1.6-.8 2.4-2 3-1.8 1.2-3.5 1.1-4.6-.5-1.1-1.9 0-3.4 1.6-4.4 1.1-.7 2.2-1.2 3.2-.5l.9-.8a3.2 3.2 0 0 0-2-.6c-.9 0-1.7.4-2.6 1zm9.5-4.7-.9 9 1.3-.5.2-2.8 4-1.6 2.2 1.8 1.2-.5-6.8-5.9-1.2.5zm1 1 2.7 2.2-3 1.2.3-3.5zm16.5-6 .5 8 4.3-.2c1.2-.2 2.4-.4 3.1-1.4 1-1 1.2-2.7.7-4.1a3.5 3.5 0 0 0-2.7-2.4c-1.2-.2-2.4 0-3.6 0l-2.3.2zm1.2 1.1 3.5-.1a3 3 0 0 1 1.8.5c.8.6 1.3 1.5 1.2 2.5a2.7 2.7 0 0 1-2 2.4c-.6.2-1.3.2-1.9.3l-2.2.1-.4-5.7zm10-1.5-.5 8 7.8.4v-1.1l-6.6-.4.1-2.4 6 .3v-1.1l-5.9-.3.1-2.2 6.4.4v-1.2l-7.5-.4zm20.8 3.3-2.9 7.5 1 .4 2.4-6v-.2l.2.3 2.8 8 1.3.5 2.9-7.5-1-.4-2.3 6-.1.2-.2-.3-2.7-8zM353 176l-3.7 7-1-.5 3.6-7.1zm6 3.5a6.7 6.7 0 0 0-2.4-1 3.6 3.6 0 0 0-4 1.5 4.1 4.1 0 0 0-.6 2.1c0 .7.1 1.4.6 2.1.4.7 1 1.3 2 2a6 6 0 0 0 2.7 1 3.5 3.5 0 0 0 2.2-.7l-.8-.9c-1.4 1-2.5.3-3.6-.4-1.8-1.2-2.5-2.8-1.4-4.5 1.2-1.8 3.1-1.3 4.7-.3 1 .7 2 1.5 1.8 2.7l1 .4a3.2 3.2 0 0 0-.3-2c-.4-.8-1-1.4-1.9-2zm7.6 5.7-8.3 3.4 1 .9 2.6-1 3.3 2.8-.7 2.7 1 .9 2.1-8.8-1-.9zm-.3 1.4-.8 3.4-2.5-2 3.3-1.4zm6.4 4.2-6.2 5 .7 1 2.5-2 2.4 3-.7 4 .9 1.1.8-4.2c.7.5 1.7.8 2.5.4.7-.4 1.4-1 1.4-1.8 0-1.1-.7-2-1.3-2.8l-3-3.7zm-.2 1.6 2.6 3.2c.4.6.9 1.4.4 2-.3.6-1.1.6-1.6.2-1-.7-1.6-1.7-2.4-2.6l-1-1.1 2-1.7zm9.5 11.1-9 .4.7 1.2 2.8-.1 2.2 3.8-1.6 2.3.7 1.2 4.9-7.6-.7-1.2zm-.7 1.2-2 3-1.5-2.8 3.5-.2zm5.9 9.4c-.5-1.3-1.3-2.7-2.7-3.4a3.8 3.8 0 0 0-4.5 1c-1 1-1 2.5-.7 3.9.3 1.5 1 3 2 4.1l-.6.2.4 1.1 3.8-1.3-1.5-4.1-.8.3 1 3-1.2.5a7 7 0 0 1-2.1-3.8c-.3-1.1-.3-2.4.5-3.2 1-1 2.6-1.3 3.7-.5s1.7 2.1 2 3.4c.3.9.2 1.9-.4 2.6-.2 0 0 .3.1.4l.3.5a2.8 2.8 0 0 0 1.1-2.2 7 7 0 0 0-.4-2.5zm2.3 6.3-4.5.8a4.1 4.1 0 0 0-1.9.8 2.5 2.5 0 0 0-.8 1.5v2.4c.3 1 .6 1.7 1 2.3.3.6.7 1 1.2 1a4 4 0 0 0 2 0l4.5-.8-.2-1.1-4.4.8c-2 .4-2.6-.6-3-2.4-.3-1.8 0-3 1.9-3.3l4.4-.9-.2-1.1zm2.4 13.6-8.3-3.6.1 1.4 2.6 1 .3 4.4-2.4 1.5.1 1.3 7.7-4.7-.1-1.3zm-1.2.7-3 1.9-.2-3.2 3.2 1.3zm-136.5 20-1.2.3 1.3 4.9 1.2-.3zm131.6 0 1.2.3-1.3 4.9-1.2-.3zm-119.2 20.5-9 1 .8 1.1 2.8-.3 2.4 3.6-1.4 2.5.8 1 4.3-7.8-.7-1.1zm-.7 1.3-1.7 3-1.8-2.6 3.5-.4zm4.1 3.6-5.7 5.3.8.8 4.8-4.5-2.6 7 1 .9 6.8-2-4.7 4.3.8.8 5.7-5.3-1.2-1.2-7 2 2.6-6.7zm8.3 8.4-4.8 6.5 6.2 4.6.7-.9-5.3-4 1.5-2 4.7 3.7.7-1-4.7-3.5 1.3-1.7 5 3.8.7-1-6-4.5zm7.8 5.8-3.7 7 1 .6 1.5-2.8 3.4 1.8.8 4 1.3.7-.9-4.2c.9.3 2 .1 2.5-.6.5-.6.9-1.3.6-2.1-.2-1-1.3-1.6-2.1-2.1l-4.4-2.3zm.5 1.5 3.6 2c.6.4 1.3.9 1.2 1.6 0 .7-.7 1-1.3.9-1.2-.2-2.2-.9-3.2-1.4l-1.5-.8 1.2-2.3zm8.6 3.2-3 7.4 1 .5 3-7.4zm7.2 2.5a6.7 6.7 0 0 0-2.6-.4 3.6 3.6 0 0 0-3.4 2.6 4.1 4.1 0 0 0 0 2.1c0 .8.4 1.4 1 2a6 6 0 0 0 2.4 1.3 5.4 5.4 0 0 0 2.9.2 3.4 3.4 0 0 0 2-1.2l-1-.6c-1 1.3-2.3 1-3.6.5-2-.7-3.1-2-2.5-4 .7-2 2.7-2 4.4-1.5 1.2.4 2.3 1 2.4 2.1l1.2.2a3.2 3.2 0 0 0-.9-2 5.4 5.4 0 0 0-2.3-1.3zm8 1.8-5.2 7.3 1.3.2 1.6-2.3 4.4.7.9 2.6 1.3.2-3-8.5-1.3-.2zm.5 1.3 1.2 3.4-3.2-.5 2-2.9zm18.3-1.2c-1 .1-1.7.4-2.4.9a3.6 3.6 0 0 0-1.7 3.9c.1.7.4 1.3 1 2 .4.5 1 .8 1.8 1 .7.2 1.7.2 2.8 0 1-.2 2-.6 2.6-1.2a3.4 3.4 0 0 0 1.1-2h-1.2c-.3 1.6-1.5 2-2.8 2.2-2.1.4-3.7-.3-4.1-2.3-.4-2.1 1.3-3.1 3-3.5 1.3-.2 2.5-.3 3.2.7l1-.4a3.2 3.2 0 0 0-1.6-1.3 5.4 5.4 0 0 0-2.7 0zm5.3-1 2.3 7.7 7.5-2.2-.4-1.1-6.3 1.9-.7-2.4 5.7-1.7-.3-1-5.7 1.6-.6-2 6-1.8-.3-1.1-7.2 2.1zm8.7-2.7 3.3 7.3 1-.5-2.8-6 7.8 3.5h.5l1-.5-3.4-7.3-1 .5 2.8 6-8-3.6-1.2.6zm8.8-4.1.6 1 2.8-2h.2l3.7 5.7 1-.7-3.7-5.6v-.1l2.9-2-.6-.9zm8-5.6 5.4 6 .9-.9-2.1-2.3 2.8-2.6 4 .6 1.2-1-4.3-.6c.5-.7.7-1.8.2-2.6-.4-.7-1-1.3-1.9-1.2-1 0-2 .8-2.7 1.4l-3.5 3.3zm1.6.1 3-2.8c.6-.4 1.4-.9 2-.5.7.3.7 1.1.3 1.6-.6 1-1.5 1.7-2.4 2.6l-1.1 1-1.8-2zm7.7-9.4 3.6 8.3.8-1-1-2.6 2.7-3.4 2.7.6.9-1-8.8-2-.9 1.1zm1.4.3 3.5.7-2 2.5-1.5-3.2zm2.1-4.8 6.7 4.3 3.5-5.4-1-.6-2.7 4.3-.1.2h-.1l-5.7-3.8z"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#c)",
    transform: "matrix(.8 0 0 .8 -80 0)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m500 226.4-31.5 54.5-15.4 26.7h93.8l-14.7-25.4-32.2-55.8z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "e"
  }, /*#__PURE__*/React.createElement("g", {
    id: "d"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#17c0eb",
    stroke: "#17c0eb",
    strokeWidth: ".1",
    d: "m500 226.4-2.4 4 2.4 55 2.4-55z",
    opacity: ".6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M500 277.5h-.1l.1 3 .1-3h-.1z"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(72 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(144 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(-144 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(-72 500 285.5)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(8 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(16 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(24 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(32 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(40 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(48 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(56 500 285.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "100%",
    height: "100%",
    transform: "rotate(64 500 285.5)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M500 265.8a44.2 44.2 0 0 0-29 10.8L456.4 302a45 45 0 0 0-.8 8.3h5a39.4 39.4 0 0 1 78.7 0h5a45 45 0 0 0-.7-8.3L529 276.6a44.3 44.3 0 0 0-29-10.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f60",
    d: "M500 266.7a43.5 43.5 0 0 0-30.3 12.2l-12 20.9a43.6 43.6 0 0 0-1.3 10.4h4.3a39.4 39.4 0 0 1 78.6 0h4.3a43.9 43.9 0 0 0-1.3-10.5l-12-20.8a43.5 43.5 0 0 0-30.3-12.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M500 267.5a42.7 42.7 0 0 0-32 14.3l-8.7 15a42.7 42.7 0 0 0-2 13.5h3.3a39.4 39.4 0 0 1 78.7 0h3.5c0-4.7-.8-9.2-2.1-13.4l-8.8-15.1a42.6 42.6 0 0 0-31.9-14.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0f0",
    d: "M500 268.3a42 42 0 0 0-34.9 18.6l-2.8 4.9a41.8 41.8 0 0 0-4.3 18.5h2.7a39.4 39.4 0 0 1 78.6 0h2.7a41.8 41.8 0 0 0-4.3-18.5l-2.8-5a42 42 0 0 0-34.9-18.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0cf",
    d: "M500 269a41.2 41.2 0 0 0-41.2 41.3h1.9a39.4 39.4 0 0 1 78.6 0h1.9A41.2 41.2 0 0 0 500 269z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00f",
    d: "M500 269.8a40.4 40.4 0 0 0-40.4 40.4h1.4a39 39 0 1 1 78 0h1.4A40.4 40.4 0 0 0 500 270z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "purple",
    d: "M500 270.7a39.6 39.6 0 0 0-39.6 40.3h.8v-.8a38.8 38.8 0 1 1 77.6.8h.8v-.8a39.6 39.6 0 0 0-39.6-39.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#510000",
    d: "M500.4 288.1c-.7 0-1.2-.5-1.8-.6a2.2 2.2 0 0 0-.7 2.1c.3.1.3.4.9.9s.5.7.4 2c0 .4.1 1.5.6 1.6.5.1 1-.3 1.1-1.2.1-.7.4-1.2.7-1.6.3-1.9-.2-2.6-1.2-3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M497.2 283.5c-.6 0-1.6 1-2 .5-.2-.3-.3-.9 0-1.4a4.8 4.8 0 0 1 2.2-2.3c2.3-1.4 3.9-1 5 1 1.1 1.8 2.2 3.8 2.3 5.4 0 .5.3 1.4-.2 1.9-1.3 1.4-4.6-1.5-6.5-1-.6.1-1.4.6-2 .2-.4-.3 0-1 .3-1.3.6-.5 1.5-2.4 1.4-3.2 0-.4 0 .2-.5.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M497 282.6c-1.2.4-1 1-1.6 1.5.2.1.8.3 1.4-.3.2-.2.5-.3.7-.3l-.7.7a5.2 5.2 0 0 0-1.4 1.8c-.3.8-.4 1.7-.3 1.8 0 0 .4.8 1.5 1.2 2 .8 2.4 2.5 4.5 2.5 1.6 0 1.4-1.1 2.7-.9 1 .2 1.7-.7.6-1.2a14 14 0 0 0-5.4 0c-.4-4 0-2.6-.1-4.4-.1-1.7-.7-1.8 0-3.3-.5 1-1.2.8-2 .8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff2a2a",
    d: "m501 279.8-.1.6.3 1 .2 1c0 .3.4.4.7.6.4.3 0 1 .3 1.1.2 0 .5-1 .5-1.2v-.7a15.3 15.3 0 0 0-.5-.9 3.6 3.6 0 0 0-.2-.3 4.2 4.2 0 0 0-.8-.9 4 4 0 0 0-.3-.2l-.2-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "m501.3 287.4-2-.7c-1.3-.4-2.6-1.2-3.5-.8-.3.1-.3.4-.4.9 0 .5-.5 1.3 0 1 .6-.4 2.4.8 3 1.1.3.2 1 .6 1.1 1 .2.6 0 1.8 0 2.4 0 .5.2 1.8.7 2 .6.1 1.1-.4 1.3-1.3.3-.9.4-1.4.8-1.9s.8-.8 1.3-.9c.6 0 1.4.5 1.4-.2 0-.4-.4-.8-.2-1.4.1-.5-.4-.4-.9-.6l-2.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#910000",
    d: "M498.4 288.9c-.4-.2-2.3-1.5-3-1-.3 0-.4 0-.4-.3l.2-.9c0-.3.2-.8.5-1 .7-.6 2.3.5 3.1.8l-.4 2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff3a3a",
    d: "M501.8 291.4c.9-1.6 1.5-1.4 2.6-1.4.4 0 .5-.3.4-.7-.3.6-1.7 0-2.5.3-1.5.7-1.2 3.7-2 4 .8.7 1.1-1.7 1.5-2.2z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "url(#h)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m453.1 307.6-10 17.3H557l-10-17.2h-93.8z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "n",
    fill: "url(#i)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "k",
    fill: "url(#j)",
    d: "M449.7 321.4a36 36 0 0 0-4.7.3l-.5.9c2.4-.3 4.7-.7 7.2-.7 3.2 0 6.2.8 9.7.8h4.6c3.5 0 6.4-.8 9.7-.8 3.3 0 6.3.8 9.8.8h4.6c3.5 0 6.4-.8 9.7-.8 3.3 0 6.3.8 9.8.8h4.5c3.5 0 6.5-.8 9.8-.8 3.3 0 6.3.8 9.8.8h4.5c3.5 0 6.5-.8 9.8-.8 2.6 0 5 .5 7.5.7l-.5-1a38 38 0 0 0-4.4-.2h-4.5c-3.5 0-6.5.7-9.8.8-3.3 0-6.3-.8-9.8-.8H522c-3.5 0-6.5.7-9.8.8-3.3 0-6.3-.8-9.8-.8H498c-3.5 0-6.5.7-9.8.8-3.3 0-6.3-.8-9.8-.8h-4.5c-3.5 0-6.5.7-9.8.8-3.3 0-6.2-.8-9.7-.8h-4.6z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#k",
    width: "100%",
    height: "100%",
    y: "-1.1",
    fill: "url(#l)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#k",
    width: "100%",
    height: "100%",
    y: "-2.2",
    fill: "url(#m)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#n",
    width: "100%",
    height: "100%",
    y: "-3.3",
    fill: "url(#o)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#n",
    width: "100%",
    height: "100%",
    y: "-6.7",
    fill: "url(#p)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#q)",
    d: "M453.2 307.5v.2h93.7l-.1-.2h-93.6zm-.2.3-.1.3H547l-.1-.3h-94zm-.2.4-.2.3h94.8l-.2-.3h-94.4zm-.3.5-.3.5h95.6l-.3-.5h-95zm-.4.7-.3.5h96.4l-.3-.5h-95.8zm-.4.7-.2.4h97l-.2-.4h-96.6zm-.4.7-.2.4H549l-.3-.4h-97.4zm-.4.7-.3.6h98.8l-.3-.6H451z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#r)",
    d: "M457.4 312.3c3.4.7 3.7 0 3.7 0zm81.5 0s.3.7 3.7 0z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#ccd11e"
  }, /*#__PURE__*/React.createElement("g", {
    id: "t"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#s)",
    d: "M530.6 297c-1.7 0-2.2.9-2.2.9-2.7 10.6-11.8 21.3-22.6 21.3h-8V330h61.4l-6.2-11c-9.7-1.4-17.6-11.3-20.1-21.1 0 0-.6-.9-2.3-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#97c924",
    d: "M530.6 297.5c-.8 0-1.2.1-1.5.3l-.3.3a33.6 33.6 0 0 1-8.4 14.7c-4 4.1-9 6.9-14.6 6.9h-7.7v9.9H559l-5.7-10c-4.7-.7-9-3.2-12.4-6.8a33.6 33.6 0 0 1-8.4-14.7l-.3-.3a2.8 2.8 0 0 0-1.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ede71f",
    d: "M530.6 297.5h.4v10.8a13 13 0 0 1-2 6.4c-.5 1.6-1 1-2.3 2.9a25.4 25.4 0 0 1-5.2 1.2c-2.5.4-8 .8-10.9.1a23 23 0 0 0 9.8-6 30.6 30.6 0 0 0 2.1-2.5 33.7 33.7 0 0 0 3-4.4l1-2a33.9 33.9 0 0 0 1.3-2.9 29.8 29.8 0 0 0 1-3l.3-.3.6-.2 1-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6cb24",
    d: "M530 298.9c-.5 6-2.3 13.2-6.7 17.8-1.6 1.3-3.7 2.6-5.6 2.3 6.7-5.5 10.8-14 12.2-20.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9ecb34",
    d: "M524.5 309.3c-1 2.7-4.8 6.7-8.8 10h-2.9c2.5-.2 8.3-5 11.7-10z"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#t",
    width: "100%",
    height: "100%",
    x: "-15.3"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#c6cb24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#u)",
    d: "M502.2 298c2.8 10.5 11.8 21.2 22.6 21.2h8.1V330h-65.8v-10.8h8c10.8 0 19.9-10.7 22.6-21.3 0 0 .6-.8 2.3-.8 1.7 0 2.2.8 2.2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#97c924",
    d: "M500 297.5c.8 0 1.2.2 1.5.3l.3.3a33.6 33.6 0 0 0 8.4 14.7c4 4.1 9 6.9 14.6 6.9h7.7v9.9h-65v-10h7.7c5.5 0 10.6-2.7 14.6-6.8a33.6 33.6 0 0 0 8.3-14.7l.3-.3a3 3 0 0 1 1.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ede71f",
    d: "M499.3 297.5a3.4 3.4 0 0 0-.3 0l-.6.3-.3.3a28.9 28.9 0 0 1-1 3 34.2 34.2 0 0 1-1.2 3 34.2 34.2 0 0 1-1 1.9 33.6 33.6 0 0 1-3 4.4 30.7 30.7 0 0 1-2.1 2.4 23 23 0 0 1-9.8 6.1c2.8.7 4 0 6.5-.4 2-.3 4.2-.6 6-1.2 1.5-2 1-1.3 1.5-2.9 1.2-2.2 3-4.2 3.4-6.7 1.6-3 1.9-8.6 1.9-10.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M499.3 298.9c-.4 6-2.3 13.2-6.7 17.8-1.6 1.3-3.6 2.6-5.6 2.3 6.8-5.5 10.9-14 12.3-20.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9ecb34",
    d: "M493.8 309.3a31 31 0 0 1-8.8 10h-2.8c2.5-.2 8.2-5 11.6-10z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ede71f",
    d: "m501 297.6.5.2.4.3a32.3 32.3 0 0 0 1 3 33.6 33.6 0 0 0 1.2 3l1 1.9a33.6 33.6 0 0 0 3 4.4 30.7 30.7 0 0 0 2.1 2.4 24 24 0 0 0 9.8 6.5c-7.3 0-10.4-.6-13-4a19 19 0 0 1-4.2-7c-.5-2-2-6.5-1.9-10.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M501.5 298.9c.4 6 2.2 12 6.6 16.6 1.6 1.4 3.6 2.6 5.6 2.3a31.1 31.1 0 0 1-12.2-18.9z"
  })), /*#__PURE__*/React.createElement("g", {
    id: "w"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#v)",
    d: "M484.8 297c-1.8 0-2.3.9-2.3.9-2.5 9.8-11.8 22.3-21.5 23.8l-4.8 8.3h49v-11.3c-8.8-2.4-15.9-11.7-18.2-20.8 0 0-.5-.8-2.3-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#97c924",
    d: "M484.8 297.5c-.8 0-1.3.2-1.6.3l-.3.3a43.4 43.4 0 0 1-8.1 15c-3.4 4.3-9.7 8.6-14 9l-4.3 7.5h48v-10.7a23.2 23.2 0 0 1-9.5-6 33.6 33.6 0 0 1-8.4-14.8l-.3-.3a2.9 2.9 0 0 0-1.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#93bc30",
    d: "M483.4 298.9c-.6 9-5.6 20.5-11.3 22.4-1.9.7-5.1.9-6.2 1a36 36 0 0 0 17.6-23.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ede71f",
    d: "M484.8 297.5h-.5v10.8c0 2.3.9 4.2 2 6.4l.2.5c.5 1.1.8 1.5 2.3 2.7a22 22 0 0 0 14.8 4c-1.1-.9-2.3-1.7-3.4-2.4l4.5-.5a23 23 0 0 1-9.7-6.2 30.5 30.5 0 0 1-1.4-1.5l-.6-.8a35 35 0 0 1-3.2-4.5 34.2 34.2 0 0 1-1-2 34 34 0 0 1-1.6-3.9 31.7 31.7 0 0 1-.6-2l-.3-.3a2.2 2.2 0 0 0-.6-.2 3.6 3.6 0 0 0-1-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M485.4 298.9c.5 6 2.3 13.2 6.7 17.8 1.6 1.3 3.6 2.6 5.6 2.3a38.5 38.5 0 0 1-12.3-20.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9ecb34",
    d: "M489.6 307.3a35 35 0 0 0 14.6 14.9h2.5c-4.4-2.4-11.5-5.8-17-15z"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#w",
    width: "100%",
    height: "100%",
    x: "-15.4",
    fill: "#c6cb24"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M556.5 324.7c-.6.2-4.4-.2-6.4 0l-1.3.3h-3.3c-3.6 0-6.7 1-10.1 1-3.4 0-6.5-1-10-1H522c-3.6 0-6.7 1-10.1 1-3.4 0-6.5-1-10-1h-3.4c-3.6 0-6.7 1-10 1-3.5 0-6.5-1-10.1-1H475c-3.6 0-6.6 1-10 1-3.5 0-6.5-1-10.1-1h-3.4c-2.8 0-6.2.6-8.9.8l-6.3 10.9h127.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#x)",
    d: "M548 323.1h-.6c-3.2.1-5.6 1.1-11.2 1.1s-6.2-1-12.6-.8c-6 0-8.4 1.2-11.7 1.2-3.2 0-8.4-.7-12.5-.3-4 .4-8.8 1.3-12 1.3-3.9 0-7.8-.7-11.8-.3-4.1.4-6 1.5-11.1 1.5-4.4 0-9-.7-12.8-.7-3.4 0-7.2 1-10 1.4l-.9 1.5c2.3-.3 8.6-1.3 10.8-1.3 2.4 0 10.7.5 15.3.3 4.7-.1 5.2-1.2 10.7-1.2 3.8 0 6.6.4 10.5.4 2.5 0 4.7-1.2 8.4-1.2l2.8-.1c3.1-.5 8.4 0 12 .2 3.3.2 5.5-.6 9-.7l4.4-.1c3.5-.2 6.4.6 9.7.6 3.2-.2 6.4-1 9.8-1l4.5-.2c2.3 0 5.9 0 8.3.5l-.8-1.4c-2.4-.1-5.3-.7-8.2-.7z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "A"
  }, /*#__PURE__*/React.createElement("path", {
    id: "z",
    fill: "url(#y)",
    d: "M450.3 334.8c-3.4 0-6.4.8-9.6.9a31.8 31.8 0 0 1-3.6-.3l-.5.8h6c3.5 0 6.4-.8 9.6-.9 3.3.1 6.2 1 9.7 1h4.5c3.4 0 6.4-.9 9.6-1 3.3.1 6.3 1 9.7 1h4.5c3.5 0 6.4-.9 9.7-1 3.2.1 6.1 1 9.6 1h4.5c3.4 0 6.4-.9 9.7-1 3.2.1 6.2 1 9.6 1h4.5c3.5 0 6.4-.9 9.6-1 3.3.1 6.2 1 9.7 1h4.5l1.8-.1-.5-.8c-1 .1-2.1.3-3.2.3-3.3 0-6.2-1-9.7-1h-4.5c-3.4 0-6.4 1-9.6 1-3.3-.1-6.2-1-9.7-1h-4.5c-3.4 0-6.4 1-9.6 1-3.3-.1-6.2-1-9.7-1h-4.5c-3.5 0-6.4 1-9.6 1-3.3-.1-6.2-1-9.7-1h-4.5c-3.4 0-6.4 1-9.6 1-3.3-.1-6.2-1-9.7-1h-4.5z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#z",
    width: "100%",
    height: "100%",
    y: "-1.3"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#z",
    width: "100%",
    height: "100%",
    y: "-2.6"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#A",
    width: "100%",
    height: "100%",
    y: "-3.9"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#A",
    width: "100%",
    height: "100%",
    y: "-7.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#97c924",
    d: "m443.9 324.7-2.5 4.2c2.9-.5 7.1-1.7 10.7-1.7 3.6 0 8 .9 12.4 1 5 0 7-1.2 11-1.6 4.1-.4 8 .5 12 .6 3.1 0 7.9-1.1 12-1.5 4-.5 7.7.3 12.5.3 4.9.1 5.7-1.2 11.6-1.3 6.4-.1 7 .9 12.6.9 4.2.2 7.9-.9 11.7-1.1 3.8-.3 5.5 0 8.3 0l-1.9-3.2-101.3 2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m550 324.6 4 .3a91.4 91.4 0 0 0 2.9.3l-.4-.5c-.6.2-4.4-.2-6.4 0z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#c8a400",
    d: "m320 179.9-25.7 44.5L268 270h104l-25.7-44.6L320 180zm0 2.4 25.2 43.7 24.7 42.8h-99.8l25.2-43.8z"
  }));
});
NIC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
NIC.displayName = 'NIC';
export default NIC;