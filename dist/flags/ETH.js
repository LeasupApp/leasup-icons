var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var ETH = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: ".7",
    d: "M-61.3 0h682.7v512H-61.3z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt",
    clipPath: "url(#a)",
    transform: "translate(57.5) scale(.94)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#ffc621",
    d: "M-238 3.5H800v498H-238z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef2118",
    d: "M-240 342.5H799.3V512H-240z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#298c08",
    d: "M-238 0H800v180H-238z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "534.2",
    cy: "353",
    r: "199.7",
    fill: "#006bc6",
    transform: "matrix(.54 0 0 .54 -25.8 74)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffc621",
    d: "m214.3 188.2-6.5 4.5 23.5 33 6.3-4-23.4-33.5zm29.4 78-9.7-6.8 4-12.7-48.1.7-14-10.7 65.7-.7 12.2-36.9 6.6 15-16.7 52zm76.5-70.7-6.3-4.8-24.3 32.4 5.6 4.7 25-32.3zM254.8 247l3.5-11.2h13.3L256.4 190l6-16.5 20.5 62.4 38.8.5-12.2 10.7-54.7-.2zm90.6 51.2 2.7-7.4-38.3-13.3-2.8 7 38.4 13.7zm-69.1-46.4 11.7-.1 4.1 12.6 38.8-28.5 17.6.6-53.1 38.7 11.5 37.2-14-8.4-16.6-52.1zm-19.8 102 7.9.2.3-40.5-7.4-.5-.8 40.9zm22-80.3 3.8 11.1-10.7 8 39.4 27.7 5 16.8-53.6-38-31.5 22.7 3.5-16 44-32.3zm-103.3 13 2.3 7.5 38.7-12.2-2-7.2-39 11.9zm83.2-4-9.4 7.1-10.8-7.7-14.2 46-14.4 10 19.5-62.7-31.4-23 16.3-1.6 44.4 31.9z"
  })));
});
ETH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ETH.displayName = 'ETH';
export default ETH;