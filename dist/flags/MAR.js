var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var MAR = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#c1272d",
    d: "M640 0H0v480h640z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#006233",
    strokeWidth: "11.7",
    d: "M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
  }));
});
MAR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MAR.displayName = 'MAR';
export default MAR;