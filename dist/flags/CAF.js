function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var CAF = forwardRef(function (_ref, ref) {
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
    "fill-opacity": ".7",
    d: "M-12.4 32h640v480h-640z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "clip-path": "url(#a)",
    transform: "translate(12.4 -32)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00f",
    d: "M-52 32h719.3v119H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M-52 391.6h719.3V512H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#009a00",
    d: "M-52 271.3h719.3v120.3H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-52 151h719.3v120.3H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M247.7 32.5h119.9V512H247.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
  })));
});
CAF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CAF.displayName = 'CAF';
export default CAF;