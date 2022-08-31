function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var SWZ = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "#3e5eb9",
    d: "M0 0h640v480H0Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffd900",
    d: "M0 90h640v300H0Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b10c0c",
    d: "M0 120h640v240H0Z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#ffd900",
    stroke: "#000",
    transform: "translate(-43.2) scale(1.2)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m492.9 154.3-24.3 8.6 24.2 8.5 24.3-8.5z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "357.1",
    height: "5.7",
    x: "122.8",
    y: "160",
    rx: "3.1",
    ry: "2.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M471.4 165.7a3 3 0 0 0 2.9-2.8 3 3 0 0 0-2.9-2.9m-2.8 5.7a3 3 0 0 0 2.8-2.8 3 3 0 0 0-2.8-2.9m-2.9 5.7a3 3 0 0 0 2.9-2.8 3 3 0 0 0-2.9-2.9"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    x: "-23.3",
    y: "17.1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "485.7",
    height: "8.6",
    x: "59.8",
    y: "195.7",
    strokeWidth: "1.1",
    rx: "4.2",
    ry: "4.3"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: "1.2",
    d: "M488.2 240c-34.3 34.3-80 102.9-171.4 102.9-80 0-137.1-68.6-171.4-102.9 34.2-34.3 91.4-102.9 171.4-102.9 91.4 0 137.1 68.6 171.4 102.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M304.8 173c9.2 10.2 1.5 14.3 11.2 15 10.2.7 4.4 10.8 13 11.2 6 .2-.6 24.2 5.1 32 5.9 8.3 10.8 2.5 11 8.4 0 6.2-16 5.5-16.3 24.5-.5 10.9-13.6 11.6-14.2 18.6-.8 6.6 25.8 10.3 25.4 16.2-.3 6-28.7 5-30 11.7-.6 6 39 11 42.2 28.5-6 2-22.7 3.7-35.4 3.8-80 0-137.1-68.6-171.4-103 34.3-34.2 91.4-102.8 171.4-102.8 0 0-23.7 21.7-12 35.8z"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#fff",
    transform: "translate(-43.2) scale(1.2)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "d",
    strokeWidth: "6.9"
  }, /*#__PURE__*/React.createElement("g", {
    id: "c"
  }, /*#__PURE__*/React.createElement("path", {
    id: "b",
    d: "M214 192.4v-22.9m13.8 0v22.9m13.8-22.9v22.9"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    y: "38.1"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    x: "41.6"
  }))), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    x: "104.8",
    stroke: "#000",
    transform: "translate(-43.2) scale(1.2)"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#a70000"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#333",
    stroke: "#000",
    d: "M570.4 236c-5.2 8.9 4-3 26.4 12a21.6 21.6 0 0 1 7.8 15.3c-1-.7-1.9-2.3-3-3.2-1.6 1.6 1.6 9 2 12.5-3.5-2-3.2-2.8-4.3-5.2.2 2.8-.7 10.8.8 14-2.8-.8-2.6-3-4-3.5 1 3.5-.9 7.2-.4 11.2-1.6-1.6-3.4-2.9-4.1-3.5-.2 2-3.1 6.8-3.2 8.6a4.5 4.5 0 0 1-2-3 59.2 59.2 0 0 0-8 12.4c-4.7-4-16.6-14-18.2-19.4-1.4 3-3.4 4-7.2 6.2-1.6-8.4-7.5-17.8-4.4-25.1a75.2 75.2 0 0 0-6.1 4.2 49.6 49.6 0 0 1 28-33.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b3b3b3",
    d: "M551 280.5c2.2-4.3 4.2-5.7 5.6-8.5 2.4-4.8 2.8-8.8 5-8.2 2 .6 2 2.6-.7 7.4-2.7 4.8-4 5.8-9.9 9.3zm14.6 10.2c-.2-3.2.7-4.6.6-6.7-.4-3.8-1.9-6.3.1-6.5 2-.1 2.9 1.1 2.9 4.8 0 3.8-.6 4.8-3.6 8.4zm11.1 6.4c-.9-4.5-.2-6.5-.8-9.5-1-5.2-2.9-8.6-1-9.1 1.8-.5 3 1.2 3.7 6.5.6 5.2.3 6.7-1.9 12.2zm11.5-32c-2.7-2-4.3-2.2-6-3.5-3-2.4-4.6-4.8-5.6-3.6-1 1.2-.3 2.6 3 4.7s4.2 2.3 8.6 2.4zm-1.9 15.2c-1.4-3-3-3.7-3.8-5.6-1.6-3.4-1.6-6.3-3.5-5.6-1.7.8-1.9 2.3 0 5.6 2 3.2 3 3.8 7.2 5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#333",
    stroke: "#000",
    strokeWidth: "1.3",
    d: "M53.8 244.6c-.4-2.6.2-3-1.4-5 2.4 1 2.4 3.7 5.3 1.8 1-.5 1.5-.5.2-3.5 3 .2 12.7 3.5 14.3 3.6 4.1.2 11.6-4.3 16.8 1.2 5 5 3.2 10.3 3.2 17.2-2-1-1-1.3-3.2-3.9 1.6 6.2 0 17.1 0 23.6-.8-1.6-.7-.9-1.5-2.5-2 5.9-4.6 7-4.6 14.1-.8-2.8 0-2.2-.9-3.6-2 4.5-16 8.3-10.6 12.8-4.8-2.8-7-2.6-9-5-1 .5-1.8 1.7-2.6 3.2-8.5-3.8-5.5-12.2-12.1-17.9-1.2 2.4-.7 2.1-2 5.9-1.2-5.3-1.6-8.7-3.1-12.6-1.3 2.2-1.2 1.3-3.6 4.6-1-6.4-2.5-8-2-12.3-2.4 1.8-.8 1-3.3 3.2 2.4-16.5 12.6-28.8 20-25z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b3b3b3",
    d: "M43.4 271.7c2.1-5.4 4-7 5.5-10.4 2.5-6.1 2.9-11 5-10.3 2 .8 2 3.2-.8 9.2-2.8 6-4 7.2-9.7 11.5zm8.2 13.3c.8-4.8 2.2-6.4 2.8-9.6 1-5.4.5-9.4 2.4-9.2 2 .2 2.4 2.3 1.1 7.6-1.3 5.5-2.2 6.8-6.4 11.2zm9.8 9.4c.3-4.6 1.4-6.5 1.6-9.5.3-5.2-.8-9 1-9 2 0 2.6 1.9 2 7.1-.6 5.2-1.2 6.6-4.6 11.4zM82.6 264c-4-4-6.4-4.8-9-7.4-4.6-4.6-6.9-8.8-8.6-7.3-1.6 1.5-.6 3.7 4.3 8 4.8 4.5 6.5 5.1 13.4 6.7zm-2.4 15.6c-2.6-4-4.6-5.1-6.3-7.8-3-4.5-4-8.4-5.7-7.5-1.7 1-1.3 3 1.9 7.5 3.3 4.4 4.5 5.2 10.1 7.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#333",
    stroke: "#000",
    d: "M261.4 155.4c-4.8 9.2 8.3-3 28.8 12.4a35.4 35.4 0 0 1 9.2 19.3 61.7 61.7 0 0 1-12-5.3s9 9.2 9 19.6c-3.2-2-4.8-1.7-6-4.1 0 3.3 3 5.5 3 10.7a42.4 42.4 0 0 0-6.3-4.2c3 5.3-5.5 15.5-1.2 18.8a26.6 26.6 0 0 1-18.1-11c-1.6 1-1.8 2.7-1.9 4.6.3.1-11.3-8.7-10.2-12a10.1 10.1 0 0 0-2.2 5.8 31.7 31.7 0 0 1-9.6-13.8c-1.8 2.4-2 2.4-3.9 5-1.4-8.7-1.4-8.4 1.4-15.8a69 69 0 0 0-5.6 4.3 50 50 0 0 1 25.6-34.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b3b3b3",
    d: "M249.6 200.2c.8-6.3 2.4-8.6 3-12.8.8-7-.2-12.4 2.4-12.2 2.4.2 3.2 2.8 2 10-1.3 7.1-2.4 8.8-7.3 15.1zm13.3 11.6c-.5-5.2.5-7.6.1-11-.5-6-2.4-10.2-.2-10.5 2.2-.4 3.4 1.6 3.6 7.8.2 6-.3 7.7-3.5 13.7zm20.8 9.6c-2.3-4.7-4.3-6-5.7-9-2.6-5.3-3.2-9.5-5.1-8.8-2 .8-1.9 3 1 8.2 2.8 5 4.1 6.1 9.7 9.6zm7.1-41.5c-5.8-3-8.7-3-12.4-5-6.5-3.4-10.3-7.1-11.6-5-1.4 2 .4 4.1 7.1 7.2 6.7 3.1 8.8 3.2 16.8 2.8zm2 17.3c-4-3.4-6.6-4-9.3-6.2-4.8-4-7.1-7.7-8.6-6.2-1.6 1.6-.6 3.6 4.4 7.3 5 3.7 6.7 4.1 13.6 5.1z"
  })));
});
SWZ.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SWZ.displayName = 'SWZ';
export default SWZ;