"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typesData = _interopRequireDefault(require("./types-data"));

var _typesDistribute = _interopRequireDefault(require("./types-distribute"));

var _typesInput = _interopRequireDefault(require("./types-input"));

var _typesRegular = _interopRequireDefault(require("./types-regular"));

var _InstanceExpression = require("../../models/InstanceExpression");

var _MetadataField = require("../../models/MetadataField");

var _MetadataEnum = require("../../models/MetadataEnum");

var setTypesData = new Set();

for (var t in _typesData["default"]) {
  setTypesData.add(_typesData["default"][t]);
}

function isLegalDataType(type) {
  return setTypesData.has(type);
}

function isUncertainDataType(type) {
  return type === _typesData["default"].UNCERTAIN;
}

var setTypesInput = new Set();

for (var _t in _typesInput["default"]) {
  setTypesInput.add(_typesInput["default"][_t]);
}

function isLegalInputType(type) {
  return setTypesInput.has(type);
}

function identifyInputType(content) {
  if (content instanceof _InstanceExpression.InstanceExpression) {
    return _typesInput["default"].INSTANCE;
  } else if (content instanceof _MetadataField.MetadataField) {
    return _typesInput["default"].VARIABLE;
  } else if (content instanceof _MetadataEnum.MetadataEnum) {
    return _typesInput["default"].ENUMERATE;
  } else {
    return _typesInput["default"].CONSTANT;
  }
}

var setTypesDistribute = new Set();

for (var _t2 in _typesDistribute["default"]) {
  setTypesDistribute.add(_typesDistribute["default"][_t2]);
}

function isLegalDistributeType(type) {
  return setTypesDistribute.has(type);
}

var mapTypesRegular = new Map();

for (var _t3 in _typesRegular["default"]) {
  if (_typesData["default"][_t3]) {
    mapTypesRegular.set(_typesData["default"][_t3], new RegExp(_typesRegular["default"][_t3]));
  } else {
    mapTypesRegular.set(_t3.toLowerCase(), new RegExp(_typesRegular["default"][_t3]));
  }
}

function getRegExp(type) {
  if (mapTypesRegular.has(type)) {
    return mapTypesRegular.get(type);
  } else {
    console.error("no such regular type: ".concat(type));
    return null;
  }
}

function regTest(type, content) {
  if (type === _typesData["default"].UNCERTAIN) {
    return true;
  }

  var reg = getRegExp(type);

  if (reg) {
    return reg.test(content);
  } else {
    return false;
  }
}

function regTestMulti(types, content) {
  return types.every(function (t) {
    return regTest(t, content);
  });
}

function identifyDataType(content) {
  if (regTest(_typesData["default"].NUMBER, content)) {
    return _typesData["default"].NUMBER;
  } else if (regTest(_typesData["default"].BOOLEAN, content)) {
    return _typesData["default"].BOOLEAN;
  } else if (regTest(_typesData["default"].DATE, content)) {
    return _typesData["default"].DATE;
  } else if (regTest(_typesData["default"].MONTH, content)) {
    return _typesData["default"].MONTH;
  } else if (regTest(_typesData["default"].YEAR, content)) {
    return _typesData["default"].YEAR;
  } else if (regTest(_typesData["default"].TIME, content)) {
    return _typesData["default"].TIME;
  } else if (regTest(_typesData["default"].GEOGRAPHY, content)) {
    return _typesData["default"].GEOGRAPHY;
  } else if (regTest(_typesData["default"].STRING, content)) {
    return _typesData["default"].STRING;
  }

  return _typesData["default"].UNCERTAIN;
}

var _default = {
  DATA: _typesData["default"],
  DISTRIBUTE: _typesDistribute["default"],
  INPUT: _typesInput["default"],
  REGS: _typesRegular["default"],
  isLegalDataType: isLegalDataType,
  isLegalInputType: isLegalInputType,
  isLegalDistributeType: isLegalDistributeType,
  isUncertainDataType: isUncertainDataType,
  getRegExp: getRegExp,
  regTest: regTest,
  regTestMulti: regTestMulti,
  identifyDataType: identifyDataType,
  identifyInputType: identifyInputType
};
exports["default"] = _default;