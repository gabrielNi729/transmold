"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InstanceExpression = require("../models/InstanceExpression");

var _MetadataField = require("../models/MetadataField");

var _types = _interopRequireDefault(require("../constants/types/types"));

var _operators = require("../operators/operators");

var respondingOperators = 'resops';

_MetadataField.MetadataField.prototype[respondingOperators] = function () {
  return (0, _operators.opsToRespond)(this.getDataType());
};

_InstanceExpression.InstanceExpression.prototype[respondingOperators] = function () {
  return (0, _operators.opsToRespond)(this.getResultDataType());
};

if (!String.prototype[respondingOperators]) {
  String.prototype[respondingOperators] = function () {
    return (0, _operators.opsToRespond)(_types["default"].identifyDataType(this));
  };
}

if (!Number.prototype[respondingOperators]) {
  Number.prototype[respondingOperators] = function () {
    return (0, _operators.opsToRespond)(_types["default"].DATA.NUMBER);
  };
}

if (!Boolean.prototype[respondingOperators]) {
  Boolean.prototype[respondingOperators] = function () {
    return (0, _operators.opsToRespond)(type.DATA.BOOLEAN);
  };
}

var _default = {};
exports["default"] = _default;