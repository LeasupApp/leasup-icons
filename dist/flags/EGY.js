function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var EGY = forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M0 320h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 160h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h640v160H0z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff",
    stroke: "#c09300",
    transform: "matrix(.8 0 0 .8 -40 0)"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-linejoin": "round",
    "stroke-width": "1.3",
    d: "m450.8 302.4 68.5 63.6-4.9-115.5c-.7-17.5-15.9-13.5-27-7.2-11.1 7.2-24 7.2-37.4 2.5-13.5 4.7-26.3 4.7-37.4-2.5-11-6.3-26.3-10.3-27 7.2L380.7 366l70.1-63.6z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "a",
    fill: "#c09300",
    stroke: "none",
    d: "m393.5 246.5-4.8 112.3-8 7.2 4.9-115.5a24 24 0 0 1 7.9-4zm9.6 8-4 94-8 8.2 4.8-108.5c1.6 1.6 6.3 5.5 7.2 6.3zm8.7 7.2-3.1 78.4-6.5 6.3 4-89.4c1.6 1.5 4.8 3.8 5.6 4.7zm9.5 4-3.1 66.8-6.3 5.1 3.1-74.3c1.6.7 4.7 2.4 6.3 2.4zm8.8 0-2.3 55.7-6.5 6.3 2.5-61.3c1.5 0 5.6 0 6.3-.7z"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#a",
    width: "100%",
    height: "100%",
    transform: "matrix(-1 0 0 1 900 0)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c09300",
    "stroke-width": "1.1",
    d: "m453.2 315 9.6 43.8-3.2 3.2-3.3-2.5-5.4-39 2.3 39-3.2 4-3.1-4 2.3-39-5.5 39-3.3 2.5-3.2-3.2 9.6-43.7h6.4z"
  }), /*#__PURE__*/React.createElement("g", {
    id: "b",
    fill: "none",
    "stroke-linejoin": "round",
    "stroke-width": "1.3"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    "stroke-width": "1.2",
    d: "m428.5 295.8-19.1 67.7 26.3 4 11.1-50.9-18.3-20.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m422.2 319 2.3 5.5 12.4-11.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m430.8 305 2.6 24.3 7.9-10.4m-3.2 4 4.3 15m1.7-5.5-8.7 13.2m2.7 13.2-2.8-13.2-2.4-13.4-5.9 7.9-2.5-9.1-8.2 8.4 4.1 15.2 5.8-9.4 3.1 9.6 6-9.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m415 362 5.3-7.5 3.4 11.5 4.8-8 3.1 9.6"
  })), /*#__PURE__*/React.createElement("use", {
    href: "#b",
    width: "100%",
    height: "100%",
    transform: "matrix(-1 0 0 1 900 0)"
  }), /*#__PURE__*/React.createElement("g", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.3"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.4",
    d: "M450 393.8c20 0 39-1.6 50.2-4.7 4.7-.9 4.7-3.3 4.7-6.5 4.8-1.6 2.4-7.2 5.7-7.2-3.4 1-4-5.5-8-4.7 0-5.6-5.7-6.3-10.4-4.7-9.5 3.1-26.3 3.9-42.2 3.9-16-.8-32.6-.8-42.2-4-4.7-1.5-10.3-.8-10.3 4.8-4-.8-4.7 5.6-8 4.7 3.3 0 .8 5.7 5.6 7.2 0 3.2 0 5.6 4.8 6.5 11 3.1 30.2 4.7 50.1 4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M422.9 363.5c6.4.9 13.6 1.6 19.2.9 3.2 0 5.5 5.5-.9 6.3-5.5.7-14.3 0-19-.8a231 231 0 0 1-18.4-4c-5.6-2.4-1.6-7 1.6-6.4a105.3 105.3 0 0 0 17.5 4zm54.2 0c-6.4.9-13.6 1.6-19 .9-3.4 0-5.7 5.5.7 6.3 5.6.7 14.3 0 19-.8 4-.8 12.8-2.3 18.4-4 5.6-2.4 1.6-7-1.6-6.4a105.2 105.2 0 0 1-17.5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M403 360.4c-4.8-.9-7 4.7-5.5 7.9.7-1.6 4-1.6 4.7-3.2.9-2.4-.7-2.4.9-4.7zm19.2 14.7c0-3.2 3.1-2.8 3.1-6 0-1.5-.8-4-2.4-4a3.4 3.4 0 0 0-3.2 3.2c-.7 3.1 2.5 3.6 2.5 6.8zm22.7-9.1c4.7 0 4.2 6.3 2 9.5 0-2.3-4-3.2-4-4.8 0-2.4 3.6-2.4 2-4.7zm52-5.6c4.9-.9 7.2 4.7 5.6 7.9-.7-1.6-4-1.6-4.7-3.2-.9-2.4.7-2.4-.9-4.7zM478 375c0-3.2-3.2-2.8-3.2-6 0-1.5.8-4 2.4-4a3.4 3.4 0 0 1 3.2 3.2c.7 3.1-2.5 3.6-2.5 6.8zm-23-9c-4.7 0-4.2 6.3-2 9.5 0-2.3 4-3.2 4-4.8 0-2.4-3.6-2.4-2-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": ".9",
    d: "M404.7 362c1.6 0 4 .7 4.7 1.6l-4.7-1.6zm7.9 2.4c.8 0 4 .7 5.5 1.6l-5.5-1.6zm28.6 3.2c-1.5 0-4.7 0-5.5.7l5.5-.8zm-8.7 0c-.9-.9-4-.9-5.6 0h5.6zm62.8-5.6a8 8 0 0 0-4.7 1.6l4.7-1.6zm-7.8 2.4c-1 0-4 .7-5.6 1.6l5.6-1.6zm-28.7 3.2c1.5 0 4.7 0 5.6.7l-5.6-.8zm8.7 0c.9-.9 4-.9 5.6 0h-5.6z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#c09300",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M403.3 374.6c-.5-.1-.8-.6-.6-1 .1-.7.6-1 1-.8.4 0 .9.6.9.8l-.4.7-.2.1c0 .2-.4.2-.7.2zm55 3.9c-.2 0-.6-.5-.6-.7 0-.4.6-1 1-1l.8.4c.3.3.3.9-.1 1.2-.2.2-.8.2-1.1 0zm.3 2.5c-.4-.2-.5-.4-.6-.8 0-.5 0-.6.5-.9l.4-.2.4.2c.4.2.7.4.7.8 0 .3-.3.6-.7.8-.3.2-.4.2-.7 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M407.8 370c-.4 0-.9.4-1.2.6-.6.1-1.4.5-2 0-.6-.1-1.4 0-1.5.8.1.7 1 1 1.6.6.4-.5 1.5-.9 1.7 0-.5.8-.4 1.7-.8 2.4 0 .5-.3.9-.5 1.3-.5 0-1 0-1.4.3a2 2 0 0 0-1.6.8c-.4.6-.8 1.2-.9 2 .1.6 1 .8 1.6.9l2 .6 3.2.9c1.6.5 3.2.7 4.8 1.1l.5.1c.7.2 1-.5 1-1l1-3.6c.2-.5.5-1.5-.4-1.3-.5.3-1 .8-1.6.8-.9 0-.4 1 0 1.3 0 .6-.2 1.3-.5 1.8-.6.3-1.2 0-1.8-.2-.5 0-1.7-.3-1.2-1l.5-1.8c.3-.6.3-1.3.5-2-.4-.7-1 .3-1.5.4-.4.2-1.6.3-1 1 .6.4.2 1.1 0 1.7 0 .7-.8 1-1.4.7-.6 0-1.5-.5-1-1.1l.5-1.8.7-2c0-.7.3-1.2.6-1.8 0-.7.5-1.3.5-2 0-.3-.2-.4-.4-.4zm-3.7 7.3a.3.3 0 0 1 .3 0c.2.2.2.4 0 .6l-.3.2c-.5 0-.6-.1-.6-.3 0-.1 0-.2.3-.3a1.4 1.4 0 0 1 .4-.2zm-1 5c-.5-.4-.4-.7.3-1.3.4-.2.5-.2.9.1.6.5.6.8 0 1.3-.2.2-.3.2-.5.2-.3 0-.4 0-.7-.2zm3 1a.9.9 0 0 1-.6-1.1c.2-.4.3-.5.9-.5.7 0 .8.1.9.7 0 .4 0 .5-.3.7a1 1 0 0 1-.8.2zm89.2 0c-.2-.1-.3-.2-.3-.5 0-.4.2-.7.8-.9.6-.3 1-.3 1.2.2.3.6.3.8-.1 1.2-.2.3-.3.3-.8.3s-.6 0-.8-.2zm-85 1.2c-.4 0-.6-.4-.6-.8 0-.3 0-.4.2-.6l.6-.2.6.1c.5.4.6.8.3 1.2-.3.4-.6.4-1.2.3zm21.8 1-.2-.3c0-.6 0-1.1.2-1.7.1-.5 0-1 .2-1.5l.4-2.8c0-.5 0-1 .2-1.4.1-.8 0-1.5.2-2.2 0-.3.3-1 .6-.6.4.6.9 1 1.4 1.5.4.3 0 .7-.3.8-.4.1-.5.6-.5 1l-.2 1.2c0 .7 0 1.3-.2 2l-.1 1.8-.2 1.2c0 .4 0 .9-.4 1.1-.3.2-.8.2-1-.1zm29.7-9.8-1.3 1.2c-.6.5.5.7.6 1.1.2.6.2 1.2.2 1.8.2.6.3 1.1.2 1.7 0 .7-.8.5-1.2.9-.5.2-.7.7-1 1a4.2 4.2 0 0 0-.4 1.6c0 .5-.3 1 0 1.4l.1.2h.5l1.5-.1c1.2-.2 2.5-.2 3.7-.3l2.2-.2c.6.1.9-.5.9-1-.4-.7-.1-1.4-.4-2-.2-.8-.1-1.5-.2-2.2 0-.6-.7-.8-1-.4-.4.4-1 .5-1.2.9-.3.6.6.6.8 1l.1 1.5c.1.6-.5.6-1 .7-.5.2-1.2.3-1.5-.3-.2-.5-.2-1-.2-1.5 0-1-.3-1.8-.3-2.7 0-1-.3-2.1-.3-3.2 0-.5-.1-1.2-.8-1.1zm-.6 8.2h.3v.8l-.3.1a3.3 3.3 0 0 1-.4.1 2.5 2.5 0 0 1-.2 0c-.2-.2-.2-.5.1-.8l.5-.2zm-30-9.2c-.3 0-.8.7-1.2.6-.9.1-.8 1-.1 1.3v.8c.1.8-.4 1.5-.3 2.3 0 .8-.3 1.7-.3 2.6-.3.9-.3 1.8-.4 2.7-.1.8-.7.5-1.2.3v-1c.1-.9-.5-1.1-1.2-1.2-.7 0-1-.5-.8-1.1.3-.4 1-.3 1.5-.3 1 .2.9-1.1.4-1.6-.4-.6-1.2-1-1.4-1.6 0-.8-.5-1.7-1.2-2.1-1.1-.1-2 .8-2.3 1.8-.5 0-1 .2-1.4.4-.7.2-1.7 1.4-.7 1.9.5.1 2.2.5 1.4 1.2-.4.8-1.2.8-1.9.6-.7 0-1.5-.4-1.5-1.2-.1-.8-.1-1.6-.4-2.3-.2-.8-1.1-.6-1.2.2-.7.5-.6 1.4-.1 2 .3.7 0 1.6-.3 2.2-.2 1-1.2 1-1.9 1.2-.3.2-1.6 0-1.1.7a4 4 0 0 0 2.4.3c.8 0 1.5-.7 2-1.4.5-.5 1.4-.2 2.2-.2.7 0 1.5.5 2.3.1.2-.5 1.2-1.5 1.5-.5 0 .9.7 1.3 1.5 1.2.9 0 .5.6.5 1.2 0 .9.7 1.4 1.5 1.8h.8c.7-.3 1.5-.6 1.8-1.4.3-.7.3-1.5.5-2.2.2-1.1.4-2.3.4-3.4.3-1 .2-2.1.4-3.2l.3-2.3c0-.5-.2-.5-.5-.4zm-6.7 4.1c.1 0 .2.2.2.5 0 .4.2.7.5.8v.3l-.8.2c-.5 0-.9-.2-1.2-.5l-.2-.2.3-.2.5-.5c.3-.3.5-.4.7-.4zm66-7.9a8.4 8.4 0 0 0-1.7.3c-1 0-1.5 1-.5 1.6.6 1.5 1.5-.4 2.5-.2 1.4.2 1.5 1.8 1.8 3 0 1.1.4 2.2.7 3.3 1 1.1-.7 1.8-1.4 1-.6-.7-2-1.5-2.7-.6-.9.4-1 1.6-1.7 2-1.2.3-1.3-1.2-2-1.8-.6-.9-1.7-1-2.6-1.2-.4-.9-.2-2.4-1-3-.8.3-2.2 1.7-1 2.4 1 1-.5 1.4-1 2-.8.9-1 2-1 3-1.3.7-1.5-.8-1.7-1.7 0-1.1-1-.8-1.7-.4-1 .4-1.4 1.3-2 2v2c.2.9 1.2.5 1.8.4 1-.4 1.4.7.6 1.3-.6.6-2.2.3-2 1.4h1.6c1-.3 2.2-1.1 2.3-2.3.2-1 1.7-.9 2.5-1.1 1-.3 2.3-.4 2.6 1 .7.7 2.2 1.5 3 .5a2.4 2.4 0 0 0 1.1-2.3c-.1-.8 1.3-.8 1.7-.3.5.8 2.1.6 2.9 0 .8-.5 1-1.6 2.2-1.6l5.4-1.5c1.4-.3-.2-1.2-.6-1.8-1-.5-2 1.7-3.2.6-1-.7-.9-2-1.2-3.1-.3-1.4-.2-3-1.2-4-.6-.7-1.6-.9-2.5-.9zm-6.8 9.5c.1 0 .3 0 .5.2.4.2.7.6.7 1 0 .2 0 .2-.3.3l-.5.2c-.2 0-.7-.3-.7-.5v-.4c-.2-.4-.2-.4 0-.6l.3-.2zm6.5.4c.4 0 .6 0 .8.3.1.4 0 .6-.4.8l-.5.2-.4-.3c-.2-.1-.3-.2-.3-.4 0-.3.4-.6.8-.7zm-9 0c.2 0 .3 0 .4.2.2.2.3.3.3.6v.6c0 .3 0 .2-.6.2s-.7 0-.7-.6c0-.4 0-.5.3-.7.1-.2.3-.2.4-.2zm-5.4 1.5a.6.6 0 0 1 .4.4c0 .3 0 .5-.2.6-.3.1-.8.2-1 0a.6.6 0 0 1 0-.1c-.2-.1-.2-.2 0-.3v-.1l.2-.3a.5.5 0 0 1 .6-.2zm9.2 1.2.5.1v.6h-1.2l-.1-.2c0-.2 0-.3.2-.4l.6-.1zm-17.1 4.8c-.1 0-.3-.1-.1-.2.1-.3.5-.4.8-.6a3.4 3.4 0 0 0 1.4-1c0-.4.4-.6.4-1l-.1-1.4a1.8 1.8 0 0 0-.8-1c-.3-.1-.7-.2-.8-.6 0-.3.3-.6.4-.9l.6-1.2c.3-.3.7 0 .8.2l.5 1c.3.3.5.6.6 1 .2.4.4.7.4 1l.2 1.3c0 .5 0 1.1-.2 1.6l-.6.8c-.3.3-.6.6-1 .7-.3.1-.5.4-.9.4H468l-.1-.1zm-6.9.4c-.2-.2-.3-.3-.3-.6s0-.3.3-.6c.4-.4.6-.4 1.4 0 .7.4 1 .4 1 .1.1-.2.5-.5 1-.5a.8.8 0 0 1 .5.2c.2.2.3.3.3.7 0 .5 0 .5-.3.8-.3.2-.3.2-.7.2a.9.9 0 0 1-.8-.6c0-.2 0-.3-.2-.1l-.2.1c-.2 0-.6.3-.8.5l-.5.1c-.4 0-.4 0-.7-.3zm-19.8-8.9c-.7 0-1.4.6-1.5 1.3.2.7.8 1.5.4 2.2.3 1-.8 1.4-1.5.9-.4-1-.6-2-1.3-3-.8-.2-1.1 1.1-1.7 1.6.3.7 1.1 1.4 1.2 2.3.2 1-.4 2-1.1 2.4-.7.7-1.7.5-2.5.6-1 .6.7.8 1.2.8 1 .1 2.1 0 3-.8.7-.3.6-1.7 1.5-1.8l4.8.3c.8.2 2.1-.1 2.7.5 0 1 1 1.8 1.9 2.2.5.2 1-.5 1.5-.6 1-.3.7-1.5 1.3-2h5c.2 0 .3-.5.6-.7l-.2-1.9c-.3-.8 0-1.8-.5-2.5-.9-.2-1.6.5-2.4.6-1 .4-1.7 1.3-1.8 2.3-.5.9-1.4-.2-1-1l-.1-1c-.5-.5-1.4-.3-2.1-.4l-3-.2c-1 0-1.9.1-2.7-.1-1 0-1-1-1-1.8a1 1 0 0 0-.7-.2zm2 3.7 1 .1h1.3c1 .2 2 .2 3 .2.2 0 .4.2.6.4v2c0 .3 0 .7-.2.8a.7.7 0 0 1-.2.2 1 1 0 0 1-.7-.5v-1.4a1.3 1.3 0 0 0-.7-.3l-2.6-.1-2-.1c-.3-.1-.7 0-.9-.4-.2-.2.1-.6.4-.7a2.3 2.3 0 0 1 1-.2zm11.3.3c.1 0 .2 0 .2.3l.2.5c0 .1 0 .2-.2.2-.5.2-1 .2-1.2 0 0-.1 0-.5.2-.6l.8-.4z"
  }))), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "1.1",
    d: "M450 327.2c32.6-25 29.8-61.8 29.8-61.8l-2.5.2c-6.9 0-23.2-4-27-8.9-4 4.5-20.8 9-27.6 9l-2.5-.3s-2.9 36.7 29.8 61.8z"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": ".9",
    d: "M477.2 268h-.8c-6.2 0-20.6-3.1-26.2-7.9-5.8 4.4-20.5 8-26.6 8a4.7 4.7 0 0 1-.8-.1 73.1 73.1 0 0 0 2.6 18.7 71 71 0 0 0 24.6 37.1 71.2 71.2 0 0 0 24.6-37.2 73.1 73.1 0 0 0 2.6-18.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c09300",
    stroke: "none",
    d: "M439.4 265a62.2 62.2 0 0 1-16.6 3l.1 4.1a72.8 72.8 0 0 0 2.5 14.5 71 71 0 0 0 14 26.8V265zm20.6 0v49.2a71.1 71.1 0 0 0 14.6-27.6 73 73 0 0 0 2.5-14.5l.1-4h-.8c-3.8 0-10.4-1.2-16.4-3.2z"
  }), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1.3"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-width": "1.2",
    d: "M462.3 253c.7.1-.9-3.5-.9-3.5 1.8 1.8 8.4 2.3 8.4 2.3-4-1.8-8-15.1-7.5-25.8.4-10.6-1.5-14.8-3-16.4-2-2-8.5-3.8-12.7-4-2.5-.1-2 1.8-2 1.8-4.5-1.1-9-1.6-11-.2-1.8 1.2-2.2 7.5-.8 6.4 3.3-2.7 6.2-.2 8.2 2.7 1.8 2.5 1.7 9.7-.9 18.2a60 60 0 0 1-10 17.7c4 0 9.6-3.5 9.6-3.5l-1.3 5.5c4.2-2 7.5-5.1 7.5-5.1l4 4.2c1.3-1.8 4-4.2 4-4.2s3.3 3.5 8.4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M446.1 227.6s-2.2 16.4-6.4 21m10-21.5s-1 16.7-3.8 22m6.9-21.3s0 18.2 1 21.3m3-20.4s.8 15.3 4.6 20.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c09300",
    "stroke-width": ".3",
    d: "M442 219.6a8 8 0 0 0-1-3.3c-2-3-4.9-5.4-8.2-2.7 0 0 1.1-3.5 3.6-3.6 1.8-.1 6.1 1.4 9.9 7.8 0 0-2.8-.6-3.5 0-1.2 1-.7 1.8-.7 1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c09300",
    "stroke-width": ".3",
    d: "M432.4 209.3c.3-1 .7-1.8 1.3-2.1 2-1.4 6.4-1 10.9.2 0 0-.4-1.9 2-1.8 4.2.2 10.6 2 12.6 4a7.9 7.9 0 0 1 1.5 2.4c-1-1.4-3.8-1.3-4.5-1.2-1 .1-1.7 0-3.1.4-.7.2-1.7.4-2.3.8-.4.4-.8 1.6-1.4 1.6-1 0-1-.2-1.3-.5-.3-.5-.5-1.1-.9-1-1 .1-2.8-.7-5-2.5-2.3-1.8-3.2-2.2-6-2-3 .2-3.8 1.9-3.8 1.9v-.2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "448.8",
    cy: "210.7",
    r: "1.2",
    stroke: "none"
  }))));
});
EGY.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EGY.displayName = 'EGY';
export default EGY;