function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var JEY = forwardRef(function (_ref, ref) {
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
    viewBox: "0 0 640 480",
    className: "flag-icon"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clippath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: ".7",
    d: "M-5.3-6h40v30h-40z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "matrix(16 0 0 16 84.8 96)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-5.3-6h40v30h-40z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#df112d",
    fillRule: "evenodd",
    d: "M-10.3-6v2L11.6 9l-21.8 13v2H-7l21.8-13 21.7 13h3.2v-2L18 9 39.8-4v-2h-3.3L14.7 7-7-6h-3.2z"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#e8112d",
    stroke: "none",
    d: "M17.3-1.5c.7 2.6.3 5.8-2.6 7.6-2.9-1.8-3.3-5-2.6-7.6.7-.6 3.8-1 5.2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f9dd16",
    stroke: "none",
    d: "M14.7-2c1 0 1.8.2 2.6.6a5.7 5.7 0 0 1 1-2.4c-.5 0-.7.2-.7.5-.1-.3-.6-.3-.8-.1.6.3.2 1-.3.9-.3-.1-.4-.3-.4-.5a.3.3 0 1 0-.1 0 1 1 0 0 1-.7.3.7.7 0 0 1-.4-.6c0-.5.6-.6.7-.5 0-.3-.6-.7-.7-.3a1 1 0 0 0-.2-1.2 1 1 0 0 0-.2 1.1c-.2-.3-.7 0-.7.4.1-.1.6 0 .6.5 0 .2 0 .5-.3.5a.6.6 0 0 1-.7-.2l.2-.1a.3.3 0 1 0-.3 0c0 .3-.2.5-.4.5a.5.5 0 0 1-.3-.9c-.2-.2-.7-.2-.8.2 0-.3-.2-.5-.8-.5a5.7 5.7 0 0 1 1 2.4 5.3 5.3 0 0 1 2.7-.6z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#f9dd16",
    stroke: "none",
    strokeWidth: ".1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 .6h-.2.3c.1 0 .2-.1.1-.2h.2l-.2-.2h.2l-.2-.2h.1a.2.2 0 0 1 0-.2h-.7l-.5-.1.6-.3c0-.2-.3-.5-.8-.3L14.8-1l.7-.2.8-.1h-.7c-.3 0-1-.1-1 .3s.7.3 1.4.2l.6.1-.6.2a2 2 0 0 0-.9 0h-.7c-.2 0-.5 0-.7-.2 0 0-.4.2-.4.4V0c.2.2 0 .1-.2.1l-.5-.1c-.1-.2-.2-.3-.4-.2V0h.2a.2.2 0 0 0-.2 0v.2h.3-.2v.1h.4a.2.2 0 0 0-.2.2c.1-.1.2 0 .4 0l-.2.1c.1 0 .7.1.7-.1v.1s.3 0 .3-.2v.2s.2 0 .3-.2V.2h.5c.2-.2.3 0 .4-.1h.2c.1 0 .2 0 .3-.2.2.1.5.2 1.1.1.3 0 .5.1.5.3h-.5s-.1.1 0 .2 0 0 .1 0c0 0-.1.1 0 .2l.3-.1zm-4-1.7v.1l.1.2.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7-1c.1-.1.2-.1.2 0l-.1.2-.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.4-1.2c.3 0 .4.2.4.4l-.2.4-.2.1-.2-.1c0-.3-.2-.2-.2-.4s0-.4.4-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.6-.4h-.2c.1 0 .1.2.4.2h-.2c.1 0 .2.2.5.2.1 0 0 0 0 0 0 .1.2 0 .3.2 0-.1-.2-.3 0-.5-.4 0-.5-.2-.6-.3-.2-.1-.2-.3-.3-.5 0 0-.1-.2-.2-.1v.2h-.1c.1 0 0 .2.2.3-.1-.1-.2-.2-.3-.1h.1l.4.4zm2.6 1h.5l.2-.1V.3c-.1 0-.2-.1-.1-.2-.3-.4-.9-.2-.9 0l.4.2h.1-.7l.1.1-.2.1c0 .2.2 0 .2 0v.1s0 .1.1 0a.3.3 0 0 1 .2 0z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "none",
    d: "m15.4 0-.2-.1M14-.1v.3m-.8-1.1h.1m.3 0h-.1m0 0-.1.3c-.1 0 0 0 0-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0016",
    stroke: "none",
    d: "M13.4-.4h.1v-.2h-.3v.1l.2.1z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "none",
    d: "M13.3-.6h-.2m.2 0h-.2m.2 0h-.2m.4 0h.2m-.2 0h.2m-.2 0h.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0051ba",
    stroke: "none",
    d: "M12.3-1.2c0-.1-.2 0-.2 0h.2zm0 .1L12-1h.2zm0 .3H12h.2zm0 .7c-.1 0-.2 0-.2.2 0-.1.1 0 .2 0v-.2zm0 .2-.2.2.2-.1V0zm0 .1s-.1.1 0 .2V.1zm2.5.3c-.1 0-.2 0-.2.2l.2-.1V.5zm.1 0c-.1 0-.2.2-.1.3l.1-.1V.6zm0-.2c-.2 0-.3 0-.3.2l.2-.1zm1.6.2s-.2.1-.1.2l.1-.1V.5zm0-.1-.2.1h.2V.2zm0 .2s-.1.2 0 .2h.1V.5zm-3-1V0c-.2 0-.2 0-.2-.2v-.2h.1z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#f9dd16",
    stroke: "none",
    strokeWidth: ".1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.6 2.7h.2s.1 0 0-.1h.2l-.1-.2h.1l-.1-.2a.2.2 0 0 1 0-.2h-.5l-.5-.1c.3.1.6-.1.6-.3 0-.2-.3-.4-.7-.2l-1.1-.1.6-.2h.8l-.7-.1c-.3-.1-.9 0-.9.3s.7.3 1.3.2h.5l-.5.2a1.8 1.8 0 0 0-.8 0l-.7.1c-.1 0-.4 0-.6-.2l-.4.3.1.4c.1.1 0 0-.2 0h-.5c0-.2-.2-.3-.3-.2v.1h.2a.2.2 0 0 0-.2 0v.2h.2-.1c.2 0 .2.2.3.1a.2.2 0 0 0-.1 0s.2.2.3.1l-.1.2c0-.1.6 0 .6-.2v.2s.2 0 .3-.2h.2v-.2h.2l.3-.1h.5c.1 0 .2 0 .3-.2.2.1.4.2 1 .1.2 0 .3 0 .3.2v.1h-.4v.2c0 .1.1 0 .2 0-.1 0-.2 0-.1.1h.1l.2-.1zm-3.4-1.5H13l.1.3.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 1.2h.2l-.1.3-.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 1.1c.3 0 .3.2.3.4s-.1 0-.2.3l-.2.1h-.1c0-.3-.2-.3-.2-.4s0-.4.4-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.7 1.8h-.1s0 .2.3.2h-.2l.4.2c.2 0 0 0 0 0l.4.2c0-.2-.2-.3-.1-.5-.3 0-.4-.2-.5-.3-.2 0-.2-.2-.2-.4l-.2-.1s-.1 0 0 0v.2h-.1l.1.2h-.2c.2 0 .3.3.4.3zm2.4.9H15h.8v-.2c-.1 0-.2-.1-.1-.3-.3-.3-.8-.1-.8 0l.4.2s.2 0 0 .1h-.2c-.2 0-.3-.1-.4 0v.2h.1s0 .1.1 0a.3.3 0 0 1 .2 0z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "none",
    d: "M15.3 2.1a.4.4 0 0 0-.3 0m-1 0v.3m-.7-1h.1-.1m.4 0h-.2.1m-.1 0v.3s-.1-.1 0-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0016",
    stroke: "none",
    d: "M13.5 1.9v-.1s.1-.1 0-.2c.1.1 0 .1 0 0 0 .1-.2.1-.2 0v.2h.2z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "none",
    d: "m13.4 1.7-.2-.1m.2 0h-.2m.2 0-.2.1m.3 0 .2-.1m-.2 0h.2m-.2 0 .2.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0051ba",
    stroke: "none",
    d: "m12.5 1-.2.1h.2zm0 .2-.3.1h.2zm-.1.3c0-.1-.2 0-.2 0h.2zm0 .6-.2.1h.3zm0 .2s-.2 0 0 .2v-.2zm.2 0-.2.3.2-.1v-.1zm2 .3s-.1 0 0 .2l.1-.1v-.1zm.2.1s-.2.1-.1.2l.1-.1zm0-.3c-.1 0-.3.1-.2.2h.1v-.1zm1.4.3s-.1 0 0 .1v-.2zm0-.2-.1.1h.2v-.1zm.1.3s-.1 0 0 .1v-.1zm-2.8-1v.4V2c0-.1 0-.2-.1-.1v-.1z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#f9dd16",
    strokeWidth: ".1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M130.7 32.2c-.4 0-.4.5-.5.5.8 0 1.2-.3 1.4-.7v.6c.6-.2.8-.7.6-1l.7.2c-.4-.3-.1-1-.8-1.4.2 0 .6.2.8.5-.1-.7-.2-1.1-.8-1.5h.5a.9.9 0 0 1-.4-.8c0-.4-.2-.4-.6-.3l-1.8.1c-1 0-2 0-2.8-.6 1.3.6 3-.6 3-1.5 0-1-1.4-2-4-1.4-2.6.6-5.8.4-5.8-.5s2.3-1 3.5-.8c1.2.2 2 .3 4.2-.5-.5.2-2.3.3-3.7-.1s-4.8-.4-4.8 1.4c0 1.9 3.6 1.7 6.8 1.2 1.8-.2 2.8 0 2.8.5 0 .6-1.7.8-3 .7a10 10 0 0 0-4.1.3c-1.3.4-2.2 0-3.6.3-.7 0-2.4 0-3.2-1.4-.5.4-2 1.1-2.3 1.9-.3.6 0 1.3.4 2 .6.8-.3.7-1 .7-.8 0-2 0-2.6-.8-.6-.6-1.3-1.1-1.9-.7-.3.3 0 .6.2.5l.8.2a1 1 0 0 0-1 .1c-.3.2 0 .6.3.5.2-.1.7-.2 1 0-.3 0-.7 0-.8.2s0 .4.3.4c.6 0 .7.4 1.3.3a.9.9 0 0 0-.7.4c.6-.3 1.1.4 1.8.2-.2.1-.7.4-.7.6.4-.5 3.2.4 3.2-.7l-.1.8c.3-.2 1.4-.3 1.8-1 0 .2 0 .5-.2.6.3 0 .8-.2 1.3-.9.2-.3.2-.5.2-.7.5 0 .8-.1 1.2-.4.4-.3.8.3 1.5-.2.6-.4 1.2 0 1.6-.2.3-.2.8 0 1.2-.2s1 .1 1.6-.4c1 .4 2.3 1 5.2.5 1.6-.3 2.2.3 2.2 1 0 .6-.4.6-.6.6-1 .1-1.3-.3-1.7-.2-.2.1-.4.5 0 .7-.3.1-.3.4-.1.5s.5 0 .8-.1c-.4.1-.7.4-.5.7.1.2.4.3.7 0 .3-.4.8-.7 1.2-.7zm-18.6-8c-.8-.3-1-.3-.9.4 0 .3.3.7.5.9 0-.3.1-1 .4-1.2z",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.8 24.3c.8-.4 1.1-.4.9.3 0 .3-.3.7-.5.9 0-.3 0-1-.4-1.2z",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M113.5 23.8c1.6 0 1.8.8 1.7 1.7 0 1-.5.6-.8 2-.1.4-.5.5-1 .5-.3 0-.7 0-.9-.6-.3-1.3-.8-1-.8-2 0-.8.2-1.6 1.8-1.6z",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.4 27.5c-.4-.2-.7 0-.9 0 .6.1.6.8 1.8 1-.3 0-.4.2-.7 0 .5.4 1 .9 2.2.9.7 0 .2.3-.2.1.4.5 1.3.1 1.9 1 0-.7-1-1.7-.5-2.4-1.7-.1-1.8-1-2.7-1.7-.8-.6-.9-1.2-1.2-2.3-.1-.5-.7-.8-1-.7-.3 0-.5.3-.2.5.2.2.6.2.6.7-.3-.4-.8-.5-1-.3-.1.2 0 .5.2.5.5 0 .2.6.7 1-.5-.5-.9-.6-1.2-.3-.1.2 0 .5.4.5.5 0 1 1.2 1.8 1.5zm13 4.6c-.2 0-.1.5-.5.5.8 0 1.3-.2 1.6-.5l-.2.5c.4-.3 1.5-.4 2-.3s.6-.1.8-.4c.2-.4 0-.6-.3-.8-.3-.3-.4-.7-.3-1.3-1.4-2-4-1-4-.2.9 1.1 1 1 1.8 1.1.7.2 1.2.2.7.6-.2.2-1 0-1.5.1-1.3 0-2-.9-2.3-.4-.3.4 0 .6.6.6-.4 0-1 0-.9.4.2.7.8-.1 1.1.1-.2 0-.6.1-.6.3 0 .2.5.5 1 0a1.6 1.6 0 0 1 1-.3z",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    strokeWidth: ".1",
    d: "M123.5 29.2c-.4-.2-.9-.3-1.4-.2m-5.6 0c-.4.8-.2 1.2-.1 1.6m-4-5.6c.2.2.4-.2.8.2-.1-.1-.3.3-.6 0m2-.1c-.3 0-.5-.3-.9.1.1-.1.3.3.6 0m-.6 0v.3c.1.7.3 1-.3 1-.5 0-.3-.3-.2-1v-.3",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0016",
    strokeWidth: ".1",
    d: "M113.5 27.7c.4 0 .6 0 .6-.6 0-.2.3-.3.1-.7.2.4-.7.4-.7.2 0 .2-1 .2-.8-.2-.1.4.2.5.1.7 0 .6.2.6.7.6z",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".1",
    d: "m113 26.5-1-.3m1 .3h-1m1 .1-.9.3m1.7-.4 1-.3m-1 .3h1.2m-1.2.1 1 .3",
    transform: "matrix(.14 0 0 .15 -1.7 -.4)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0051ba",
    stroke: "none",
    d: "M13 3.2h.1zm0 .1h-.2.2zm0 .2h-.2.1zm0 .6c0-.1-.1 0-.1 0h.1zm0 0s-.1.2 0 .2v-.1zm0 .2zm1.7.1s-.2.1-.1.2v-.2zm0 .1v.2-.1zm0-.2-.1.1h.1zm1.1.2v.1-.1zm0-.1s-.1 0 0 0zm0 .2v.1h.1v-.1zm-2-.8v.3-.3z"
  }))));
});
JEY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
JEY.displayName = 'JEY';
export default JEY;