function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var Dots = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 6C18.5 6.27614 18.2761 6.5 18 6.5C17.7239 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.7239 5.5 18 5.5C18.2761 5.5 18.5 5.72386 18.5 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z"
  }));
});
Dots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Dots.displayName = 'Dots';
export default Dots;