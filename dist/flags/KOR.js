function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var KOR = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: ".7",
    d: "M-95.8-.4h682.7v512H-95.8z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#a)",
    transform: "translate(89.8 .4) scale(.9375)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-95.8-.4H587v512H-95.8Z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-56.3 361.6 -101.3) scale(10.66667)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "c"
  }, /*#__PURE__*/React.createElement("path", {
    id: "b",
    d: "M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    y: "44"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    d: "M0 17v10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cd2e3a",
    d: "M0-12a12 12 0 0 1 0 24Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0047a0",
    d: "M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cy: "-6",
    r: "6",
    fill: "#cd2e3a"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-123.7 191.2 62.2) scale(10.66667)"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#c",
    width: "100%",
    height: "100%"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    d: "M0-23.5v3M0 17v3.5m0 3v3"
  }))));
});
KOR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
KOR.displayName = 'KOR';
export default KOR;