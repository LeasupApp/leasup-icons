var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var MMR = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fill: "#fecb00",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34b233",
    d: "M0 160h640v320H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ea2839",
    d: "M0 320h640v160H0z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(320 256.9) scale(176.87999)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#fff",
    d: "m0-1 .3 1h-.6z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "rotate(-144)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "rotate(-72)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "rotate(72)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "rotate(144)"
  })));
});
MMR.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MMR.displayName = 'MMR';
export default MMR;