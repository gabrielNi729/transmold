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
    id: 9000,
    name: 'string',
    context: _contextsTemplate2.default.MYSQL,
    templateDisplay: 'string($1)',
    templateCode: 'cast($1 as char)',
    resultDataType: _types2.default.DATA.STRING,
    params: {
        $1: new _DefOperatorParameter.DefOperatorParameter({ dataType: _types2.default.DATA.NUMBER })
    }
})];

exports.default = {
    ops: ops
};