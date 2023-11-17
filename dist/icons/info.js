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
    cx: "8",
    cy: "8",
    r: "7.5",
    stroke: "#21304F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.24805 9.90838V9.84091C7.25278 9.40057 7.29658 9.05019 7.37944 8.78977C7.46467 8.52936 7.5854 8.31866 7.74165 8.15767C7.8979 7.99669 8.08612 7.84991 8.30629 7.71733C8.44833 7.62737 8.57617 7.52675 8.68981 7.41548C8.80344 7.30421 8.89341 7.17637 8.95969 7.03196C9.02598 6.88755 9.05913 6.72775 9.05913 6.55256C9.05913 6.34186 9.00941 6.15956 8.90998 6.00568C8.81055 5.8518 8.67797 5.73343 8.51225 5.65057C8.3489 5.56534 8.16661 5.52273 7.96538 5.52273C7.78308 5.52273 7.60908 5.56061 7.44336 5.63636C7.27764 5.71212 7.14033 5.83049 7.03143 5.99148C6.92253 6.15009 6.85979 6.35488 6.84322 6.60582H5.76367C5.78024 6.17969 5.88796 5.81984 6.08683 5.52628C6.28569 5.23035 6.54847 5.00663 6.87518 4.85511C7.20425 4.7036 7.56765 4.62784 7.96538 4.62784C8.40098 4.62784 8.78214 4.70952 9.10884 4.87287C9.43555 5.03385 9.68886 5.25994 9.86879 5.55114C10.0511 5.83996 10.1422 6.17732 10.1422 6.56321C10.1422 6.82836 10.1008 7.06747 10.0179 7.28054C9.93507 7.49124 9.8167 7.67945 9.66282 7.84517C9.5113 8.01089 9.32901 8.15767 9.11594 8.28551C8.91471 8.41098 8.75136 8.54119 8.62589 8.67614C8.50278 8.81108 8.41282 8.97088 8.356 9.15554C8.29918 9.3402 8.26841 9.56866 8.26367 9.84091V9.90838H7.24805ZM7.78427 12.0675C7.59014 12.0675 7.42324 11.9988 7.28356 11.8615C7.14388 11.7218 7.07404 11.5537 7.07404 11.3572C7.07404 11.1631 7.14388 10.9974 7.28356 10.8601C7.42324 10.7204 7.59014 10.6506 7.78427 10.6506C7.97603 10.6506 8.14175 10.7204 8.28143 10.8601C8.42347 10.9974 8.4945 11.1631 8.4945 11.3572C8.4945 11.4875 8.46135 11.607 8.39506 11.7159C8.33114 11.8224 8.24592 11.9077 8.13938 11.9716C8.03285 12.0355 7.91448 12.0675 7.78427 12.0675Z",
    fill: "#21304F"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
export default Info;