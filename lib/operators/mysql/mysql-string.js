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
    id: 200,
    name: 'concat',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 concat $2',
    templateCode: 'concat($1,$2)',
    resultDataType: _types2.default.DATA.STRING,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 201,
    name: 'concat3',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 concat $2 concat $3',
    templateCode: 'concat($1,$2,$3)',
    resultDataType: _types2.default.DATA.STRING,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $3: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 202,
    name: 'substr',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 substring from $2',
    templateCode: 'substring($1,$2)',
    resultDataType: _types2.default.DATA.STRING,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER, inputTypes: [_types2.default.INPUT.CONSTANT] })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 203,
    name: 'subfix',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 substring from $2 by length $3',
    templateCode: 'substring($1,$2,$3)',
    resultDataType: _types2.default.DATA.STRING,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER, inputTypes: [_types2.default.INPUT.CONSTANT] }),
        $3: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER, inputTypes: [_types2.default.INPUT.CONSTANT] })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 2000,
    name: '=',
    alias: '=.str',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 = $2',
    templateCode: '$1=$2',
    resultDataType: _types2.default.DATA.BOOLEAN,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING })
    }
}), new _DefOperatorTemplate.DefOperatorTemplate({
    id: 2001,
    name: '≠',
    alias: '≠.str',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: '$1 ≠ $2',
    templateCode: '$1≠$2',
    resultDataType: _types2.default.DATA.BOOLEAN,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING }),
        $2: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.STRING })
    }
})];

exports.default = {
    ops: ops
};