var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var CMR = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#007a5e",
    d: "M0 0h213.3v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1126",
    d: "M213.3 0h213.4v480H213.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fcd116",
    d: "M426.7 0H640v480H426.7z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fcd116",
    transform: "translate(320 240) scale(7.1111)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "b"
  }, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M0-8-2.5-.4 1.3.9z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "scale(-1 1)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "rotate(72)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "rotate(144)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "rotate(-144)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "rotate(-72)"
  })));
});
CMR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CMR.displayName = 'CMR';
export default CMR;