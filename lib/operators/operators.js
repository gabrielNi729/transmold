"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.op = op;
exports.addOp = addOp;
exports.mapOp = mapOp;
exports.opsToRespond = opsToRespond;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _types = _interopRequireDefault(require("../constants/types/types"));

var _contextsTemplate = _interopRequireDefault(require("../constants/texts/contexts-template"));

var _mysqlNumber = _interopRequireDefault(require("./mysql/mysql-number"));

var _mysqlString = _interopRequireDefault(require("./mysql/mysql-string"));

var _mysqlBoolean = _interopRequireDefault(require("./mysql/mysql-boolean"));

var _mysqlDate = _interopRequireDefault(require("./mysql/mysql-date"));

var _mysqlMonth = _interopRequireDefault(require("./mysql/mysql-month"));

var _mysqlYear = _interopRequireDefault(require("./mysql/mysql-year"));

var _mysqlTime = _interopRequireDefault(require("./mysql/mysql-time"));

var _mysqlGeography = _interopRequireDefault(require("./mysql/mysql-geography"));

var _mysqlAggregate = _interopRequireDefault(require("./mysql/mysql-aggregate"));

var _mysqlConvert = _interopRequireDefault(require("./mysql/mysql-convert"));

var operatorContexts = {};
operatorContexts[_contextsTemplate["default"].MYSQL] = [].concat((0, _toConsumableArray2["default"])(_mysqlNumber["default"].ops), (0, _toConsumableArray2["default"])(_mysqlString["default"].ops), (0, _toConsumableArray2["default"])(_mysqlBoolean["default"].ops), (0, _toConsumableArray2["default"])(_mysqlDate["default"].ops), (0, _toConsumableArray2["default"])(_mysqlMonth["default"].ops), (0, _toConsumableArray2["default"])(_mysqlYear["default"].ops), (0, _toConsumableArray2["default"])(_mysqlTime["default"].ops), (0, _toConsumableArray2["default"])(_mysqlGeography["default"].ops), (0, _toConsumableArray2["default"])(_mysqlConvert["default"].ops), (0, _toConsumableArray2["default"])(_mysqlAggregate["default"].ops));
var activeContext = '';
var operators = [];
var operatorsList = [];
var operatorsMap = {};
var operatorsByAlias = {};
var operatorsByResultDataType = {};
var operatorsToRespondDataType = {};
var operatorsCustomized = [];
activateContext(_contextsTemplate["default"].MYSQL);

function getContexts() {
  return operatorContexts;
}

function getActiveContext() {
  return activeContext;
}

function activateContext(context) {
  if (operatorContexts[context]) {
    operators = [];
    operatorsList = [];
    operatorsMap = {};
    operatorsByAlias = {};
    operatorsByResultDataType = {};
    operatorsToRespondDataType = {};
    operatorsCustomized = [];
    activeContext = context;
    operators = operatorContexts[context];
    operators.forEach(function (op) {
      return linkOp(op);
    });
  } else {
    console.error("operator context: [".concat(context, "] does not exist"));
  }
}

function addOp(op) {
  if (!operatorContexts[op.getContext()]) {
    operatorContexts[op.getContext()] = [];
  }

  operatorContexts[op.getContext()].push(op);

  if (op.getContext() === activeContext) {
    linkOp(op);
  }
}

function mapOp(op) {
  if (op.getContext() === activeContext) {
    if (op.getAlias() !== null && op.getAlias() !== undefined && op.getAlias() !== '') {
      if (operatorsByAlias[op.getAlias()]) {
        console.error("duplicate template alias: ".concat(op.getAlias()));
      } else {
        operatorsByAlias[op.getAlias()] = op;
      }
    }
  }
}

function linkOp(op) {
  operatorsList.push(op);

  if (operatorsMap[op.getId()]) {
    console.error("duplicate template id: ".concat(op.getId()));
  } else {
    operatorsMap[op.getId()] = op;
  }

  mapOp(op);
  var resultDataType = op.getResultDataType();

  if (!operatorsByResultDataType[resultDataType]) {
    operatorsByResultDataType[resultDataType] = [];
  }

  operatorsByResultDataType[resultDataType].push(op);
  var firstParam = op.getFirstParam();

  if (!operatorsToRespondDataType[firstParam.getDataType()]) {
    operatorsToRespondDataType[firstParam.getDataType()] = [];
  }

  operatorsToRespondDataType[firstParam.getDataType()].push(op);

  if (op.isCustomized()) {
    operatorsCustomized.push(op);
  }
}

function op(alias) {
  if (operatorsByAlias[alias]) {
    return operatorsByAlias[alias];
  } else {
    console.error("template of alias: ".concat(alias, " does not exist"));
    return null;
  }
}

function opById(id) {
  if (operatorsMap[id]) {
    return operatorsMap[id];
  } else {
    console.error("template of id: ".concat(id, " does not exist"));
    return null;
  }
}

function opsList() {
  return operatorsList;
}

function opsByResult(dataType) {
  if (_types["default"].isLegalDataType(dataType)) {
    return operatorsByResultDataType[dataType];
  } else {
    console.error("data type: ".concat(dataType, " does not exist"));
    return null;
  }
}

function opsToRespond(dataType) {
  if (_types["default"].isLegalDataType(dataType)) {
    return (operatorsToRespondDataType[dataType] || []).concat(operatorsToRespondDataType[_types["default"].DATA.UNCERTAIN] || []);
  } else {
    console.error("data type: ".concat(dataType, " does not exist"));
    return null;
  }
}

function opsCustomized() {
  return operatorsCustomized;
}

var _default = {
  getContexts: getContexts,
  getActiveContext: getActiveContext,
  activateContext: activateContext,
  opById: opById,
  opsList: opsList,
  opsByResult: opsByResult,
  opsToRespond: opsToRespond,
  opsCustomized: opsCustomized
};
exports["default"] = _default;