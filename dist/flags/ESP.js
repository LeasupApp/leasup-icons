function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var ESP = forwardRef(function (_ref, ref) {
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
    fill: "#AA151B",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F1BF00",
    d: "M0 120h640v240H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "m127.3 215.3.3-.4h.7l-.4.6-.6-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m127.3 215.3.3-.4h.7l-.4.6-.6-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    d: "M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "m142 215.4-.3-.5h-.7l.3.6.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m142 215.4-.3-.5h-.7l.3.6.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M126.8 305.6h15.6V229h-15.6v76.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 0 1-.6.3l-1-2.3m7.3-2.5-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 0 1-1 0 54.8 54.8 0 0 1-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 0 1 3.5 6h1m8.8-4.7.4-.9a3.4 3.4 0 0 0-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 0 1-.4 1.1 4 4 0 0 0 1.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm-.2-1.4a.4.4 0 0 1 .4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 0 1-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "m287.8 211.2.2-1a2.7 2.7 0 0 0-2.7-2.8c-.5 0-1 .1-1.3.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m283 209.2.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 0 1 .5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 0 1 .5-.4c.2 0 .4.1.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M267.8 211.2a2.8 2.8 0 0 1-.2-1 2.7 2.7 0 0 1 2.7-2.8c.5 0 1 .1 1.4.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.7 209.2a1.7 1.7 0 0 1-.3-.8c0-1 1.2-2 2.6-2a3 3 0 0 1 1.5.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 0 1-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    d: "M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "m270.5 215.3.3-.4h.7l-.4.6-.6-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m270.5 215.3.3-.4h.7l-.4.6-.6-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    d: "M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "m285.1 215.4-.2-.5h-.7l.3.6.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m285.1 215.4-.2-.5h-.7l.3.6.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 0 1-.8-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 0 1-.8-.8c0-.4.2-.7.6-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M270.1 305.6h15.6V229h-15.6v76.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 0 1-.5.1 52.8 52.8 0 0 1-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 0 1 4 5.7h.5l.5-.1m6-6.6h-1a8 8 0 0 1-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1 2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 0 1 2 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7-.2 2 .8.5.9.5.5-7a3.4 3.4 0 0 1-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5 2-1.4-.2 2.3-1.8-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0 0 14.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 0 1 7.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 0 1 7.5-4.7 26 26 0 0 1 10.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 0 0 8-2c3.7-1.5 9-2.5 15.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 0 1-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0 1 29.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 0 1 0 2.4c-7.5 2.2-18 3.6-29.8 3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".9",
    d: "M179.8 212.8v-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 207.4a108 108 0 0 0-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0 1 33 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 0 1-1.3-.6 1 1 0 0 1 .7-1.3 121 121 0 0 1 33.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 205.6H203a1 1 0 0 1 0-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m190.3 206.5-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 0 1 1-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m174 208.5 1.2-1.6 3.3.4-2.6 2-1.8-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m222 206.5 2.3.2c.5.1 1-.3 1.1-.8a1 1 0 0 0-.9-1.1l-2.2-.3-2.4-.3a1 1 0 0 0-1.1.9c-.1.5.3 1 .9 1l2.3.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m238.2 208.5-1.1-1.6-3.3.4 2.6 2 1.8-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 0 1-.8-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m206.2 191.8 1.2.2a4.6 4.6 0 0 0 4.5 6 4.7 4.7 0 0 0 4.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 0 0 4.7-5l1.5-1.5.7 2a4 4 0 0 0-.4 1.9 4.4 4.4 0 0 0 4.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 0 1-3.3 1 6.5 6.5 0 0 1-6.1-3.7 7 7 0 0 1-10.4-.3 7 7 0 0 1-4.6 1.8 6.9 6.9 0 0 1-5.7-3 6.9 6.9 0 0 1-5.7 3 7 7 0 0 1-4.7-1.8 7 7 0 0 1-10.4.3 6.5 6.5 0 0 1-6 3.7 6.7 6.7 0 0 1-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 0 0 3.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 0 0-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 0 0 0 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 0 0 4.5 3.1 4.6 4.6 0 0 0 4.5-6l1.2-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.7 184a5.1 5.1 0 0 1 2.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 0 1-.7 1.6 1.9 1.9 0 0 0-1.5-.4 1.8 1.8 0 0 0-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 0 1 1-3.4m.4 9.8a1.8 1.8 0 0 1-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 0 0-3 2 5.3 5.3 0 0 0 3.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 0 0 .2-1.1 1.7 1.7 0 0 0-.6-1l1.4-1.3a10 10 0 0 1 2-.9l1.1-.4v.6a5.7 5.7 0 0 1-.2.8 5 5 0 0 1 3.4 1 5 5 0 0 1-2.9 2 6.4 6.4 0 0 0 .7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 0 1-1.8-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 180.8a5.7 5.7 0 0 1 1.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 0 1-1 1.7 2.1 2.1 0 0 0-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.6 191.8a2 2 0 0 1-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 0 0-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 0 0 .1-2.6s.9-.7 1.8-1a8 8 0 0 1 2.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 0 1-3.6 1.6 6.9 6.9 0 0 0 .5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 0 0-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 0 1 1.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 0 0-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 0 0-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 0 1-.4.7 5 5 0 0 1 2.9 2 5.3 5.3 0 0 1-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 0 1-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 0 1-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 0 0-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 0 0 1.8-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 0 1-2 2 2 2 0 0 1-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m246.3 198 .7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 0 0-2.9-2.8 3 3 0 0 0-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 0 0-2.4-1.6l-1.3-.7-.1.5a5 5 0 0 0 0 .8 7.9 7.9 0 0 0-3.7.5 4.7 4.7 0 0 0 2.5 2.2l-.8.7a4 4 0 0 0-.4.5l1.3.2 2.5.2a14.5 14.5 0 0 0 1.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 0 1 2.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 0 1 2.4-1.6l1.3-.7v1.3a7.9 7.9 0 0 1 3.7.5 4.7 4.7 0 0 1-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 0 1-1.7-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 0 1-2.1-2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 0 1-4.2-4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ccc",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M158 301.6a24.4 24.4 0 0 0 5.5 15v-47.5h-5.4v32.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c7b500",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M179.4 324.7a26.6 26.6 0 0 0 5.6 0v-55.9h-5.6v56z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M190 323.5a19 19 0 0 0 5.8-2.5v-52.2H190l-.1 54.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m215.1 294.1.1.5c0 .6-.5 1-1.1 1a1 1 0 0 1-1.1-1v-.5h-1.5a2.5 2.5 0 0 0 1.8 2.9v3.9h1.6V297a2.6 2.6 0 0 0 1.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 0 1-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 0 1-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 0 0 1.8-2.4 2 2 0 0 0 0-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 0 1 .1-.5h-5.9m-6.7 22.1a15.6 15.6 0 0 0 3.7-1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.3-4.8h1.7a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2.2-4.5-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3 1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 0 1-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7m2.2-9.4 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 0 0 .3-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3.1 2.6zm6-4.8a1.2 1.2 0 0 0-1.5 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2.2-4.5 1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.6 18.6 0 0 0 4-2l-.4-1.7m-2.2-9.4-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7.5 1.6h4.5l.5-1.6h-5.5m21.1 0-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 0 0-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 0 1 .2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 0 1 1-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.7 2.5 2.5 2.5 0 0 0 1.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 0 1-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 0 1 2.4-1.7 2.6 2.6 0 0 1 2.7 2.5 2.5 2.5 0 0 1-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4a2.6 2.6 0 0 1 2.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm-17.8 4-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m30.6 0-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m-25.5.8 1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 0 1 1 1c0 .6-.4 1-1 1a1.1 1.1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 0 1-1.1-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.6m0-1.6.5-1.6h4.6l.5 1.6h-5.6m-5.9 5-1.7.5v4.3l1.7.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M232.7 316.3a15.6 15.6 0 0 0 3.7-1.1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 0 1-.2-.5h-4V294h4a2.6 2.6 0 0 1 .2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 0 1 .2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.6 2.5 2.5 2.5 0 0 0 1.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.2-4.8h1.6a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-8.4-13.1V297a2.5 2.5 0 0 1-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 0 1-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2-4.5-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3 1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "m221.9 305.1 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 0 1-1.1-1zm25.7 19.4.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 0 0 .2-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3 2.6zm8.4-13.1V297a2.5 2.5 0 0 0 1.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 0 0-1.6 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2-4.5 1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 0 1-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 0 1 2.5-1.7 2.6 2.6 0 0 1 2.6 2.5 2.5 2.5 0 0 1-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm8.8 33.8a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.7 18.7 0 0 0 4-2l-.4-1.7m-27.4-31.4-1.7.5v4.3l1.7.5v-5.2m1.7 0 1.6.4v4.3l-1.6.5V283m30.5 0-1.7.5v4.3l1.7.5V283"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "m247.1 283.1 1.7.5v4.3l-1.7.5V283m-8.6 22-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20 1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m0 1.5.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 0 1-1.2-1zm-4.4-.7-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.5m0-1.6.4-1.6h4.6l.5 1.6h-5.5m-6 5-1.6.5v4.3l1.6.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    d: "M227.7 294.7a2.6 2.6 0 0 1 2.6-2.5 2.6 2.6 0 0 1 2.6 2.5 2.6 2.6 0 0 1-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ed72aa",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 0 1-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 0 1 .2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 0 1-1-1l-.4-1.4a4.2 4.2 0 0 1 0-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 0 1-.7.8h-.9a2.5 2.5 0 0 0-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 0 0-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 0 1-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 0 0-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 0 0 2-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 0 0-1.8-.6 9 9 0 0 1-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 0 1 2.2 2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m237.3 231.3-.4-.7a8 8 0 0 1-.3-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m228.2 230.5.3-.5.3.5h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m228.2 230.5.3-.5.3.5h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m229 230.5.3-.5.4.5h-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m229 230.5.3-.5.4.5h-.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m228.6 227.3.8.3-.7.4-.1-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m228.6 227.3.8.3-.7.4-.1-.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m229.5 227.6.7.2-.5.4-.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m229.5 227.6.7.2-.5.4-.2-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 0 0 1.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 0 0-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5 1.3-.8a4 4 0 0 0 1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#db4446",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffd691",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.7 323.8a4.8 4.8 0 0 1 0-7.1 4.8 4.8 0 0 1 1.5 3.5 4.9 4.9 0 0 1-1.5 3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 0 1-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "m179.3 258.2-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0 2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3 1-2a5.3 5.3 0 0 0-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12 .4-4.4h-4.2l.2 4.4h3.6zm3.3 0-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0 .2-4.4h-4.2l.5 4.4h3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0039f0",
    d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1519",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005bbf",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M237.3 225.5v-.2h-.3l.1.2h.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M238.8 227v-.3h-.3v.2h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M238.8 227v-.3h-.3v.2h.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m234.2 221.4-.4.4-.6-.6v-.2h1v.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m234.2 221.4-.4.4-.6-.6v-.2h1v.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c8b100",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M129.2 216.6v-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M272.6 216.6v-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
  }));
});
ESP.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ESP.displayName = 'ESP';
export default ESP;