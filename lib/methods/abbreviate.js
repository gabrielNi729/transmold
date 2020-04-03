'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abbreviate = 'abbr';

if (!String.prototype[abbreviate]) {
    String.prototype[abbreviate] = function () {
        switch (this) {
            case _types2.default.INPUT.CONSTANT:
                return 'Const';
            case _types2.default.INPUT.ENUMERATE:
                return 'Enum';
            case _types2.default.INPUT.VARIABLE:
                return 'Var';
            case _types2.default.INPUT.INSTANCE:
                return 'Inst';
            default:
                return this;
        }
    };
}

exports.default = {};