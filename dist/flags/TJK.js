var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var TJK = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#060",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v342.9H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c00",
    d: "M0 0h640v137.1H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f8c300",
    d: "M300.8 233.6a8.6 8.6 0 0 1 16 4V272h6.4v-34.3a8.6 8.6 0 0 1 16-4 20.2 20.2 0 1 0-38.4 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M305.4 224.7a13.7 13.7 0 0 1 14.6 6.5 13.7 13.7 0 0 1 14.6-6.5 14.7 14.7 0 0 0-29.2 0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#f8c300",
    d: "M316.8 258.3a26 26 0 0 1-43.8 16.6 27 27 0 0 1-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    fill: "#f8c300",
    transform: "matrix(-1 0 0 1 640 0)"
  }), /*#__PURE__*/React.createElement("path", {
    id: "b",
    fill: "#f8c300",
    d: "M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 0 1 6.1 8.1c5.5-.7 8.2 1 8.2 1z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#f8c300",
    transform: "rotate(9.4 320 551.3)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#f8c300",
    transform: "rotate(18.7 320 551.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#f8c300",
    strokeWidth: "11",
    d: "M253.5 327.8a233.1 233.1 0 0 1 133 0"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#f8c300",
    transform: "translate(320 164.6) scale(.68571)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "c",
    d: "m301930 415571-790463-574305h977066l-790463 574305L0-513674z",
    transform: "scale(.00005)"
  })), /*#__PURE__*/React.createElement("g", {
    id: "d",
    fill: "#f8c300",
    transform: "translate(320 260.6) scale(.68571)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "translate(-70 -121.2)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "translate(-121.2 -70)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "translate(-140)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    fill: "#f8c300",
    transform: "matrix(-1 0 0 1 640 0)"
  }));
});
TJK.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TJK.displayName = 'TJK';
export default TJK;