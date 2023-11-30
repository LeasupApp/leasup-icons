function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
var Info = forwardRef(function (_ref, ref) {
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
    d: "M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1ZM8.1 11.2C8.43136 11.2 8.7 11.4686 8.7 11.8C8.7 12.1314 8.43136 12.4 8.1 12.4C7.76864 12.4 7.5 12.1314 7.5 11.8C7.5 11.4686 7.76864 11.2 8.1 11.2ZM8.1 3.6C9.44588 3.6 10.6 4.75284 10.6 6.09952C10.6008 6.94764 10.2926 7.48768 9.52864 8.31088L9.12264 8.74552C8.71368 9.20112 8.55176 9.49008 8.53636 9.83172L8.53516 9.89644L8.53292 9.94756L8.52572 9.99728C8.48072 10.2254 8.28036 10.3983 8.03872 10.4C7.7626 10.402 7.53712 10.1797 7.53516 9.90356C7.53004 9.18812 7.80588 8.69868 8.45844 7.98956L8.86936 7.55048C9.41248 6.95348 9.60048 6.6012 9.6 6.1C9.6 5.30536 8.89384 4.6 8.1 4.6C7.33228 4.6 6.64568 5.26144 6.6022 6.02348L6.5974 6.15112C6.5718 6.40324 6.35888 6.6 6.1 6.6C5.82384 6.6 5.6 6.37616 5.6 6.1C5.6 4.75384 6.75456 3.6 8.1 3.6Z",
    fill: "#212121"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
export default Info;