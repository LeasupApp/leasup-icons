function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var NZL = forwardRef(function (_ref, ref) {
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
    id: "b"
  }, /*#__PURE__*/React.createElement("g", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0v.5L1 0z",
    transform: "translate(0 -.3)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0v-.5L1 0z",
    transform: "rotate(-36 .5 -.2)"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    transform: "scale(-1 1)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    transform: "rotate(72 0 0)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    transform: "rotate(-72 0 0)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    transform: "scale(-1 1) rotate(72)"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "#00247d",
    fillRule: "evenodd",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-111 36.1) scale(.66825)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#fff",
    transform: "matrix(45.4 0 0 45.4 900 120)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#cc142b",
    transform: "matrix(30 0 0 30 900 120)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(82 525.2 114.6) scale(.66825)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#fff",
    transform: "rotate(-82 519 -457.7) scale(40.4)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#cc142b",
    transform: "rotate(-82 519 -457.7) scale(25)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(82 525.2 114.6) scale(.66825)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#fff",
    transform: "rotate(-82 668.6 -327.7) scale(45.4)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#cc142b",
    transform: "rotate(-82 668.6 -327.7) scale(30)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-111 36.1) scale(.66825)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#fff",
    transform: "matrix(50.4 0 0 50.4 900 480)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    fill: "#cc142b",
    transform: "matrix(35 0 0 35 900 480)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#012169",
    d: "M0 0h320v240H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8102e",
    d: "M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M120.5 0v240h80V0zM0 80v80h320V80z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8102e",
    d: "M0 96.5v48h320v-48zM136.5 0v240h48V0z"
  }));
});
NZL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
NZL.displayName = 'NZL';
export default NZL;