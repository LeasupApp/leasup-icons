function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var DOM = forwardRef(function (_ref, ref) {
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
    d: "M-222.6-115.2h958v718.4h-958z"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    transform: "matrix(.67 0 0 .67 148.7 77)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00319c",
    fillRule: "evenodd",
    d: "M322 329h446.5v273.9H322z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d62918",
    fillRule: "evenodd",
    d: "M-256.7 329.8h445.2v273h-445.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00319c",
    fillRule: "evenodd",
    d: "M-255.8-115.2h445.2v305.4h-445.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d62918",
    fillRule: "evenodd",
    d: "M324.6-112.7h443V193h-443z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M-256.4 190.1H769.5v141.7h-1026z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M187.4-113.7h138.3v717H187.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m246.5 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m247.2 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m247.9 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#848c9c",
    d: "m252.8 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#848ca5",
    d: "m254 194.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#848c9c",
    d: "m254.9 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m259.8 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m260.5 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m261.2 194.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m241.5 195 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m242.2 195 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m243 195 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m243.7 195 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425a84",
    d: "m244.3 195 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m245.5 195.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m247 195.2.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M235.7 201.5a59 59 0 0 0-26.7 4.9c-4.8 2.8-4.3 10.7 2.1 10.5v.6h-1.4v.7l10.6-2.7v-.6H216v-.7h5l-1.4-2.7 25.3-2.7-1.4-4.7a69 69 0 0 1 26 2v.7l-5.6-1.3c.6 2.9 4 2.2 6.3 1.3l-7 1.4v.6l16.2 1.5 16.8 3.9v.7l-9.1-1.4v.7l11.2 3.3-2-2v-.6l2.7 3.3c4.5.2 7.9 1.2 10.6 4.7l-9.8-4 5.6 12.7h.7v-2h.7v2l6.3-1.3c-1.6-6.8-4.5-14.8-11.2-18.1.6-2.6 0-3.7-2.2-5.4 2.6 5.2-1.7 7.3-5.6 3.4l-1.4 1.3 1.4-4.7-4.2 4 .7-4.6h-.7l-.7 4-2.1-2-.7 2-11.3-1.4v-6l1.4 2h.7v-2l3.5 2h.7l14.1.7.7 5.3h.7l2.1-4.6a74.3 74.3 0 0 0-26.7-4.7c.5-4.6-4.5-5.4-8.4-6-6.8-1-27.4-3.3-28.2 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m261 195.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m262.4 195.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m263.4 195 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m264 195 .8.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m264.8 195 .6.6-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m265.5 195 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m266.2 195 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m239.4 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m240.1 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m240.8 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m241.5 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m242.2 195.6.7.7-.7-.7m23.3 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m266.2 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m266.9 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m267.6 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m268.3 195.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m237.3 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m238 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m238.7 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m239.4 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m246.5 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m247.2 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m247.9 196.3.7.7-.7-.7m1.4 0 .7.7-.7-.7zm4.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m257.7 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m259.8 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m260.5 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m268.3 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m269 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m269.7 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m270.4 196.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m236 197-.8 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m236.6 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m237.3 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m241.5 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m242.2 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m243 197 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m243.7 197 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m244.3 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m246.5 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m247.9 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m249.3 197 .7.6-.7-.6zm4.2 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m260.5 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m263.8 197.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m264.8 197 .6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m270.4 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m271 197 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m271.8 197 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31394a",
    d: "m236 197.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m241.5 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m244.3 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m246.5 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m247.9 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m255.6 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m256.3 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m257 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m258.4 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m262.6 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m264.8 197.6.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m271.8 197.6 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m272.5 197.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m235.2 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m241.5 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m242.2 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m243.2 198.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m243.9 198.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m245 198.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m247.2 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m248.6 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m255.6 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m256.3 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m257 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m258.4 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m259.1 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m262.6 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m264.8 198.3.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m273.2 198.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m234.5 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m235.2 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m241.5 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m245 199 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m245.8 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m247.2 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m247.9 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m248.6 199 .7.6-.7-.6m9.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m259.4 199.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m262.6 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m263.4 199 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m264 199 .8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m264.8 199 .6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m272.5 199 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m273.2 199 .7.6-.7-.6m-38.7.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m235.4 200 .3.5-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m241.5 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m243 199.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m245 199.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m245.8 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m247.2 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m247.9 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m255.6 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m256.3 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m257 199.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m262 199.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m263.4 199.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m264.5 199.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m234.5 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m241.5 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m243 200.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m243.7 200.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m244.3 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m245.8 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m249.3 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m255.8 200.8.3.4-.3-.5m1.2-.4 1.4 2-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m259.1 200.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m262 200.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m264 200.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m231.7 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m234.5 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m235.2 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m243 201 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m245.8 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m246.5 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m247.2 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m247.9 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m248.6 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m249.3 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m259.1 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m262.6 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m264 201 .8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m265.5 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m272.5 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m273.2 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m276 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m278.8 201 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m223.3 201.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m224 201.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m225.1 201.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m226 201.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m226.8 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m228 201.9.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m228.9 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m243 201.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m245.8 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m246.5 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m248.6 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m249.3 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m250.7 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m251.4 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m252 201.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m254.9 201.6.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m259.1 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m259.8 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m261.2 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m262.6 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m264 201.6.8.7-.8-.7m1.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m278.8 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m280 201.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m281 201.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m281.6 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m282.3 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m283 201.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m283.8 201.6.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m284.4 201.6.8.7-.8-.7m-65.4.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m219.7 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m220.4 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m221.1 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#29396b",
    d: "m221.8 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m222.5 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m223.3 202.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m224 202.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m234.5 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m242.2 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m243 202.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m264 202.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m264.8 202.3.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m265.5 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m271.8 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m284.2 202.5.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m285.1 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m285.9 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m286.6 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m287.3 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m288 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m288.7 202.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m216.2 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217 203 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m217.6 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m218.3 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m219 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m226.8 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m234.5 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m271.8 203-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m275.3 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m276 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m277.4 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m288.7 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m289.4 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m290 203 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290.8 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m291.5 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m292.2 203 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m213.4 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m214.1 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m214.8 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m215.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m216.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m221.1 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m221.8 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m222.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m225.4 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m226 203.7.8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m227.2 203.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m228.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m234.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m246.2 203.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m247.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m247.9 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#29396b",
    d: "m248.6 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425a84",
    d: "m249.3 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m253.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#737b94",
    d: "m254.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#29396b",
    d: "m259.1 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m260.3 203.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m261.7 203.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b6b4a",
    d: "m271.8 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m276 203.7 1.4 5.3-1.4-5.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m279.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m280.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m281.6 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m284.4 203.7-.6 2.6.6-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m291.5 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m292.2 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m292.9 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m293.6 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m294.3 203.7.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m211.3 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m212 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m212.7 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m213.4 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m220.4 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m223.3 204.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m225.8 204.5.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m226.8 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m228 204.5.4.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m235.2 204.3.7.7-.7-.7m8.5 0 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m244.3 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m261.2 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m262 204.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m262.6 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m263.4 204.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m264.3 204.8.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m271 204.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m271.8 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m278.1 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m278.8 204.3-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m279.5 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m281.6 204.3 1.4 1.4-1.4-1.4zm4.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m286.6 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m287.3 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m288 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m288.7 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m294.3 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m295 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295.7 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m296.4 204.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m209.9 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m210.6 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m211.3 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m217.6 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m221.1 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m221.8 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m222.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m224 205 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m225.4 205 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m226 205 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m226.8 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m227.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m228.2 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m235.2 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m241.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m242.2 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m243 205 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m244.3 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m262.6 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m263.6 205.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m265 205.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m271 205 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m276.7 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m278.8 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m279.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m281 205 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m281.6 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m283 205 .7.7-.7-.7m2.4.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m285.9 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m286.6 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m287.3 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m289.4 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m290 205 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m290.8 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m291.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m292.2 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m292.9 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m296.4 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31394a",
    d: "m297.1 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m297.8 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m298.5 205 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m208.5 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m209.2 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m209.9 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m212.7 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m213.4 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m214.1 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m215.5 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m217.6 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m219 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m219.7 205.7.7 2-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m221.1 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M221.8 205.7v2.6h1.4v-2.6h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m223.3 205.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m224 205.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m225.4 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m226.8 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m227.5 205.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m228.2 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m235.2 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m238 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "M239.7 206.6v1.6h3.3l-3.3-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m240.8 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m241.5 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31394a",
    d: "m244.3 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m267.6 205.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m268.3 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m270.6 206.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m271 205.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m280.2 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m281.2 206.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m282.3 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m283 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m284.4 205.7.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m286.6 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m287.3 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m288 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m289.4 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m290 205.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m290.8 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m291.5 207 2.1-.7-2.1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m293.6 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m295 205.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m298.5 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m299.2 205.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m207 206.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m207.8 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m208.5 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m212.7 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m214.6 206.6.4.2-.4-.3m1.6-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m217.6 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m221.1 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m225.6 206.8.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m226 206.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m228 206.6.4.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m228.9 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m236.1 206.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m236.6 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m237.3 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m238 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m244.3 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m245 206.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m263.4 206.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m269 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m278.1 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m278.8 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m279.5 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m280.2 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m284.4 206.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m285.1 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m286.6 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m287.3 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m288 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m289.4 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m290.8 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m292.2 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m292.9 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m293.6 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m295.7 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m299.2 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m300 206.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m300.6 206.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m206.4 207-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m207 207 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m212.7 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m214.1 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M214.8 207v2.7h.7l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m215.5 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m217 207 1.3 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m217.6 207 .7.7-.7-.7zm8.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m227.2 207.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m228.2 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m228.9 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m236.8 207.4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m244.3 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m245 207 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m262.6 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m263.4 207 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m269.7 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m278.1 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m278.8 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m279.5 207-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m280.2 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m282.3 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m283.8 207 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m285 207.2.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m290.8 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m291.5 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m294.3 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m298.5 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m299.2 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m300.6 207 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m301.3 207 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m206.4 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m212.7 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m215.5 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m217 207.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m219 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m221.1 207.7.7.6-.7-.6m2.1 0 .8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m225.4 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m226.8 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m228.4 208.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m228.9 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m237.3 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m237.3 209 2.1-1.3-2 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m239.4 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m245 207.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m262.6 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m266.9 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m266.9 209 2-1.3-2 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m269 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m269.7 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m276.7 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m278.1 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m279.5 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m280.2 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m282.3 207.7.7.6-.7-.6zm2.8 0 .7.6-.7-.6m1.4 0 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m287.3 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m288 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m290.8 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m291.5 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m293.6 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m300 207.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m301.3 207.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m205 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m205.7 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m213.4 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m214.1 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m217.2 208.8.2.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m219 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m220.4 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m222.3 208.6.5.2-.5-.2m1.6-.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m226 208.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m228.9 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m243.7 208.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m245 208.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262 208.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m262.6 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m271 208.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m280.2 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m284.4 208.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m285.1 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m286.6 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m291.5 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m292.9 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m293.6 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m294.3 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m295 208.3-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m297.8 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m298.5 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m300.6 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m302 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m302.7 208.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m205 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m213.4 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m214.1 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m215.5 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m218.3 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m219 209-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m221.1 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m223.3 209 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m226.8 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m227.5 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m228.2 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m244.3 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m245 209 .8.7-.7-.7m16.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m262.6 209 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31394a",
    d: "m263.4 209 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m281.6 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m282.3 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m284.4 209 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad9431",
    d: "m285.1 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m288 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m290 209 .8.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m292.9 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m295 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m295.7 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m299.2 209-.7 2.7h.7V209z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m300 209 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m301.3 209 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425a84",
    d: "m303 209.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m205 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m213.4 209.7.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m215.5 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m217 209.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m219 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m242.2 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m243 209.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m243.7 209.7.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m244.3 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m264 209.7.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m264.8 209.7.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m265.5 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m285.9 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m288 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m288.7 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m290 209.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m292.2 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m295.7 209.7-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m297.1 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m297.8 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m298.5 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m300 209.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m301.3 209.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m205 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m213.4 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m216.2 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m218.3 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m226.8 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m227.5 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m228.2 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m228.9 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m238 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#848c9c",
    d: "m238.7 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m242.2 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m265.5 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#848c9c",
    d: "m269 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m269.7 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m278.8 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m279.5 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m280.2 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m281 210.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m290 210.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m290.8 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m292.2 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cead21",
    d: "m292.9 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m294.3 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m295 210.3.7.7-.7-.7m2.6.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m300 210.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m301.3 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m302.7 210.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m205 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m205.7 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m214.1 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a636b",
    d: "m214.8 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m219.7 212.3 2.1-.6-2 .7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m221.8 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m222.5 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m223.3 211 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m224 211 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m224.7 211 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m225.4 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m226 211 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m226.8 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m227.5 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m280.2 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m281 211 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m281.6 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m282.3 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m283 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m283.8 211 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m284.4 211 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m285.1 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m285.9 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m287 211.2.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m292.9 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b63",
    d: "m296.4 211 .7.7-.7-.7zm1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m299.2 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m300.6 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m302.7 211 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m205 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m205.7 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m220.4 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m221.1 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m221.8 211.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m286.6 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m287.3 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m288 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m295 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m295.7 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb518",
    d: "m296.4 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9c29",
    d: "m297.8 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7b52",
    d: "m298.5 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m302 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m302.7 211.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m203.6 212.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m204.3 212.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m205.2 212.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m217.6 212.3-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m218.3 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m219 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m220.4 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m286.6 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m287.3 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m288 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m289 212.8.1.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m296.4 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c8c42",
    d: "m297.1 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295284",
    d: "m300 212.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m302.7 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m303.4 212.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m304.1 212.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m202.8 213-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m203.6 213-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M204.3 213c-2 2.1-5 4.5-3.6 7.4-3.7 2-4.4 6.4-5.6 10l7.7 1.4 5.7-12.7-7.8.6v-.6l7-.7-3.5-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m214.1 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m214.8 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m216 213.2.4.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m217.6 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m221.1 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m286.6 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m287.3 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m291.5 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a8c",
    d: "m297.8 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395273",
    d: "m298.5 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m304.1 213 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m304.9 213 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m205 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m205.7 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m212 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m213.2 214 .4.1-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m214.1 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m221.1 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m286.6 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m291.5 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m292.2 213.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m293.4 214 .4.1-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m294.5 214.1.3.5-.3-.5m10.3-.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m205.7 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m210.1 214.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m211 214.6.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m216.2 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m220.4 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m221.1 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m285.9 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m286.6 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m287.7 214.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m288.7 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m289.4 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m290 214.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m295.5 214.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m305.6 214.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m200.7 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m201.4 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m205.7 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m206.4 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m209 215.3.4.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m214.1 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m214.8 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m215.5 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m220.4 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m221.1 215-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m285.9 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m286.6 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m287.3 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m290 215 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m291.3 215.3.4.2-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m292.2 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m296.4 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m297.1 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m297.8 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m306.3 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m307 215 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m200.7 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m208.5 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m213.2 216 .4.1-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m214.1 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m219.7 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m287.3 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m288 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m292.2 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m292.9 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m293.6 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m307 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m307.7 215.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m200 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m200.7 216.4.7.6-.7-.6m5.7 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m211.8 216.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m217.6 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m218.3 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m219 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m219.7 216.4.7.6-.7-.6m68.3 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m288.7 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m289.4 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m290 216.4.8.6-.7-.6m3.5 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m294.3 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m295 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m307.7 216.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m199.3 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m200 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m207.8 217 .7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m210.3 217.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m214.1 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m214.8 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m215.5 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m216.2 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217 217 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m217.6 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290 217 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290.8 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m291.5 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m292.2 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m293.6 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m294.3 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m295 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m295.7 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m296.4 217 .7.7-.7-.7m2.8 0 .7.7-.7-.7m8.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m308.4 217 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m199.3 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m207.8 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m209.2 217.7.7.7-.7-.7m2 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m212 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m212.7 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m214.1 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m214.8 217.7.7.7-.7-.7m78 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m293.6 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m295 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m295.7 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m298.5 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m308.4 217.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m198.6 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m199.3 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m205 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m209.9 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m210.6 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m211.3 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m214.1 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.2 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m292.9 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m295.5 218.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m296.4 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m297.1 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#080829",
    d: "m297.8 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m301.3 218.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m309 218.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m198.6 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m200.7 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m202 219.3.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m202.8 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m209.2 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m209.9 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m298.5 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m299.2 219 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m303.4 219 .8.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m304.6 219.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m305.8 219.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m309 219 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m198 219.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m207.8 219.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m208.5 219.7-.7 1.4.7-1.4m90.7 0 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m300 219.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m306.3 219.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m307 219.7 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m309 219.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m309.8 219.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198 220.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m198.6 220.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m207 220.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101831",
    d: "m300.6 220.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m309.8 220.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m197.2 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m198 221 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m206.4 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m207 221 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m213.4 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "M214.1 221v.7H295l-24.6-.6H214m86.5 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m301.3 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m309.8 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m310.5 221 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m197.2 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m198 221.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m206.4 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m213.4 221.7 3.5 3.4-3.5-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m214.1 221.7 2.1 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m214.8 221.7 5.9 7.4.4 26h6.4c0-8.2 1.8-16.8-4.3-23.3l8.5 5.3-3.5-10 19.7 18.7-14.8-22.7 14 18h.8v-19.4h-33.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "M247.9 221.7v20.1h.7l-.7-20z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M259.8 221.7v20.1h.7l-.7-20z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M260.5 221.7v18.8l14.8-17.4-14.8 22.7 20.4-18.7-4.2 9.3 8.4-5.3c-4.5 8.3-4.2 14.5-4.2 24h6.4l.4-26 5.9-7.4h-33z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m293.6 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m294.3 221.7-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m301.3 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m302 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m310.5 221.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m196.5 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m197.2 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m205.7 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m206.4 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m292.9 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m302 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m309 222.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m310.5 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m311.2 222.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m196.5 223 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m197.2 223 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m205.7 223 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m233.1 223 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m302 223 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m310 223.5.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.2 223 .7.7-.7-.6M196 224l.3.5-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m196.5 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m205 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m205.7 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m216.2 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m233.1 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m233.8 223.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m274.6 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m292.2 223.7-4.2 4.7 4.2-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m302 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m302.7 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m311.2 223.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m196.5 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m205 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m217 224.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m233.1 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5a00",
    d: "m233.8 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m273.2 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "m273.9 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m302.7 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m311.2 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m311.9 224.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m195.8 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m204.3 225 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m205 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m217 225 3.4 3.4-3.5-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m217.6 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m233.8 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cea508",
    d: "m234.7 225.5.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m235.2 225 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m272.5 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#634a00",
    d: "m273.9 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m274.6 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m302.7 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m303.4 225 .8.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m311.9 225 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m195.8 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m204.3 225.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m218.3 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m233.8 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m235.2 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m271.8 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m273.2 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m273.9 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m303.4 225.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m311.9 225.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m195.1 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m195.8 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m204.3 226.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m219 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#634a00",
    d: "m234.5 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#deb508",
    d: "m235.2 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m236 226.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m271.8 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m273.9 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m303.4 226.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m304.1 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m311.9 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m312.6 226.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.1 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m195.8 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m203.6 227 .7.8-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m204.3 227 .6.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m219.7 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m228.4 227.5.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m234.5 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m235.2 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m236 227 1.3 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m236.6 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m271 227 .8.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m271.8 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m272.5 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m273.2 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m279.5 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m280.2 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m288 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m304.1 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m312.6 227 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m195.1 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m203.6 227.8.7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m220.4 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m228.9 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m229.6 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m236 227.8.6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m237.3 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m270.4 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m271.6 228 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m272.5 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m278.1 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m278.8 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m279.5 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m287.3 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m304.1 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m312.6 227.8.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m195.1 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m203.6 228.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "M220.4 228.4V256h.7c0-7.9 2.5-20.3-.7-27.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#634a00",
    d: "m228.9 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7300",
    d: "m229.6 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m230.3 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m236 228.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m236.6 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m237.3 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m269.7 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m270.4 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m271 228.4-1.3 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m271.8 228.4.7.7-.7-.7m5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "m278.1 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5a00",
    d: "m278.8 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m279.5 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M287.3 228.4v26.8h.7c0-7.7 2.4-19.7-.7-26.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m304.1 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m312.6 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m313.3 228.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m194.4 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m195.1 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m202.8 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m203.6 229 .7.8-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m228.9 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9408",
    d: "m229.6 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cea508",
    d: "m230.3 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m231 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m231.7 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m236.6 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m237.3 229 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m238 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m269.7 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m271 229 .8.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m276 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m276.7 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9408",
    d: "m277.4 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m278.1 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m278.8 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m304.1 229 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m304.9 229 .7.8-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m313.3 229 .7.8-.7-.7m-118.9.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m202.8 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m203.6 229.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313918",
    d: "m229.6 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m230.3 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad8c08",
    d: "m231 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m231.7 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m237.3 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m238.7 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m269 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m271 229.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m276 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "m276.7 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m277.4 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#634a00",
    d: "m278.1 229.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m278.8 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m304.9 229.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m306.3 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m313.3 229.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m193.7 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m194.4 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.1 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m195.8 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m196.5 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m197.2 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m198 230.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m202.8 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m229.6 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423100",
    d: "m230.3 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m231 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m231.7 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m232.4 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m238 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m238.7 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m239.4 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m268.3 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m270.4 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m275.3 230.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m276.7 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m278.1 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m304.9 230.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m306.3 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m309.8 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m310.5 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m311.2 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m311.9 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m312.6 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m313.3 230.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m195.1 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.8 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m196.5 231 .7.8-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198.6 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m199.3 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m200 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m202.8 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m204.3 231 .6.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m205 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m231 231 2.1 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m231.7 231 5 4.8-5-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m232.4 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m238 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m238.7 231 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m239.4 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m268.3 231 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m269 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m269.7 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m276.7 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m277.4 231 .7.8-.7-.7m7 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m304.9 231 .7.8-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m306.3 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m307.7 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m308.4 231 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m309 231 .8.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m311.6 231.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m193 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m193.7 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m195.8 231.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m196.5 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m197.2 231.8 2.1 2.6-2-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m198 231.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m199 232 .6.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m200 231.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m200.7 231.8 2.1 3.3-2-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m201.4 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m202.1 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m202.8 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m204.3 231.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m205 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m284 231.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m224 231.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m224.7 231.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m233.1 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m238.7 231.8.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m267.6 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m268.3 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m274.6 231.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m275.3 231.8-2.1 2.6 2.1-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m276.7 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m283 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m283.8 231.8.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m284.4 231.8.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m296.6 232.2.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m300 231.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m300.6 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m304.9 231.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#080829",
    d: "m305.6 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.3 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m307 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m307.7 231.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m308.4 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m310.5 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.2 231.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m193 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m193.7 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.8 232.4.7.7-.7-.7m5 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m202 232.7.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m203.6 232.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 232.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m205.7 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m224 232.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7300",
    d: "m224.7 232.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m225.4 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m226 232.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "M231.7 232.4v4.7h.7l-.7-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m233.8 232.4.7.7-.7-.7m5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m240.8 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m266.9 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m266.9 233.8 2-.7-2 .7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m269 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m275.3 232.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b1821",
    d: "m276 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m281.6 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m282.3 232.4 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7300",
    d: "m283 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m283.8 232.4.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m297.1 232.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m300.6 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m301.3 232.4.7.7-.7-.7m3.3.3.5.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m305.6 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m306.3 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m307 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m307.7 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m310.5 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.2 232.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m193 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m194.2 233.3.4.3-.4-.3m2.8 0 .4.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m199.3 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m200 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m201.4 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m202.8 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m203.6 233.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 233.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m205 233.1-1.4 5.4h-.7l1.3-4.7h-.6l-.7 5.3 2.8-1.3-3.5 5.3 2.8-2-3.6 2.7-.7 3.4h.7l7-8-2 .6v-.7l2-.6v-.7h-2.7l-.7-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m205.7 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102121",
    d: "m224.7 233.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efbd08",
    d: "m225.4 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad8c08",
    d: "m226 233.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102121",
    d: "m226.8 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m227.5 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M232.4 233.1c0 5.4 3.2 7.9 7.7 10.7-.3-4.5-4.1-8-7.7-10.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m233.1 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m234.5 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m239.4 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m240.6 233.3.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m241.5 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m266.2 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m267.6 233.1-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m268.3 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "m275.3 233.1-7 10.7c3.9-2.3 9.2-5.8 7-10.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m280.2 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m281 233.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c7b08",
    d: "m281.6 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m282.3 233.1-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m283.8 233.1.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m300.6 233.1 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m301.3 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m304.6 233.3.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m305.6 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m306.3 233.1.7 14h.7l2-12h-.6l-1.4 8h-.7l-.7-10z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m307 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m307.7 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309.8 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m311.2 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m312.6 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m313.3 233.1-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m315.4 233.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m193 233.8 2.1 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m194.4 233.8.7 2h.7l-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.1 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m197.2 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m198 233.8-.8 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m199.3 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m200 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m200.7 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m202.8 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.5 234.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205.7 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m206.4 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a4208",
    d: "m225.4 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m226 233.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9408",
    d: "m226.8 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m227.5 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m233.8 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m235.2 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m240.1 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m240.8 233.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m241.5 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m255.6 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m266.2 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m267.6 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m272.5 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m273.9 233.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m274.6 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m280.2 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "m281 233.8.6.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m283 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m296.4 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m297.1 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m297.8 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m300.6 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m304.9 233.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.6 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b8c73",
    d: "m307 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m309 233.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m309.8 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m313.3 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m314.7 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m315.4 233.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m193 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m198 234.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m198.6 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m200.7 234.4 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m206.4 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m225.4 234.4 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5a00",
    d: "m226 234.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m226.8 234.4 2 1.4-2-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m228.2 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m234.5 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m236 234.4.6.7-.7-.7m5 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m242.2 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9408",
    d: "M253.5 234.4v.7l1.4 2.7h.7l-2.1-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m265.5 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m266.9 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m267.6 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m271.8 234.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m272.5 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m273.9 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m279.5 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m280.2 234.4-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m281 234.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5a00",
    d: "m281.6 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m282.3 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m296.4 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.1 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m297.8 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m300.6 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m302 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m304.9 234.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m305.6 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "M307 234.4v3.4h.7l-.7-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m308.4 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.5 234.7.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m310.5 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m311.2 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m312.4 234.7.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m313.3 234.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m314.7 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m315.4 234.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m192.3 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m193 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m195.8 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m198 235.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m198.6 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M199.3 235.1v2l2.1-.6v-.7l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m200.7 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.1 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204 235.3.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m206.4 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m226.8 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m228.9 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m234.5 235.1 2.1 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m235.2 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m236.6 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m241.5 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m242.5 235.6.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m243 235.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "M252.8 235.1v2.7h.7l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "M253.5 235.1v3.4h-2.8v2h2.8v8h.7l.7-8h3.5v-2H255V235h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m264.8 235.1.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m266 235.3.4.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m266.9 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m271.8 235.1-2.1 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m273.2 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m278.8 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m281 235.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m281.6 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m297.1 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m297.8 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m298.5 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m300.6 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m301.3 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m302 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m304.9 235.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m308.4 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309.8 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m310.5 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.2 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.9 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m313.3 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m314.7 235.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m193.7 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m194.4 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.6 236 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m196.5 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m198 235.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M198.6 235.8c-1.9 4-1.6 6.6 0 10.7h1.4l1.4-10h-.7l-.7 8h-1.4v-8.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m201.4 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.8 236.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m206.4 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m227.5 235.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m228.2 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m228.9 235.8 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m229.6 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m236 235.8 1.3 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m236.6 235.8 2.8 3.3-2.8-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m237.3 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m241.5 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m243 235.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m264.8 235.8.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m265.5 235.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m266.2 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m270.4 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m272.5 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m278.1 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m280.2 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m297.1 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m297.8 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m298.5 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m299.2 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m300.6 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m302.7 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m304.9 235.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m308.4 235.8.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m310.5 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m311.6 236 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m312.6 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m313.3 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m314.7 235.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m198 236.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m201.4 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m206.4 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "M227.5 236.4v18.8H221v.7l7-.7v3.3h.8c0-5.7 2.3-17.4-1.4-22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m228.9 236.4.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m238 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m242.2 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m243 236.4 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m243.7 236.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m264 236.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m265.5 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m269.7 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m271.8 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m276.7 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m277.4 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m278.1 236.4-2 2.7 2-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m278.8 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m279.5 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M280.2 236.4v18.8h.7l-.7-18.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m297.1 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.3 236.7.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m299.2 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m300.6 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m302 236.4 2.9 16.8h.7a21.2 21.2 0 0 0-3.6-16.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m302.7 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m304.1 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.9 236.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m308.4 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309.8 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m312.6 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m313.3 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m314 236.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m196.5 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m197.2 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.6 237.6.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m201.4 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.3 237.3.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205.7 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m206.8 237.3.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.8 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8442",
    d: "m208.5 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m209.2 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m209.9 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M228.9 237.1c0 5-2.5 18.3.7 22.3 1.4 1.8 4.9 2 7 2.5 0-10.3 2-18.4-7.7-24.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m229.6 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m231 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m231.7 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m236.6 237.1.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m243 237.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m244.3 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m263.4 237.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m263.4 238.5 2-1.4-2 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m265.5 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m269 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m271 237.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1831",
    d: "m276 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m276.7 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m278.1 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M271.8 261.9c2.3-.6 5.6-.8 7.3-2.5 3.6-3.6 1.1-17.4 1.1-22.3-11 4.9-8.4 15-8.4 24.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m297.1 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m298.5 237.1 5.6 21.4h-.7c-1-3.7-5.5-18-11.2-12.7 7.5.3 10 13.1 11.2 18.8h.7l9.2-26.8h-.7l-7 17.4h-.8c-1.9-5.7-1.7-13.7-6.3-18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m299.2 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m300 237.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m300.6 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m301.3 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302.7 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m303.4 237.1.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m304.1 237.1-.7 1.4.8-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.9 237.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m307.7 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m309.8 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m313 237.3.5.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314 237.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m196.5 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m201.4 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.8 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 237.8-2.9.7v.6l2.8-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m205 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m208.7 238.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m209.2 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.9 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m210.6 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m230.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m231.7 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m232.4 237.8 1.4 1.3-1.4-1.3m5 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m238.7 237.8 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m239.4 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m244.1 238 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m245 237.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m249.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada584",
    d: "m250 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c7b08",
    d: "m252.8 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cea508",
    d: "m254.9 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9463",
    d: "m255.6 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdb584",
    d: "M256.3 237.8v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m258.4 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m262.6 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m264.8 237.8.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m268.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m269 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m269.7 237.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m270.4 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m275.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m276 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m277.4 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m294.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m297.8 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m300 237.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m300.6 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m301.3 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m304.1 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m307 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m307.7 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m309.8 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m311.2 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.9 237.8.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m314 237.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m196.5 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M199.3 238.5v2h.7l-.7-2m5 0 .6.6-.7-.6m3.3.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m209.2 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m209.9 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m231 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "M231.7 238.5v.6l2.1.7-2.1-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m238 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m240.1 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m243.7 238.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m244.3 238.5 2.2 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m245 238.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd9408",
    d: "M250 238.5v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m262.6 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m263.4 238.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m264 238.5.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m267.6 238.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m268.3 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m269.7 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m274.6 238.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m275.3 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m276.7 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m295 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m295.7 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m297.8 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300 238.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m300.6 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m301.3 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m303.4 238.5.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M307 238.5v4h.7l-.7-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m309.8 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m311.2 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m313.3 238.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m196.5 239.1.7.7-.7-.7m5.6 0 .7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m206.4 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 239.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m208.5 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m209.2 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m231.7 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m233.8 239.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m238.7 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m239.4 239.1 5.7 5.4-5.7-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m244.3 239.1.7.7-.7-.7m1.4 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m262 239.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m263.4 239.1.7.7-.8-.7m4.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m269 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m273.9 240.5 2.1-.7-2.1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m276 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295.7 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m297.8 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295210",
    d: "m300.6 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m301.3 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 239.1.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 239.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m309.8 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m310.5 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.2 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m312.6 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m313.3 239.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m195.8 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196.5 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m202.8 239.8-.7 2h.8v-2m2.8 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207.8 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m208.5 239.8.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m232.4 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m233.8 239.8 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m239.4 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m240.8 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m245 239.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m246.5 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m261.2 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m261.2 241.1 2.2-.6-2.2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m263.4 239.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m266.9 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m267.6 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m268.3 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m273.2 239.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m274.6 239.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m275.3 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#426331",
    d: "m295 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m295.7 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m296.4 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m298.5 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m301.3 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309 239.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309.8 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m310.5 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.2 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m312.6 239.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m196 241 .3.4-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.7 241 .2.4-.2-.5m1.1-.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m207.8 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m211.3 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m212 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m217.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m218.3 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m219 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m233.8 240.5.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m240.1 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m241.5 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m245 240.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m246.2 240.7.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m249.3 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada584",
    d: "m250 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c7b08",
    d: "m252.8 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cea508",
    d: "m254.9 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9463",
    d: "m255.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m258.4 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m260.5 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m262 240.5-1.5 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m262.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m266.2 240.5-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m266.9 240.5-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m267.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "M273.2 240.5 271 243l2-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m274.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m295 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m296.4 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m298.5 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.9 240.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 240.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m309.8 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m310.5 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m312.6 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314.7 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m315.4 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m316.1 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m316.8 240.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M198.6 241.1v3.4h1.4V241h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m204.3 241.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 241.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m207.8 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m210.6 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m211.3 241.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m212 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m216.2 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m217 241.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m218.3 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m219 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m234.5 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m236 241.1 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m236.6 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m240.8 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m242.2 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m245.8 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m246.5 241.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m247.2 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    d: "M252.8 241.1v7.4h.7l-.7-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m260.5 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m262 241.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m266.9 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314a7b",
    d: "m267.6 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m271.8 241.1.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m295.7 241.1 3.5 6h.7l-4.2-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m296.4 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m297.1 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m298.5 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 241.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m304.9 241.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m309 241.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m309.8 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.9 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m312.6 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314.7 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m311.2 245.8 7-2-1.4-2.7-5.6 4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m316.8 241.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m317.5 241.1.7.7-.7-.7m-121.7.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m201.7 242.3.2.4-.2-.5m1.8-.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 241.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m207 241.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m210.6 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m212.7 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m215.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m216.2 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M214.1 251.8h-.7v-7.3h-.7l-.7 3.3h-.7v-3.3h-.7l-4.2 15.4h.7l1.4-2.7h.7l-1.4 3.4h.7l3.5-4.7-2.8 6h.7l7-10 1.4-10c-4.6 2-4.2 5.6-4.2 10z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m218.3 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m235.2 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m237.3 241.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m240.8 241.8 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m241.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m243 241.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m246.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m247.9 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m259.8 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m262 241.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m266.2 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m266.9 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m270.4 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m271 241.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m272.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m295.2 242.3.3.4-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m297.1 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m297.8 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m298.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 241.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m309 241.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309.8 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m311.9 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m313.3 241.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m317.5 241.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m196.5 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.8 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 242.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m206.4 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m207 242.5-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m210.6 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m211.8 242.7.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m212.7 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m214.8 242.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m215.5 242.5.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m218.3 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m236 242.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m237 242.7.6.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m242.2 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m243.7 242.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m247.2 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m248.1 243 .2.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m248.6 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m259.1 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m261.2 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m264 242.5-1.3 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m264.8 242.5-3.6 4 3.6-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m265.5 242.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m266.2 242.5-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m269.7 242.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m270.4 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m271.8 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m293.6 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m294.3 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295.7 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m297.8 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m299.2 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M302 242.5v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m305.3 242.7.5.2-.5-.2m1.7-.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m309 242.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.8 242.5.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.9 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m313.3 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m317.5 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m318.2 242.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m196.5 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M200.7 243.1v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.8 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m205.7 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m209.9 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m210.6 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M210.6 243.8v.7l2 .6v-2l-2 .7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m212.7 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.8 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m217.4 243.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m218.3 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m236.6 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m237.3 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m238 243.1 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m238.7 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m243 243.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m244.3 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m247.2 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m248.6 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m249.3 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m259.1 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m259.8 243.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m260.5 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m270.1 243.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m271 243.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m292.9 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295210",
    d: "m295 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m297.8 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m298.5 243.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m299.2 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m305.6 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m308.4 243.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309 243.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m311.2 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m312.6 243.1.7.7-.7-.7m1.4 0-4.2 2.7v.7l1.4.7 2.8-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m314.7 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m315.4 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m316.1 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m316.8 243.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m318.2 243.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m196.5 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m197.2 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m200.7 243.8.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 243.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m204.3 243.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m205 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m209.9 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 243.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m213.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.1 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m216.4 244.3.3.4-.3-.4m1.2-.5v4.7h.7l-.7-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    fillOpacity: ".5",
    d: "M236.6 243.8v18h.7l-.7-18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m237.3 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m238 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m239.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m243 243.8 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m243.7 243.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m245 243.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m247.9 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m248.6 243.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m249.3 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m258.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m259.8 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m268.3 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m269 243.8-2.1 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m269.7 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m270.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M271 243.8v18h.8l-.7-18m21 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.9 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m295.7 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m296.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m298.5 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 243.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m305.6 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m306.3 243.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m308.4 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m314 243.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m314.7 243.8-2.1 2.7 2.1-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m316.8 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m318.2 243.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m319 243.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m197.2 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200.7 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.4 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m203.6 244.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m204.3 244.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m205 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m205.7 244.5.7.6-.7-.6m3.5 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m209.9 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m238 244.5 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m238.7 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m240.1 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m240.8 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m244.3 244.5 1.4 1.3-1.3-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m245 244.5 2.9 3.3-2.8-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m245.8 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "M247.9 244.5v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m248.6 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m257.7 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m258.7 245 .2.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m259.1 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m262 244.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m264 244.5-1.3 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m266.9 244.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m267.6 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m269 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m269.7 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m291.5 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.2 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m296.4 244.5 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 244.5.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m299.2 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300 244.5.6.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m306.3 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m310.5 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m318.2 244.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m319 244.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m197.2 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198 245.2.6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200.5 245.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m204.3 245.2.6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m205.7 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m206.4 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m207 245.2.8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m209.2 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m211.3 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M213.4 245.2v6h.7l-.7-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m216 245.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m239.4 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m240.8 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m241.5 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m246.5 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m248.6 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m249.3 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m250 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m250.7 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m257 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m257.7 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m259.1 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m261.2 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m266.9 245.2.7.6-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m269 245.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m291.5 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.9 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m294.3 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.8 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m299.2 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300 245.2.6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302.5 245.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.3 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m308.4 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m310.5 245.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m315 245.6.2.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m198 245.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200.3 246.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m202.1 245.8.7.7-.7-.7m2.4.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205.4 246 .5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m206.4 245.8.7 6h.7l-1.4-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m207 245.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m207.8 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m208.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m240.1 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m240.8 245.8 2.1 1.4v-.7l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m241.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m245 245.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m247.2 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m249.3 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m250 245.8 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m250.7 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m251.4 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m257 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m257.7 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m258.4 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m260.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m265.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m266.2 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m267.6 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290.8 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m291.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.2 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m292.9 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m293.6 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m294.3 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m295 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300 245.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302.7 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306.3 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307.7 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m310.5 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m311.9 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m313.3 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m314 245.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m195.1 246.5 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.8 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m198 246.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m198.6 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m201.4 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M205 246.5c-.2 3.6-1 6.7 2.8 8.7l-2.8-8.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205.9 247 .2.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m207.8 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m208.5 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m240.8 246.5.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m245.8 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m247.2 246.5 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m247.9 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m250 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m251.4 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m256.3 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m257 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m257.7 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m258.4 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m259.1 246.5-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m259.8 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m260.5 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m261.2 246.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m262 246.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m264.8 246.5.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m265.5 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m266.2 246.5-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m266.9 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m290 246.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m291.3 246.7.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m292.2 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m295 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295.7 246.5.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m298.5 246.5.7.7-.7-.7m1.4 0 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302.7 246.5.7.7-.7-.7m3.6 0 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307.7 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309.8 246.5 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m311.2 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.9 246.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m312.6 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m313.3 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m314 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m317.5 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m318.2 246.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m195.1 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m196.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m198 247.2.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m198.6 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m199.3 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m200 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200.7 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m201.4 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m204.3 247.2.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m208.5 247.2-.7 1.3.7-1.3m2.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m241.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m242.2 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m243 247.2 2.7 2.6-2.8-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m243.7 247.2.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m246 247.6.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m246.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m248.6 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m250 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m250.7 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m252 247.2.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c7b08",
    d: "m254.9 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m255.6 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m256.3 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m257 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m259.8 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m262.2 247.6.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m264 247.2.8.6-.8-.6m2.2 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m290 247.2.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m290.8 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m291.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m295.7 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m298.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 248.5 2.1-.7-2 .7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m302.7 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "M306.3 247.2v2h.7l-.7-2m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309.8 247.2-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m312.6 247.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m313.3 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m314 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m316.1 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m316.8 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m317.5 247.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m318.2 247.2-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.1 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.8 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m196.5 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m197.2 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m198 247.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m200 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m200.7 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m204.3 247.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m206.1 248 .5.3-.5-.3m2.4-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m242.2 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m243 247.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m244.3 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m245 247.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m246.7 248.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m247.2 247.8 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m247.9 247.8 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211810",
    d: "m248.6 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m249.3 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250.7 247.8-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m251.4 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212118",
    d: "m252 247.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5a10",
    d: "m254.2 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m254.9 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m256.3 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m257.7 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m259.1 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m259.8 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m261.5 248.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m263.4 247.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m264 247.8-2 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m265.5 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m290 247.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m293.6 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m294.3 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m295.7 247.8-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m296.4 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m300 247.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300.6 247.8-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302.7 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m307 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 247.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m310.7 248.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m311.2 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m312.6 247.8-5 7.4 5-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m313.3 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m314.7 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m315.4 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m316.1 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m316.8 247.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M195.1 248.5v1.3l1.4-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m196.5 248.5 1.4 2.7-2-1.4c.6 2.7 1.3 4.4 4.1 5.4v.7l-2.8-.7 1.4 2-2-.7 6.2 6 .7-2.6 2.2 1.3-4.3-4v-.7l2.1.7a12.3 12.3 0 0 0-7-8.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m197.2 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m198 248.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m198.6 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m200 248.5 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m200.7 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m201.4 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 248.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m206.4 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M207.8 248.5v6h.7l-.7-6m3 .5.3.4-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m215.5 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#527b31",
    d: "m217.6 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    fillOpacity: ".6",
    d: "M242.2 248.5v14.7h.7l-.7-14.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m243 248.5 1.3 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m243.7 248.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m245 248.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m245.8 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M247.2 248.5v1.3h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m249.3 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250.7 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m251.4 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m252 248.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423100",
    d: "m252.8 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m253.5 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m254.2 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m254.9 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m255.6 248.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m256.3 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m259.8 248.5-2.8 1.3v.7l3.5-1.3-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m262 248.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m262.6 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m264 248.5.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m264.8 248.5.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m265.5 248.5-.7 15.4h.7a26.7 26.7 0 0 0 0-15.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m294.3 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m296.4 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m299.2 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300 248.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m303.2 248.7.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m309.8 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.2 248.5.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m313.3 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314.7 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m315.4 248.5-1.4.7v.6l1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m316.1 248.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196.5 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m198.6 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m199.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m200 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m201.4 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m202.1 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m202.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m203.6 249.2.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 249.2.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m215.3 249.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m217.6 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M243 249.2v14l7.7 1.4c-1.7-5-2.7-12.8-7.8-15.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m244.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m245.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m246.5 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m248.6 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m249.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m250.2 249.6.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m253.7 249.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m254.2 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m257 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m259.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m260.5 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m261.2 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m262 249.2.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m263.4 249.2.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m264 249.2-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m264.8 249.2-2.9 2 2.9 8.7-5 1.3.7 2.7 5-.7-.8-14z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m294.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m295 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m297.1 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.6 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M303.4 249.2v2h.8l-.8-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m306.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m309 249.2.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309.8 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m310.5 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m312.6 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m313.3 249.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "M314.7 249.8v.7h2.1l-2.1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#426331",
    d: "m195.1 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m196.5 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m197.2 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 249.8 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m200 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m202.4 250.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m203 250.3.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203.6 249.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 249.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m217.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m245 249.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m245.8 249.8 1.4 1.4v-1.4h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m247.2 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m247.9 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m248.8 250.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M250.7 249.8v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m252.8 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m255.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m256.3 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m257.7 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m260.5 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m261.2 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m262.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m294.3 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m295.7 249.8.7.7-.7-.7m1.6.5.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300 249.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m300.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m301.3 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.5 250.3.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m308.4 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m309 249.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m309.8 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.9 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m312.6 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m313.3 249.8-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m315.4 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m316.8 249.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m195.1 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m197.2 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m200.7 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m203.6 250.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m210.3 250.7.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217.6 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m245.8 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m247.2 250.5 3.5 13.4c4.3-1.5 10.9-2 13.4-6l-12.7 4-4.2-11.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m247.9 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m249.3 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m253.5 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m254.2 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m256.3 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m258.7 251 .2.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m259.1 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m260.3 250.7.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m261.2 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m262 250.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m294.3 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m295 250.5 5.6 21.4h-.7v-1.3h-.7l.7 6h-.7v-1.3h-.7v5.3h-.7c0-6.8-2.7-12.9-6.3-18.7l-1.4 1.3v.7c5.1 4.9 6.7 15.4 7 22h-1.4l-2.8-14h-.7l2 18.8h-.6l-2.8-14h-.7l2 21.3h-.6l-1.4-17.4h-.7l1.4 17.4h-.7l-.7-9.3h-.7l.7 11.4h-.7l-.7-9.4h-.7l-2.1 12.7 7.7-.7v-.6l-5-.7v-.7l18.4 4.7v-.7l-8.5-2.7v-.6l12.7 2.7c-4-4.9-9-4-14.8-3.4v-.7l16.2.7v-.7l-11.3-2.6v-.7l11.3.7v-.7c-8-1.8-12-.8-18.3 4.7l1.4-6.7h-.7l-.7 2h-.7l3.5-10h.7l-.7 7.3 16.2-6v-.7l-14.8 4a42.2 42.2 0 0 1 21.1-8.7v-.6c-8.4 0-13 1.9-19.7 6.7 5.3-6.6 13.5-7.3 21.1-10v-.8c-9.5.8-14 3-21.8 8 4.8-4.5 13-12.4 20.4-10.6l-1.4-3.4c-6.5 1.5-12.1 5-16.9 9.4 3.3-4.4 14.8-16.5 20.4-16-5.7-5-16.6 10.1-20.4 13.3l15.5-16.7-13.4 11.4 14.8-18.8v-.7c-7 2.5-9 10.8-14 15.4l10.5-16.7a26.8 26.8 0 0 0-9.9 14.7c-3.2.4-2 5.5-2 8h-.8c0-8-1-18-6.3-24.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m295.7 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m296.4 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m297.8 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.6 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 250.5.7.7-.7-.7m7 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m309 250.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.8 250.5.7.7-.7-.7m1.4 0 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m311.9 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "M313.3 250.5 309 254v.6l4.2-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314 250.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m314.7 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m315.4 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m316.1 250.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.1 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.8 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m198 251.2 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m201.4 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m202.1 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m202.8 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m203.6 251.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m206.4 251.2 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.9 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m213.4 251.2.7.7-.7-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m217.6 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m246.5 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m247.9 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m250.7 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M251.4 251.2v.7h2.1l-2.1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m253.5 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m256.3 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257.5 251.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m259.1 251.2.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m261.2 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m292.9 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m293.6 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m294.3 251.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m295.7 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m296.4 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m297.1 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m297.8 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m298.5 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m301.3 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m303.4 251.2 1.5 1.3-1.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.1 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m306 251.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m308.4 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309 251.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.2 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314.7 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m315.4 251.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m195.1 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.8 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m201.4 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m202.1 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203.6 251.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 251.8.6.7-.7-.7m2.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m212.7 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.6 252 .4.3-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m217 251.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m246.5 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m247.9 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m249.3 251.8-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m250 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m250.7 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m256 252 .5.3-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m257 251.8 1.4 4h.7l-2-4m2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m260 252.3.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m260.5 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m261.2 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m262 251.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m292.9 251.8.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m296.4 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.1 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m297.8 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m298.5 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 251.8.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m305.6 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 251.8 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m310.5 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m312.6 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m313.3 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m314.7 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m315.4 251.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m195.8 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m202.1 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m203.6 252.5-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m204.3 252.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.9 252.5.7.7-.7-.7m1.4 1.4 2.1-.7-2.1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m214.1 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217 252.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m246.5 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m249.3 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m251.4 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m252 252.5.8.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m254.9 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257.7 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m258.9 252.7.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m260.5 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m261.2 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m262 252.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m292.9 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m293.6 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m294.3 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m296.4 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m297.1 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m298.5 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.8 252.7.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 252.5.7.7-.7-.7m1.4 0 .8.7-.7-.7m2 0 .8.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m311.9 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m312.6 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314.7 252.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m195.8 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196.5 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m200 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m204.3 253.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m212.7 253.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m213.4 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m216.2 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 253.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m246.5 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m248.6 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m251.2 253.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m252 253.2 2.2 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m254.9 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m255.6 253.2 1.4 2-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m256.8 253.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m260.5 253.2 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m261.2 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m262 253.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m293.6 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m294.3 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m297.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m297.8 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m298.5 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m299.2 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m302 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m304.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.6 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 253.2 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307.7 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309.8 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m311.2 253.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 253.2.7.7-.7-.7m1.4 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m314.7 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m315.4 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m316.1 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c9c84",
    d: "m316.8 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m317.5 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m318.2 253.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m195.1 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m195.8 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m196.5 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200.7 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m202.8 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m205 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m211.3 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212.7 253.8-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m213.4 253.8.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m216.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m247.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m248.6 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m249.3 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m250 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m253.5 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m254.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m254.9 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m256.3 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M258.4 253.8v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m260.5 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m262 253.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m262.6 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m293.6 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m294.3 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m295 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.1 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 255.2 2.1-.7-2 .7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m299.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 253.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302 253.8 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m313.3 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m314.7 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m315.4 253.8.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m318.2 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m319 253.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m319.6 253.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m320.6 254.3.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m195.1 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m195.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m196.5 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m197.2 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m198 254.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200.7 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.7 255 .2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m202.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m205 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205.7 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m210.6 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212.7 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m214.8 254.5-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m215.5 254.5-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m247.2 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m249.3 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m250.7 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m251.9 254.8.4.2-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m252.8 254.5.7.7-.7-.7m2.6.2.4.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m257 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257.7 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262 254.5-2.9.7v.7l3.5-.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m262.6 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m293.6 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m294.3 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m295 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m298.5 254.5 2.8 11.4h.7c0-4.1-.5-8.2-3.5-11.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300 254.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 254.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307 254.5.7.7-.7-.7m2 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m312.6 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m313.3 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m314 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m316.1 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m316.8 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m317.5 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295210",
    d: "m318.2 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m319 254.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m319.6 254.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.1 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.8 255.2 2.1 1.3-2-1.3m2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m198.6 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m203.6 255.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m205.7 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M206.4 255.2v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m209.9 255.2.7.7-.7-.7m2 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m227.5 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m247.2 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m249.3 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250.7 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m251.6 255.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m254.4 255.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m255.1 255.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m255.8 255.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m256.3 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m257 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m262 255.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m262.6 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m280.2 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M281 255.2v.7h6.3l-6.4-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m287.3 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m291.5 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m293.6 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m295 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m300 255.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m303 255.6.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306.3 255.2.7.7-.7-.7m2 0 1.5 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 255.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309.8 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m312.6 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m313.3 255.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m315.4 255.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m316.1 255.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m195.8 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200.5 256 .5.3-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m203.6 255.9.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m206.4 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207 255.9.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.9 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m211.3 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m213.4 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m214.1 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m220.4 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    fillOpacity: ".3",
    d: "M221.1 255.9v.6h6.4v10c3.8-6 .2-10.6-6.4-10.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m227.5 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m247.9 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m249.3 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M250.7 256.5v.7l3.5-.7h-3.5m7-.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m258.4 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m259.1 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m262.6 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m263.4 255.9.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m280.2 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "M281 255.9v.6h6.3l-6.4-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m287.3 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m291.5 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m292.2 255.9.7.6-.7-.6m1.6.4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m294.3 257.2 2.1-.7-2.1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 255.9 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 255.9.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.3 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m307 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307.7 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m311.9 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m313.3 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314.7 255.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m195.8 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m197.2 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198 256.5.6.7-.7-.7m4 .2.5.3-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m203.6 256.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m206.4 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m207 256.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.2 256.5.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m212.7 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m213.4 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M220.4 256.5v5.4h.7l-.7-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m247.9 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m250 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m252 256.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m254.9 256.5 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m255.6 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m256.8 256.8.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m257.7 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m259.1 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m259.8 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m261 256.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m262 256.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m262.6 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m263.4 256.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M280.2 256.5v8.7h.7l-.7-8.7m7 0v10h.8l-.7-10z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m291.5 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m292.2 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m295 256.5 3.5 12h.7l-4.2-12z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.8 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.9 257 .2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302.7 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 256.5-.6 1.4.6-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m305.6 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307.4 256.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m308.4 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.2 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m311.9 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m312.6 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314.7 256.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m195.8 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m196.5 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m198.6 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.6 257.6.2.5-.2-.5m2.5-.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m202.8 257.2 1.4 1.3-1.3-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m203.6 257.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m206.4 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 257.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m208.5 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.9 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m212 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m212.7 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m247.9 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m250 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252 257.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252.8 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M253.5 257.2v.7h2.1l-2.1-.7m2.8 0-2 1.3v.7l2-2m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m259.1 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m259.8 257.2.7.7-.7-.7m2.8 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m263.4 257.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m291.5 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.4 257.6.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.9 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m294.3 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295.7 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 257.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m298.5 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 257.2-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m303.7 257.6.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m305.6 257.2.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m308.4 257.2.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.9 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314.7 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m317.4 260.4-2.8 4.7c1.9-1.3 3.7-2.4 2.8-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m321.7 257.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m196.5 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m197.2 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m204.3 257.9.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m206.4 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m208.5 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.9 257.9.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m212 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m214.6 258 .4.3-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m248.6 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m250 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m251.4 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m252 257.9.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m252.8 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257.7 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m258.4 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262.6 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m264 257.9.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m291.5 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.9 257.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m293.6 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m294.5 258.3.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 257.9.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.9 257.9.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m305.6 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.3 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307.7 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.2 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m313.3 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m320.3 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m321 257.9.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m197.2 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200.7 258.5 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.4 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m204.3 258.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m205.4 258.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m206.4 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m207.8 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.9 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m211.3 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m214.1 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m214.8 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m228.2 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m248.6 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m250.7 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m253.5 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m256.3 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m257 258.5.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m259.8 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m260.5 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m264 258.5.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m292.9 258.5 5 16.1h.6c0-5.6-1.8-11.7-5.6-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m293.6 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m296.4 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.6 259 .2.4-.2-.4m3.2-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m305.6 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306.3 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307.7 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m310.5 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m313.3 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m314 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m315.4 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m316.1 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m319 258.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m319.6 258.5-1.4 2.7 1.4-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m320.3 258.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m197.2 259.2 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m198 259.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m205 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m205.7 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 259.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.2 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m211.3 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m213.4 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m214.8 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101829",
    d: "m228.2 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m248.6 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m250.7 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m251.6 259.7.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252 259.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m252.8 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m253.5 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m257 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m257.7 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m258.4 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m263.4 259.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m264 259.2.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m279.5 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m292.4 259.7.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m293.6 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.5 259.7.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m296.9 259.4.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.3 259.4.5.3-.5-.3m1.7-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309.8 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m312.6 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m313.3 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m314 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314.7 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m315.4 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m316.1 259.2.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m318.2 259.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m319 259.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m189.5 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m190.2 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m198.6 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.3 259.9 1.4 1.3-1.4-1.3m4.3 0 .7.7-.8-.7m1.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m205.7 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m206.4 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m207 259.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M208.5 259.9v1.3h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m210.6 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m212.7 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m214.8 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m215.5 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m228.2 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m228.9 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m229.6 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m249.3 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m250.7 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m252 259.9.8.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m254.9 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m256 260.1.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m257 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m257.7 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m261.2 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m262 259.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m278.1 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m278.8 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m279.5 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295 259.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.1 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 259.9 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300 259.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302 259.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m304.4 260.3.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m305.6 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m306.3 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309.5 260.1.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m312.6 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m313.3 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314.5 260.1.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m315.4 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m316.8 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m317.5 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m318.2 259.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c9c84",
    d: "m189.5 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m190.2 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m199.3 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m203.6 260.6.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 260.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m205.7 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m206.8 260.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m207.8 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m210.6 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m212 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M209.7 267.4h-.7c-.1-3.8-1.6-6.3-5.6-7.4 0 2 1.6 10 5 7.4h.6l-1.4 6c2.1-2.2 10.8-10 7-13.5-3.2-2.9-4.8 6-4.9 7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m214.1 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m215.5 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m229.6 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m230.3 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m231 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m231.7 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m249.3 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m251.4 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252.8 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m253.5 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m259.8 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m260.5 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m276 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m276.7 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m277.4 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m278.1 260.6.7.6-.7-.6m12 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290.8 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m291.5 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.2 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.1 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.8 260.6-.7 1.3.7-1.3m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.6 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309 260.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.9 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m312.6 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m313.8 260.8.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314.7 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m315.4 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m316.1 260.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m316.8 260.6-2.1 3.3 3.5-3.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.2 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m190.9 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m199.3 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m200 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200.7 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M202.8 261.2v.7h2.2l-2.1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m205.7 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m208 261.7.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m208.5 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m210.6 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m211.3 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m212 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m213.6 261.7.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m215.7 261.7.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m231.7 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m232.4 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m233.1 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m233.8 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m234.5 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m235.2 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m249.3 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m251.4 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m252 261.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m252.8 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m257.7 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m258.4 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m259.1 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m272.5 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m273.2 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m273.9 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m274.6 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m275.3 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m276 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m290 261.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290.8 261.2 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m291.5 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m292.2 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 261.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300 261.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m304.9 261.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "M311.2 261.2v.7h2.8v-.7h-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m314.7 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m315.4 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m317.5 261.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m190.2 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m191.1 262.3.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m191.6 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m192.3 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.1 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m198.6 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m199.3 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m200.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m201.4 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.8 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m205.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m206.4 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m208.5 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m209.2 261.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m209.9 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a3131",
    d: "m210.6 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m211.3 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m219.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m220.4 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m221.1 261.9.7.7-.7-.7m13.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m235.2 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m236 261.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m236.6 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m250 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m256.3 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b0008",
    d: "m257 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M254.2 262.6v.6h2.1c-5.4 8.4-1.5 19.7-.7 28.8h.7c2-8.2 2.2-20 0-28.1l2.8 1.3.7-2.6-.7-.7-4.9.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m259.1 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m259.8 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m271 261.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m271.8 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m272.5 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m273.2 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m289.4 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 261.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m292.2 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.9 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300 261.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 261.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 261.9.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m307.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.2 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m312.6 261.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m313.5 262.3.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m314 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314.7 261.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m316.8 261.9-2.1 2.7 2.1-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.2 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m191.6 262.6 1.4 4h.7l.7-2.7-2.8-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m192.3 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m193 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m193.7 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m195.1 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m195.8 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m198.6 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m199.3 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m202.1 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m202.8 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m206.4 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a1000",
    d: "m207 262.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.8 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m210.6 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m213.2 262.8.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m215.5 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 262.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217.6 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m218.3 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m219 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m219.7 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m220.4 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m221.1 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m250 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m252.8 262.6-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m253.5 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m259.8 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m289.4 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290 262.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.2 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.9 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 262.6-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 262.6 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 262.6.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 262.6.7.6-.7-.6m1.4 0 1.4 1.3-1.3-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.9 262.6.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307.7 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 262.6 1.4 1.3-1.4-1.3zm3.5 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m317.5 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m318.2 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m319 262.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m319.6 262.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c9c84",
    d: "m189.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m190.2 263.2 2 3.4-2-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m190.9 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m193.7 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m194.4 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.1 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m195.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m198 263.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199 263.4.6.3-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m200 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b8c73",
    d: "m202.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 263.2 1.5 1.4v-1.4H207z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a1000",
    d: "m208.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m209.9 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m215.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m216.2 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m217 263.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m214.8 268.6 1.4-.7v.7l-5 4c4.5-1.7 6.7-4 8.5-8l-2 1.3 1.3-2.7-4.2 5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m219 263.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m219.7 263.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m220.4 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m242.2 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m243 263.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m243.7 263.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m244.3 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m245 263.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m245.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m250 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m251.4 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310010",
    d: "m252.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#180821",
    d: "m253.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310010",
    d: "m254.2 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m254.9 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m255.6 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m259.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m262 263.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m262.6 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m263.4 263.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c4a4a",
    d: "m264 263.2.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m265.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m289.4 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.2 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.9 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.6 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.4 263.7.2.4-.2-.4m2.6-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m312.6 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m316.8 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m317.5 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m319.6 263.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m320.3 263.2 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m189.7 264.3.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.9 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m191.6 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m194.4 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M195.1 263.9v.7l2.1.6-2-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m196.5 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m198 263.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M198.6 263.9v3.3h-.7l-.7-2h-.7l.7 6.7h-.7l-.7-7.3h-.7l-.7 5.3h-.7l-3.5-2.7 2 4h-.6l-2.8-3.3c2.3 8 5.7 6.8 11.3 11.3 2.1 1.6 3.5 5.2 4.9 7.4l-2.9-2 1.4 2-3.5-2 4.3 4 .7-2h.7c-1.8 3.2-5 3.6-8.5 4v-.6l1.4-1.3 3.5.6c-2.5-2.5-5.6-3-9.1-2l4.2 3.4v.6L193 296l8.4-1.3-.7 1.3h.7l4.3-2-8.5 4v.7c7.1-.9 8-3.2 12-8-.6 2.1-.6 3.3 1.4 4.7l-1.1-8 9.5-10.8-3.5 2.7 2.8-4c-4 .8-5.7 3.6-5.6 7.3l-4.2 4h-.7c1.5-4.1 5.6-6.5 4.2-11.3-3.7 2.6-4.7 5.8-5 10l-2.7-13.4.7 2.7h-.7v-1.3h-.7l.7 9.3h-.7c-2.2-5-.3-15.4-5-18.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m200 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m203 264.3.3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 263.9 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m209.2 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m209.9 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m215.5 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m216.2 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m219.7 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m245 263.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m245.8 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m246.5 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m247.2 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m247.9 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m250.7 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m251.4 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m252 263.9-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M250 287.3h.7a35.9 35.9 0 0 1 3.5-23.4c-8.3 4-7.8 16.8-4.2 23.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m254.2 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c2118",
    d: "m254.9 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce0008",
    d: "m257.7 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m259.1 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m259.8 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m260.5 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5252",
    d: "m261.2 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m262 263.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m262.6 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m279.5 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m288.7 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m289.4 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m290 263.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290.8 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.9 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m293.6 263.9-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m296.4 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m298.8 264.3.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.5 264.3.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 263.9.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m315.4 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m316.1 263.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m316.8 263.9.7.7-.7-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m191.6 264.6.7.6-.7-.6m2.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196 265 .3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m197.2 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m198 264.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m200 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205 264.6.7.6-.7-.6m3.5 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.2 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m215.7 265 .3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m218.3 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m219.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m228.2 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m247.9 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m248.6 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m249.3 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m250 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m250.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m253.5 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5252",
    d: "m254.2 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m257.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m259.1 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m259.8 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m279.5 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m288.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m289.4 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290 264.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m290.8 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m293.6 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 264.6-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.9 265 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 264.6 1.5 1.3-1.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m305.6 264.6 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m310.5 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m313.3 264.6-2.8 3.3 2.8-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m314.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m315.4 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m316.1 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m317.5 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m318.2 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m319 264.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m319.6 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m321.3 265 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m321.7 264.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m189.7 265.7.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m190.2 265.2.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m192.3 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m194.2 265.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m197.2 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m198 265.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m200.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m202.8 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 265.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m205.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m209.2 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 265.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m217.6 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m219 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m219.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m228.2 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m228.9 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m229.6 265.2.7.7-.7-.7m20.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m250.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m252.8 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m253.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m254.2 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m257.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m258.4 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m259.1 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#debdb5",
    d: "m278.1 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c4a4a",
    d: "m278.8 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m279.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m280.5 265.7.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m288.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m289.4 265.2.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m291.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.6 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 265.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.1 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m298.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 265.2-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m303.7 265.7.2.4-.2-.4m1.9-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m309.8 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m313.3 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m314 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m316.8 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m317.5 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m319.6 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m320.3 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m321.7 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m322.4 265.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m186.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m187.8 266.1.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m188.8 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m190.2 265.9 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m192.3 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m193.7 265.9-.7 2 .7-2m2.1 0v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m198 265.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m200.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.6 265.9.7.7-.8-.7m2.9 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m209.2 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212.7 265.9.7.7-.7-.7m2.6.2.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m217 265.9.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m219 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M228.9 265.9v10.7h-.7l-.7-9.4H221v19.4l2.9-1.3 1.4 4.7 3.5-2 .7 7.4 6.3-2c3 2 4.9 2 6.3-1.4h1.4l4.3 4-.7-12.7-12.7-.7v-.6l12 .6v-2c-9-.2-9.9-5.5-9.9-12.7l-7.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m229.6 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5252",
    d: "m230.3 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m231 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m250 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m250.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m252.8 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6b5b5",
    d: "m253.5 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m254.2 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m257 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m257.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a3131",
    d: "m258.4 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m276.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a56363",
    d: "m277.4 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m278.1 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M271.8 268c0 6.7-.7 12.2-9.1 12.6 1.8 5.1 11 1.9 14-.8 4.1-3.7 3.5-9 3.5-13.9l-8.4 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m288 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m288.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m291.5 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.3 265.9.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m304.9 265.9.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.6 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.1 272 6.4-6c-3.5.8-5 3-6.4 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309 265.9.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m312.6 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m313.3 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m316.1 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m316.8 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m320.3 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m321 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m321.7 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m322.4 265.9.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m323.1 265.9.7.7-.7-.7m-136.4.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m187.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m188.5 266.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m189.7 267 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.2 266.6.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m192.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198 266.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m200.7 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m203.6 266.6.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m206.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M209.2 266.6v2h.7l-.7-2m3 .4.3.5-.3-.5m2.6-.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m216.7 266.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m218.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m219 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m220.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a3131",
    d: "m227.5 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m231 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m231.7 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m232.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m233.1 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m249.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m250 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m252 266.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m252.8 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m253.5 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m257 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a2129",
    d: "m257.7 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m258.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d6a5a5",
    d: "m274.6 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m275.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a52921",
    d: "m276 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m276.7 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a2129",
    d: "m280.2 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "M281 266.6v.6h6.3l-6.4-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m287.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290 266.6 2.2 1.3v-.7l-2.1-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m291.5 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.2 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m294.3 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295 266.6-.7 1.3.7-1.3m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m297.8 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 266.6.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m303.4 266.6.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 266.6.7.6-.8-.6m3.6 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m311.9 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m312.6 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m315.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m316.1 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m321.7 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m322.4 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m323.1 266.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m187.4 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m188 267.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m188.8 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m192.3 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m193.7 267.2.7.7-.7-.7m5.2.5.2.4-.2-.4m1.8-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m201.4 267.2.7.7-.7-.7m2.1 0 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 267.2.6.7-.7-.7m2.9 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.1 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m214.8 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m216.2 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m218.3 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m233.1 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m233.8 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m234.5 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#943131",
    d: "m235.7 267.5.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6b5b5",
    d: "m236.6 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m249.3 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m252 267.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252.8 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#943131",
    d: "m253.5 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m256.3 267.2 1.4 6-1.4-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m257 267.2 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m257.7 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c69c94",
    d: "m271 267.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad3931",
    d: "m272.3 267.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m273.2 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m273.9 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m274.6 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "M280.2 267.2v5.4h.7l-.7-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M281 267.2c0 12.5-7.3 17-19.8 16.1l-.7 12.7c2.7 0 6.4.2 7-2.7l2.9 2 2.8-2.6-.7 2.6 1.4-1.3h.7l4.2-.7-.7 2 2.1-2.6 1.4 1.3h2.1v-2l1.5.7.7-6c3.5-3 1.4-15 1.4-19.5h-6.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m290 267.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.2 267.2.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M297.8 267.2v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M301.3 267.2v3.4h.7l-.7-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m304.9 267.2.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m307.7 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m311.2 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.9 267.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314.7 267.2-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m315.4 267.2.7.7-.7-.7m-127.3.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m189.5 268 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.2 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m193 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m193.7 268 .7.6-.7-.7m2.1 0v1.4h1.4v-1.4h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m201.4 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m204.3 268 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m215.5 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m217.6 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m218.3 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    fillOpacity: ".5",
    d: "M236.6 268v6h.7l-.7-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m248.6 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m249.3 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m252 268 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m253.5 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m257 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290 268 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m290.8 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m292.2 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 268 1.5 1.3-1.5-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 268 .7.6-.7-.7m2.9 0 .7.7-.7-.7m2.8 0-3.5 4 3.5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m310.5 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.2 268 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m314.7 268-.7 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m188 268.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m188.8 268.6.7.6-.7-.6m2 0 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m194 269 .2.5-.3-.5m5 0 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m201.4 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m204.3 268.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m205 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.2 268.6.7.6-.7-.6m4.2.6v.7h2.1l-2-.6m2-.7.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217.6 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m242.7 268.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m243.7 268.6.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m244.3 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m245 268.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m248.6 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m249.3 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m251.4 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m252 268.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m253.5 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m257 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m257.7 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m258.4 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m262.6 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m263.4 268.6.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m264.5 268.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m265.5 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m290 268.6.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m290.8 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m291.5 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m292.2 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.9 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295.5 268.8.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300 268.6.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m303.4 268.6.8.6-.8-.6m2.9 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m314.7 268.6.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m188.8 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m190.9 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m196.8 269.7.2.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m201.4 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203.6 269.3.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m205 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m205.7 269.3 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m208.7 269.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m214.1 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m217 269.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M243 269.3c0 3.3.3 5 4.2 5.3.6-3.6-.6-4.6-4.3-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m244.3 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m245 269.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m245.8 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m246.5 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m247.2 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m247.9 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m248.6 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m251.4 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m252.8 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m253.5 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m257 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce0008",
    d: "m257.7 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m258.4 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m260.5 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m261.2 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m262 269.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m262.6 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m263.4 269.3.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003994",
    d: "M259.1 270.6c1.7 5.8 6.3 4 6.3-1.4l-6.3 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m290 269.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290.8 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m291.5 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m292.2 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.9 269.3.7.6-.7-.6m2.8 0 .7.6-.7-.6zm9.9 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 269.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m313.3 269.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314 269.3-.7 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m188.8 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m190.9 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m191.6 270 .7.6-.7-.7m2.8 0 .7.7-.7-.7m4.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m203.6 270 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m205.7 270 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212.7 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m216.2 270-.7 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m217 270-.8 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m247.2 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m247.9 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m248.6 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m251.4 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b5adad",
    d: "m252.8 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m257 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m257.7 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m258.4 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m259.1 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m259.8 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m260.5 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m290.8 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m291.5 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m292.2 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m292.9 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m295.7 270 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m298.8 270.4.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 270 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m308.4 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m312.6 270 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m188.8 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m191.6 270.6.7.7-.7-.7m3 .4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196.5 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m204.3 270.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207.8 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m208.5 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m247.9 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m248.6 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m250.7 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m251.4 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m257.7 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#390821",
    d: "m258.4 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m290.8 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m291.5 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m292.2 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.9 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m293.6 270.6.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300 270.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m301.3 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.9 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m312.6 270.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m188.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m189.5 271.3.7.6-.7-.6m2.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196.5 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m202.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m204.3 271.3 1.3 1.3-1.3-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m205 271.3 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m207.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m210.6 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 271.3.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m214.1 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m214.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m215.5 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m247.9 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m250.7 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b0008",
    d: "m257 271.3.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m289.1 271.5.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m290.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292 271.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m292.9 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m296.6 271.7.3.5-.3-.5m2.1 0 .3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 271.3.6.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m303.4 271.3.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.2 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m314.7 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m315.4 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m316.1 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m316.8 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m317.5 271.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m189.5 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m192.3 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m194.4 272 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.1 272 .7.6-.7-.7m3.5 0-.7 1.4h1.4l-.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m201.4 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m203 272.4.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m207 272-.6 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.8 272 .7.6-.7-.7m2.3.5.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m212.7 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m213.4 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m247.9 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m250.7 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m258 272.4.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m258.4 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m259.1 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m288.7 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m289.4 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290.8 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m291.5 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.9 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m293.6 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M301.3 272v2.6h.7l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m303.2 272.1.5.3-.5-.2m2.4-.3-1.5 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m306.3 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 272-1.4 3.3h.7l.7-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m311.2 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m313.3 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314.7 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m315.4 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m317.5 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m318.2 272 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m189.5 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m192.8 272.8.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m201.4 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204 272.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m205.7 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m207 272.6-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M209.2 272.6v2l2-2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m211.3 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m212 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m242.2 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m247.6 272.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m250.7 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m258.7 273 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#390821",
    d: "m259.1 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m280.2 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m289.4 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m291.5 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.9 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m293.6 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m296.9 272.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m298.5 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302.7 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m310.5 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m311.2 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m312.6 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m313.3 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m318.2 272.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m189.5 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m193 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m195.1 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m198 273.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m201.4 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m202.8 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.5 273.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m207 273.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m209.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m210.6 273.3-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m212 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m212.7 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m220.4 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m227.5 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m242.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m250 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m250.7 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m257.7 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b0008",
    d: "m259.1 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m265.5 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m280.5 273.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m289.4 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290 273.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m291.5 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m294 273.5.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.1 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m309.8 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m310.5 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m311.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m318.2 273.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m319 273.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m190.2 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m193 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.1 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.8 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198 274 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m201.7 274.4.2.4-.2-.4m1.1-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m206.4 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 274-.6 3.3h.7v-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m208.7 274.4.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m211.3 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212.2 274.4.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m212.7 274 .7.6-.7-.7m5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m219 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m219.7 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m220.4 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m228.2 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m236.6 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m242.2 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m243 274 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m250 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250.7 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m257 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m257.7 274 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m258.9 274.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m259.8 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m264.8 274 .6.6-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m265.5 274-.7 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m289.4 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290 274 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m291.5 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.2 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.3 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.1 274 .7.6-.7-.7zm7 0 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m309 274 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309.8 274 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.5 274 .7.6-.7-.7m6 .3.6.2-.5-.2m1.6-.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m319 274 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m190.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m190.9 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m193.7 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m195.8 274.6 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196.5 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m198 274.6-.8 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m202.8 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 274.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#738c63",
    d: "m209.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m210.6 274.6-2.8 3.4 2.8-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m211.3 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m213 275 .2.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m215.5 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m216.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m217 274.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M217.6 274.6v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m218.8 274.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m219.7 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m220.4 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m228.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#943131",
    d: "m236.6 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m243 274.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m243.7 274.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m244.3 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m245.5 274.8.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m246.5 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m250 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m250.7 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m257.7 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m259.1 274.6 2.8 7.4-2.8-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m259.8 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m260.5 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m261.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m264 274.6.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c4a42",
    d: "m271 274.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m279.5 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m289.6 275 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m290 274.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m291.5 274.6-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.2 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m294.3 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.1 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m303.4 274.6.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307.9 275 .2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314.7 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m315.4 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m316.1 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m316.8 274.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m317.5 274.6 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m319 274.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m190.9 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m191.6 275.3 1.4 1.3-1.4-1.3m2.1 0 2.1 1.3v-.7l-2.1-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m194.4 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m197.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m201.4 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m202.8 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m203.6 275.3.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M205 275.3v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m208.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m209.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m210.6 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m214.1 275.3-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m214.8 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m215.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m219 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m219.7 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m228.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m236.6 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m246.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m247.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m250 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m252.8 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m257 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m258.7 275.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b0008",
    d: "m259.8 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m260.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad3931",
    d: "m271 275.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m279.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 275.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m294.8 275.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m306.3 275.3 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m313.3 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m314 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m314.7 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m317.5 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m319 275.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m319.6 275.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m324.6 275.3.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m325.5 275.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m191.6 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m198 276 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200.7 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m201.4 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.6 276 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m207.8 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdc6ad",
    d: "m208.5 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m209.9 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m211.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m213 276.4.2.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m214.1 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m218.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m219 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m228.2 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m236.6 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a59494",
    d: "m237.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m246.5 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m247.2 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10295a",
    d: "m250 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6b5b5",
    d: "m252.8 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m253.7 276.4.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m259.8 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m260.5 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#debdb5",
    d: "m270.4 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m271 276 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m279.5 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a7b42",
    d: "m289.4 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290 276 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m290.8 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m292.2 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M295 276v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m298 276.4.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m299.2 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m305.6 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.9 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m312.6 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m313.3 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m318.2 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m319 276 .6.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m319.6 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m322.4 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m323.1 276 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m323.9 276 .7.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m324.6 276 .6.6-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m192.3 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m193 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m198 276.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198.9 277 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m201.4 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m203.6 276.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 276.6-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m207.8 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m209.2 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m211.3 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m213.4 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m217 276.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m219 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m228.9 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m237.3 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m246.5 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "M250 276.6v5.4h.7l-.7-5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m252.8 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m257 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m259.1 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m260.5 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c4239",
    d: "m270.4 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m278.8 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m288 276.6 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m289.6 277 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m290.8 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m292.2 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 276.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m305.6 276.6.7.7-.7-.7m4.9 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m311.2 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.9 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m319 276.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m319.6 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m320.3 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m321 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m321.7 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m322.7 277 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m323.1 276.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m323.9 276.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m324.6 276.6.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m193 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m193.7 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m194.4 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.1 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m201.4 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m203.6 277.3.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m207 277.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m208.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m210.6 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m212.7 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m213.4 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m216.2 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217 277.3.6.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m219 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m228.9 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m237.3 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m238 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m246.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252.8 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m253.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m257.7 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m258.4 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b0008",
    d: "m259.1 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m260.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m261.2 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a5847b",
    d: "m269.7 277.3-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m270.4 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m278.8 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m288 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290.8 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m291.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m292.2 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m298 277.7.3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 277.3 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 277.3.7.6-.7-.6m2.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 277.3.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m309.8 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m310.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m316.6 277.5.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m317.5 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m318.2 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m319 277.3.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m319.6 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m320.3 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m321 277.3-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m321.7 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m323.1 277.3.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m323.9 277.3.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.1 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m195.8 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m196.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m197.2 278 .7.6-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m201.4 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m206.4 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m207 278 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m207.8 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m210.6 278 .7.6-.7-.7m2 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m215.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m216.2 278 .7.6-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m229.6 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m238 278 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a59494",
    d: "m238.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m253.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M258.4 278v9.3h2.1l-2-9.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m259.4 278.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce0008",
    d: "m260.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m261.2 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m269.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m278.1 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m288 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m288.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m289.4 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290.8 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m291.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c9c84",
    d: "m292.4 278.4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 278-.7 1.3.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 278 .7.6-.7-.7m2.1 0-2 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m303.4 278 .8.6-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m308.4 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m309 278 .8.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m309.8 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m310.5 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.6 278.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m312.6 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m313.3 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#426331",
    d: "m314 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m315.4 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m316.6 278.2.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m321 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m321.7 278 .7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m322.4 278 .7.6-.7-.7m-125.2.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m198 278.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m198.6 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m199.3 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200 278.6 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.4 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m202.1 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m206.4 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m207 278.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m209.9 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m215.5 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m218.3 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m229.6 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m230.3 278.6 1.4 2-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m239.4 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m240.1 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m253.5 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m258 279 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2131",
    d: "m261.2 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m268.3 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m269 278.6.7.7-.7-.7m8.4 0-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m278.1 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m288 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m288.7 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m289.4 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m291.5 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296 279 .2.5-.3-.4m2-.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m306.3 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m307 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m307.7 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m308.4 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m309 278.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309.8 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m310.5 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m319 278.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m319.6 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m320.3 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m321 278.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198 279.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m198.6 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m200 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m202.1 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205.7 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m206.4 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m207 279.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.7 279.5.4.2-.4-.2m2.8 0 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m214.8 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m218.3 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m240.1 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m240.8 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m241.5 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#943131",
    d: "m253.7 279.7.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m259.1 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m259.8 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m261.2 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m262 279.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a5847b",
    d: "m266.9 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c2118",
    d: "m267.6 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m277.4 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m288.2 279.7.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "M288.7 279.3v.7h2v-.7h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m289.4 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.5 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m292.2 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.8 279.3.7.7-.7-.7m7.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m306.3 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m307 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m317.5 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m318.2 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m319 279.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m319.6 279.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m198 280 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m200.7 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m202.8 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m205.7 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m207 280 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.2 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m212 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m214.1 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.8 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m217.6 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m218.3 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m231.7 280 .7.6-.7-.6m9.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c2929",
    d: "m242.2 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m243 280 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a59494",
    d: "m243.7 280 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6b5b5",
    d: "m244.3 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m245.5 280.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m246.5 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257.7 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce0008",
    d: "m259.1 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m259.8 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce0008",
    d: "m261.2 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m262 280 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m262.6 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd8c8c",
    d: "m263.4 280 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a5847b",
    d: "m264 280 .8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c5a52",
    d: "m264.8 280 .6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad3931",
    d: "m265.5 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m266.2 280 .7.6-.7-.6m9.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m276.7 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m288.7 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m290.3 280.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m291.5 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m292.2 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M295.7 280v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 280 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m315.4 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m316.1 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m316.8 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m317.5 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m318.2 280 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m198 280.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m198.6 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m200 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m200.7 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m202.8 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m205.7 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m206.4 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 280.6.8.7-.7-.7m2 0 .8.7-.7-.7m2 0-1.3 2.7h.7l.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m213.9 280.9.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217 280.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m217.6 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m231.7 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m232.4 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m246.5 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m253.5 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m258 281 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m259.8 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m262 280.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m275.3 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m276 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m288.7 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.2 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m303.4 280.6.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m314.7 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m315.4 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m316.1 280.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m198.6 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m199.3 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m200 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m200.7 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m201.4 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m203.6 281.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m205.7 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m206.4 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 281.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m211.3 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m212.7 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m213.4 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m217 281.3-1.5 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m233.1 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m233.8 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m246.5 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m253.5 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m259.8 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m262 281.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m273.9 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#291029",
    d: "m274.6 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#29396b",
    d: "m287.3 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m288.7 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m290 281.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290.8 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.2 281.3.7.7-.7-.7m10.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m303.4 281.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 281.3 1.5 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309.8 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M310.5 281.3v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m313.3 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m314 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M314.7 281.3v.7h2.1l-2.1-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "M316.8 281.3v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b8c73",
    d: "m319 281.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m319.6 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m320.3 281.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m198.6 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m201.4 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.6 282 .7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m205.7 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m206.4 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m212 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 282-.8 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m234.5 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m235.2 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m236 282 1.3 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m246.5 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m247.2 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425a84",
    d: "m250 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b5adad",
    d: "m253.5 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257.7 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#940008",
    d: "m260.3 282.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad0008",
    d: "m261.2 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m262 282 1.3 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m271.8 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m272.5 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m273.2 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m287.3 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396321",
    d: "m288.7 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M290.8 282v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.2 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.9 282-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "M295.7 282v3.3h1.4l-1.4-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m302 282-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307.9 282.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 282 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m319 282 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m319.6 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m320.3 282 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198.6 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m199.3 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m200 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m201.4 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.5 283 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m205 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m205.9 283 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m206.6 283 .2.5-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.2 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.8 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m220.4 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m236 282.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m237.3 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m238 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m238.7 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "M239.4 282.6v.7h5.7l-5.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m245 282.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m245.8 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m246.5 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m247.2 282.6.7.7-.7-.7m3 .5.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m253.5 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m254.4 283 .3.5-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m260.5 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m261.2 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#080829",
    d: "m262 282.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m263.4 282.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m269 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m269.7 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1021",
    d: "m270.4 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m271 282.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m287.3 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a7b42",
    d: "m288.7 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.9 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302 282.6.7.7-.7-.7m3.6 0 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m306.3 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m315.4 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m316.1 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m316.8 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m317.5 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m318.2 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m319 282.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m319.6 282.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m198.6 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.3 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m200.7 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m201.4 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m202.1 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m205 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209 283.5.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m214.1 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m239.4 283.3.7.7-.7-.7zm5 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m247.2 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m253.5 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#291029",
    d: "m260.5 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "M264 283.3v.7h5l-5-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m287.3 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m288 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m289 283.8.1.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.1 283.8.3.4-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.9 283.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m305.6 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m312.6 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m313.3 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m314 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314.7 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m315.4 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m316.1 283.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m198.6 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m199.3 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m200 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200.7 284 1.4 1.3V284h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m202.1 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m205 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m205.7 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m206.4 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m208.5 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m212.7 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m213.4 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m214.1 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m247.2 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m247.9 284 .7.7-.7-.7m2 0 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m250.7 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m254.2 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#390821",
    d: "m260.5 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m287.3 284 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m288 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290.8 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m291.5 284-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 286 2.1-2-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 284 1.5 1.3-1.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.1 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m304.9 284 .7.7-.8-.7m5.7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m311.2 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m312.6 284 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m190.9 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m191.6 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m199.3 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m200.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.8 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.6 284.6.7 2h.6l-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m206.4 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m208.2 284.9.5.2-.5-.2m2.4-.2.7.6-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m211.3 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m212 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m212.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m247.9 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m250 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m254.2 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m260.5 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m288.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m291.5 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.9 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m293.6 284.6-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302.7 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m303.4 284.6.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 284.6.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m309.8 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m310.5 284.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m190.9 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m191.6 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m192.3 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m193 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m193.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m199.3 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m201.4 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.1 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 285.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.8 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m210.6 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m212 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m212.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m218.3 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m219 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m223.3 285.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m248.6 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m250.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#943131",
    d: "m254.4 285.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m257.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m288 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m288.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.7 285.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m293.6 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.2 285.5.5.3-.5-.3m2.3-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m308.4 285.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309 285.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m190.9 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m191.6 286 .7.7-.7-.7zm2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m194.9 286.2.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m195.8 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m196.5 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m197.2 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m198 286 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m198.6 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m199.3 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m200 286-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m202.8 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207.8 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.2 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m209.9 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m212 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M212.7 286v2.7h.7l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m213.4 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m218.3 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m219 286 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m219.7 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m222.5 286-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m223.3 286 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m248.6 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m249.3 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250.7 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257.7 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M288 286v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m288.7 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.8 286.4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m299.2 288 3.5-2-3.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m307.7 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m308.4 286 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m191.6 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m198 286.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m198.6 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m200 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200.7 286.6 2.1 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m203.6 286.6.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m205 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m209.2 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m211.3 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m212.7 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m214.1 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m218.3 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M219 286.6c-2.2 4.7-4.7 9.8 1.4 12.8 0-4 1.5-9.7-1.4-12.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m221.1 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m222.5 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m223.3 286.6-.8 1.4h1.5l-.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m224 286.6.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31394a",
    d: "m249.3 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#525a6b",
    d: "m250.7 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m254.4 287.1.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a51008",
    d: "m257.7 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m286 287.1.3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m286.6 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m287.3 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m288.7 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m291.5 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 286.6-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300.6 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m305.6 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306.3 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m307 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m307.7 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m308.8 286.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m310.3 286.9.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295210",
    d: "m311.2 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.9 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "M312.6 286.6v.7h3.5l-3.5-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m316.1 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m316.8 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m317.5 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m318.2 286.6.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m319 286.6.6.7-.7-.7m-127.3.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m193.7 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m194.9 287.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196 287.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m200.7 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 287.3-.7 2h.7v-2m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m209.2 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m211.3 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M212 287.3c-1.7 4.3-1.2 6.9 1.4 10.7h.7v-10.7h-.7v8H212v-8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m214.1 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217.6 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m218.3 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m220.4 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m221.8 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m224 287.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m249.3 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m250 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m250.7 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m257.7 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5252",
    d: "m258.4 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m259.1 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#290018",
    d: "m259.8 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m260.5 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m286.6 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m287.3 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m288.7 287.3 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m289.4 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M291.5 287.3v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300 287.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 287.3.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M304.1 287.3v.7h2.2l-2.2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m306.7 287.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 287.3.7.7-.7-.7m4.9 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m313.3 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m314 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m314.7 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m315.4 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m316.1 287.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m192.3 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m201.4 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205 288 .7.7-.7-.7m3.5 0 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m209.2 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m210.6 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 288 .7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m214.8 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m217.6 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m219.3 288.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m220.4 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m221.1 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m221.8 288-.7 10.7 2.1-2h.8l-.7 2.7c5.5-1.6 6.5-5.2 4.9-10l-3.5 7.3h-.7V288h-.7l-1.4 7.4V288z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m222.5 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m224 288 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m227.5 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m228.2 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#080829",
    d: "m250.7 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#c6b5b5",
    d: "m254.2 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m257 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m257.7 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m286.6 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m287.3 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m288.4 288.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.6 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m295.7 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m299.2 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m302.7 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m303.4 288 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.8 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m310.5 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m311.2 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m311.9 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m312.6 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m313.3 288 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m192.3 288.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m193 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 288.7 1.4 1.3v-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m203.6 288.7.7.6-.8-.6m2.9 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 288.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m208.5 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m210.6 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M212.7 288.7v3.3h.7l-.7-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m214.8 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m217 288.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m221.1 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M222.5 288.7v2.6h.7l-.7-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m224 288.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m224.7 288.7.7.6-.8-.6m2.2 0-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m227.5 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m228.2 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m250 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m250.7 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m251.4 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m257 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m287.3 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m288 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m289.4 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300.6 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m308.4 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m309 288.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m309.8 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m310.5 288.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m311.6 288.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m193.7 289.3 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.6 289.8.2.4-.2-.4m9.6-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m209.9 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m210.6 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m215 289.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m216.2 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m217 289.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m219 289.3.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m224.7 289.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m226.8 289.3.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m228.9 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250.7 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m251.6 289.8.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m257 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m287.3 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m288 289.3.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m291.5 289.3.7 2.7h.7l-1.4-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.2 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.6 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295 289.3.7.7-.7-.7zm4.2 0 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300 289.3.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m305.6 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M306.3 289.3v.7l2.8.7v-.7l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m307 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m307.7 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M308.4 289.3v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m310.7 289.8.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "M311.2 289.3v.7l2.8.7v-.7l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m312.6 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m313.3 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m314 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314.7 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m315.4 289.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m193.7 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m197.7 290.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m198.6 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m205 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m209.9 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m216.2 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m219.3 290.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m220.9 290.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m224.7 290 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m225.4 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m226 290 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m228.2 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m228.9 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m252 290-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce1810",
    d: "m256.3 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m257 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m287.3 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m288 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m289.4 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290 290 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m303.4 290 1.5 1.3-1.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m304.9 290 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m306 290.2.5.2-.5-.2m3-.2.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m310 290.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m311.2 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m311.9 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m314 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314.7 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m315.4 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m316.1 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m316.8 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m317.5 290 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m194.6 291.1.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m195.1 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m195.8 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196.5 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 290.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 290.7.7.6-.7-.6m3.2.2.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m210.1 291.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.8 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m215.5 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m216.2 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M220.4 290.7v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M224.7 290.7v1.3h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m225.4 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m227.5 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m228.9 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m252 290.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c2118",
    d: "m256.3 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m285.9 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m286.6 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m288.2 291.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m289.8 290.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302.3 291.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m303.2 290.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M295 298.7a38 38 0 0 1 19.7-6c-6.5-3.8-17.5-1.5-19.7 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 290.7.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m310.5 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m311.2 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m311.9 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m312.6 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m313.3 290.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m195.1 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m201.4 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202.1 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 291.3.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 291.3.6.7-.7-.7m3.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m214.8 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m215.5 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m218.8 291.6.5.2-.5-.2m3.7-.3v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m226.8 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m228.9 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252 291.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m252.8 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m256.3 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m285.1 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#21315a",
    d: "m285.9 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a7b42",
    d: "m286.6 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m290 291.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m291.5 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300.6 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m312.6 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m313.3 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m314 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m314.7 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m315.4 291.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m193.7 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m194.4 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m200.7 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m201.4 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m203.6 292 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m208 292.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 292 .7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m215.3 292.2.4.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m218.3 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m224.9 292.5.2.4-.2-.4m2.1 0 .2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m228.9 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m242.2 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m243 292 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m252.8 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m256.3 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m283.8 292 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m285.1 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m285.9 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396321",
    d: "m286.6 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m288 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m288.7 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 292 .8.7-.7-.7m2 0 .8.7-.7-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m299.2 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300 292 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300.6 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m314.7 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m315.4 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m316.1 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m316.8 292 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m193.7 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m198 292.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m199 292.9.6.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m202.8 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m210.1 293.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M212 292.7v2.7h1.4v-2.7H212z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m214.8 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m215.5 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M218.3 292.7v3.3h.7l-.7-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m220.7 293.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m242.2 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m243 292.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252.8 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m253.5 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m254.2 292.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd0008",
    d: "m254.9 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m255.6 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m271.8 292.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m272.7 293.1.3.5-.3-.5m7.5-.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m281 292.7 2.7 2v-.7l-2.8-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m283.8 292.7.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m284.4 292.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m285.1 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m285.9 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m286.8 293.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m288.4 292.9.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m290 292.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m291.5 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.2 292.7-.7 2.7.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.3 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m295.2 293.1.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "M297.1 293.4v.6h2.1l-2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m298.5 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m299.2 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307.7 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m308.4 292.7-1.4.7v.6l1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m309 292.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "M309.8 292.7v.7h4.9l-5-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295210",
    d: "m314.7 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m315.4 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m316.1 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m316.8 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m317.5 292.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m318.2 292.7.7.7-.7-.7m-125.2.7.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m193.7 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m196.5 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m197.2 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m198 293.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m202.1 293.4.7.6-.7-.6m5.7 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m214.1 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m214.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m215.5 293.4.7.6-.7-.6m7 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m224.4 293.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m226.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m236 293.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m241.5 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m242.2 293.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m243 293.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m243.7 293.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m254.2 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b0808",
    d: "m254.9 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m255.6 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m267.6 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m271.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m277.4 293.4 1.4 1.3v-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001039",
    d: "m280.2 293.4.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m283.8 293.4.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m284.4 293.4.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m285.1 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m285.9 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290.3 293.8.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "M293.6 293.4v.6l3.5 1.4v-.7l-3.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m294.3 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295.7 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m304.9 293.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306 293.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m308.4 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m309 293.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m309.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m310.5 293.4.7.6-.7-.6m5.6 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m316.8 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m317.5 293.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m318.7 293.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m193 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m195.1 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m195.8 294 .7.7-.7-.7m5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 294-.8 1.4.8-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m207 294 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m207.8 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m208.5 294 .7.7-.7-.7m1.8.2.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m214.1 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m214.8 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#426331",
    d: "m215.5 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m220.7 294.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m222.5 294 .7.7-.7-.7m1.4 0 .7.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m226.5 294.2.5.3-.5-.3m2.4-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m235.2 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#211800",
    d: "m236 294 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m236.6 294 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m240.8 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m241.5 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m242.2 294-1.4 4-2-1.3 2 5.3h.7v-2.6h.7v4.7c3.4-2.2 3-6 2.2-9.4h-.7v6.7h-.7l-.8-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m243.7 294 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m244.3 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m253.5 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b4242",
    d: "m254.2 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m254.9 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m267.6 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#10214a",
    d: "m268.3 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m270.4 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m271 294 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m271.8 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m273.9 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001010",
    d: "m277.4 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m280.2 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m283.8 294 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m284.4 294 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m285.1 294-4.2 12c4-2 6-8 4.2-12z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m285.9 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m286.6 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m293.6 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.2 294.2.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.1 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302.7 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M302.7 294.7v.7h3.6l-3.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.9 294 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M305.6 294v.7h4.9l-5-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m310.5 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m311.2 294-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m311.9 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m312.6 294 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m319 294 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m192.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m193 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m194.4 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m195.1 294.7.7.7-.7-.7m5 0v2h.6l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m200.7 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 294.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m207 294.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m208.5 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m210.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m214.1 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m215.5 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m222.3 295 .5.1-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m224.2 295.1.2.5-.2-.5m1.9-.4.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m235.2 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m236 294.7 1.3 3.3h2.1l-3.5-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m236.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m240.8 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M243 294.7v2.7h.6l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m244.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m253.5 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m254.2 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m254.9 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#083121",
    d: "m267.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m268.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m269 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m270.4 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m271 294.7-.6 6h.7v-6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#083121",
    d: "m271.8 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000818",
    d: "m273.9 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m276.7 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m277.4 294.7-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m279.5 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m280.2 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00215a",
    d: "m281 294.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m281.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m282.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m283 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m283.8 294.7-.8 1.3.8-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m284.4 294.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m285.9 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m286.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m290.3 295.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m293.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m301.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m302 294.7.7.7-.7-.7m4.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "M307 294.7v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m309.5 295 .5.1-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m311.2 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.9 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m312.6 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m313.3 294.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m314 294.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m192.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m197.2 295.4.7 2.6h.7l-1.4-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m199 295.6.6.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m202.8 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m203.6 295.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m206.4 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m207 295.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m208.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.2 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m209.9 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m210.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m211.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m214.1 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m215.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m220.4 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m226 295.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m228.9 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m229.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313918",
    d: "m235.2 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m236 295.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m237.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m238 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m239.2 295.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m240.1 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m240.8 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m244.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m245 295.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m253.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m254.2 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m264 295.4.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00216b",
    d: "m264.8 295.4.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103921",
    d: "m267.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m268.3 295.4-.7 8.7c2.6-2.5 2.5-5.8.7-8.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102121",
    d: "m269 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#212139",
    d: "m269.7 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m270.4 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m271.8 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m272.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m273.2 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m273.9 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#31425a",
    d: "m274.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m275.8 295.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m277.6 295.8.3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m278.1 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#636b7b",
    d: "m278.8 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m279.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m281 295.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m281.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m282.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m283.8 295.4.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m284.4 295.4.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m291.5 295.4.7.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m293.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300 295.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m300.6 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307.7 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m308.4 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m309 295.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m309.8 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m310.5 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.9 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m312.6 295.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m313.3 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314 295.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m192.3 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m193 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m193.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m194.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m195.1 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m196.3 296.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m199 296.3.6.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m201.2 296.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m205.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m206.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m209.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m211.5 296.5.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212 296 .7 2.7h.7L212 296z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m214.3 296.5.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m215.5 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m216.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m220.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m224 296 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m225.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m228.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m228.9 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m229.6 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m230.3 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m231 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m231.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m232.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m233.1 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m235.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m236 296 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m236.6 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m238.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m239.4 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m240.1 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m245 296 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5252",
    d: "m245.8 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m246.5 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m247.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#002984",
    d: "m260.5 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00184a",
    d: "m261.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#42425a",
    d: "m262 296 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262.6 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m263.4 296 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m264 296 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m264.8 296 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m269 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m269.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m273.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m276 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m276.7 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m278.8 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m281 296 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m281.6 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m282.3 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m283 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m283.8 296 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m284.4 296 .8.7-.8-.7m5.7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.7 296.5.3.4-.3-.4m1.2-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 296 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 296 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.8 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m310.5 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m311.2 296 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m192.8 297 .4.1-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m194.4 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m195.1 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m196.5 299.4 1.4-2c-1.8-.4-2.9.6-1.4 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m199 297 .6.1-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m204.3 296.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m205 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m205.7 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m209.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m216.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217 296.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m220.7 297.1.2.5-.2-.5m2.5-.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m228.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m229.6 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m230.3 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m231 296.7.7 4.7 3.5 2.7 5 .6.6-.6c-.5-1.9-6.2-9.7-7-5.4l-1.4-2H231z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M232.4 296.7v1.3l1.4-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m233.8 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m235 297 .4.1-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m236.1 297.1.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m237.3 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m239.4 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m240.1 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m245 296.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m247.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m247.9 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m248.6 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m249.3 296.7.7.7-.7-.7m9.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m259.1 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m259.8 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m260.5 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m261.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m269 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m269.7 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m272.5 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m273.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m275.3 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m276 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m276.7 296.7-5 8c5.6 0 8-2.9 8.5-8h-.7l-4.9 7.4 2.1-7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m277.4 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m278.8 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m280.2 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m281 296.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m282.3 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m283 296.7-4.9 8.7c3.3-1.5 5.7-5.2 5-8.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m283.8 296.7.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m284.4 296.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m290 296.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m294.3 296.7.7.7-.7-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m298.5 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m301.1 297 .5.1-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M302.7 296.7v.7h2.2l-2.2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.9 296.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m306 297 .5.1-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m307 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m307.9 297.1.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m308.4 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.9 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m312.6 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m313.3 296.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m194.4 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m196.5 297.4-.7 1.3h1.4l-.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m197.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.8 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m203.6 297.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m204.3 297.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m207 297.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m207.8 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c9c84",
    d: "m208.5 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m209.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m209.9 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m210.6 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m211.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212.7 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m214.1 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m217 297.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m223.3 297.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m227.5 297.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m228.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m230.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m231.7 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m236.6 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m238 297.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m240.1 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m243.2 297.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m245.3 297.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m248.6 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m249.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m250 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m257.7 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m258.4 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m259.1 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m269.7 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m272.5 297.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m273.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m275.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m276 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m277.9 297.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m278.8 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m280.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m281 297.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m281.6 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m282.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m283.8 297.4.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m290 297.4.8.6-.7-.6m1.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "M295.7 298v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.1 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m297.8 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m308.4 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m309 297.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m309.8 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m310.5 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.2 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m312.4 297.6.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m313.3 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m314 297.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m194.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.3 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m200.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m201.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m202.1 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m202.8 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m204 298.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m205 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m205.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m206.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m207 298 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M205.7 298.7v.7h6.3v.6h-6.3v.7h1.4v.7c-3.9.2-5.8 1.5-7.8 4.7l12-.7v.7c-3.3 1-8 .6-9.2 4 4.5-1.8 11-2.4 13.4-6.7l-4.2 2 2-2.7-6.2-.6v-.7l11.2.7v.6h-2v.7l9-.7v-.6h-2v-.7h4.2v-.7l-5.7 1.3-16.1-3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m213.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m214.1 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 298 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m217.6 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m220.4 298 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m223 298.3.5.2-.5-.2m3-.3.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m227.5 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m230.3 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m231 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m232.9 298.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m238 298 2.1 1.4v-.7l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m239 298.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m240.8 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m250 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m250.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m251.4 298 .7.7-.7-.7m5 0-1.5 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m257 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m257.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m269.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m272.5 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m273.2 298-4.2 6.7c2.6-1.3 5-3.7 4.2-6.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m273.9 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m274.6 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m275.3 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m276.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m277.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m278.1 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m280.2 298 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m281 298 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m281.6 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m283 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m283.8 298 .6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m288.7 298 .7.7-.7-.7zm5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m296.4 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309 298 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m309.8 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m310.5 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m311.2 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m311.9 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m312.6 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m313.3 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m314 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314.7 298 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m194.6 299.1.3.5-.3-.5m2-.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m197.2 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198.4 299 .5.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m199.3 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m200 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m202.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m203.6 298.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 298.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m214.1 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m214.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m217 298.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m217.6 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m218.3 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m220.4 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m221.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m222.5 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m224.7 298.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m225.4 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m226 298.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m230.3 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m231 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m233.8 298.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m240.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M243 298.7v2.7h.6l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m245 298.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m251.4 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252 298.7 2.2 2.7-2.1-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m256.3 298.7-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m257 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m270 299.1.1.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m271.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m272.5 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m273.9 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m274.6 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m276.7 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m277.4 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m278.1 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m280.2 298.7.7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m288.7 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295.7 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309.8 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m310.5 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m311.2 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m313.3 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m314 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m314.7 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m315.4 298.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m193.7 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m195.1 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.8 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m196.5 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203.6 299.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m204.3 299.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M205 299.4v.6h3.5l-3.5-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m208.5 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m209.2 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.9 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m210.6 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m211.3 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m214.8 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m215.5 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m216.2 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m217 299.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m218.3 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m219 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m219.7 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m220.4 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m221.1 299.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m221.8 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m222.5 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m223.3 299.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m224 299.4.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m224.7 299.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m225.4 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m231 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m235.2 299.4 2.1 2-2-2m4.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m241.8 299.8.2.5-.2-.5m3.2-.4.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m267.6 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m271 299.4.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m271.8 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m273.9 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m274.6 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m276.7 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m277.4 299.4.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m280.7 299.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m283 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m285.1 299.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 299.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M298.5 299.4v.6h2.1l-2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300.6 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M301.3 299.4v.6h3.5l-3.5-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m304.9 299.4.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m305.6 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m306.3 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311.2 299.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.9 299.4.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m193.7 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m194.4 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m195.1 300-1.4.7v.7l1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m205 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m212.7 300 .7.7-.7-.7m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m216.2 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423100",
    d: "m219.5 300.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m221.1 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m221.8 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m222.5 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M223.3 300v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m226 300 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m226.8 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m227.5 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m228.2 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m231 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m235.2 300 .7.7-.7-.7m4.2 0 .7 2h.7l-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m245 300 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m254.2 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m267.6 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m271 300 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m273.2 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m273.9 300-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m276 300 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m276.7 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m279.5 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m280.2 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m282.3 300 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m283 300 .7.7-.7-.7m2.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m296.4 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.1 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m305.6 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m306.3 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m307 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m307.7 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m308.4 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m309 300 .8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m309.8 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m312.6 300 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m202.8 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m203.6 300.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 300.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m206.1 301 .5.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m216.2 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m217 300.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m217.6 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m218.3 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m219 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m219.7 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m220.4 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m221.1 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m227.5 300.7-2.1 2 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M228.2 300.7v1.3h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m228.9 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m229.6 300.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m231 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m236 300.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m239.4 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m241.5 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m245 300.7.8.7-.7-.7m9.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m267.6 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m271 300.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m273.9 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m276 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m278.8 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m279.5 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m280.2 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m282.3 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m285.1 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m288 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m289.1 301 .5.2-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 300.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290.8 300.7-.7 1.3.7-1.3m2.8 0 .7.7-.7-.7m13.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m307.7 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m308.4 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m309 300.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309.8 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m310.5 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m311.2 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m311.9 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m312.6 300.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m313.3 300.7 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m201.4 301.4-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m202.1 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.5 301.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m208.7 301.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m218.8 301.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m220.4 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m221.1 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M223.3 301.4v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m229.6 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m231 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m231.7 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m232.4 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m233.1 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a4208",
    d: "m233.8 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m236.6 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "M237.3 301.4v1.3h1.4l-1.4-1.3zm7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m245 301.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m266.9 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m267.6 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m269.7 301.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m272.5 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m273.2 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m275.3 301.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m276 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m279.3 301.6.5.2-.5-.2m3-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m284.4 301.4 1.5 1.3-1.5-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m285.1 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m290.8 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.5 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.2 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.9 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m298.5 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "M299.2 301.4v1.3h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300 301.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m308.4 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m309 301.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m311.9 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m312.6 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m313.3 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m314.7 301.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m201.4 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M209.9 302v.7h2.8l-2.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M213.4 302v2l2.8-2h-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m216.7 302.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m217.6 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m221.8 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m222.5 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m226 302 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m226.8 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m227.5 302-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "M228.2 302v1.4h1.4l-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m230 302.3.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m231.7 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m232.4 302 .7.7-.7-.6zm1.4 0 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m234.5 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m240.6 302.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m244.3 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m266.9 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m269.7 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m271.8 302 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m272.5 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m275.5 302.5.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m278.1 302 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m278.8 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m282.1 302.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m284.4 302 .8.7-.8-.6m8.7.4.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m293.8 302.5.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m296.4 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m297.1 302-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M300.6 302v.7h2.1l-2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302.7 302 1.4 1.4V302h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.1 302 .7.7-.7-.6m5 0 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m309.8 302 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m313.3 302 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m314.5 302.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m200.7 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m213.4 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m223.3 302.7 2.8 1.4v-.7l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m224 302.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m224.7 302.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m225.4 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m226 302.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m227.5 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m229.6 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m231.7 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423100",
    d: "m234.5 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m241 303.2.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m243.7 302.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m244.3 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m266.9 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m269.2 303.2.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m269.7 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m271.8 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m274.6 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m278.4 303.2.2.4-.2-.4m3.2-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m284.4 302.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m286.6 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m287.3 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M285.9 303.4v.7l6.3-.7h-6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m292.2 302.7-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m294.3 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.1 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m298.5 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m304.1 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m304.9 302.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m305.6 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m306.3 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m307 302.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m200 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 303.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209.9 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m212.7 303.4-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m215.5 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m216.2 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m217 303.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m217.6 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M218.3 303.4v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m221.1 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m221.8 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m222.5 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "m219.7 306.7 14.8-2c-4.6-1.8-11.3-1.6-14.8 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M228.2 303.4v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M230.3 303.4v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m232.4 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m233.1 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m233.8 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m234.5 303.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m243.7 303.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m266.2 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m270.4 304.7 2-1.3-2 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m274.6 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m277.4 303.4-1.4 2h2.1l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m281.4 303.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m283.8 303.4.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m285 303.6.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 303.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m292.2 303.4-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M292.9 303.4v.7l9.8 2.6v-.6l-9.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m298.5 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m299.2 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m300 303.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m304.1 303.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m304.9 303.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m305.6 303.4 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m306.3 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m307 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m307.7 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m308.4 303.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m309 303.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m199.3 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m200 304 .7.7-.7-.6m2.8 0v1.3h2.1v-1.3h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205.7 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m206.4 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m207.5 304.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m215.5 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m217.6 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "M218.3 304v.7h2.8l-2.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m221.1 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m221.8 304 .7.7-.7-.6m12.7 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "M236 304v.7h2l-2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m238 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m240.1 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m240.8 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m243.7 304 .7.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd8c8c",
    d: "m244.8 304.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m245.8 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c4a42",
    d: "m253.5 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad524a",
    d: "m254.2 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m262 304 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd8c8c",
    d: "m263.1 304.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m266.2 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m268.3 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m277.4 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m280.2 304-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m281 304 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m283 304 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m283.8 304 .6.7-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m283.8 306 17.5 2.7v2.7c2-5.8-14.2-9.7-17.6-5.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.2 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m292.9 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m293.6 304 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m294.3 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300 304 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m300.6 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m305.6 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m309 304 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m309.8 304 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m311 304.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.9 304 .7.7-.7-.6m-113.3.6-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m199.3 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m200.7 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m202 305 .4.2-.5-.2m9.4-.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m214.8 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m219.7 304.7-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m220.4 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m232.9 305 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m233.8 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423100",
    d: "m234.5 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m235.7 305 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m236.6 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M237.3 304.7v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M239.4 304.7v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m241.5 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M225.4 316.8v-.7l-4.3.7v-.7c19-5.7 47.1-5.7 66.2 0v.7l-3.6-.7c3.5 5 13 2 9.9-4-2.7-5-12.5-5.5-17.6-6.2-14.3-2-30-2.1-44.3.1-5 .8-11.3 1.2-15.3 4.6-3 2.4-1.9 7.3 2 8.4 2.4.7 5-1.1 7-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m266.2 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m269 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m270.1 305 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m271 304.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m273.9 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m274.6 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m275.3 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m276.7 304.7.7.7-.7-.7m3.5 0-.7 1.4.7-1.4m2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m293.6 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295.5 305 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 304.7-.7 1.4.7-1.4m4.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m301.3 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m302 304.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m302.7 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#315221",
    d: "m303.4 304.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m304.1 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m306.3 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m307 304.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m310.5 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m311.2 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#102110",
    d: "m311.9 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m312.6 304.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m198.6 305.4 4.2 2-4.2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m210.1 305.8.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m210.6 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m214.1 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m214.8 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m219.7 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m228.2 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m228.9 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m229.6 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m230.3 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m231 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m231.7 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m232.4 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m233.1 305.4.7.7-.7-.7m41.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m275.3 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m276 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m276.7 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m277.4 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a4208",
    d: "m278.1 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m278.8 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m280.2 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m282.3 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m283 305.4.7.7-.7-.7m1.4 0 3.6.7-3.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m287.3 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m297.1 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m297.8 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m298.5 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m302 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m304.1 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m304.9 305.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m305.6 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m306.3 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m307 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m311.9 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m312.6 305.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m198 306 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "M202.8 306v1.4h1.4v-1.3H203m5.1.4.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m209 306.3.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m212.7 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m213.4 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m214.1 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m219 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m222.3 306.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m223.7 306.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m224.7 306 .7.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#181000",
    d: "m225.4 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m226 306 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m226.8 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m227.5 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m228.2 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m228.9 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m244.3 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m245 306 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m245.8 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m248.6 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m249.3 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m254.7 306.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m255.6 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m259.6 306.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m260.5 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m279.5 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m280.2 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m281 306 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m281.6 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m282.3 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m283 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m283.8 306 .6.7-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M288 306v.7h2l-2-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m290 306 1.5 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290.8 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m297.8 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m298.5 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m299.2 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m300 306 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m300.6 306 .7.7-.7-.6m2.1 0 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m303.4 306 .8.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m305.6 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m306.3 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m307 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m307.7 306 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m197.2 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m204.3 306.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m205 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m205.7 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m206.8 307 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m211.3 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m212 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m212.7 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m218.3 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m219.5 307 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M218.3 308v.7l4.2-1.3-4.2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m222.5 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m223.3 306.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m224 306.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m224.7 306.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m233.8 306.7.7.7-.7-.7zm2.8 0 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m243.7 306.7.7.7-.8-.7zm2.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m249.3 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m257 306.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m258.4 306.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m261.2 306.7 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m262 306.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m264.8 306.7.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m266.2 306.7-.7 4.7.7-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m266.9 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m268.3 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m269 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m269.7 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m271 306.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m273.9 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m283 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m283.8 306.7.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a1000",
    d: "m284.4 306.7.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m285.1 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m286.6 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M287.3 306.7v.7l7 1.4-7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290 306.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.5 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m292.2 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m293.1 307.2.3.4-.3-.4m6.1-.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m300 306.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m300.6 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m301.3 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m302.7 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m304.1 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m307 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m307.7 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m308.4 306.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m201.4 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.1 307.4.7.7-.7-.7m6.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m209.2 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m209.9 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m210.6 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m211.3 307.4.7.7-.7-.7m6.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m218.3 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m221.1 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m221.8 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m230.3 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m236.6 307.4.7.7-.7-.7m2.1 0 .7.7-.7-.7m5.4.2.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m245 307.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m246.2 307.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m257 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m261 307.6.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m264 307.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m268.5 307.9.2.4-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m275.3 307.4 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m277.4 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m280.2 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m285.9 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m286.6 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m287.3 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m288 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m293.6 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001000",
    d: "m294.3 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m295 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m295.7 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m296.4 307.4.7.7-.7-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m300.6 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m301.3 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m302 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m302.7 307.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m304 307.6.4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m304.9 307.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m201.4 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m205.7 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#396b10",
    d: "m206.4 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#526b42",
    d: "m207 308 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m207.8 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m208.5 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m209.2 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 308 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m217.6 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a1000",
    d: "m219 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m219.7 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m224.4 308.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m229.6 308 .7.7-.7-.6zm3.7.5.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m235.2 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m236 308 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m237.3 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m245.8 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m246.5 308 .7.7-.7-.6m1.4 0 .7.6-.7-.6zm2 0 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M255.6 308v2h.7l-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m256.3 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m259.1 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m259.8 308 .7 2-.7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m264 308 .8.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m264.8 308 .6.7-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m274.6 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m275.3 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m276.7 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m278.1 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m279.5 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m280.2 308-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m281.2 308.5.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m283 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m283.8 308 .6.7-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m288 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2908",
    d: "m288.7 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m289.4 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m290 308 .8.7-.7-.6m4.4.4.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m295 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m295.7 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m296.4 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m297.1 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m297.8 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m298.5 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m301.3 308 1.4 1.4-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m302 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m303.4 308 .8.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m304.1 308 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m304.9 308 .7.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m201.4 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m204.3 308.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m205 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m205.7 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m217 308.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m217.6 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m218.3 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m221.8 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m222.5 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m223.3 308.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m224 308.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m224.7 308.7.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m231 308.7.7.7-.7-.7zm6.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m249 309 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m256.3 308.7.7.7-.7-.7m7.7 0 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m268.3 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m269.7 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M276 308.7v2.7l2.8-.6-2.8-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m278.1 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m279.5 308.7.7.7-.7-.7m4 .3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m285.1 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m285.9 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m289.4 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m290 308.7.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m291.3 309 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.2 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m293.4 309 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m295 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m297.1 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m297.8 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m298.5 308.7 1.4 2-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m299.2 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m300 308.7.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m300.6 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m302.7 308.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m202.8 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m203.6 309.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m204.3 309.4.6.7-.7-.7m11.3 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m216.2 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m217 309.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m219.5 309.6.5.3-.5-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m221.8 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m223.3 309.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m227.5 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m228.2 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m231.2 309.9.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m246.5 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m247.2 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m248.1 309.9.2.4-.2-.4m2.1 0 .2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m256.8 309.6.4.3-.4-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m259.1 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m263.4 309.4.7.7-.8-.7zm8.4 0-.7 2.7.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m273.9 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m274.8 309.9.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m275.5 309.9.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m278.8 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m280.2 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m281.2 309.9.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m282.3 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m285.1 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m285.9 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m290.8 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m291.5 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m292.2 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m292.9 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m293.6 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m294.3 309.4 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a6b52",
    d: "m295.7 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m296.4 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m297.1 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m297.8 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m300 309.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m300.6 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m302 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m302.7 309.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m202.1 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m202.8 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m214.8 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m215.5 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m216.2 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m217.6 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m218.3 310 .7.7-.7-.6zm2.1 0 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m221.8 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m223.3 310 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m226 310 .8.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m229.6 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m235.2 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m236 310 .6.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m244.1 310.3.5.2-.5-.2m2.1 0 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m247.2 310-.7 1.4.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m249 310.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m250.7 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m255.6 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m257 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m257.7 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m261 310.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m263.4 310 .7.7-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m264.8 310 .6.7-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m270.4 310 .7.7-.7-.6zm9.1 0 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m280.2 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m282.3 310 .7.7-.7-.6m2.1 0 .8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m285.1 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m285.9 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m288 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m289 310.5.1.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m292.2 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m292.9 310 1.4 1.4v-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m294.3 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m297.1 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m297.8 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m298.5 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b735a",
    d: "m300.6 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m302 310 .7.7-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m202.1 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m214.1 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m214.8 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m217 310.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m217.6 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m219 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m219.7 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m221.8 310.8.7.6-.7-.6m4.3 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m227.5 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m228.2 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m230.3 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m231 310.8-.7 1.3.7-1.4zm9.8 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m243.7 310.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m247.2 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m247.9 310.8.7.6-.7-.6m2 0 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m250.7 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m256.3 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m258.4 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m263.4 310.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m264.8 310.8.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m274.6 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m275.3 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m276.7 310.8 1.4 1.3-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m278.1 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m278.8 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m283 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m284.4 310.8-.6 1.3.6-1.4zm1.5 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m287.3 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m292.9 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m294.3 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m295.2 311.2.3.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m295.7 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m296.4 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m300.6 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a6342",
    d: "m302 310.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m213.4 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m214.1 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m219 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m219.7 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m221.1 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m222 311.9.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m223.5 311.9.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m224 311.4 1.3 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m226 311.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m227.5 311.4.7.7-.7-.7zm5.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m238 311.4.7.7-.7-.7zm6.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m245 311.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m245.8 311.4.7.7-.7-.7m1.8.2.5.3-.5-.3m2.8 0 .5.3-.5-.3zm8.7-.2.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m259.8 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m260.5 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m262.6 311.4.7.7-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "M264.8 311.4v.7h2l-2-.7m3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m269 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m274.6 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m279.5 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m281.2 311.9.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m282.3 311.4.7.7-.7-.7m2.1 0 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m285.9 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m293.6 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m294.3 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m295.7 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m296.4 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m297.1 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m300.9 311.9.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m301.3 311.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m302 311.4.7.7-.7-.7m-88.6.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m214.1 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m217.6 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m218.3 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m221.1 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m222.5 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m224 312 .6.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m225.4 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m226.8 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m227.5 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m231 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m231.7 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m232.4 312 .7.8-.7-.7m42.9 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m276 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m276.7 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m277.4 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m278.8 312 .7.8-.7-.7m1.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m281.6 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m282.6 312.5.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m283.5 312.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m285.9 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m286.6 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m288 312 .7.8-.7-.7zm1.6.5.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m294.3 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m295 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m295.7 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m296.4 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m297.1 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m297.8 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m301.3 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m302 312 .7.8-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b4242",
    d: "m213.4 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m219.7 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m220.4 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m222.5 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m225.4 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m226.8 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m227.5 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M243 312.8v.6h4.2l-4.3-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m247.2 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M247.9 312.8v.6h13.3l-13.3-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M261.2 312.8v.6h4.3l-4.3-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m265.5 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m280.2 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m281 312.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m281.6 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m283.5 313 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m285.1 312.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m285.9 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m288 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m294.3 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m297.4 313.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m297.8 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m298.5 312.8.7.6-.7-.6m2.1 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m301.3 312.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m205 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m205.7 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b4242",
    d: "m206.4 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m209.2 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m209.9 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m210.6 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m213.4 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m218.3 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ffce08",
    d: "m219.3 313.9.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m221.1 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m224 313.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m224.7 313.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m234.3 313.6.4.3-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m235.2 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m236 313.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m236.6 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m237.8 313.6.5.3-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m238.7 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "M239.4 313.4v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m242.2 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "M243 313.4v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m245 313.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m245.8 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m246.5 313.4 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M247.2 313.4c1.8 2.3 3.3 3.2 6.3 2.7l-6.3-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m251.4 313.4 1.4 3.4h1.4l-2.8-3.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m252 313.4 2.2 2-2.1-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m254.9 313.4-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m255.6 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m256.3 316.8 5.6-2.7c-2.8-1.1-6.2-.8-5.6 2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m262 313.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262.6 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#946b63",
    d: "m269 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m270.1 313.6.5.3-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c3939",
    d: "m271 313.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m271.8 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m272.5 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m273.7 313.6.4.3-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m274.6 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m285 313.6.4.3-.5-.2m1.7-.3.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m287.3 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m288 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m289.4 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m294.3 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m297.8 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m298.5 313.4.7.7-.7-.7zm3.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m302.7 313.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m204.3 314.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m205 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m205.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M205 320.1c7.3-4.2 16.8 7.4 22.5-2l-.7-.7c-2.4.9-5.2 2.8-7.8 2.4-1.7-.2-19.4-11.7-14 .3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m209.9 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m210.6 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m211.3 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m212 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m212.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m213.4 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de3110",
    d: "m218.3 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef7b08",
    d: "m219.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m228.2 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m228.9 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m229.6 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m230.3 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m231 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m231.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m232.9 314.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m234.3 314.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m235.2 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m246.5 314.1 2 2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m254.9 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m261.2 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m262 314.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m273.7 314.3.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m275 314.3.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c7373",
    d: "m276 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m276.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m277.4 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m278.1 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m278.8 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m279.5 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m285.9 314.1.7.7-.7-.7m2.3.5.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m294.3 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m295 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m295.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m296.4 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m297.1 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m297.8 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M282.3 317.4c-1 9.4 16.6.1 21.1 2.7 2.5-5-3.2-7.4-7.6-4.7-2 1.3-3.1 3.9-5.8 4.4-2.6.4-5.4-1.4-7.7-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m302 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m302.7 314.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m303.4 314.1.8.7-.8-.7m-99.8.7.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m204.3 314.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m212.7 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m213.4 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m214.1 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ef9408",
    d: "m219 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e75a10",
    d: "m219.7 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m224 314.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m224.7 314.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m225.4 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m226 314.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m226.8 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m227.5 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m228.2 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m228.9 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m254.2 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m254.9 314.8 1.4 2-1.4-2m5 0-.8 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103910",
    d: "m260.5 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m261.2 314.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m278.8 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m279.5 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m280.2 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m281 314.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m281.6 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m282.3 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m283 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m283.8 314.8.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f7b508",
    d: "m288.7 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m294.3 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m295 314.8.7.6-.7-.6m8.4 0 .7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m304.1 314.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m202.8 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m203.6 315.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m213.4 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m214.1 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m221.8 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m224.7 315.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m225.4 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m248.6 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m254.2 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293129",
    d: "m259.8 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m282.3 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m283 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m283.8 315.4.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m284.4 315.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m285.1 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m285.9 315.4 1.4 1.4-1.4-1.4m7.7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m294.3 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m304.1 315.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m304.9 315.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m202.8 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m203.6 316.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m214.1 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m214.8 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m221.6 316.3.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m225.4 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m226 316.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m245.8 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m246.5 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "M247.2 316.1v.7h2l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m249.3 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m250 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m254.2 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#082108",
    d: "m254.9 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m257.7 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m258.4 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m259.1 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m259.8 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m260.5 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m261.2 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m262 316.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m281.6 316.1-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m282.3 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m283 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m285.9 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m292.9 316.1 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m293.6 316.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m304.9 316.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c6363",
    d: "m202.8 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m214.8 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m215.5 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m224.7 316.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m225.4 316.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#100808",
    d: "m226 316.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m226.8 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m243 316.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m243.7 316.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m244.3 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m245 316.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m245.8 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m246.5 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m245.8 320.1 5.6.7c-.4-4.1-4.8-5.1-5.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m250 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m250.7 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m251.4 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#422100",
    d: "m252 316.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m252.8 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M253.5 316.8v.6h2.1l-2.1-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m255.6 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#293100",
    d: "m256.3 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m257 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m257.7 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m257 317.4.7 3.4 5-.7c-.6-3.3-2.6-3.3-5.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m262 316.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#423131",
    d: "m262.6 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m263.4 316.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m264 316.8.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m264.8 316.8.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m265.5 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#101810",
    d: "m281.6 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m282.3 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m283 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m292.9 316.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m305 317.2.3.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m202.8 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m214.8 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m215.5 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m223.3 317.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m224 317.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m225.4 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m226.8 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m227.5 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m240.1 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m240.8 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m241.5 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m242.2 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m243 317.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m243.7 317.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "m244.3 317.4-2.8.7v4c2.5-1 3.9-2 2.8-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m245 317.4.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m251.4 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M252 317.4v4h4.3v-4h-4.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m256.3 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m262.6 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m263.4 317.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m264 317.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m264.8 317.4.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m265.5 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b4242",
    d: "m266.2 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m266.9 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m267.6 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m280.2 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m281 317.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m281.6 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m283 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m283.8 317.4.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m284.4 317.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m292.2 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m292.9 317.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203 318.6.3.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m203.6 318.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m207 318.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m207.8 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m215.5 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m216.2 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m221.8 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m222.5 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m223.3 318.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m227.5 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m240.4 318.6.2.4-.2-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m240.8 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M245 318.1v2.7h.8l-.7-2.7m6.3 0v2.7h.7l-.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m256.3 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m257 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m262.6 318.1-2 3.4h2V320l1.4.7V318h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M264 318.1v3.4l2.9.6.7-3.3-3.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m266.9 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b4242",
    d: "m267.6 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m280.2 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m281 318.1.6.7-.7-.7m3.6 0 .6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m285.1 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m285.9 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m291.5 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m292.2 318.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m300.4 318.3.5.3-.5-.3m3.8-.2.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m304.9 318.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m198 318.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m198.6 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m202.1 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m203.6 318.8.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m205.7 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m206.4 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m207 318.8.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m207.8 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m208.5 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m209.2 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m209.9 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m210.6 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m216.2 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m217.2 319.2.2.5-.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m220.4 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m221.1 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m221.8 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m222.5 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m226.8 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m227.5 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m240.8 318.8.7.6-.7-.6m15.5 0v1.3h1.4v-1.3h-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m267.8 319.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m280.2 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m281 318.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m285.9 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m286.6 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m287.3 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m290.8 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m291.5 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m292.2 318.8.7.6-.7-.6m5 0 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m297.8 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m299 319 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m300 318.8.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m300.6 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m301.3 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m302 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m304.1 318.8.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m305.3 319 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309.5 319 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m195.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m196.5 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m197.2 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m198 319.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M194.4 321.5c2.8 5.7 17.6 7.3 21.1 1.3-8.2 1-13.4-5.2-21.1-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m202.1 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m202.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m203.6 319.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m206.4 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M214.8 322.1c-6.6-5-10.9 1.3 0 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m209.9 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m210.6 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m211.3 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m212 319.4.7.7-.7-.7zm8.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m221.1 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m226.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m240.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m281 319.4.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m281.6 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m287.3 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m288 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m295.7 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m296.9 319.7.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m297.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M293.6 321.5v.6c3.6.5 7.7 1.8 8.4-2.7l-8.4 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m302 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m303.4 319.4.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m304.1 319.4-.7 1.4.8-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m304.9 319.4.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m305.6 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M292.9 322.8c3.5 6 18.3 4.4 21-1.3-7.6-3.9-12.8 2.3-21 1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m309.8 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2908",
    d: "m310.5 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m311.2 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m311.9 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m312.6 319.4.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m194.4 320.1-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a3131",
    d: "m195.1 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m195.8 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m204.3 320.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m212 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m213.2 320.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m214.1 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m226 320.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m226.8 320.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m240.8 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "M245.8 320.1v.7l2.8.7-2.8-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m256.3 320.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m257 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m259.8 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m262.6 320.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m266.9 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m267.6 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m281 320.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m281.6 320.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m293.6 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m294.3 320.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m295 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m295.7 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m302 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m302.7 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m311.9 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a2121",
    d: "m312.6 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m313.3 320.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m194.4 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m204.3 320.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m205 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m205.7 320.8-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m213.4 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m214.1 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m214.8 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m215.5 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m224.7 320.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m225.4 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m240.8 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m244.3 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m245 320.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m246 321.2.2.5-.2-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m247 321 .4.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m248.6 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m249.3 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m250 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m250.7 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m251.4 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m256.3 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M257.7 320.8v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m259.8 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m261.2 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#310000",
    d: "m262.6 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m266.9 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m267.6 320.8.7.7-.7-.7m14 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m283 320.8.7.7-.7-.7m9.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m292.9 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m294.3 320.8.7.7-.7-.7m7.7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#210800",
    d: "m302.7 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m303.4 320.8.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m313.3 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m314 320.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m193.7 321.5 3.5 4-3.5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m205.7 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m214.8 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m215.5 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m216.2 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m217 321.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m217.6 321.5.7.6-.7-.6m5.7 0 .6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m224 321.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m224.7 321.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m225.4 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#845a52",
    d: "m240.8 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m242.2 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m243 321.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5252",
    d: "m243.7 321.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m244.3 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m245 321.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M246.5 321.5v.6h2.8l-2.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m249.3 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m250 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m250.7 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392100",
    d: "m251.4 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m252 321.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m252.8 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m254 321.7.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m254.9 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#311000",
    d: "m255.6 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292100",
    d: "m256.3 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4a1000",
    d: "m257 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m257.7 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m258.4 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#de2110",
    d: "M259.1 321.5v.6h2.8l-2.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m262 321.5.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m262.6 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m263.4 321.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m264 321.5.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2131",
    d: "m264.8 321.5.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m265.5 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m266.9 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m283 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m283.8 321.5.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m284.4 321.5.8.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m290 321.5.8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m290.8 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733939",
    d: "m291.5 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.2 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m292.9 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m314 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m314.7 321.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m193 322.1 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m205.7 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m206.4 322.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m212 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m213 322.6.2.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m213.9 322.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m214.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#392121",
    d: "m215.5 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m217 322.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m217.6 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m218.3 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2131",
    d: "m219 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m219.7 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c4239",
    d: "m220.4 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad524a",
    d: "m221.1 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m221.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m222.5 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m223.3 322.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m224 322.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m240.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b2131",
    d: "m241.5 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m242.2 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m243 322.1.6.7-.7-.7m2.1 0 .8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m245.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "M246.5 322.1v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m249.3 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m250 322.1-.7 2.7.7-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "m251.2 322.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#214210",
    d: "m252 322.1-.6 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m252.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m254 322.4.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m254.9 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m255.6 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m256.3 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M257 322.1c2.6 3 7 6.8 10.6 3.4L257 322z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m258.4 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "M259.1 322.1v.7h2.8l-2.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m262 322.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m262.6 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m265.5 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#524242",
    d: "m266.2 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1010",
    d: "m266.9 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m284.4 322.1.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m285.1 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#734a42",
    d: "m285.9 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad524a",
    d: "m287 322.4.5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m288 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#733129",
    d: "m288.7 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m289.4 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m290 322.1.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m290.8 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m292.2 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m292.9 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m294 322.4.5.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m295.2 322.6.3.4-.3-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m295.7 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m301.3 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m314 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m314.7 322.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m315.4 322.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m192.3 322.8 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m193 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m206.4 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m208.2 323 .5.2-.5-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m209.2 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m209.9 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m210.6 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m211.8 323 .4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m215.5 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m216.2 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m240.8 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m244.3 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m245 322.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m245.8 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#319400",
    d: "M241.5 325.5c3.3 3 6.8.2 9.2-2.7l-9.2 2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m252 322.8-.6 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m256.3 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m257 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m262.6 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m263.4 322.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m264 322.8.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m266.9 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#420000",
    d: "m292.2 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m295.7 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m296.4 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m297.1 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m297.8 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m298.5 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "M299.2 322.8v.7h2.1l-2-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m301.3 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#520808",
    d: "m313.3 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m314.7 322.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m315.4 322.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m191.6 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m193.7 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m215.5 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m216.2 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m243.7 323.5.7.6-.8-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m244.3 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m250.7 323.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m257 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m257.7 323.5.7.6-.7-.6m6.4 0 .6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m264.8 323.5.6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m292.2 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m312.6 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m313.3 323.5.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m314.7 323.5-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m315.4 323.5-.7 1.3.7-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m192.3 324.1.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m214.8 324.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m215.5 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m242.2 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m243 324.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m243.7 324.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m250.7 324.1.7.7-.7-.7m7 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m258.4 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m259.1 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m264.8 324.1.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m265.5 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m266.2 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m292.2 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m292.9 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m311.9 324.1-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m312.6 324.1-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m316.1 324.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m191.6 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m193 324.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m193.7 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m195.1 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m195.8 324.8 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a3131",
    d: "m214.8 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m240.8 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m241.5 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m242.2 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m248.6 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m249.3 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m259.1 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m259.8 324.8.7.7-.7-.7m6.4 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m266.9 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m267.6 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m292.9 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m293.6 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m312.6 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#a59494",
    d: "m314 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m315.4 324.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m316.1 324.8-.7 2 .7-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m192.3 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m194.4 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m195.1 325.5 5 4-5-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m195.8 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b1008",
    d: "m197.2 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m203.6 325.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m204.3 325.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c3939",
    d: "m205 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#843129",
    d: "m209.9 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6b5252",
    d: "m213.4 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m214.1 325.5.7.7-.7-.7m26 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#184a00",
    d: "m240.8 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m247.2 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294221",
    d: "m247.9 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m248.6 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m259.8 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#213918",
    d: "m260.5 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#103900",
    d: "m267.6 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m268.3 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m293.6 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m294.3 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m295 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#842118",
    d: "m297.8 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c4a4a",
    d: "m298.5 325.5.7.7-.7-.7zm4.2 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631808",
    d: "m303.4 325.5.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m304.1 325.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m304.9 325.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.9 325.5-2.1 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m312.6 325.5-3.5 4.7 3.5-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m313.8 325.7.4.2-.4-.2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m192.3 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m193 326.1 1.4 2-1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m194.4 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m196.5 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m197.2 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m198 326.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bd2110",
    d: "m201.4 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m202.1 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#736b6b",
    d: "m202.8 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m203.6 326.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m240.1 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#314231",
    d: "m240.8 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#297b00",
    d: "m241.5 326.1 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m246.5 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m247.2 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m247.9 326.1.7.7-.7-.7m12.6 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m261.2 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#294200",
    d: "m262 326.1.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m266.9 326.1-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#52525a",
    d: "m267.6 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m268.3 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m304.1 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m304.9 326.1.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#631818",
    d: "m305.6 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m306.3 326.1.7.7-.7-.7m3.5 0-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m310.5 326.1.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m313.3 326.1.7.7-.7-.7m1.4 0-2.1 2.7 2-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m193.7 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m195.1 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#424242",
    d: "m198 326.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ad1810",
    d: "m198.6 326.8.7.7-.7-.7m2.1 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m201.4 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m202.1 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m241.5 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m245 326.8.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m245.8 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m246.5 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m262 326.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#425242",
    d: "m262.6 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m263.4 326.8.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#63636b",
    d: "m266.9 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m306.3 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m307 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m309.8 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m312.6 326.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m314.7 326.8-1.4 2 1.4-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m195.8 327.5 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m196.5 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m198.6 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b51010",
    d: "m199.3 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#941808",
    d: "m200 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m200.7 327.5.7.7-.7-.7m41.5 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#185200",
    d: "m243 327.5.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#296300",
    d: "m243.7 327.5.7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#395231",
    d: "m244.3 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m245 327.5.8.7-.7-.7m18.3 0 .7.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a5231",
    d: "m264 327.5.8.7-.8-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#397b00",
    d: "m264.8 327.5.6.7-.6-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#295200",
    d: "m265.5 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m266.2 327.5.7.7-.7-.7m40.8 0 .7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#5a1008",
    d: "m307.7 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ce2110",
    d: "m308.4 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#391810",
    d: "m309 327.5.8.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m311.9 327.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m197.2 328.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#313931",
    d: "m199.3 328.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m200 328.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m243 328.2.6.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9c9494",
    d: "m243.7 328.2.7.6-.8-.6m21.2 0 .6.6-.6-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ada5a5",
    d: "m265.5 328.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m307.7 328.2 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#292921",
    d: "m308.4 328.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309 328.2.8.6-.7-.6m2 0 .8.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m195.1 328.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#cecece",
    d: "m195.8 328.8 2.8 2.7-2.8-2.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m198 328.8.6.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m310.5 328.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m311.9 328.8-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b7373",
    d: "m312.6 328.8-.7 1.4.7-1.4m-116.8.7.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m198.6 329.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#bdbdbd",
    d: "m309.8 329.5.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8c8c8c",
    d: "m196.5 330.2 1.4 1.3-1.4-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m198.6 330.2.7.6-.7-.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m310.5 330.2.7.6-.7-.6m-114 .6 1.4 1.4-1.4-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#efefef",
    d: "m309.8 330.8.7.7-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#dedede",
    d: "m311.2 330.8-.7 1.4.7-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ecca5e",
    d: "m230.9 207.5 1.1-.3a.8.8 0 0 0 .4.5h.6c.3 0 .6 0 .7-.2a.3.3 0 0 0 .1-.3.3.3 0 0 0-.1-.2 1 1 0 0 0-.4 0 6.5 6.5 0 0 1-1.8-.4 1 1 0 0 1-.7-.9c0-.4 0-.7.3-1 .3-.2.8-.4 1.4-.5.6 0 1 0 1.4.2.3.1.5.3.7.7l-1.1.3a.6.6 0 0 0-.3-.3 1 1 0 0 0-.6 0l-.6.1-.1.2.1.2c.1.1.5.2 1.1.2.7 0 1.1.2 1.4.4a1 1 0 0 1 .4.7c0 .4 0 .7-.3 1-.3.4-.8.6-1.5.6-.6.1-1 0-1.4-.1a1.6 1.6 0 0 1-.8-.9zm-5.1-.4a2.1 2.1 0 0 1 .1-1l.7-1c.4-.1.7-.3 1.2-.3a2 2 0 0 1 1.7.4c.4.4.7.8.8 1.5a2 2 0 0 1-.5 1.6c-.3.5-.8.7-1.5.8l-1.2-.1a1.9 1.9 0 0 1-.9-.7l-.4-1.2zm1.2 0c0 .4.2.7.4.9.2.2.5.2.8.2a1 1 0 0 0 .7-.4c.2-.3.2-.6.2-1s-.2-.7-.4-.9a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.4c-.2.2-.3.5-.2 1zm-3.6-2.3-.1-1 1.1-.1.1 1-1.1.1zm.6 4.7-.5-4.1 1.1-.2.5 4.2-1.1.1zm-6.8-5 2.2-.3h1.2c.3 0 .7.2 1 .4l.7.9c.1.3.3.8.3 1.3v1.3a2.5 2.5 0 0 1-.5 1 2 2 0 0 1-.8.6l-1 .3-2.4.2-.7-5.7zm1.3.8.5 3.8h1l.7-.2.4-.3.3-.6v-1a3.3 3.3 0 0 0-.3-1 1.3 1.3 0 0 0-.4-.6 1.2 1.2 0 0 0-.6-.2h-1l-.5.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ecca5e",
    fillRule: "evenodd",
    d: "m233.4 223.4 17 21.4-.7 1-17.1-21.4zm44-1.6L258.3 247l-1.5-.5 19.1-25.2zm-48.4 5.8 20.2 18.8-.7 1-20.2-18.7zm-4.7 4.4 22.2 16.6-.5 1-22.3-16.5zm56-3.3-20 19-1.2-.7 20-19zm4.4 3.5-22.4 16.4-1-.8 22.4-16.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    fillOpacity: ".6",
    d: "m271.3 229.6 4.6-5.9-.6-.4-4 6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    fillOpacity: ".5",
    d: "m260.8 243.5 4.6-5.9-.6-.4-4 6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    fillOpacity: ".7",
    d: "m266 236.8 4.6-5.9-.5-.4-4.1 6.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    fillOpacity: ".5",
    d: "m276.8 237.6 6.5-4-.4-.6-6 4.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7b5a00",
    fillOpacity: ".4",
    d: "m268.3 240 5.8-5-.5-.5-5.3 5.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M213.6 288.6h-.7c-.1-3.8-1.6-6.3-5.6-7.3.1 2 1.6 10 5 7.3h.6l-1.4 6c2.1-2.2 10.8-10 7-13.4-3.2-3-4.8 6-4.9 7.4zm-5.3-47.9h-.8c0-3.8-1.6-6.3-5.6-7.3.1 2 1.6 10 5 7.3h.6l-1.4 6c2.1-2.2 10.8-10 7-13.4-3.2-3-4.8 6-4.9 7.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ecca5e",
    d: "M299.5 210.8h-1v-.7l-.7.5a1.7 1.7 0 0 1-.7 0c-.5 0-1-.2-1.2-.7-.3-.4-.5-1-.4-1.6.1-.7.3-1.2.7-1.6.4-.3.9-.4 1.4-.4.5.1.9.3 1.2.8l.3-2.1 1.1.1-.7 5.7zm-2.8-2.5v1a.9.9 0 0 0 .8.5.9.9 0 0 0 .7-.2c.2-.2.4-.5.4-1l-.1-1a.9.9 0 0 0-.7-.4.9.9 0 0 0-.7.2c-.2.2-.4.5-.4 1zm-4.6-1.2-1-.3c.1-.4.3-.7.7-.8l1.3-.2 1.1.3.5.5v1l-.2 1.3v.8l.1.6-1.1-.1a4.7 4.7 0 0 1 0-.4 2 2 0 0 1-1.5.3c-.5 0-.8-.2-1-.5a1.1 1.1 0 0 1-.3-.9 1.1 1.1 0 0 1 .8-1l1-.1 1-.1.1-.2-.1-.4-.6-.2a.9.9 0 0 0-.5 0 .8.8 0 0 0-.3.4zm1.4 1a8 8 0 0 1-.7.2h-.7l-.2.4a.5.5 0 0 0 0 .5.6.6 0 0 0 .5.2c.2 0 .4 0 .7-.2a.7.7 0 0 0 .3-.3v-.5l.1-.2zm-3-2.4v.8h-.8l-.2 1.6v.7l.2.1h.5v.8l-1 .1a1.5 1.5 0 0 1-.5-.2.8.8 0 0 1-.4-.3 1 1 0 0 1 0-.4v-.8l.2-1.8h-.5v-1l.6.1.1-.8 1.3-.5-.2 1.5h.8zm-4.6 3.6-1.1-.1.5-4.1h1v.7l.5-.5.5-.1c.3 0 .5.1.8.3l-.5.9a1 1 0 0 0-.5-.2.7.7 0 0 0-.5 0l-.3.5-.2 1.4-.2 1.2zm-3-1.6 1 .3a1.8 1.8 0 0 1-.8.8 2 2 0 0 1-1.2.2c-.8-.1-1.3-.4-1.6-1-.2-.3-.3-.8-.3-1.4.1-.7.4-1.2.8-1.5.4-.4 1-.5 1.5-.4a2 2 0 0 1 1.5.7c.3.5.4 1.1.3 2l-2.9-.4c0 .4 0 .6.2.8.1.2.4.3.6.4l.5-.1a.9.9 0 0 0 .3-.4zm.1-1.1c0-.4 0-.6-.2-.8a.8.8 0 0 0-.5-.3.8.8 0 0 0-.7.2 1 1 0 0 0-.3.7l1.7.2zm-8 1.5.7-5.7 1.1.1-.2 2c.4-.2.8-.4 1.3-.3.5 0 1 .3 1.2.7.3.4.4.9.4 1.6-.1.7-.4 1.2-.8 1.5a1.7 1.7 0 0 1-2 .2 1.8 1.8 0 0 1-.6-.6v.6H275zm1.4-2v1c.2.3.5.5.8.5a.8.8 0 0 0 .7-.2c.2-.2.3-.6.4-1 0-.5 0-.8-.2-1a.9.9 0 0 0-.6-.4.9.9 0 0 0-.7.2c-.2.2-.4.5-.4.9zm-3.1-3v-1l1.2.2v1l-1.2-.1zm-.6 4.8.5-4.2 1.1.2-.5 4h-1.1zm-5-.6.6-5.7 1.2.2-.6 4.7 3 .3v1l-4.3-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#428c00",
    d: "M201 254h-.6c-.1-3.8-1.6-6.2-5.6-7.3 0 2 1.5 10 4.9 7.4h.7l-1.4 6c2-2.2 10.7-10 7-13.5-3.2-3-4.9 6-5 7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fac349",
    fillRule: "evenodd",
    d: "M226 232.8c0 .5-.6 1-1.4 1s-1.3-.5-1.3-1 .6-1 1.3-1 1.3.5 1.3 1zm4.3-4.7c0 .6-.5 1-1.3 1s-1.3-.4-1.3-1c0-.5.6-.9 1.3-.9s1.3.4 1.3 1zm4.1-4.3c0 .5-.6 1-1.3 1s-1.3-.5-1.3-1 .6-1 1.3-1 1.3.5 1.3 1zm43.3-1.7c0 .5-.5 1-1.2 1s-1.4-.5-1.4-1 .6-1 1.3-1 1.4.5 1.4 1zm3.1 6c0 .6-.5 1-1.3 1s-1.3-.4-1.3-1c0-.5.6-.9 1.3-.9s1.3.4 1.3 1zm4.6 4c0 .4-.6.8-1.3.8s-1.3-.4-1.3-.9.6-1 1.3-1 1.3.5 1.3 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ecca5e",
    d: "m262.6 199.3-1-.2c0-.4.3-.7.6-.9.3-.2.7-.3 1.3-.3l1.1.2.5.5.2 1v2.1l.2.5h-1.1a4 4 0 0 1-.1-.3 1.4 1.4 0 0 0 0-.1 1.9 1.9 0 0 1-1.5.5c-.4 0-.8-.1-1-.4a1.1 1.1 0 0 1-.4-.9 1.1 1.1 0 0 1 .7-1 4 4 0 0 1 1-.3l1-.2v-.1l-.1-.5-.6-.1-.5.1a.8.8 0 0 0-.3.4zm1.5.9-.7.2-.6.2-.2.3c0 .2 0 .3.2.4a.7.7 0 0 0 .4.2c.2 0 .4 0 .6-.2.2 0 .2-.2.3-.3v-.8zm-4.7-2.8v-1h1.2v1h-1.2zm0 4.8V198h1.2v4.2h-1.2zm-2.2 0H256V198h1.1v.6l.5-.6a1 1 0 0 1 .5-.1c.3 0 .6 0 .8.2l-.4 1a1 1 0 0 0-.5-.2l-.4.1-.3.5-.1 1.4v1.2zm-1.9-4.2v.8h-.8v2.3l.1.1.2.1.5-.1v.9l-.9.1h-.5a.9.9 0 0 1-.4-.3 1 1 0 0 1-.1-.5 5.3 5.3 0 0 1 0-.8v-1.8h-.6v-.9h.6v-.8l1.1-.6v1.5h.8zm-5.8 1.2-1-.2c0-.4.2-.7.5-.9.3-.2.8-.3 1.3-.3s1 0 1.2.2l.5.5.1 1v2l.3.6h-1.2a4.2 4.2 0 0 1 0-.3l-.1-.2a1.9 1.9 0 0 1-1.4.6c-.4 0-.8-.2-1-.4a1.1 1.1 0 0 1-.4-.9 1.1 1.1 0 0 1 .6-1 4 4 0 0 1 1-.3l1.1-.2v-.1l-.1-.5-.7-.1h-.4a.8.8 0 0 0-.3.5zm1.5.9a9 9 0 0 1-.7.2l-.6.1c-.2.1-.3.3-.3.4a.5.5 0 0 0 .2.4l.5.2c.2 0 .4 0 .6-.2l.3-.3v-.8zm-8 2v-5.8h3.4l.9.7c.2.3.3.6.3 1s0 .7-.2 1l-.5.5a1 1 0 0 1-.7.3h-2v2.2h-1.3zm1.2-4.8v1.6h1.7l.3-.4a.7.7 0 0 0 .2-.4.7.7 0 0 0-.2-.5.8.8 0 0 0-.5-.3 6.2 6.2 0 0 0-.9 0h-.6zm2.4 110.6h-.8c0-.3.2-.6.4-.7.2-.2.5-.3.9-.4h.9c.2 0 .3.2.4.3.1.1.2.3.2.7l.2 1 .1.5.2.4-.8.2a3.5 3.5 0 0 1-.1-.3 1.5 1.5 0 0 1-1 .5c-.4 0-.6 0-.9-.2a.9.9 0 0 1-.3-.6.8.8 0 0 1 0-.5.8.8 0 0 1 .3-.3l.7-.3.8-.3v-.1c0-.2-.1-.3-.2-.3h-.5a.6.6 0 0 0-.3 0 .6.6 0 0 0-.2.4zm1.3.5-.5.2c-.3 0-.4.2-.5.2v.6h.5a.8.8 0 0 0 .4-.1.5.5 0 0 0 .1-.3v-.6zm-2.6-.3-.8.2a.6.6 0 0 0-.3-.3.6.6 0 0 0-.4 0 .7.7 0 0 0-.5.2v.8c0 .3.1.6.3.7l.6.2a.6.6 0 0 0 .3-.2l.2-.5h.8a1.4 1.4 0 0 1-.3.9c-.2.2-.6.4-1 .4-.5 0-.9 0-1.2-.2a1.6 1.6 0 0 1-.6-1.2c0-.5 0-.9.2-1.2a2 2 0 0 1 1.1-.6l1 .1c.3.1.5.3.6.7zm-4.8-.7v-.8h.8l.1.7-.9.1zm.6 3.5-.5-3 .9-.2.5 3-.9.2zm-1.7.3-.7-4.3.8-.1.7 4.2-.8.2zm-3.9.5-.7-4.3h.9l.2 1.5c.2-.4.5-.6.9-.6s.7 0 1 .3c.3.2.5.6.6 1 .1.6 0 1-.2 1.3a1.3 1.3 0 0 1-1.4.6 1.4 1.4 0 0 1-.6-.4l.1.5-.8.1zm.6-1.7c0 .3.1.5.3.7a.7.7 0 0 0 .6.2.6.6 0 0 0 .5-.3c0-.2.1-.4 0-.8 0-.3-.1-.6-.3-.7a.7.7 0 0 0-.5-.2.7.7 0 0 0-.5.3 1 1 0 0 0-.1.8zm-2.3 2v-.5a1.2 1.2 0 0 1-.4.5l-.6.2h-.6a.8.8 0 0 1-.5-.4l-.2-.7-.3-2h.9l.2 1.4.2.8a.5.5 0 0 0 .2.2.6.6 0 0 0 .3 0 .7.7 0 0 0 .4-.2.6.6 0 0 0 .2-.3v-.8l-.3-1.3.9-.1.5 3-.8.1zm-6.4-2.3h.8v.4a1.2 1.2 0 0 1 1-.7c.4 0 .7 0 1 .3.3.2.5.6.6 1.1 0 .5 0 1-.2 1.3-.2.3-.5.5-1 .5a1.2 1.2 0 0 1-.4 0 1.8 1.8 0 0 1-.5-.3l.2 1.6h-.8l-.7-4.2zm1 1.4c.1.3.2.6.4.7a.7.7 0 0 0 .6.2.6.6 0 0 0 .4-.3c.1-.2.2-.4.1-.8 0-.3-.2-.5-.3-.7a.7.7 0 0 0-.5-.1.7.7 0 0 0-.5.3c-.1.2-.2.4-.1.7zm-2.3 1h1l-.5.7c-.2.2-.5.3-.9.4-.5 0-1 0-1.3-.4a1.7 1.7 0 0 1-.5-1c0-.5 0-.9.2-1.2a1.4 1.4 0 0 1 1-.6c.5 0 1 0 1.3.3.3.2.5.7.6 1.3l-2.2.3c0 .3.2.4.3.5.2.2.4.2.6.2a.5.5 0 0 0 .3-.2.7.7 0 0 0 .1-.3zm0-.9c0-.2-.2-.4-.3-.5a.6.6 0 0 0-.5-.1.6.6 0 0 0-.4.3.7.7 0 0 0-.1.5l1.3-.2zm-6.2 2.8-.7-4.3 2-.3h1l.6.3.3.7c0 .3 0 .6-.2.8-.2.2-.4.4-.8.5l.5.3.6.6.7.8-1 .1-.9-.8-.5-.6a.7.7 0 0 0-.3 0 1.6 1.6 0 0 0-.5 0h-.2l.3 1.7-.9.2zm.5-2.6.7-.1.8-.2a.5.5 0 0 0 .2-.2.6.6 0 0 0 0-.3.5.5 0 0 0-.1-.4.6.6 0 0 0-.4 0h-1.4l.2 1.2zm67 .4-.7-.2c.1-.3.3-.5.5-.6.3-.1.6-.2 1-.1l.9.2.3.4v.8l-.1 1a3.5 3.5 0 0 0 0 .5v.5l-.8-.1v-.3a1.6 1.6 0 0 1-.6.1 1.4 1.4 0 0 1-.6 0 1.1 1.1 0 0 1-.7-.3.8.8 0 0 1-.2-.7.8.8 0 0 1 .6-.7 3 3 0 0 1 .7 0l.9-.2v-.4l-.5-.2a.6.6 0 0 0-.4 0 .6.6 0 0 0-.2.3zm1.1.8-.5.1h-.5l-.2.3a.4.4 0 0 0 0 .4.5.5 0 0 0 .4.1.8.8 0 0 0 .4 0 .5.5 0 0 0 .3-.3 1.6 1.6 0 0 0 .1-.4v-.2zm-2.9 1.2-.8-.1.2-1.6v-.7a.4.4 0 0 0-.1-.2.5.5 0 0 0-.3-.2.7.7 0 0 0-.4.1.6.6 0 0 0-.3.3l-.2.7-.2 1.4-.8-.1.4-3.1h.8v.5c.3-.3.7-.4 1.1-.3l.5.1a.8.8 0 0 1 .3.3.9.9 0 0 1 .1.4v.5l-.3 2zm-5.5-3-.7-.2c.1-.3.3-.5.5-.6h1c.4 0 .7 0 .9.2l.3.3v.8l-.1 1a3.4 3.4 0 0 0 0 .6v.4l-.8-.1a3.2 3.2 0 0 1 0-.3 1 1 0 0 0-.1 0l-.5.2a1.4 1.4 0 0 1-.6 0 1.1 1.1 0 0 1-.7-.4.8.8 0 0 1-.2-.7.9.9 0 0 1 .6-.7h.7l.9-.2v-.4l-.5-.2a.7.7 0 0 0-.4 0 .6.6 0 0 0-.3.3zm1.1.9h-.6l-.4.1c-.2 0-.2.2-.2.3a.4.4 0 0 0 0 .3.5.5 0 0 0 .4.2.8.8 0 0 0 .4-.1.5.5 0 0 0 .3-.3v-.5zm-2.4-1h-.8a.6.6 0 0 0-.2-.4.6.6 0 0 0-.3-.2.7.7 0 0 0-.6.2l-.3.6.1.8c.1.2.3.3.5.3a.6.6 0 0 0 .4 0l.3-.5.8.3c-.1.3-.3.6-.6.8-.3.1-.6.2-1 .1a1.5 1.5 0 0 1-1.1-.6 1.6 1.6 0 0 1-.3-1.2c.1-.5.3-1 .6-1.2.4-.2.8-.3 1.2-.2.4 0 .7.1 1 .3.2.2.3.5.3.8zm-4.3-2v-.8l1 .2-.2.7h-.8zm-.6 3.5.5-3h.9l-.5 3.1h-.9zm-.8-.1-.9-.1.2-1.6v-.6a.4.4 0 0 0 0-.3.5.5 0 0 0-.3-.1h-.5c-.2 0-.2.2-.3.3l-.1.7-.2 1.4h-.9l.5-3.2.8.1v.5a1.4 1.4 0 0 1 1.6-.2.8.8 0 0 1 .3.3.9.9 0 0 1 .1.3 2.4 2.4 0 0 1 0 .6l-.3 1.9zm-4.2-4.1.1-.8.9.1-.1.8-.9-.1zm-.5 3.5.4-3.1.9.1-.5 3.1-.8-.1zm-5.2-3.9.8.1v.5c.3-.3.6-.4 1-.4l.5.2.4.4.5-.3h.5c.3 0 .5 0 .6.2a.8.8 0 0 1 .3.4v.7l-.3 2-.8-.2.2-1.7v-.6c0-.2-.2-.2-.3-.3a.6.6 0 0 0-.7.4l-.1.6-.2 1.5-.9-.1.3-1.7v-.6a.4.4 0 0 0-.1-.2.4.4 0 0 0-.3-.1.7.7 0 0 0-.3 0 .6.6 0 0 0-.3.3 2.1 2.1 0 0 0-.2.6l-.2 1.5h-.9l.5-3.2zm-4.2 1a1.6 1.6 0 0 1 1-1.3h1c.4 0 .8.2 1 .6.3.3.4.7.4 1.2a1.6 1.6 0 0 1-.7 1c-.4.4-.8.5-1.3.4a2 2 0 0 1-.8-.3 1.4 1.4 0 0 1-.5-.7v-.9zm.9.2.1.7c.1.2.3.3.5.3a.8.8 0 0 0 .6-.1l.4-.7c0-.3 0-.6-.2-.8a.7.7 0 0 0-.5-.3.8.8 0 0 0-.6.2c-.2.1-.3.4-.3.7zm-4.8-3.5 1.6.3c.4 0 .7 0 .9.2.2 0 .4.2.6.4.2.3.3.5.3.8a3.2 3.2 0 0 1-.3 2 1.9 1.9 0 0 1-.5.6l-.7.3h-.8l-1.7-.3.6-4.3zm.8.9-.4 2.8.6.1h.6a.8.8 0 0 0 .4 0c0-.2.2-.3.3-.5l.2-.7v-.8a1 1 0 0 0-.2-.5.9.9 0 0 0-.4-.2 4.4 4.4 0 0 0-.7-.2h-.4z"
  })));
});
DOM.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DOM.displayName = 'DOM';
export default DOM;