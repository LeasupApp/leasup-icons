var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var SGP = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fillOpacity: ".7",
    d: "M0 0h640v480H0z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-20 0h720v480H-20z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#df0000",
    d: "M-20 0h720v240H-20z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M146 40.2a84.4 84.4 0 0 0 .8 165.2 86 86 0 0 1-106.6-59 86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m133 110 4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.5 52 5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16zm58.5-.4 4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.4-51.6 4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16zm-46.3-34.3 5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15h16z"
  })));
});
SGP.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SGP.displayName = 'SGP';
export default SGP;