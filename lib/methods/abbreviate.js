"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = _interopRequireDefault(require("../constants/types/types"));

var abbreviate = 'abbr';

if (!String.prototype[abbreviate]) {
  String.prototype[abbreviate] = function () {
    switch (this) {
      case _types["default"].INPUT.CONSTANT:
        return 'Const';

      case _types["default"].INPUT.ENUMERATE:
        return 'Enum';

      case _types["default"].INPUT.VARIABLE:
        return 'Var';

      case _types["default"].INPUT.INSTANCE:
        return 'Inst';

      default:
        return this;
    }
  };
}

var _default = {};
exports["default"] = _default;