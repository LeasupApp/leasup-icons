var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var IND = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#f93",
    d: "M0 0h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 160h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#128807",
    d: "M0 320h640v160H0z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "matrix(3.2 0 0 3.2 320 240)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "20",
    fill: "#008"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "17.5",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3.5",
    fill: "#008"
  }), /*#__PURE__*/React.createElement("g", {
    id: "d"
  }, /*#__PURE__*/React.createElement("g", {
    id: "c"
  }, /*#__PURE__*/React.createElement("g", {
    id: "b"
  }, /*#__PURE__*/React.createElement("g", {
    id: "a",
    fill: "#008"
  }, /*#__PURE__*/React.createElement("circle", {
    r: ".9",
    transform: "rotate(7.5 -8.8 133.5)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 17.5.6 7 0 2l-.6 5L0 17.5z"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "rotate(15)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "rotate(30)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%",
    transform: "rotate(60)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(120)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "100%",
    height: "100%",
    transform: "rotate(-120)"
  })));
});
IND.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
IND.displayName = 'IND';
export default IND;