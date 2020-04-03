'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _typesData = require('./types-data');

var _typesData2 = _interopRequireDefault(_typesData);

var _typesDistribute = require('./types-distribute');

var _typesDistribute2 = _interopRequireDefault(_typesDistribute);

var _typesInput = require('./types-input');

var _typesInput2 = _interopRequireDefault(_typesInput);

var _typesRegular = require('./types-regular');

var _typesRegular2 = _interopRequireDefault(_typesRegular);

var _InstanceExpression = require('../../models/InstanceExpression');

var _MetadataField = require('../../models/MetadataField');

var _MetadataEnum = require('../../models/MetadataEnum');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setTypesData = new _set2.default();

for (var t in _typesData2.default) {
    setTypesData.add(_typesData2.default[t]);
}

function isLegalDataType(type) {
    return setTypesData.has(type);
}

function isUncertainDataType(type) {
    return type === _typesData2.default.UNCERTAIN;
}

var setTypesInput = new _set2.default();

for (var _t in _typesInput2.default) {
    setTypesInput.add(_typesInput2.default[_t]);
}

function isLegalInputType(type) {
    return setTypesInput.has(type);
}

function identifyInputType(content) {
    if (content instanceof _InstanceExpression.InstanceExpression) {
        return _typesInput2.default.INSTANCE;
    } else if (content instanceof _MetadataField.MetadataField) {
        return _typesInput2.default.VARIABLE;
    } else if (content instanceof _MetadataEnum.MetadataEnum) {
        return _typesInput2.default.ENUMERATE;
    } else {
        return _typesInput2.default.CONSTANT;
    }
}

var setTypesDistribute = new _set2.default();

for (var _t2 in _typesDistribute2.default) {
    setTypesDistribute.add(_typesDistribute2.default[_t2]);
}

function isLegalDistributeType(type) {
    return setTypesDistribute.has(type);
}

var mapTypesRegular = new _map2.default();

for (var _t3 in _typesRegular2.default) {
    if (_typesData2.default[_t3]) {
        mapTypesRegular.set(_typesData2.default[_t3], new RegExp(_typesRegular2.default[_t3]));
    } else {
        mapTypesRegular.set(_t3.toLowerCase(), new RegExp(_typesRegular2.default[_t3]));
    }
}

function getRegExp(type) {
    if (mapTypesRegular.has(type)) {
        return mapTypesRegular.get(type);
    } else {
        console.error('no such regular type: ' + type);
        return null;
    }
}

function regTest(type, content) {
    if (type === _typesData2.default.UNCERTAIN) {
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

    if (regTest(_typesData2.default.NUMBER, content)) {
        return _typesData2.default.NUMBER;
    } else if (regTest(_typesData2.default.BOOLEAN, content)) {
        return _typesData2.default.BOOLEAN;
    } else if (regTest(_typesData2.default.DATE, content)) {
        return _typesData2.default.DATE;
    } else if (regTest(_typesData2.default.MONTH, content)) {
        return _typesData2.default.MONTH;
    } else if (regTest(_typesData2.default.YEAR, content)) {
        return _typesData2.default.YEAR;
    } else if (regTest(_typesData2.default.TIME, content)) {
        return _typesData2.default.TIME;
    } else if (regTest(_typesData2.default.GEOGRAPHY, content)) {
        return _typesData2.default.GEOGRAPHY;
    } else if (regTest(_typesData2.default.STRING, content)) {
        return _typesData2.default.STRING;
    }
    return _typesData2.default.UNCERTAIN;
}

exports.default = {

    DATA: _typesData2.default,
    DISTRIBUTE: _typesDistribute2.default,
    INPUT: _typesInput2.default,
    REGS: _typesRegular2.default,

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