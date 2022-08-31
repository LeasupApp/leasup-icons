function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var AGO = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M0 0h640v243.6H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 236.4h640V480H0z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#ffec00",
    "fill-rule": "evenodd",
    d: "M228.7 148.2c165.2 43.3 59 255.6-71.3 167.2l-8.8 13.6c76.7 54.6 152.6 10.6 174-46.4 22.2-58.8-7.6-141.5-92.6-150l-1.3 15.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffec00",
    "fill-rule": "evenodd",
    d: "m170 330.8 21.7 10.1-10.2 21.8-21.7-10.2zm149-99.5h24v24h-24zm-11.7-38.9 22.3-8.6 8.7 22.3-22.3 8.7zm-26-29.1 17.1-16.9 16.9 17-17 16.9zm-26.2-39.8 22.4 8.4-8.5 22.4-22.4-8.4zM316 270l22.3 8.9-9 22.2-22.2-8.9zm-69.9 70 22-9.3 9.5 22-22 9.4zm-39.5 2.8h24v24h-24zm41.3-116-20.3-15-20.3 14.6 8-23-20.3-15h24.5l8.5-22.6 7.8 22.7 24.7-.3-19.6 15.3 7 23.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fe0",
    "fill-rule": "evenodd",
    d: "M336 346.4c-1.2.4-6.2 12.4-9.7 18.2l3.7 1c13.6 4.8 20.4 9.2 26.2 17.5a7.9 7.9 0 0 0 10.2.7s2.8-1 6.4-5c3-4.5 2.2-8-1.4-11.1-11-8-22.9-14-35.4-21.3z"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M365.3 372.8a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.6 0zm-21.4-13.6a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.7 0zm10.9 7a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.7 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fe0",
    "fill-rule": "evenodd",
    d: "M324.5 363.7c-42.6-24.3-87.3-50.5-130-74.8-18.7-11.7-19.6-33.4-7-49.9 1.2-2.3 2.8-1.8 3.4-.5 1.5 8 6 16.3 11.4 21.5A5288 5288 0 0 1 334 345.6c-3.4 5.8-6 12.3-9.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffec00",
    "fill-rule": "evenodd",
    d: "m297.2 305.5 17.8 16-16 17.8-17.8-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-width": "3",
    d: "m331.5 348.8-125-75.5m109.6 58.1L274 304.1m18.2 42.7L249.3 322"
  }));
});
AGO.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AGO.displayName = 'AGO';
export default AGO;