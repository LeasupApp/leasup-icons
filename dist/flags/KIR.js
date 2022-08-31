function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var KIR = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: ".7",
    d: "M-86.3 0h682.6v512H-86.3z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "translate(81) scale(.9375)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#e73e2d",
    fillRule: "evenodd",
    d: "M-164.3 0h835.8v306.5h-835.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M204.3 282.1c-19.4-15.2-55.6-10-61.6-51.3 27.7 21.5 22.7-1.2 64 19.3l-2.4 32z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M209.5 263.4c-13.9-20.4-50-26.6-43-67.7 19.9 28.9 22 5.7 55.2 37.9l-12.2 29.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M215.8 250c-5-24.1-36-43.6-13.8-79 7.2 34.4 18 13.8 36.4 56.2L215.8 250z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M230.3 237.6c2.7-24.5-20.8-52.6 11.1-79.4-3.6 34.9 13 18.7 17.5 64.6l-28.6 14.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M243.3 227.7c12.4-21.3 2.5-56.5 42.6-67.9-17.6 30.3 4.2 22.3-10.5 66l-32.1 1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M262 230.3c18.6-16.2 20.4-52.8 62-50.9-26.3 23.2-3 22.5-31 59.4l-31-8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M278.6 239.9c22.5-10.1 34.9-44.5 74.1-30.5-32 14.5-9.5 20.7-47 47.7l-27.1-17.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M292.5 255c24.4-3.4 46-33 79.7-8.4-34.7 4.9-15 17.1-58.5 32.5l-21.2-24.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m379.5 259.6-112.1 2.5 4.7 30.2 107.4-32.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m363 218.4-103.8 39.9 17.3 33.3 86.5-73.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m280.6 280.7 53.7-97.6-82.4 76.7 28.7 20.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m279.5 272.6 17.2-109.4-53.8 97.2 36.6 12.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m273 263.7-18-110.2-20 110.7 38-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m263.7 254.3-52.3-92 20 111.8 32.3-19.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m255.6 253.6-81.1-68.5 57.6 98 23.5-29.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m146 218.9 87 71.9 13.4-37.6L146 218.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "m232.1 260.9-102.3-1.5 101.9 34 .4-32.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fec74a",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M315.1 279.2a61.4 61.4 0 1 1-122.7 0 61.4 61.4 0 0 1 122.7 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005989",
    fillRule: "evenodd",
    d: "M-165.1 303.4h839.9V512h-840z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M-165.6 454c15.6 7.2 38 25.3 62 25.3 40-.3 41-27.4 81.6-26.1 40.7 1 33.3 29.6 88.2 29.5 45.4-.2 60-34.7 99.2-30.6 29-1.5 40.8 32.7 85.3 33.2 46.2 1 63.1-37.3 92-34.1 31 0 41 30.8 84.3 31 55.2.3 64.9-32 99.3-30 24.6-.5 44 23.7 80 24.3 28.6.5 52.7-21.2 69-29l.7-36.8c-17 6.3-42.4 27.1-67.7 27.3-36.6 1.4-59.1-24-84.5-23.7-30.4.3-42.5 31.3-94 31.3-47.2 0-58-31.3-88.4-31.3-29.7.2-38.8 34-90.3 33.4-42-.5-58.3-32.3-88-32-31.5 0-64 30.9-99 29.4-48-2-58.5-29.4-90-29.4-23.5 0-49 25.6-77.3 26-28.2.5-59.9-25.5-62.8-26l.4 38.3zm0-73c15.6 7.3 38 25.4 62 25.4 40-.3 41-27.4 81.6-26.2 40.7 1 33.3 29.7 88.2 29.5 45.4 0 60-34.6 99.2-30.5 29-1.5 40.8 32.7 85.3 33.1 46.2 1 63.1-37.2 92-34 31 0 41 30.8 84.3 31 55.2.3 64.9-32 99.3-30 24.6-.5 44 23.7 80 24.3 28.6.5 52.7-21.2 69-29l.7-36.8c-17 6.3-42.4 27-67.7 27.3-36.6 1.3-59.1-24-84.5-23.7-30.4.3-42.5 31.3-94 31.3-47.2 0-58-31.3-88.4-31.3-29.7.2-38.8 34-90.3 33.4-42-.5-58.3-32.3-88-32-31.5 0-64 30.8-99 29.3-48-2-58.5-29.4-90-29.4-23.5 0-49 25.7-77.3 26.1-28.2.4-59.9-25.5-62.8-26l.4 38.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M-165.6 309c15.6 7.2 38 25.2 61.9 25.2 40-.2 41-27.4 81.6-26.1 40.6 1 33.2 29.6 88.1 29.5 45.3-.1 60-34.7 99-30.5 29-1.5 40.8 32.7 85.3 33.1 46.1 1 63-37.3 92-34.1 30.8 0 41 30.8 84.2 31 55 .3 64.7-32 99.2-30 24.5-.5 43.9 23.7 79.8 24.3 28.7.5 52.7-21.2 69-29l.7-36.8c-17 6.4-42.3 27.1-67.7 27.3-36.4 1.4-59-23.9-84.4-23.7-30.3.3-42.4 31.3-94 31.3-47 0-57.8-31.3-88.2-31.3-29.7.3-38.8 34-90.1 33.4-42-.5-58.3-32.2-88-32-31.5 0-64 30.9-98.8 29.4-48.1-2-58.5-29.4-90-29.4-23.5 0-48.9 25.6-77.2 26-28.2.5-59.8-25.4-62.8-26l.4 38.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc84b",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.8",
    d: "M136.8 76c61-4.2 50-9.4 74.5-13.4 31 4.3 34.5 23 51.8 34.5 0 0-6.5 22-27.7 18.9-2.9-8.8 10.2-11.6-27.5-34.6-22-1.3-61.3 3.9-71-5.4zm189.3 33.9-44 1.8v10.9c29.7 1 35-3 44-12.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc84b",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeLinejoin: "round",
    strokeWidth: "1.7",
    d: "M174.8 108c7.7-3.9 11.5-2.3 18.2-2.5 4.5 8.3 8.8 9 18.8 10a49.5 49.5 0 0 0 39.9 21.8c29.9-.8 39.4-21.7 59.5-24h21.2c-3.5-6-6.3-9.5-14-9.9-15.8-.8-36.2-.4-54 3.6l-25.1 6.3c-7.4-3.6-25.3-22.4-36.8-22-6.7 1.8-6.7 4.1-10 6.7-6.5 2.8-13 1.4-17.7 10z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc84b",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.7",
    d: "M205.1 99a3.2 3.2 0 1 1-6.3 0 3.2 3.2 0 0 1 6.3 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc84b",
    fillRule: "evenodd",
    stroke: "#d8aa3f",
    strokeWidth: "1.8",
    d: "M225.6 107.8c44.9-54.1 84.1-47.5 135.3-51.2 1.7 6.3 1 15.7-23.3 24-33.4 5-93.1 40.2-93.4 40.2-11.1-.6-18.9-12.2-18.6-13z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#d9a43e",
    strokeLinecap: "round",
    strokeWidth: "1.8",
    d: "M317.9 72.5 351 74m-36.7 4 24.1 2"
  })));
});
KIR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
KIR.displayName = 'KIR';
export default KIR;