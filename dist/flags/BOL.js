function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var BOL = forwardRef(function (_ref, ref) {
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
    fill: "#007934",
    d: "M0 0h640v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    d: "M0 0h640v320H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    d: "M0 0h640v160H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m368.6 210.7-98 97.9a91.8 91.8 0 0 0-1.3-1l98-97.8a6.3 6.3 0 0 1 1.3 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M374.7 204.5c-.4.7-1.4 2.5-1 3.8l-2-1.5c.5 1 .4 1.4-.1 1.8-.3.4-1.4.3-2.1.2.7.4 1.5.8 2.4 1h2c-.7.3-2.2.8-3.3 1-.5.1-1.6.2-2 0-.6.5-1.9-.4-1.3-1-.3-.3-.3-.8-.4-1.4 0-.7.1-1.9.7-3l.5 1.7c.2.5.7 1 1.1 1.4-.2-.5-.4-1.2.1-1.8.5-.5 1.3-.5 2-.2l-1.9-1.3c.8 0 3.3-1 4.1-1.5a62.3 62.3 0 0 0 4.9-3.8 57 57 0 0 0-3.7 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m387 222.8-125.7 70.9a85 85 0 0 0-.9-1.2l125.7-71a5.6 5.6 0 0 1 1 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M394.9 218.3c-.6.6-2.2 2-2.2 3.4l-1.4-2c.2 1-.1 1.5-.7 1.7-.4.4-1.4 0-2-.3a5.1 5.1 0 0 0 2 1.5l1.7.6c-.6.1-2.3.3-3.4.2-.5 0-1.5-.2-1.9-.6-.7.4-1.6-.8-1-1.2 0-.4 0-.8.2-1.4.2-.7.7-1.8 1.6-2.8a7.8 7.8 0 0 0 0 1.8c0 .5.3 1 .5 1.6 0-.5 0-1.3.7-1.7.7-.4 1.4-.2 2 .3l-1.4-1.7c.8.1 3.5-.2 4.4-.5 1-.2 4.1-1.6 6-2.5-1.7 1-4.6 3-5.1 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m376.3 217.5-113 85.2-1-1.1 112.9-85.2a6 6 0 0 1 1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M383.4 212.1c-.5.6-1.8 2.3-1.6 3.6L380 214c.3 1 .1 1.5-.4 1.7-.4.4-1.5.2-2.1 0 .6.5 1.3 1 2.2 1.2l1.9.3c-.7.3-2.3.6-3.4.6-.5 0-1.6 0-2-.3-.6.5-1.7-.6-1.1-1.1-.2-.3-.1-.8-.1-1.4a6 6 0 0 1 1.1-3 7.8 7.8 0 0 0 .2 1.8c.2.6.5 1 .9 1.6-.2-.5-.2-1.3.4-1.8.6-.4 1.3-.3 2 0l-1.6-1.5c.7 0 3.3-.6 4.2-1 1-.4 3.8-2 5.5-3.1-1.4 1.2-4 3.5-4.4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m271.4 210.7 98 97.9 1.3-1-98-97.8a6.3 6.3 0 0 0-1.3 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M265.3 204.5c.4.7 1.4 2.5 1 3.8l2-1.5c-.5 1-.4 1.4.1 1.8.3.4 1.4.3 2.1.2-.7.4-1.5.8-2.4 1h-2c.7.3 2.2.8 3.3 1 .5.1 1.6.2 2 0 .6.5 1.9-.4 1.3-1 .3-.3.3-.8.4-1.4 0-.7-.1-1.9-.7-3a8 8 0 0 1-.5 1.7c-.2.5-.7 1-1.1 1.4.2-.5.4-1.2-.1-1.8-.5-.5-1.3-.5-2-.2l1.9-1.3c-.8 0-3.3-1-4.1-1.5a62.3 62.3 0 0 1-4.9-3.8 57 57 0 0 1 3.7 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m253 222.8 125.7 70.9c.2-.3.6-1 .9-1.2l-125.7-71a5.6 5.6 0 0 0-1 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M245.1 218.3c.6.6 2.2 2 2.2 3.4l1.4-2c-.2 1 .1 1.5.7 1.7.4.4 1.4 0 2-.3a5.1 5.1 0 0 1-2 1.5l-1.8.6c.7.1 2.3.3 3.4.2.6 0 1.6-.2 2-.6.7.4 1.6-.8 1-1.2 0-.4 0-.8-.2-1.4a6.3 6.3 0 0 0-1.6-2.8v1.8c0 .5-.3 1-.5 1.6 0-.5 0-1.3-.7-1.7-.7-.4-1.4-.2-2 .3l1.4-1.7a17 17 0 0 1-4.4-.5 70.5 70.5 0 0 1-6-2.5c1.7 1 4.6 3 5.1 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m263.7 217.5 113 85.2 1-1.1-112.9-85.2a6 6 0 0 0-1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M256.6 212.1c.5.6 1.8 2.3 1.6 3.6l1.7-1.7c-.3 1-.1 1.5.4 1.7.4.4 1.5.2 2.1 0a5.4 5.4 0 0 1-2.2 1.2l-1.9.3c.7.3 2.3.6 3.4.6.5 0 1.6 0 2-.3.6.5 1.7-.6 1.1-1.1.2-.3.1-.8.1-1.4a6 6 0 0 0-1.1-3 7.8 7.8 0 0 1-.2 1.8c-.2.6-.5 1-.9 1.6.2-.5.2-1.3-.4-1.8-.6-.4-1.3-.3-2 0l1.6-1.5a15 15 0 0 1-4.2-1c-1-.4-3.8-2-5.5-3.1 1.4 1.2 4 3.5 4.4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00e519",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.1 283.4c4-2.6 15.1-4 16.7-3.6-8 6-16 6.3-16.7 3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe533",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.2 283.5c.7 2.6 8.7 2.4 16.6-3.6a69 69 0 0 1-16.6 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M300.2 283.5c.7 2.6 8.7 2.4 16.6-3.6a69 69 0 0 1-16.6 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.1 283.4a40.6 40.6 0 0 1 16.7-3.6c-8 6-16 6.3-16.7 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M347.6 220.2 322 272.5c-1.3 1-2.3-.3-2.7-.2-1.5 1.7-3.6 2-4 2.5-1.8 2.4-.8 4.3-.7 4.5 1.3 1.8-1.6 3.5-1.5 4-.6 1-2.7.9-3.1 2l-4.8 9.3c-.6.5-3.7 6.1-3.7 6.1-2 0-10.2-5.2-10.4-5.1 4.6-7.3 15.6-18.5 15.3-19.2 3.1-5.2 8-10.9 10.1-10.8 3-1.6 4.5-5.7 4-6.6 2.2 0 3.5-1.4 3.6-1.5l18.8-37.6c1.6-.5 1.4.1 1.9 1 0 0 1-1.2.9-1.3.9-.4 1.8.2 1.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M348.6 208.8c-.6 1 .2 1 .5 1.1l1 .3c1.3 0 2 .7 2 1l-30 61.3c-1.3 1-2.5-.3-2.9-.1l20.6-41.8 10-18.8-2.8-1.2c-.8-.2-1-.8-.7-1.6l12.6-21.6-10.2 21-.1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M348.6 208.8c-.6 1 .2 1 .5 1.1l1 .3c1.3 0 2 .7 2 1l-30 61.3c-1.3 1-2.5-.3-2.9-.1l20.6-41.8 10-18.8-2.8-1.2c-.8-.2-1-.8-.7-1.6l12.6-21.6-10.2 21-.1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.8 272.4c-3 0-4.6 2-2.7 4.7m1.4-2.4c-1 .6-1.7-.3-1.7-.3m15.2-13c-1.5 5.6-4.3 9.3-5 10.4-2 2.2-3.9 7.2-3.5 8.1l-8.1 13.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M322 272.7c-1.4-.5-5.7-4.5-10-3.8-3.3 3.8-5.3 7.7-5.9 8.2 4 3.3 6.7 5 7.6 5.4.7-.4 1-1.5 1-1.5.9-1-.2-1.7-.2-1.7.2-2.5 2-4.2 3.8-4.3 2.2-.2 1.6-.4 1.9-.4 1-.6 1.8-1.9 1.8-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M322 272.7c-1.4-.5-5.7-4.5-10-3.8-3.3 3.8-5.3 7.7-5.9 8.2 4 3.3 6.7 5 7.6 5.4.7-.4 1-1.5 1-1.5.9-1-.2-1.7-.2-1.7.2-2.5 2-4.2 3.8-4.3 2.2-.2 1.6-.4 1.9-.4 1-.6 1.8-1.9 1.8-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M317.6 272.8c-2 0-4 .9-4.8 2.6l4.8-2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M317.6 272.8c-2 0-4 .9-4.8 2.6m-3.5.7c.1.4.7.6 1.1.5.6-.2.8-.7.6-1-.2-.5-.7-.7-1.2-.5-.5.1-.7.6-.5 1zm2.5-3.4c.1.4.7.6 1.2.4.5-.1.7-.6.5-1-.2-.4-.7-.6-1.2-.5-.5.2-.7.7-.5 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M345.3 226.1c.8-.2 1.2-1.1.8-2l-4.7-1.7s-.6 0-1 .7c-.5.7.1 1.2.1 1.2l4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M345.3 226.1c.8-.2 1.2-1.1.8-2l-4.7-1.7s-.6 0-1 .7c-.5.7.1 1.2.1 1.2l4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00e519",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M294.5 286c3.9-2.7 15-4.2 16.6-3.8-7.8 6.2-15.8 6.5-16.6 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe533",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M294.6 286c.7 2.7 8.7 2.3 16.5-3.8a62.4 62.4 0 0 1-16.5 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M294.6 286c.7 2.7 8.7 2.3 16.5-3.8a62.4 62.4 0 0 1-16.5 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M294.6 286a40 40 0 0 1 16.6-3.9c-7.9 6.2-16 6.6-16.6 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m340.7 222-24.4 52.8c-1.3 1-2.4-.3-2.7-.2-1.5 1.7-3.6 2.1-4 2.5-1.8 2.5-.7 4.4-.6 4.6 1.3 1.8-1.5 3.5-1.4 4-.6 1-2.7.9-3.1 2.1-.1-.1-4.2 8.4-4.6 9.3-.6.5-3.5 6.2-3.5 6.2-2.1 0-10.3-5-10.5-5 4.4-7.3 15.1-18.7 14.9-19.4 3-5.3 7.7-11 9.9-11 3-1.6 4.3-5.7 3.7-6.6 2.3-.1 3.5-1.5 3.7-1.6l18-37.8c1.6-.6 1.3 0 1.9 1 0 0 1-1.2.9-1.4.9-.4 1.7.2 1.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m340.7 222-24.4 52.8c-1.3 1-2.4-.3-2.7-.2-1.5 1.7-3.6 2.1-4 2.5-1.8 2.5-.7 4.4-.6 4.6 1.3 1.8-1.5 3.5-1.4 4-.6 1-2.7.9-3.1 2.1-.1-.1-4.2 8.4-4.6 9.3-.6.5-3.5 6.2-3.5 6.2-2.1 0-10.3-5-10.5-5 4.4-7.3 15.1-18.7 14.9-19.4 3-5.3 7.7-11 9.9-11 3-1.6 4.3-5.7 3.7-6.6 2.3-.1 3.5-1.5 3.7-1.6l18-37.8c1.6-.6 1.3 0 1.9 1 0 0 1-1.2.9-1.4.9-.4 1.7.2 1.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.4 210.6c-.5 1 .3 1 .6 1.2l1 .3c1.3 0 2 .6 2 1l-28.7 61.7c-1.3 1-2.5-.3-2.9 0l19.7-42.2 9.6-19-2.8-1c-.8-.3-1-.8-.7-1.7l12-21.8-9.6 21.1-.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.4 210.6c-.5 1 .3 1 .6 1.2l1 .3c1.3 0 2 .6 2 1l-28.7 61.7c-1.3 1-2.5-.3-2.9 0l19.7-42.2 9.6-19-2.8-1c-.8-.3-1-.8-.7-1.7l12-21.8-9.6 21.1-.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303 275c-3-.2-4.6 2-2.6 4.6m1.3-2.4c-1 .6-1.7-.3-1.7-.3m15-13.3c-1.5 5.7-4.2 9.4-4.7 10.6-2.2 2.2-3.9 7.3-3.5 8.1l-7.8 13.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.1 275c-1.3-.5-5.8-4.5-10-3.7-3.3 3.9-5.1 7.8-5.7 8.3a50 50 0 0 0 7.7 5.3c.7-.4 1-1.5 1-1.5.8-1-.2-1.8-.2-1.8 0-2.4 1.8-4.2 3.6-4.3 2.2-.2 1.6-.4 1.9-.4 1-.6 1.7-2 1.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.1 275c-1.3-.5-5.8-4.5-10-3.7-3.3 3.9-5.1 7.8-5.7 8.3a50 50 0 0 0 7.7 5.3c.7-.4 1-1.5 1-1.5.8-1-.2-1.8-.2-1.8 0-2.4 1.8-4.2 3.6-4.3 2.2-.2 1.6-.4 1.9-.4 1-.6 1.7-2 1.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.8 275.1c-2 0-4 1-4.7 2.7l4.7-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.8 275.1c-2 0-4 1-4.7 2.7m-3.6.8c.2.4.7.6 1.2.4.5-.2.7-.6.5-1-.2-.5-.7-.6-1.2-.5-.5.2-.7.6-.5 1zm2.4-3.5c.2.4.8.6 1.3.5.5-.2.7-.7.5-1-.2-.5-.7-.7-1.2-.5-.5.1-.8.6-.6 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.5 228c.8-.2 1.1-1.1.7-2l-4.7-1.6s-.5 0-1 .7c-.4.7.2 1.2.2 1.2l4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.5 228c.8-.2 1.1-1.1.7-2l-4.7-1.6s-.5 0-1 .7c-.4.7.2 1.2.2 1.2l4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00e519",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.6 283.3a39 39 0 0 0-16.8-3.7c8 6.1 16.1 6.3 16.8 3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe533",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.6 283.3c-.7 2.7-8.8 2.4-16.8-3.6a63.4 63.4 0 0 0 16.8 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M340.6 283.3c-.7 2.7-8.8 2.4-16.8-3.6a63.4 63.4 0 0 0 16.8 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.6 283.3c-4.2-3-15.8-4-16.9-3.7 8 6 16.2 6.3 16.9 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m292.7 219.3 25.7 52.9c1.3 1 2.4-.3 2.7-.2 1.6 1.7 3.7 2.1 4.2 2.5 1.8 2.4.8 4.4.7 4.6-1.4 1.8 1.5 3.5 1.4 4.1.6 1 2.7.8 3.2 2l4.8 9.3c.7.5 3.7 6.2 3.7 6.2 2.1 0 10.3-5.3 10.5-5.2-4.6-7.3-15.7-18.7-15.4-19.4-3.1-5.2-8.1-11-10.2-10.9-3-1.6-4.5-5.7-4-6.6-2.3 0-3.6-1.5-3.7-1.6l-19-37.9c-1.6-.5-1.3.1-1.9 1 0 0-1-1.2-.9-1.3-.9-.5-1.8.2-1.8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.7 207.8c.5 1-.2 1-.5 1.2l-1.1.3c-1.2 0-1.9.7-1.9 1l30.2 61.9c1.3 1 2.5-.3 3-.1l-20.8-42.3-10-19 2.7-1.1c.8-.2 1-.8.7-1.6l-12.7-21.9 10.2 21.2.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.7 207.8c.5 1-.2 1-.5 1.2l-1.1.3c-1.2 0-1.9.7-1.9 1l30.2 61.9c1.3 1 2.5-.3 3-.1l-20.8-42.3-10-19 2.7-1.1c.8-.2 1-.8.7-1.6l-12.7-21.9 10.2 21.2.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M331.9 272.1c3 0 4.6 2.1 2.7 4.7m-1.4-2.3c1 .6 1.7-.4 1.7-.4M319.5 261c1.6 5.7 4.4 9.5 5 10.6 2.2 2.2 4 7.3 3.7 8.2l8.1 13.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M318.6 272.4c1.3-.4 5.7-4.6 10-3.8 3.4 3.8 5.4 7.7 6 8.2-4 3.4-6.7 5-7.7 5.5-.7-.4-1-1.5-1-1.5-.9-1 .2-1.8.2-1.8-.1-2.4-2-4.2-3.8-4.3-2.3-.2-1.6-.4-2-.4-1-.6-1.7-1.9-1.7-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M318.6 272.4c1.3-.4 5.7-4.6 10-3.8 3.4 3.8 5.4 7.7 6 8.2-4 3.4-6.7 5-7.7 5.5-.7-.4-1-1.5-1-1.5-.9-1 .2-1.8.2-1.8-.1-2.4-2-4.2-3.8-4.3-2.3-.2-1.6-.4-2-.4-1-.6-1.7-1.9-1.7-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M323 272.5c2 0 4 1 4.8 2.7l-4.8-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M323 272.5c2 0 4 1 4.8 2.7m3.6.6a1 1 0 0 1-1.2.5.7.7 0 0 1-.5-1c.1-.5.7-.6 1.2-.5.5.2.7.6.5 1zm-2.5-3.4c-.2.4-.8.6-1.3.5-.4-.2-.7-.7-.5-1 .2-.5.7-.7 1.2-.5.5.1.8.6.6 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 225.4a1.4 1.4 0 0 1-.8-2l4.8-1.8s.5.1 1 .7c.5.7-.2 1.2-.2 1.2l-4.8 1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 225.4a1.4 1.4 0 0 1-.8-2l4.8-1.8s.5.1 1 .7c.5.7-.2 1.2-.2 1.2l-4.8 1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00e519",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M345.6 286a38 38 0 0 0-16.6-3.8c7.9 6.2 15.9 6.5 16.6 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe533",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M345.6 286c-.8 2.7-8.7 2.3-16.5-3.8a62.4 62.4 0 0 0 16.5 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M345.6 286c-.8 2.7-8.7 2.3-16.5-3.8a62.4 62.4 0 0 0 16.5 3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M345.6 286a40.1 40.1 0 0 0-16.6-3.9c7.8 6.2 15.9 6.6 16.6 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m299.5 222 24.4 52.8c1.3 1 2.3-.3 2.7-.2 1.5 1.7 3.6 2.1 4 2.5 1.7 2.5.7 4.4.6 4.6-1.4 1.7 1.5 3.5 1.4 4 .5 1 2.6.9 3 2.1.2-.1 4.2 8.4 4.7 9.3.6.5 3.5 6.2 3.5 6.2 2 0 10.3-5 10.5-5-4.4-7.4-15.2-18.7-15-19.4-2.9-5.3-7.7-11-9.8-11-3-1.6-4.3-5.7-3.7-6.6-2.3-.1-3.6-1.5-3.7-1.6L304 222c-1.6-.6-1.4 0-2 1 0 0-.9-1.2-.8-1.4-.9-.4-1.8.2-1.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m299.5 222 24.4 52.8c1.3 1 2.3-.3 2.7-.2 1.5 1.7 3.6 2.1 4 2.5 1.7 2.5.7 4.4.6 4.6-1.4 1.7 1.5 3.5 1.4 4 .5 1 2.6.9 3 2.1.2-.1 4.2 8.4 4.7 9.3.6.5 3.5 6.2 3.5 6.2 2 0 10.3-5 10.5-5-4.4-7.4-15.2-18.7-15-19.4-2.9-5.3-7.7-11-9.8-11-3-1.6-4.3-5.7-3.7-6.6-2.3-.1-3.6-1.5-3.7-1.6L304 222c-1.6-.6-1.4 0-2 1 0 0-.9-1.2-.8-1.4-.9-.4-1.8.2-1.8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.8 210.6c.4 1-.3 1-.6 1.2l-1 .3c-1.3 0-2 .6-2 1l28.7 61.7c1.3 1 2.5-.3 2.9 0L307 232.5l-9.6-19 2.7-1c.9-.3 1.2-.8.8-1.7L288.8 189l9.7 21.1.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.8 210.6c.4 1-.3 1-.6 1.2l-1 .3c-1.3 0-2 .6-2 1l28.7 61.7c1.3 1 2.5-.3 2.9 0L307 232.5l-9.6-19 2.7-1c.9-.3 1.2-.8.8-1.7L288.8 189l9.7 21.1.2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M337.2 275c3-.2 4.5 2 2.6 4.6m-1.4-2.4c1 .6 1.8-.3 1.8-.3m-15-13.3c1.4 5.7 4.2 9.4 4.7 10.6 2.1 2.2 3.8 7.3 3.5 8.1l7.8 13.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M324 275c1.4-.5 5.8-4.5 10.1-3.7 3.2 3.9 5.1 7.8 5.7 8.3a54.1 54.1 0 0 1-7.8 5.3c-.6-.4-1-1.5-1-1.5-.7-1 .3-1.8.3-1.8 0-2.4-1.8-4.2-3.6-4.3-2.3-.2-1.6-.4-2-.4-1-.6-1.7-2-1.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M324 275c1.4-.5 5.8-4.5 10.1-3.7 3.2 3.9 5.1 7.8 5.7 8.3a54.1 54.1 0 0 1-7.8 5.3c-.6-.4-1-1.5-1-1.5-.7-1 .3-1.8.3-1.8 0-2.4-1.8-4.2-3.6-4.3-2.3-.2-1.6-.4-2-.4-1-.6-1.7-2-1.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M328.4 275.1c2 0 4 1 4.7 2.7l-4.7-2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M328.4 275.1c2 0 4 1 4.7 2.7m3.6.8a1 1 0 0 1-1.2.4c-.5-.2-.8-.6-.6-1 .2-.5.8-.6 1.3-.5.4.2.7.6.5 1zm-2.5-3.5c-.2.4-.7.6-1.2.5-.5-.2-.7-.7-.5-1 .2-.5.7-.7 1.2-.5.5.1.7.6.5 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cce5e5",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.6 228c-.8-.2-1-1.1-.7-2l4.7-1.6s.6 0 1 .7c.5.7-.2 1.2-.2 1.2l-4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.6 228c-.8-.2-1-1.1-.7-2l4.7-1.6s.6 0 1 .7c.5.7-.2 1.2-.2 1.2l-4.8 1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m315.3 250.7 35.5-38a97.4 97.4 0 0 1-1.4-.9l-35.6 38a7.5 7.5 0 0 0 1.5.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M349.8 212.2c-1.2-1-3.4-2.2-5-1.8-.5-2.2 2.5-4.4 3.8-4-.3 2.3 3.2 3.8 3.1 3.8l-1.9 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M352.1 210.4c1 .8 1.4.8 2.8 1.6 1.4.7 3.2-1.1 4.1-1.7 0 0 1 3.4-1.1 5.6-2 2.3-4.6 2.8-6.5 2.1 0 0 2.6-2.5 1.5-3.6-1-1.1-1.4-1.2-2.5-1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M-27.7-406.5h4.1v2.2h-4.1z",
    transform: "matrix(-.67726 .73575 -.82314 -.56784 0 0)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m308.2 290.3-1 9 1.8-2.2c.3-.6 1.5-2.1 1.8-7.4 0 0-1-2.9-1.4-2.9-.7-.4-1.2 3.5-1.2 3.5zm2.2-20.1-2.7 15.8c0 .5 1.3 1.6 2.1-1.2l1.5-10.5-1-4.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.9 284.6a8.7 8.7 0 0 1-1.4-2l-.4 3.1s2 1.5 1.7 4.3l.4-.6.2-1s.5-2 .5-3.1c0 0-.5-.2-1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M307.3 299.4s3.3-3 3.5-9.7l.4-1.9s0 1.5.8.4c.6-1.5.6-2.8.6-2.8s1.2-1.6 1.6.3l-1.2 9.6a51.4 51.4 0 0 1-.3 2s-.7-1-1.4.1c-.7 1.2-1.8 2.7-4 2zm4-25.1-1.5 10.5s1.2.6 1.4 3c.1 1.2.6.6.8.4.2-.8 0-2.3 0-2.3l.6-7.3s-1.2-3.4-1.3-4.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m310.1 298.8-.2 2.6s1 0 1.7-1.2c.8-1.1 1-2.8 1-2.8s-.7-1.1-1.3 0c-.5 1-1.2 1.4-1.2 1.4zm1.8-10.6c.6-1 .8-2.6.7-2.8l-.7.5c.2 1.2 0 2.3 0 2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.3 287.1a4.4 4.4 0 0 0-1.3-1.5l-1.5 12s-.4 3-2.3 3.7c0 0 1.1 10.3 4.5 7.5.4-.4 1-3.6.9-5.5l-.9-6a26.8 26.8 0 0 1 .5-4.7l.6-2.6c.2-.2 0-1.8-.5-2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m316.9 285.3 1 1c.3 0-2.3 19.3-2.3 19.3s0-2-.7-6c-.6-3.2.2-7.5.9-9.6 0 0 .8-.5 1-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m312.6 278.8-.7 7.1s1.8-2.4 2.2-.2l.4-3.2s-1.5-2.4-2-3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.3 287.8s-.6-6.1-3.6-1.8a10 10 0 0 0 0 3c0 .8.9 1.8 1.2 2.3.7 1 1.3-.2 1.3-.2s.7-1 1-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M287.8 237c-.1-3.5-1.2-9.3-1.3-13.3l-12-12.2s-1.4 9.9-5.8 15.5l19 10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M288.7 237.3c.5-2.4 1-5 1.5-10.2l-7.7-7.6c0 3.2-3.6 8.1-3.9 14"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.3 244.7c1-4.3-1.3-4.8 2-10.8l-7.2-6.8c-1.3 4-2.2 6.6-2 10l6 4.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M267.6 270c-1.5-4.2.5-12.7.2-18-.1-3.5 2.5-16.7 2.4-20.6l-14.1-8.8s-.6 14.3-2.3 29.9c-1.4 8-1.4 15.3-.4 21.5 1.5 8.7 3 12.2 6.5 15.9 6.3 6.5 19.7 2.7 19.7 2.7 11.3-2.3 17.8-9.4 17.8-9.4s-3.7.8-9.6 1.4c-13-.9-18.2 2.4-18.6-11"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m305.4 278.8.2-.1-5.9 1.9-8 .6c-17.2.4-15-10.3-14.3-27.5.1-6.6 1.4-14.8 1-17.7l-11.5-6.6c-3.8 10.6-2.6 18-3.3 23.5-.4 6-1.7 17.4.2 22.4 2.7 11.6 11.8 11.2 24.2 10.1 6.1-.5 9.4-2 9.4-2l8-4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007a3d",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M305.6 278.5a34.4 34.4 0 0 1-6 2.2l-8 .8c-12.5 1-19.8-7.7-18.2-27.6 0-7 .2-10.2 2.6-19.5l7 4v.7c-.5 2-1.5 7-1.5 9.2 0 16 10.1 28.2 23.9 30.3h.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M260 230.6c1 2 8 12.5 12 14.5m-11-7.6c1.3 2 9.8 14 13.6 14.6m-15.5 3.6c2 2.4 4 7 9.7 10m-7 3.3c4 3.7 13.6 11.6 23 12m-23-6c2 2.3 6.2 13.3 24 8.3m-26.7-6.3c1.2 2.6 10.1 17.3 26 11.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M277.8 264.8c-1.5-4.3.5-12.7.2-18.1-.1-3.5 1.5-15.5 1.5-19.5l-13.2-9.9s-.6 14.3-2.3 30a84 84 0 0 0-1.5 23.9c1.8 10 6.6 12.8 7.5 13.6 6.7 6 22 5.4 23.5 4.9 10.8-4 15.6-10.8 15.6-10.8s-5.2-.1-11.1.5c-13-1-19.7-.4-20.1-13.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.6 273.5h.2l-5.9 1.8-8 .6c-17.2.5-15-10.2-14.3-27.5.1-6.5.3-12.4 0-15.3l-10.3-7.6c-3.8 10.7-2.8 16.7-3.5 22.2-.4 5.8-1.7 17.3.2 22.3 2.7 11.7 11.8 11.2 24.2 10.2 6.1-.5 9.4-2.1 9.4-2.1l8-4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.9 273.4c-2.4 1.2-6 2.1-6 2.1l-8 .8c-12.5 1-19.8-7.7-18.2-27.6 0-7-.3-7.5 2.2-16.9 3.8 2.5 11.1 8.8 11.1 8.8s-2 2.8-1.5 6.7c0 16 6.4 24 20.2 26.1l1.5-13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M270.1 225.3c1.2 2 8.1 12.6 12 14.6m-10.8-7.7c1.2 2 9.7 14 13.5 14.7m-15.5 3.6c2 2.3 4 7 9.7 10m-7 3.3c4 3.6 13.6 11.6 23 12m-23-6c2 2.3 6.2 13.2 24 8.3m-26.7-6.4c1.2 2.7 10.1 17.3 26 11.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m256.2 224-.7 6c-.2 4.4-.1 7.7.1 9.8 0 .2.9 5.5.6 5.8-1 1.1-1.1 1.2-2.2.4-.1-.2.5-5.6.5-6.3l.4-9.9c0-1 1-6.4 1-6.4s0-1.2.3.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m256.2 224-.7 6c-.2 4.4-.1 7.7.1 9.8l.7 5.8c-1 1.1-1.2 1.6-2.3.7-.1-.2.5-5.9.5-6.6l.4-9.9c0-1 1-6.4 1-6.4s0-1.2.3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M256 222.2s-1 6-1.2 9.6l-.3 7.9-.5 4.5c-.1.7.1.2 0 .2-.9.5-1.5.1-2-.3-.2-.1 1.4-3.8 1.4-4.5.9-10.8 2.4-17 2.4-17s-.6 3.7.3-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M256 222.2s-1 6-1.2 9.6l-.3 7.9-.5 4.5c-.1.7.1.2 0 .2-.9.5-1.5.1-2-.3-.1-.1 1.4-3.8 1.5-4.5.8-10.8 2.3-17.1 2.3-17.1s-.6 3.8.3-.3zm-.4 17.3s-1 .4-1 .2m0-1.3s.7 0 .8-.2m0-1s-.6.3-.8 0m.8-1.6h-.6m.6-1.5h-.6m.5-2.1s-.3.1-.4-.1m.5-1.7h-.5m-.5 9.5s-.9.2-1-.1m1.1-2s-.9.1-1-.1m1-1.3h-.7m.9-1.5h-.7m.7-1.7h-.5m.7-1.5h-.6m.6-1.7s-.4.3-.4 0m0 9s-.9 0-.9-.3m12.8-19.8-.7 6a63.4 63.4 0 0 0 0 9.8c0 .3 1 5.5.7 5.8-1 1.2-1.1 1.3-2.2.4-.1-.1.5-5.5.5-6.3l.4-9.8c0-1.1 1-6.5 1-6.5s0-1.1.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m266.4 218.7-.7 6a73 73 0 0 0 .1 9.8l.7 5.8c-1 1.2-1.2 1.6-2.3.7-.1-.1.5-5.8.5-6.6l.4-9.8c0-1.1 1-6.5 1-6.5s0-1.1.3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M266.3 217s-1.2 6-1.3 9.5l-.3 8-.5 4.4v.3c-.9.5-1.5 0-2-.4-.2 0 1.4-3.7 1.4-4.5a127 127 0 0 1 2.4-17l.3-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M266.3 217s-1.2 6-1.3 9.5l-.3 8-.5 4.4v.3c-.9.5-1.5 0-2-.4-.2 0 1.4-3.7 1.4-4.5.9-10.8 2.4-17 2.4-17l.3-.4zm-.5 17.2s-1 .5-1 .2m0-1.2s.7 0 .8-.3m0-1s-.6.4-.8.1m.7-1.7h-.5m.6-1.5h-.6m.5-2s-.4 0-.4-.2m.5-1.7h-.5m-.5 9.6s-.9.1-1-.2m1.1-1.9s-.9 0-1-.2m1-1.3h-.7m.9-1.4h-.7m.7-1.7-.5-.1m.7-1.4-.6-.1m.6-1.6s-.4.2-.4 0m0 9s-.9 0-.9-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M274.3 211.3s.5 5.1.2 8c-.3 3.5-.3 4.5-.6 6.6v3.9c.8.5 1.5.2 2 0 .3-.1-1-3.3-1-4 .5-8.9-.4-14.3-.4-14.3l-.2-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M274.3 211.3s.5 5.1.2 8c-.3 3.5-.3 4.5-.6 6.6v3.8c0 .5-.1 0 0 .1.8.5 1.4.2 2 0 .2-.1-1-3.3-1-4 .5-9-.4-14.3-.4-14.3l-.2-.2zm-.3 14.6s.9.2 1 0m-.8-1.7s.9.2 1 0m-1-1.2h.9m-.8-1.2h.7m-.5-1.4h.5m-.5-1.3h.5m-.4-1.4s.4.2.4 0m-1 7.4s1 .1 1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M306 221.7h.8-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.7 256.4s-.3-.2-.4 0l.1.2.3-.2zm-1 1.1 2.1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M292.2 284.2c-.2 3-7.4 6.6-12.7.1-5.7-4.5-4.5-11.4 0-12.3l54.7-53.3c2.2-1.2 2.4-2.3 3.5-3.5 2.3 2.5 7 6.8 9.6 9-1.6 1.2-2.9 2.5-3.2 3.5l-52 56.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M337.8 215c2.6-3.5 12.8 5.8 10 8.7-2.6 2.8-12.4-5-10-8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cccccf",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M347 223c-2 1.4-9.3-4.8-8.1-7.2 2-2.2 10.1 5.7 8 7.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344 227.9a15.8 15.8 0 0 1-9.9-9m-23 44.8a16.3 16.3 0 0 1-11.4-11.6m9.1 14.3a16.3 16.3 0 0 1-11.4-11.6m-2.1 25.8c-5.8-1.8-10.4-6-12.2-12.1m9.8 14.8a18 18 0 0 1-12.3-12.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M279.4 285c-.3 1.4-1 1.8-2.1 1.4m13.7-2c-2.1 3.5-4.5 2.4-6.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.4 285.2c0 1 .8 1.6 1.7 1.6a1.7 1.7 0 0 0 1.7-1.6c0-1-.7-1.6-1.7-1.6s-1.7 1-1.7 1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M279.5 284.9c-.3 1.3-1 1.7-2 1.3m13.5-1.7c-2.1 3.4-4.5 2.3-6.5 2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m331.8 290.3 1 9-1.8-2.2c-.3-.6-1.5-2.1-1.8-7.4 0 0 1-2.9 1.4-2.9.7-.4 1.2 3.5 1.2 3.5zm-2.2-20.1 2.7 15.8c0 .5-1.3 1.6-2.1-1.2l-1.5-10.5 1-4.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m324.1 284.6 1.4-2 .4 3.1s-2 1.5-1.7 4.3l-.4-.6-.2-1s-.5-2-.5-3.1c0 0 .5-.2 1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M332.8 299.4s-3.4-3-3.6-9.7l-.4-1.9s0 1.5-.8.4c-.6-1.5-.6-2.8-.6-2.8s-1.2-1.6-1.6.3l1.2 9.6.3 2s.7-1 1.4.1c.7 1.2 1.8 2.7 4 2zm-4.1-25.1 1.5 10.5s-1.2.6-1.4 3c-.1 1.2-.6.6-.8.4-.2-.8 0-2.3 0-2.3l-.6-7.3s1.2-3.4 1.3-4.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m329.9 298.8.2 2.6s-1 0-1.7-1.2c-.8-1.1-1-2.8-1-2.8s.7-1.1 1.3 0c.5 1 1.2 1.4 1.2 1.4zm-1.8-10.6a6 6 0 0 1-.7-2.8l.7.5c-.2 1.2 0 2.3 0 2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M324.8 287.1a4.4 4.4 0 0 1 1.2-1.5l1.5 12s.4 3 2.3 3.7c0 0-1.1 10.3-4.5 7.5-.4-.4-1-3.6-.9-5.5l.9-6a26.8 26.8 0 0 0-.5-4.7 31 31 0 0 0-.6-2.6c-.2-.2 0-1.8.5-2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m323.1 285.3-1 1c-.3 0 2.3 19.3 2.3 19.3s0-2 .7-6c.6-3.2-.2-7.5-.9-9.6 0 0-.8-.5-1-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m327.4 278.8.7 7.1s-1.8-2.4-2.2-.2l-.4-3.2s1.5-2.4 2-3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M328.7 287.8s.6-6.1 3.6-1.8c0 0 .2 2.4 0 3 0 .8-.9 1.8-1.2 2.3-.7 1-1.3-.2-1.3-.2s-.7-1-1-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M352.2 237c.1-3.5 1.2-9.3 1.3-13.3l12-12.2s1.4 9.9 5.8 15.5l-19 10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M351.3 237.3c-.5-2.4-1-5-1.5-10.2l7.7-7.6c0 3.2 3.6 8.1 3.9 14"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.7 244.7c-1-4.3 1.3-4.8-2-10.8l7.2-6.8c1.3 4 2.2 6.6 2 10l-6 4.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M372.4 270c1.5-4.2-.5-12.7-.2-18 .1-3.5-2.5-16.7-2.4-20.6l14.1-8.8s.6 14.3 2.3 29.9c1.4 8 1.4 15.3.4 21.5-1.5 8.7-3 12.2-6.5 15.9-6.3 6.5-19.7 2.7-19.7 2.7-11.3-2.3-17.8-9.4-17.8-9.4s3.7.8 9.6 1.4c13-.9 18.2 2.4 18.6-11"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m334.6 278.8-.2-.1 5.9 1.9 8 .6c17.2.4 15-10.3 14.3-27.5-.1-6.6-1.4-14.8-1-17.7l11.5-6.6c3.8 10.6 2.6 18 3.3 23.5.4 6 1.7 17.4-.2 22.4-2.7 11.6-11.8 11.2-24.2 10.1-6.1-.5-9.4-2-9.4-2l-8-4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007a3d",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M334.4 278.5a34.4 34.4 0 0 0 6 2.2l8 .8c12.5 1 19.8-7.7 18.2-27.6 0-7-.2-10.2-2.6-19.5l-7 4v.7c.5 2 1.5 7 1.5 9.2 0 16-10.1 28.2-23.9 30.3h-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M380 230.6c-1 2-8 12.5-12 14.5m11-7.6c-1.3 2-9.8 14-13.6 14.6m15.5 3.6c-2 2.4-4 7-9.7 10m7 3.3c-4 3.7-13.6 11.6-23 12m23-6c-2 2.3-6.2 13.3-24 8.3m26.7-6.3c-1.2 2.6-10.1 17.3-26 11.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M362.3 264.8c1.4-4.3-.6-12.7-.4-18.1.2-3.5-1.4-15.5-1.4-19.5l13.2-9.9s.6 14.3 2.3 30a84 84 0 0 1 1.5 23.9c-1.8 10-6.6 12.8-7.5 13.6-6.7 6-22 5.4-23.5 4.9-10.8-4-15.6-10.8-15.6-10.8s5.2-.1 11.1.5c13-1 19.7-.4 20.1-13.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M324.4 273.5h-.2l5.9 1.8 8 .6c17.2.5 15-10.2 14.3-27.5-.1-6.5-.3-12.4 0-15.3l10.3-7.6c3.8 10.7 2.8 16.7 3.5 22.2.4 5.8 1.7 17.3-.2 22.3-2.7 11.7-11.8 11.2-24.2 10.2-6.1-.5-9.4-2.1-9.4-2.1l-8-4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M324.1 273.4a34.4 34.4 0 0 0 6 2.1l8 .8c12.5 1 19.8-7.7 18.2-27.6 0-7 .3-7.5-2.2-16.9-3.8 2.5-11.1 8.8-11.1 8.8s2 2.8 1.5 6.7c0 16-6.4 24-20.2 26.1l-1.5-13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M369.9 225.3c-1.2 2-8.1 12.6-12 14.6m10.8-7.7c-1.2 2-9.7 14-13.5 14.7m15.5 3.6c-2 2.3-4 7-9.7 10m7 3.3c-4 3.6-13.6 11.6-23 12m23-6c-2 2.3-6.2 13.2-24 8.3m26.7-6.4c-1.2 2.7-10.1 17.3-26 11.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m383.8 224 .7 6c.2 4.4.1 7.7-.1 9.8 0 .2-.8 5.5-.6 5.8 1 1.1 1.1 1.2 2.2.4.1-.2-.5-5.6-.5-6.3l-.4-9.9c0-1-1-6.4-1-6.4s0-1.2-.3.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m383.8 224 .7 6c.2 4.4.1 7.7-.1 9.8l-.7 5.8c1 1.1 1.2 1.6 2.3.7.1-.2-.5-5.9-.5-6.6l-.4-9.9c0-1-1-6.4-1-6.4s0-1.2-.3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M384 222.2s1 6 1.2 9.6l.3 7.9.5 4.5c.1.7 0 .2 0 .2.9.5 1.5.1 2-.3.2-.1-1.4-3.8-1.4-4.5-.9-10.8-2.4-17-2.4-17s.6 3.7-.3-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M384 222.2s1 6 1.2 9.6l.3 7.9.5 4.5c.1.7-.1.2 0 .2.9.5 1.5.1 2-.3.2-.1-1.4-3.8-1.4-4.5-.9-10.8-2.4-17.1-2.4-17.1s.6 3.8-.3-.3zm.4 17.3s1 .4 1 .2m0-1.3s-.7 0-.8-.2m0-1s.6.3.8 0m-.7-1.6h.5m-.6-1.5h.6m-.5-2.1s.4.1.4-.1m-.5-1.7h.5m.5 9.5s.9.2 1-.1m-1.1-2s.9.1 1-.1m-1-1.3h.7m-.9-1.5h.7m-.7-1.7h.5m-.7-1.5h.6m-.6-1.7s.4.3.4 0m0 9s.9 0 .9-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m373.6 218.7.7 6a73 73 0 0 1-.1 9.8c0 .3-.8 5.5-.6 5.8 1 1.2 1.1 1.3 2.2.4.1-.1-.5-5.5-.5-6.3l-.4-9.8c0-1.1-1-6.5-1-6.5s0-1.1-.3.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m373.6 218.7.7 6a73 73 0 0 1-.1 9.8l-.7 5.8c1 1.2 1.2 1.6 2.3.7.1-.1-.5-5.8-.5-6.6l-.4-9.8c0-1.1-1-6.5-1-6.5s0-1.1-.3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7e214",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M373.7 217s1.2 6 1.3 9.5l.3 8 .5 4.4v.3c.9.5 1.5 0 2-.4.2 0-1.4-3.7-1.4-4.5a127 127 0 0 0-2.4-17l-.3-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M373.7 217s1.2 6 1.3 9.5l.3 8 .5 4.4v.3c.9.5 1.5 0 2-.4.2 0-1.4-3.7-1.4-4.5-.9-10.8-2.4-17-2.4-17l-.3-.4zm.5 17.2s1 .5 1 .2m0-1.2s-.7 0-.8-.3m0-1s.6.4.8.1m-.7-1.7h.5m-.6-1.5h.6m-.5-2s.4 0 .4-.2m-.5-1.7h.5m.5 9.6s.9.1 1-.2m-1.1-1.9s.9 0 1-.2m-1-1.3h.7m-.9-1.4h.7m-.7-1.7.5-.1m-.7-1.4.6-.1m-.6-1.6s.4.2.4 0m0 9s.9 0 .9-.4m-10.5-22s-.5 5.2-.2 8.1c.3 3.5.3 4.5.6 6.6v3.9c-.8.5-1.4.2-2 0-.2-.1 1-3.3 1-4-.5-8.9.4-14.3.4-14.3l.2-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M365.7 211.3s-.5 5.1-.2 8c.3 3.5.3 4.5.6 6.6v3.8c0 .5.1 0 0 .1-.8.5-1.4.2-2 0-.2-.1 1-3.3 1-4-.5-9 .4-14.3.4-14.3l.2-.2zm.3 14.6s-.9.2-1 0m.8-1.7s-.9.2-1 0m1-1.2h-.9m.8-1.2h-.7m.5-1.4h-.5m.5-1.3h-.5m.4-1.4s-.4.2-.4 0m1 7.4s-1 .1-1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#005000",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M334 221.7h-.8.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M323.3 256.4s.3-.2.4 0l-.1.2-.3-.2zm1 1.1-2.1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.7 215.5c0-2.1 2-3.3 2.2-3.6 1-.6 1.7-1.2 3.7-1.5l.2.9c0 .3-.5 1.6-2 2.7a11.5 11.5 0 0 1-4.1 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a05a2c",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m291.6 214.7 29.7 38.4 1.4-1.3-30.2-39.1-.9 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.2 207.2s3.2-.4 2.8-2.2c-.5-1.8-2.6-1.8-3.5-1.9-1 0-4 .7-4.8 1.5-.9 1-2.7 2.5-2.1 5s1.3 4.4 2.3 6c.9 1.6.7 3.2.4 3.9 0 .3-.4 1.3.4 1.6 1.2.5 1.5.5 2.5-.6s2.5-3 2.5-5c0-2.1 2-3.3 2.2-3.6 1-.6 1.7-1.2 3.7-1.5 0 0-.7-1.2-1.8-1-1.1 0-3.4-1-4.6-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.2 207.2s3.2-.4 2.8-2.2c-.5-1.8-2.6-1.8-3.5-1.9-1 0-4 .7-4.8 1.5-.9 1-2.7 2.5-2.1 5s1.3 4.4 2.3 6c.9 1.6.7 3.2.4 3.9 0 .3-.4 1.3.4 1.6 1.2.5 1.5.5 2.5-.6s2.5-3 2.5-5c0-2.1 2-3.3 2.2-3.6 1-.6 1.7-1.2 3.7-1.5 0 0-.7-1.2-1.8-1-1.1 0-3.4-1-4.6-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.2 207.2c-.4 0-1.7-.6-2.6-.3-.9.4-2.7 1.4-2.4 3m10.4-.3s-1.8.8-3.1 1.7c-.6.3-2.4 2-3.5 3.2-1 1-1.3 2.4-3.5 3.9m9-9-1.4 1c-.7.3-.9.9-1.2 1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M347.8 284.2c.2 3 7.4 6.6 12.7.1 5.7-4.5 4.5-11.4 0-12.3l-54.7-53.3c-2.2-1.2-2.4-2.3-3.5-3.5a133 133 0 0 1-9.6 9 9.9 9.9 0 0 1 3.2 3.5l51.9 56.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M302.2 215c-2.6-3.5-12.8 5.8-10 8.7 2.6 2.8 12.4-5 10-8.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cccccf",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M293 223c2 1.4 9.3-4.8 8.1-7.2-2-2.2-10.1 5.7-8 7.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296 227.9a16 16 0 0 0 9.9-9m23 44.8c5.7-1.7 9.6-5.5 11.4-11.6m-9.1 14.3c5.7-1.8 9.7-5.5 11.4-11.6m2.1 25.8c5.8-1.8 10.4-6 12.2-12.1m-9.8 14.8a18 18 0 0 0 12.3-12.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M360.6 285c.3 1.4 1 1.8 2.1 1.4m-13.7-2c2.1 3.5 4.5 2.4 6.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M363.6 285.2c0 1-.8 1.6-1.7 1.6a1.7 1.7 0 0 1-1.7-1.6c0-1 .7-1.6 1.7-1.6s1.7 1 1.7 1.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M360.5 284.9c.3 1.3 1 1.7 2 1.3m-13.5-1.7c2.1 3.4 4.5 2.3 6.5 2.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M339.6 175.5c1.8 2.9 4.4 8 5.2 12a22.5 22.5 0 0 1-7 20.8c-5.2 4.7-13.3 6-16.7 6.8-3.3.7-5.7 1.8-6.3 2.5 0-.5 0-1 .5-1.6 1.6-.7 4.1-1 7.8-1.8 7.2-1.5 14.8-4.2 19-12.2 5.4-10.3 2.2-18.4-2.5-26.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.6 206.2a.4.6 49.9 0 1-.6-.6.4.6 49.9 1 1 .6.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M346.6 205c-1.1.6-2.2.7-3 1a65.7 65.7 0 0 0-3.7 1.4c-.8.3-1.6 1.3-1.6 1.3s1.2 1.3 2.6 1.1c1.2-.1 1.7-.4 2.3-.7.6-.3.6-.6 1.4-1.2 1-.7 1.6-2 2-3zm-5.7 1.1c-.3.6-1.1.5-1.6.5l-.2.2c.6 0 1.5 0 2-.5l-.2-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M346.6 205c-1 1-2.8 2-4.7 2.8a14 14 0 0 1-5 1l-.2.3c1.4-.1 3.4-.4 5-1.1a14.9 14.9 0 0 0 4.9-3zm-2.4 4.6c-2-.1-3 .5-4.8.9-1.7.4-3.7-.5-4.8 1.1 4.4 2.9 7.6 1 9.6-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.2 213.6c-.8-.8-8-3.2-9.2-.5 1.7 2 6.8 2.4 9.2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m338.5 215.5-2.5-.4c-1-.1-1.3-.3-1.9-.4-1-.1-2.3-1.6-6-.5 1.4 3.4 6.4 4 10.4 1.3zm1.6-1.9c-3.8.8-8.3 0-10.1-1l-.3.2a16.3 16.3 0 0 0 10.4.8zm4-4c-2.2 1.5-5.2 2.6-11.4 1.8v.2c8.5.7 9.3-.8 11.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.5 215.5c-3 .1-4.7 1.4-10.3-1.3l-1.4-.6-.5.2 1.4.4c7 3 6.8 1.6 10.8 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.3 211.6a.4.6 66.2 1 0 .4.7.4.6 66.2 0 0-.4-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.1 212.3c-.6.1-.8.9-.8 1.3l-.4.2c.2-.6.4-1.4 1.2-1.7v.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M346 186.8a.4.6 15.8 1 1-1-.2.4.6 15.8 0 1 1 .2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.6 203.2c-.1-2.1-1.1.8-3.2-3.9-.6-1.4-.6-2.2-1-4.3 1.2 1.8 3 2.3 3.8 3.6.7 1.4.5 3.5.4 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M337.5 195.2s1 2.4 2.4 4a7.9 7.9 0 0 1 1.8 3.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.5 197.2c1.3 1.7 3 3.8 3 6h.3c-.3-2.8-2-4.1-3-5.6l-.3-.4zm10.8 2.7c-1 .7-2 1-2.7 1.4l-1.4.9c-.4.2-1 .2-1.4.5-.7.5-2 2-2 2s1.3 1.1 2 1c2.4-.5 3.1-1.4 4.3-2.3 1-.8 1-2.5 1.2-3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m340.7 204.8-.2.4c1.3-.2 3.5-1.5 5-2.2 1.8-1 3-1.7 3.7-3a8.9 8.9 0 0 1-3.9 3c-1.5.7-3.7 2-4.6 1.8zm9.4-9.5c-.8.9-1.7 1.3-2.4 1.8l-1.3 1.1-1.2.8c-.6.6-1.5 2.2-1.5 2.2s.7.7 1.4.4c2.4-.3 3.1-1.4 4-3.5.5-1 1-1.8 1-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.5 199.4a.6.4 62 1 0 .8-.3.6.4 62 0 0-.8.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m342.5 201.6-.2.3c2.9-1.3 6.6-3.9 7.8-6.5a17.2 17.2 0 0 1-7.6 6.2zm8.3-10.7c-.7 1-1.6 1.4-2.2 2l-1 1.1-1.2.9c-.5.6-1.2 2.2-1.2 2.2s.8.9 1.5.5a12 12 0 0 0 2.1-1.6c.5-.4.6-1.4 1.2-2.2.7-1 .8-1.9.8-2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M348.7 193.8c-1.4 1.6-3 3.1-4.6 3.8l-.2.4c2.6-1.5 3.7-2.8 4.9-4.1zm1-5.6c-.4 1-1 1.5-1.6 2l-.8 1.2-1 .9-.7 2.1s.6.6 1.2.2a12 12 0 0 0 1.8-1.6c.4-.5.6-1.4 1-2.2a4 4 0 0 0 .2-2.6zm-4.3-1.1-.5 1.6v-.4c0-.4.2-.9.4-1.3l.1.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M348.4 191a13 13 0 0 1-3.8 4v.3c2.2-1.6 3-3 3.8-4.2zm-5.6 10c-.2-.6-.3-1-.6-1.4.2.5.4 1 .4 1.6l.1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M341.9 181.3a.4.3 39.5 0 1-.5.5.4.3 39.5 0 1 .5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m343.1 182.5-1.2-.8 1.3 1v-.2zm5.6.4c-1.2 2.4-3.9 4-2.8 7.5 2.8 2.6 3-4.5 2.8-7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M346.1 177.7c-.5 2.4-2.6 4.4-1.2 7.6 4 1 2-4.3 1.2-7.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.7 174c2 3.7 2.5 5.9.2 8.3 0 0-1.3-1.1-1.6-3.3-.2-1.8 1.2-4 1.4-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.4 171.8c.5 2.4-1.5 3.5 1.4 6.5 2.1-2.4 1.1-3-1.4-6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M339.6 176c-3.3.3-2-2.6-3-5.3 2 1.5 4.7 2.1 3 5.3zm2.2 4.4c-1-4.4-4-2.6-5.6-4.6.9 2.9 2.1 4.8 5.6 4.6zm1.4 4.1c-2.6-.1-4.8-1.4-6.2-4.4 2.7 1.2 5.7 1.4 6.2 4.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.6 188.3c-1-1.2-1-2-1.5-2.7a9 9 0 0 0-3-3.7c0 3 .4 6.5 4.5 6.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.2 191.6a20 20 0 0 0-5.6-5.7c1 2.2.6 6.3 5.6 5.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.7 196c-5-.1-4.5-4.8-4.5-7 .9 1.4 2 2.5 2.8 3.5.9 1 1.8 2.2 1.7 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.1 198.8c-.4-1 0-1.4-1-2.3-1-1-2.8-2.7-3.7-4.6-.1 1.7-.2 4.4 1.2 5.3 1 .7 2 .9 3.5 1.6zm-4.3 7.3c-3.9-3-1.6-5.6-1.2-7.9 1 2.6 3.7 4.8 1.2 7.9zm1.6-29.2c-1.3-2.3-2-3.6-3.7-6 2 2.7 2.8 4.5 3.9 6.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.9 206.8c.1-3-.7-5.7-1.3-8.5.5 3 1.3 6 1 8.8l.3-.3zm4.6-7.4c-.4-1.8-4.1-3-5-7.5.7 4.4 4.5 5.5 4.8 8l.2-.5zm.8-2.5-.1.5c-.6-3-4-4.4-5-8.4 1.5 4.3 4.3 4.9 5.1 7.9zm.7-4.4c-1.7-2.6-4.1-3.6-6.4-6.7 2.1 3 4.8 4.4 6.4 7v-.3zm0-3.5c-2-.8-3.9-3-6-7.1 1.4 3 3 5.8 6 7.6v-.5zm-1-4c-2.1-1.7-5-2.8-7-4.9 1.7 2 5 3.3 7.1 5.2v-.3zm-1.6-4.3c-2.2-1.5-4.4-2-6.2-4.8 1.5 2.8 3.8 3.5 6.3 5l-.1-.2zm6.3 2.2c-.8 3.1-1.5 6.3-3.6 8.4v-.4c1-.5 2.5-3.7 3.6-8zm-2.6-5.1c-.1 3.2 0 6.5-1.7 8.3l-.1-.3c1.6-1.4 1.5-5 1.8-8zm-2.2-3.6c.5 2.8.6 5.3-.2 9.5l-.1-.3c.4-2.4 1-5 .3-9.2zm-3.4-2.3c1.1 2.4 2 4.8 1.2 7.4l-.2-.3c.9-2.4-.1-4.7-1-7zm-4.4 31.2c1.4 3.2-.4 5.6-2.5 7-1.6-4.7 1.8-4.2 2.5-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M336.2 203.1c.2 2-2 4.2-2.6 7.6l-.3.2c1-4 3-5.6 2.9-7.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.7 181.2a.3.4 1.9 1 1-.6-.1.3.4 1.9 0 1 .6.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.5 183v-1.6h-.2v1.7l.2-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M342.8 180.9a.3.4 2 0 1-.5.2.3.4 2 0 1 .5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m343.2 182.3-.5-1.1.4 1.4v-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.7 186.9a.4.3 80.5 1 1-.7 0 .4.3 80.5 0 1 .7 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.9 188.6a9.3 9.3 0 0 0-.4-1.4h-.1l.4 1.6v-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.6 187.2a.4.3 57 1 1-.5.5.4.3 57 0 1 .5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.8 188.6a8.8 8.8 0 0 0-1.2-1v.1l1.3 1.1-.1-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M343.4 199.1a.3.4 12.7 1 1-.7-.2.3.4 12.7 0 1 .7.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M342.8 200.8c.2-.5.2-1 .2-1.5a9 9 0 0 1-.4 1.7l.2-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344 199.9a.3.4 50.5 1 0 .5.4.3.4 50.5 1 0-.5-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m342.7 201 1.3-.8v.1a8.7 8.7 0 0 0-1.3 1v-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M340.7 205a.3.4 40.4 1 1-.4-.6.3.4 40.4 0 1 .4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m339.5 206.2.9-1.3h-.1l-1 1.3h.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.8 204.5a.5.6 10 0 0 1 .1.5.6 10 1 0-1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M339.4 205c-.3.7 0 1 0 1.2l-.1.3c-.2-.4-.3-.8-.1-1.5h.2zm-12.1 9.5c-.7 0-1-.4-1.3-.8h-.3c.4.5.8 1 1.5 1v-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.3 215.2a.6.4 9.5 0 1 .2-.9.6.4 9.5 1 1-.2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M332.7 206a5.5 5.5 0 0 1-4 6.4c-.9-4 2.8-4 4-6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M332.7 206.1a21 21 0 0 1-4.8 7.2h-.5c2.7-2.1 4.2-4.9 5.3-7.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.8 213.3a.5.4 9.8 1 1-.4-.7.5.4 9.8 0 1 .4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M326 213.8a8 8 0 0 0 1.4-.7h-.1l-1.7.6h.3zm2.5-5c0 1.2-1 2.4-2 3.2-.9.9-1 1.2-2.2 1.6-1.2-2.8 2.8-3.3 4.2-4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M328.5 208.8c-1.3 2.5-3.5 3.8-4.7 5.4h-.1c1.6-2.2 3-2.7 4.8-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.4 175.5c-1.7 2.9-4.4 8-5.1 12a22.5 22.5 0 0 0 7 20.8c5.2 4.7 13.3 6 16.6 6.8 3.4.7 5.8 1.8 6.4 2.5 0-.5 0-1-.5-1.6-1.6-.7-4.2-1-7.8-1.8-7.2-1.5-14.9-4.2-19-12.2-5.4-10.3-2.2-18.4 2.5-26.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.1 213.6c-.2.4-4 3.7-7.5 3.5-2.5-.2-2.9-.8-2.9-.8s-.2-.7 2-1.1c2.3-.5 6.2-2 8.4-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.8 216.3c2.7.3 5.5-.8 7.7-1.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.2 208.7a11 11 0 0 1 4.6 3.7c.9 1.5.7 1.9.7 1.9s-.2.3-1.3-1c-1-1.2-3.4-3.3-4-4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.5 214.2c-.9-1.7-2.5-3-3.7-4.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.3 175.8c-.1-.3.3-3.4 2-4.4 1.3-.7 1.8-.5 1.8-.5s.3.3-.5 1.3c-1 1-2.1 3.2-3.3 3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M304 171c-1.4.7-2.3 2.2-3 3.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M299.4 177.4c-.2-.2-1-3-.2-4.7.5-1.3.9-1.4.9-1.4s.3 0 .1 1.3c-.2 1.3-.2 3.8-.8 4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300 171.4c-.6 1.3-.6 3-.6 4.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M299.4 177.5c.2 0 2.7-.8 3.9-2.1.8-1 .8-1.3.8-1.3s-.2-.2-1.1.5c-1 .8-3 2-3.6 2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M304 174.1c-.9 1.1-2.2 2-3.3 2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.2 179.6a10 10 0 0 1-.9-5.2c.3-1.6.6-1.7.6-1.7s.4 0 .4 1.4c0 1.5.3 4.2-.1 5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298 172.7c-.5 1.7-.2 3.6 0 5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M297.3 181.6c-.3-.2-2.3-3-2-5.2 0-1.7.5-2 .5-2s.3-.1.6 1.4c.3 1.6 1.2 4.3.9 5.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.7 174.5c-.2 1.8.5 3.7 1 5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.2 184.1a9.9 9.9 0 0 1-2.4-4.7c-.2-1.5 0-1.8 0-1.8s.4-.1.8 1.3c.4 1.4 1.6 3.9 1.6 5.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M293.9 177.7c.1 1.7 1 3.4 1.5 4.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.2 179.6c.3 0 3.2-.2 4.6-1.7 1-1 1-1.5 1-1.5s-.2-.3-1.4.4c-1.1.8-3.4 1.8-4.2 2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.7 176.5c-1 1.2-2.7 1.9-4 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M297.3 181.6c.2 0 3.2 0 4.6-1.4 1.1-1 1-1.4 1-1.4s0-.3-1.2.3c-1.2.7-3.6 1.5-4.4 2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303 178.9c-1.2 1-2.8 1.7-4.1 2.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.4 184.2c.2 0 3.4-.2 4.9-1.7 1-1.1 1-1.5 1-1.5s-.1-.4-1.4.3c-1.2.8-3.7 1.8-4.5 2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M302.3 181c-1.2 1.3-2.9 2-4.3 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.8 183s-.3-.5-.3-1c0-.6.2-.8.2-.8l-.2-.2-.1.9v.3l-.5-.5a10.8 10.8 0 0 1-.1-.4h-.2l.3.7c.5.4.8 1.1.8 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.6 180.3a.5.4 83.5 1 1 .1 1 .5.4 83.5 1 1-.1-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.8 180.3a.4.5 19.3 1 1-.3 1 .4.5 19.3 1 1 .3-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m296.7 183 1-.7c.3-.4.3-.7.3-.7h.2l-.4.8-.2.2.6-.1.4-.2.1.1-.6.4c-.6 0-1.3.3-1.3.3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M299.4 181.6a.4.5 45.6 1 0-.8.8.4.5 45.6 1 0 .8-.8z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.4 180.8a.4.5 19.8 1 0-.3 1 .4.5 19.8 1 0 .3-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.4 186.9c-.2-.2-2.4-2.6-2.8-4.8-.3-1.6 0-1.9 0-1.9s.3-.1.8 1.3c.6 1.5 2 4 2 5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M292.6 180.3c.2 1.8 1.2 3.5 2 4.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.6 186.9c.3 0 3.5-.4 5-2 1-1.3 1-1.7 1-1.7s-.2-.4-1.4.5-3.8 2-4.6 3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.5 183.2c-1 1.4-2.8 2.2-4.2 3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.2 189.6c.3 0 3.5-.9 5-2.6 1.1-1.3 1-1.7 1-1.7s-.1-.2-1.4.7c-1.2 1-3.8 2.5-4.6 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.2 185.4c-1.1 1.4-3 2.4-4.3 3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 189.6c-.3 0-3.3-2.2-3.8-4.5-.3-1.7 0-2 0-2s.5-.3 1.2 1.2c.7 1.4 2.5 3.8 2.7 5.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.3 183.2c.3 1.8 1.5 3.5 2.5 4.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.2 193a11 11 0 0 0 4.6-3.6c.9-1.5.7-1.8.7-1.8s-.2-.3-1.3 1c-1 1.2-3.4 3.1-4 4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.5 187.7c-1 1.6-2.5 3-3.8 4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 193.2c-.3 0-3.6-1.7-4.4-4-.7-1.6-.4-2-.4-2s.4-.4 1.3 1c1 1.3 3.1 3.5 3.5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M290.3 187.2c.5 1.8 2 3.4 3.2 4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 191.6s-.4-.5-.5-1c-.2-.6 0-.9 0-.9h-.3v.8l.2.4-.6-.4-.3-.5-.2.2.5.6c.6.2 1.1 1 1.1 1"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M293 189a.6.4 69.4 1 1 .4 1.2.6.4 69.4 1 1-.4-1.1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M294.3 188.7a.4.6 5.2 1 1 0 1.2.4.6 5.2 1 1 0-1.2z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295 191.6s.6-.5.8-1c.3-.5.2-.8.2-.8h.3l-.3.8-.1.4.6-.3.4-.4.1.2-.6.5c-.6.1-1.2.7-1.2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M297.5 189.4a.4.6 31.5 1 0-.6 1 .4.6 31.5 1 0 .6-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.3 188.9a.4.6 5.7 1 0-.1 1.1.4.6 5.7 1 0 0-1.1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.4 196.2a12 12 0 0 1-5.1-4c-1-1.7-.8-2.1-.8-2.1s.2-.3 1.4 1c1.3 1.4 3.8 3.6 4.5 5.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M289.5 190.2c1 1.8 2.8 3.3 4.2 4.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.6 196.2c.4 0 4-1.9 5-4.4.6-1.8.3-2.3.3-2.3s-.4-.3-1.4 1.2c-1 1.4-3.4 3.8-3.9 5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.9 189.6c-.7 2-2.3 3.7-3.6 5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.6 199.3c.3-.1 3.7-2.3 4.5-4.8.7-1.9.4-2.3.4-2.3s-.4-.3-1.3 1.3c-1 1.5-3.2 4-3.6 5.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.5 192.3c-.7 2-2.2 3.8-3.4 5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M296.3 199.3c-.4 0-4.7-1.3-6.2-3.8-1-2-.9-2.5-.9-2.5s.4-.4 1.8 1c1.5 1.4 4.5 3.5 5.3 5.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M289.3 193.1c1.1 2 3.3 3.6 5 4.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.1 205.7c.3-.2 2.6-3 2.8-5.6.2-1.8-.2-2-.2-2s-.3-.2-.8 1.4c-.5 1.7-1.8 4.6-1.8 6.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M302.8 198.1c-.1 2-1 4-1.8 5.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300 205.6c-.5.2-5.4 0-7.7-2.1-1.6-1.6-1.5-2.2-1.5-2.2s.2-.5 2.1.5c2 1 5.7 2.3 7 3.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M290.9 201.4c1.7 1.7 4.4 2.6 6.5 3.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.2 203c-.4.1-4.8-1-6.8-3.1-1.6-1.6-1.5-2.1-1.5-2.1s.2-.4 2 .8c1.6 1.2 5 3 6.3 4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M290 197.9c1.6 1.7 4 3 5.8 4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.4 203c.4-.2 3.6-2.9 4-5.6.2-2-.2-2.5-.2-2.5s-.5-.2-1.2 1.5c-.7 1.8-2.6 4.7-2.6 6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M302.2 195c-.2 2.2-1.5 4.3-2.5 6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m297.4 201.5-1-.8c-.4-.5-.5-.9-.5-.9h-.3a8 8 0 0 0 .8 1.2l-.8-.1-.5-.3v.2l.7.4c.7 0 1.6.5 1.6.5"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M294.2 199.8a.7.5 45.9 1 1 1 1 .7.5 45.9 1 1-1-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.4 198.8a.7.5 71.6 1 1 .4 1.3.7.5 71.6 1 1-.4-1.3z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M297.5 201.4s.4-.6.4-1.3l-.1-1h.2a7.8 7.8 0 0 0 .1 1.3l.6-.5.2-.6.2.1-.4.8c-.6.5-1 1.4-1 1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M299.1 198.2a.5.7 8 1 0-.2 1.3.5.7 8 1 0 .2-1.3z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M297.6 198.1a.7.5 72.2 1 0 .4 1.3.7.5 72.2 1 0-.4-1.3z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.8 207.6c-.3.2-4.3 1-6.8-.3-1.8-.9-2-1.4-2-1.4s0-.5 2 0c1.8.4 5.2.7 6.8 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M293.1 206c2 1 4.4 1.2 6.3 1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M302 207.5c.2-.1 2-2.5 1.9-4.8 0-1.7-.4-2-.4-2s-.3-.2-.6 1.3c-.2 1.5-1 4-.9 5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.5 200.8c.2 1.8-.4 3.6-.9 5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M305.5 210.3c-.3.3-5 1.5-8 .3-2-1-2.1-1.5-2.1-1.5s0-.5 2.2-.1c2.1.3 6.2.4 8 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.5 209.2c2.2 1 5 1 7.3 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M305.8 210.3c.2-.3 1.2-3.8 0-5.6-1-1.4-1.5-1.3-1.5-1.3s-.4 0 0 1.5c.3 1.5.5 4.3 1.5 5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M304.4 203.4c1 1.4 1.1 3.4 1.3 5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.3 208.7s-.5.4-1.2 0c-.6-.3-.8-.7-.8-.7l-.3.2 1 .7.3.2-.9.2-.6-.1v.3h1a13.6 13.6 0 0 0 1.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M299.5 208.7a.8.5 24.1 1 1 1.4.7.8.5 24.1 1 1-1.4-.7z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M300.3 207.2a.8.5 49.9 1 1 1 1.2.8.5 49.9 1 1-1-1.2z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.4 209s.6-.5.2-1.2l-.6-.9.1-.2.7 1 .2.3.2-.9v-.6h.2v1l-.5 1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.7 205.1a.8.5 69.5 1 0 .6 1.5.8.5 69.5 1 0-.6-1.5zm-1.5.8a.8.5 43.7 1 0 1 1 .8.5 43.7 1 0-1-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.3 211.8c-.3.4-4.2 3-7.4 2.3-2.3-.4-2.6-1-2.6-1s-.1-.6 2-.8c2.2-.1 6-1 8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.4 213.1c2.5.6 5.2 0 7.3-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M310.8 212.6s-.5.7-1.3.5a3 3 0 0 1-1.2-.5l-.3.3 1.3.4.5.1-.9.6-.7.1v.3l1.2-.3c.2 0 1.4-1 1.4-1"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M306.6 214a.9.6 5.4 1 1 1.7.2.9.6 5.4 1 1-1.7-.1zm.4-2a.9.6 31.2 1 1 1.5 1 .9.6 31.2 1 1-1.5-1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M309.5 212.2c.2-.3.7-4-1-5.6-1.1-1.2-1.7-1-1.7-1s-.5.1.1 1.5c.7 1.4 1.4 4.2 2.6 5.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M306.8 205.6c1.4 1.2 1.9 3.2 2.3 4.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.4 213s.2-.7-.5-1.2c-.6-.5-1.1-.6-1.1-.6v-.4l1.2.7.4.3c.4.3 0-.8-.2-1l-.4-.7.3-.2.5 1 .2 2"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M309.7 209a.9.6 42.7 1 0 1.3 1.1.9.6 42.7 1 0-1.3-1.2zm-1.2 1.5a.9.6 17 1 0 1.7.6.9.6 17 1 0-1.7-.6z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M319.1 209s-2.3 5.4-1.5 6c0 0 2.4-4.3 4.4-5.8 1.1-1 1.8 0 2-1 0-.8-3-2.1-3-2.1l-1.8 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M319.1 209s-2.3 5.4-1.5 6c0 0 2.4-4.3 4.4-5.8 1.1-1 1.8 0 2-1 0-.8-3-2.1-3-2.1l-1.8 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M310.6 213.1s-3.4 6-2.5 6c.8 0 4.5-7.5 4.5-7.5l-1.3.2-.7 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M310.6 213.1s-3.4 6-2.5 6c.8 0 4.5-7.5 4.5-7.5l-1.3.2-.7 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M311.6 211.5s-3.6 5.8-2.7 5.9c1 .1 4.8-7.4 4.8-7.4l-1.3.1-.8 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.6 211.5s-3.6 5.8-2.7 5.9c1 .1 4.8-7.4 4.8-7.4l-1.3.1-.8 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M312.3 210.5s-4 5.4-3.2 5.6c1 .2 5.4-7 5.4-7l-1.3.1-.9 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.3 210.5s-4 5.4-3.2 5.6c1 .2 5.4-7 5.4-7l-1.3.1-.9 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M313.4 209.5s-4.8 4.9-3.9 5.2c.8.3 6.2-6.2 6.2-6.2l-1.2-.1-1.1 1.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.4 209.5s-4.8 4.9-3.9 5.2c.8.3 6.2-6.2 6.2-6.2l-1.2-.1-1.1 1.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M313.6 207.7s-4.2 5.4-3.3 5.6c.9.2 5.5-6.9 5.5-6.9l-1.3.1-1 1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.6 207.7s-4.2 5.4-3.3 5.6c.9.2 5.5-6.9 5.5-6.9l-1.3.1-1 1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M312.5 212.4s-4 5.5-3.2 5.6c1 .2 5.4-7 5.4-7l-1.3.1-.9 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.5 212.4s-4 5.5-3.2 5.6c1 .2 5.4-7 5.4-7l-1.3.1-.9 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.8 211.3s-2.4 4.5-2.1 4.6c.3.2 3.1-2.5 4.6-5.2 1.4-2.6-2.6.5-2.6.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.8 211.3s-2.4 4.5-2.1 4.6c.3.2 3.1-2.5 4.6-5.2 1.4-2.6-2.6.5-2.6.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M315 210.8s-2.3 5.5-1.5 6c0 0 3-3.3 3.7-5.9.8-2.6 0-.1 0-.1l-.2-2.9-2 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M315 210.8s-2.3 5.5-1.5 6c0 0 3-3.3 3.7-5.9.8-2.6 0-.1 0-.1l-.2-2.9-2 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M313.8 210.4s-4.7 4.8-3.9 5.1c.9.3 6.3-6.1 6.3-6.1l-1.3-.1-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.8 210.4s-4.7 4.8-3.9 5.1c.9.3 6.3-6.1 6.3-6.1l-1.3-.1-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.2 211s-4.7 5-3.9 5.2c.8.3 6.2-6.2 6.2-6.2h-1.2l-1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.2 211s-4.7 5-3.9 5.2c.8.3 6.2-6.2 6.2-6.2h-1.2l-1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.6 211.8s-4.8 4.9-4 5.2c1 .3 6.3-6.2 6.3-6.2h-1.2l-1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.6 211.8s-4.8 4.9-4 5.2c1 .3 6.3-6.2 6.3-6.2h-1.2l-1.1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M315 205.1s-3.6 4.5-3 5.3c.4.8 3.6-2 4.7-4 1-2-1.7-1.4-1.7-1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315 205.1s-3.6 4.5-3 5.3c.4.8 3.6-2 4.7-4 1-2-1.7-1.4-1.7-1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.8 209.9s-3 5.8-2.2 5.5c.8-.4 3.8-4.7 4.2-5.7.3-1 .2-2 .2-2l-2.3 1.5.2 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.8 209.9s-3 5.8-2.2 5.5c.8-.4 3.8-4.7 4.2-5.7.3-1 .2-2 .2-2l-2.3 1.5.2 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.8 208s2.5-4.6 0 .9-3.4 4.5-3.4 4.5c-.2-.3 2.2-4 2.2-4s1.7-2.8 2.1-3.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.8 208s2.5-4.6 0 .9-3.4 4.5-3.4 4.5c-.2-.3 2.2-4 2.2-4s1.7-2.8 2.1-3.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M317.5 207.4s2.8-4.6 0 .9c-2.8 5.4-3.9 4.5-3.9 4.5-.2-.3 2.5-4 2.5-4s2-2.8 2.4-3.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M317.5 207.4s2.8-4.6 0 .9c-2.8 5.4-3.9 4.5-3.9 4.5-.2-.3 2.5-4 2.5-4s2-2.8 2.4-3.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.5 205.5s-3.5 4.5-3 5.2c.5.8 3.7-2 4.7-4s-1.7-1.4-1.7-1.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M352.8 251a32.8 37 0 1 1-65.6 0 32.8 37 0 1 1 65.6 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#390",
    strokeWidth: ".8",
    d: "M293.7 251c0-17 12-30.2 26.3-30.2s26.3 13.1 26.3 30.3",
    color: "#000",
    fontFamily: "Sans",
    fontWeight: "400",
    overflow: "visible",
    style: "line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#eee",
    strokeWidth: ".1",
    d: "M287.2 253c1 19.5 15.3 35 32.8 35s31.9-15.5 32.8-35h-65.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M352.8 251a32.8 37 0 1 1-65.6 0 32.8 37 0 1 1 65.6 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d52b1e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.5 225.4c-.3 1.4 0 2.5.7 3.6.6.9 1 1.8.9 2.7a7.9 7.9 0 0 0-.7.5l-5.5-3.7 3.7 5.5a8 8 0 0 0-.2.2 4.9 4.9 0 0 0-3-.3 5 5 0 0 1-3.7-.8 4.5 4.5 0 0 0 3.1 2.1 5 5 0 0 1 2.6 1.3 8 8 0 0 0-.2.8l-6.6 1.3 6.6 1.3v.3a4.9 4.9 0 0 0-2.4 1.9 5 5 0 0 1-3 2c1.3.4 2.5 0 3.6-.7a5 5 0 0 1 2.7-.9l.4.7-3.6 5.6 5.4-3.7.3.2a4.9 4.9 0 0 0-.4 3 5 5 0 0 1-.7 3.6 4.5 4.5 0 0 0 2-3.1 4.9 4.9 0 0 1 1.4-2.5l.8.2 1.3 6.5 1.3-6.5h.3a4.9 4.9 0 0 0 1.8 2.3 5 5 0 0 1 2.1 3.1 4.4 4.4 0 0 0-.7-3.6 4.9 4.9 0 0 1-.9-2.8l.7-.4 5.5 3.7-3.7-5.5.2-.3c1 .5 2 .6 3 .4a5 5 0 0 1 3.7.7 4.5 4.5 0 0 0-3.1-2 4.9 4.9 0 0 1-2.6-1.4l.2-.8 6.6-1.3-6.6-1.2a7.9 7.9 0 0 0 0-.4 4.9 4.9 0 0 0 2.4-1.8 5 5 0 0 1 3-2 4.5 4.5 0 0 0-3.6.7 4.9 4.9 0 0 1-2.7.8 7.9 7.9 0 0 0-.4-.7l3.7-5.5-5.5 3.7a8 8 0 0 0-.3-.2c.5-1 .6-2 .4-3a5 5 0 0 1 .7-3.6 4.5 4.5 0 0 0-2 3 5 5 0 0 1-1.4 2.6 8 8 0 0 0-.8-.2l-1.3-6.5-1.2 6.5h-.4a4.9 4.9 0 0 0-1.8-2.3 5 5 0 0 1-2-3.1z",
    overflow: "visible",
    style: "marker:none"
  }), /*#__PURE__*/React.createElement("use", {
    width: "330",
    height: "330",
    fill: "#fcbf49",
    strokeWidth: "1.1",
    transform: "rotate(22.5 -417.9 955.8) scale(.14262)"
  }), /*#__PURE__*/React.createElement("use", {
    width: "330",
    height: "330",
    fill: "#fcbf49",
    strokeWidth: "1.1",
    transform: "matrix(-.14262 0 0 .14262 334 232.7)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M325.9 236.7c-1.7-1.4-3.8-1.6-4.9-.6-.8 1.1-.8 2.4.2 3.8a.5.5 0 0 0-.3.2 4.9 4.9 0 0 1-.3-4.1c1.5-1.3 3.7-1.4 5.2.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M323.3 236.3c-1 0-1.2.2-1.6.5-.4.4-.6.3-.7.4 0 0 0 .3.1.2.2 0 .5-.2.9-.6.4-.3.8-.3 1.3-.3 1.3 0 2 1 2.1 1 .2 0-.7-1.2-2.1-1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M325 237.5c-1-1-2.7-1-3.4 0h.2c.8-1 2.5-.6 2.6 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "323.1",
    cy: "237.4",
    r: ".6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M321.6 237.6c.7.6 2.2.7 3.3-.1h-.5c-.7.7-1.8.6-2.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M325 237.8c-1.2 1-2.4.9-3.1.5-.7-.5-.7-.6-.6-.6l.8.4c.6.3 1.5.3 2.9-.2m-3.5 2a.4.4 0 1 1-.6.5c0 .1-.3.6-.9.6h-.1l.1.2c.1 0 .6 0 .9-.2a.6.6 0 1 0 .6-1m.9 3c-.7-.5-1-1-1.7-1a2 2 0 0 0-.7.1h-.1l.1.2c.3 0 .7-.3 1.2 0l1.2.7m-.3 0c-1.4-.5-1.7-.2-2.1-.2h-.1l.1.3c.6 0 .9-.4 2.1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M322.4 243c-1.6-.2-1.1.8-2.4.8h-.1l.1.2c1.6 0 .9-.9 2.4-1m-8.2-6.3c1.6-1.4 3.7-1.6 4.8-.6.8 1.1.8 2.4-.2 3.8a.5.5 0 0 1 .3.2 5 5 0 0 0 .3-4.1c-1.5-1.3-3.7-1.4-5.2.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M316.7 236.3c1 0 1.2.2 1.6.5.4.4.6.3.7.4 0 0 0 .3-.1.2a4.1 4.1 0 0 1-.9-.6c-.4-.3-.8-.3-1.3-.3-1.3 0-2 1-2.1 1-.2 0 .7-1.2 2.1-1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M315 237.5c1-1 2.7-1 3.4 0h-.2c-.8-1-2.5-.6-2.6 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-316.9",
    cy: "237.4",
    r: ".6",
    transform: "scale(-1 1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M318.4 237.6c-.7.6-2.2.7-3.3-.1h.5c.7.7 1.8.6 2.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M315 237.8c1.2 1 2.4.9 3.1.5.8-.5.8-.6.6-.6l-.8.4c-.5.2-1.5.3-2.9-.2m3.5 2a.4.4 0 1 0 .6.5c0 .1.3.6.9.6h.1l-.1.2c-.1 0-.6 0-.9-.2a.6.6 0 1 1-.6-1m-.9 3c.7-.5 1-1 1.7-1l.7.1h.1l-.1.2c-.3 0-.7-.3-1.2 0l-1.2.7m.3 0c1.4-.5 1.7-.2 2.1-.2h.1l-.1.3c-.6 0-.9-.4-2.1-.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M317.6 243c1.6-.2 1.1.8 2.4.8h.1l-.1.2c-1.6 0-.9-.9-2.4-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".1",
    d: "M323.2 258.4c1.6.2 3.3.2 4.7-.3a9.9 9.9 0 0 1 4.2-.6c0-.2.5-.3.2-.5-.5-.3-1.2-.3-1.8-.6-1-.5-1.7-1.3-2.7-2-.1 0-.6-.3-.6-.5 2.2 3.2 7.5 1.5 12 1.2.4.1 1.5-.2 2.4-.5 1-.4 3.6 0 4.3-.5l-1.3-1c-.6-.8-2.3-.7-3-1.5-1.3-1.5-3.3-1.9-4.9-3-.3-.3-1-.2-1.6-.3-.6-.6 0-.5-5-4.7-4.5-1.8-4.2-3.2-7-4.3-1-.5-1.9-1.4-2.7-1.1a30 30 0 0 0-6.3 3c-1.2.6-2.7 2-3.8 2.8-.2.2-3.4 2.9-7 4.8a115 115 0 0 1-9.2 4.8c8-.4-7.3 2.3 29.1 4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303.3 249c2-1 10-5.3 12.4-8.4-.4 0 .6 1 .5 1.4.8 0 .4-1 1-1 .5 0 .9-.1 1.3-.3.5 0 .2.2.2.4-.7 1.2-2 2-3.2 2.9l.2.4c.4 0 .9 0 1.1-.2l.1-.3c.4.1.3.5.1.7-.3.6-1.4.5-1.8 1a6.2 6.2 0 0 1-1.5 1.7c.5-.4 1-1 1.7-1 1 0 1.3-.7 2.2-.9.9-.1 1.5-.9 2.2-1.4-.3.4-.9.7-.7 1.2a.6.6 0 0 0 .6.2c-.7.8-2 1.4-2.4 2.4-.4-.2-.7.2-1 .2-.4.1-.3.8-.6 1-1.2.7-1.8 1.8-2.3 2.7l-1.3.7c-.7.3-4.6 3.4-4.7 3-.3-2.1-4.3 1.6-13.3-1.6m30.6-.1-.2-.2c.1-.3-.5-.4-.5-.7 1 0 1.8 1.2 2.5.5.1-.1-.3-.4.4-.6 0 0-.2-.1-.1-.2h-.8l-.8-.3c-.3-.1-.5-.5 0-.6 1-.1 1.9.5 2.6.2.6-.3 1.1-.3 1.7-.5.3-.1 1.2 0 .9.2-.2.2-.7.1-1 .2-.5.1-1 .4-1.4.6.3 0 .2.3.7.2a6 6 0 0 1 2-.4v-.5h.3c-.3-.5.6-.2 1-.6l.1.1c-.5.2-.3.5-.4.8 0 0-.3 0-.2.2.2.2.2-.2.5 0h.6c.3 0 .7-.1.5-.4-.3-.2-.6-.5-.6-.8l-.1-.1c.5 0 1 .2 1.1.4.3.3.3.6.8.7.8.2.7-.2.7-.6.7 0 1.6.3 1.4.6 0 .3-.6.5-1 .5s-.2.3-.4.3c-.4 0-.9 0-1 .2-.2.2 0 .7.3.9.4.2 1.2 0 1.8 0 .1-.3.5-.4.9-.6.4-.3-.2-.5-.5-.7-.3 0 0-.1 0-.3.3-.3.9 0 1-.2.1-.3-.1-.6.1-.8.2-.1.5.1.4.3l.7-.2c.3 0 .5.3.4.4-.5.2-.8.4-.7.8 0 .2-.5.3-.3.5.4.3.4.5.5.9.2.3 1 .4 1.6.3-.2-.7 1.4-.4 2-.5.1 0 .1-.1 0-.2-.3-.2-.3-.3-.3-.6l-.1-.1c1 .3 2.8.8 3.6 1.4-1 .2-2.8-.2-3.8 0a15 15 0 0 1-3.7.6c-.5 0-1-.3-1.6-.3m-11.3-.7-.4-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M321.2 259.1c2 0 2.2 1.4 3.5.1 1.1.2 2.2-.2 2.2-.3 2.7.6 11.1-.2 10.6-.8-.9-1-2.3-1.4-3.4-2.2l-1.1-.4c-.7-.2-1.5 0-2-.3l-2.6-1.5c-.5-.4-.7-1-1.2-1.4-.6-.4-1.4-.5-2-.7-.9-.4-1.4-1.2-2.2-1.9l-1.1-.4c-.7-.3-1.2-1.1-1.9-1-1 .2-1.7 1-2.8 1.6-1 .4-1.4 1.1-2.2 1.6-.2.2-2.6 1.8-5.3 2.9a72.6 72.6 0 0 1-6.6 2.5s2.4 1.7 8 1.5l3.4 1 1.9-.3h4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M309.8 254.8c1.2-.6 6-2.9 7.4-4.5-.1 0 .5.5.4.7.5 0 .2-.4.6-.5l.8-.1c.3 0 .1 0 .1.2-.4.6-1.3 1-2 1.5l.2.2h.7v-.3c.3.1.2.3.1.4-.2.4-.9.3-1.1.6a3 3 0 0 1-1 .9c.4-.2.7-.5 1.1-.5.6 0 .8-.4 1.3-.5.6-.1 1-.5 1.4-.8-.2.2-.5.4-.4.7l.4.1c-.4.4-1.2.7-1.5 1.2l-.6.1c-.3.1-.2.5-.4.6-.7.3-1 1-1.4 1.4l-.8.4c-.4.2-2.8 1.8-2.8 1.6-.2-1.1-2.6.5-8-1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00a6de",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M320 214.2c-18.1 0-32.8 16.5-32.8 36.9S301.9 288 320 288s32.8-16.5 32.8-37c0-20.3-14.7-36.9-32.8-36.9zm0 8.2c13.2 0 24.7 12.3 24.7 28.7s-11.5 28.6-24.7 28.6-24.7-12.2-24.7-28.6c0-16.4 11.5-28.7 24.7-28.7z",
    color: "#000",
    fontFamily: "Sans",
    fontWeight: "400",
    overflow: "visible",
    style: "line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.7 266.8c0 .2 0 .2-.4.3-.4 0-.5 0-.5-.2s.1-.2.5-.2c.3-.1.4-.1.4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "m324.8 266.8-.5.2h-.5c0-.2.2-.2.5-.3h.5zm-2.8 9c.8-2.2 1-3.8-.2-6 2-1.9 3.3-1.2 4.6 0-1.2 2.3-1 4-.2 6a4 4 0 0 1-4.2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324 268.6v7.7h.1v-7.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.4 268.6a44.6 44.6 0 0 0-.3 7.7c0-2.9.2-5.3.4-7.6zm.7-2.4c-.4.4-.6.4-.4 1 .4-.3.4-.5.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.3 266.4c.2.3.6.4.3 1-.4-.3-.3-.4-.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.3 267c.2.3.5.3.3.9-.3-.3-.4-.3-.4-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.2 267.4c.2.2.5.4.3 1-.4-.4-.3-.4-.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324 267.9c.3.2.7.3.4 1-.4-.4-.2-.5-.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324 268.4c.2.2.6.3.4 1-.3-.4-.4-.4-.4-1zm1.3-1.7c-.2.1-.6.1-.6.8.5-.3.5-.3.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.3 267.1c-.2.2-.7.2-.7.7.6-.2.5-.2.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.2 267.6c-.2.1-.6 0-.7.7.6-.3.6-.2.7-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.2 268.1c-.2 0-.7 0-.7.7.4-.1.4-.3.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325 268.6c-.4.1-.5 0-.6.7.5-.3.4-.2.5-.7zm.2.3c-.7 2.1-.8 4-.7 7.4h.1c0-3.4.1-5.2.8-7.3a2.8 2.8 0 0 0-.1 0zm1.2-2.2c-.4.3-.6.2-.5.8.4-.1.4-.3.5-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.6 266.8c.2.2.5.4.1 1-.3-.4-.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.4 267.4c.3.3.5.3.2.8-.2-.3-.3-.3-.2-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.3 267.7c.1.3.4.4.1 1-.3-.4-.3-.4-.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325 268.1c.3.3.6.5.3 1-.4-.4-.2-.5-.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.9 268.6c.2.3.5.5.2 1-.3-.4-.3-.4-.2-1zm1.6-1.4c-.2.2-.6 0-.7.7.5-.2.5-.2.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.4 267.7c-.2 0-.6 0-.8.5.6-.1.6 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.3 268c-.3.2-.7 0-.9.7.7-.2.6-.2.9-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.1 268.6c-.2 0-.6-.2-.8.5.4 0 .4-.2.8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.8 269c-.3 0-.5 0-.7.6.5-.2.5-.1.7-.6zm.1.4c-1 1.9-1.1 3.6-.7 6.8l.2-.1c-.4-3-.2-4.7.6-6.6zm1.6-2.2c-.5.2-.7.2-.7.8.4-.2.5-.4.7-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.7 267.2c.1.3.4.5 0 1-.3-.5-.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.4 267.8c.2.2.4.4 0 .8 0-.4-.2-.4 0-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.2 268c.1.3.4.5 0 1-.3-.4-.2-.4 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326 268.5c0 .3.4.5 0 1-.3-.5 0-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.7 268.9c.2.3.5.5 0 1-.1-.4-.2-.5 0-1zm1.8-1.1c-.2 0-.6-.1-.8.5.6-.1.5 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.3 268.2c-.2 0-.6-.1-.8.4.6 0 .6 0 .8-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.1 268.5c-.2 0-.6 0-.8.5.6 0 .5 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327 269c-.3 0-.7-.3-1 .4.5 0 .5-.1 1-.4zm-.5.4c-.3 0-.4 0-.7.5.5-.1.5 0 .7-.5zm-3-.7c.2 2.4.4 4.8.4 7.6h.1c.1-2.9 0-5.3-.4-7.6zm-.6-2.6c.4.4.5.4.4 1-.4-.3-.4-.5-.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.7 266.4c-.3.2-.6.4-.4 1 .4-.3.4-.4.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.7 267c-.3.3-.5.3-.3.8.2-.3.3-.2.3-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.8 267.4c-.2.2-.5.3-.3 1 .4-.4.3-.4.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324 267.9c-.3.2-.7.3-.5 1 .5-.4.2-.5.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324 268.4c-.3.2-.6.3-.4.9.3-.3.4-.4.4-.9zm-1.3-1.8c.2.2.6.2.6.8-.5-.3-.5-.2-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.7 267.1c.2.1.6.1.6.7-.5-.3-.5-.2-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.8 267.5c.2.1.6.1.6.8-.5-.3-.5-.3-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.8 268c.2.1.7 0 .7.8-.4-.1-.4-.4-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323 268.5c.3.2.5.1.5.8-.4-.3-.4-.3-.5-.8zm-.2.5a3.8 3.8 0 0 0-.2.1c.7 2 1 3.9.9 7.2h.1a19 19 0 0 0-.8-7.3zm-1.2-2.4c.4.3.5.3.5.8-.4-.1-.4-.3-.5-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.4 266.7c-.2.3-.5.4-.2 1 .3-.4.3-.4.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.6 267.3c-.3.3-.6.4-.2.9.2-.4.3-.4.2-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.7 267.6c-.2.3-.5.5-.1 1 .3-.4.2-.4.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323 268.1c-.3.3-.6.4-.3 1 .4-.5.1-.5.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323 268.6c-.1.2-.5.4-.1 1 .2-.4.3-.5.2-1zm-1.5-1.5c.2.1.6 0 .7.7-.6-.2-.5-.2-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.6 267.6c.2 0 .6 0 .7.5-.5-.1-.5 0-.7-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.7 268c.2 0 .7 0 .8.6-.6-.2-.6-.2-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.9 268.5c.2 0 .6-.2.8.6-.4 0-.5-.3-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.2 269c.3 0 .4 0 .6.5-.5-.2-.4-.1-.6-.6zm0 .5a4.1 4.1 0 0 0-.2 0c.9 2 1 3.6.7 6.6h.2c.3-3 .2-4.6-.8-6.6zm-1.7-2.5c.4.3.6.2.6.8-.4-.1-.5-.3-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.3 267c-.1.3-.4.6 0 1 .3-.4.2-.4 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.6 267.6c-.2.3-.5.4-.1.9.1-.4.3-.4 0-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.8 268c-.2.2-.4.4 0 1 .2-.5.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322 268.4c-.1.3-.4.5 0 1 .3-.5 0-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.3 268.8c-.2.3-.5.5-.1 1 .2-.4.2-.5 0-1zm-1.8-1.2c.2 0 .6 0 .8.5-.6 0-.6 0-.8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.6 268c.3 0 .7 0 .9.5-.6-.1-.6 0-.9-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.8 268.4c.3 0 .7 0 1 .5-.7-.1-.7 0-1-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321 268.9c.3 0 .7-.3 1 .5-.5 0-.5-.3-1-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.4 269.3c.3 0 .5 0 .7.5-.5-.1-.4 0-.7-.5zm2.2-3.2c.3.4.5.4.3 1-.4-.3-.3-.5-.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.3 266.4c-.2.2-.5.3-.4 1 .5-.3.4-.4.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.4 267c-.3.2-.6.3-.4.8.2-.3.3-.2.4-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.4 267.4c-.2.2-.5.3-.4 1 .4-.4.4-.4.4-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.5 268c-.3.1-.6.2-.5.8.5-.3.3-.4.5-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.5 268.4c-.2.2-.6.3-.4.9.3-.3.4-.3.4-.9zm-1.2-1.8c.2.2.6.2.6.8-.5-.3-.5-.3-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.3 267c.2.2.6.2.6.8-.5-.3-.5-.3-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.4 267.4c.2.2.6.2.6.9-.5-.4-.5-.3-.6-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.4 268c.2.1.7 0 .6.8-.4-.2-.3-.4-.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.6 268.5c.2.1.4.1.4.8-.4-.4-.4-.3-.4-.8zm-.4.3a2.7 2.7 0 0 0-.1 0c.5 2.5.7 4.7.6 7.5h.2c0-2.5 0-5-.7-7.5zm-1-2.4c.4.4.6.3.5 1-.4-.3-.4-.5-.5-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323 266.6c-.2.2-.5.4-.2 1 .3-.4.3-.4.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.1 267.2c-.2.2-.5.3-.2.8.2-.3.3-.3.2-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.3 267.5c-.2.3-.5.4-.2 1 .3-.3.3-.4.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.5 268c-.3.3-.6.4-.3 1 .4-.4.2-.5.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M323.6 268.5c-.2.3-.6.4-.3 1 .3-.4.3-.5.3-1zM322 267c.3 0 .7 0 .8.6-.6-.2-.6-.1-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.1 267.4c.2.1.7 0 .8.6-.6-.2-.6-.1-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.3 267.8c.2.1.6 0 .7.7-.6-.2-.6-.2-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.4 268.3c.2 0 .6-.1.8.7-.5-.1-.5-.3-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.7 268.8c.3 0 .4 0 .6.6-.5-.2-.5-.1-.6-.6zm-.8.9c.6 1.4.8 2.6.7 3.7l-.3 2.5h.1c.6-2.5.5-4.4-.5-6.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "m322.5 269.2-.1.1c.8 2.1.9 4 .7 7h.1c.2-3 .1-5-.7-7zm-1.4-2.4c.4.3.5.2.5.8-.4-.1-.4-.3-.5-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.8 266.9c-.1.2-.4.4 0 1 .3-.4.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322 267.4c-.1.3-.4.4 0 1 .1-.4.2-.4 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.3 267.8c-.2.2-.5.4 0 1 .2-.5.1-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.5 268.2c-.2.3-.5.5 0 1 .2-.5 0-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322.7 268.7c-.1.2-.5.5-.1 1 .2-.4.3-.5.1-1zm-1.7-1.3c.2 0 .6 0 .8.5-.6-.1-.6 0-.8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.1 267.8c.3 0 .7 0 .8.5-.5-.1-.5 0-.8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.3 268.1c.2.1.7 0 .9.6-.6-.1-.6 0-.9-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.5 268.7c.2 0 .6-.3.9.5-.5 0-.5-.2-.9-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.9 269c.3.1.4 0 .6.6-.4-.1-.4 0-.6-.5zm-2-1.6c.5.2.7.2.8.7-.4 0-.5-.2-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.7 267.4c0 .3-.3.5.2 1 .2-.5.1-.5-.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321 267.9c0 .3-.3.5.1.9.1-.4.2-.4 0-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.3 268.2c0 .3-.3.5.1 1 .2-.5.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.6 268.6c0 .3-.4.5.1 1 .2-.6 0-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M322 269c-.2.3-.5.6 0 1 .1-.4.2-.5 0-1zm-2-1c.2 0 .6-.1.9.4-.6 0-.6 0-1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.2 268.4c.2 0 .6-.2.9.4-.6 0-.6 0-.9-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.4 268.7c.3 0 .7-.1 1 .4-.6 0-.6 0-1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M320.7 269.2c.2 0 .6-.3 1 .4-.5 0-.5-.2-1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M321.1 269.5c.3 0 .5 0 .8.5-.5 0-.5 0-.8-.5zm3.8-.7a25.9 25.9 0 0 0-.7 7.5 2.5 2.5 0 0 0 .2 0c0-2.8 0-5 .7-7.4a2.8 2.8 0 0 0-.2-.1zm1-2.3c-.4.3-.5.3-.5.9.4-.2.5-.4.5-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.1 266.6c.2.3.5.5.2 1-.3-.4-.3-.4-.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325 267.3c.3.2.5.3.2.8-.2-.3-.3-.3-.2-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.9 267.6c.2.2.5.4.2 1-.4-.4-.3-.5-.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.7 268c.2.3.5.5.2 1-.4-.4-.1-.5-.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M324.5 268.5c.2.3.6.5.3 1-.3-.4-.3-.4-.3-1zm1.6-1.5c-.2.2-.6 0-.7.7.5-.2.5-.2.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326 267.5c-.2 0-.6 0-.7.6.5-.2.5-.1.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.9 267.9c-.2 0-.7 0-.8.6.6-.2.6-.1.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.7 268.4c-.2 0-.6-.2-.7.6.4 0 .4-.3.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.4 268.8c-.2.1-.4 0-.5.7.4-.2.4-.2.5-.7zm.2.4c-.9 2.1-1 4.1-.8 7h.2c-.2-3-.1-4.9.7-7zm1.5-2.3c-.5.3-.6.2-.6.8.4-.1.4-.3.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.3 267c.1.2.4.5 0 1-.3-.5-.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326 267.5c.3.3.5.5.1 1-.1-.5-.2-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.9 267.8c.1.3.4.5 0 1-.3-.4-.2-.4 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.6 268.3c.2.3.5.5.1 1-.3-.5 0-.5-.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M325.4 268.7c.2.3.5.5.1 1-.2-.4-.3-.4-.1-1zm1.7-1.2c-.2.1-.6 0-.8.5.6 0 .6 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327 268c-.2 0-.6-.1-.8.4.6-.1.5 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.8 268.3c-.2 0-.7 0-.8.5.6-.1.5 0 .8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.6 268.8c-.2 0-.6-.3-.8.5.4 0 .4-.3.8-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.3 269.2c-.4 0-.5 0-.7.5.4-.1.4 0 .6-.5zm0 .5c-1.1 2-1 4-.6 6.3h.2l-.3-2.9a6 6 0 0 1 .8-3.3h-.1zm1.9-2c-.5.1-.7 0-.8.6.5 0 .5-.2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.4 267.5c0 .3.3.6-.2 1-.2-.5-.1-.5.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327 268c.2.3.4.5 0 .9-.1-.4-.2-.4 0-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.8 268.3c.1.3.3.5-.1 1-.2-.5-.2-.5.1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.5 268.7c0 .3.4.6-.1 1-.2-.6 0-.5 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M326.2 269c.1.4.4.7 0 1-.2-.4-.2-.4 0-1zm2-.8c-.3 0-.6-.2-1 .4.6 0 .6 0 1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.9 268.6c-.2 0-.6-.2-.9.3.6 0 .6 0 .9-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.7 268.9c-.3 0-.7-.2-1 .4.7 0 .6 0 1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327.4 269.4c-.2 0-.6-.4-1 .3.5 0 .6-.2 1-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "M327 269.7c-.3 0-.5-.1-.8.4.5 0 .5 0 .8-.4zm-3.5 2.7h1.1c.7 0 1.2.2 1.2.4s-.5.3-1.2.3h-1.1c-.7 0-1.3-.2-1.3-.4s.6-.3 1.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    d: "m322.7 272.4-.4.6a.3.3 0 0 0 .2 0h.2l.4-.6h-.4zm.9 0-.4.6h.4l.4-.6h-.4zm.9 0-.4.7h.4l.4-.7h-.4zm.8 0-.3.7h.4l.3-.6a.3.3 0 0 0-.2 0h-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m316.5 268.8.5 2.7.2.2v1.1c.3.5.3 1.1.5 1.6l.3.6h.4l.1.2-.2.2h-.6l-.3-.1v-.3h-.2l-.1-.6-.8-1c0-.1 0-.4-.2-.5l-.3-.3c-.5-1-1-3-1-3m-6.4-1 1.8.4-.5 2.6c-.3.8-.3.9-.2 1 .2.5.4 1.2 1.1 2.3l.6.4.5.3h.5l.1-.2c0-.1-.3 0-.5-.2 0-.3-.5-.8-.5-1.2-.3-.7-.2-.7-.2-1.5l.5-1.6c.2-.5.5-1.4.5-2l-.8-1.7-.5-.7m-1.6-1.1c-2.9 1-1.7 3.5-.9 3.6m9.2-8.1.4-1v-.4l-.7.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M319.2 262.4c.2 0 .4.1.4 0v-.6c-.6-.4-1-.4-1-.7v-.2c0-.2-.8-.3-1-.4l-.4-.2h-.2c-.8 0-1.1.7-1.2 1.2 0 0-.2 2.1-.5 3a.7.7 0 0 1-.2.3l-.2.2c-2-.2-3.4-.2-4.2-.2-.8 0-1.8.7-1.8.7s-1 .6-1.1 1.6c-.1.3 0 .7.1 1 1 2.7 1.8 0 2.1.1h.4c.5 0 1.4 1.5 2.7 1.8 4 .9 5-1.2 5-5.8v-.2l.2-.4v-.8l1-.2.2-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m317.3 261 .4-1v-.4l-.9 1m-8.9 7.6c.3.8.7 1.5.7 1.8 0 .4-.3.6-.3.7h-.2l-.2.6a1.3 1.3 0 0 0 0 .6c0 .7.4 2.2.4 2.3 0 0 .3 0 .3.2v1.2c0 .2.3.3.3.3h.6l-.4-.4a.4.4 0 0 1 0-.2c0-.2.2-.4.3-.5v-.3l-.1-.2a8.3 8.3 0 0 1-.1-.9v-1.1l.2-.2.1-.2 1-.6.8-1 .2-.5a.5.5 0 0 0 0-.2 3.8 3.8 0 0 0-.3-.9 3.2 3.2 0 0 0-.6-.8m5.9 1.8c-.5.4-1.8.7-1.8 1 0 0 0 1.6-.2 2.2l-.3.6-.2.7-.3 1v.3l.4.3h-.4l-.6-.2V274l-.2-1.4.1-1-.1-3.6m4.7-5.4c.2.2.6.4 1.3.1.2.1.3.2.6-.2m-.3-.5h.2s.1 0 0 0c0 0 0-.1 0 0h-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M317.8 261.4c.2.3.4.3.6.1-.2-.3-.4-.1-.5-.1h-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M329.1 272.9a2 2 0 0 0 0 .7v.8a2 2 0 0 0 0 .7 2 2 0 0 0 0 .7c.2.2 1 .2 1.2 0a2.2 2.2 0 0 0 0-.7v-.7a2 2 0 0 0 0-.7v-.8a2.3 2.3 0 0 0 0-.8v-.7a2.2 2.2 0 0 0 0-.8v-.8a2.4 2.4 0 0 0 0-.8v-.7a2.2 2.2 0 0 0 0-.8 1.9 1.9 0 0 0 0-.8 2.5 2.5 0 0 0 0-.8 2.3 2.3 0 0 0 0-.8 3.3 3.3 0 0 0 0-.8 2.9 2.9 0 0 0 0-.7v-.8a2.6 2.6 0 0 0 0-.8 2.7 2.7 0 0 0 0-.8v-.8a2.3 2.3 0 0 0 0-.8v-.7a2 2 0 0 0 0-.3h-.9v1a2.3 2.3 0 0 0 0 .8v.8a2.7 2.7 0 0 0 0 .8 2.6 2.6 0 0 0 0 .8 3 3 0 0 0 0 .7l-.1.8v.8a2.4 2.4 0 0 0 0 .8 2.5 2.5 0 0 0 0 .8 1.9 1.9 0 0 0 0 .8c-.1.3-.1.5 0 .8v.7a2.4 2.4 0 0 0-.1.8 2.6 2.6 0 0 0 0 .8 2.2 2.2 0 0 0 0 .8 2 2 0 0 0 0 .7 2.3 2.3 0 0 0 0 .8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M329.1 273.6c.3.2 1 .1 1.2 0m-1.2-.7h1.2m-1.2-.8h1.2m-1.1-.7h1.1m-1.1-.8h1.1m-1.1-.8h1.1m-1-.8h1m-1-.7h1m-1-.8h1m-1-.8h1m-1-.8h1m-1-.8h1m-1-.8h1m-1-.7h1m-1-.8h1m-1-.8h1m-.9-.8h.8m-.8-.8h.8m-.8-.8h.8m-.8-.7h.8m-1 15.5h1.1m-1.2.7h1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007934",
    fillRule: "evenodd",
    stroke: "#e7e7e7",
    strokeWidth: ".1",
    d: "M331.5 257a13 13 0 0 1 2.1 0 13.7 13.7 0 0 0-.8-.3h2.2a5 5 0 0 0-1-.5 8 8 0 0 1 2.2.1l-1-.5c.9 0 1.2 0 2 .2a2.6 2.6 0 0 0-.9-.5 8 8 0 0 1 2.5-.2 8.6 8.6 0 0 0-8 .8 6 6 0 0 1 1-1.1 2.5 2.5 0 0 0-.7 0c.3-.3.8-.8 1.2-1l-.7.1 1.4-1a3.1 3.1 0 0 0-.9.1 5.2 5.2 0 0 1 1.6-1.1 4 4 0 0 0-1 0 8.7 8.7 0 0 1 2-1.3c-3.3.4-5.1 2.8-5.3 4.8a7 7 0 0 0-6.6-3.6c1 .3 1.8.7 2.4 1a4.4 4.4 0 0 0-1 .1c.7.2 1.5.6 2 1a3.4 3.4 0 0 0-1 0l1.8.8-.8.1a5 5 0 0 1 1.5.8h-.8c1 .4 1.1.6 1.3.7a8 8 0 0 0-7.3 3 10 10 0 0 1 2.2-1l-.5.8c.5-.4 1.3-.8 2-1a4.8 4.8 0 0 0-.4.7l1.8-1-.4.8 1.7-.7-.5.7 1-.4a6.2 6.2 0 0 0-2.9 5.8l.9-2v1a8.5 8.5 0 0 1 1-2v1l1-2v1l1.1-1.9v.8l.3-.6.7-.9.2.3c.3.4.4 1.1.5 1.8a3.2 3.2 0 0 0 .2-.9c.3.7.7 1.8.7 2.4a3.6 3.6 0 0 0 .2-1c.3.5.6 1.8.7 2.3l.3-.9c.3.8.4 1.7.5 2.3.8-3-.4-4.9-1.8-6.3.4.1.8.5 1.3 1a4.9 4.9 0 0 0-.3-.9l1.5 1.4-.2-.8c.6.4 1.1 1.2 1.5 1.6a5.4 5.4 0 0 0-.2-1 6 6 0 0 1 1.3 1.8l-.1-1c.7.6 1 1.3 1.3 1.7 0-2.7-3.1-5-6-5.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#e7e7e7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M330.3 257.1c3.1-.5 7.2 2.3 7.2 5.3-.3-.4-.6-1.1-1.3-1.8l.1 1a6 6 0 0 0-1.3-1.7l.2 1c-.4-.4-.9-1.2-1.5-1.6l.2.8-1.5-1.4.3 1c-.5-.6-1-1-1.3-1.1m-1.8-1.5c-1.9-1.2-5.8-1-8.7 2.3a10 10 0 0 1 2.2-.9l-.5.8c.5-.4 1.3-.8 2-1a4.8 4.8 0 0 0-.4.7l1.8-1-.4.8 1.7-.7-.5.7 1-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#e7e7e7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M329.7 256.6c-.4-2.2-3-4.8-6.9-4.6 1 .3 1.8.7 2.4 1a4.3 4.3 0 0 0-1 .1c.7.2 1.5.6 2 1a3.4 3.4 0 0 0-1 0l1.8.8a3.2 3.2 0 0 0-.8.1 5 5 0 0 1 1.5.7l-.7.1c1 .4 1 .6 1.2.7m1.5 1c-2.6.8-5.1 3.3-4.7 6.7 0-.4.5-1.5.8-2v1l1-2v1l1-2v1a13.3 13.3 0 0 1 1.1-1.9v.8a5 5 0 0 1 1-1.5m-1.6.2a8.7 8.7 0 0 0-.5 1.4m-.5-.8a9.7 9.7 0 0 0-.5 1.9m-.5-1a9 9 0 0 0-.5 2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#e7e7e7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M329.9 258.6v-.6",
    className: "fil1 str2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#e7e7e7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "M332.6 261.3v1.3m-1-3 .1 1.6m-1-2.7.1 1.3m4.8-.4.6 1.2m-2-2.1.8 1.4m-2-1.8c.3.3.5.7.7 1.2m-10.6-.8a4.7 4.7 0 0 1 1.7-1.2m-.2 1c.4-.6.6-.9 1.6-1.3m-.2 1c.4-.4.9-.8 1.7-1.1m-.4 1.2c.5-.5 1-.7 1.6-1m-3.7-4c.7 0 1.6.2 2.2.6m-1.2.4c.6 0 1.4.2 1.8.4m-1 .4c.6 0 1.3.3 2 .6m-1.3.2a4 4 0 0 1 1.7.6m.9.2a8.6 8.6 0 0 1 8.5-1.2 8 8 0 0 0-2.4.2c.4 0 .7.3.8.4h-2c.4 0 .7.2 1 .4a7.3 7.3 0 0 0-2.2 0l1 .3h-2.2l.8.3c-1 0-1.6 0-2 .2m4.8-1.6a6 6 0 0 0-2.2-.4m1 .7a5.8 5.8 0 0 0-2.5-.2m1.3.6a6.8 6.8 0 0 0-2.5-.2m1.3.7a5 5 0 0 0-2-.1m.8 1c.4.3.6.7.8 1.1m-3-3.1c.2-2 2-4.4 5.3-4.8a9 9 0 0 0-2 1.3h1c-.5.2-1.2.7-1.6 1.1a3.1 3.1 0 0 1 .9 0 6.7 6.7 0 0 0-1.4 1l.7-.1a4.1 4.1 0 0 0-1.2.9h.7l-1 1.1m2-4c-.5.1-1.1.4-1.6.7m1 .4a4.5 4.5 0 0 0-1.5.5m.9.4c-.5.1-1 .4-1.5.7m1 .2a3.2 3.2 0 0 0-1.4.8m-.5 2.4a6 6 0 0 0-.3 1.1m1.2-2c1.8 1.6 4.1 3.7 3 7.6a6 6 0 0 0-.4-2.2l-.3.9a6.8 6.8 0 0 0-.7-2.4 3.5 3.5 0 0 1-.2 1 8.3 8.3 0 0 0-.7-2.4c0 .2 0 .6-.2.9 0-.9-.3-1.7-.7-2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m293.3 233.5 1.3.7.3-.6c.1-.3.2-.5.1-.6 0-.2-.2-.4-.5-.5-.3-.2-.6-.3-.7-.2-.2 0-.4.2-.5.4l-.2.5c0 .1 0 .2.2.3m1.6 1 1.7.8h.3l.3-.5.3-.6a.6.6 0 0 0 0-.4.7.7 0 0 0-.2-.2 1.9 1.9 0 0 0-.3-.2c-.8-.4-1.3-.3-1.7.3l-.4.7m-2.6-.8a33 33 0 0 0 .6-1.2 3.3 3.3 0 0 1 .6-.7l.6-.4h.9c.2.1.3.3.4.6.1.2.2.5.1.7a2 2 0 0 1 1-.6l1 .1c.3.2.5.6.6 1 .1.5 0 1-.4 1.7a32.4 32.4 0 0 1-.7 1.3l-.3.7-1.4-.9-1.8-1-1.5-.7.3-.6m9-10.8c-.8.6-.7 1.5.3 2.6.5.6 1 1 1.5 1 .4.2.9 0 1.3-.3.3-.3.5-.6.4-1a3.1 3.1 0 0 0-.8-1.5c-.5-.7-1-1-1.4-1.2-.5 0-1 0-1.4.4m3.8-.2c.5.6.7 1.3.7 2a2.8 2.8 0 0 1-1.2 2 2.9 2.9 0 0 1-2 .7 2.4 2.4 0 0 1-1.8-1 2.8 2.8 0 0 1-.7-2c0-.7.4-1.4 1-2a2.9 2.9 0 0 1 2-.7c.8 0 1.4.4 2 1m8-2.6.3 1a14.4 14.4 0 0 0 1.9-.7h.3a4.5 4.5 0 0 0 .3.7l-.5.1-2.4.7-.7.2-.4-1.6-.5-2a12 12 0 0 0-.5-1.5l.6-.2.7-.2.3 1.6.6 2m9.2-3a12.2 12.2 0 0 0 0-1.6h.8l.7.1c-.2.5-.2 1-.3 1.7l-.2 2a11.9 11.9 0 0 0-.1 1.6h-.7l-.7-.1.3-1.7.2-2m9.9 5.3c1.6-1.3 2.7-2.2 3.1-2.7l.4.2.4.2a230 230 0 0 0-4.7 3.6l-.5-.3a316.2 316.2 0 0 1 .2-2 362.5 362.5 0 0 0 .4-3.8 7.7 7.7 0 0 0 1.2.7 34.8 34.8 0 0 0-.5 4m8.4 4 1.2-1.3.4.6.5.4a11.1 11.1 0 0 0-1.3 1.1l-1.5 1.4a12 12 0 0 0-1.1 1.1l-.5-.5-.5-.5 1.3-1 1.5-1.4m5 10 1.3-1.4h-2a18 18 0 0 0 .7 1.4m-1.1-1.3-2 .1a1.9 1.9 0 0 0-.1-.3 2.6 2.6 0 0 0-.2-.4h5.9l.3.6a82.5 82.5 0 0 0-4 4.3l-.2-.7a5.4 5.4 0 0 0-.3-.6 23.9 23.9 0 0 0 1.4-1.3 35 35 0 0 0-.4-.8 39.5 39.5 0 0 0-.4-1",
    fontFamily: "Linux Biolinum",
    fontSize: "100",
    fontWeight: "700",
    letterSpacing: "60",
    style: "line-height:125%;text-align:center",
    textAnchor: "middle",
    wordSpacing: "0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8a30e",
    stroke: "#000",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: ".1",
    d: "m325 280.6-.8 2.2h-2.4l1.9 1.5-.7 2.2 2-1.3 1.8 1.3-.6-2.2 1.8-1.4h-2.3zm9-3.9-.7 2.2H331l1.8 1.5-.7 2.2 2-1.3 1.9 1.3-.7-2.2 1.9-1.4h-2.4zm14.2-25-.8 2.3h-2.3l1.8 1.4-.6 2.3 1.9-1.4 1.9 1.4-.7-2.3 1.9-1.4h-2.4zm-6.7 17.9.7 2.2h2.4l-1.9 1.4.7 2.3-2-1.4-1.9 1.4.7-2.3-1.8-1.4h2.3zm4.7-8.2.8 2.2h2.3l-1.9 1.5.7 2.2-1.9-1.3-2 1.3.8-2.2-1.9-1.4h2.3zm-31.1 19.2.8 2.2h2.3l-1.9 1.5.7 2.2-2-1.3-1.8 1.3.6-2.2-1.8-1.4h2.3zm-9.2-3.9.8 2.2h2.4l-2 1.5.8 2.2-2-1.3-1.9 1.3.7-2.2-1.9-1.4h2.4zm-14-25 .7 2.3h2.3l-1.8 1.4.6 2.3-1.9-1.4-1.9 1.4.7-2.3-1.9-1.4h2.4zm6.6 17.9-.7 2.2h-2.4l1.9 1.4-.7 2.3 2-1.4 1.9 1.4-.7-2.3 1.8-1.4h-2.3zm-4.7-8.2-.8 2.2h-2.3l1.9 1.5-.7 2.2 1.9-1.3 2 1.3-.8-2.2 1.9-1.4h-2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M321 248.1v-.5h.1l-.8-.5h-.7l-.8.5v.5h2.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M321 248.1v-.5h.1l-.8-.5v-.7h-.6v.7l-.9.5v.5h2.3zm.3.6v.2h-2.6v-.2h2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M321.3 248.7v.2h-2.6v-.2h2.6zm-2.5 0v-.5h.1v.5-.5h-.1v-.1h2.4v.1h-.2v.5-.5h.1v.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M318.9 248.7v-.5.5-.5h-.1v-.1h2.4v.1h-.2v.5-.5h.1v.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M319.4 248.6v-.4h-.4v.4h.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M319.1 248.3v.2h.2v-.2h-.2m1.8.3v-.4h-.3v.4h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M320.7 248.3v.2h.1v-.2h-.1m.2-.3v-.3h-.3v.3h.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M320.7 247.7v.2h.1v-.2h-.1m-1.3.3v-.3h-.4v.3h.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M319.1 247.7v.2h.2v-.2h-.2m.8.3v-.3h-.3v.3h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M319.7 247.7v.2h.1v-.2h-.1m.7.3v-.3h-.3v.3h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M320.1 247.7v.2h.2v-.2h-.2m.4.2v.8h-1v-.8h1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    d: "M320.5 247.9v.8h-1v-.8h1zm-1 .2h1m-.9.6v-.6m.7.6v-.6m.5-.5-.5-.4h-.6l-.5.4h1.6m-1-.5h.4m-.3-.1h.2-.2m0 1zm.1 0h.1zm.3 0h.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    fillRule: "evenodd",
    d: "M319.8 246h.4v.4h-.4v-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M320 245.6v.4m-.2-.2h.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M317.1 210.3s-2.3 5.4-1.5 6c0 0 3-3.3 3.7-5.9.8-2.6 0-.2 0-.2l-.2-2.8-2 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M317.1 210.3s-2.3 5.4-1.5 6c0 0 3-3.3 3.7-5.9.8-2.6 0-.2 0-.2l-.2-2.8-2 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M317.6 207.7s-2.8 6-2.1 6.4c0 0 2.3-2.7 3-4.8.5-2.1 0-.1 0-.1l.7-3.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M317.6 207.7s-2.8 6-2.1 6.4c0 0 2.3-2.7 3-4.8.5-2.1 0-.1 0-.1l.7-3.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M320.5 206.4s-2.8 6-2.1 6.4c0 0 2.3-2.7 3-4.8.5-2.2 0-.2 0-.2l.7-3.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M320.5 206.4s-2.8 6-2.1 6.4c0 0 2.3-2.7 3-4.8.5-2.2 0-.2 0-.2l.7-3.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m356.8 195.6 3.4 1.9s.8.7-1 .3a42 42 0 0 1-12.8-6.4c-3.3-2-4.3-2-4.3-2l4.5.1 10.2 6.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m356.8 195.6 3.4 1.9s.8.7-1 .3a42 42 0 0 1-12.8-6.4c-3.3-2-4.3-2-4.3-2l4.5.1 10.2 6.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m358 194.8 3.3 1.9s.8.7-1 .3a45 45 0 0 1-12.8-6.4c-3.3-2.1-.6 1.7-.6 1.7l.5-2.5 10.5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m358 194.8 3.3 1.9s.8.7-1 .3a45 45 0 0 1-12.8-6.4c-3.3-2.1-.6 1.7-.6 1.7l.5-2.5 10.5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M363.5 196.6s-4-.7-5.4-1.8c0 0 .2.5-1.7-.4 0 0 .7 1.7-4.8-2-5.5-3.8-3.6-2-3.6-2l1.6-.3 9.3 3.7a53 53 0 0 1 4.6 2.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M363.5 196.6s-4-.7-5.4-1.8c0 0 .2.5-1.7-.4 0 0 .7 1.7-4.8-2-5.5-3.8-3.6-2-3.6-2l1.6-.3 9.3 3.7a53 53 0 0 1 4.6 2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m342.6 198.1 1.4 1.9s-.5 1.8-5.1-1.7-4.4-3.2-4.4-3.2l2.6-.3 5.6 3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m342.6 198.1 1.4 1.9s-.5 1.8-5.1-1.7-4.4-3.2-4.4-3.2l2.6-.3 5.6 3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M336.6 199s2.2 2.9 1.7 3.2c-.5.4-3 .2-4.8-2.5-1.9-2.8 0-.2 0-.2v-4.4l3.2 3.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M336.6 199s2.2 2.9 1.7 3.2c-.5.4-3 .2-4.8-2.5-1.9-2.8 0-.2 0-.2v-4.4l3.2 3.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M338.8 197.8s2.1 2.6 1.9 3c-.2.4-3.2.2-5.5-2.5-2.3-2.6-.3-3.4-.3-3.4l3.9 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M338.8 197.7s2.1 2.7 1.9 3.1c-.2.4-3.2.2-5.5-2.5-2.3-2.6-.3-3.4-.3-3.4l4 2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M350.6 196.2s6 2.5 1.6 2.4c0 0-8.6-2.3-13-6.2l1.2-1.6 10.2 5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M350.6 196.2s6 2.5 1.6 2.4c0 0-8.6-2.3-13-6.2l1.2-1.6 10.2 5.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M353.8 195.4s3.1 2 3.4 2.7c.2.8-10-1.9-15.3-6.3l2.4-1.2 9.4 4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M353.8 195.4s3.1 2 3.4 2.7c.2.8-10-1.9-15.3-6.3l2.4-1.2 9.4 4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M344.5 197.2s2.3 1.9 2 2.1c-.3.2-5-.5-8.6-3.3l.4-1.7 6.2 2.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M344.5 197.2s2.3 1.9 2 2.1c-.3.2-5-.5-8.6-3.3l.4-1.7 6.2 2.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M348.4 197s2.3 1.6 1.8 1.8c-.4.1-2.2 1.6-10.7-3.4l-1-.6 1.3-2 8.6 4.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M348.4 197s2.3 1.6 1.8 1.8c-.4.1-2.2 1.6-10.7-3.4l-1-.6 1.3-2 8.6 4.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M339.7 192.4s2.8 2.4 2.4 2.8c-.4.4-3.6-.4-5-1.5-1.5-1-2.6-2.4-2.6-2.4l3-.7 2.2 1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M339.7 192.4s2.8 2.4 2.4 2.8c-.4.4-3.6-.4-5-1.5-1.5-1-2.6-2.4-2.6-2.4l3-.7 2.2 1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m336.4 188.3 5 3s4.1 2.8 3.7 3.1c-.4.3-3.7-.8-6-2-2.2-1.3-5-4-5-4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m336.4 188.3 5 3s4.1 2.8 3.7 3.1c-.4.3-3.7-.8-6-2-2.2-1.3-5-4-5-4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M333.2 202.4s1 2.4.4 2.6c-.6.3-2-.2-3-2.3-1.2-2.2 1-1.3 1-1.3l1.6 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M333.2 202.4s1 2.4.4 2.6c-.6.3-2-.2-3-2.3-1.2-2.2.7-1.3.7-1.3l2 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M334.9 200.9s1.4 2.3 1.1 2.6c-.3.2-2.2 1-4.2-2s2.1-2.3 2.1-2.3l1 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M334.9 200.9s1.4 2.3 1.1 2.6c-.3.2-2.2 1-4.2-2s2.1-2.3 2.1-2.3l1 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M330.7 190.4s4.8 9.3 4.4 9.8c-.4.5-2.3 0-3.4-2.5s-1.9-5.6-1.9-5.6l.9-1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M330.7 190.4s4.8 9.3 4.4 9.8c-.4.5-2.3 0-3.4-2.5s-1.9-5.6-1.9-5.6l.9-1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M336.3 192.8s4 3.3 3.2 3.8c-.8.4-2.4-.2-4.8-2.5-2.3-2.3 1.6-1.5 1.6-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M336.3 192.7s4 3.5 3.2 3.9c-.9.4-2.5-.2-4.8-2.5s1.6-1.4 1.6-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M334.4 192.8s2.8 5.3 2.5 5.8c-.4.5-2.5-1.3-3.6-2.7-1-1.3-1.9-3.3-1.9-3.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M334.4 192.8s2.8 5.3 2.5 5.8c-.4.5-2.5-1.3-3.6-2.7-1-1.3-1.9-3.3-1.9-3.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M312.9 203.6s-.2 3.1 0 3.3c.2.3 1.7.3 1.8-2 .1-2.4-.3-2.5-.3-2.5l-1.5 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.9 203.6s-.2 3.1 0 3.3c.2.3 1.7.3 1.8-2 .1-2.4-.3-2.5-.3-2.5l-1.5 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M313.8 199.9s-1 3.4 0 4.1c1 .7 1.9-3.4 2-4.3 0-1-2 .2-2 .2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.8 199.9s-1 3.4 0 4.1c1 .7 1.9-3.4 2-4.3 0-1-2 .2-2 .2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.6 204.3s.2 3.2.8 3.4c.6.1 1.6-1 1.6-1.8s-1-2.8-1-2.8l-1.4 1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.6 204.3s.2 3.2.8 3.4c.6.1 1.6-1 1.6-1.8s-1-2.8-1-2.8l-1.4 1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.6 200.4s-1 3.5 0 4.2c1 .7 1.9-3.4 2-4.4 0-.9-2 .2-2 .2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.7 194.8s-1.6 1.7-1.6 2.6c0 1 2.4-1.2 2.6-1.6.2-.4-1-1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.7 194.8s-1.6 1.7-1.6 2.6c0 1 2.4-1.2 2.6-1.6.2-.4-1-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M313.6 194s-1.3 2.3-1 3c.4.8 1.6-.5 2.2-1.4.6-.8-1.2-1.7-1.2-1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.6 194s-1.3 2.3-1 3c.4.8 1.6-.5 2.2-1.4.6-.8-1.2-1.7-1.2-1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M331.5 190.8s2 3.8 1.5 4c-.6.2-1.4-.7-2.3-1.9-.8-1.1.8-2.1.8-2.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M331.5 190.8s2 3.8 1.5 4c-.6.2-1.4-.7-2.3-1.9-.8-1.1.8-2.1.8-2.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M331.6 198.6s.7 3.3 0 3.6c-1.2.5-2-2.3-2-3.4 0-1.2 2-.2 2-.2zm-2.6 5.1s.2 2.5-.2 2.7c-.3.2-1.2.2-2.1-1.8-1-2-.5-1.2-.5-1.2l2.3-1.2.5 1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M331.4 203.2s.2 2.5-.3 2.6c-.5 0-1.9-.8-2.5-2.3-.6-1.8 2.4-1.3 2.4-1.3l.4 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M329 195.3s2.6 6 2.1 6.7c-.8 1.7-3.2-3.5-3.9-5.6-.8-2.2 1.7-1 1.7-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.7 196.3s3.6 6.5 2.1 6.6c-1.5.2-4.3-4.6-4.7-5.8-.5-1 2.6-.8 2.6-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.5 197.7s1.8 6.2.6 5.6c-1-.5-2.5-5.2-2.6-6.2-.2-1 2 .6 2 .6zm6.2-8.8s2.7 4.1 1.8 4.2c-.8.2-4-2.7-4-3.2-.1-.5 2.2-1 2.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M332 189s3.5 4.8 2.4 5c-1 .2-1.1-.5-1.1-.5s-2.8-2.5-3-3.1c-.1-.6 1.6-1.4 1.6-1.4m3.5.1s2.4 2.5 1.8 3.3c-.6.8-4-3.1-4.4-3.6-.4-.5 2.9.2 2.9.2m-6 3.5s3.8 7.5 3 8.2c-.6.8-4.9-5.6-5-6.5-.2-.9 2-1.8 2-1.8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.5 193.2s1.5 2.3 1.4 3.6c0 1.2-2.3-1.8-2.5-2.4-.2-.6 1-1.2 1-1.2zm3.1-1.2s1.2 2.4.8 3.1c-.3.8-2-1.4-2.5-2.3-.6-.8 1.7-.8 1.7-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M325 194.4s2 2 1.9 3.1c-.1 1.1-2.8-1.6-3-2-.3-.6 1.2-1.1 1.2-1.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M337.2 188.4s2.8 2.5 2.4 3c-.5.3-4.3-2.4-4.9-3-.6-.5 2.5 0 2.5 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m334.8 188.2 2.2 1.9s2 1.3 1.7 1.7c-.3.3-3.6-1.1-4.1-1.8-.6-.7-.6-1.4-.6-1.4l.8-.4zm7.3.6s8.4 3.4 8 4.2c-.3.8-8.8-2.7-10-3.7-1.4-.9 1.8-.6 1.8-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M342.4 189.8s6.3 3.6 5.5 4c-.7.3-5.2-1-7.5-2.5a36.6 36.6 0 0 1-3.3-2.5l2.8-.6 2.5 1.7zm-15.5 4.4s1.2 2.4.8 3c-.4.8-1.5-.5-2.1-1.4-.6-.8 1.3-1.6 1.3-1.6zm.3 5.4s1 3.5-.1 4.2c-1.1.6-1.8-3.6-1.8-4.5 0-.9 1.9.3 1.9.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M322.3 193.8s3.5-1.5 4.1-1.4c0 0 .8-.2 1.1-.5l1.3-1s-.6-4.3 3.9-3.8l11.5 1.1a45 45 0 0 1 6.5 2l9 3.9a30 30 0 0 1 4 2.3c.8.5-.1.1-.1.1s-10.7-5.7-14.5-6.4c-1-.2 0 1 0 1l-3.4-1.3a6 6 0 0 0-2.9-.6 5.8 5.8 0 0 1-2.2-.3c-.6-.2-3.8-.3-4.4-.4a7.3 7.3 0 0 1-1-.2l.3.4-1.6-.2-.5.6s-1.5.3-1.6-.2c-.1-.4-1 2.3-1.3 3-.4.9-1.9.9-2.3 1.4l-1 .9c-.2.1-1.3.8-1.7.8l-2.9.2-.6-1 .3-.4zm4.6 10-.1 3.3c-.2.2-1.8.1-1.8-2.2s.5-2.4.5-2.4l1.5 1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M327.3 201.4s-.3-1.4-.5-1.6c-.3-.2 0-.3 0-.3s-.5-1.4-.9-1.6c-.3-.2.1-.4.1-.4s-.6-1-1-1.2c-.4-.3 0-.4 0-.4s-.5-1.2-1.5-1.8c0 0-.7-.7-1.4-.9-.7-.2-2.4-.4-4.5-.3-2.2 0-3.2 1.5-3.2 1.5l-.1 1.8.3-.2-.5 2.2c0 .5.5 1.4.5 2.5v1c.1 1 .4 2 .8 2.9v.2c.2-.2.5.6.7 1 0 0 0 1 .2.6l.6 1.1c0 .2.5 1.4.5.9 0-.6.4 1.3.4 1.5l.5-.7.2.8h.5l-.2.8s1.2-1 1.3-1.4v-.6l.4-.4.6-1s1.5 1.2 1.7 1.7l.3.7.4-.3.3.8.3-.4.2.6.1.3c.1.1.4.2.8-.6.6-1 .6-1.9.6-2 0-.3.3.2.3.2s.6-1 .5-1.6c0-.7.3-.4.3-.4v-2.2c0-.4.3-.3.3-.3l-.2-2.3c-.2-.2.3-.2.3-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M324.3 196.7c.3 0 .4.4.6.6-.1-.4-.3-.7-.6-.8v.2m.3 1.2c.5.5.6 1.1.5 1.8v.1c0-.7 0-1.5-.5-2v.1m1.1.7a3 3 0 0 1 .4 1.6c0-.6 0-1.2-.4-1.7m.4 2.5c0 .4 0 .7-.2 1a.4.4 0 0 0 0 .2 11 11 0 0 0 .2-1.2m-.4 1.9v.7a3.8 3.8 0 0 0 0-.8m.7 0c.2.1.3.3.3.6a.4.4 0 0 0 0-.1 1.2 1.2 0 0 0-.3-.7v.2m0-2.6.4.5v-.2a3.1 3.1 0 0 0-.5-.5v.2m-1.4 2a5.9 5.9 0 0 1 0 1 6.6 6.6 0 0 0 0-1m-.7.7a5.2 5.2 0 0 1 0 1 6.2 6.2 0 0 0 0-1.1v.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M310.7 194.3s-.8 3.2-.2 3.5c1.3.7 2-2.2 2.2-3.2.1-1.2-2-.3-2-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M310.7 194.3s-.8 3.2-.2 3.5c1.3.7 2-2.2 2.2-3.2.1-1.2-2-.3-2-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M312.6 194.3s-1.6 1.7-1.6 2.6c0 1 2.4-1.3 2.6-1.7.2-.4-1-.9-1-.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.6 194.3s-1.6 1.7-1.6 2.6c0 1 2.4-1.3 2.6-1.7.2-.4-1-.9-1-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M285 194.5s-3.3 1.7-3.6 2.4c-.3.7 10-1 15.8-5l-2.3-1.4-9.8 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M285 194.5s-3.3 1.7-3.6 2.4c-.3.7 10-1 15.8-5l-2.3-1.4-9.8 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M289 195.2s-6 2.2-1.7 2.3c0 0 8.7-1.8 13.3-5.4l-1.1-1.7-10.5 4.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M289 195.1s-6 2.3-1.7 2.4c0 0 8.7-1.8 13.3-5.4l-1.1-1.7-10.5 4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M298 189s-6.5 3.4-5.8 3.7c.7.4 5.3-.6 7.7-2l3.4-2.4-2.9-.8-2.5 1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298 189s-6.5 3.4-5.8 3.7c.7.4 5.3-.6 7.7-2l3.4-2.4-2.9-.8-2.5 1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M295.5 196.3s-2.3 1.9-2 2.1c.2.2 5-.5 8.6-3.4l-.5-1.7-6.2 2.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M295.5 196.3s-2.3 1.9-2 2.1c.2.2 5-.5 8.6-3.4l-.5-1.7-6.2 2.9"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M291.5 196s-2.2 1.7-1.7 1.8c.5.1 2.3 1.5 10.6-3.9l1-.6-1.5-2-8.4 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M291.5 196s-2.2 1.7-1.7 1.8c.5.1 2.3 1.5 10.6-3.9l1-.6-1.5-2-8.4 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M289.8 189.6a66 66 0 0 0-13.9 7.2l17.9-7m11.2 10.6s-1.5 2.3-1.2 2.5c.3.3 2.1 1.2 4.3-1.7 2-3-2-2.5-2-2.5l-1.1 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M305 200.4s-1.5 2.3-1.2 2.5c.3.3 2.1 1.2 4.3-1.7 2-3-2-2.5-2-2.5l-1.1 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M306.6 202s-1 2.4-.5 2.6c.6.3 2-.1 3.2-2.2 1.2-2.2-.6-1.1-.6-1.1l-2 .7zm-3.3-3.5s-2.2 2.7-1.7 3.1c.4.4 3 .3 4.9-2.4 1.9-2.6 0 0 0 0l-.5-2.5-2.7 1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M306.6 202s-1 2.4-.5 2.6c.6.3 2-.1 3.2-2.2 1.2-2.2-.6-1.1-.6-1.1l-2 .7zm-3.3-3.5s-2.2 2.7-1.7 3.1c.4.4 3 .3 4.9-2.4 1.9-2.6 0 0 0 0l-.5-2.5-2.7 1.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M301.2 197.1s-2.2 2.6-2 3c.2.5 3.2.3 5.6-2.2s.5-3.5.5-3.5l-4 2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M301.2 197.1s-2.2 2.6-2 3c.2.5 3.2.3 5.6-2.2s.5-3.5.5-3.5l-4 2.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m297.4 197.3-1.4 1.9s.3 1.8 5.1-1.5l4.5-3-2.5-.5-5.8 3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m297.3 197.2-1.3 2s.3 1.8 5.1-1.5l4.5-3-2.6-.5-5.7 3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "m282.2 194.5-3 1.3s-.7.6 1 .7c1.8 0 5.5-.5 11.9-4 2.8-1.7 4.7-3.3 4.7-3.3l-2.4-.8-12.2 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m282.2 194.5-3 1.3s-.7.6 1 .7c1.8 0 5.5-.5 11.9-4 2.8-1.7 4.7-3.3 4.7-3.3l-2.4-.8-12.2 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M277 196.4s4.4-.5 6-1.6c0 0-.3.5 2-.4 0 0-1.2 2 5.3-2 6.5-3.8 0 0 0 0l7.2-4.1-.4-.8-14.7 6.2c-1 .3-5.4 2.7-5.4 2.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m290.3 192.4 7.2-4.1-.4-.8-14.7 6.2c-1 .3-5.4 2.7-5.4 2.7s4.4-.5 6-1.6c0 0-.3.5 2-.4 0 0-1.1 2 5.3-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M308.5 202s-.4 3.4.1 3.5c.5.1 2-1 2.6-3 .6-2.2-2.4-2-2.4-2l-.4 1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M308.5 202s-.4 3.4.1 3.5c.5.1 2-1 2.6-3 .6-2.2-2.4-2-2.4-2l-.4 1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M310.8 203.5s-.3 2.4 0 2.6c.4.3 1.3.4 2.3-1.6 1-2 .5-1.3.5-1.3l-2.3-1.2-.5 1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M310.8 203.4s-.3 2.5 0 2.7c.4.3 1.3.4 2.3-1.6 1-2 .5-1.3.5-1.3l-2.3-1.2-.5 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M311.4 199s-1.9 4-.8 4c1 0 2.5-3 2.7-3.7.2-.7-1.9-.3-1.9-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.4 199s-1.9 4-.8 4c1 0 2.5-3 2.7-3.7.2-.7-1.9-.3-1.9-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M311.3 199s-.8 4.5.2 4c1-.3 1.6-3.7 1.7-4.4 0-.7-2 .4-2 .4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M311.3 199s-.8 4.5.2 4c1-.3 1.6-3.7 1.7-4.4 0-.7-2 .4-2 .4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M312.8 199.4s-1.1 3.5 0 4.2c1 .7 1.8-3.4 1.9-4.3 0-1-2 .1-2 .1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.8 199.4s-1.1 3.5 0 4.2c1 .7 1.8-3.4 1.9-4.3 0-1-2 .1-2 .1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.4 198.3s-1 3.2-.4 3.5c1.2.6 2.3-2.2 2.4-3.3.1-1.2-2-.2-2-.2zm-7.9-6.6s-2.8 2.4-2.5 2.7c.3.4 3.6-.2 5.1-1.3l2.1-1.5-2.5-1.6-2.2 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M303 189.3s-1.8 1.5-1.5 1.9c.4.3 3.6-1 4.2-1.7.6-.6.6-1.3.6-1.3l-3.3 1.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M304.9 189s-2.5 2.1-1.9 2.9c.6.7 4-2.6 4.5-3 .5-.4-2.9 0-2.9 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m303.8 188.2-5 2.3s-4.2 2.7-3.8 3c.4.3 3.7-.6 6-1.7a37.9 37.9 0 0 0 5-3.1m-.9 2.1s-5.3 4.7-4.5 5.1c.8.5 4.4-1.4 6.8-3.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M305.8 192.4s-3 5-2.7 5.6c.4.5 2.6-1.2 3.7-2.5s2-3.2 2-3.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M307.6 192.8s-3.3 6.1-3 6.6c.4.5 2.4.1 3.5-2.3 1.2-2.4 1-4 1-4l-1.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M309.5 193.1s-3.7 7.6-3 8.3c.8.8 4.8-5.7 5-6.6.3-1.6-2-1.8-2-1.8m-7.7-4.9s-3.3 1.6-2.7 2c.7.2 3.8-1.2 4.2-1.3.5-.1-1.5-.7-1.5-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M302.3 188.6s-2 1.6-1.6 2c.4.5 3.5-1.2 4-1.7.7-.5-2.4-.3-2.4-.3zm4.3.2s-2.8 3.7-2 3.8c.9.2 4.1-2.4 4.2-2.8 0-.5-2.2-1-2.2-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M307.8 189.6s-3 3.7-2.1 4c.8.2 1-.4 1-.4s2.3-2 2.4-2.5c.2-.5-1.2-1.2-1.2-1.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.7 190.5s-2.1 3.7-1.6 4c.6.2 1.5-.8 2.4-1.9.9-1-.8-2.1-.8-2.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M309.3 192.2s-1.3 2.3-1 3c.4.8 1.6-.5 2.2-1.3.6-.8-1.2-1.7-1.2-1.7zm.5 6.5s-.8 3.2-.2 3.5c1.3.7 2-2.2 2.2-3.2.1-1.2-2-.3-2-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.7 194.4s-.9-.3-1.5-.3c0 0-1.9-1.4-3-1.6-1-.1 0-.2 0-.2s-.2-2.4-.5-2.6c0 0-.1-2.5-1.7-2.6-1.6-.2-5.1.1-5.7-.1-.7-.3-2.6-1-6.3 0-3.8 1-11.2 4.3-11.6 4.4-.4 0 8.5-2 11-3l3.3-.5s-2.8 1.4-.2.8c2.6-.6 2 0 2 0s-.2.6 1.3.3c1.4-.4 1.4 0 1.4 0s1.7.6 3-.2c0 0 .7 2.3 1.6 2.6 0 0 1 2.2 3.1 2.6l1.2.9 1.2.4 1.3-1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M298.3 188s-8.6 3-8.3 3.9c.4.8 9-2.4 10.3-3.2 1.4-1-2-.7-2-.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m321.8 194.6.5.2a1.5 1.5 0 0 0-.3-.3l-.7-.3.1.2.4.2M315 201c.2.2.2.5.3.8v-.2c-.1-.2-.1-.5-.3-.7v.1m1.2-6.5.9-.2v-.1l-.9.1v.2m1.7-.2.8-.1a.3.3 0 0 0 0-.1 2 2 0 0 0-.8.1v.1m-3 1.5a.3.3 0 0 0 0 .2v-.2m-.1 4.6a4.8 4.8 0 0 0 0 .7.4.4 0 0 0 0-.1v-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd8759",
    d: "M316.6 213.9s-1 .7-1 1a3.8 3.8 0 0 0-.2.8s.8-.1.7.3c0 0 .3.2.8-.8.4-1 .8-1.5 1.1-1.5.4 0 .8.4 1 .6.2.2.4.4.8.3 0 0-.4-.6-.2-.7l.6-.1s-.3-.7-.9-.8c-.6-.1-1-.3-1-.6.2-.2 1-2.4 1-2.4l-1-1.5-.5 1.3.2 1-1 2.1c0 .1-2.4 1-2.7 1l-.8.9v.5s.3-.4.4-.2c0 0 .3-.3.6-.2.2.1.1.2.1.2l.5-.4.1-.1.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M316.6 213.9s-1 .7-1 1a3.8 3.8 0 0 0-.2.8s.8-.1.7.3c0 0 .3.2.8-.8.4-1 .8-1.5 1.1-1.5.4 0 .8.4 1 .6.2.2.4.4.8.3 0 0-.4-.6-.2-.7l.6-.1s-.3-.7-.9-.8c-.6-.1-1-.3-1-.6.2-.2 1-2.4 1-2.4l-1-1.5-.5 1.3.2 1-1 2.1c0 .1-2.4 1-2.7 1l-.8.9v.5s.3-.4.4-.2c0 0 .3-.3.6-.2.2.1.1.2.1.2l.5-.4.1-.1.6-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd8759",
    d: "M323.1 209.2v2.1c0 .3 0 .8-.2 1.1-.2.3-.4.5-.7.5-.3 0-1 0-1.2.3l-.3.4s.5-.3.6 0l-.2.6.9-.2.8-.3.4.2v1c0 .4 0 1.2.3 1.2l.4-.5.5.5-.1-1.2a6.7 6.7 0 0 1-.3-1l1.5.6c0 .2.4.5.5.5.1 0 0-.5.2-.5.3-.1.4 0 .4 0s-.4-.8-1-1c-.5-.4-1-.4-1.2-.6l-.3-.9v-2.8l-1-.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M323.1 209v2.3c0 .3 0 .8-.2 1.1-.2.3-.4.5-.7.5-.3 0-1 0-1.2.3l-.3.4s.5-.3.6 0l-.2.6.9-.2.8-.3.4.2v1c0 .4 0 1.2.3 1.2l.4-.5.5.5-.1-1.2-.3-1s1.4.5 1.5.7l.5.4c.1 0 0-.5.2-.5.3-.1.4 0 .4 0s-.4-.8-1-1c-.5-.4-1-.4-1.2-.6l-.3-.9v-2.8l-1-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dcddde",
    d: "M315 197.3s0-1.3.3-1.4c0 0 .1-1.2 1.7-1 0 0 .5-.9 1.4-.4 0 0 .8-.4 1.3-.2l1 .7s.7-.1 1 .1c.3.3.2 1.1.2 1.1s.8.6.8 1.1v.9s.3.3.2.7c0 .4-.4 1-.4 1-.1 0 0 1-.3 1.3l-.8.5c-.2 0-.6.6-1 .6-.3 0-.8-.5-.8-.7 0-.2-.6-.4-.6-.4s-1 1.2-1.8 1c-.8-.2-1.1-.8-1.2-1l-.3-1s-.8-.4-.7-.9c0-.4.4-1 .4-1l-.3-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m317.8 212-.2-.1m.6-.9a.8.8 0 0 1-.3-.1m0 .6h.2m5.5.5.5.2m-.2-.6h-.3m.4-.5a.9.9 0 0 1-.5 0m0 1.8.4.1m-.4.5a.2.2 0 0 1 .2 0m-.1 1.6a.4.4 0 0 1 .3 0m-5.1-2a.3.3 0 0 0-.3.1m1-.1c-.1.1-.3.2-.3.4m-4.5.5.4.3m10-1a.3.3 0 0 0-.3.3m.7-.1a.2.2 0 0 0 0 .2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "M313.4 215h.6s-.3.7-.2.8c0 .2-.5-.3-.3-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M313.4 215h.6s-.3.7-.2.8c0 .2-.5-.3-.3-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "M315.6 215.5s-.7 1 .1 1.5c0 0 0-1 .6-1.1l-.8-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M315.6 215.5s-.7 1 .1 1.5c0 0 0-1 .6-1.1l-.8-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "m319.6 214.5-.2-.5.2-.3h.6s.4.9 0 1.3c0 0 0-.5-.2-.5h-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m319.6 214.5-.2-.5.2-.3h.6s.4.9 0 1.3c0 0 0-.5-.2-.5h-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "M321 213.4h.3l.1.3v.3l-.3.2s-.5-.2-.4.5c0 0-.3-1.2.2-1.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M321 213.4h.3l.1.3v.3l-.3.2s-.5-.2-.4.5c0 0-.3-1.2.2-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "m323.5 215.9.4-.4.4.2-.3 1.2-.2-.3-.3-.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m323.5 215.9.4-.4.4.2-.3 1.2-.2-.3-.3-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "m326 214.8.5 1s.6-.6-.2-1.5l-.4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m326 214.8.5 1s.6-.6-.2-1.5l-.4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m323.3 195.9.2.2v-.1l-.2-.2m.1 2.2.4.7v-.2a1.7 1.7 0 0 0-.4-.7v.2m-.4-1.6.5.6v-.2l-.5-.5v.1m.5 3.5c0 .3 0 .6-.2.8v.2c.2-.4.2-.7.2-1.1a.5.5 0 0 0 0 .1m.5 1v.5a.4.4 0 0 0 0 .1 2.2 2.2 0 0 0 0-.6m1.8 3.9a4.8 4.8 0 0 1 .1 1.3l-.1-1.5v.2m-.3.8-.4 1 .4-.8v-.2m-10.3-2.9.7 1.2v-.1l-.7-1.2v.1m1.8 0c-.2 0-.3-.3-.5-.4v.2c.2 0 .3.4.5.4v-.2m-1 1.8.5 1v-.2l-.5-1v.2m1.2.4.5.8v-.1c0-.3-.3-.6-.5-.8m0 1.3.2.7v-.1l-.3-.7v.1m1.1.3a2.8 2.8 0 0 1 .1.7 3.3 3.3 0 0 0 0-.9v.2m-.5 1c0 .3.1.7.3 1v-.2a3.2 3.2 0 0 1-.3-.9.4.4 0 0 0 0 .1m.2-4.4.8.3v-.1a8 8 0 0 1-.8-.3v.1m.2 1.2 1 .4c-.3-.3-.7-.4-1-.6v.2m.3 1.2.6.6v-.1a4.5 4.5 0 0 1-.6-.6v.1m.4 1.6.2.7a1.8 1.8 0 0 0-.2-.8v.1m1-4v.5a10 10 0 0 1 0-.5m2.3-.9a3.6 3.6 0 0 1-.2.5v.1l.2-.4v-.2m1 0v.8a.4.4 0 0 0 0 .1 4.2 4.2 0 0 0 0-1m.2 1.6v.7a3.7 3.7 0 0 0 0-.8m.7 1.5c0 .3-.2.6-.5.8v.1c.3-.2.5-.4.5-.8m-2.4-1.5-.2.4v.1l.2-.4m.3 1.8a1.9 1.9 0 0 1-.4.4v.1c.2 0 .3-.2.4-.3v-.1m-.9 1c-.3-.4-.4-.8-.3-1.3v-.1c-.2.5 0 1 .3 1.5v-.2m-1-1-.1.5v-.6m2.6 1.3c0 .3-.2.5-.3.7v.1l.3-.6v-.2m1.7.7a9.2 9.2 0 0 1-.5.7v.2l.5-.8m.8.8a17 17 0 0 0-.2 1.3v.1l.2-1.3a.6.6 0 0 0 0-.1m1-1.6v.5-.5M315 202l.1 1.3v-.2a2.2 2.2 0 0 1-.1-1 .6.6 0 0 0 0-.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M318.8 196.3c.7-.6 1.7-1.3 2.7-1v-.2c-1-.2-2 .5-2.7 1.1v.1m3.5.8c-.8-.5-2-.6-2.7 0 .7-.5 2-.3 2.7.2v-.2m-2.8 1.1c.3 1 .7 2 .5 3 .2-1-.2-2-.5-3m-1.1.6v3c0-1 .2-2 0-3.1a.4.4 0 0 0 0 .1m1.5-.7c1 .2 1.9.9 2.4 1.7v-.1a3.9 3.9 0 0 0-2.4-1.7v.1m-.8 1.3c0 .6 0 1.2-.2 1.8.2-.5.2-1.2.2-1.8m1.4-.1a3.1 3.1 0 0 1 1.2 2v-.1a3.2 3.2 0 0 0-1.2-2m-4.3 1.7c.2-.3.4-.6.8-.7v-.1c-.4 0-.6.4-.8.7v.1m1.4-5c-.1-.6-.5-1-1-1.2v.1c.5.3.9.6 1 1.2v-.2m-.8 0c-.5-.2-1-.2-1.5-.2a.3.3 0 0 0 0 .1c.5 0 1 0 1.5.3v-.2m1.5 0c0-.6 0-1-.4-1.3.3.3.5.7.4 1.2m1.8.7c.5-.3 1-.2 1.5-.2v-.2c-.5 0-1 0-1.5.2v.2m.9 1.2a2.6 2.6 0 0 1 1.7 1v-.3a2.6 2.6 0 0 0-1.7-1v.3m-3.1 2c-.2.6 0 1.5-.9 1.8v.2c.8-.3.7-1.1.9-1.8v-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M319.5 199c.3.7.7 1.4.5 2.2a.9.9 0 0 0 0 .3c.2-1-.1-1.8-.5-2.7v.2m1-.1c.7 0 1.3.7 1.4 1.4a1 1 0 0 0 0-.2 1.7 1.7 0 0 0-1.4-1.5v.3m0 1c.1.6.3 1.2.1 1.8v.2c.3-.7 0-1.5 0-2.2a1 1 0 0 0 0 .2m-.4-2.6c.7-.1 1.5-.2 2.2.3v-.3c-.7-.5-1.5-.4-2.2-.2v.2m-1.4-1.5c0-.6.6-1 1.2-1.3v-.2c-.6.2-1.2.6-1.3 1.3a1 1 0 0 0 0 .2m-.6.4c0-.7-.4-1.3-.7-1.9v.2c.3.6.6 1.1.6 1.8v-.1m-.6.4a2 2 0 0 0-1-1.4v.3c.5.3.9.7 1 1.3a.8.8 0 0 0 0-.2m-1-.3a2.9 2.9 0 0 0-1.2-.5v.2c.5 0 .8.3 1.2.5v-.2m2.2 3c0 .6.2 1.3-.2 1.9v.2c.4-.7.3-1.6.2-2.3v.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M319.4 198.9c.2.6.5 1.3.4 2a5.8 5.8 0 0 0-.4-2.3v.3m.5-1c.6.3 1.3.5 1.7 1v-.3a3.6 3.6 0 0 0-1.7-.9v.3m-1.7-1.4a14.8 14.8 0 0 0 0-1.7 11.8 11.8 0 0 1 0 1.7m-1.2-.4a5.6 5.6 0 0 1-1.2-.8v.2l1.2.9v-.3m-.2 3.3c-.3.2-.5.5-.6.8v.2a1.6 1.6 0 0 1 .6-.7v-.3m.9.5c0 .5-.3.9-.6 1.2v.2c.4-.4.6-.8.6-1.3 0 0 0-.3 0 0m2.1-3.6c.4-.6 1.3-.7 1.9-.9v-.2c-.6.2-1.5.2-2 .8v.3m-4 0a2 2 0 0 1-.5-.3v.2l.4.2v-.2m.1 3-.4.3v.1a.7.7 0 0 0 0 .1.8.8 0 0 1 .4-.2.7.7 0 0 0 0-.2m.5.1-.6.6v.2l.6-.6v-.2m1 .3c-.1.6-.8 1.2-.3 1.8v-.2c-.3-.5.2-1 .4-1.4v-.2m.7 0c0 .6 0 1.1-.2 1.7a.9.9 0 0 0 0 .2 9.8 9.8 0 0 0 .2-2m1.9-.6c.4.5.8 1.1 1 1.8v-.2a5 5 0 0 0-1-1.9v.3m.2-.5c.7.6 1.5 1 2 1.8v-.2c-.5-.8-1.3-1.3-2-1.8v.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M320.5 197.8h.8l.6.5.6.4c.2.2.2.6.3.9a.7.7 0 0 0 0-.2l-.2-.7c0-.2-.3-.4-.5-.5l-.7-.4a1.4 1.4 0 0 0-.9-.2v.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m322.3 199.3.2.6v-.1l-.2-.7v.2m-2-3.6 1.5-.4v-.3l-1.5.4v.3m-2 .2c0-.2.1-.5.3-.7l.4-.8v-.3l-.4.7c0 .3-.3.5-.4.9v.2m-1.7 4.6.1 1.3v-.2a1.4 1.4 0 0 1 0-.8.7.7 0 0 0 0-.2s0-.1 0 0m1 .7c-.2.3-.2.6-.1 1a.3.3 0 0 0 0-.2v-.7m.8-.5-.2.7v.2l.2-.8s0-.2 0 0m0-1.5v.4-.5.1m-.3.2v.1a.7.7 0 0 0 0 .3v-.7.4m-.5-.2-.1.5a.8.8 0 0 0 0 .2 3.3 3.3 0 0 1 .1-.4v-.2m-.4 0-.8.6v.3l.8-.7v-.2m-.6 0a1.6 1.6 0 0 1-.5.3v.3c.2 0 .3-.2.5-.3v-.2m-1-.3-.4.2v.2c.2 0 .3 0 .4-.2v-.2m2.9 0v.4a.8.8 0 0 0 0-.2v-.4.1m.4-.2.1.6v-.3a1 1 0 0 1 0-.3v-.1.1m.3 0v.3h.1a.8.8 0 0 0-.1-.6v.2m.4-.2.4.2v-.2a.8.8 0 0 0-.4-.2v.2m.2-.3.6.3v-.3a1.2 1.2 0 0 1-.6-.3v.2m.5-1h.4v-.2a2.3 2.3 0 0 0-.4-.1v.3m-.3-.6.4-.3v-.3l-.4.4v.2m-.4-.5a1 1 0 0 1 .2-.5v-.2a1 1 0 0 0-.2.7m-.3-.2.4-.8v-.2l-.4.7v.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M318.6 195.3v.9a.7.7 0 0 0 0-.3 3.7 3.7 0 0 1 0-.7v.1m-1.3.2.2.3v.6l.1-.5-.3-.6v.2m-.2.5a4.5 4.5 0 0 0-.6-.4v.2l.6.5v-.2m.8.2c0-.6 0-1.2-.2-1.7v.3c.2.4.3.7.2 1.2a.8.8 0 0 0 0 .1m1.2-.7v-.2.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m317.7 196.3.2-1v-.2l-.2 1v.2m3.5 2c.3 0 .6.3.7.6v-.4c-.1-.3-.4-.5-.7-.6v.4m-1 2a1 1 0 0 1 0 .4 1.2 1.2 0 0 0 0 .3h.1v-1 .3m-.8-.5v1.2s0 .2 0 0v-1.4.2m-.4.4-.3 1.2a1 1 0 0 0 0 .3s0 .1 0 0l.3-1.2v-.3m.5.2v1.1a1.3 1.3 0 0 0 0 .3v-1.6.2m-2.6.2a.6.6 0 0 1 0 .1v.4c.1-.2.1-.6 0-.8 0-.1 0 0 0 0v.3m1.2-.8v.4c0-.3.1-.6 0-.8v.3m.3 0a.4.4 0 0 1 .1 0v.1a.8.8 0 0 0 0 .1v-.2l-.1-.5a1.3 1.3 0 0 0 0 .2v.2m.4-.3.1.3v-.3l-.1-.4a.9.9 0 0 0 0 .1v.2m.8-.2.5.6v-.4a9.3 9.3 0 0 1-.5-.6v.4m.5-.8.3.6v-.4a4.1 4.1 0 0 1-.3-.5v.3m-4.3-2a1.7 1.7 0 0 0-.4-.2 1.1 1.1 0 0 0 0 .2v.2l.4.3v-.4m1.3-.5a.5.5 0 0 1 0 .1.8.8 0 0 0 0 .2v-.3a1 1 0 0 0 0-.4.8.8 0 0 0 0 .2v.2m1-1v.8c-.1 0-.1.1 0 .2v.1l.1-1.2a.6.6 0 0 0 0-.1v.2m.2 1.5.5-.7v-.3l-.5.6v.4m.7 0 .2-.3v-.4l-.2.2a1.3 1.3 0 0 0 0 .2v.2m1 .2a7.6 7.6 0 0 1-.8 0v.4h.8v-.4m-.3.9 1 .6v-.4l-1-.6v.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m320 198 .8.5v-.4l-.8-.5a2 2 0 0 0 0 .2v.2m-2-1.4.1-.5v-.2.6m-2.3-1c.2.3.5.6.9.8l.6.7s.1-.4 0-.4l-.6-.6-1-.9c.1 0 0 .3 0 .4m.6 1a7.7 7.7 0 0 1-.4-.4 1.6 1.6 0 0 0 0 .2v.1l.4.5v-.3m-.3 2.5-.3.6v.4l.3-.6v-.4m.3.4-.1.6a1.3 1.3 0 0 0 0 .3l.1-.8v-.2a.6.6 0 0 0 0 .1m1 1.8c.2-.6.2-1.3.2-2v.2c0 .5 0 1-.2 1.4v.4m.6-1.5v.6a1.3 1.3 0 0 0 0 .3v-1.3a.6.6 0 0 0 0 .2v.2m.6-.2c.2.2.3.6.2 1v.1c.1-.5.1-1-.2-1.5v.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M318.6 199.3a12.6 12.6 0 0 1 .3 1.7v-.3l-.2-1.7v.3m.5-.1.6 1v-.3l-.6-1v.3m1.1-1c0-.1-.3-.2-.5-.1v.3c.2 0 .4 0 .5.2v-.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M319.7 198.1a7.5 7.5 0 0 1 1.1 0v-.4a7.5 7.5 0 0 0-1 0c-.1 0 0 .4 0 .4m.6-3c-.3.4-.4.9-.5 1.3v.3s0 .1 0 0c0-.4.2-.8.5-1.1v-.5m-1.5.4.2 1a.7.7 0 0 0 0-.2v-.2l-.2-1v.4m-.3.5a1.6 1.6 0 0 1-.3-.5.8.8 0 0 0 0 .2v.2l.2.5v-.3m-.5.2a4 4 0 0 1-1.2-.6v.4l1.2.6s.1-.4 0-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dba05f",
    d: "m318.5 196.2-2.2.4-1.8.2-1.3-.4c-.3 0-1.6-.2-2 .3l-.9.8c-.1.1-.7.6-.7.9 0 .2.1.5.4.5.3 0 .9.6.9.7 0 .3.8.5 1.5.5 1.3 0 2-.7 4-.5 1 .2 3-.7 3.4-1.2.4-.5.6-1 .2-1.7-.3-.6-1.4-.5-1.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "m318.5 196.2-2.2.4-1.8.2-1.3-.4c-.3 0-1.6-.2-2 .3l-.9.8c-.1.1-.7.6-.7.9 0 .2.1.5.4.5.3 0 .9.6.9.7 0 .3.8.5 1.5.5 1.3 0 2-.7 4-.5 1 .2 3-.7 3.4-1.2.4-.5.6-1 .2-1.7-.3-.6-1.4-.5-1.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M311.4 198.1v-.1l.1-.1.1-.2a.8.8 0 0 1 .4-.3h.5-.2.2-.2l-.3.1c-.3 0-.3.4-.6.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m311.3 198 .4-.4.6-.3h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m312 197.4-.4.3c0 .2-.3.3-.3.3m.7-.5h.5m-.6 0h.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M312.4 197.9v-.1l-.2.1-.1.1-.3.2-.3.1.4-.2-.4.2.4-.1-.3.1h.1s.3 0 .7-.4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m312.3 197.8-.3.2-.3.2-.2.1m.4-.1.2-.2.2-.2m-.4.4-.3.1m.4-.1-.3.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6262c",
    d: "M312.9 196.5s0-.6-.6-.8c-.5-.2-1-.2-1.3-.2l-.5.2a2.5 2.5 0 0 0-.6.2l-.1.2c-.1.2-.4.4-.3.6.2.3 0 .3.2.3s-1 .3-.8.8c.3.6.5.4.6.3l.5-.2.7-.7 1-.4h.5l.7-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M312.9 196.5s0-.6-.6-.8c-.5-.2-1-.2-1.3-.2l-.5.2a2.5 2.5 0 0 0-.6.2l-.1.2c-.1.2-.4.4-.3.6.2.3 0 .3.2.3s-1 .3-.8.8c.3.6.5.4.6.3l.5-.2.7-.7 1-.4h.5l.7-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M312.2 197.8c0 .1-.1.3-.3.3h-.3s.1-.4.3-.4h.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "M308.6 200.2s-.7-1.2 1.2-1.8c0 0 .6.3.8.6 0 0-.4.5-1.5.7 0 0-.5.1-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.6 200.2s-.7-1.2 1.2-1.8c0 0 .6.3.8.6 0 0-.4.5-1.5.7 0 0-.5.1-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d9c0b9",
    d: "M308.8 200s.8.2 1.3-.2c.5-.3.6-.2.7-.1 0 0 0-.4-.2-.7l-1 .5c-.4.2-.7.1-.8.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M308.8 200s.8.2 1.3-.2c.5-.3.6-.2.7-.1 0 0 0-.4-.2-.7l-1 .5c-.4.2-.7.1-.8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7a2e26",
    d: "M311 199.6h.5v-.1h-.5a.3.3 0 0 0 0 .1m-.3-2-.1.2v.1l.1-.2v-.1m.5.2.3-.2v-.1c-.2 0-.3 0-.3.2v.1m.5.8a.3.3 0 0 0 .2-.2.3.3 0 0 1-.2 0v.2m.4-.2a.8.8 0 0 0 .4-.3v-.1a.7.7 0 0 1-.4.3v.1m-.7-.7c0 .2-.2.2-.3.4v.1c0-.1.3-.2.3-.4m.3 2c.4 0 .7 0 1-.2a3.1 3.1 0 0 1-1 0v.2m1.6 0c.4-.4.8-.7 1-1.3a2 2 0 0 1-1 1v.2m.3-.8c.3-.2.5-.4.6-.8v-.1a1.6 1.6 0 0 1-.6.8v.1m-.2-2 .7.4v-.1l-.7-.4v.2m6.3 1c.2-.5 0-1-.2-1.4.2.4.4.8.2 1.2v.2m-4.8-.7c.3.2 1 .7.8 1.2.3-.5-.4-1-.8-1.3v.1m2.1 2a1.4 1.4 0 0 0 .1-.3 1.3 1.3 0 0 1 0 .3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5e3f17",
    d: "m317.9 199.2.5-.2m-8.5-.3c-.3.2-.8.2-1 .7.2-.5.7-.5 1-.6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842116",
    d: "M309.7 197.3c.1 0 .3 0 .3.2a.4.4 0 0 0 0 .1.7.7 0 0 0 0-.3l-.3-.1m.7.4a.7.7 0 0 0-.1-.6v.5m.6-.5c0-.3-.1-.5-.3-.6v.1c.2.1.3.4.3.6a.4.4 0 0 0 0-.1m.5-.1c0-.3 0-.5-.2-.6v.1l.2.3a.4.4 0 0 0 0 .1m-.8-.7c.4-.2 1.4-.3 1.8.2v-.2c-.4-.4-1.4-.3-1.8 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7a2e26",
    d: "M309.5 198.1v-.5s-.1 0 0 .1v.4m4.7 1.4a.6.6 0 0 0 .3-.5.6.6 0 0 1-.3.3v.2m.7 0a.4.4 0 0 0 .1-.3v-.1.3m4.3-2.4a1 1 0 0 1 0 .7.4.4 0 0 0 0 .1v-.9.1m-.5.5v.7c.1-.3.2-.6 0-.9v.2m-.4.3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M324.3 210.5v.2l.1.1-.1-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dcddde",
    d: "M314.4 195c-1.7 0-3.3-1-3.3-1a2.7 2.7 0 0 1-2.3-2.4c-.8-.4-1.6-2.5-1.6-2.5-1.3.7-3 0-3 0s0-.4-1.4 0c-1.5.3-1.3-.3-1.3-.3s.6-.6-2 0 .2-.8.2-.8c-.8.2-3.3.4-3.3.4-.9 0-1.8.5-2.8.8l-2.3.6-6.8 3-5.5 2.1c.2 0 3.4-2.1 7.5-4a87.8 87.8 0 0 1 10.3-3.9 9.9 9.9 0 0 1 6.5 0c.6.2 4.2 0 5.7 0 1.6.3 1.8 2.9 1.8 2.9.3.1.4 2.6.4 2.6s-1 0 .1.1c1 .2 2.9 1.7 2.9 1.7h.7s.4-.5.9-.7l1.5-.5a11.6 11.6 0 0 1 2 0l2 .3 1.2.3h.5c1-.5 3-1.2 3.4-1.1 0 0 .7-.2 1.1-.5a105 105 0 0 0 1.3-1s-.6-4.5 3.9-4l11.5 1.2a43.9 43.9 0 0 1 6.5 1.8l5.2 2.4 4 1.7c2.3 1 4 2.4 4 2.4-1.5-.6-2.6-1.3-3.7-1.8-.9-.4-1.8-.5-2.6-.9l-3.6-1.7c-3.5-1.6-3.5-1.7-4.9-1.8-1 0 .7 1.2.7 1.2l-4.1-1.7a6 6 0 0 0-2.9-.5 5.8 5.8 0 0 1-2.2-.3c-.6-.2-3.8-.3-4.4-.4a7.3 7.3 0 0 1-1-.2l.2.4-1.5-.3-.5.7s-1.5.3-1.6-.2c-.1-.5-1 2.2-1.3 3-.4.8-2.2.6-2.7 1-.4.5-1.4.9-1.6 1h-1.3c-.6 0-.1 0-1 .3 0 0-.9 0-1.2-.2l-1.4-.4a27.5 27.5 0 0 0-3.5-.2 5.4 5.4 0 0 0-2.7 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e7e7e7",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M314.4 195c-1.7 0-3.3-1-3.3-1a2.7 2.7 0 0 1-2.3-2.4c-.8-.4-1.6-2.5-1.6-2.5-1.3.7-3 0-3 0s0-.4-1.4 0c-1.5.3-1.3-.3-1.3-.3s.6-.6-2 0 .2-.8.2-.8c-.8.2-3.3.4-3.3.4-.9 0-1.8.5-2.8.8l-2.3.6-6.8 3-5.5 2.1c.2 0 3.4-2.1 7.5-4a87.8 87.8 0 0 1 10.3-3.9 9.9 9.9 0 0 1 6.5 0c.6.2 4.2 0 5.7 0 1.6.3 1.8 2.9 1.8 2.9.3.1.4 2.6.4 2.6s-1 0 .1.1c1 .2 2.9 1.7 2.9 1.7h.7s.4-.5.9-.7l1.5-.5a11.6 11.6 0 0 1 2 0l2 .3 1.2.3h.5c1-.5 3-1.2 3.4-1.1 0 0 .7-.2 1.1-.5l1.3-1s-.6-4.5 3.9-4l11.5 1.2a43.9 43.9 0 0 1 6.5 1.8l5.2 2.4 4 1.7c2.3 1 4 2.4 4 2.4-1.5-.6-2.6-1.3-3.7-1.8-.9-.4-1.8-.5-2.6-.9l-3.6-1.7c-3.5-1.6-3.5-1.7-4.9-1.8-1 0 .7 1.2.7 1.2l-4.1-1.7a6 6 0 0 0-2.9-.5 5.8 5.8 0 0 1-2.2-.3c-.6-.2-3.8-.3-4.4-.4a7.3 7.3 0 0 1-1-.2l.2.4-1.5-.3-.5.7s-1.5.3-1.6-.2c-.1-.5-1 2.2-1.3 3-.4.8-2.2.6-2.7 1-.4.5-1.4.9-1.6 1h-1.3c-.6 0-.1 0-1 .3 0 0-.9 0-1.2-.2a17.9 17.9 0 0 0-1.4-.4c-.5-.2-3.1-.2-3.5-.2a5.4 5.4 0 0 0-2.7 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#452c25",
    d: "M314.6 194.4s-.2.2-.2.5v.2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#574f4c",
    d: "m323.3 194 .7.5a.5.5 0 0 0-.1-.1 6.5 6.5 0 0 0-.7-.6.6.6 0 0 0 0 .1"
  }));
});
BOL.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BOL.displayName = 'BOL';
export default BOL;