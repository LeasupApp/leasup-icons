var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var MDA = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00319c",
    d: "M0 0h213.3v480H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffde00",
    d: "M213.3 0h213.4v480H213.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M426.7 0H640v480H426.7z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#ff1900",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".7",
    d: "m360.4 320.4 24.2 35c1.4 2 2.7 3.9.7 5.2-2 1.3-1.4 6.4 0 8.4 2.7 3.9 6 4.5 8 3.2l18.4-11.6c2-1.2 2.7-4.5 0-8.4-1.5-2-6-4.5-8-3.2-2.1 1.3-3.5-.7-4.8-2.6l-24.3-35"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a77b3b",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M177.2 696.3c0 24.4-9.6 44.3-21.3 44.3-11.7 0-21.3-19.9-21.3-44.3S144.3 652 156 652s21.3 19.8 21.3 44.3z",
    transform: "matrix(.52728 -.42386 .44358 .50386 -32.4 20)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff1900",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".7",
    d: "m262 306.1-21.5 36.7c-1.2 2-2.4 4-4.5 3-2.1-1.2-6.6 1.7-7.8 3.8-2.4 4-1.5 7.2.7 8.4l19.2 10.2c2 1.1 5.4.2 7.8-3.8 1.1-2.2 1.4-7.3-.7-8.4-2.1-1.1-1-3.2.3-5.2l21.4-36.7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a77b3b",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.7",
    d: "M331.2 280.6h-19.6c-.6.6-6.2 35.6-12.2 49-7.3 16.3-29.2 30.7-29.2 30.7s13.1 4 17 6.6c1-.3 22-4.7 24.4-30.3 2.4 25.6-14.6 37.3-14.6 37.3s24.4 7 24.4 23.3c0-16.3 24.4-23.3 24.4-23.3s-12.2-11.7-14.7-37.3c5 25.6 23.5 30 24.5 30.3 3.9-2.6 17-6.6 17-6.6s-21.9-14.4-29.2-30.7c-6-13.4-11.6-48.4-12.2-49zm-83-116.7 36.6 11.7c12.1 0 24.4-11.7 24.4-23.4.4-26-9.8-35-12.2-35l4.8-4.6-7.3-7s2.5-12.1 26.9-11.7c24.4.5 24.4 11.7 24.4 23.3s-12.2 11.7-12.2 35c0 11.7 12.2 23.4 24.4 23.4l36.6-11.7v116.7H248.1V163.9z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".5",
    d: "m302.2 292.2 14.6 15 14.7-15 14.6 15 29.3-15 14.3 15.8 15-15.8 21.6 15.8 22.3-15.8 14.6 15 14.7-15",
    transform: "matrix(.16672 0 0 .46773 253.9 31.9)"
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: ".2",
    d: "m432.3 435.8-7.1 39m10.6-39v39m7.1-39v39m7.1-39 3.5 39m3.6-39 3.5 39",
    transform: "matrix(.68905 0 0 .65843 16.2 -144)"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#000",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#a77b3b",
    fillRule: "evenodd",
    d: "M318.9 361.4c35.4 17.7 35.4 53.2 35.4 70.9-1.2 16.1 0 354.3 0 354.3s-2.3-20-17.7-35.4L319 733.5l-17.7-17.7c-13-11.8-17.7-35.5-17.7-53.2v-248s0-17.8 35.4-53.2z",
    transform: "matrix(-.68905 0 0 .65843 443.4 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(-.68905 0 0 .65843 443.4 -237.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(-.68905 0 0 -.65843 443.4 530.2)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(-.68905 0 0 .65843 443.4 -190.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 557-.2 158.8",
    transform: "matrix(-.68905 0 0 1.24911 443.4 -566.8)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 539.3-.2 176.5",
    transform: "matrix(-.68905 0 0 1.12111 431.4 -464)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 539.3-.2 176.5",
    transform: "matrix(-.68905 0 0 1.2559 419.2 -548.3)"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#000",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#a77b3b",
    fillRule: "evenodd",
    d: "M318.9 361.4c35.4 17.7 35.4 53.2 35.4 70.9-1.2 16.1 0 354.3 0 354.3s-2.3-20-17.7-35.4L319 733.5l-17.7-17.7c-13-11.8-17.7-35.5-17.7-53.2v-248s0-17.8 35.4-53.2z",
    transform: "matrix(.68905 0 0 .65843 199.3 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(.68905 0 0 .65843 199.3 -237.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(.68905 0 0 -.65843 199.3 530.2)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7",
    transform: "matrix(.68905 0 0 .65843 199.3 -190.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 557-.2 158.8",
    transform: "matrix(.68905 0 0 1.24911 199.3 -566.8)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 539.3-.2 176.5",
    transform: "matrix(.68905 0 0 1.12111 211.4 -464)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "m301.4 539.3-.2 176.5",
    transform: "matrix(.68905 0 0 1.2559 223.6 -548.3)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#a77b3b",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M177.2 696.3c0 24.4-9.6 44.3-21.3 44.3-11.7 0-21.3-19.9-21.3-44.3S144.3 652 156 652s21.3 19.8 21.3 44.3z",
    transform: "matrix(.63605 .25323 -.26502 .60778 361.1 -165.2)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    fillRule: "evenodd",
    d: "M248.1 175.6h146.5v70H248.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#564dff",
    fillRule: "evenodd",
    d: "M248.1 245.6h146.5v35c0 23.3-36.6 23.3-73.2 46.6C284.7 304 248 304 248 280.6v-35z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#ff0",
    strokeWidth: "2",
    d: "M336.6 485.4h212.6V645c0 35.4-53.1 35.4-106.3 70.9-53.1-35.5-106.3-35.5-106.3-71V485.5z",
    transform: "matrix(.68905 0 0 .65843 16.2 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M385.6 129.9S335 185.4 335 238.5c0 53.1 53.1 70.9 53.1 70.9s-17.7 0-17.7 70.8c0 35.5 53.1 17.8 53.1 35.5s-.7 60.5 0 88.6c0 17.7-35.4 0-35.4 17.7 0 8.8 26.6 53.1 53.2 53.1s53.1-44.3 53.1-53.1c0-17.7-35.4 0-35.4-17.7v-88.6c0-17.7 53.1 0 53.1-35.5 0-70.8-17.7-70.8-17.7-70.8s53.2-17.7 53.2-70.9-50.7-108.6-50.7-108.6 28.5 73.2 28.5 108.6c0 17.7-13.3 53.2-48.7 53.2 0 0-9-17.8-17.7 0 0 0-10.2-17.8-17.7 0-2.6 6-7.2-17.8-17.8 0-4.4 4.7-8-17.8-17.7 0-17.7 0-53.1-17.8-53.1-53.2s32.9-108.6 32.9-108.6z",
    transform: "matrix(.48234 0 0 .30917 108.5 140.1)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M382.7 248c-3.6 3.6 4.6 61.3 7 63.8 3.6 3.5 24.9 3.5 28.4 0 2.5-2.5 0-56.7-3.5-60.2-3.6-3.6-29.4-6-32-3.6z",
    transform: "matrix(.48234 0 0 .30917 110.4 201.6)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M382.7 248c-3.6 3.6 4.6 61.3 7 63.8 3.6 3.5 24.9 3.5 28.4 0 2.5-2.5 0-56.7-3.5-60.2-3.6-3.6-29.4-6-32-3.6z",
    transform: "matrix(-.48234 0 0 .30917 532.4 201.6)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M414.6 228.5a16 16 0 1 1-32 0 16 16 0 0 1 32 0z",
    transform: "matrix(.5544 0 0 .38542 82.7 183.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2.5",
    d: "M414.6 228.5a16 16 0 1 1-32 0 16 16 0 0 1 32 0z",
    transform: "matrix(.55441 0 0 .38543 118 183.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M336.8 307.5c0 1.5-2 2.7-4.3 2.7-2.4 0-4.3-1.2-4.3-2.7s2-2.7 4.3-2.7 4.3 1.2 4.3 2.7zm-22.3 0c0 1.5-1.9 2.7-4.2 2.7-2.4 0-4.3-1.2-4.3-2.7s1.9-2.7 4.3-2.7c2.3 0 4.2 1.2 4.2 2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "m439.4 550-7.8-10.3-12.8 1.7 1.8-12.8-10.3-7.7 10.3-7.8-1.8-12.8 12.8 1.8 7.8-10.3 7.8 10.3 12.7-1.8-1.7 12.8 10.2 7.8-10.2 7.8 1.7 12.7-12.8-1.7z",
    transform: "matrix(.67225 0 0 .64237 26 -133.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "m496 591.7 21.3 10.7 21.3-10.7-21.3-10.6-21.2 10.6z",
    transform: "matrix(.68905 0 0 .65843 16.2 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "m496 591.7 21.3 10.7 21.3-10.7-21.3-10.6-21.2 10.6z",
    transform: "matrix(.68905 0 0 .65843 -88.8 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M535 659c-3.5-7-14.1-10.6-21.2-10.6s-14.2 0-21.3 10.7c0-14.2 10.5-21.3 21.3-21.3a22.7 22.7 0 0 1 21.2 21.3z",
    transform: "matrix(.59753 -.3279 .34316 .57097 -165.2 86.5)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 13.7 -155.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 8.8 -139.4)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 6.4 -148.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 18.6 -139.4)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 21 -148.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z",
    transform: "matrix(.68905 0 0 .65843 13.7 -146.4)"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#da4500",
    d: "M297.8 120.4c-12.4 0-14 2-19.6 3.9 0-5.4 13.8-11.7 26-11.7 0 3.9-3.2 7.8-6.4 7.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cac9c7",
    d: "M316.5 108c0 2.5-2.2 4.6-4.9 4.6s-4.9-2.1-4.9-4.7 2.2-4.6 4.9-4.6 4.9 2 4.9 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M361.4 357.9v10.6h17.7v53.1h10.7v-53.1h17.7v-10.6h-17.7v-14.2H379v14.2h-17.7z",
    transform: "matrix(.68905 0 0 .65843 16.2 -144)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#da4500",
    d: "M304.3 112.6a78.5 78.5 0 0 0-29.3 3.9c0-7.2 8.4-15.6 22.8-15.6 3.2 0 6.5 7.8 6.5 11.7z"
  })), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#008500",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M67.3 613c-14.2-14.2-16.6-21.4 3.6-10.1l283.7 247.5-3.4 7L67.4 613z",
    transform: "matrix(.38821 .29653 -.14073 .23692 237.4 71.3)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#008f00",
    d: "M228.4 330.4c.8-10.6-18.6-22-19.4-21.3-.7.8 1.2 7 4.9 10.1-7-3.6-14.4-5.8-14.6-4.3-.6 2.2 11 7.2 12 9.2 0 1.4-8.6 1.2-8.4 2.6.2 1.4 24.3 13.6 25.5 3.7zM209 299.6c.8-10.6-18.6-22-19.3-21.3-.8.7 1.1 6.9 4.8 10.1-7-3.6-14.4-5.9-14.6-4.3-.5 2.1 11 7.2 12 9.2.1 1.4-8.5 1.2-8.4 2.6.2 1.4 24.3 13.5 25.5 3.7zm-14.8-28c.8-10.6-18.6-22-19.4-21.3-.7.7 1.2 6.9 4.9 10.1-7-3.6-14.4-5.9-14.6-4.3-.5 2.1 11 7.2 12 9.2 0 1.4-8.5 1.2-8.4 2.6.2 1.4 24.3 13.6 25.5 3.7zm-14.6-30.4c.7-10.5-18.6-22-19.4-21.3-.8.8 1.2 7 4.8 10.2-7-3.7-14.4-5.9-14.5-4.3-.6 2.1 11 7.2 11.9 9.1.1 1.4-8.5 1.3-8.3 2.7.1 1.4 24.2 13.5 25.5 3.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#008f00",
    d: "M184.6 239.9c9.4-5.7 7.5-27.4 6.5-27.6-1.1-.1-5.2 5-5.7 9.8-1.1-7.6-3.6-14.6-5-13.8-2.1.8.4 12.7-.7 14.6-1 1-6-5.8-7-4.8-1.2 1 2.8 26.7 12 21.8zm13.6 26.6c10.8-2.4 16.7-23.4 15.7-23.9s-6.6 3-8.7 7.4c1.6-7.5 1.7-14.9 0-14.6-2.3.1-4 12.1-5.7 13.5-1.3.6-3.7-7.3-5-6.8-1.4.6-6.6 26.1 3.7 24.4zm16.2 27.2c9.9-4.8 10-26.6 9-26.8-1-.3-5.5 4.5-6.5 9.2-.4-7.7-2.2-14.8-3.7-14.1-2.2.6-.8 12.6-2 14.4-1.2.9-5.5-6.3-6.7-5.4-1.2.8.4 26.8 10 22.7zm17.6 35.6c10.3-3.9 12.8-25.5 11.8-25.9-1-.3-6 4-7.5 8.6.4-7.7-.6-15-2.2-14.4-2.3.4-2.1 12.5-3.5 14.2-1.3.7-4.8-6.8-6-6-1.3.6-2.5 26.7 7.4 23.5z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#ff1900",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M209 776c0 7.8-10.2 14.2-23 14.2s-23-6.4-23-14.2 10.3-14.2 23-14.2 23 6.4 23 14.2z",
    transform: "matrix(.60164 .32097 -.3359 .5749 389.6 -146.8)"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#ff0",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: ".5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M156 414.6v-7.1h7v-7.1h7v7h7.2v7.2H170v17.7h-7v-17.7h-7zm7 60.2h7v205.5h-7z",
    transform: "matrix(.49887 .1571 -.1826 .4713 451.4 -3.7)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M159.4 676.8h14.2v56.7h-14.2zM156 439.4h21.3c14.1 0-3.6 39-3.6 39h-14.1s-17.8-39-3.6-39zm17.6-5.4c0 3-3.1 5.4-7 5.4s-7.1-2.4-7.1-5.3 3.1-5.4 7-5.4 7.1 2.4 7.1 5.4z",
    transform: "matrix(.49887 .1571 -.1826 .4713 451.4 -3.7)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#ff1900",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "1.1",
    d: "M209 776c0 7.8-10.2 14.2-23 14.2s-23-6.4-23-14.2 10.3-14.2 23-14.2 23 6.4 23 14.2z",
    transform: "matrix(.57449 -.36357 .38048 .54895 -2.3 4.2)"
  }));
});
MDA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MDA.displayName = 'MDA';
export default MDA;