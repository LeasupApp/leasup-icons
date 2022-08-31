function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var DMA = forwardRef(function (_ref, ref) {
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
    d: "M-85 0h682.7v512H-85z"
  }))), /*#__PURE__*/React.createElement("g", {
    "fill-rule": "evenodd",
    "clip-path": "url(#a)",
    transform: "translate(79.7) scale(.94)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "M-258.3 0H769.2v512H-258.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffd600",
    d: "M-260 178.2H772.6v50.1H-260z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffd600",
    d: "M181 0h48.5v512h-48.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M227.8 0h48.4v512h-48.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-260 226.6H772.6v50.2H-260z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-260 276.8H772.6v50.1H-260z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M276.2 0h48.5v512h-48.5z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "273.8",
    height: "275",
    x: "-394.6",
    y: "-393.9",
    fill: "#e72910",
    ry: "137.5",
    transform: "scale(-1)"
  }), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m250.5 137 5.6-16 5.1 15.7s17.1.5 17.1.2-13.5 10.3-13.5 10.3l6.1 17.6c-.2-.5-14.8-10.9-14.8-10.9s-14.8 10.4-14.5 10.4 5.6-17 5.6-17l-13.3-10.1 16.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "M251.3 137.7 256 124l4.4 13.6s14.9.4 14.9.2-11.7 9-11.7 9l5.2 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 5-14.8 5-14.8l-11.6-8.8 14.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m253.3 140 2.8-8 2.6 7.9s8.5.2 8.5 0-6.7 5.2-6.7 5.2l3 8.8c-.1-.3-7.4-5.4-7.4-5.4l-7.2 5.2c.2 0 2.8-8.5 2.8-8.5l-6.6-5 8.2-.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m356.9 211.8 5.6-16 5 15.7s17.2.6 17.2.3-13.5 10.3-13.5 10.3l6 17.6c-.2-.5-14.7-10.9-14.7-10.9s-14.8 10.4-14.5 10.4 5.6-17 5.6-17L340.3 212l16.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m357.6 212.6 4.9-13.9 4.4 13.7s14.8.4 14.8.2-11.7 9-11.7 9l5.3 15.1c-.2-.4-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7 14.3-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m359.7 214.9 2.8-8 2.5 7.8 8.6.2-6.8 5.1s3.2 9 3 8.8c0-.3-7.3-5.4-7.3-5.4l-7.3 5.1 2.8-8.5-6.6-5 8.3-.1z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m325.9 330.6 5.6-16 5 15.8s17.2.5 17.2.3-13.5 10.3-13.5 10.3l6 17.5c-.2-.5-14.7-10.8-14.7-10.8S316.7 358 316.9 358s5.7-17 5.7-17l-13.3-10 16.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m326.6 331.4 4.9-13.8 4.4 13.6s14.8.5 14.8.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7 14.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m328.7 333.7 2.8-8 2.5 7.9s8.6.3 8.6.1-6.8 5.2-6.8 5.2l3 8.7c0-.2-7.3-5.4-7.3-5.4l-7.3 5.2 2.8-8.5-6.6-5 8.3-.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m177.2 330.6 5.6-16 5 15.8s17.1.5 17.1.3-13.5 10.3-13.5 10.3l6.2 17.5c-.3-.5-14.8-10.8-14.8-10.8S168 358 168.2 358s5.7-17 5.7-17l-13.3-10 16.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m178 331.4 4.8-13.8 4.4 13.6s14.8.5 14.8.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7 14.3-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m180 333.7 2.8-8 2.5 7.9s8.6.3 8.6.1-6.8 5.2-6.8 5.2l3 8.7c0-.2-7.3-5.4-7.3-5.4l-7.3 5.2 2.8-8.5-6.6-5 8.3-.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m150 208.7 5.6-16 5.1 15.8s17.1.5 17.1.2-13.5 10.4-13.5 10.4l6.1 17.5c-.3-.5-14.8-10.8-14.8-10.8S140.8 236 141.1 236s5.6-17 5.6-17l-13.3-10 16.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m150.8 209.5 4.8-13.8 4.5 13.6s14.7.5 14.7.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.5 9 4.8-14.8 4.8-14.8l-11.5-8.7 14.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m152.8 211.8 2.8-8 2.6 7.9 8.5.1-6.7 5.2 3 8.7c-.1-.2-7.4-5.4-7.4-5.4l-7.2 5.2c.2 0 2.8-8.5 2.8-8.5l-6.6-5 8.2-.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m324.6 174.1-5.6 16-5-15.7s-17.2-.5-17.2-.3 13.5-10.3 13.5-10.3l-6-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17l13.3 10-16.6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "M323.9 173.3c0 .3-5 13.9-5 13.9l-4.3-13.6s-14.8-.5-14.8-.3 11.7-8.9 11.7-8.9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.7-14.4.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m321.8 171-2.8 8-2.5-7.8s-8.6-.3-8.6-.1 6.8-5.2 6.8-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2c-.2 0-2.9 8.5-2.9 8.5l6.7 5-8.3.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m367.3 290.3-5.6 16-5-15.8s-17.2-.5-17.2-.2S353 280 353 280l-6-17.6c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17L384 290l-16.6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m366.6 289.5-4.9 13.8-4.4-13.6s-14.8-.4-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.8-14.4.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m364.5 287.2-2.8 8-2.5-7.9s-8.6-.2-8.6 0 6.8-5.2 6.8-5.2l-3-8.8c0 .3 7.3 5.4 7.3 5.4l7.3-5.2c-.2 0-2.9 8.6-2.9 8.6l6.7 5-8.3.1z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m261.4 375.3-5.6 16-5-15.8s-17.2-.5-17.2-.3 13.5-10.3 13.5-10.3l-6-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17L278 375l-16.6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m260.7 374.4-4.9 14-4.4-13.7s-14.8-.5-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.7-14.3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m258.6 372.2-2.8 8-2.5-7.9s-8.6-.3-8.6-.1 6.8-5.2 6.8-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.5 6.6 5-8.3.2z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m162 290.3-5.7 16-5-15.8s-17.2-.5-17.2-.2 13.5-10.3 13.5-10.3l-6-17.6c.2.5 14.7 10.8 14.7 10.8L171 263l-5.7 17 13.3 10.1-16.6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m161.2 289.5-4.9 13.8-4.4-13.6s-14.8-.4-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.8-14.3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m159.1 287.2-2.8 8-2.5-7.9s-8.6-.2-8.6 0 6.8-5.2 6.8-5.2l-3-8.8c0 .3 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.6 6.6 5-8.3.1z"
  })), /*#__PURE__*/React.createElement("g", {
    "stroke-width": "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m198.7 175.8-5.6 16-5.2-15.7s-17-.5-17-.3 13.5-10.3 13.5-10.3l-6.1-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.6-10.3-5.6 17-5.6 17l13.2 10-16.5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffe700",
    d: "m197.9 175-4.9 14-4.4-13.7s-14.8-.5-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.8 14.8-4.8 14.8l11.4 8.7-14.3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#108c00",
    d: "m195.8 172.8-2.8 8-2.5-7.9s-8.5-.3-8.5-.1 6.7-5.2 6.7-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.5 6.6 5-8.3.2z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1.04 0 0 1.04 -250.6 359.4)"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#009200",
    stroke: "#000",
    "stroke-width": "2.5",
    transform: "matrix(.16 -.02 0 .18 429.8 -215.6)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "680.2",
    cy: "586.1",
    rx: "30.8",
    ry: "189.8",
    transform: "matrix(1.4 0 0 1 -534.3 263.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "680.2",
    cy: "586.1",
    rx: "30.8",
    ry: "189.8",
    transform: "matrix(1.5 0 0 1 -547.2 267)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "680.2",
    cy: "586.1",
    rx: "30.8",
    ry: "189.8",
    transform: "matrix(1.2 0 0 1.1 -365 214.1)"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#000",
    transform: "translate(72.9 -9.8)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#a95600",
    "stroke-width": ".5",
    d: "M388.5-53c6-.3 3.4-3.3 6.4-5 3-1.6 7.3-.6 8.6 1.4 1.3 2 .3 4 2 4s47-2.5 48.6-.9c1.6 1.7 2 5 .3 6.3-1.6 1.4-58.9 3-60.9 1.6s-5-7-5-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    "stroke-width": "3.9",
    d: "M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z",
    transform: "matrix(.15 0 0 .1 340.4 -81.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    "stroke-width": "3.9",
    d: "M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z",
    transform: "matrix(.15 0 0 .1 344.4 -81.6)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    "stroke-width": "3.9",
    d: "M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z",
    transform: "matrix(.15 0 0 .1 348.7 -81.8)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    "stroke-width": "3.9",
    d: "M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z",
    transform: "matrix(.15 0 0 .1 352.7 -81.8)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "478.4",
    cy: "-41.1",
    fill: "#a95600",
    "stroke-width": ".4",
    rx: "3.5",
    ry: "3.4",
    transform: "matrix(1.1 .02 -.02 1.15 -75.6 4.7)"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#009200",
    stroke: "#000",
    "stroke-width": "2.5",
    transform: "rotate(-5.8 688.4 -625.2)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 369.8 -361.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 364 -362.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 360.6 -370.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .35 369.3 -399.4)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 377.4 -379)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 373.2 -382.2)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 368 -386.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 363 -389.5)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#804bff",
    stroke: "#000",
    "stroke-width": ".5",
    d: "M482.6-141s-11.7 10-10.1 36.9c1.8 27 26.5 39.5 26.5 39.5s6.2-7.7 5.2-29.5c-2-31.8-13.8-45.7-13.8-45.7l-7.8-1.3z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#009200",
    stroke: "#000",
    "stroke-width": "2.5",
    transform: "rotate(4.5 181 769.9)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 369.8 -361.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 364 -362.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.17 0 0 .32 360.6 -370.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .35 369.3 -399.4)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 377.4 -379)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 373.2 -382.2)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 368 -386.7)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "427.1",
    cy: "905",
    rx: "20.8",
    ry: "24.1",
    transform: "matrix(.16 0 0 .33 363 -389.5)"
  })), /*#__PURE__*/React.createElement("ellipse", {
    cx: "624.4",
    cy: "606.1",
    fill: "#c90000",
    stroke: "#000",
    "stroke-width": "1pt",
    rx: "58.3",
    ry: "186.5",
    transform: "matrix(.16 -.06 .06 .15 369.6 -145)"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#009200",
    stroke: "#000",
    transform: "rotate(1 242.4 -1957.8)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.5",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.4 0 0 .3 445 -230.5)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 457.2 -236)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 452 -236)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.37 0 0 .27 449.5 -233.5)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.37 0 0 .27 449 -238)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 447 -238.8)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 448 -241.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.5",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.4 0 0 .3 432.8 -243.5)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.37 0 0 .27 446 -243.5)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 444.2 -247)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 436.1 -243.2)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 437.4 -243.9)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "218.1",
    cy: "356.8",
    "stroke-width": "1.6",
    rx: "10.8",
    ry: "12.9",
    transform: "matrix(.35 0 0 .3 439 -247)"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#009200",
    stroke: "#000",
    transform: "matrix(.18 0 0 .2 421 -216.8)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "564.5",
    "stroke-width": "2.5",
    rx: "67.4",
    ry: "205.6",
    transform: "matrix(.98 -.3 .36 .87 -245.8 324.4)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "2.5",
    rx: "13.3",
    ry: "40.8",
    transform: "rotate(-23.4 630.5 660.9)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "1.5",
    d: "M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z",
    transform: "matrix(1.88 -.46 .95 1.18 -352.3 -10)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "1.5",
    d: "M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z",
    transform: "matrix(1.88 -.46 .95 1.18 -348.4 44)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "1.5",
    d: "M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z",
    transform: "matrix(1.87 -.5 .98 1.16 -362 105.8)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "1.4",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.8 -.4 .7 1.64 -915.6 -221)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "1.6",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.63 -.23 .54 1.35 -739.5 -91.8)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "1.6",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.63 -.2 .5 1.36 -750.6 -91.8)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "2.1",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.3 -.2 .47 1 -531 47.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "2.1",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.33 -.13 .4 1.03 -517.9 12.2)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.1",
    d: "M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6",
    transform: "matrix(1.03 -.5 .46 1.18 12.8 -14.5)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "2.1",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.33 -.13 .4 1.03 -519.5 -34.4)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "528.7",
    cy: "646.1",
    "stroke-width": "2.1",
    rx: "13.3",
    ry: "40.8",
    transform: "matrix(1.33 -.1 .38 1.04 -534 -40.1)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.9",
    d: "M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6",
    transform: "matrix(.67 -.47 .46 .8 39.5 143.3)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.9",
    d: "M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6",
    transform: "matrix(.67 -.47 .46 .8 51.1 125.8)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.1",
    d: "M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6",
    transform: "matrix(.94 -.64 .64 1.1 -40.2 -10.7)"
  }), /*#__PURE__*/React.createElement("path", {
    "stroke-width": "2.7",
    d: "M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6",
    transform: "matrix(.67 -.52 .46 .88 68.6 71.2)"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#804bff",
    stroke: "#000",
    "stroke-width": "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z",
    transform: "matrix(.16 0 0 .22 458 -214.3)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z",
    transform: "matrix(.16 0 0 .22 456.6 -220.2)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z",
    transform: "matrix(.16 0 0 .22 454.8 -225.8)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z",
    transform: "matrix(.16 0 0 .22 450.9 -232.2)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(1 -589.6 681.6)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#804bff",
    stroke: "#000",
    "stroke-width": "2.5",
    d: "M211.2 247.3c21.7-12 56.6-9.8 79.7 11.2 19.4 17 45.3 75.2 70.3 92.8a57.7 57.7 0 0 1-42.2-15.2c-28.8 15.5-38.1 16.7-64 15.7-35.8-1.4-62.4-17.7-68-40.6-6.3-21.8 4.8-52.5 24.2-63.9z",
    transform: "matrix(.2 -.04 .05 .18 407.8 -213.6)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "287.2",
    cy: "323",
    fill: "red",
    stroke: "#000",
    "stroke-width": "2.5",
    rx: "14.2",
    ry: "15",
    transform: "matrix(.25 0 0 .13 401.8 -215.2)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "204.6",
    cy: "348.3",
    fill: "#ff0",
    stroke: "#000",
    "stroke-width": "2.5",
    rx: "23.3",
    ry: "15.9",
    transform: "matrix(.2 -.08 .07 .17 398.7 -208)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "283.9",
    cy: "333.9",
    r: "5.8",
    transform: "matrix(.2 0 0 .2 411.3 -233.7)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    stroke: "#000",
    "stroke-width": "6.6",
    d: "M516.8 260.3c4.4 18-6.7 43-33.1 52.6-26.8 13.2-46.1 41.8-55.7 88-47.2-103.2-23-148.3 20.6-160.3 37.4-14.4 60.4-13.4 68.2 19.7z",
    transform: "matrix(.1 0 0 .08 417.9 -191.5)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "199",
    cy: "362.4",
    r: "4.7",
    transform: "matrix(.2 0 0 .2 418.7 -235)"
  })))));
});
DMA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DMA.displayName = 'DMA';
export default DMA;