var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var GRD = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("g", {
    id: "c"
  }, /*#__PURE__*/React.createElement("g", {
    id: "b"
  }, /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#fcd116",
    d: "M0-1v1h.5",
    transform: "rotate(18 0 -1)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    transform: "scale(-1 1)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    transform: "rotate(72)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    transform: "rotate(144)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    transform: "rotate(216)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    transform: "rotate(288)"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007a5e",
    d: "M67.2 67.2h505.6v345.6H67.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fcd116",
    d: "M67.2 67.3h505.6L67.2 412.9h505.6z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "319.9",
    cy: "240.1",
    r: "57.6",
    fill: "#ce1126"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "matrix(52.8 0 0 52.8 320 240)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    x: "-100",
    transform: "translate(-30.3)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    id: "d",
    width: "100%",
    height: "100%",
    transform: "matrix(31.2 0 0 31.2 320 33.6)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    x: "100",
    transform: "translate(30.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1126",
    d: "M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fcd116",
    d: "M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    x: "-100",
    transform: "translate(-30.3 414.6)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "matrix(31.2 0 0 31.2 320 448.2)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    x: "100",
    transform: "translate(30.3 414.6)"
  }));
});
GRD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GRD.displayName = 'GRD';
export default GRD;