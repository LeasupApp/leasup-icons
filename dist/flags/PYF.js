function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var PYF = forwardRef(function (_ref, ref) {
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
    d: "M0 0h640v480H0z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M80 0h480v480H80z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#083d9c",
    fillRule: "evenodd",
    stroke: "#083d9c",
    strokeWidth: "2pt",
    d: "M277.3 340.8s10.8-8.8 21.4-8.8 13.4 7.3 20.8 7.9c7.3.6 13.4-7.3 22.5-7.6 9.1-.3 20.5 6.4 20.5 6.4l-39.8 12-45.4-10zm-22.9-13 135.4.7s-11.7-12.7-25.5-13c-13.8-.2-10 6-20.5 6.8-10.6.9-13.2-6.4-22.9-6.2-9.6.3-15.2 6.2-22.5 6.5-7.4.3-16.7-7.3-22.3-7-5.6.3-25.5 8.7-25.5 8.7l3.8 3.6zm-17.3-16 167 .5c2.7-3.8-8.2-12.9-18.1-13.7-8.2.3-14 8.5-20.8 8.8-6.8.3-14.4-8.5-22-8.2-7.6.3-15.5 8.2-23.1 8.2-7.7 0-13.2-8.5-22.9-8.5s-14 9.3-21.4 8.8c-7.3-.6-13.8-9.4-20.8-9.4s-18.7 10.5-21 10c-2.4-.7 2.9 4.3 3.1 3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    fillRule: "evenodd",
    stroke: "#000",
    "stroke-linejoin": "round",
    strokeWidth: "2.5",
    d: "m301.3 218.9 38.4 10.2v-54.8c-17.6 1-32.2-33.4-1.2-35.7-30.5-4.4-34 3.5-37.5 12l.3 68.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#083d9c",
    fillRule: "evenodd",
    stroke: "#083d9c",
    "stroke-linecap": "round",
    strokeWidth: "5",
    d: "m277 258.7 86.7.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-linecap": "round",
    strokeWidth: "4",
    d: "m281.1 238 10.3 13.7m-10.3 0 11.1-13.5M287 237l-.3 8.5m10.8-7.6 10.3 13.8m-10.3 0 11.1-13.5m-5.2-1.2-.3 8.5m11.1-7.6 10.3 13.8m-10.3 0 11.1-13.5m-5.2-1.2-.3 8.5m11.7-7.6 10.2 13.8m-10.2 0 11.1-13.5m-5.3-1.2-.2 8.5m11-7.6 10.3 13.8m-10.2 0 11.1-13.5M354 237l-.3 8.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7d08",
    fillRule: "evenodd",
    d: "m218.7 259.6 36.9.3v-23.1l-42.2-2.1 5.3 24.9zm-1.8-32 39.3 3.9-.3-16.4-38.4-15.3-.6 27.9zm8-32.7 30.1 14.6 4.3-4.5s-2.8-1.9-2.6-3.7c0-1.7 2.8-2 2.8-4 0-1.7-3-2-3.1-3.7-.2-2 2.4-4 2.4-4l-27.2-23.7-6.8 29zm198 65h-39l-.3-22.6 42.8-3.2-3.5 25.8zM384.2 232l46.3-5.6-10-26.7-36.6 15.6.3 16.7zm33.7-39.6L384.5 210c-.5-2-.9-3.8-3.2-5.3 0 0 2-1.2 2-3.2s-2.6-2.4-2.6-3.5 2.4-2.2 2.6-4.9c-.3-1.8-2.6-4.4-2.2-4.9l26-19.8 10.8 24zm-72.4 39.1 16.7-.7.3-6.7-17 7.4zm-51-.5-17.5-.5v-7l17.6 7.5zm0-2-17.5-9v-11.8s-2 .3-1.8-2c.1-4.9 12.9 8.9 19.4 13.4l-.1 9.4zm51-1.1v-7.7s15.8-14.2 19.1-16.9c0 3-1.8 5.2-1.8 5.2v11.2l-17.3 8.2zM243 163.8l17.8 19.7c.4-1.8 4.5-2.1 8.6-1.8 4 .3 7.3-.3 7.3 2.6s-2 2.5-2 4.6 3 1.9 3 4.5-2.2 2.1-2.2 4.1c0 1.7 2.4 1.8 2.4 1.8l16.6 16.1v-17.2l-34.2-53.7-17.3 19.3zm27.4-20.4 23.3 47.5s.2-43.8 4.1-46.1l-6.5-12-20.9 10.6zm101 1.9-26 46.2V172s2.2-3.2-1.2-3c-3.4.3-7.5-.2-7.5-.2l10.4-36.6 24.3 13zM398 165c-.3.5-17.5 18-17.5 18-.8-2-6-1-11-1-4.9 0-5.6 1.6-5.3 2.9.5 3.3 2.2.8 2.2 4 0 3.1-2.4 2-2.7 4.2.3 2.7 3.8 2 1.7 4l-19.9 19.2v-18.2l37.1-57.6L398 165z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    fillRule: "evenodd",
    stroke: "#000",
    "stroke-linejoin": "round",
    strokeWidth: "2.5",
    d: "M309.8 268.4c-8.3 13.8-30.6 9.7-35.9 0-1.5-.4-.6-59.5-.6-59.5s-2.5-1.1-2.6-3c-.1-1.8 3.4-2 3.4-4.3s-3.6-1.4-3.7-3.8c0-2.2 3.9-2 3.7-4-.2-2.4-4.3-2-4.5-4.2 0-1.7 3-3.2 3.8-4a61.3 61.3 0 0 1-2.8 0l-6.4.1c-4.6 0 0 1 0 3.6 0 1.7-2.3 2.9-2.5 4.3-.1 1.6 3.2 2.6 3.3 4.5 0 1.6-3.3 1.7-3.2 3.3.2 2.5 3 3.1 2.9 4.7 0 1.5-3.6 2.1-3.7 3.3.2 2.4.6 60.8.6 60.8 5.7 29.8 38.8 37.3 48.2-1.8zm21.9 0c8.3 13.8 30.6 9.7 35.8 0 1.6-.4.7-59.5.7-59.5s2.5-1.1 2.6-3c.1-1.8-3.2-2-3.2-4.3s3.4-1.4 3.4-3.8c0-2.2-3.5-2-3.3-4.2.2-2.3 3-2 3.1-4.2.1-1.9-1.7-3-2.6-3.8h2.7l6.4.1c4.5 0 0 1 0 3.6 0 1.7 2.3 2.9 2.5 4.3 0 1.6-3.2 2.6-3.3 4.5 0 1.6 3.3 1.7 3.2 3.3-.2 2.5-3 3.1-3 4.7.1 1.5 3.7 2.1 3.7 3.3l-.5 60.8c-5.7 29.8-38.9 37.3-48.2-1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#083d9c",
    fillRule: "evenodd",
    stroke: "#083d9c",
    strokeWidth: "2pt",
    d: "M301.7 295.6H339c.3-.3-8.4-13-18.6-12-11.5.3-19.3 12-18.7 12zm118.9-1h-51s6.6-3.8 8.4-7.4c3.3 1.8 2.4 3.6 9 3.9 6.6.3 12.9-7.5 19.2-7.2 6.3.3 14.4 11 14.4 10.8zm-201 0h51s-6.6-3.8-8.4-7.4c-3.3 1.8-2.4 3.6-9 3.9-6.6.3-13-7.5-19.2-7.2-6.3.3-14.4 11-14.4 10.8zm3.8-16 36.3.3s-2.3-5-2.6-11.1c-9.4-3.2-17 7-23.8 7.3-6.7.3-13.7-7.3-13.7-7.3l3.8 10.8zm194 0-36.4.3s2.3-5 2.6-11.1c9.4-3.2 17 7 23.8 7.3 6.7.3 13.7-7.3 13.7-7.3l-3.8 10.8zM311 279l18.4-.5s.3-5.6-9.3-5.6-8.8 6.4-9.1 6.1zm-11.2-7.9a17 17 0 0 0 8.2-7.6l-12.6.3s-5.8 3.5-8.7 7.3h13.1zm40.8 0a17 17 0 0 1-8.2-7.6l12.6.3s5.8 3.5 8.7 7.3h-13.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2010",
    fillRule: "evenodd",
    d: "M-40 360h720v120H-40zm0-360h720v120H-40z"
  })));
});
PYF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PYF.displayName = 'PYF';
export default PYF;