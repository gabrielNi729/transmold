'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('../../constants/types/types');

var _types2 = _interopRequireDefault(_types);

var _contextsTemplate = require('../../constants/texts/contexts-template');

var _contextsTemplate2 = _interopRequireDefault(_contextsTemplate);

var _DefOperatorTemplate = require('../../models/DefOperatorTemplate');

var _DefOperatorParameter = require('../../models/DefOperatorParameter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ops = [new _DefOperatorTemplate.DefOperatorTemplate({
    id: 8000,
    name: 'sum',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'sum($1)',
    templateCode: 'sum($1)',
    resultDataType: _types2.default.DATA.NUMBER,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 8001,
    name: 'avg',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'avg($1)',
    templateCode: 'avg($1)',
    resultDataType: _types2.default.DATA.NUMBER,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 8002,
    name: 'min',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'min($1)',
    templateCode: 'min($1)',
    resultDataType: '$1',
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.UNCERTAIN })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 8003,
    name: 'max',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'max($1)',
    templateCode: 'max($1)',
    resultDataType: '$1',
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.UNCERTAIN })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 8004,
    name: 'count',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'count($1)',
    templateCode: 'count($1)',
    resultDataType: _types2.default.DATA.NUMBER,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.UNCERTAIN })
    }
})];

exports.default = {
    ops: ops
};