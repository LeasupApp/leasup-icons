function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var KNA = forwardRef(function (_ref, ref) {
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
    d: "M-80.1 0h682.7v512H-80.1z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "clip-path": "url(#a)",
    transform: "translate(75.1) scale(.9375)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#ffe900",
    d: "M-107.8.2h737.6v511.3h-737.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#35a100",
    d: "m-108.2.2.8 368.6L466.6 0l-574.8.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c70000",
    d: "m630.7 511.5-1.4-383.2-579 383.5 580.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m380.4 156.6-9.8-42.2 33.3 27 38-24.6-17.4 41.3 33.4 27-44.2-1.5-17.3 41.3-9.9-42.2-44.1-1.5zm-275.2 179-9.9-42.3 33.3 27 38-24.6-17.4 41.3 33.4 27-44.1-1.5-17.4 41.3-9.8-42.2-44.1-1.5z"
  })));
});
KNA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
KNA.displayName = 'KNA';
export default KNA;