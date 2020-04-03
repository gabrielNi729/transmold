'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.opsToRespond = exports.mapOp = exports.addOp = exports.op = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

var _contextsTemplate = require('../constants/texts/contexts-template');

var _contextsTemplate2 = _interopRequireDefault(_contextsTemplate);

var _mysqlNumber = require('./mysql/mysql-number');

var _mysqlNumber2 = _interopRequireDefault(_mysqlNumber);

var _mysqlString = require('./mysql/mysql-string');

var _mysqlString2 = _interopRequireDefault(_mysqlString);

var _mysqlBoolean = require('./mysql/mysql-boolean');

var _mysqlBoolean2 = _interopRequireDefault(_mysqlBoolean);

var _mysqlDate = require('./mysql/mysql-date');

var _mysqlDate2 = _interopRequireDefault(_mysqlDate);

var _mysqlMonth = require('./mysql/mysql-month');

var _mysqlMonth2 = _interopRequireDefault(_mysqlMonth);

var _mysqlYear = require('./mysql/mysql-year');

var _mysqlYear2 = _interopRequireDefault(_mysqlYear);

var _mysqlTime = require('./mysql/mysql-time');

var _mysqlTime2 = _interopRequireDefault(_mysqlTime);

var _mysqlGeography = require('./mysql/mysql-geography');

var _mysqlGeography2 = _interopRequireDefault(_mysqlGeography);

var _mysqlAggregate = require('./mysql/mysql-aggregate');

var _mysqlAggregate2 = _interopRequireDefault(_mysqlAggregate);

var _mysqlConvert = require('./mysql/mysql-convert');

var _mysqlConvert2 = _interopRequireDefault(_mysqlConvert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operatorContexts = {};

operatorContexts[_contextsTemplate2.default.MYSQL] = [].concat((0, _toConsumableArray3.default)(_mysqlNumber2.default.ops), (0, _toConsumableArray3.default)(_mysqlString2.default.ops), (0, _toConsumableArray3.default)(_mysqlBoolean2.default.ops), (0, _toConsumableArray3.default)(_mysqlDate2.default.ops), (0, _toConsumableArray3.default)(_mysqlMonth2.default.ops), (0, _toConsumableArray3.default)(_mysqlYear2.default.ops), (0, _toConsumableArray3.default)(_mysqlTime2.default.ops), (0, _toConsumableArray3.default)(_mysqlGeography2.default.ops), (0, _toConsumableArray3.default)(_mysqlConvert2.default.ops), (0, _toConsumableArray3.default)(_mysqlAggregate2.default.ops));

var activeContext = '';
var operators = [];
var operatorsList = [];
var operatorsMap = {};
var operatorsByAlias = {};
var operatorsByResultDataType = {};
var operatorsToRespondDataType = {};
var operatorsCustomized = [];

activateContext(_contextsTemplate2.default.MYSQL);

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
        console.error('operator context: [' + context + '] does not exist');
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
                console.error('duplicate template alias: ' + op.getAlias());
            } else {
                operatorsByAlias[op.getAlias()] = op;
            }
        }
    }
}

function linkOp(op) {

    operatorsList.push(op);

    if (operatorsMap[op.getId()]) {
        console.error('duplicate template id: ' + op.getId());
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
        console.error('template of alias: ' + alias + ' does not exist');
        return null;
    }
}

function opById(id) {
    if (operatorsMap[id]) {
        return operatorsMap[id];
    } else {
        console.error('template of id: ' + id + ' does not exist');
        return null;
    }
}

function opsList() {
    return operatorsList;
}

function opsByResult(dataType) {
    if (_types2.default.isLegalDataType(dataType)) {
        return operatorsByResultDataType[dataType];
    } else {
        console.error('data type: ' + dataType + ' does not exist');
        return null;
    }
}

function opsToRespond(dataType) {
    if (_types2.default.isLegalDataType(dataType)) {
        return (operatorsToRespondDataType[dataType] || []).concat(operatorsToRespondDataType[_types2.default.DATA.UNCERTAIN] || []);
    } else {
        console.error('data type: ' + dataType + ' does not exist');
        return null;
    }
}

function opsCustomized() {
    return operatorsCustomized;
}

exports.op = op;
exports.addOp = addOp;
exports.mapOp = mapOp;
exports.opsToRespond = opsToRespond;
exports.default = {
    getContexts: getContexts,
    getActiveContext: getActiveContext,
    activateContext: activateContext,
    opById: opById,
    opsList: opsList,
    opsByResult: opsByResult,
    opsToRespond: opsToRespond,
    opsCustomized: opsCustomized
};