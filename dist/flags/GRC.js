function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var GRC = forwardRef(function (_ref, ref) {
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
    fill: "#0d5eaf",
    fillRule: "evenodd",
    d: "M0 0h640v53.3H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M0 53.3h640v53.4H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0d5eaf",
    fillRule: "evenodd",
    d: "M0 106.7h640V160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M0 160h640v53.3H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0d5eaf",
    d: "M0 0h266.7v266.7H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0d5eaf",
    fillRule: "evenodd",
    d: "M0 213.3h640v53.4H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M0 266.7h640V320H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0d5eaf",
    fillRule: "evenodd",
    d: "M0 320h640v53.3H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M0 373.3h640v53.4H0z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff",
    fillRule: "evenodd",
    strokeWidth: "1.3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M106.7 0H160v266.7h-53.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 106.7h266.7V160H0z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#0d5eaf",
    d: "M0 426.7h640V480H0z"
  }));
});
GRC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GRC.displayName = 'GRC';
export default GRC;