"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18n = _interopRequireDefault(require("../i18n/i18n"));

var abbreviate = 'abbr';

if (!String.prototype[abbreviate]) {
  String.prototype[abbreviate] = function () {
    return _i18n["default"].getAbbr()[this] || this;
  };
}

var _default = {};
exports["default"] = _default;