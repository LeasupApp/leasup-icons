var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var Attachment = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);
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
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M19.2495 11.9511L13.1335 17.8601C11.2155 19.7131 8.1059 19.7131 6.18797 17.8601C4.26299 16.0003 4.27109 12.9826 6.20603 11.1325L8.35918 9.07371L11.8503 5.70077C13.1625 4.43292 15.2902 4.43291 16.6024 5.70075C17.9195 6.97323 17.914 9.038 16.59 10.3039L13.3524 13.3995L10.8824 15.7858C10.1739 16.4702 9.02531 16.4702 8.31687 15.7858C7.60842 15.1013 7.60842 13.9916 8.31688 13.3071L13.0435 8.74068"
  }));
});
Attachment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Attachment.displayName = 'Attachment';
export default Attachment;