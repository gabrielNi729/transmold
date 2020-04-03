'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _InstanceExpression = require('../models/InstanceExpression');

var _MetadataField = require('../models/MetadataField');

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

var _operators = require('../operators/operators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var respondingOperators = 'resops';

_MetadataField.MetadataField.prototype[respondingOperators] = function () {
    return (0, _operators.opsToRespond)(this.getDataType());
};

_InstanceExpression.InstanceExpression.prototype[respondingOperators] = function () {
    return (0, _operators.opsToRespond)(this.getResultDataType());
};

if (!String.prototype[respondingOperators]) {
    String.prototype[respondingOperators] = function () {
        return (0, _operators.opsToRespond)(_types2.default.identifyDataType(this));
    };
}

if (!Number.prototype[respondingOperators]) {
    Number.prototype[respondingOperators] = function () {
        return (0, _operators.opsToRespond)(_types2.default.DATA.NUMBER);
    };
}

if (!Boolean.prototype[respondingOperators]) {
    Boolean.prototype[respondingOperators] = function () {
        return (0, _operators.opsToRespond)(type.DATA.BOOLEAN);
    };
}

exports.default = {};