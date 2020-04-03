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
    id: 300,
    name: 'and',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 and $2',
    templateCode: '$1 and $2',
    resultDataType: _types2.default.DATA.BOOLEAN,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.BOOLEAN }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.BOOLEAN })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 301,
    name: 'or',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 or $2',
    templateCode: '$1 or $2',
    resultDataType: _types2.default.DATA.BOOLEAN,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.BOOLEAN }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.BOOLEAN })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 302,
    name: 'not',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'not $1',
    templateCode: 'not $1',
    resultDataType: _types2.default.DATA.BOOLEAN,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.BOOLEAN })
    }
})];

exports.default = {
    ops: ops
};