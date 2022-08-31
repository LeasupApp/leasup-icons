function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var GUY = forwardRef(function (_ref, ref) {
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
    viewBox: "0 0 640 480",
    className: "flag-icon"
  }, rest), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#399408",
    d: "M2.4 0H640v480H2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffde08",
    d: "M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477V.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
  })));
});
GUY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GUY.displayName = 'GUY';
export default GUY;