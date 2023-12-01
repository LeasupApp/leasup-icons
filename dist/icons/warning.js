var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var Warning = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5828 8.72727L12.4905 13.9084H11.5068L11.4145 8.72727H12.5828ZM12.0004 16.0675C11.8039 16.0675 11.6359 15.9988 11.4962 15.8615C11.3565 15.7218 11.2878 15.5537 11.2902 15.3572C11.2878 15.1631 11.3565 14.9974 11.4962 14.8601C11.6359 14.7204 11.8039 14.6506 12.0004 14.6506C12.1922 14.6506 12.3579 14.7204 12.4976 14.8601C12.6373 14.9974 12.7083 15.1631 12.7107 15.3572C12.7083 15.4875 12.674 15.607 12.6077 15.7159C12.5438 15.8224 12.4585 15.9077 12.352 15.9716C12.2455 16.0355 12.1283 16.0675 12.0004 16.0675Z",
    fill: "#21304F"
  }));
});
Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Warning.displayName = 'Warning';
export default Warning;