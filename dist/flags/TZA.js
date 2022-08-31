function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var TZA = forwardRef(function (_ref, ref) {
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
    d: "M10 0h160v120H10z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "stroke-width": "1pt",
    "clip-path": "url(#a)",
    transform: "matrix(4 0 0 4 -40 0)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#09f",
    d: "M0 0h180v120H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#090",
    d: "M0 0h180L0 120V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 120h40l140-95V0h-40L0 95v25z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M0 91.5 137.2 0h13.5L0 100.5v-9zM29.3 120 180 19.5v9L42.8 120H29.3z"
  })));
});
TZA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TZA.displayName = 'TZA';
export default TZA;