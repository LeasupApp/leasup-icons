var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var ALA = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M106.3 0h1133.3v850H106.3z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "matrix(.56472 0 0 .56482 -60 -.1)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#0053a5",
    d: "M0 0h1300v850H0z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#ffce00"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M400 0h250v850H400z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 300h1300v250H0z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#d21034"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M475 0h100v850H475z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 375h1300v100H0z"
  }))));
});
ALA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ALA.displayName = 'ALA';
export default ALA;