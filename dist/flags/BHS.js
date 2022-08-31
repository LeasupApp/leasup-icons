function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var BHS = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-opacity": ".7",
    d: "M-12 0h640v480H-12z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "clip-path": "url(#a)",
    transform: "translate(12)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M968.5 480h-979V1.8h979z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe900",
    d: "M968.5 344.5h-979V143.3h979z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#08ced6",
    d: "M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z"
  })));
});
BHS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BHS.displayName = 'BHS';
export default BHS;