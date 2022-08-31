function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var VEN = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("g", {
    id: "d",
    transform: "translate(0 -36)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "c"
  }, /*#__PURE__*/React.createElement("g", {
    id: "b"
  }, /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#fff",
    d: "M0-5-1.5-.2l2.8.9z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "180",
    height: "120",
    transform: "scale(-1 1)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "180",
    height: "120",
    transform: "rotate(72)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "180",
    height: "120",
    transform: "rotate(-72)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "180",
    height: "120",
    transform: "rotate(144)"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "#cf142b",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00247d",
    d: "M0 0h640v320H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fc0",
    d: "M0 0h640v160H0z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "f",
    transform: "matrix(4 0 0 4 320 336)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "e"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "180",
    height: "120",
    transform: "rotate(10)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#d",
    width: "180",
    height: "120",
    transform: "rotate(30)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#e",
    width: "180",
    height: "120",
    transform: "rotate(40)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#f",
    width: "180",
    height: "120",
    transform: "rotate(-80 320 336)"
  }));
});
VEN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VEN.displayName = 'VEN';
export default VEN;