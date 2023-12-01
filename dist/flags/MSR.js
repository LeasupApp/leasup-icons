var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var MSR = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 32 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size * 3 / 4,
    viewBox: "0 0 640 480",
    className: "flag-icon"
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "#012169",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M384.9 111h205.5l-.3 146.3c1.7 58.7-34.9 95.2-102.3 111.7-47.9-12-103-36.5-103.2-110l.3-148z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00a2bd",
    stroke: "#000",
    strokeWidth: "1.8",
    d: "M389.4 115.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.5-35-98.6-105.4l.2-141.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a53d08",
    d: "M584.3 272.2c-7.2 53.7-48.6 77.2-96.5 89.7-42.5-11.4-88.2-29.6-97-89.5l193.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m480 141.5-.3-17.6 14 .1.1 17.5H532l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff9a08",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".8",
    d: "m449 278.8 35 36.3c12.1-13.3 3.7-63-12.2-72.1-1.9 5.9-5.1 13-8.6 15.2-7.5 5.2-26.1 11.2-19.9 15 1.4-1.9 5.1-3.7 6.9.6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.2-12.6.8-.3 14.3-4 16.6-15.9 2.9-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.7.9-42-47.9-42-47.9l3.8-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff9a08",
    stroke: "#000",
    strokeWidth: ".8",
    d: "m474.6 245 .2 65.5M470.6 246.3l.3 59.4M466.4 254.9l.2 47.2M462.9 258.2l.2 39.1M459.2 260v33M455.2 262.6v26.1M451.7 264.7v20"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#ffdf00",
    strokeLinecap: "round",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".8",
    d: "m448.5 283 36 41.2"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: "1.4400000000000002",
    d: "M486.3 257s16.4 35.7 1.2 65M444.3 275.4s1.2-3.1 2.7-1.8M441.5 266.3s-6.6 5.7-3 9.5"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#008021",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M494 175.4c2.3-2 3.6-3.3 5.1-3 1.5.2 3.5 0 5-.4a31 31 0 0 1 12-.4c1 .2 2.5.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.8-1.4c-8.8 6.7-17 14.8-29.1 6.7-2.8-1.8-3.6-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V175.4z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#ffe1cf",
    stroke: "#000",
    strokeWidth: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M502.3 166.8a9.6 9.6 0 0 1-.1 6.8c-1 2.4-1.3 5 .5 8.4 2.7-4 6.6-3.2 9-5.4 2.2-2.3 2.7-4.5 4.4-5-1.7-1.5-4.3-3.2-3.8-7.5.6-4.4 6.7-8 1.2-14.6a8 8 0 0 0-13.4 1.2c-.3.8.2 2.4-.7 3.4-.6.8-1.3 1.5-2.1 2-.5.4-.8.9-.2 1.6.2.3.6.3 1 .4l-.8 1.5c-.3.3-.2.6.2 1-.5 1.3.4 1.5-.2 2.5-.6.9-1.2 2 .6 3 .6.3 3 .8 4.4.7zM479.8 189.8c-3.2.8-8.4-.6-12.3-.2-1.8.2-3.2-.7-3-2.4.3-1.7.6-4.4.2-6.8a31.6 31.6 0 0 1 3.8-14.8 33 33 0 0 0 3.8-11.6c0-1.9.2-3.9 1.8-5 1.2-.7 1.4-1.4 1.8-2 1-1.5 2-1.8 2-1 .1.5 0 1-.5 1.6 1-.8 2.8-1.8 3.2-2 .4-.4 2.4-1.8 2.5-.4.8-.4 1.4-.4 1.6 0 .2.5 0 .7-.3 1 .6 0 1.2.9 0 1.8.7-.2 1.3.8.2 1.7-1 1-2.4 1.6-2.7 2.4-.4.8-3.2 2.9-4.3 3.3-1.1.5-1.2 1.1-1.2 2.7 0 17.8-2 16.3-2 20.7 0 1-.3 2.1.8 1.8 1.2-.4 2.9-.9 4.6-.9v10zM480.5 228c5.2-2.6 11.2-3.6 14.3-4.4a62.4 62.4 0 0 0 10.4-4.4c2.5-1.3 4.5-3 5.9-3.5a6.5 6.5 0 0 0 3.8-3.2 50.4 50.4 0 0 0 6.9-21.8c0-4-1-8.6-5-5.4a29.6 29.6 0 0 0-8.8 13.2c-1.6 6.4-3 7.9-3.3 9.1-.4 1.3-1.6 1.3-3.2 1.6a26.7 26.7 0 0 0-13.6 6.4 136 136 0 0 1-14.2 9.2c-3.7 2.1-4.4 2.3-5.2 4-.8 1.6-1.6 3-2.2 3.6-.8.8-1 1.6-.8 2.6.1.8-.2 4.2-.3 5.4 0 1.2.3 1.4.7 1.5.4 0 1-.2 1.3-1.6-.2 1.4 1.7 1 1.8-.1 0 1.5 2 .6 2-.8 0 1 1.7.3 1.7 0 .4-1.3.7-2.5 1.2-3.4.6-1.4 1.3-3.2 2.7-4 1.5-1.2.8-2.4 3.9-4zM517.9 322.5c.3 1.3 1 2.7 1.2 3.6.2.8-.2 1.1-.4 1.6a32.8 32.8 0 0 0-2.8 8.8c0 1.2-1 2.4-1.3 3.2-.5.8-.3 1.5.8 2.3.4.3 2-.2 2.1-1 .7.6 1.6.4 2.1-.5.6.5 1.5.2 2-.7.5.3 1.3-.3 1.6-.8.8.4 1.6 0 1.6-1.6 0-.4.3-1 .5-1.3.2-.4.3-1.1.3-1.7 0-.7.3-2 .9-2.8.6-1 1.5-2.5 1.1-4-.4-1.4-1-1.3-1.5-3.2-1.3-1.4-3-3.2-4.8-3.4-1.8 0-2.8 1.1-3.4 1.5zM485 332.4c1.7 1.6 5.3 1.6 7.8-1-.9-.4-3-1.4-3.8-2a12.4 12.4 0 0 1-4 3z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#870f00",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M501.4 149c.6-4 3.5-4 5.3-3.5.8.1 2.6.3 4.4-.2 3.4-.9 6 .3 5.6 3.6 1 .7 2 2.3 1.7 3.7-.1 1.4.2 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.6 2.1-4.8.5-1.3.6-3.3.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-.9-.3-1-2.8.4-3.1-.1-.8 0-1.6.3-2 .3-.4 0-1.2-.8-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M502.3 166.8c2.2-.3 3-1.6 4.6-1.6M497.5 160.5l.5.3c.4.3 1 .4 1.4.4M498.1 158.1l1 .6M503.3 149c-1.3-1.3 2.2-3.8 6-.2.8.8 2.5.8 3 .6M508.5 151c1.8-.4 4.3-.4 5.1 1.6.8 2 2.3.6 3.5 3 1.2 2.3 3 4.8 5 3M514.7 164a4 4 0 0 1-.4-3.2c-.7-.8-.4-2.5 0-3.3M509.7 159.2c0 .7 1 2 2.4 2.2M519.3 164.6c-.8-1-.7-2-.5-3.2"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M510.9 153c0 1.1.6 2.5 1.6 3 .3.6 1.4 2.2 3.8 2M516.7 149a10.9 10.9 0 0 0-5.2-2.6M502.7 182c-2 2.7-3.2 6.4-2.4 11.6 1 5.2 2.4 12.8-1.3 16.2M517.6 219.9c-2.6-.7-6.4-.7-8.5.9-2 1.5-5.6 1.6-7.9.4"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M512 219.6c-2.3.4-3.3 2.1-3.3 6.4 0 4.2-1 10.4-.2 16.6M507.9 221.5c-1.6.4-3.2.4-2.8 4.5M500 226c.1-2.4 1-4.8 2.6-4.3M516.7 226.6c0-5.6-1.2-7.1-2.8-7 2.2 0 3.7.3 4.7 9.2.6 6.8 2 9 3.7 14.4 4.1 13.6 2 34.5 4.1 42M513.5 228.2a71.4 71.4 0 0 1-.4 49.3c4.8 13.4 9.6 23.1 10.5 28.6M499.7 258.1c.8-2.9-2.2-3.2.4-13.3 1.1-4.4 1.3-7 .6-8.4"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M500.7 242.4c-1 4.4 3.3 12.8 1.2 19M496.4 262.5c0 4 .9 9 .7 13-.2 3.9 1.4 5.7 3.2 9.4 6.8 13.4 11.2 22.9 10.7 35.5-.2 2.4.6 7.2-1.8 8.6M496.6 332.4c.7 0 1.4-.4 2.3-2.4a64.8 64.8 0 0 0 2.4-23M502.7 316.6c.4 2.6.4 8-1.3 12.4"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".32000000000000006",
    d: "M507.1 308.7c1 5.6 1 10.7.1 14.3M504.8 323c.2 2.2 1.2 8-.5 8.5M513.5 296.2c4.3 6.7 7.6 23.2 11.2 26.6M517.1 320.2c0-1.8-.1-4.4-1.2-5.6M471 239.4c.1-1.2-.1-2.4 1.3-4.4M469 240.2c.2-4.4.1-4.8 1.4-6M467.2 240.3c0-3.2-.3-4.3 1-6.3M483.1 145.2l-4.5 3.4M484.4 146.2c-.5 0-2.1 1.4-5 3.6M484.5 148c-1 .4-2.6 2-4.2 3.2M477.4 147.7l-1.6 1.6M517.5 341c-.2-.2-.2-1.3.3-2.4M519.7 340.5c-.4-.3 0-1.7.2-2.6M521.6 339.8c-.4-.2-.5-1 0-2M523.1 339c-.2 0-.3-.6.1-1.8"
  })), /*#__PURE__*/React.createElement("g", {
    strokeWidth: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M500.5 152.7c.8 1 1.7 1 1.8 1.6.2.8.3.8.4 1 .2.2-.4.2-.6 0h-1.4c-.4 0-.8-.5-.6-.5.3-.1.3-.2.2-.4 0-.3.2-.6.4-.7l-.1-.3c-.2-.3-.3-1-.1-.8zM501 151.6a6.4 6.4 0 0 1 3.4 1.6c.7.8.1.6-.2.6s-1-.2-1.4-.6a4.6 4.6 0 0 0-1.9-1.2c-.3 0-.6-.4 0-.4z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#012169",
    d: "M0 0h320v240H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFF",
    d: "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#C8102E",
    d: "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFF",
    d: "M120.5 0v240h80V0zM0 80v80h320V80z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#C8102E",
    d: "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
  }));
});
MSR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MSR.displayName = 'MSR';
export default MSR;