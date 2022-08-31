function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var MessageBadge = forwardRef(function (_ref, ref) {
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
    d: "M12 23.25C15.866 23.25 19.25 21.1552 19.25 16.5C19.25 11.8448 15.866 9.75 12 9.75C8.13401 9.75 4.75 11.8448 4.75 16.5C4.75 18.2675 5.23783 19.6659 6.05464 20.7206C6.29358 21.0292 6.38851 21.4392 6.2231 21.7926C6.12235 22.0079 6.01633 22.2134 5.90792 22.4082C5.45369 23.2242 6.07951 24.4131 6.99526 24.2297C8.0113 24.0263 9.14752 23.722 10.0954 23.2738C10.2933 23.1803 10.5134 23.1439 10.7305 23.1714C11.145 23.224 11.5695 23.25 12 23.25Z",
    stroke: "#21304F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "9",
    r: "8.5",
    fill: "#2721CD",
    stroke: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.9219 4.89062C20.3047 4.89323 20.6771 4.96094 21.0391 5.09375C21.4036 5.22396 21.7318 5.4375 22.0234 5.73437C22.3151 6.02865 22.5469 6.42318 22.7188 6.91797C22.8906 7.41276 22.9766 8.02474 22.9766 8.75391C22.9792 9.44141 22.9063 10.056 22.7578 10.5977C22.612 11.1367 22.4023 11.5924 22.1289 11.9648C21.8555 12.3372 21.526 12.6211 21.1406 12.8164C20.7552 13.0117 20.3216 13.1094 19.8398 13.1094C19.3346 13.1094 18.8867 13.0104 18.4961 12.8125C18.1081 12.6146 17.7943 12.3437 17.5547 12C17.3151 11.6562 17.168 11.263 17.1133 10.8203H18.5391C18.612 11.138 18.7604 11.3906 18.9844 11.5781C19.2109 11.763 19.4961 11.8555 19.8398 11.8555C20.3945 11.8555 20.8216 11.6146 21.1211 11.1328C21.4206 10.651 21.5703 9.98177 21.5703 9.125H21.5156C21.388 9.35417 21.2227 9.55208 21.0195 9.71875C20.8164 9.88281 20.5859 10.0091 20.3281 10.0977C20.0729 10.1862 19.8021 10.2305 19.5156 10.2305C19.0469 10.2305 18.625 10.1185 18.25 9.89453C17.8776 9.67057 17.582 9.36328 17.3633 8.97266C17.1471 8.58203 17.0378 8.13542 17.0352 7.63281C17.0352 7.11198 17.1549 6.64453 17.3945 6.23047C17.6367 5.8138 17.974 5.48568 18.4063 5.24609C18.8385 5.00391 19.3438 4.88542 19.9219 4.89062ZM19.9258 6.0625C19.6445 6.0625 19.3906 6.13151 19.1641 6.26953C18.9401 6.40495 18.763 6.58984 18.6328 6.82422C18.5052 7.05599 18.4414 7.3151 18.4414 7.60156C18.444 7.88542 18.5078 8.14323 18.6328 8.375C18.7604 8.60677 18.9336 8.79036 19.1523 8.92578C19.3737 9.0612 19.6263 9.12891 19.9102 9.12891C20.1211 9.12891 20.3177 9.08854 20.5 9.00781C20.6823 8.92708 20.8411 8.8151 20.9766 8.67188C21.1146 8.52604 21.2214 8.36068 21.2969 8.17578C21.375 7.99089 21.4128 7.79557 21.4102 7.58984C21.4102 7.31641 21.3451 7.0638 21.2148 6.83203C21.0872 6.60026 20.9115 6.41406 20.6875 6.27344C20.4661 6.13281 20.2122 6.0625 19.9258 6.0625Z",
    fill: "white"
  }));
});
MessageBadge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MessageBadge.displayName = 'MessageBadge';
export default MessageBadge;