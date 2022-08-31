function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var CXR = forwardRef(function (_ref, ref) {
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
    viewBox: "0 0 32 24"
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "#0021ad",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1c8a42",
    d: "M0 0h640v480z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "240",
    r: "57.8",
    fill: "#ffc639"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1c8a42",
    d: "M284.7 214c4 5.5 10 14.6 14.8 12.2 3.7 0 5.7.3 6.2 2.8a37 37 0 0 0 33-14.3s.8 0 .5-4.5c0-2 2.8-1.6 2.8-1 .4 1 .4 1.7.9 1.8 1-.4 2.7-3 4-4.6.3-.7.1-1.5.2-2.4.7-1.7 2.4-1.3 2.8-.4l.6 1.6c1.8 1.2 5 0 5.2 0 .3-1.4 1.2-1.2 1.2-1.2 1.2-.3.7-.2 1.5.2-.7 7.7 1.5 8 1.3 12 .1 4.4-1.3 5.6-1.3 7.3.4 2 7 2.1 4.6 3.9-2 1 0 3-3 3.8-8.8 4.5-10.4 8.3-10.4 8.3s-2.2 4.2-2.5 4.2c-1.5 2.8-3.3 1.2-4.4 2.6-.5 1.7-1 5.5 0 7.4.5 2.7 0 4.2-.7 6.9-.6 5.6-2.8 6.5-3.1 8.4-1 2.2.2 12-.8 12-6.5.2-11.5-1.2-14.1-1.7 2.5-10.9 1.5-20.4 1.5-21.4-.6-7.8-11.6-5.9-13.3-7-1.4-.2-2.3-1.3-2.7-1.8-1.6-.2-2.2-.6-3.7-.7-.8.4-.3.8-2 1.3-4.5.5-6.4-3.8-6.4-3.8.2-1.5-9.9.3-15.3-1-2.3 1.3-3.3 5-5.1 5.4 0 1.1-3-1-3.6-2-.2-3.4 2.8-4.8 2.8-4.8 2.4-1.7 3.8-2 5-3.1.5-2.9.2-5 1.5-7.1 1-1.7 2.5-1 3.5-1.6 1.1-.8 1.6-5.6.6-7l-4.7-4.2c-1.4-4.1 1.7-6.8 2.6-6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc639",
    d: "M561.9 142.4c-2.6-10.3-26-32.7-43.7-46.9-4.2-2.8-7-1.1-6.4 3 2.2 3.6 3.8 7.6 6 11.3.6 2.5 1.8 4.2 2.4 6.6 0 0 .2 4.2.6 4.6 5.4 6 6.2 11.1 6.2 11.1a49 49 0 0 0 11.5 15.6c6.2 3.9 1.6 16 1.8 22.5 0 4-2.9 3.6-5.5 3-20.1-18.5-40.1-18.5-57.8-23.9-6.8-.7-7 2.6-4.7 4.4a129 129 0 0 0 39.1 29.6l7.7 4.8 8.8 7.3c6.8 4.4 7.3 8.4 7.3 8.8.2 8.2-4.2 14.6-5.5 17.2-2.3 8.7-7 10.2-7 10.2-37.6 25.4-57.4 32-118.4 24.1-1-.4-6.8.5 0 3 15.5 5.2 53.7 13.5 90.6-4 9-6.2 14.8-4.2 21.3-8a287.3 287.3 0 0 1 28.3-15.4c8.3-4.5 31.3-9.4 36.6-13.8 6.1-.5 12.4-1.3 12.8-6.5 2-1.3 5-.3 7.2-4.6 4.8-.9 4-2.6 4-2.6-1.2-3.4-5.8-4.8-9-7.3-4.8-1.6-8-2-11.5-.4l-3.3 1.5s-5.1-.7-5.1-1.1c-11.4-.6-10.3-38.3-14.3-54z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1c8a42",
    d: "M588.6 204.2a2.8 1.8 16 1 1-5.4-1.7 2.8 1.8 16 0 1 5.4 1.7z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff",
    transform: "matrix(.64 0 0 .64 0 80)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "m188.2 191-12.8-12-12.9 11.8 1.4-17.4-17.3-2.8 14.5-9.8-8.6-15.2 16.7 5.3 6.5-16.2L182 151l16.7-5-8.8 15 14.4 10-17.3 2.5 1.2 17.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m233.4 335.5-13.8-9.1-13.4 9.6 4.8-15.5-13.6-9.5 16.6-.4 5-15.5 5.6 15.3 16.7-.1L228 320l5.3 15.4z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    x: "2.5",
    y: "269.1"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    x: "-112.1",
    y: "123.2"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    x: "108.4",
    y: "85"
  })));
});
CXR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CXR.displayName = 'CXR';
export default CXR;