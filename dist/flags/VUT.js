var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var VUT = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M0 0v475l420-195h480v-85H420Z"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "#009543",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d21034",
    d: "M0 0h640v240H0z"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "scale(.71111 1.01053)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#fdce12",
    strokeWidth: "110",
    d: "m0 0 420 195h480v85H420L0 475"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "60",
    d: "m0 0 420 195h480m0 85H420L0 475"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#fdce12",
    transform: "translate(-22) scale(1.01053)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M106.9 283v27c23.5 0 69.7-18 69.7-76.1 0-58.1-49.3-68.9-64-68.9-14.8 0-60.3 10.6-60.3 58 0 47.6 44.7 52 53.5 52 8.8 0 41.8-8 38-43.6a35.5 35.5 0 0 1-35.4 31.5c-24 0-39-17.8-39-35.4 0-17.6 14.6-41.2 39.9-41.2 25.3 0 43.8 22.5 43.8 45.1 0 22.7-17.8 51.5-46.2 51.5z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "b"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#fdce12",
    strokeWidth: ".8",
    d: "m86.2 247.7 1.4 1s11.2-25.5 41.1-43.6c-3.8 2-23.8 12-42.5 42.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.1 243.3s-3.4-7-.4-10.2c3-3.1 1.7 8.3 1.7 8.3l1.3-1.9s-2-8.6.2-10.4c2.3-1.9 1.2 8.3 1.2 8.3l1.4-1.8s-1.5-8.4.7-10c2.3-1.6.9 8 .9 8l1.6-2s-1.2-8 1.5-9.9c2.7-1.9.3 7.6.3 7.6l1.8-2s-.8-7.3 1.5-9c2.3-1.6.4 7 .4 7l1.6-1.8s-.5-6.8 1.7-8.4c2.3-1.6.2 6.5.2 6.5l1.7-1.6s-.4-6.9 2.4-8.2c2.8-1.3-.5 6.4-.5 6.4l2-1.6s.5-8 2.9-8.7c2.4-.8-1 7-1 7l1.7-1.4s.9-6.8 3.5-7.6c2.7-.9-1.6 6.2-1.6 6.2l1.7-1.3s1.9-6.8 4.4-7.6c2.4-.7-2.6 6.5-2.6 6.5l1.7-1.2s2.7-6.2 5-6.6c2.1-.4-2.6 5.1-2.6 5.1l2.1-1.2s3.5-6.4 4.8-4.5c1.2 2-5 4.9-5 4.9l-2 1.2s7.5-3.6 8.4-1.8c.9 1.8-10.3 3-10.3 3l-1.8 1.2s7.5-2 6.6-.1c-1 1.9-8.4 1.5-8.4 1.5l-1.7 1.2s7.5-1.8 6.5 0c-1 1.6-8.3 1.5-8.3 1.5l-1.8 1.5s7.3-2 6.2.3c-1 2.2-9.4 2.1-9.4 2.1l-2 2s7.7-2.7 7-.6c-.6 2-9.4 3-9.4 3l-2 2s8.3-2.7 5.8-.2c-2.4 2.6-8.5 3.2-8.5 3.2l-2.3 3s8.2-5 7-2.2c-1.1 2.8-9.2 4.7-9.2 4.7l-1.6 2s7.4-4.3 6.6-2c-.7 2.5-8.6 5-8.6 5l-1.3 1.8s8.7-5.2 8-2.5c-.8 2.6-9.1 4.5-9.1 4.5l-1 1.7s8-4.7 8-2.4c.2 2.2-9.4 4.4-9.4 4.4l-.2-1.9z"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "matrix(-1 0 0 1 220 0)"
  })));
});
VUT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VUT.displayName = 'VUT';
export default VUT;