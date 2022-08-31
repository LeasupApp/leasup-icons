function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var LBN = forwardRef(function (_ref, ref) {
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
    d: "M-85.3 0h682.6v512H-85.3z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "translate(80) scale(.9375)"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#EE161F",
    d: "M-128 384h768v128h-768zm0-384h768v128h-768z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-128 128h768v256h-768z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#00A850",
    d: "M252.1 130c-7.8 15.5-13 15.5-26 26-5.2 5.1-13 7.7-2.6 13-10.5 5.1-15.7 7.7-20.9 18.1l2.6 2.6s10-4.8 10.4-2.6c1.8 2.1-13 10-14.9 11.3l-11 7c-13.1 10.3-21 7.7-28.7 23.3l26-2.6c5.2 18.2-13 20.8-26 28.6l-20.9 13c5.3 18.2 20.9 7.8 33.9 2.6l2.6 2.6v5.2l-26 13s-30.8 17.6-31.3 18.2c-.2 1 0 5.2 0 5.2 10.4 2.6 26 5.2 36.5 0 13-5.2 15.6-10.4 31.2-10.4a100.6 100.6 0 0 1-52 20.8v10.4c15.6 0 26 0 39-2.6l33.8-10.4c7.8 0 15.7 7.8 13 15.6-7.7 28.6-39 23.4-49.4 46.8L213 369c10.4-5.2 20.8-10.3 33.8-7.7 15.6 5.2 15.6 15.6 36.4 20.8l-5.2-13c5.2 2.6 10.4 2.6 15.7 5.2 13 5.2 15.6 10.4 31.2 7.8-13-15.6-15.6-13-26-23.4-10.4-15.6-15.7-39 0-41.6l18.2 5.2c18.2 2.6 18.2-2.6 44.2 7.8 15.7 5.2 20.9 13 39 7.8-7.7-18.2-36.3-31.2-54.6-36.4 20.9-13 15.6 5.2 44.3-2.6v-5.2C369.3 278 361.4 265 332.8 265l44.3-5.2v-5.2s-43.7-11.4-44.7-11.9c.3-1.3 1.4-3.3 4.3-4.5 8.3 5.4 33.3 4.8 34.8 4.7-.8-6.4-12.7-11.7-23-16.9 0 0-44.7-27.5-44.9-29.9.9-7 18.3 1.1 37 6.5-5.2-10.4-15.6-15.6-26-18.2l15.6-2.6c-10.4-23.4-36.4-20.8-52-31.2-10.5-7.8-10.5-13-26.1-20.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3.2",
    d: "M224 303c1.9-6.1 4.4-11.6-7.2-16.9-11.6-5.3 5.8 21.1 7.2 17zm13.7-12.3c-2.3.3-3.6 8.8 1.1 11.2 5.2.8 1-11.1-1.1-11.2zm13.5-1c-2.4.8-2.5 12.8 6 10.6 8.6-2.1 0-11.5-6-10.5zM267 259c1.8-3-.1-15-7.4-10-7.4 5.1 5 10.8 7.4 10zm-16-10c2.3-.9 2.5-8.3-4-6.3-6.3 1.9 2.3 7.8 4 6.3zm-14.4 2.9s-4.5-6.2-8-4.9c-4.3 4.2 8.3 5 8 4.9zM187 271.7c1.9.2 16-2.3 20.9-7.8 4.9-5.5-25.1 2.3-25.1 2.4 0 .1 2.8 4.9 4.2 5.4zm141.1-35c.7-1.3-7.5-7.1-12.4-4.8-1.3 4.3 12.4 5.7 12.4 4.8zm-27.8-14c1.6-2.2-3.5-11.3-13.7-6.2-10.2 5 10.7 9.8 13.7 6.3zm-32.1-5.3s2.5-8.2 8.6-6.6c7 5.3-8.3 6.9-8.6 6.6zm-6-6.2c-1-2.3-7.3-1-14.6 3.9-7.4 4.7 16.8 1.4 14.6-4zm18.7-22.1s6.5-3 8.5 0c2.7 4.3-8.6 0-8.5 0zm-5.5-2.9c-1.3-2.6-8.5-2.9-8.3 1-1.2 3 9.4 2.4 8.3-1zm-17.2 0c-.7-1.5-11 0-14 6.2 5 2.4 16.3-2.3 14-6.2zm-22 6.3s-13.4 8.3-14.3 14.3c.4 5.2 16.8-9.4 16.8-9.4s1.4-5.8-2.4-4.9zm-14.9-7.5c.4-1.7 6.7-5.6 7.2-5.3.5 1.7-5.1 6.3-7.2 5.3zm4.3 31.6c.3-2.5-16-2.3-9.9 5.2 5.2 6.3 11-4.1 9.9-5.2zm-15 10.7c-.8-1.6-2-6-4.2-6.4-1.9 0-11.7 2-12.5 3.6-.4 1.3 4.1 9.4 5.6 9.6 1.8.7 10.9-6 11.2-6.8zm88.4 55.2c.5-1.8 17.3-7.5 23-2 6.8 9.3-23.4 5-23 2zm46 10.9c3.7-6.2-11.3-13.6-17.6-6.5 2.2 8.5 14.6 11.6 17.6 6.5z"
  })));
});
LBN.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LBN.displayName = 'LBN';
export default LBN;