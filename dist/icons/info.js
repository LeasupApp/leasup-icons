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
    r: "11.5",
    stroke: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.8721 14.8626V14.7614C10.8792 14.1009 10.9449 13.5753 11.0692 13.1847C11.197 12.794 11.3781 12.478 11.6125 12.2365C11.8469 11.995 12.1292 11.7749 12.4594 11.576C12.6725 11.4411 12.8643 11.2901 13.0347 11.1232C13.2052 10.9563 13.3401 10.7646 13.4395 10.548C13.539 10.3313 13.5887 10.0916 13.5887 9.82885C13.5887 9.5128 13.5141 9.23936 13.365 9.00853C13.2158 8.77771 13.017 8.60015 12.7684 8.47586C12.5233 8.34802 12.2499 8.2841 11.9481 8.2841C11.6746 8.2841 11.4136 8.34092 11.165 8.45456C10.9165 8.56819 10.7105 8.74575 10.5471 8.98723C10.3838 9.22515 10.2897 9.53233 10.2648 9.90875H8.64551C8.67037 9.26954 8.83194 8.72977 9.13024 8.28943C9.42853 7.84554 9.82271 7.50995 10.3128 7.28268C10.8064 7.05541 11.3515 6.94177 11.9481 6.94177C12.6015 6.94177 13.1732 7.06429 13.6633 7.30932C14.1533 7.55079 14.5333 7.88993 14.8032 8.32672C15.0766 8.75995 15.2133 9.26599 15.2133 9.84483C15.2133 10.2426 15.1512 10.6012 15.0269 10.9208C14.9026 11.2369 14.7251 11.5192 14.4942 11.7678C14.267 12.0163 13.9935 12.2365 13.6739 12.4283C13.3721 12.6165 13.127 12.8118 12.9388 13.0142C12.7542 13.2166 12.6192 13.4563 12.534 13.7333C12.4488 14.0103 12.4026 14.353 12.3955 14.7614V14.8626H10.8721ZM11.6764 18.1012C11.3852 18.1012 11.1349 17.9982 10.9253 17.7923C10.7158 17.5828 10.6111 17.3306 10.6111 17.0359C10.6111 16.7447 10.7158 16.4961 10.9253 16.2901C11.1349 16.0806 11.3852 15.9759 11.6764 15.9759C11.964 15.9759 12.2126 16.0806 12.4221 16.2901C12.6352 16.4961 12.7417 16.7447 12.7417 17.0359C12.7417 17.2312 12.692 17.4105 12.5926 17.5739C12.4967 17.7337 12.3689 17.8615 12.2091 17.9574C12.0493 18.0533 11.8717 18.1012 11.6764 18.1012Z",
    fill: "currentColor"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
export default Info;