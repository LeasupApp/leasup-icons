function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var PHL = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "#0038a8",
    d: "M0 0h640v240H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1126",
    d: "M0 240h640v240H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M415.7 240 0 480V0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fcd116",
    d: "M26.7 42.4 41 55l16.6-9.2-7.4 17.5 14 13-19-1.6-8.1 17.2-4.3-18.5L14 71l16.3-10zm323.8 172.3.4 19 18 6.3-18 6.2-.4 19-11.5-15.1-18.2 5.5 10.8-15.6-10.8-15.6 18.2 5.5zM37.2 388.1l8 17.2 19-1.6-13.9 13 7.4 17.5-16.6-9.1-14.4 12.4 3.6-18.7L14 409l18.9-2.4zm114.2-249-6.2 6.2 3.1 47-3 .3-5.7-42.9-5.1 5 7.6 38.4a47.5 47.5 0 0 0-17.2 7.1l-21.7-32.4H96l26.4 34.3a48 48 0 0 0-2.4 2l-31.1-35.5h-8.8v8.8l35.4 31-2 2.5-34.3-26.3v7.1l32.5 21.7c-3.4 5.2-5.9 11-7.1 17.2L66.3 223l-5.1 5 42.9 5.7c-.2 1-.3 2.1-.3 3.1l-47-3-6.2 6.2 6.2 6.2 47-3.1.3 3.1-42.9 5.7 5 5 38.4-7.6a47.5 47.5 0 0 0 7.1 17.2l-32.5 21.7v7.2l34.3-26.3a48 48 0 0 0 2 2.4l-35.4 31v8.8H89l31-35.4 2.5 2L96 312.2h7.2l21.7-32.5c5.1 3.4 11 5.9 17.2 7.1l-7.6 38.4 5 5 5.7-42.9c1 .2 2 .3 3.1.3l-3 47 6.1 6.2 6.3-6.2-3.1-47 3-.3 5.7 43 5.1-5.1-7.6-38.4a47.5 47.5 0 0 0 17.2-7.1l21.7 32.5h7.2l-26.4-34.3a48 48 0 0 0 2.4-2l31.1 35.4h8.8v-8.8l-35.4-31 2-2.4 34.3 26.3v-7.2l-32.5-21.7c3.4-5.1 5.9-11 7.1-17.2l38.3 7.6 5.1-5-42.9-5.7c.2-1 .3-2 .3-3.1l47 3 6.2-6.1-6.2-6.2-47 3-.3-3 42.9-5.7-5-5-38.4 7.5a47.5 47.5 0 0 0-7.1-17.2l32.5-21.7v-7.1l-34.3 26.3a48 48 0 0 0-2-2.4l35.4-31v-8.9H214l-31 35.5a48 48 0 0 0-2.5-2l26.4-34.3h-7.2L178 200.2c-5.1-3.4-11-5.9-17.2-7.1l7.6-38.3-5-5-5.7 42.8-3.1-.3 3-47z"
  }));
});
PHL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PHL.displayName = 'PHL';
export default PHL;