function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var KGZ = forwardRef(function (_ref, ref) {
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
    d: "M-85 0h682.7v512H-85z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#a)",
    transform: "translate(79.6) scale(.9375)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M-128 0h768.8v512H-128z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M105.5 261.1c13.6-16.6 41.9-.4 65-12.3-27.4 1.5-42.3-13.2-63.9-11.1 22.4-13.8 41.5 4.5 66.5-2.8-33.1-2.8-31.7-17.7-61.9-19.8 26.8-11.4 40 11.8 66.3 6.5-31-7.1-35-25.3-58-29.2 33.6-5 31.4 14.8 64.3 17.2-33.4-14.3-24.7-26.8-52.6-37.7 31.3-.7 29.2 21 61 26.6-27.2-17.2-23.9-32.9-46.2-45.2 26.5.5 29 27.6 56.1 36-24.1-19.1-17.8-35.3-38.6-52.4 26.4 6.2 22.5 29.6 50 44.6-20.4-22.6-12.6-38.8-30.3-57.3 25.4 8.1 15.7 30.4 42 51.6-15-24.9-5.7-40.8-20.6-61.7 23.6 12.1 12.2 34.9 34 57.5-10.3-25.5 0-41.3-10.5-63.9 20.2 15 8.2 39.3 24.5 62.5-6-32 7.8-37.2 3.5-65.2 15.3 18.8-1.8 37.6 10 65.3-1.5-31.5 15.3-38.8 12.4-64 15.1 22.6-8.5 42.3 1.4 66.5 2.5-29.8 22.1-37.6 22.4-60.8 12 21.3-14 36.7-9.8 65 8.5-31.2 29.4-35 32-56 7.1 24.6-21.4 36-19.7 63.4 8.5-27.7 34.6-31 40-51.4 3.3 26-22.4 30.7-29.7 59.5 13.5-23.5 37.2-25.4 47.8-44-.8 25.8-29.8 29.2-38.7 53.3 16.7-20.5 37.7-17 54.4-35.1-1.8 23.3-31.3 22-47 46.1 18.1-16.7 45.4-11.7 59.3-26.1-.7 20.6-36.9 19-54 37.5 21-11.6 47.8-4.8 63.2-15.5-2.8 18-41 13.8-59.3 28 25.2-7 44.7 3.7 65-4-9.9 17.5-44.6 6.4-63 17.8 22-3.7 45.2 9.6 65.1 5.3-6.5 15.2-44.6-1-65 8.5 24.4-.2 40.3 15.5 63 14.4-12.3 13.8-45.7-5.1-65.2-1.9 23.8 5 42 24.6 60 25.6-14.9 11.3-42.5-14.5-65-11.3 23.2 6.2 42.6 32.5 55.8 33.1-14.3 9.8-42.5-22.5-61.8-21.3 23.5 10.6 34.2 37.5 49.7 41.3-19.1 6.1-37.9-29.2-58.4-30.5 23.8 15 25.1 38 43.4 48.2-19.3 4.7-33-35.2-53.3-38.6 19.5 14.3 22.5 45 35.4 54.6-19.6 1-26.7-40.7-46.8-46.7 17.2 14.4 13.1 45.6 26.5 59-20.4-4.3-17.8-40.6-39.1-52.9 15.3 19.4 7.5 46.9 17.5 62.4-19.9-8-11.3-40.6-30.2-59 10.3 20.6-.8 44.6 7.4 64.5-18.2-8.9-6-47.4-19.9-62.7 6.4 23.8-5.4 43.5-.6 64.8-18.6-21.5 2.8-43.2-13.3-65.1 4.2 25.1-13.4 42.7-10.6 63.7-14.7-17.2 8-44.7-3.5-66.4 2.4 24.7-20.3 46.4-18.7 62-12-20 13.3-43.6 6.5-66.3-1.4 23.6-24.4 36.4-28.7 57.9-7.7-23.7 19.6-40.8 17.2-64.1-7.8 22.1-30 31-37.8 52.5-6.4-23.7 26-36.2 26.8-61-10 23.2-36.5 28.4-45.3 46.2-3.3-23.5 33.8-34 35.2-56.3-12 21.4-41 22.3-51 39.3-1.5-23.4 37.6-26.3 43.7-50.8-11.9 18.2-43.7 15.9-57 30.7 2.1-21.7 44.4-23 51.2-42.6-15.8 15.2-45 9-61.5 21 9.2-21.4 48.9-16.9 57.8-32.3-17.5 9.1-48.6.2-64 9.4 14-20.2 44.8-8.1 62.3-22-28.4 4.1-45.5-7.2-65.2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M356 256.1a99.2 99.2 0 1 1-198.5 0 99.2 99.2 0 0 1 198.4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M343.2 256.3a86.3 86.3 0 1 1-172.6 0 86.3 86.3 0 0 1 172.6 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M331.2 256.5a74 74 0 1 1-148.2 0 74 74 0 0 1 148.2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M194 208c20.5-.5 46 1.4 62.9 14.8a97.1 97.1 0 0 1 60.5-14.3l11 20.1a101 101 0 0 0-50 8.2 85.3 85.3 0 0 1 34.6 72.1c-2.7 3.4-7 7.1-9.7 10.5 4-28.5-11-60.3-32.9-77 17.8 25.6 28.3 48.6 25.4 80.4l-10 6.4c4.6-28-2-61-22.7-80 12 17.5 23.8 49 16.4 81-3.2 1-8.2 3.7-11.4 4.6a96 96 0 0 0-10.8-78.7c-13.8 19.8-18.3 50-10.5 78-3.8-1-6.7-2.2-10.6-3.1-5.7-30 2.2-64 15.9-81.7-14 8.1-27.1 42.7-23.4 78l-9.3-4.3c-4.5-26.3 7.4-60.6 24.5-80.4-19.4 12.2-35.2 42.3-32.5 74.6-3-2.6-5.7-3.9-8.7-6.6-3.4-28.2 13-56.6 32.1-73.6-16.1-7.3-30-8.7-50-8.4 3.1-6.5 6-14.1 9.2-20.7z"
  })));
});
KGZ.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
KGZ.displayName = 'KGZ';
export default KGZ;