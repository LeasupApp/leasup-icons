function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var Info = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.248 13.9084V13.8409C11.2528 13.4006 11.2966 13.0502 11.3794 12.7898C11.4647 12.5294 11.5854 12.3187 11.7417 12.1577C11.8979 11.9967 12.0861 11.8499 12.3063 11.7173C12.4483 11.6274 12.5762 11.5268 12.6898 11.4155C12.8034 11.3042 12.8934 11.1764 12.9597 11.032C13.026 10.8875 13.0591 10.7277 13.0591 10.5526C13.0591 10.3419 13.0094 10.1596 12.91 10.0057C12.8105 9.8518 12.678 9.73343 12.5123 9.65057C12.3489 9.56534 12.1666 9.52273 11.9654 9.52273C11.7831 9.52273 11.6091 9.56061 11.4434 9.63636C11.2776 9.71212 11.1403 9.83049 11.0314 9.99148C10.9225 10.1501 10.8598 10.3549 10.8432 10.6058H9.76367C9.78024 10.1797 9.88796 9.81984 10.0868 9.52628C10.2857 9.23035 10.5485 9.00663 10.8752 8.85511C11.2042 8.7036 11.5676 8.62784 11.9654 8.62784C12.401 8.62784 12.7821 8.70952 13.1088 8.87287C13.4355 9.03385 13.6889 9.25994 13.8688 9.55114C14.0511 9.83996 14.1422 10.1773 14.1422 10.5632C14.1422 10.8284 14.1008 11.0675 14.0179 11.2805C13.9351 11.4912 13.8167 11.6795 13.6628 11.8452C13.5113 12.0109 13.329 12.1577 13.1159 12.2855C12.9147 12.411 12.7514 12.5412 12.6259 12.6761C12.5028 12.8111 12.4128 12.9709 12.356 13.1555C12.2992 13.3402 12.2684 13.5687 12.2637 13.8409V13.9084H11.248ZM11.7843 16.0675C11.5901 16.0675 11.4232 15.9988 11.2836 15.8615C11.1439 15.7218 11.074 15.5537 11.074 15.3572C11.074 15.1631 11.1439 14.9974 11.2836 14.8601C11.4232 14.7204 11.5901 14.6506 11.7843 14.6506C11.976 14.6506 12.1417 14.7204 12.2814 14.8601C12.4235 14.9974 12.4945 15.1631 12.4945 15.3572C12.4945 15.4875 12.4614 15.607 12.3951 15.7159C12.3311 15.8224 12.2459 15.9077 12.1394 15.9716C12.0328 16.0355 11.9145 16.0675 11.7843 16.0675Z",
    fill: "#21304F"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
export default Info;