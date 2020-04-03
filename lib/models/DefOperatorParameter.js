'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefOperatorParameter = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _types = require('../constants/types/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefOperatorParameter = exports.DefOperatorParameter = function () {
    function DefOperatorParameter(_ref) {
        var dataType = _ref.dataType,
            _ref$inputTypes = _ref.inputTypes,
            inputTypes = _ref$inputTypes === undefined ? [] : _ref$inputTypes,
            _ref$regulations = _ref.regulations,
            regulations = _ref$regulations === undefined ? [] : _ref$regulations;
        (0, _classCallCheck3.default)(this, DefOperatorParameter);


        if (DefOperatorParameter.validate.apply(DefOperatorParameter, arguments)) {
            this.templateId = null;
            this.holder = null;
            this.dataType = dataType;
            this.inputTypes = inputTypes.length === 0 ? [_types2.default.INPUT.CONSTANT, _types2.default.INPUT.ENUMERATE, _types2.default.INPUT.VARIABLE, _types2.default.INPUT.INSTANCE] : inputTypes;
            this.regulations = regulations.length === 0 ? [dataType] : regulations;
        }
    }

    (0, _createClass3.default)(DefOperatorParameter, [{
        key: 'getTemplateId',
        value: function getTemplateId() {
            return this.templateId;
        }
    }, {
        key: 'getHolder',
        value: function getHolder() {
            return this.holder;
        }
    }, {
        key: 'getDataType',
        value: function getDataType() {
            return this.dataType;
        }
    }, {
        key: 'getCompatibleInputTypes',
        value: function getCompatibleInputTypes() {
            return this.inputTypes;
        }
    }, {
        key: 'isInputCompatible',
        value: function isInputCompatible(type) {
            if (_types2.default.isLegalInputType(type)) {
                return this.inputTypes.includes(type);
            } else {
                console.error('checking compatibility: input type [' + type + '] does not exist');
            }
        }
    }, {
        key: 'getRegulations',
        value: function getRegulations() {
            return this.regulations;
        }
    }, {
        key: 'setTemplateId',
        value: function setTemplateId(templateId) {
            this.templateId = templateId;
        }
    }, {
        key: 'setHolder',
        value: function setHolder(holder) {
            this.holder = holder;
        }
    }], [{
        key: 'validate',
        value: function validate(_ref2) {
            var dataType = _ref2.dataType,
                _ref2$inputTypes = _ref2.inputTypes,
                inputTypes = _ref2$inputTypes === undefined ? [] : _ref2$inputTypes,
                _ref2$regulations = _ref2.regulations,
                regulations = _ref2$regulations === undefined ? [] : _ref2$regulations;


            var prefix = 'defining parameter';

            if (!_types2.default.isLegalDataType(dataType)) {
                console.error(prefix + ': data type can not be [' + dataType + ']');
                return false;
            }

            if (!inputTypes.every(function (type) {
                return _types2.default.isLegalInputType(type);
            })) {
                console.error(prefix + ': input type does not exist');
                return false;
            }

            if (!regulations.every(function (type) {
                return _types2.default.isLegalDataType(type);
            })) {
                console.error(prefix + ': regular type does not exist');
                return false;
            }

            return true;
        }
    }]);
    return DefOperatorParameter;
}();