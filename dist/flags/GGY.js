var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var GGY = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8112d",
    d: "M256 0h128v480H256z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8112d",
    d: "M0 176h640v128H0z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#f9dd16",
    d: "m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "36",
    height: "24",
    transform: "rotate(90 320 240)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "36",
    height: "24",
    transform: "rotate(-90 320 240)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "36",
    height: "24",
    transform: "rotate(180 320 240)"
  }));
});
GGY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GGY.displayName = 'GGY';
export default GGY;