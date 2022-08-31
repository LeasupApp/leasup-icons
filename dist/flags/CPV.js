function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var CPV = forwardRef(function (_ref, ref) {
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
    d: "M-123.4 0h682.6v512h-682.6z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#a)",
    transform: "translate(115.7) scale(.94)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-123.4 233H723v206h-846.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#081873",
    d: "M-122.8 0h846v256.6h-846zm.3 385.9h852.1V512h-852.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3929",
    d: "M-122.5 302.6h846v39.6h-846z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m131 399.2 6.6 20.4H159l-17.4 12.7 6.6 20.5L131 440l-17.4 12.7 6.7-20.5-17.4-12.7h21.5M317 250.4l6.7 20.5H345l-17.4 12.6 6.6 20.5-17.4-12.7-17.4 12.7 6.6-20.5-17.4-12.6h21.6m-222 64.4 6.6 20.5h21.5L99 368.6l6.7 20.4-17.4-12.6L70.9 389l6.6-20.4-17.4-12.7h21.5M317 329.5l6.7 20.4H345l-17.4 12.7 6.6 20.4-17.4-12.6-17.4 12.7 6.6-20.5-17.4-12.7h21.6m-40.5-161.7 6.7 20.4H298l-17.4 12.7 6.6 20.5-17.4-12.7-17.4 12.7 6.7-20.5-17.5-12.7h21.6m-64.5-45.2 6.7 20.5h21.5l-17.4 12.6 6.6 20.5-17.4-12.6-17.4 12.6 6.7-20.5-17.4-12.6H192m-64.5 2.9 6.7 20.5h21.5l-17.4 12.6 6.7 20.5-17.5-12.7-17.4 12.7 6.7-20.5-17.4-12.6H121m-34.8 43.2 6.6 20.5h21.6l-17.5 12.6 6.7 20.5-17.4-12.7-17.4 12.7 6.6-20.5L58 271h21.5m119.2 149.4 6.7 20.5h21.5l-17.4 12.6 6.7 20.5-17.5-12.7-17.4 12.7 6.7-20.5-17.4-12.6H192m82.2-41.7 6.6 20.4h21.5L285 432.3l6.7 20.5-17.4-12.7-17.5 12.7 6.7-20.5-17.4-12.7h21.5"
  })));
});
CPV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CPV.displayName = 'CPV';
export default CPV;