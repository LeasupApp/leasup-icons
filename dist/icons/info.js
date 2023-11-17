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
    stroke: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.24805 9.90835V9.84088C7.25278 9.40054 7.29658 9.05016 7.37944 8.78974C7.46467 8.52932 7.5854 8.31862 7.74165 8.15764C7.8979 7.99665 8.08612 7.84987 8.30629 7.7173C8.44833 7.62733 8.57617 7.52672 8.68981 7.41545C8.80344 7.30418 8.89341 7.17634 8.95969 7.03193C9.02598 6.88751 9.05913 6.72771 9.05913 6.55252C9.05913 6.34182 9.00941 6.15953 8.90998 6.00565C8.81055 5.85177 8.67797 5.73339 8.51225 5.65054C8.3489 5.56531 8.16661 5.52269 7.96538 5.52269C7.78308 5.52269 7.60908 5.56057 7.44336 5.63633C7.27764 5.71209 7.14033 5.83046 7.03143 5.99144C6.92253 6.15006 6.85979 6.35484 6.84322 6.60579H5.76367C5.78024 6.17965 5.88796 5.81981 6.08683 5.52625C6.28569 5.23032 6.54847 5.0066 6.87518 4.85508C7.20425 4.70357 7.56765 4.62781 7.96538 4.62781C8.40098 4.62781 8.78214 4.70948 9.10884 4.87284C9.43555 5.03382 9.68886 5.25991 9.86879 5.5511C10.0511 5.83993 10.1422 6.17729 10.1422 6.56318C10.1422 6.82833 10.1008 7.06744 10.0179 7.28051C9.93507 7.49121 9.8167 7.67942 9.66282 7.84514C9.5113 8.01086 9.32901 8.15764 9.11594 8.28548C8.91471 8.41095 8.75136 8.54116 8.62589 8.6761C8.50278 8.81105 8.41282 8.97085 8.356 9.15551C8.29918 9.34017 8.26841 9.56862 8.26367 9.84088V9.90835H7.24805ZM7.78427 12.0674C7.59014 12.0674 7.42324 11.9988 7.28356 11.8615C7.14388 11.7218 7.07404 11.5537 7.07404 11.3572C7.07404 11.1631 7.14388 10.9974 7.28356 10.8601C7.42324 10.7204 7.59014 10.6505 7.78427 10.6505C7.97603 10.6505 8.14175 10.7204 8.28143 10.8601C8.42347 10.9974 8.4945 11.1631 8.4945 11.3572C8.4945 11.4874 8.46135 11.607 8.39506 11.7159C8.33114 11.8224 8.24592 11.9076 8.13938 11.9716C8.03285 12.0355 7.91448 12.0674 7.78427 12.0674Z",
    fill: "currentColor"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
export default Info;