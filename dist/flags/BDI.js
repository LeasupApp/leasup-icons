function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var BDI = forwardRef(function (_ref, ref) {
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
    viewBox: "0 0 32 24"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-opacity": ".7",
    d: "M-90.5 0H592v512H-90.5z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "clip-path": "url(#a)",
    transform: "translate(84.9) scale(.9375)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#18b637",
    d: "m-178 0 428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cf0921",
    d: "m-178 0 428.8 256L679.6 0zm0 512 428.8-256 428.8 256z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M679.6 0h-79.9L-178 464.3V512h79.9L679.6 47.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M398.9 256a148 148 0 1 1-296.1 0 148 148 0 0 1 296 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-178 0v47.7L599.7 512h79.9v-47.7L-98.1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cf0921",
    stroke: "#18b637",
    "stroke-width": "3.9",
    d: "m280 200.2-19.3.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm-64.6 111.6-19.2.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm130.6 0-19.2.3-10 16.4-10-16.4-19.1-.4 9.3-16.9-9.3-16.8 19.2-.4 10-16.4 10 16.5 19.2.4-9.4 16.8z"
  })));
});
BDI.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BDI.displayName = 'BDI';
export default BDI;