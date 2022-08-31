function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var GUM = forwardRef(function (_ref, ref) {
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
    fill: "#be0027",
    "fill-rule": "evenodd",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#3b5aa3",
    "fill-rule": "evenodd",
    d: "M25.6 27.3h589.5v428.4H25.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cbe0e5",
    "fill-rule": "evenodd",
    d: "M314.4 413.2a10 10 0 0 0 8.4.1c137.8-73.3 137.8-274.3.1-346.6a10 10 0 0 0-8.7.2c-134.3 73.4-134.7 272.1.1 346.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#add2d9",
    "fill-rule": "evenodd",
    d: "M314.4 416.9c2 1.7 6.4 1.5 8.4 0 101.5-76 102-123.3 97.6-123.3h-201c-3 0 1.8 48.2 95 123.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fdf9a1",
    "fill-rule": "evenodd",
    d: "M235.3 331.2a39.2 39.2 0 0 1 27.9 1.7c7.6 4 12 4 20.2 4 8.6.2 15.3 6.5 24.6 6.8 17.1.4 24.3 8.9 11 9-6.2 0-19.7-4.3-26.2-3.4-13.6 1.4-22.2 4.4-35 18.7l14.8 10c12.8-5.1 14.9-11 22-11.2 8-.3 10.7-5.2 20-5.2a92.6 92.6 0 0 0 33-3.2c14.8-3.4 7.8-13.8-1.2-17.5-7.3-3.1-20.8-.1-29.2-3.2-6.4-2.5-1.2-6.5 2.3-7.3 3.4-.7 7.1.5 11.4 1.2 7.7.6 17.4-.1 24.1-1.2 14-2.1 13.4-6.2 20-6.3 5-.3 8.7-1.7 12-4.1 4-2.7 8.1-8 12.9-7.8l12.7.5-18 40.4-50.7 51.7-26.3 10-57.8-37.7-29.1-44.7 4.7-1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#179a3b",
    "fill-rule": "evenodd",
    d: "m301.8 292 116-.6 2-10.3s-4.1-.6-7.5-.8c-4.1-.3-11.3 4.4-16 4.3-3.5 0-7.3-6-10.7-6-6 0-6.4 5.3-12 5.5-4.5-.2-6.4-3.6-12.3-3.2-6 .3-5.6 3.7-13.3 3.5-10.2-.3-14.3-9.1-22.5-9.2-13.6-.2-14 13-23.8 16.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fdf9a1",
    "fill-rule": "evenodd",
    d: "m301.8 294.4 119.4-.6v-3.2l-122.2.6 2.7 3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a79270",
    "fill-rule": "evenodd",
    d: "M350.8 330.3c1.9 7 3.8 9.4 11.2 11.3 7.3 1.7 18.5-5.4 11.6-12.3-6.6-6.4-13.6-8-19.5-13.8-12.5-12.3-31.3-42.5-31.3-63.8 0-18.3-1.8-55.8-1.8-91.3 0-2.3-7 6.4-7 8.8.4 31.3.4 55 1.6 86.6 2 23.1 13 38.7 22.7 52.7 4.3 6.8 10.6 14 12.5 21.8z"
  }), /*#__PURE__*/React.createElement("text", {
    x: "465.1",
    y: "269.5",
    fill: "#bd0728",
    stroke: "#fff",
    "stroke-width": "1.6",
    "font-family": "helvetica",
    "font-size": "25.6",
    transform: "matrix(1.33 0 0 1.33 -363 -108)"
  }, /*#__PURE__*/React.createElement("tspan", null, "G")), /*#__PURE__*/React.createElement("text", {
    x: "488.1",
    y: "269.6",
    fill: "#bd0728",
    stroke: "#fff",
    "stroke-width": "1.6",
    "font-family": "helvetica",
    "font-size": "25.6",
    transform: "matrix(1.33 0 0 1.33 -363 -108)"
  }, /*#__PURE__*/React.createElement("tspan", null, "U")), /*#__PURE__*/React.createElement("text", {
    x: "516",
    y: "269.6",
    fill: "#bd0728",
    stroke: "#fff",
    "stroke-width": "1.6",
    "font-family": "helvetica",
    "font-size": "25.6",
    transform: "matrix(1.33 0 0 1.33 -363 -108)"
  }, /*#__PURE__*/React.createElement("tspan", null, "A")), /*#__PURE__*/React.createElement("text", {
    x: "539.5",
    y: "269.5",
    fill: "#bd0728",
    stroke: "#fff",
    "stroke-width": "1.6",
    "font-family": "helvetica",
    "font-size": "25.6",
    transform: "matrix(1.33 0 0 1.33 -363 -108)"
  }, /*#__PURE__*/React.createElement("tspan", null, "M")), /*#__PURE__*/React.createElement("path", {
    fill: "#239e46",
    "fill-rule": "evenodd",
    d: "M259.6 160.9c-1.5 3 3.6-.9 4.8-1.3 6.7-2.4 9.3-10.8 20.8-5.7 9 3.9 21.1 1.6 14.8 5.6-7.8 4.7-23.5 9.9-23.8 33.2 1.3 2.2 1.4 1.9 2.5-.6 2.4-5.4 13.7-20.1 19.3-18.9 2.3.6 8.9-6.7 9-4.6.7 5.8-9 17.6-8.8 33.3 0 3.7 4.5 4.9 6.6 2.3 2.2-2.3 3.4-4.6 7.2-7.6 6.6-5.4 4.8-28.6 5.6-27.5 4.7 6 5.4 23.3 12.4 30.3 5.9 5.9 10.6 3 9.3-5-2.5-16.4-10.2-11.7-13.9-28.6-.8-3.3-1-6.2 3.4-4.9 5.3 1.6 8.5 4 12.4 10 4 5.8 11.4 11.3 15.7 14.6 7.5 5.8 10.2.8 6.6-6.6a39.6 39.6 0 0 0-21-18.2c-6.2-2.2-8.4-2.4-13.8-3.4-1.5-.3-3-3.4-.4-5.1a42.5 42.5 0 0 1 19.6-7.7c6.7-.2 12 5.2 16.7 6.6 9.4 2.4 9.4-3.5 5.2-8-3.4-3.7-10.6-10-17.3-9.1-13.5 1.7-12.6 1.3-21 6.8-3 1.8-6.4 3.8-5.1 1.6 3-5.5.2-4.5 4.9-10.1 3.6-4 6.3-7 10-8 3.4-.9 8-4.5 9.3-6.4 3.4-4.6.5-7.3-4.7-5.7-4.6 1.2-7 4.2-10 5-7.4 2.4-13.3 19-14.2 21.4-1.1 2.8-2.4 1.4-2.2-1 1-11.7 2-31.5-2-39.6-6.4-12-5.8-6.4-8.2-.7-3.6 9-2.3 17.5 0 26.3 1 4.4 4.6 9.4 5.3 12.9.5 2.7-1.6-.8-2.8-2.5-3.9-6-6.8-10-13.2-13.3a35.3 35.3 0 0 0-20.2-2c-1.8.6 2 3.2 3.5 4.4 4.3 3.4 12.4 4.5 18 7.9 4.6 2.9 8.2 4.7 9.8 8.7.6 3 1.6 7.4-.4 7.3-5.1-.3-13-4.8-29.4-3-8.4 1.2-15.6 8.3-20.3 16.9z"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M295.3 310.6h4.7v7.9h-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fdf9ff",
    "fill-rule": "evenodd",
    d: "M271.7 257.9c18.8 26 49 41.2 49.6 53h-58.8c13.5-16.2 21.8-27.2 9.2-53z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a68861",
    "fill-rule": "evenodd",
    d: "M254.6 311.5c25.6 5.7 56.1 8.9 75.6-.8.2 5.7-6.3 14-11.7 14h-49c5.7-.9 9-2.6 18.2-3l-26 .2c-3 .1-8-7.6-7.1-10.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#be0027",
    "fill-rule": "evenodd",
    d: "M312.6 425c2.6 1.5 6.7 1.4 9 .2 147.8-78.7 147.9-294.4.2-372a10.7 10.7 0 0 0-9.4.2c-144 78.8-144.4 292 .2 371.7zm.7-17.7a9.3 9.3 0 0 0 8 .1c123.6-72.8 125.1-265.1.1-334-2.4-1.8-5.9-1.2-8.3 0-118.4 70.1-125 254.5.2 333.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0728",
    d: "M268.8 225.4q3.4 0 6 1.4 3.5 1.8 4.3 6.6H276q-.6-2.6-2.6-4-1.8-1.2-4.7-1.2-3.3 0-5.7 2.7-2.3 2.5-2.3 7.6 0 4.2 1.9 7 2 2.7 6.3 2.7 3.3 0 5.4-1.9 2.3-1.9 2.3-6.2H269v-2.7h10.6v13h-2.1l-.8-3.2q-1.6 1.9-3 2.7-2.2 1.2-5.5 1.2-4.3 0-7.5-2.8-3.4-3.6-3.4-9.7t3.3-9.7q3.2-3.5 8.2-3.5zm-.6 0z",
    "aria-label": "G",
    "font-family": "helvetica",
    "font-size": "25.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0728",
    d: "M292.4 226.1v15.2q0 2.6 1 4.3 1.4 2.7 5 2.7 4.1 0 5.7-2.8.8-1.6.8-4.2V226h3.4v13.8q0 4.4-1.4 7-2.1 4.3-8.2 4.3-6.3 0-8.5-4.4-1.2-2.5-1.2-6.9V226zm6.3 0z",
    "aria-label": "U",
    "font-family": "helvetica",
    "font-size": "25.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0728",
    d: "m338.4 240.5-3.7-10.7-4 10.7zM333 226h3.7l9 24.5h-3.8l-2.4-7.3h-9.7l-2.7 7.3h-3.3z",
    "aria-label": "A",
    "font-family": "helvetica",
    "font-size": "25.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0728",
    d: "M357 226h4.9l6.9 20.7 7-20.7h4.7v24.4h-3.2v-20.6l-7 20.6h-3.1l-7-20.6v20.6H357z",
    "aria-label": "M",
    "font-family": "helvetica",
    "font-size": "25.6"
  }));
});
GUM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GUM.displayName = 'GUM';
export default GUM;